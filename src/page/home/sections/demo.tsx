import { CALENDLY_URL } from '../../../utils/constant'


export default function DemoSection() {
  return (
    <section id="demo" style={{ backgroundColor: '#0D2B45', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Left: Copy */}
        <div>
          <p style={{ color: '#F9F9F7', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '20px' }}>Get Started</p>
          <h2 style={{ color: '#F9F9F7', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            See Loop in action book your personalized demo
          </h2>
          <p style={{ color: '#F9F9F7', fontSize: '16px', lineHeight: 1.7, opacity: 0.65, marginBottom: '40px' }}>
            In 30 minutes, we'll walk you through how Loop can automate your specific recurring workflows and show you exactly what your team's operations could look like.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Live product walkthrough tailored to your ops',
              'Custom workflow design for your use case',
              'Transparent pricing — no sales pressure',
              'Get live within days, not months',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
                  <circle cx="10" cy="10" r="10" fill="rgba(249,249,247,0.12)" />
                  <path d="M6 10l2.5 2.5L14 7" stroke="#F9F9F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ color: '#F9F9F7', fontSize: '15px', lineHeight: 1.5, opacity: 0.8 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div style={{ backgroundColor: '#F9F9F7', borderRadius: '20px', padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: '#0D2B45', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="6" width="20" height="18" rx="3" stroke="#F9F9F7" strokeWidth="2" />
              <path d="M9 4v4M19 4v4M4 12h20" stroke="#F9F9F7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={{ color: '#0D2B45', fontSize: '22px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>Book a 30-Minute Demo</h3>
          <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.65, opacity: 0.6, marginBottom: '32px', maxWidth: '320px' }}>
            Pick a time that works for you. We'll walk through your workflows and show you exactly how Loop fits.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '15px', fontWeight: 600, padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s', display: 'inline-block' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4060')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2B45')}>
            Book a Demo →
          </a>
          <p style={{ color: '#0D2B45', fontSize: '12px', opacity: 0.4, marginTop: '16px' }}>
            No credit card required · Free 30-min session
          </p>
        </div>
      </div>
    </section>
  )
}