# REPORT Platform Architecture Blueprint

## Goals
- Centralize release test tracking with rich history across RCs.
- Add AI assistance that is accountable (per user, per task) and budget-aware.
- Provide secure email/password authentication with auditable sessions.
- Keep the front end simple to consume the APIs while surfacing live metrics.

## Service Map
- **API Gateway / BFF (Node.js + Express/Fastify)**
  - Terminates auth, rate limits, and forwards to domain services.
  - Response compression, pagination, and consistent error envelopes.
- **Release Service**
  - CRUD for suites, cases, and RC status updates.
  - CSV ingest -> validation -> bulk insert.
  - Aggregations for pass-rate, owner/category breakdowns, and RC deltas.
- **AI Service**
  - Wraps model providers; enriches prompts with task metadata.
  - Writes **aiUsageLogs** for every call with user, taskId, rc, tokens, cost, latency, and model used.
  - Enforces per-role quotas and circuit breakers on latency/cost spikes.
- **Auth Service**
  - Email/password registration, verification emails, password reset with cooldown, and optional MFA hook.
  - Issues short-lived access JWT + refresh tokens; rotates refresh on use; device fingerprinting for anomaly flags.
  - Audit events for login, logout, reset, verification, and RBAC updates.
- **Report Service**
  - Generates AI-ready summaries from testRuns; streams results back through the gateway.
  - Persists rendered artifacts (PDF/Doc) with signed download URLs.
- **Worker Queue (BullMQ/RabbitMQ)**
  - For CSV ingest, report generation, and AI batching so the UI stays responsive.
- **Observability**
  - Structured logs (JSON) shipped to ELK/CloudWatch.
  - Metrics (Prometheus/OpenTelemetry): latency, error rate, AI token burn, login success rate.
  - Alerts on error/latency SLO breaches or cost anomalies.

## MongoDB Data Model
- `users`
  - `email` (unique, indexed), `passwordHash`, `verified`, `roles`, `createdAt`, `lastLoginAt`.
  - `refreshTokens[]` with device metadata + expiry.
- `testSuites`
  - `name`, `product`, `description`, `createdBy`, timestamps.
- `testCases`
  - `suiteId`, `category`, `task`, `owner`, `priority`, `tags`, soft delete flag.
- `testRuns`
  - `testCaseId`, `releaseCandidate`, `status` (pass/fail/pending), `mantisIds[]`, `notes`, `executedAt`, `executedBy`.
  - Index on `(releaseCandidate, status)`, `(owner, releaseCandidate)`, and `(category, releaseCandidate)`.
- `aiUsageLogs`
  - `userId`, `taskId`, `releaseCandidate`, `provider`, `model`, `promptTokens`, `completionTokens`, `cost`, `latencyMs`, `outcome`, `createdAt`.
  - TTL index (e.g., 90 days) for retention.
- `reports`
  - `suiteId`, `releaseCandidate`, `summary`, `pdfUrl`, `docUrl`, `generatedBy`, `generatedAt`, `status`.
- `auditEvents`
  - `actorId`, `action`, `resource`, `ip`, `userAgent`, `createdAt` (immutable).

## API Sketch (REST over HTTPS)
- `POST /auth/register` – email/password signup, send verification token.
- `POST /auth/login` – issue access + refresh tokens; record device metadata.
- `POST /auth/refresh` – rotate refresh tokens; invalidate on logout or anomaly.
- `POST /auth/reset` + `POST /auth/reset/confirm` – password reset with cooldown.
- `GET /tests` – list with filters (category, owner, RC, status, search).
- `POST /tests` / `PATCH /tests/:id` / `DELETE /tests/:id` – manage cases.
- `POST /tests/:id/runs` – append RC status, mantis links, notes.
- `GET /metrics/quality` – pass-rate aggregates by RC, owner, category.
- `POST /imports/csv` – async CSV ingest; returns job id + progress endpoint.
- `POST /reports` – trigger AI-backed report; stream job status.
- `POST /ai/assist` – task-specific prompts; logs usage and enforces quotas/roles.
- `GET /ai/usage` – per-user/per-task usage and cost summaries.

## Authentication Flow
1. User signs up with email/password; password hashed with bcrypt (min 12 cost factor); verification email sent.
2. Login verifies hash, checks `verified`, and compares against lockout/rate-limit windows.
3. Access JWT (15m) + refresh JWT (14d) issued; refresh stored with device info; rotation on every use.
4. Middleware checks role (viewer/reviewer/admin) per route; admin-only for destructive actions and exports.
5. Audit log written for login/logout/role change/reset attempts.

## AI Usage Tracking
- Every AI call is decorated with `userId`, `taskId`, `releaseCandidate`, `model`, `tokens`, `latencyMs`, `cost`, and `prompt template id`.
- Quotas: per-user daily token cap, per-role cost ceiling, burst limit on requests/min.
- Observability: latency histogram, cost per RC, success/failure ratio, anomaly alerts (p95 latency or cost > threshold).
- Redaction: PII stripping before prompt submission; prompt/response truncation for storage.

## Deployment Notes
- Docker-compose with `api`, `worker`, `mongo`, `redis` (queues), and `nginx` as TLS terminator.
- Environments: dev/stage/prod with separate Mongo databases and secrets.
- Backups: Mongo point-in-time snapshots; restore drills monthly.
- Security: HTTPS only, HSTS, CSRF protection on cookie-based flows, and content-security policy for the UI.
