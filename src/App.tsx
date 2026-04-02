import { useState } from 'react'
import './App.css'
import {
  WorkflowBuilderIllustration,
  ConsistencyDashboardIllustration,
  IntegrationsHubIllustration,
} from './illustrations'

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const LoopLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#0D2B45" />
    <path d="M10 8v20h6V14h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-2" stroke="#F9F9F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#0D2B45" />
    <path d="M6 10l2.5 2.5L14 7" stroke="#F9F9F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// Feature icons
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

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'rgba(249,249,247,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(13,43,69,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <LoopLogo />
            <div style={{ lineHeight: 1 }}>
              <div style={{ color: '#0D2B45', fontWeight: 800, fontSize: '15px', letterSpacing: '0.08em' }}>LOOP</div>
              <div style={{ color: '#0D2B45', fontWeight: 500, fontSize: '9px', letterSpacing: '0.18em', opacity: 0.7 }}>TECHNOLOGIES</div>
            </div>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {['#features', '#solution', '#testimonials', '#faq'].map((href, i) => (
              <a key={href} href={href} style={{ color: '#0D2B45', textDecoration: 'none', fontSize: '14px', fontWeight: 500, opacity: 0.7 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}>
                {['Features', 'Solutions', 'Customers', 'FAQ'][i]}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
            <a href="#demo" style={{ color: '#0D2B45', fontSize: '14px', fontWeight: 500, textDecoration: 'none', opacity: 0.7 }}>Sign in</a>
            <a href="#demo" style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '14px', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4060')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2B45')}>
              Schedule a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0D2B45', padding: '4px' }} className="mobile-menu-btn">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid rgba(13,43,69,0.08)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#F9F9F7' }}>
          {[['#features', 'Features'], ['#solution', 'Solutions'], ['#testimonials', 'Customers'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: '#0D2B45', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>{label}</a>
          ))}
          <a href="#demo" onClick={() => setMenuOpen(false)} style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '14px', fontWeight: 600, padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', marginTop: '8px' }}>
            Schedule a Demo
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
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
          <a href="#demo"
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

// ─── Logo Bar ─────────────────────────────────────────────────────────────────

