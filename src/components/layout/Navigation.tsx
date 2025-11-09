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
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-blue);
        }

        .love-button-container:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
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
            background: rgba(15, 15, 26, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 40px;
            transition: left 0.3s ease;
          }

          .nav-links.active {
            left: 0;
          }

          .cta-buttons {
            display: none;
          }
        }
      `}</style>

      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div className="logo">
            <Link href="/">
              <Image 
                src="/images/setica-preview.jpg" 
                alt="Setica Logo" 
                width={140}
                height={35}
                style={{ height: '35px', width: 'auto' }}
              />
            </Link>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link 
              href="/solutions" 
              className={isActive('/solutions') ? 'active' : ''}
              style={{
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              Solutions
            </Link>
            <Link 
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              style={{
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              About
            </Link>
            <Link 
              href="/products"
              className={isActive('/products') ? 'active' : ''}
              style={{
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              Products
            </Link>
            <Link 
              href="/services"
              className={isActive('/services') ? 'active' : ''}
              style={{
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              Services
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
              background: hasLoved ? 'rgba(255, 111, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <span className="heart-icon" style={{ fontSize: '1.2rem' }}>❤️</span>
            <span className="love-count" style={{ fontWeight: '600', color: 'var(--text-color)' }}>
              {loveCount}
            </span>
          </div>

          <div className="cta-buttons" style={{ display: 'flex', gap: '15px' }}>
            <Link href="/join-waitlist" className="btn btn-primary">
              Join Waitlist
            </Link>
          </div>

          <div 
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'pointer'
            }}
          >
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-color)',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-color)',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-color)',
              transition: 'all 0.3s ease'
            }}></span>
          </div>
        </div>
      </nav>
    </>
  );
}