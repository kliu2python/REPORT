import { useState } from 'react'

function TestTable({ testData, filteredData, columns, openModal, setEditingTest }) {
  const [sortConfig, setSortConfig] = useState({ column: null, direction: 'asc' })

  const visibleColumns = columns.filter(col => col.visible)

  const getStatusBadge = (status) => {
    if (!status) return <span className="badge badge-pending">—</span>

    const normalizedStatus = status.toLowerCase()
    if (normalizedStatus.includes('pass')) {
      return <span className="badge badge-pass">Pass</span>
    } else if (normalizedStatus.includes('fail')) {
      return <span className="badge badge-fail">Fail</span>
    } else {
      return <span className="badge badge-pending">Pending</span>
    }
  }

  const getMantisLinks = (mantisIds) => {
    if (!mantisIds) return null
    const ids = mantisIds.split(',').map(id => id.trim())
    return ids.map(id => (
      <a
        key={id}
        href={`https://mantis.fortinet.com/bug_view_page.php?bug_id=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mantis-link"
        title={`View Mantis Bug ${id}`}
      >
        🐛 {id}
      </a>
    ))
  }

  const handleEdit = (row) => {
    // Find the original index in testData
    const originalIndex = testData.findIndex(item =>
      item.category === row.category &&
      item.task === row.task &&
      item.owner === row.owner
    )
    setEditingTest(originalIndex)
    openModal('editTestCase', originalIndex)
  }

  const handleSort = (column) => {
    const direction = sortConfig.column === column && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ column, direction })
  }

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.column) return 0

    let aVal = a[sortConfig.column] || ''
    let bVal = b[sortConfig.column] || ''

    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase()
      bVal = bVal.toLowerCase()
    }

    if (sortConfig.direction === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })

  return (
    <div className="data-table-wrapper">
      <div className="table-header">
        <div className="table-title">Test Cases</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Showing <span id="resultCount">{filteredData.length}</span> results
        </div>
      </div>
      <div className="table-container">
        <table id="testTable">
          <thead>
            <tr>
              <th
                className={`sortable ${sortConfig.column === 'category' ? `sorted-${sortConfig.direction}` : ''}`}
                onClick={() => handleSort('category')}
              >
                Category
              </th>
              <th
                className={`sortable ${sortConfig.column === 'task' ? `sorted-${sortConfig.direction}` : ''}`}
                onClick={() => handleSort('task')}
              >
                Task
              </th>
              <th
                className={`sortable ${sortConfig.column === 'owner' ? `sorted-${sortConfig.direction}` : ''}`}
                onClick={() => handleSort('owner')}
              >
                Owner
              </th>
              {visibleColumns.map(col => (
                <th
                  key={col.id}
                  className={`sortable ${sortConfig.column === col.id ? `sorted-${sortConfig.direction}` : ''}`}
                  onClick={() => handleSort(col.id)}
                >
                  {col.label}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={4 + visibleColumns.length}>
                  <div className="empty-state">
                    <div className="empty-state-icon">🔍</div>
                    <h3>No results found</h3>
                    <p>Try adjusting your filters or search criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedData.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.category}</strong></td>
                  <td>
                    {row.task}
                    {row.notes && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        📝 {row.notes}
                      </div>
                    )}
                  </td>
                  <td>
                    <span style={{ color: 'var(--accent-primary)' }}>{row.owner}</span>
                  </td>
                  {visibleColumns.map(col => (
                    <td key={col.id}>{getStatusBadge(row[col.id])}</td>
                  ))}
                  <td>
                    <button className="action-btn" onClick={() => handleEdit(row)}>
                      ✏️ Edit
                    </button>
                    {row.mantis && getMantisLinks(row.mantis)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TestTable
