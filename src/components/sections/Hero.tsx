'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBookConsultationClick = () => {
    router.push('/book-consultation');
  };

  return (
    <div style={{
      minHeight: '100vh',
      height: 'auto',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #000000 0%, #0d0d0d 50%, #1a1a1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      paddingTop: '8rem',
      paddingBottom: '6rem',
    }}>
      {/* Subtle Ambient Glow - Apple Style */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0,
        animation: 'ambientGlow 8s ease-in-out infinite',
      }} />

      {/* Subtle Secondary Glow */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        animation: 'ambientGlow 10s ease-in-out infinite reverse',
      }} />

      {/* Subtle Grid Pattern - Very Minimal */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.5,
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '980px',
        textAlign: 'center',
        color: 'white',
      }}>
        {/* Apple-style Badge */}
        {isClient && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            marginBottom: '2.5rem',
            fontSize: '0.85rem',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '0.02em',
            animation: isVisible ? 'fadeInDown 0.8s ease-out' : 'none',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              background: '#3b82f6',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span>Now accepting new projects</span>
          </div>
        )}

        {/* Elegant Headline - Apple Style */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: '600',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none',
        }}>
          <span style={{
            display: 'block',
            color: '#f5f5f7',
            marginBottom: '0.5rem',
          }}>
            Beautiful apps.
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Built for growth.
          </span>
        </h1>

        {/* Refined Subtext */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '3.5rem',
          maxWidth: '680px',
          margin: '0 auto 3.5rem',
          lineHeight: '1.6',
          fontWeight: '400',
          letterSpacing: '-0.01em',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
        }}>
          We craft exceptional mobile and web experiences for startups and small businesses. 
          Simple, elegant, and designed to scale.
        </p>

        {/* Apple-style Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
        }}>
          <button 
            onClick={handleBookConsultationClick}
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'white',
              background: '#3b82f6',
              border: 'none',
              borderRadius: '980px',
              cursor: 'pointer',
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
          </button>

          <button 
            onClick={handleBookConsultationClick}
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.9)',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '980px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            View our work
          </button>
        </div>

        {/* Trust Indicators - Apple Style */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span>5-star rated</span>
          </div>
          <div style={{
            width: '1px',
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>50+ projects delivered</span>
          </div>
          <div style={{
            width: '1px',
            height: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
          }} />
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>30+ happy clients</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      {isClient && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fadeInUp 0.8s ease-out 1s both',
        }}>
          <span style={{
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Scroll
          </span>
          <div style={{
            width: '20px',
            height: '32px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            position: 'relative',
          }}>
            <div style={{
              width: '3px',
              height: '6px',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '2px',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scrollWheel 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes ambientGlow {
          0%, 100% { 
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: translateX(-50%) scale(1.1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes scrollWheel {
          0% {
            top: 6px;
            opacity: 1;
          }
          50% {
            top: 14px;
            opacity: 0.3;
          }
          100% {
            top: 6px;
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(2rem, 8vw, 2.8rem) !important;
            margin-bottom: 1.2rem !important;
          }
          p {
            font-size: clamp(1rem, 4vw, 1.15rem) !important;
            margin-bottom: 2.5rem !important;
            padding: 0 1rem;
          }
          button {
            padding: 12px 24px !important;
            fontSize: 0.95rem !important;
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .trust-indicators {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
