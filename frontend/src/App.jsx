import { useState, useEffect } from 'react'
import Header from './components/Header'
import OverviewCards from './components/OverviewCards'
import ArchitectureSection from './components/ArchitectureSection'
import ControlPanel from './components/ControlPanel'
import StatsGrid from './components/StatsGrid'
import TestTable from './components/TestTable'
import ProjectSelector from './components/ProjectSelector'
import AddTestCaseModal from './components/modals/AddTestCaseModal'
import EditTestCaseModal from './components/modals/EditTestCaseModal'
import AIAnalysisModal from './components/modals/AIAnalysisModal'
import HistoryModal from './components/modals/HistoryModal'
import ReportModal from './components/modals/ReportModal'
import ColumnConfigModal from './components/modals/ColumnConfigModal'
import ProjectSettingsModal from './components/modals/ProjectSettingsModal'
import ProjectManagementModal from './components/modals/ProjectManagementModal'
import Notification from './components/Notification'
import { testDataInitial } from './data/testData'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

function App() {
  // Multi-project state
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState(null)
  const [loadingProjects, setLoadingProjects] = useState(true)

  // Dark mode with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  // State management
  const [testData, setTestData] = useState(testDataInitial)
  const [filteredData, setFilteredData] = useState(testDataInitial)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    owner: '',
    rc: '',
    status: ''
  })

  // Bulk selection
  const [selectedRows, setSelectedRows] = useState([])

  // Column configuration - dynamic RC columns
  const [columns, setColumns] = useState([
    { id: 'rc1', label: 'RC1', visible: true, editable: true },
    { id: 'rc2', label: 'RC2', visible: true, editable: true },
    { id: 'rc3', label: 'RC3', visible: true, editable: true },
    { id: 'rc4', label: 'RC4', visible: true, editable: true },
    { id: 'rc5', label: 'RC5', visible: true, editable: true },
    { id: 'rc6', label: 'RC6', visible: true, editable: true },
  ])

  // Modal states
  const [modals, setModals] = useState({
    addTestCase: false,
    editTestCase: false,
    aiAnalysis: false,
    history: false,
    report: false,
    columnConfig: false,
    projectSettings: false,
    projectManagement: false
  })

  const [editingTest, setEditingTest] = useState(null)
  const [notification, setNotification] = useState(null)

  // Fetch projects on mount
  useEffect(() => {
    fetchProjects()
  }, [])

  // Load project data when current project changes
  useEffect(() => {
    if (currentProject) {
      loadProjectData(currentProject)
    }
  }, [currentProject])

  // Save dark mode to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [darkMode])

  // Apply filters whenever filters or testData changes
  useEffect(() => {
    applyFilters()
  }, [filters, testData])

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects`)
      const data = await response.json()
      setProjects(data)

      // Load last selected project or first project
      const lastProjectId = localStorage.getItem('lastProjectId')
      const projectToLoad = lastProjectId
        ? data.find(p => p._id === lastProjectId) || data[0]
        : data[0]

      if (projectToLoad) {
        setCurrentProject(projectToLoad)
      } else if (data.length === 0) {
        // No projects exist, show empty state
        setLoadingProjects(false)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
      showNotification('Error loading projects')
      setLoadingProjects(false)
    }
  }

  const loadProjectData = (project) => {
    // Load project settings
    if (project.settings) {
      // Settings are now part of the project in the database
    }

    // Load project columns
    if (project.columns && project.columns.length > 0) {
      setColumns(project.columns)
    }

    // Load test data from localStorage for this project
    const savedData = localStorage.getItem(`testData_${project._id}`)
    if (savedData) {
      setTestData(JSON.parse(savedData))
    } else {
      setTestData([])
    }

    // Save last project selection
    localStorage.setItem('lastProjectId', project._id)
    setLoadingProjects(false)
  }

  // Save test data to localStorage whenever it changes
  useEffect(() => {
    if (currentProject) {
      localStorage.setItem(`testData_${currentProject._id}`, JSON.stringify(testData))
    }
  }, [testData, currentProject])

  const applyFilters = () => {
    let filtered = testData.filter(row => {
      const matchesSearch = !filters.search ||
        row.task.toLowerCase().includes(filters.search.toLowerCase()) ||
        row.category.toLowerCase().includes(filters.search.toLowerCase()) ||
        row.owner.toLowerCase().includes(filters.search.toLowerCase())

      const matchesCategory = !filters.category || row.category === filters.category
      const matchesOwner = !filters.owner || row.owner === filters.owner

      let matchesRC = true
      if (filters.rc) {
        const rcKey = filters.rc.toLowerCase()
        matchesRC = row[rcKey] !== ''
      }

      let matchesStatus = true
      if (filters.status) {
        const visibleColumns = columns.filter(col => col.visible).map(col => col.id)
        matchesStatus = visibleColumns.some(colId =>
          row[colId] && row[colId].toLowerCase().includes(filters.status)
        )
      }

      return matchesSearch && matchesCategory && matchesOwner && matchesRC && matchesStatus
    })

    setFilteredData(filtered)
  }

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters })
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      owner: '',
      rc: '',
      status: ''
    })
  }

  const openModal = (modalName, data = null) => {
    if (modalName === 'editTestCase' && data !== null) {
      setEditingTest(data)
    }
    setModals({ ...modals, [modalName]: true })
  }

  const closeModal = (modalName) => {
    setModals({ ...modals, [modalName]: false })
    if (modalName === 'editTestCase') {
      setEditingTest(null)
    }
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000)
  }

  const addTestCase = (newTestCase) => {
    setTestData([...testData, newTestCase])
    closeModal('addTestCase')
    showNotification('Test case added successfully!')
  }

  const updateTestCase = (index, updatedTestCase) => {
    const newTestData = [...testData]
    newTestData[index] = updatedTestCase
    setTestData(newTestData)
    closeModal('editTestCase')
    showNotification('Test case updated successfully!')
  }

  const deleteTestCase = (index) => {
    if (confirm('Are you sure you want to delete this test case?')) {
      const newTestData = testData.filter((_, i) => i !== index)
      setTestData(newTestData)
      showNotification('Test case deleted successfully!')
    }
  }

  const handleCsvImport = (csvData) => {
    setTestData([...testData, ...csvData])
    showNotification(`Successfully imported ${csvData.length} test cases!`)
  }

  const exportData = () => {
    const visibleColumns = columns.filter(col => col.visible)
    const headers = ['Category', 'Task', 'Owner', ...visibleColumns.map(col => col.label), 'Mantis', 'Notes']
    const rows = filteredData.map(row => [
      row.category,
      `"${row.task.replace(/"/g, '""')}"`,
      row.owner,
      ...visibleColumns.map(col => row[col.id] || ''),
      row.mantis || '',
      `"${(row.notes || '').replace(/"/g, '""')}"`
    ])

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentProject?.name || 'project'}-testing-data.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    showNotification('Data exported successfully!')
  }

  const updateColumns = async (newColumns) => {
    setColumns(newColumns)

    // Update project in database
    if (currentProject) {
      try {
        await fetch(`${API_URL}/api/projects/${currentProject._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ columns: newColumns })
        })
      } catch (error) {
        console.error('Error updating columns:', error)
      }
    }

    closeModal('columnConfig')
    showNotification('Column configuration updated!')
  }

  const addColumn = () => {
    const newId = `rc${columns.length + 1}`
    const newColumns = [...columns, {
      id: newId,
      label: `RC${columns.length + 1}`,
      visible: true,
      editable: true
    }]
    setColumns(newColumns)

    // Add the new column to all test data with empty value
    const updatedTestData = testData.map(test => ({
      ...test,
      [newId]: ''
    }))
    setTestData(updatedTestData)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const saveProjectSettings = async (newSettings) => {
    if (!currentProject) return

    try {
      const response = await fetch(`${API_URL}/api/projects/${currentProject._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings: newSettings })
      })

      if (response.ok) {
        const updatedProject = await response.json()
        setCurrentProject(updatedProject)
        setProjects(projects.map(p => p._id === updatedProject._id ? updatedProject : p))
        closeModal('projectSettings')
        showNotification('Project settings saved successfully!')
      }
    } catch (error) {
      console.error('Error saving project settings:', error)
      showNotification('Error saving project settings')
    }
  }

  const handleSelectRow = (rowId) => {
    setSelectedRows(prev => {
      if (prev.includes(rowId)) {
        return prev.filter(id => id !== rowId)
      } else {
        return [...prev, rowId]
      }
    })
  }

  const handleSelectAll = (rowIds, checked) => {
    if (checked) {
      setSelectedRows(prev => [...new Set([...prev, ...rowIds])])
    } else {
      setSelectedRows(prev => prev.filter(id => !rowIds.includes(id)))
    }
  }

  const bulkDelete = () => {
    if (selectedRows.length === 0) {
      showNotification('No rows selected!')
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedRows.length} test case(s)?`)) {
      const newTestData = testData.filter(test => {
        const rowId = `${test.category}-${test.task}-${test.owner}`
        return !selectedRows.includes(rowId)
      })
      setTestData(newTestData)
      setSelectedRows([])
      showNotification(`Successfully deleted ${selectedRows.length} test case(s)!`)
    }
  }

  const clearSelection = () => {
    setSelectedRows([])
  }

  // Project management functions
  const handleSelectProject = (project) => {
    setCurrentProject(project)
  }

  const handleSaveProject = async (projectData, editingId) => {
    try {
      if (editingId) {
        // Update existing project
        const response = await fetch(`${API_URL}/api/projects/${editingId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        })

        if (response.ok) {
          const updatedProject = await response.json()
          setProjects(projects.map(p => p._id === editingId ? updatedProject : p))
          if (currentProject?._id === editingId) {
            setCurrentProject(updatedProject)
          }
          showNotification('Project updated successfully!')
        }
      } else {
        // Create new project
        const response = await fetch(`${API_URL}/api/projects`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectData)
        })

        if (response.ok) {
          const newProject = await response.json()
          setProjects([...projects, newProject])
          setCurrentProject(newProject)
          showNotification('Project created successfully!')
        }
      }
      await fetchProjects()
    } catch (error) {
      console.error('Error saving project:', error)
      showNotification('Error saving project')
    }
  }

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch(`${API_URL}/api/projects/${projectId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        const updatedProjects = projects.filter(p => p._id !== projectId)
        setProjects(updatedProjects)

        // If deleting current project, switch to first available
        if (currentProject?._id === projectId) {
          setCurrentProject(updatedProjects[0] || null)
        }

        showNotification('Project deleted successfully!')
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      showNotification('Error deleting project')
    }
  }

  // Show loading or empty state
  if (loadingProjects) {
    return (
      <div className="app-container">
        <div className="container">
          <div className="empty-state">
            <p>Loading projects...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!currentProject && projects.length === 0) {
    return (
      <div className="app-container">
        <div className="container">
          <div className="empty-state">
            <h2>Welcome to Release Testing Tracker</h2>
            <p>No projects found. Create your first project to get started!</p>
            <button
              className="btn btn-primary"
              onClick={() => openModal('projectManagement')}
            >
              Create Project
            </button>
          </div>
        </div>

        {modals.projectManagement && (
          <ProjectManagementModal
            projects={projects}
            currentProjectId={currentProject?._id}
            onClose={() => closeModal('projectManagement')}
            onSave={handleSaveProject}
            onDelete={handleDeleteProject}
          />
        )}
      </div>
    )
  }

  const projectSettings = currentProject?.settings || {
    projectName: currentProject?.name || 'Release Testing Tracker',
    projectSubtitle: '',
    organizationName: '',
    bugTrackerUrl: 'https://mantis.fortinet.com/bug_view_page.php?bug_id=',
    defaultItemsPerPage: 25
  }

  return (
    <div className="app-container">
      <div className="container">
        {/* Project Selector */}
        <div style={{ marginBottom: '20px' }}>
          <ProjectSelector
            projects={projects}
            currentProject={currentProject}
            onSelectProject={handleSelectProject}
            onManageProjects={() => openModal('projectManagement')}
          />
        </div>

        <Header
          settings={projectSettings}
          onOpenSettings={() => openModal('projectSettings')}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <OverviewCards testData={testData} filteredData={filteredData} columns={columns} />
        <ArchitectureSection />

        {/* Bulk Actions Bar */}
        {selectedRows.length > 0 && (
          <div className="bulk-actions-bar">
            <span className="bulk-selected-count">
              {selectedRows.length} item(s) selected
            </span>
            <div className="bulk-actions-buttons">
              <button className="btn btn-danger" onClick={bulkDelete}>
                Delete Selected
              </button>
              <button className="btn btn-secondary" onClick={clearSelection}>
                Clear Selection
              </button>
            </div>
          </div>
        )}

        <ControlPanel
          filters={filters}
          updateFilters={updateFilters}
          clearFilters={clearFilters}
          openModal={openModal}
          exportData={exportData}
          handleCsvImport={handleCsvImport}
        />
        <StatsGrid filteredData={filteredData} columns={columns} />
        <TestTable
          testData={testData}
          filteredData={filteredData}
          columns={columns}
          openModal={openModal}
          setEditingTest={setEditingTest}
          settings={projectSettings}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
          onSelectAll={handleSelectAll}
        />
      </div>

      {/* Modals */}
      {modals.addTestCase && (
        <AddTestCaseModal
          columns={columns}
          onClose={() => closeModal('addTestCase')}
          onSave={addTestCase}
        />
      )}

      {modals.editTestCase && editingTest !== null && (
        <EditTestCaseModal
          testCase={testData[editingTest]}
          index={editingTest}
          columns={columns}
          onClose={() => closeModal('editTestCase')}
          onSave={updateTestCase}
          onDelete={deleteTestCase}
        />
      )}

      {modals.aiAnalysis && (
        <AIAnalysisModal
          filteredData={filteredData}
          columns={columns}
          onClose={() => closeModal('aiAnalysis')}
        />
      )}

      {modals.history && (
        <HistoryModal onClose={() => closeModal('history')} />
      )}

      {modals.report && (
        <ReportModal
          filteredData={filteredData}
          columns={columns}
          onClose={() => closeModal('report')}
        />
      )}

      {modals.columnConfig && (
        <ColumnConfigModal
          columns={columns}
          onClose={() => closeModal('columnConfig')}
          onSave={updateColumns}
          onAddColumn={addColumn}
        />
      )}

      {modals.projectSettings && (
        <ProjectSettingsModal
          settings={projectSettings}
          onClose={() => closeModal('projectSettings')}
          onSave={saveProjectSettings}
        />
      )}

      {modals.projectManagement && (
        <ProjectManagementModal
          projects={projects}
          currentProjectId={currentProject?._id}
          onClose={() => closeModal('projectManagement')}
          onSave={handleSaveProject}
          onDelete={handleDeleteProject}
        />
      )}

      {/* Notification */}
      {notification && <Notification message={notification} />}
    </div>
  )
}

export default App
