import { useState } from 'react'

function TestTable({ testData, filteredData, columns, openModal, setEditingTest, settings, selectedRows, onSelectRow, onSelectAll }) {
  const [sortConfig, setSortConfig] = useState({ column: null, direction: 'asc' })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(settings?.defaultItemsPerPage || 25)

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
    const baseUrl = settings?.bugTrackerUrl || 'https://mantis.fortinet.com/bug_view_page.php?bug_id='
    const ids = mantisIds.split(',').map(id => id.trim())
    return ids.map(id => (
      <a
        key={id}
        href={`${baseUrl}${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mantis-link"
        title={`View Bug ${id}`}
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

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = sortedData.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const getRowId = (row) => {
    return `${row.category}-${row.task}-${row.owner}`
  }

  const isRowSelected = (row) => {
    return selectedRows?.includes(getRowId(row))
  }

  const handleRowSelect = (row) => {
    if (onSelectRow) {
      onSelectRow(getRowId(row))
    }
  }

  const handleSelectAllPage = (e) => {
    if (onSelectAll) {
      const pageRowIds = paginatedData.map(row => getRowId(row))
      onSelectAll(pageRowIds, e.target.checked)
    }
  }

  const allPageSelected = paginatedData.length > 0 && paginatedData.every(row => isRowSelected(row))

  return (
    <div className="data-table-wrapper">
      <div className="table-header">
        <div className="table-title">Test Cases</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Showing {startIndex + 1}-{Math.min(endIndex, sortedData.length)} of {sortedData.length} results
        </div>
      </div>
      <div className="table-container">
        <table id="testTable">
          <thead>
            <tr>
              {onSelectRow && (
                <th style={{ width: '50px' }}>
                  <input
                    type="checkbox"
                    checked={allPageSelected}
                    onChange={handleSelectAllPage}
                    title="Select all on this page"
                  />
                </th>
              )}
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
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={4 + visibleColumns.length + (onSelectRow ? 1 : 0)}>
                  <div className="empty-state">
                    <div className="empty-state-icon">🔍</div>
                    <h3>No results found</h3>
                    <p>Try adjusting your filters or search criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => (
                <tr key={index} className={isRowSelected(row) ? 'selected-row' : ''}>
                  {onSelectRow && (
                    <td>
                      <input
                        type="checkbox"
                        checked={isRowSelected(row)}
                        onChange={() => handleRowSelect(row)}
                      />
                    </td>
                  )}
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <div className="pagination-info">
            <label htmlFor="itemsPerPage">Items per page:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="items-per-page-select"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="pagination-buttons">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="pagination-btn"
              title="First page"
            >
              ⏮️
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
              title="Previous page"
            >
              ◀️
            </button>

            <span className="pagination-text">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
              title="Next page"
            >
              ▶️
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
              title="Last page"
            >
              ⏭️
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestTable
