import { useState, useEffect } from 'react'

function AIAnalysisModal({ filteredData, columns, onClose }) {
  const [loading, setLoading] = useState(true)
  const [analysis, setAnalysis] = useState('')

  useEffect(() => {
    // Simulate AI analysis
    setTimeout(() => {
      const analysisResult = generateAIAnalysis()
      setAnalysis(analysisResult)
      setLoading(false)
    }, 1500)
  }, [])

  const generateAIAnalysis = () => {
    const visibleColumns = columns.filter(col => col.visible)
    const stats = calculateStats(filteredData, visibleColumns)
    const rcStats = calculateRCStats(filteredData, visibleColumns)
    const categoryFailures = calculateCategoryFailures(filteredData, visibleColumns)
    const topIssues = Object.entries(categoryFailures)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)

    return { stats, rcStats, topIssues, visibleColumns }
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

  const calculateRCStats = (data, visibleColumns) => {
    const rcStats = {}

    visibleColumns.forEach(col => {
      let passed = 0
      let failed = 0
      data.forEach(row => {
        if (row[col.id]) {
          if (row[col.id].toLowerCase().includes('pass')) passed++
          else if (row[col.id].toLowerCase().includes('fail')) failed++
        }
      })
      rcStats[col.id] = { passed, failed, total: passed + failed, label: col.label }
    })

    return rcStats
  }

  const calculateCategoryFailures = (data, visibleColumns) => {
    const categoryFailures = {}
    data.forEach(row => {
      visibleColumns.forEach(col => {
        if (row[col.id] && row[col.id].toLowerCase().includes('fail')) {
          categoryFailures[row.category] = (categoryFailures[row.category] || 0) + 1
        }
      })
    })
    return categoryFailures
  }

  if (loading) {
    return (
      <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">🤖 AI Analysis</h2>
            <button className="close-modal" onClick={onClose}>×</button>
          </div>
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div className="loading"></div> Analyzing test data...
          </div>
        </div>
      </div>
    )
  }

  const { stats, rcStats, topIssues, visibleColumns } = analysis

  return (
    <div className="modal active" onClick={(e) => e.target.className.includes('modal') && onClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">🤖 AI Analysis</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>

        <div className="ai-analysis" style={{ padding: '20px' }}>
          <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '20px' }}>📊 Test Coverage Analysis</h3>

          <div className="ai-insight">
            <h3>Overall Health</h3>
            <p>
              The current release shows a <strong>{stats.passRate}%</strong> pass rate across all test cases.
              This {stats.passRate >= 90 ? 'excellent' : stats.passRate >= 75 ? 'good' : 'needs attention'}
              performance indicates {stats.passRate >= 90 ? 'strong' : 'moderate'} release readiness.
            </p>
          </div>

          <div className="ai-insight">
            <h3>Release Candidate Progression</h3>
            <p>Analysis of test progression across RCs:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {visibleColumns.map(col => {
                const stat = rcStats[col.id]
                if (stat.total === 0) return null
                const rate = Math.round((stat.passed / stat.total) * 100)
                return (
                  <li key={col.id} style={{ margin: '10px 0', padding: '10px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                    <strong>{stat.label}</strong>: {stat.passed}/{stat.total} passed ({rate}%)
                    <div className="progress-bar" style={{ marginTop: '5px' }}>
                      <div className="progress-fill" style={{ width: `${rate}%` }}></div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {topIssues.length > 0 && (
            <div className="ai-insight">
              <h3>Areas Requiring Attention</h3>
              <p>Categories with the most failures:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {topIssues.map(([category, count]) => (
                  <li key={category} style={{ margin: '8px 0', color: 'var(--danger)' }}>
                    • <strong>{category}</strong>: {count} failure(s)
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="ai-insight">
            <h3>Team Performance</h3>
            <p>
              Testing is distributed across {stats.owners} team members covering {stats.categories} different categories.
              This distributed approach ensures comprehensive coverage and diverse perspectives in quality assurance.
            </p>
          </div>

          <div className="ai-insight">
            <h3>Recommendations</h3>
            <ul style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              {stats.passRate < 90 && <li>Focus on resolving failed test cases before next RC</li>}
              {stats.passRate >= 95 && <li>Excellent progress! Consider release candidate for production</li>}
              <li>Monitor recurring failures across multiple RCs</li>
              <li>Ensure all critical path tests are passing</li>
              <li>Review and update test coverage for edge cases</li>
            </ul>
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

export default AIAnalysisModal
