# Release Testing Tracker - React Frontend

Modern React-based frontend for comprehensive testing management for FortiAuthenticator & FortiGate releases.

## Features

### New React Architecture
- **Component-based structure** with modular, reusable components
- **State management** using React hooks (useState, useEffect)
- **Vite** for fast development and optimized builds
- **Modern ES6+** JavaScript with JSX

### Dynamic Column Configuration
- **Add/Remove RC columns** dynamically through the UI
- **Rename columns** to match your release naming convention (e.g., "RC1" → "v7.4.0")
- **Show/Hide columns** without deleting data
- **Flexible table structure** that adapts to your workflow

### Key Features
- Real-time filtering and search
- Sortable table columns
- CRUD operations for test cases
- CSV import/export
- AI-powered analysis
- Comprehensive report generation
- Release history tracking

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── modals/
│   │   │   ├── AddTestCaseModal.jsx
│   │   │   ├── EditTestCaseModal.jsx
│   │   │   ├── AIAnalysisModal.jsx
│   │   │   ├── HistoryModal.jsx
│   │   │   ├── ReportModal.jsx
│   │   │   └── ColumnConfigModal.jsx    # New: Configure RC columns
│   │   ├── Header.jsx
│   │   ├── OverviewCards.jsx
│   │   ├── ArchitectureSection.jsx
│   │   ├── ControlPanel.jsx
│   │   ├── StatsGrid.jsx
│   │   ├── TestTable.jsx                # Enhanced: Dynamic columns
│   │   └── Notification.jsx
│   ├── data/
│   │   └── testData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Column Configuration

### How to Configure Columns

1. Click the **"⚙ Configure Columns"** button in the control panel
2. In the modal, you can:
   - **Toggle visibility**: Check/uncheck columns to show/hide them
   - **Rename columns**: Click on the column label to edit (e.g., change "RC1" to "v7.4.0")
   - **Add new columns**: Click "Add New RC Column" to add more release candidates
   - **Remove columns**: Click the remove button (requires confirmation)

### Column Features
- Columns can be hidden without losing data
- Renaming columns updates the header display only
- Adding columns automatically adds empty fields to all test cases
- Removing columns permanently deletes that data (with confirmation)

## Development

### Tech Stack
- **React 18.3** - UI library
- **Vite 5.3** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **ESLint** - Code linting

### Component Overview

#### Core Components
- `App.jsx` - Main application component with state management
- `TestTable.jsx` - Dynamic table with configurable columns
- `ControlPanel.jsx` - Filters, search, and action buttons

#### Modal Components
- `ColumnConfigModal.jsx` - Configure which columns to show and their labels
- `AddTestCaseModal.jsx` - Add new test cases with dynamic RC fields
- `EditTestCaseModal.jsx` - Edit existing test cases
- `AIAnalysisModal.jsx` - AI-powered test analysis
- `ReportModal.jsx` - Generate comprehensive reports
- `HistoryModal.jsx` - View release history

### State Management
The app uses React hooks for state management:
- `testData` - All test case data
- `filteredData` - Filtered view based on search/filters
- `columns` - Dynamic column configuration
- `filters` - Current filter values
- `modals` - Modal visibility states

## API Integration

The frontend is configured to proxy API requests to the backend:
- Development: `http://localhost:5000`
- Configured in `vite.config.js`

To connect to a different backend, update the proxy settings in `vite.config.js`.

## CSV Import/Export

### Import Format
```csv
Category,Task,Owner,RC1,RC2,RC3,RC4,RC5,RC6,Mantis,Notes
FortiAuthenticator,Example test,Nirmal,pass,pass,,,,,,"Sample note"
```

### Export
Exports currently displayed (filtered) data with visible columns only.

## Backup Files

The original vanilla JS files have been preserved:
- `index-old.html` - Original HTML file
- `app-old.js` - Original JavaScript file
- `styles.css` - CSS file (now copied to `src/index.css`)

## Future Enhancements

- [ ] Persist column configuration to localStorage
- [ ] Connect to backend API for data persistence
- [ ] Add drag-and-drop column reordering
- [ ] Implement user authentication
- [ ] Add real-time collaboration features
- [ ] Export reports as PDF/Word

## Contributing

When adding new features:
1. Create components in `src/components/`
2. Add modals in `src/components/modals/`
3. Update state management in `App.jsx`
4. Follow the existing component structure

## License

Internal use only - Fortinet Release Testing Team
