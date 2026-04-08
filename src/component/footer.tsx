import { Link } from 'react-router-dom'
import { LoopLogo } from "./icons"
import { VINSCOPE_URL } from "../utils/constant"

export default function Footer() {
  const links = {
    Product: ['VinScope', 'Features', 'Integrations', 'Pricing', 'Roadmap'],
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
                    {item === 'Terms of Service' ? (
                      <Link to="/terms" style={{ color: '#F9F9F7', fontSize: '14px', textDecoration: 'none', opacity: 0.55, transition: 'opacity 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}>
                        {item}
                      </Link>
                    ) : (
                      <a href={item === 'VinScope' ? VINSCOPE_URL : '#'} style={{ color: '#F9F9F7', fontSize: '14px', textDecoration: 'none', opacity: 0.55, transition: 'opacity 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}>
                        {item}
                      </a>
                    )}
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
              item === 'Terms' ? (
                <Link key={item} to="/terms" style={{ color: '#F9F9F7', fontSize: '13px', opacity: 0.35, textDecoration: 'none', transition: 'opacity 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}>
                  {item}
                </Link>
              ) : (
                <a key={item} href="#" style={{ color: '#F9F9F7', fontSize: '13px', opacity: 0.35, textDecoration: 'none', transition: 'opacity 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}>
                  {item}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}