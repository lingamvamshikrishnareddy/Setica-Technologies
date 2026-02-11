'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showSecondaryButton?: boolean;
}

export default function CTA({
  title = "Ready to Transform Your Business?",
  description = "Book a free consultation to discuss your project needs and get a clear roadmap for your digital product.",
  primaryButtonText = "BOOK APPOINTMENT FREE",
  primaryButtonLink = "/book-consultation",
  secondaryButtonText = "Explore Portfolio",
  secondaryButtonLink = "/portfolio",
  showSecondaryButton = false,
}: CTAProps) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '1rem',
          color: 'var(--text-color)',
          fontWeight: '800',
        }}>
          {title}
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          lineHeight: '1.7',
        }}>
          {description}
        </p>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link 
            href={primaryButtonLink}
            style={{ textDecoration: 'none' }}
          >
            <Button size="large">
              {primaryButtonText}
              <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
            </Button>
          </Link>

          {showSecondaryButton && (
            <Link 
              href={secondaryButtonLink}
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outline" size="large">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>

        {/* Trust indicators */}
        <div style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          opacity: 0.7,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--primary-blue)',
              marginBottom: '5px',
            }}>
              40+
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
            }}>
              Products
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--primary-orange)',
              marginBottom: '5px',
            }}>
              <i className="fas fa-infinity"></i>
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
            }}>
              Premium Services
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--primary-blue)',
              marginBottom: '5px',
            }}>
              24/7
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
            }}>
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}