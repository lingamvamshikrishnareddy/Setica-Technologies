'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style jsx>{`
        @keyframes logoGlow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(74, 85, 255, 0.5), 0 0 40px rgba(74, 85, 255, 0.3);
          }
          50% {
            box-shadow: 0 4px 30px rgba(255, 111, 0, 0.6), 0 0 50px rgba(255, 111, 0, 0.4);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 0',
        background: scrolled 
          ? 'rgba(10, 14, 39, 0.85)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Enhanced Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            position: 'relative',
          }}>
            <div style={{
              position: 'relative',
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(74, 85, 255, 0.5)',
              animation: 'logoGlow 3s ease-in-out infinite',
            }}>
              {/* Animated light overlay */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                animation: 'shine 3s linear infinite',
              }} />
              <img
                src="/images/setica-preview.webp"
                alt="Setica Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            
            <span style={{
              fontSize: '1.6rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff 0%, #4A55FF 50%, #ff6f00 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 2px 8px rgba(74, 85, 255, 0.4))',
              letterSpacing: '0.5px',
            }}>
              Setica
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  position: 'relative',
                  color: isActive(link.href) ? '#4A55FF' : '#ffffff',
                  textDecoration: 'none',
                  fontWeight: isActive(link.href) ? '600' : '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4A55FF';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #4A55FF, #ff6f00)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 8px rgba(74, 85, 255, 0.6)',
                    animation: 'slideIn 0.3s ease',
                  }} />
                )}
              </Link>
            ))}
            
            <Link
              href="/book-consultation"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(74, 85, 255, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(74, 85, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(74, 85, 255, 0.4)';
              }}
            >
              Book Appointment Free
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 14, 39, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '20px 5%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'fadeIn 0.3s ease',
            maxHeight: '80vh',
            overflowY: 'auto',
          }} className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive(link.href) ? '#4A55FF' : '#ffffff',
                  textDecoration: 'none',
                  fontWeight: isActive(link.href) ? '600' : '500',
                  fontSize: '1.1rem',
                  padding: '10px',
                  borderLeft: isActive(link.href) ? '3px solid #4A55FF' : '3px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                border: 'none',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                marginTop: '10px',
              }}
            >
              Book Appointment Free
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}