import { ArrowRightIcon, CheckIcon } from "../../../component/icons"
import { CALENDLY_URL } from "../../../utils/constant";

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#F9F9F7', padding: '96px 24px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(13,43,69,0.06)', border: '1px solid rgba(13,43,69,0.12)', borderRadius: '100px', padding: '6px 14px', marginBottom: '28px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0D2B45', display: 'inline-block' }}></span>
          <span style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em' }}>Subscription Automation Software</span>
        </div>

        {/* Headline */}
        <h1 style={{ color: '#0D2B45', fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
          Automate Your Operations.<br />
          <span style={{ color: '#1a4060' }}>Scale Without the Headcount.</span>
        </h1>

        {/* Subheadline */}
        <p style={{ color: '#0D2B45', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6, opacity: 0.65, marginBottom: '40px', maxWidth: '680px', margin: '0 auto 40px' }}>
          Loop Technologies gives growing businesses the automation infrastructure to handle recurring workflows from customer onboarding to payment driven services without adding manual work or headcount.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '16px', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4060')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2B45')}>
            Schedule a Demo <ArrowRightIcon />
          </a>
          <a href="#solution"
            style={{ backgroundColor: 'transparent', color: '#0D2B45', fontSize: '16px', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', border: '2px solid rgba(13,43,69,0.2)', transition: 'border-color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(13,43,69,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(13,43,69,0.2)')}>
            See How It Works
          </a>
        </div>

        {/* Trust signals */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            'No credit card required',
            'SOC 2 Type II certified',
            '99.9% uptime SLA',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckIcon />
              <span style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 500, opacity: 0.7 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}