function LogoBar() {
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

// ─── Problem Section ──────────────────────────────────────────────────────────

function ProblemSection() {
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

// ─── Solution / Benefits ──────────────────────────────────────────────────────

function SolutionSection() {
  const benefits = [
    {
      title: 'Automate every recurring workflow',
      desc: 'Build and deploy automation for any repeating process—onboarding flows, billing triggers, renewal reminders—without writing a single line of code.',
      bullet: ['Visual workflow builder', 'Trigger-based automation', 'Multi-step sequences'],
      Illustration: WorkflowBuilderIllustration,
    },
    {
      title: 'Standardize operations at scale',
      desc: 'Every process runs the same way, every time. Loop enforces consistency across your team so nothing slips through the cracks as you grow.',
      bullet: ['Workflow templates', 'Role-based permissions', 'Audit trails & logs'],
      Illustration: ConsistencyDashboardIllustration,
    },
    {
      title: 'Connect your entire stack',
      desc: 'Loop integrates with your CRM, billing, helpdesk, and more—so your automations work across the tools your team already uses.',
      bullet: ['Native integrations', 'REST API & webhooks', 'Zapier & Make compatible'],
      Illustration: IntegrationsHubIllustration,
    },
  ]

  return (
    <section id="solution" style={{ backgroundColor: '#F9F9F7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>The Solution</p>
          <h2 style={{ color: '#0D2B45', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '600px', margin: '0 auto 16px' }}>
            Loop automates the work that never stops
          </h2>
          <p style={{ color: '#0D2B45', fontSize: '18px', lineHeight: 1.6, opacity: 0.6, maxWidth: '520px', margin: '0 auto' }}>
            One platform to design, deploy, and scale your recurring business processes—cloud-native and built for teams that can't afford to slow down.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
          {benefits.map(({ title, desc, bullet, Illustration }, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
              {/* Text */}
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(13,43,69,0.06)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: '#0D2B45', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.7 }}>
                  0{i + 1}
                </div>
                <h3 style={{ color: '#0D2B45', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>{title}</h3>
                <p style={{ color: '#0D2B45', fontSize: '16px', lineHeight: 1.7, opacity: 0.65, marginBottom: '24px' }}>{desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {bullet.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckIcon />
                      <span style={{ color: '#0D2B45', fontSize: '15px', fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Illustration */}
              <div style={{
                order: i % 2 === 1 ? 1 : 2,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 48px rgba(13,43,69,0.12), 0 1px 4px rgba(13,43,69,0.08)',
                border: '1px solid rgba(13,43,69,0.08)',
                aspectRatio: '16/10',
              }}>
                <Illustration />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
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

// ─── Features ─────────────────────────────────────────────────────────────────

function FeaturesSection() {
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

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Loop cut our customer onboarding time from 3 days to under 4 hours. Our ops team now handles twice the volume with the same headcount.",
      name: 'Chinedu A.',
      role: 'Technical Lead',
      company: 'West Point',
      initials: 'CA',
    },
    {
      quote: "We used to have a 12-step manual process for every subscription renewal. Now Loop handles all of it automatically, and our churn dropped 18% in the first quarter.",
      name: 'Francis E.',
      role: 'CTO',
      company: 'Temple resources',
      initials: 'FE',
    },
    {
      quote: "The ROI was immediate. We were spending 20+ hours per week on workflow coordination that Loop now handles end-to-end. Best infrastructure investment we've made.",
      name: 'Steve H.',
      role: 'CEO',
      company: 'Imperial Advantage',
      initials: 'SH',
    },
  ]

  return (
    <section id="testimonials" style={{ backgroundColor: '#F9F9F7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>Customer Stories</p>
          <h2 style={{ color: '#0D2B45', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '520px', margin: '0 auto' }}>
            Ops leaders trust Loop to run their business
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ backgroundColor: '#fff', border: '1px solid rgba(13,43,69,0.08)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#0D2B45"><path d="M8 1l1.9 4 4.4.6-3.2 3.1.8 4.4L8 11l-3.9 2.1.8-4.4L1.7 5.6l4.4-.6z" /></svg>
                ))}
              </div>
              <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.7, opacity: 0.75, fontStyle: 'italic', flexGrow: 1 }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0D2B45', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#F9F9F7', fontSize: '13px', fontWeight: 700 }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{ color: '#0D2B45', fontSize: '14px', fontWeight: 700 }}>{t.name}</div>
                  <div style={{ color: '#0D2B45', fontSize: '13px', opacity: 0.55 }}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How long does it take to get up and running?',
      a: "Most teams are live with their first automated workflow within a day. Loop provides pre-built templates for common use cases onboarding, billing triggers, renewal flows so you're not starting from scratch. Our onboarding team guides you through setup at no extra cost.",
    },
    {
      q: 'Do we need engineering resources to implement Loop?',
      a: 'No. Loop is designed for operations and revenue teams, not developers. The visual workflow builder requires zero coding. If you want to use our API or webhooks for custom integrations, our engineering team can support you there.',
    },
    {
      q: 'How does Loop handle security and compliance?',
      a: 'Loop is SOC 2 Type II certified, GDPR compliant, and offers role-based access controls, SSO, and complete audit logging. All data is encrypted in transit and at rest. We run on multi-region cloud infrastructure with 99.9% uptime SLA.',
    },
    {
      q: 'What does pricing look like?',
      a: 'Loop offers subscription plans based on workflow volume and team size. We\'ll walk you through the right plan on your demo call so you only pay for what your operation actually needs. No per-seat licensing surprises.',
    },
    {
      q: 'Can Loop integrate with our existing tools?',
      a: 'Yes. Loop has native integrations with Salesforce, HubSpot, Stripe, Chargebee, Zendesk, Slack, and more. We also offer a full REST API and webhooks for any custom integrations, and we\'re compatible with Zapier and Make.',
    },
    {
      q: 'What happens if an automated workflow fails?',
      a: 'Loop includes built-in error handling, retry logic, and real-time alerting. You get immediate notification on failures with full context so your team can resolve issues fast. Every workflow run is logged for complete visibility.',
    },
  ]

  return (
    <section id="faq" style={{ backgroundColor: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>FAQ</p>
          <h2 style={{ color: '#0D2B45', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Common questions, answered
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: i === 0 ? '1px solid rgba(13,43,69,0.1)' : 'none', borderBottom: '1px solid rgba(13,43,69,0.1)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <span style={{ color: '#0D2B45', fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ color: '#0D2B45', flexShrink: 0 }}><ChevronDownIcon open={open === i} /></span>
              </button>
              {open === i && (
                <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.7, opacity: 0.65, paddingBottom: '24px', margin: 0 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Demo CTA + Form ──────────────────────────────────────────────────────────

function DemoSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', teamSize: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid rgba(13,43,69,0.2)',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#0D2B45',
    backgroundColor: '#fff',
    outline: 'none',
    transition: 'border-color 0.15s',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#0D2B45',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '6px',
    opacity: 0.8,
  }

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

        {/* Right: Form */}
        <div style={{ backgroundColor: '#F9F9F7', borderRadius: '20px', padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: '#0D2B45', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14l5 5L22 8" stroke="#F9F9F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 style={{ color: '#0D2B45', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>You're on the list!</h3>
              <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.6, opacity: 0.65 }}>
                A member of our team will reach out within 1 business day to schedule your demo.
              </p>
            </div>
          ) : (
            <>
              <h3 style={{ color: '#0D2B45', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Book a Demo</h3>
              <p style={{ color: '#0D2B45', fontSize: '14px', opacity: 0.6, marginBottom: '28px' }}>We'll be in touch within 1 business day.</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>First name *</label>
                    <input required style={inputStyle} placeholder="Alex" value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = '#0D2B45')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,43,69,0.2)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name *</label>
                    <input required style={inputStyle} placeholder="Johnson" value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = '#0D2B45')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,43,69,0.2)')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Work email *</label>
                  <input required type="email" style={inputStyle} placeholder="alex@company.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = '#0D2B45')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,43,69,0.2)')} />
                </div>
                <div>
                  <label style={labelStyle}>Company *</label>
                  <input required style={inputStyle} placeholder="Acme Corp" value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = '#0D2B45')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,43,69,0.2)')} />
                </div>
                <div>
                  <label style={labelStyle}>Team size *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }} value={form.teamSize}
                    onChange={e => setForm(f => ({ ...f, teamSize: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = '#0D2B45')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,43,69,0.2)')}>
                    <option value="">Select team size</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-500">201–500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                <button type="submit" disabled={loading}
                  style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '15px', fontWeight: 600, padding: '14px', borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.15s', marginTop: '8px', opacity: loading ? 0.7 : 1 }}
                  onMouseEnter={e => { if (!loading) (e.currentTarget.style.backgroundColor = '#1a4060') }}
                  onMouseLeave={e => { if (!loading) (e.currentTarget.style.backgroundColor = '#0D2B45') }}>
                  {loading ? 'Submitting...' : 'Schedule My Demo →'}
                </button>
                <p style={{ color: '#0D2B45', fontSize: '12px', opacity: 0.45, textAlign: 'center', margin: 0 }}>
                  No spam. No sales pressure. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'],
    Support: ['Documentation', 'Status Page', 'Help Center', 'Community'],
  }

  return (
    <footer style={{ backgroundColor: '#091d30', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '56px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <LoopLogo />
              <div style={{ lineHeight: 1 }}>
                <div style={{ color: '#F9F9F7', fontWeight: 800, fontSize: '15px', letterSpacing: '0.08em' }}>LOOP</div>
                <div style={{ color: '#F9F9F7', fontWeight: 500, fontSize: '9px', letterSpacing: '0.18em', opacity: 0.5 }}>TECHNOLOGIES</div>
              </div>
            </div>
            <p style={{ color: '#F9F9F7', fontSize: '14px', lineHeight: 1.65, opacity: 0.45, maxWidth: '240px' }}>
              Subscription automation software that helps businesses streamline operations and scale efficiently.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ color: '#F9F9F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>{section}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ color: '#F9F9F7', fontSize: '14px', textDecoration: 'none', opacity: 0.55, transition: 'opacity 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(249,249,247,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: '#F9F9F7', fontSize: '13px', opacity: 0.35 }}>
            © {new Date().getFullYear()} Loop Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Security'].map(item => (
              <a key={item} href="#" style={{ color: '#F9F9F7', fontSize: '13px', opacity: 0.35, textDecoration: 'none', transition: 'opacity 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <ProblemSection />
        <SolutionSection />
        <StatsBar />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <DemoSection />
      </main>
      <Footer />
    </>
  )
}

export default App
