function HistoryModal({ onClose }) {
  return (
    <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">📊 Release History</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>

        <div className="history-timeline" style={{ padding: '20px' }}>
          <div className="history-item">
            <div className="history-date">RC6 - Current</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 6</h3>
            <p>Latest testing phase with focus on regression fixes and final validation.</p>
            <div style={{ marginTop: '15px' }}>
              <span className="badge badge-pass">Active</span>
            </div>
          </div>

          <div className="history-item">
            <div className="history-date">RC5 - Completed</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 5</h3>
            <p>Addressed critical security vulnerabilities and improved Sub User authentication flows.</p>
            <div style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Key improvements: HTTP Headers, CSP Headers, XSS/SQL injection fixes
            </div>
          </div>

          <div className="history-item">
            <div className="history-date">RC4 - Completed</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 4</h3>
            <p>Major focus on Admin Portal stability and Management App secret rotation.</p>
            <div style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Resolved: Customer search issues, Kibana access, 2FA authentication
            </div>
          </div>

          <div className="history-item">
            <div className="history-date">RC3 - Completed</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 3</h3>
            <p>Integration testing with FortiOS 8.0.0 beta and Azure SCIM improvements.</p>
          </div>

          <div className="history-item">
            <div className="history-date">RC2 - Completed</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 2</h3>
            <p>Initial stability improvements and core functionality validation.</p>
          </div>

          <div className="history-item">
            <div className="history-date">RC1 - Completed</div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Release Candidate 1</h3>
            <p>First release candidate with baseline feature set and initial testing.</p>
            <div style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Identified initial issues in Admin Portal and Sub User authentication
            </div>
          </div>
        </div>

        <div className="button-group" style={{ padding: '0 20px 20px' }}>
          <button className="btn-secondary" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistoryModal
