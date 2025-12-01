import { useState, useEffect } from 'react'

function ProjectManagementModal({ projects, onClose, onSave, onDelete, currentProjectId }) {
  const [projectList, setProjectList] = useState(projects)
  const [editingId, setEditingId] = useState(null)
  const [showNewForm, setShowNewForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    settings: {
      projectName: '',
      projectSubtitle: '',
      organizationName: '',
      bugTrackerUrl: '',
      defaultItemsPerPage: 25
    },
    columns: [
      { id: 'rc1', label: 'RC1', visible: true, editable: true },
      { id: 'rc2', label: 'RC2', visible: true, editable: true },
      { id: 'rc3', label: 'RC3', visible: true, editable: true },
      { id: 'rc4', label: 'RC4', visible: true, editable: true },
      { id: 'rc5', label: 'RC5', visible: true, editable: true },
      { id: 'rc6', label: 'RC6', visible: true, editable: true }
    ]
  })

  const handleEdit = (project) => {
    setEditingId(project._id)
    setFormData({
      name: project.name,
      description: project.description || '',
      settings: { ...project.settings },
      columns: project.columns || formData.columns
    })
    setShowNewForm(true)
  }

  const handleCreate = () => {
    setEditingId(null)
    setFormData({
      name: '',
      description: '',
      settings: {
        projectName: '',
        projectSubtitle: '',
        organizationName: '',
        bugTrackerUrl: '',
        defaultItemsPerPage: 25
      },
      columns: [
        { id: 'rc1', label: 'RC1', visible: true, editable: true },
        { id: 'rc2', label: 'RC2', visible: true, editable: true },
        { id: 'rc3', label: 'RC3', visible: true, editable: true },
        { id: 'rc4', label: 'RC4', visible: true, editable: true },
        { id: 'rc5', label: 'RC5', visible: true, editable: true },
        { id: 'rc6', label: 'RC6', visible: true, editable: true }
      ]
    })
    setShowNewForm(true)
  }

  const handleSave = async () => {
    if (!formData.name.trim()) {
      alert('Project name is required')
      return
    }

    const projectData = {
      ...formData,
      settings: {
        ...formData.settings,
        projectName: formData.settings.projectName || formData.name
      }
    }

    await onSave(projectData, editingId)
    setShowNewForm(false)
    setEditingId(null)
  }

  const handleDelete = async (projectId) => {
    if (projectId === currentProjectId) {
      alert('Cannot delete the currently active project')
      return
    }

    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      await onDelete(projectId)
    }
  }

  const handleCancel = () => {
    setShowNewForm(false)
    setEditingId(null)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Manage Projects</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          {!showNewForm ? (
            <>
              <div className="project-management-header">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ➕ Create New Project
                </button>
              </div>

              <div className="project-management-list">
                {projectList.map((project) => (
                  <div key={project._id} className="project-management-item">
                    <div className="project-management-info">
                      <div className="project-management-name">
                        📁 {project.name}
                        {project._id === currentProjectId && (
                          <span className="project-badge-active">Active</span>
                        )}
                      </div>
                      {project.description && (
                        <div className="project-management-description">{project.description}</div>
                      )}
                      <div className="project-management-meta">
                        Created: {new Date(project.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="project-management-actions">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleEdit(project)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(project._id)}
                        disabled={project._id === currentProjectId}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}

                {projectList.length === 0 && (
                  <div className="empty-state">
                    <p>No projects yet. Create your first project to get started!</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="project-form">
              <h3>{editingId ? 'Edit Project' : 'Create New Project'}</h3>

              <div className="form-group">
                <label>Project Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., FortiGate 7.4.0"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of this project"
                  rows="3"
                />
              </div>

              <h4>Project Settings</h4>

              <div className="form-group">
                <label>Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.settings.projectName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      settings: { ...formData.settings, projectName: e.target.value }
                    })
                  }
                  placeholder="Release Testing Tracker"
                />
              </div>

              <div className="form-group">
                <label>Subtitle</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.settings.projectSubtitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      settings: { ...formData.settings, projectSubtitle: e.target.value }
                    })
                  }
                  placeholder="Comprehensive testing management system"
                />
              </div>

              <div className="form-group">
                <label>Organization Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.settings.organizationName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      settings: { ...formData.settings, organizationName: e.target.value }
                    })
                  }
                  placeholder="Your Organization"
                />
              </div>

              <div className="form-group">
                <label>Bug Tracker URL Pattern</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.settings.bugTrackerUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      settings: { ...formData.settings, bugTrackerUrl: e.target.value }
                    })
                  }
                  placeholder="https://mantis.example.com/bug_view_page.php?bug_id="
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  {editingId ? 'Update' : 'Create'} Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectManagementModal
