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
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Setica
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: isActive(link.href) ? '#4A55FF' : 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: isActive(link.href) ? '600' : '500',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = '#4A55FF';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = 'var(--text-color)';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/join-waitlist" className="btn btn-primary">
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-color)',
            fontSize: '1.5rem',
            cursor: 'pointer',
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
          background: 'rgba(15, 15, 26, 0.98)',
          backdropFilter: 'blur(20px)',
          padding: '20px 5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: isActive(link.href) ? '#4A55FF' : 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: isActive(link.href) ? '600' : '500',
                fontSize: '1.1rem',
                padding: '10px',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join-waitlist"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '10px' }}
          >
            Join Waitlist
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}