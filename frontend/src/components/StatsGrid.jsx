function StatsGrid({ filteredData, columns }) {
  const calculateStats = (data) => {
    const visibleColumns = columns.filter(col => col.visible).map(col => col.id)
    let passed = 0
    let failed = 0
    let total = 0

    data.forEach(row => {
      visibleColumns.forEach(colId => {
        if (row[colId]) {
          total++
          if (row[colId].toLowerCase().includes('pass')) {
            passed++
          } else if (row[colId].toLowerCase().includes('fail')) {
            failed++
          }
        }
      })
    })

    const passRate = total > 0 ? Math.round((passed / total) * 100) : 0
    const categories = new Set(data.map(row => row.category)).size
    const owners = new Set(data.map(row => row.owner)).size

    return { total: data.length, passed, failed, passRate, categories, owners }
  }

  const stats = calculateStats(filteredData)

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label">Total Tests</div>
        <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>{stats.total}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Pass Rate</div>
        <div className="stat-value" style={{ color: 'var(--success)' }}>{stats.passRate}%</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${stats.passRate}%` }}></div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Total Passed</div>
        <div className="stat-value" style={{ color: 'var(--success)' }}>{stats.passed}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Total Failed</div>
        <div className="stat-value" style={{ color: 'var(--danger)' }}>{stats.failed}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Categories</div>
        <div className="stat-value" style={{ color: 'var(--accent-secondary)' }}>{stats.categories}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Owners</div>
        <div className="stat-value" style={{ color: 'var(--accent-tertiary)' }}>{stats.owners}</div>
      </div>
    </div>
  )
}

export default StatsGrid
