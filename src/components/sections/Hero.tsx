'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showSecondaryButton?: boolean;
}

export default function Hero({
  title = "Building Tomorrow's Solutions, Today",
  subtitle = "Setica delivers 40+ integrated products and premium development services across healthcare, logistics, fintech, and enterprise solutions. Your unified platform for digital transformation.",
  primaryButtonText = "Join Waitlist",
  primaryButtonLink = "/join-waitlist",
  secondaryButtonText = "Explore Products",
  secondaryButtonLink = "/products",
  showSecondaryButton = true,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        
        <p>{subtitle}</p>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2.5rem',
        }}>
          <Link href={primaryButtonLink} style={{ textDecoration: 'none' }}>
            <Button size="large">
              {primaryButtonText}
              <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
            </Button>
          </Link>

          {showSecondaryButton && (
            <Link href={secondaryButtonLink} style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="large">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>

        {/* Feature Highlights */}
        <div style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap',
          opacity: 0.8,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <i className="fas fa-check-circle" style={{
              fontSize: '1.5rem',
              color: 'var(--primary-blue)',
            }}></i>
            <span style={{
              fontSize: '1rem',
              color: 'var(--text-color)',
            }}>
              40+ Products
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <i className="fas fa-check-circle" style={{
              fontSize: '1.5rem',
              color: 'var(--primary-orange)',
            }}></i>
            <span style={{
              fontSize: '1rem',
              color: 'var(--text-color)',
            }}>
              Premium Services
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <i className="fas fa-check-circle" style={{
              fontSize: '1.5rem',
              color: 'var(--primary-blue)',
            }}></i>
            <span style={{
              fontSize: '1rem',
              color: 'var(--text-color)',
            }}>
              Enterprise Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}