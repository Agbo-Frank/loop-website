const WorkflowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M17.5 14v3m0 0v3m0-3h3m-3 0h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 6.5h4M6.5 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const SubscriptionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 10h18M7 3v4M17 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OnboardingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M2 10h20M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloudIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 10a6 6 0 0 0-11.95-.9A5 5 0 1 0 6 19h12a4 4 0 0 0 0-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 16l4-4 4 4 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FeaturesSection() {
  const features = [
    { Icon: WorkflowIcon, title: 'Visual Workflow Builder', desc: 'Design complex, multi-step automation flows with a drag-and-drop editor. No developers required.' },
    { Icon: SubscriptionIcon, title: 'Subscription Management', desc: 'Manage plans, billing cycles, upgrades, and cancellations with automated logic at every touchpoint.' },
    { Icon: OnboardingIcon, title: 'Customer Onboarding', desc: 'Trigger personalized onboarding sequences the moment a new customer signs up—zero manual intervention.' },
    { Icon: PaymentIcon, title: 'Payment-Driven Triggers', desc: 'Kick off workflows automatically based on payment events: renewals, failures, upgrades, and more.' },
    { Icon: CloudIcon, title: 'Cloud-Native Infrastructure', desc: 'Enterprise-grade reliability with multi-region availability, automatic scaling, and zero maintenance.' },
    { Icon: AnalyticsIcon, title: 'Analytics & Reporting', desc: 'Track workflow performance, identify bottlenecks, and prove ROI with built-in ops dashboards.' },
  ]

  return (
    <section id="features" style={{ backgroundColor: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>Platform Features</p>
          <h2 style={{ color: '#0D2B45', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '560px', margin: '0 auto' }}>
            Everything you need to automate at scale
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {features.map(({ Icon, title, desc }) => (
            <div key={title} style={{ border: '1px solid rgba(13,43,69,0.1)', borderRadius: '16px', padding: '32px', backgroundColor: '#F9F9F7', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(13,43,69,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(13,43,69,0.2)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(13,43,69,0.1)' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#0D2B45', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#F9F9F7' }}>
                <Icon />
              </div>
              <h3 style={{ color: '#0D2B45', fontSize: '17px', fontWeight: 700, marginBottom: '10px' }}>{title}</h3>
              <p style={{ color: '#0D2B45', fontSize: '14px', lineHeight: 1.65, opacity: 0.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}