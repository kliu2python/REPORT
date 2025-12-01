function Header({ settings, onOpenSettings, darkMode, onToggleDarkMode }) {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>{settings.projectName}</h1>
          <p className="subtitle">{settings.projectSubtitle}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            className="icon-btn"
            onClick={onToggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{ fontSize: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="icon-btn"
            onClick={onOpenSettings}
            title="Project Settings"
            style={{ fontSize: '1.2rem' }}
          >
            ⚙️ Settings
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
