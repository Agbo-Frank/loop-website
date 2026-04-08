import { VINSCOPE_URL } from "../../../utils/constant";

const VinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="7" cy="19" r="2" fill="currentColor" />
    <circle cx="17" cy="19" r="2" fill="currentColor" />
    <path d="M2 12h20M7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 12v3M12 12v3M16 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

export default function ProductsSection() {
  return (
    <section id="products" style={{ backgroundColor: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: '#0D2B45', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>Our Products</p>
          <h2 style={{ color: '#0D2B45', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: '560px', margin: '0 auto' }}>
            Purpose-built tools powered by Loop
          </h2>
        </div>

        {/* VinScope card */}
        <div
          style={{ maxWidth: '680px', margin: '0 auto', border: '1px solid rgba(13,43,69,0.1)', borderRadius: '20px', padding: '40px', backgroundColor: '#F9F9F7', display: 'flex', flexDirection: 'column', gap: '24px', transition: 'box-shadow 0.2s, border-color 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(13,43,69,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(13,43,69,0.2)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(13,43,69,0.1)' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', backgroundColor: '#0D2B45', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#F9F9F7' }}>
              <VinIcon />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <h3 style={{ color: '#0D2B45', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.01em', margin: 0 }}>VinScope</h3>
                <span style={{ backgroundColor: 'rgba(13,43,69,0.07)', color: '#0D2B45', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '100px' }}>Live</span>
              </div>
              <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.6, opacity: 0.65, margin: 0 }}>
                Instant VIN intelligence for vehicle history, specs, and market data — delivered via web app or API.
              </p>
            </div>
          </div>

          {/* Bullets */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Decode any VIN in seconds — NHTSA data plus enriched vehicle specs',
              'Developer-friendly REST API with credit-based access and API key management',
            ].map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckIcon className="" />
                <span style={{ color: '#0D2B45', fontSize: '15px', fontWeight: 500, lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <a
              href={VINSCOPE_URL}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '15px', fontWeight: 600, padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4060')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2B45')}>
              Open VinScope <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}