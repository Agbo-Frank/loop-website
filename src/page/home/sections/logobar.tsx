export default function LogoBar() {
  const logos = ['Meridian Group', 'Vantage Ops', 'CoreFlow', 'NovaBridge', 'Axiom Labs', 'Stellarpath']
  return (
    <section style={{ borderTop: '1px solid rgba(13,43,69,0.1)', borderBottom: '1px solid rgba(13,43,69,0.1)', backgroundColor: '#fff', padding: '32px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#0D2B45', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '24px' }}>
          Trusted by 500+ growing teams
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          {logos.map(name => (
            <span key={name} style={{ color: '#0D2B45', fontSize: '15px', fontWeight: 700, letterSpacing: '0.04em', opacity: 0.28, textTransform: 'uppercase' }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
