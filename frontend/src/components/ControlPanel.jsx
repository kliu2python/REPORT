import { useRef } from 'react'

function ControlPanel({ filters, updateFilters, clearFilters, openModal, exportData, handleCsvImport }) {
  const fileInputRef = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      parseCsvData(text)
    }
    reader.readAsText(file)

    // Reset file input
    event.target.value = ''
  }

  const parseCsvData = (text) => {
    const lines = text.split('\n').filter(line => line.trim())

    if (lines.length < 2) {
      alert('CSV file is empty or invalid!')
      return
    }

    // Skip header row
    const dataLines = lines.slice(1)
    const pendingCsvData = []

    dataLines.forEach(line => {
      // Handle CSV parsing - split by comma but respect quoted values
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || []
      const cleanValues = values.map(v => v.replace(/^"|"$/g, '').trim())

      if (cleanValues.length >= 3) {
        const testCase = {
          category: cleanValues[0] || '',
          task: cleanValues[1] || '',
          owner: cleanValues[2] || '',
          rc1: cleanValues[3] || '',
          rc2: cleanValues[4] || '',
          rc3: cleanValues[5] || '',
          rc4: cleanValues[6] || '',
          rc5: cleanValues[7] || '',
          rc6: cleanValues[8] || '',
          mantis: (cleanValues[9] || '').replace(/;/g, ','),
          notes: cleanValues[10] || ''
        }

        pendingCsvData.push(testCase)
      }
    })

    if (pendingCsvData.length === 0) {
      alert('No valid test cases found in CSV!')
      return
    }

    handleCsvImport(pendingCsvData)
  }

  const downloadTemplate = () => {
    const template = `Category,Task,Owner,RC1,RC2,RC3,RC4,RC5,RC6,Mantis,Notes
FortiAuthenticator,Example test case 1,Nirmal,pass,pass,,,,,,"Sample note"
Fortigate,Example test case 2,Shubo,,,,pass,pass,pass,,
FIC Admin Portal,Example test case 3,Kevin,fail,pass,pass,pass,,,1234567,"Bug fixed in RC2"`

    const blob = new Blob([template], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'test_cases_template.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const activeFilterCount = Object.values(filters).filter(v => v !== '').length

  return (
    <div className="controls">
      <div className="control-group">
        <div className="input-wrapper">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            id="search"
            placeholder="Search tasks, owners, categories..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="filterCategory">Category</label>
          <select
            id="filterCategory"
            value={filters.category}
            onChange={(e) => updateFilters({ category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="FortiAuthenticator">FortiAuthenticator</option>
            <option value="FortiAuthenticator HA">FortiAuthenticator HA</option>
            <option value="FIC Admin Portal">FIC Admin Portal</option>
            <option value="FIC Regression Mantis">FIC Regression Mantis</option>
            <option value="Fortitoken">Fortitoken</option>
            <option value="Fortigate">Fortigate</option>
            <option value="Fortigate HA">Fortigate HA</option>
            <option value="Sub User">Sub User</option>
            <option value="SCIM">SCIM</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="filterOwner">Owner</label>
          <select
            id="filterOwner"
            value={filters.owner}
            onChange={(e) => updateFilters({ owner: e.target.value })}
          >
            <option value="">All Owners</option>
            <option value="Nirmal">Nirmal</option>
            <option value="Shubo">Shubo</option>
            <option value="Priya">Priya</option>
            <option value="Kevin">Kevin</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="filterRC">Release Candidate</label>
          <select
            id="filterRC"
            value={filters.rc}
            onChange={(e) => updateFilters({ rc: e.target.value })}
          >
            <option value="">All RCs</option>
            <option value="RC1">RC1</option>
            <option value="RC2">RC2</option>
            <option value="RC3">RC3</option>
            <option value="RC4">RC4</option>
            <option value="RC5">RC5</option>
            <option value="RC6">RC6</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="filterStatus">Status</label>
          <select
            id="filterStatus"
            value={filters.status}
            onChange={(e) => updateFilters({ status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="button-group">
        <button className="btn-secondary" onClick={clearFilters}>
          <span>Clear {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
        </button>
        <button className="btn-primary" onClick={() => openModal('addTestCase')}>
          <span>+ Add Test Case</span>
        </button>
        <button className="btn-secondary" onClick={() => fileInputRef.current?.click()}>
          <span>📤 Upload CSV</span>
        </button>
        <button className="btn-secondary" onClick={downloadTemplate}>
          <span>⬇ Template</span>
        </button>
        <button className="btn-secondary" onClick={() => openModal('columnConfig')}>
          <span>⚙ Configure Columns</span>
        </button>
        <button className="btn-ai" onClick={() => openModal('aiAnalysis')}>
          <span>🤖 AI Analysis</span>
        </button>
        <button className="btn-primary" onClick={() => openModal('report')}>
          <span>📄 Generate Report</span>
        </button>
        <button className="btn-secondary" onClick={() => openModal('history')}>
          <span>📊 History</span>
        </button>
        <button className="btn-secondary" onClick={exportData}>
          <span>💾 Export</span>
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept=".csv"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
    </div>
  )
}

export default ControlPanel
