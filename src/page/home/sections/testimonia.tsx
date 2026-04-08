export default function TestimonialsSection() {
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