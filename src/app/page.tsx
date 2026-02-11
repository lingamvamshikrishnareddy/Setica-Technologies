'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add loaded class to body after page loads
    document.body.classList.add('loaded');
    
    // Trigger CTA visibility on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />

      {/* CTA Section - Apple Style */}
      <section className="cta-section" style={{
        position: 'relative',
        padding: '120px 5%',
        textAlign: 'center',
        background: '#000000',
        overflow: 'hidden',
      }}>
        {/* Subtle Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }} />

        <div className="cta-content" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '720px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {/* Section Label */}
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '1.5rem',
          }}>
            Let's work together
          </span>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            marginBottom: '1.25rem',
            color: '#f5f5f7',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}>
            Ready to bring your idea to life?
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            fontWeight: '400',
          }}>
            Book a free consultation to discuss your project. No commitment, just a conversation about how we can help.
          </p>

          {/* CTA Button - Apple Style */}
          <Link 
            href="/book-consultation" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '16px 36px',
              background: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '980px',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Book a free consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          {/* Trust Note */}
          <p style={{
            marginTop: '2rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.4)',
          }}>
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>
    </>
  );
}
