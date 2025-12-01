# Release Evaluation Platform for Orchestration, Review & Tracking - REPORT

## Project REPORT

A professional, configurable testing management system built with React and modern web technologies. Track test cases, manage releases, and analyze results across multiple testing cycles.

### ✨ Key Features

#### 🎨 **Project Customization**
- **Configurable Project Settings**: Customize project name, subtitle, organization, and bug tracker URLs
- **Dark Mode Support**: Toggle between dark and light themes with persistent preference
- **Brand Agnostic**: No longer limited to specific products - adaptable to any testing project

#### 📊 **Enhanced Data Management**
- **Pagination**: Navigate large datasets efficiently with customizable items-per-page (10, 25, 50, 100)
- **Bulk Operations**: Select multiple test cases for batch deletion
- **Search Debouncing**: Improved performance with 300ms debounced search
- **Dynamic Columns**: Add and configure release candidate columns on the fly

#### 🎯 **Professional UI/UX**
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Sorting**: Click any column header to sort data ascending/descending
- **Filtering**: Filter by category, owner, RC, status, or search term
- **Visual Feedback**: Animated interactions, loading states, and notifications

#### 📈 **Analytics & Reporting**
- **AI Analysis**: Get intelligent insights about your test results
- **Statistics Dashboard**: Real-time metrics showing pass/fail rates per RC
- **CSV Import/Export**: Bulk import test cases and export filtered results
- **History Tracking**: View past testing cycles and trends

### Structure
- `frontend/` – React-based UI with Vite build system
- `backend/` – Express + MongoDB API service for releases, AI usage telemetry, and test case data
- `SYSTEM_DESIGN.md` – Architecture blueprint and deployment considerations

### Frontend
The frontend is built with React 18 and uses modern hooks for state management.

**Development:**
```bash
cd frontend
npm install
npm run dev
```

**Production Build:**
```bash
npm run build
npm run preview
```

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

### 🚀 New in This Version

1. **Project Settings Modal**: Configure your project's identity and preferences
2. **Pagination Controls**: Navigate through test cases with first/prev/next/last buttons
3. **Bulk Selection**: Checkboxes for selecting and deleting multiple test cases
4. **Dark Mode Toggle**: Switch themes from the header
5. **Improved Performance**: Debounced search reduces unnecessary re-renders
6. **Better Accessibility**: Improved keyboard navigation and screen reader support
