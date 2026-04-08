import { ConsistencyDashboardIllustration, IntegrationsHubIllustration, WorkflowBuilderIllustration } from "../illustrations"

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#0D2B45" />
    <path d="M6 10l2.5 2.5L14 7" stroke="#F9F9F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SolutionSection() {
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