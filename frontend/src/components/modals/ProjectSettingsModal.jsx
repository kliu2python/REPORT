import { useState } from 'react'

function ProjectSettingsModal({ settings, onClose, onSave }) {
  const [formData, setFormData] = useState(settings)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⚙️ Project Settings</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="e.g., Release Testing Tracker"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectSubtitle">Project Subtitle</label>
              <input
                type="text"
                id="projectSubtitle"
                name="projectSubtitle"
                value={formData.projectSubtitle}
                onChange={handleChange}
                placeholder="e.g., Comprehensive testing management system"
              />
            </div>

            <div className="form-group">
              <label htmlFor="organizationName">Organization Name</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="e.g., Your Organization"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bugTrackerUrl">Bug Tracker Base URL</label>
              <input
                type="text"
                id="bugTrackerUrl"
                name="bugTrackerUrl"
                value={formData.bugTrackerUrl}
                onChange={handleChange}
                placeholder="e.g., https://yourbugtracker.com/view?id="
              />
              <small style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                This URL will be used to generate bug links. The bug ID will be appended to this URL.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="defaultItemsPerPage">Default Items Per Page</label>
              <select
                id="defaultItemsPerPage"
                name="defaultItemsPerPage"
                value={formData.defaultItemsPerPage}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectSettingsModal
