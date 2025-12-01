import { useState } from 'react'

function ColumnConfigModal({ columns, onClose, onSave, onAddColumn }) {
  const [localColumns, setLocalColumns] = useState([...columns])

  const handleToggleVisible = (index) => {
    const newColumns = [...localColumns]
    newColumns[index].visible = !newColumns[index].visible
    setLocalColumns(newColumns)
  }

  const handleRename = (index, newLabel) => {
    const newColumns = [...localColumns]
    newColumns[index].label = newLabel
    setLocalColumns(newColumns)
  }

  const handleRemove = (index) => {
    if (confirm('Are you sure you want to remove this column? This will delete all data in this column from all test cases.')) {
      const newColumns = localColumns.filter((_, i) => i !== index)
      setLocalColumns(newColumns)
    }
  }

  const handleAddColumn = () => {
    const newId = `rc${localColumns.length + 1}`
    const newColumns = [...localColumns, {
      id: newId,
      label: `RC${localColumns.length + 1}`,
      visible: true,
      editable: true
    }]
    setLocalColumns(newColumns)
  }

  const handleSave = () => {
    onSave(localColumns)
  }

  return (
    <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">⚙ Configure RC Columns</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>

        <div style={{ padding: '20px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Customize which RC (Release Candidate) columns are visible in the table and rename them as needed.
          </p>

          <div style={{ marginBottom: '20px' }}>
            <button className="btn-primary" onClick={handleAddColumn}>
              <span>+ Add New RC Column</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {localColumns.map((col, index) => (
              <div
                key={col.id}
                style={{
                  background: 'var(--bg-secondary)',
                  padding: '15px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  border: '1px solid var(--border)'
                }}
              >
                <input
                  type="checkbox"
                  checked={col.visible}
                  onChange={() => handleToggleVisible(index)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <input
                  type="text"
                  value={col.label}
                  onChange={(e) => handleRename(index, e.target.value)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem'
                  }}
                  placeholder="Column label"
                />
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    minWidth: '60px'
                  }}
                >
                  {col.visible ? 'Visible' : 'Hidden'}
                </span>
                {localColumns.length > 1 && (
                  <button
                    className="btn-secondary"
                    onClick={() => handleRemove(index)}
                    style={{ padding: '8px 12px' }}
                  >
                    <span>🗑 Remove</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '30px',
              padding: '15px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid var(--accent-primary)',
              borderRadius: '8px'
            }}
          >
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '8px', fontSize: '0.9rem' }}>
              💡 Tips
            </h4>
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Uncheck columns to hide them from the table view</li>
              <li>Rename columns to match your release naming convention (e.g., "RC1" → "v7.4.0")</li>
              <li>Add new columns for additional release candidates</li>
              <li>Removing a column will delete all data in that column from all test cases</li>
            </ul>
          </div>
        </div>

        <div className="button-group" style={{ marginTop: '24px', padding: '0 20px 20px' }}>
          <button className="btn-primary" onClick={handleSave}>
            <span>Save Configuration</span>
          </button>
          <button className="btn-secondary" onClick={onClose}>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ColumnConfigModal
