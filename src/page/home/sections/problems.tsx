export default function ProblemSection() {
  const problems = [
    {
      title: 'Your team is buried in repetitive work',
      desc: 'Loop Technologies gives growing businesses the automation infrastructure to handle recurring workflows from customer onboarding to payment driven services without adding manual work or headcount.',
    },
    {
      title: 'Processes break when people leave',
      desc: 'Critical recurring workflows exist only in someone\'s head or an out-of-date SOP. One resignation creates operational chaos.',
    },
    {
      title: 'Scaling means hiring, not growing',
      desc: 'Every new contract, every billing cycle, every onboarding flow demands more headcount. You\'re adding people just to keep the lights on.',
    },
  ]

  return (
    <section style={{ backgroundColor: '#0D2B45', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#F9F9F7', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ color: '#F9F9F7', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '640px', margin: '0 auto' }}>
            Manual workflows are quietly killing your growth
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {problems.map((p, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(249,249,247,0.05)', border: '1px solid rgba(249,249,247,0.1)', borderRadius: '16px', padding: '32px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(249,249,247,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ color: '#F9F9F7', fontSize: '18px', fontWeight: 700, opacity: 0.5 }}>0{i + 1}</span>
              </div>
              <h3 style={{ color: '#F9F9F7', fontSize: '18px', fontWeight: 700, lineHeight: 1.3, marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ color: '#F9F9F7', fontSize: '15px', lineHeight: 1.65, opacity: 0.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}