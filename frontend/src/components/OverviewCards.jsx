import { aiUsageLog, authTelemetry } from '../data/testData'

function OverviewCards({ testData, filteredData, columns }) {
  const calculateStats = (data) => {
    const visibleColumns = columns.filter(col => col.visible).map(col => col.id)
    let passed = 0
    let failed = 0
    let total = 0

    data.forEach(row => {
      visibleColumns.forEach(colId => {
        if (row[colId]) {
          total++
          if (row[colId].toLowerCase().includes('pass')) {
            passed++
          } else if (row[colId].toLowerCase().includes('fail')) {
            failed++
          }
        }
      })
    })

    const passRate = total > 0 ? Math.round((passed / total) * 100) : 0
    const categories = new Set(data.map(row => row.category)).size
    const owners = new Set(data.map(row => row.owner)).size

    return { total: data.length, passed, failed, passRate, categories, owners }
  }

  const summarizeAiUsage = (logs) => {
    if (!logs.length) {
      return { calls: 0, avgLatency: '0.0', tokensK: 0 }
    }

    const calls = logs.length
    const totalLatency = logs.reduce((sum, log) => sum + log.latencyMs, 0)
    const totalTokens = logs.reduce((sum, log) => sum + log.tokens, 0)

    return {
      calls,
      avgLatency: (totalLatency / calls / 1000).toFixed(1),
      tokensK: Math.round(totalTokens / 100) / 10,
    }
  }

  const stats = calculateStats(filteredData)
  const aiSummary = summarizeAiUsage(aiUsageLog)

  return (
    <section className="overview-grid" aria-label="Executive overview">
      <div className="overview-card">
        <div className="pill">Release health</div>
        <h3>RC quality guardrail</h3>
        <p>Live signal from the test matrix to keep release decisions grounded in measurable quality.</p>
        <div className="metric-row">
          <div className="metric-label">Pass rate</div>
          <div className="metric-value">{stats.passRate}%</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Tracked scenarios</div>
          <div className="metric-value">{stats.total}</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Active owners</div>
          <div className="metric-value">{stats.owners}</div>
        </div>
      </div>

      <div className="overview-card">
        <div className="pill success">AI copilot</div>
        <h3>Usage & governance</h3>
        <p>Tracks who is invoking AI, on which task, and the footprint it leaves (tokens, cost, and latency).</p>
        <div className="metric-row">
          <div className="metric-label">API calls (24h)</div>
          <div className="metric-value">{aiSummary.calls}</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Avg latency</div>
          <div className="metric-value">{aiSummary.avgLatency}s</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Tokens burned</div>
          <div className="metric-value">{aiSummary.tokensK}k</div>
        </div>
      </div>

      <div className="overview-card">
        <div className="pill ghost">Identity</div>
        <h3>User authentication readiness</h3>
        <p>Email/password login with secure hashing, verification flow, session rotation, and audit trails baked in.</p>
        <div className="metric-row">
          <div className="metric-label">Verified users</div>
          <div className="metric-value">{authTelemetry.verifiedUsers}</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Active sessions</div>
          <div className="metric-value">{authTelemetry.activeSessions}</div>
        </div>
        <div className="metric-row">
          <div className="metric-label">Lockouts</div>
          <div className="metric-value">{authTelemetry.lockouts}</div>
        </div>
      </div>
    </section>
  )
}

export default OverviewCards
