'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const [hasLoved, setHasLoved] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoveClick = () => {
    if (!hasLoved) {
      setLoveCount(loveCount + 1);
      setHasLoved(true);
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style jsx>{`
        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 4px 20px rgba(74, 85, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 4px 30px rgba(255, 111, 0, 0.6));
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

        @keyframes heartPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .nav-links a:hover {
          color: #4A55FF !important;
        }

        .love-button-container {
          transition: all 0.3s ease;
        }

        .love-button-container:hover {
          background: rgba(255, 111, 0, 0.15) !important;
          transform: scale(1.05);
        }

        .love-button-container:active .heart-icon {
          animation: heartPulse 0.3s ease;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex !important;
          }

          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(10, 14, 39, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 40px;
            transition: left 0.3s ease;
            z-index: 999;
            overflow-y: auto;
          }

          .nav-links.active {
            left: 0;
          }

          .cta-buttons {
            display: none;
          }

          .love-button-container {
            position: relative;
            z-index: 1000;
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
        background: isScrolled 
          ? 'rgba(10, 14, 39, 0.85)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
      }}>
        <div className="nav-container" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div className="logo" style={{
            animation: 'logoGlow 3s ease-in-out infinite',
          }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image 
                src="/images/setica-preview.jpg" 
                alt="Setica Logo" 
                width={140}
                height={35}
                style={{ 
                  height: '35px', 
                  width: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(74, 85, 255, 0.3)',
                }}
              />
            </Link>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link 
              href="/about"
              style={{
                position: 'relative',
                color: isActive('/about') ? '#4A55FF' : '#ffffff',
                textDecoration: 'none',
                fontWeight: isActive('/about') ? '600' : '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem',
                padding: '0.5rem 0',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
              {isActive('/about') && (
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
            <Link 
              href="/portfolio"
              style={{
                position: 'relative',
                color: isActive('/portfolio') ? '#4A55FF' : '#ffffff',
                textDecoration: 'none',
                fontWeight: isActive('/portfolio') ? '600' : '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem',
                padding: '0.5rem 0',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
              {isActive('/portfolio') && (
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
            <Link
              href="/services"
              style={{
                position: 'relative',
                color: isActive('/services') ? '#4A55FF' : '#ffffff',
                textDecoration: 'none',
                fontWeight: isActive('/services') ? '600' : '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem',
                padding: '0.5rem 0',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
              {isActive('/services') && (
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
            <Link
              href="/pricing"
              style={{
                position: 'relative',
                color: isActive('/pricing') ? '#4A55FF' : '#ffffff',
                textDecoration: 'none',
                fontWeight: isActive('/pricing') ? '600' : '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem',
                padding: '0.5rem 0',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
              {isActive('/pricing') && (
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
            <Link
              href="/contact"
              style={{
                position: 'relative',
                color: isActive('/contact') ? '#4A55FF' : '#ffffff',
                textDecoration: 'none',
                fontWeight: isActive('/contact') ? '600' : '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem',
                padding: '0.5rem 0',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
              {isActive('/contact') && (
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
          </div>

          <div 
            className="love-button-container"
            onClick={handleLoveClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: hasLoved ? 'rgba(255, 111, 0, 0.25)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              cursor: hasLoved ? 'default' : 'pointer',
              border: hasLoved ? '1px solid rgba(255, 111, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="heart-icon" style={{ fontSize: '1.2rem' }}>❤️</span>
            <span className="love-count" style={{ 
              fontWeight: '600', 
              color: hasLoved ? '#ff6f00' : '#ffffff',
              minWidth: '20px',
              textAlign: 'center',
            }}>
              {loveCount}
            </span>
          </div>

          <div className="cta-buttons" style={{ display: 'flex', gap: '15px' }}>
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

          <div 
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <span style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}></span>
          </div>
        </div>
      </nav>
    </>
  );
}
