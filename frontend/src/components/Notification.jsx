function Notification({ message }) {
  return (
    <div className="notification">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.5rem' }}>✓</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Notification
