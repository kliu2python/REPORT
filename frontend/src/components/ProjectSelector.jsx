import { useState } from 'react'
import './ProjectSelector.css'

function ProjectSelector({ projects, currentProject, onSelectProject, onManageProjects }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (project) => {
    onSelectProject(project)
    setIsOpen(false)
  }

  return (
    <div className="project-selector">
      <button
        className="project-selector-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="project-icon">📁</span>
        <span className="project-name">{currentProject?.name || 'Select Project'}</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="project-dropdown">
          <div className="project-list">
            {projects.map((project) => (
              <div
                key={project._id}
                className={`project-item ${currentProject?._id === project._id ? 'active' : ''}`}
                onClick={() => handleSelect(project)}
              >
                <span className="project-item-icon">📁</span>
                <div className="project-item-info">
                  <div className="project-item-name">{project.name}</div>
                  {project.description && (
                    <div className="project-item-description">{project.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="project-dropdown-footer">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                setIsOpen(false)
                onManageProjects()
              }}
            >
              ⚙️ Manage Projects
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectSelector
