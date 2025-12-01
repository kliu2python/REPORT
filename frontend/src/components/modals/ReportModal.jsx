import { useState, useEffect } from 'react'

function ReportModal({ filteredData, columns, onClose }) {
  const [loading, setLoading] = useState(true)
  const [reportHtml, setReportHtml] = useState('')

  useEffect(() => {
    // Simulate report generation
    setTimeout(() => {
      const report = generateReport()
      setReportHtml(report)
      setLoading(false)
    }, 2000)
  }, [])

  const generateReport = () => {
    const visibleColumns = columns.filter(col => col.visible)
    const stats = calculateStats(filteredData, visibleColumns)
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return `
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 10px; color: var(--text-primary);">
          Release Testing Report
        </h1>
        <p style="font-size: 1.1rem; color: var(--text-secondary);">
          FortiAuthenticator & FortiGate Release Validation
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">
          Generated: ${date}
        </p>
      </div>

      <div style="background: var(--bg-secondary); padding: 25px; border-radius: 8px; border-left: 4px solid var(--accent-primary); margin-bottom: 30px;">
        <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Executive Summary</h2>
        <p style="color: var(--text-secondary); margin-bottom: 15px;">
          This report provides a comprehensive analysis of ${stats.total} test cases across ${stats.categories} product categories,
          executed by ${stats.owners} team members through multiple release candidates.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; font-weight: bold; color: ${stats.passRate >= 90 ? 'var(--success)' : stats.passRate >= 75 ? 'var(--warning)' : 'var(--danger)'};">
              ${stats.passRate}%
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Overall Pass Rate</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 3rem; font-weight: bold; color: var(--success);">
              ${stats.passed}
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Tests Passed</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 3rem; font-weight: bold; color: var(--danger);">
              ${stats.failed}
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">Tests Failed</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="color: var(--accent-primary); margin-bottom: 15px; font-size: 1.5rem;">Release Quality Assessment</h2>
        <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
          <p style="color: var(--text-secondary); margin-bottom: 15px;">
            <strong>Overall Status:</strong>
            ${stats.passRate >= 95 ? '<span style="color: var(--success);">✓ Excellent - Ready for production release</span>' :
              stats.passRate >= 85 ? '<span style="color: var(--success);">✓ Good - Recommended for release with minor fixes</span>' :
              stats.passRate >= 75 ? '<span style="color: var(--warning);">⚠ Moderate - Additional testing recommended</span>' :
              '<span style="color: var(--danger);">✗ Critical issues require resolution</span>'}
          </p>
        </div>
      </div>
    `
  }

  const calculateStats = (data, visibleColumns) => {
    let passed = 0
    let failed = 0
    let total = 0

    data.forEach(row => {
      visibleColumns.forEach(col => {
        if (row[col.id]) {
          total++
          if (row[col.id].toLowerCase().includes('pass')) passed++
          else if (row[col.id].toLowerCase().includes('fail')) failed++
        }
      })
    })

    const passRate = total > 0 ? Math.round((passed / total) * 100) : 0
    const categories = new Set(data.map(row => row.category)).size
    const owners = new Set(data.map(row => row.owner)).size

    return { total: data.length, passed, failed, passRate, categories, owners }
  }

  const copyToClipboard = () => {
    const element = document.getElementById('reportBody')
    const text = element.innerText
    navigator.clipboard.writeText(text).then(() => {
      alert('Report copied to clipboard!')
    })
  }

  if (loading) {
    return (
      <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
        <div className="modal-content" style={{ maxWidth: '1200px' }}>
          <div className="modal-header">
            <h2 className="modal-title">📄 AI-Generated Test Report</h2>
            <button className="close-modal" onClick={onClose}>×</button>
          </div>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div className="loading"></div>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>Generating comprehensive test report...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
      <div className="modal-content" style={{ maxWidth: '1200px' }}>
        <div className="modal-header">
          <h2 className="modal-title">📄 Test Report</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>

        <div className="button-group" style={{ marginBottom: '20px', padding: '0 20px' }}>
          <button className="btn-secondary" onClick={copyToClipboard}>
            <span>📋 Copy to Clipboard</span>
          </button>
        </div>

        <div
          id="reportBody"
          style={{
            background: 'var(--bg-primary)',
            padding: '30px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.8',
            margin: '0 20px 20px'
          }}
          dangerouslySetInnerHTML={{ __html: reportHtml }}
        />

        <div className="button-group" style={{ padding: '0 20px 20px' }}>
          <button className="btn-secondary" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReportModal
