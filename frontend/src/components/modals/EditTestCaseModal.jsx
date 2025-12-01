import { useState } from 'react'

function EditTestCaseModal({ testCase, index, columns, onClose, onSave, onDelete }) {
  const [formData, setFormData] = useState({
    category: testCase.category,
    task: testCase.task,
    owner: testCase.owner,
    mantis: testCase.mantis || '',
    notes: testCase.notes || ''
  })

  const [rcData, setRcData] = useState(() => {
    const initial = {}
    columns.forEach(col => {
      initial[col.id] = testCase[col.id] || ''
    })
    return initial
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedTestCase = {
      ...formData,
      ...rcData
    }
    onSave(index, updatedTestCase)
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleRcChange = (colId, value) => {
    setRcData({ ...rcData, [colId]: value })
  }

  const handleDelete = () => {
    onDelete(index)
    onClose()
  }

  return (
    <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">✏️ Edit Test Case</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              required
            >
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

          <div className="form-group">
            <label>Task Name</label>
            <textarea
              value={formData.task}
              onChange={(e) => handleChange('task', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Owner</label>
            <select
              value={formData.owner}
              onChange={(e) => handleChange('owner', e.target.value)}
              required
            >
              <option value="Nirmal">Nirmal</option>
              <option value="Shubo">Shubo</option>
              <option value="Priya">Priya</option>
              <option value="Kevin">Kevin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Release Candidate Status</label>
            <div className="rc-status-grid">
              {columns.map(col => (
                <div key={col.id}>
                  <label style={{ fontSize: '0.75rem', marginBottom: '4px' }}>{col.label}</label>
                  <select
                    value={rcData[col.id]}
                    onChange={(e) => handleRcChange(col.id, e.target.value)}
                  >
                    <option value="">Not Tested</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Mantis Bug IDs (comma-separated for failures)</label>
            <input
              type="text"
              value={formData.mantis}
              onChange={(e) => handleChange('mantis', e.target.value)}
              placeholder="e.g., 1206493, 1209255"
            />
            <div className="mantis-info-text" style={{ marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Enter Mantis bug IDs for any failed test cases. Multiple IDs can be separated by commas.
            </div>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Additional notes or comments about this test case..."
            />
          </div>

          <div className="button-group" style={{ marginTop: '24px' }}>
            <button type="submit" className="btn-primary">
              <span>Save Changes</span>
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              <span>Cancel</span>
            </button>
            <button type="button" className="btn-secondary" onClick={handleDelete} style={{ marginLeft: 'auto' }}>
              <span>🗑 Delete</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTestCaseModal
