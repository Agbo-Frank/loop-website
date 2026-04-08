import { useState } from 'react'

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FAQSection() {
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