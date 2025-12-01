function ArchitectureSection() {
  return (
    <section className="architecture-section" aria-label="Backend blueprint">
      <div className="architecture-header">
        <div className="architecture-title">
          <h2>Mongo-backed, AI-aware service layer</h2>
          <span>Purpose-built APIs for release test tracking, AI usage metering, and identity with auditability.</span>
        </div>
        <div className="pill">v1 design</div>
      </div>
      <div className="architecture-grid">
        <div className="architecture-card">
          <h4>Data platform</h4>
          <ul className="blueprint-list">
            <li><span className="chip">MongoDB</span>Document-first schemas for <strong>users</strong>, <strong>testSuites</strong>, <strong>testRuns</strong>, <strong>aiUsageLogs</strong>, <strong>reports</strong>, and <strong>auditEvents</strong>.</li>
            <li><span className="chip">Indexes</span>Compound keys on <code>owner+category</code>, <code>rc</code>, and <code>createdAt</code> for quick slicing.</li>
            <li><span className="chip">Retention</span>TTL on usage logs and sessions; soft-deletes on tests with history snapshots.</li>
          </ul>
        </div>
        <div className="architecture-card">
          <h4>Service surface</h4>
          <ul className="blueprint-list">
            <li><span className="chip">Release API</span>CRUD for suites, cases, RC status updates, CSV ingest, and export.</li>
            <li><span className="chip">Metrics</span>Aggregate pass-rate endpoints and trend deltas per RC and owner.</li>
            <li><span className="chip">Report</span>Async job to prepare AI-ready summaries and deliver signed downloads.</li>
          </ul>
        </div>
        <div className="architecture-card">
          <h4>AI & usage governance</h4>
          <ul className="blueprint-list">
            <li><span className="chip">Task binding</span>Each call tagged with user, task ID, RC, tokens, cost, latency.</li>
            <li><span className="chip">Guardrails</span>Prompt templates per task type; role-based quotas and rate limits.</li>
            <li><span className="chip">Observability</span>Central log stream + anomaly alerts for latency or cost spikes.</li>
          </ul>
        </div>
        <div className="architecture-card">
          <h4>Identity & access</h4>
          <ul className="blueprint-list">
            <li><span className="chip">Email/password</span>BCrypt hashes, verification tokens, password resets with cooldown.</li>
            <li><span className="chip">Sessions</span>JWT access + refresh tokens, device binding, and rolling expiry.</li>
            <li><span className="chip">RBAC</span>Roles for viewer/reviewer/admin; audit trail for privileged actions.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureSection
