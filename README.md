# Release Evaluation Platform for Orchestration, Review & Tracking - REPORT

## Project REPORT

### Structure
- `frontend/` – Static UI for the release testing tracker (HTML, CSS, JS).
- `backend/` – Express + MongoDB API service for releases, AI usage telemetry, and test case data.
- `SYSTEM_DESIGN.md` – Architecture blueprint and deployment considerations.

### Frontend
Open `frontend/index.html` in a browser. The page loads `styles.css` and `app.js` directly without a build step.

### Backend
1. Install dependencies from the `backend` folder:
   ```bash
   cd backend
   npm install
   ```
2. Provide a `.env` file with at least:
   ```
   MONGO_URI=mongodb://localhost:27017/report
   PORT=4000
   ```
3. Start the API:
   ```bash
   npm run dev
   ```

Endpoints:
- `GET /health` – service check
- `GET /api/releases` – list releases
- `POST /api/releases` – create a release payload
- `PATCH /api/releases/:id` – update an existing release
