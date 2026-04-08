export default function StatsBar() {
  const stats = [
    { value: '40%', label: 'Reduction in ops overhead' },
    { value: '10×', label: 'Faster customer onboarding' },
    { value: '99.9%', label: 'Platform uptime SLA' },
    { value: '500+', label: 'Teams automating with Loop' },
  ]
  return (
    <section style={{ backgroundColor: '#091d30', padding: '64px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
        {stats.map(s => (
          <div key={s.value}>
            <div style={{ color: '#F9F9F7', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px' }}>{s.value}</div>
            <div style={{ color: '#F9F9F7', fontSize: '14px', fontWeight: 500, opacity: 0.55, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
