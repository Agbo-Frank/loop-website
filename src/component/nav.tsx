import { useState } from "react"
import { LoopLogo, MenuIcon, CloseIcon } from "./icons"
import { CALENDLY_URL } from "../utils/constant"

export default function Nav() {
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
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '14px', fontWeight: 600, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4060')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2B45')}>
              Schedule a Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0D2B45', padding: '4px' }}
            className="mobile-menu-btn"
          >
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
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: '#0D2B45', color: '#F9F9F7', fontSize: '14px', fontWeight: 600, padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', marginTop: '8px' }}>
            Schedule a Demo
          </a>
        </div>
      )}
    </nav>
  )
}
