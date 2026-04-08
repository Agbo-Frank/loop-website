import { Link } from 'react-router-dom'
import Nav from '../../component/nav'
import Footer from '../../component/footer'

const sections = [
  {
    number: '1',
    title: 'Use of Services',
    body: 'Loop Technologies provides subscription-based automation software designed to help businesses streamline workflows, manage operations, and integrate payment systems.',
    list: [
      'Use the platform only for lawful purposes',
      'Provide accurate and up-to-date information',
      'Not misuse, disrupt, or attempt to gain unauthorized access to our systems',
    ],
    listLabel: 'You agree to:',
  },
  {
    number: '2',
    title: 'Account Registration',
    body: 'To access certain features, you must create an account.',
    list: [
      'Maintaining the confidentiality of your login credentials',
      'All activities that occur under your account',
    ],
    listLabel: 'You are responsible for:',
    footer: 'Loop Technologies reserves the right to suspend or terminate accounts suspected of unauthorized or fraudulent activity.',
  },
  {
    number: '3',
    title: 'Subscription & Payments',
    body: 'Our services operate on a subscription basis.',
    list: [
      'Fees are billed periodically (monthly or annually)',
      'Payments are non-refundable unless otherwise stated',
      'Failure to pay may result in suspension or termination of service',
    ],
    footer: 'We may update pricing with prior notice.',
  },
  {
    number: '4',
    title: 'Acceptable Use',
    body: null,
    list: [
      'Use the platform for illegal or fraudulent activities',
      'Interfere with system integrity or performance',
      'Reverse engineer, copy, or exploit any part of the software',
    ],
    listLabel: 'You agree not to:',
  },
  {
    number: '5',
    title: 'Intellectual Property',
    body: 'All content, software, and materials provided by Loop Technologies are the exclusive property of the company.',
    footer: 'You are granted a limited, non-transferable license to use the platform for business purposes only.',
  },
  {
    number: '6',
    title: 'Data & Privacy',
    body: 'We collect and process data in accordance with our Privacy Policy.',
    footer: 'By using our services, you consent to such data collection and usage.',
  },
  {
    number: '7',
    title: 'Service Availability',
    body: 'We strive to ensure continuous service but do not guarantee uninterrupted access.',
    list: [
      'Perform maintenance',
      'Update or modify features',
      'Temporarily suspend services when necessary',
    ],
    listLabel: 'We may:',
  },
  {
    number: '8',
    title: 'Limitation of Liability',
    body: 'Loop Technologies shall not be liable for:',
    list: [
      'Indirect or consequential damages',
      'Loss of profits, data, or business opportunities',
    ],
    footer: 'Use of the platform is at your own risk.',
  },
  {
    number: '9',
    title: 'Termination',
    body: 'We reserve the right to suspend or terminate your access if:',
    list: [
      'You violate these Terms',
      'Your usage poses a risk to the platform or other users',
    ],
  },
  {
    number: '10',
    title: 'Modifications to Terms',
    body: 'We may update these Terms at any time. Continued use of the platform constitutes acceptance of the updated Terms.',
  },
  {
    number: '11',
    title: 'Governing Law',
    body: 'These Terms shall be governed by and interpreted in accordance with applicable laws of the jurisdiction in which Loop Technologies operates.',
  },
  {
    number: '12',
    title: 'Contact Information',
    body: 'For questions or concerns, please contact:',
    contact: 'support@looptechnologies.org',
  },
]

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#F9F9F7', minHeight: '100vh' }}>
        {/* Header */}
        <section style={{ backgroundColor: '#0D2B45', padding: '80px 24px 64px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F9F9F7', fontSize: '13px', fontWeight: 500, opacity: 0.6, textDecoration: 'none', marginBottom: '32px', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
            <p style={{ color: '#F9F9F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '16px' }}>
              Legal
            </p>
            <h1 style={{ color: '#F9F9F7', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Terms &amp; Conditions
            </h1>
            <p style={{ color: '#F9F9F7', fontSize: '15px', opacity: 0.5 }}>
              Last Updated: April 8, 2026
            </p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: '56px 24px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#0D2B45', fontSize: '17px', lineHeight: 1.75, opacity: 0.75, paddingBottom: '48px', borderBottom: '1px solid rgba(13,43,69,0.1)' }}>
              Welcome to Loop Technologies. These Terms and Conditions ("Terms") govern your use of our platform, products, and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section style={{ padding: '0 24px 96px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {sections.map(s => (
              <div key={s.number} style={{ padding: '48px 0', borderBottom: '1px solid rgba(13,43,69,0.08)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: '36px', height: '36px', backgroundColor: 'rgba(13,43,69,0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0D2B45', fontSize: '12px', fontWeight: 700, marginTop: '3px' }}>
                    {s.number.padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: '#0D2B45', fontSize: '20px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                      {s.title}
                    </h2>
                    {s.body && (
                      <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.75, opacity: 0.7, marginBottom: s.list || s.listLabel ? '16px' : '0' }}>
                        {s.body}
                      </p>
                    )}
                    {s.listLabel && (
                      <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.75, opacity: 0.7, marginBottom: '12px' }}>
                        {s.listLabel}
                      </p>
                    )}
                    {s.list && (
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: s.footer ? '16px' : '0' }}>
                        {s.list.map(item => (
                          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D2B45', opacity: 0.35, flexShrink: 0, marginTop: '8px' }} />
                            <span style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.7, opacity: 0.7 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.footer && (
                      <p style={{ color: '#0D2B45', fontSize: '15px', lineHeight: 1.75, opacity: 0.7 }}>
                        {s.footer}
                      </p>
                    )}
                    {s.contact && (
                      <a href={`mailto:${s.contact}`} style={{ color: '#0D2B45', fontSize: '15px', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(13,43,69,0.3)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = '#0D2B45')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(13,43,69,0.3)')}>
                        {s.contact}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
