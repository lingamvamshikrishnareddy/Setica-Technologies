
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-twitter', href: 'https://twitter.com/setica', label: 'Twitter' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/lingam-vamshi-krishna-reddy-1a7402160/', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/setica', label: 'GitHub' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/setica', label: 'Instagram' },
  ];

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
    ],
    resources: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Join Waitlist', href: '/join-waitlist' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  };

  return (
    <footer style={{
      background: 'var(--dark-card)',
      padding: '80px 5% 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '50px',
        }}>
          {/* Brand Section */}
          <div>
            <Link href="/" style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              marginBottom: '15px',
            }}>
              Setica
            </Link>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
              marginBottom: '20px',
            }}>
              Building the future with 60+ integrated solutions and premium development services.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '15px',
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-color)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--primary-orange))';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: 'var(--text-color)',
              marginBottom: '20px',
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <Link href={link.href} style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: 'var(--text-color)',
              marginBottom: '20px',
            }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.resources.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <Link href={link.href} style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: 'var(--text-color)',
              marginBottom: '20px',
            }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {footerLinks.legal.map((link) => (
                <li key={link.label} style={{ marginBottom: '12px' }}>
                  <Link href={link.href} style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
          }}>
            © {currentYear} Setica. All rights reserved. Made with{' '}
            <span className="heart-icon">❤️</span> in India.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
            <Link 
              href="/privacy-policy"
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Privacy
            </Link>
            <Link 
              href="/terms-conditions"
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Terms
            </Link>
            <Link 
              href="/refund-policy"
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
          }
          
          footer > div > div:last-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}