'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1d3a 50%, #0a0e27 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
        animation: 'pulseGradient 8s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
        zIndex: 0,
      }} />

      {/* Animations - Only render on client */}
      {isClient && (
        <>
          {/* Twinkling Stars */}
          {[...Array(40)].map((_, i) => {
            const size = 1 + (i % 3);
            const top = (i * 17) % 100;
            const left = (i * 23) % 100;
            const duration = 2 + (i % 3);
            const delay = (i % 4) * 0.5;
            
            return (
              <div
                key={`star-${i}`}
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  background: 'white',
                  borderRadius: '50%',
                  top: `${top}%`,
                  left: `${left}%`,
                  animation: `twinkle ${duration}s infinite ease-in-out ${delay}s`,
                  boxShadow: '0 0 4px rgba(255,255,255,0.8)',
                  zIndex: 1,
                }}
              />
            );
          })}

          {/* Shooting Stars */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={`shooting-${i}`}
              style={{
                position: 'absolute',
                width: '150px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                top: `${10 + i * 10}%`,
                left: '-150px',
                transform: 'rotate(-35deg)',
                animation: `shootingStar ${5 + i}s infinite ease-in ${i * 1.5}s`,
                boxShadow: '0 0 8px rgba(255,255,255,0.6)',
                zIndex: 1,
              }}
            />
          ))}

          {/* Floating Orbs */}
          {[0, 1, 2].map((i) => (
            <div
              key={`orb-${i}`}
              style={{
                position: 'absolute',
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                borderRadius: '50%',
                background: i === 0 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
                  : i === 1
                  ? 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 50%, transparent 100%)',
                top: `${20 + i * 25}%`,
                left: `${10 + i * 30}%`,
                animation: `floatOrb ${8 + i * 2}s infinite ease-in-out ${i * 2}s`,
                filter: 'blur(20px)',
                zIndex: 1,
              }}
            />
          ))}

          {/* Glowing Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#f97316',
                borderRadius: '50%',
                bottom: '0',
                left: `${(i * 5) % 100}%`,
                animation: `floatUp ${12 + (i % 6)}s infinite ease-in ${(i % 5) * 1}s`,
                filter: 'blur(1px)',
                boxShadow: `0 0 8px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#f97316'}`,
                zIndex: 1,
              }}
            />
          ))}

          {/* Animated Lines/Connections */}
          {[0, 1, 2].map((i) => (
            <div
              key={`line-${i}`}
              style={{
                position: 'absolute',
                width: '200px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
                top: `${30 + i * 20}%`,
                right: '-200px',
                animation: `slideLine ${6 + i * 2}s infinite ease-in-out ${i * 1.5}s`,
                zIndex: 1,
              }}
            />
          ))}

          {/* Pulse Circles */}
          {[0, 1].map((i) => (
            <div
              key={`pulse-${i}`}
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `pulseCircle ${4 + i * 2}s infinite ease-out ${i * 1}s`,
                zIndex: 1,
              }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        textAlign: 'center',
        color: 'white',
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #fbbf24 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.3',
          animation: isClient ? 'textGlow 3s ease-in-out infinite' : 'none',
        }}>
          Building Tomorrow&apos;s Solutions, Today
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: '1.8',
        }}>
          Setica delivers 60+ integrated products and premium development services across healthcare, logistics, fintech, and enterprise solutions. Your unified platform for digital transformation.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem',
        }}>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(59, 130, 246, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.4)';
          }}>
            <span style={{ position: 'relative', zIndex: 2 }}>Join Waitlist →</span>
            {isClient && (
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                animation: 'shimmer 3s infinite',
              }} />
            )}
          </button>

          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: 'transparent',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Explore Products
          </button>
        </div>

        {/* Feature Highlights */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 4rem)',
          flexWrap: 'wrap',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}>
          {[
            { icon: '✓', text: '60+ Products', color: '#3b82f6' },
            { icon: '✓', text: 'Premium Services', color: '#f97316' },
            { icon: '✓', text: 'Enterprise Ready', color: '#8b5cf6' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: isClient ? `fadeInUp 0.6s ease-out ${i * 0.2}s both` : 'none',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: `0 4px 16px ${item.color}66`,
              }}>
                {item.icon}
              </div>
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '500',
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes shootingStar {
          0% { left: -150px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }

        @keyframes floatOrb {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes floatUp {
          0% { 
            bottom: 0; 
            opacity: 0; 
            transform: translateX(0) scale(1);
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { 
            bottom: 100%; 
            opacity: 0; 
            transform: translateX(30px) scale(0.3);
          }
        }

        @keyframes slideLine {
          0% { right: -200px; opacity: 0; }
          50% { opacity: 1; }
          100% { right: 120%; opacity: 0; }
        }

        @keyframes pulseCircle {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulseGradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}