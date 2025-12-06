'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [showMoon, setShowMoon] = useState(true);
  const [showSun, setShowSun] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    
    // Animation sequence timing
    const moonSetTimer = setTimeout(() => {
      setShowMoon(false);
      setShowSun(true);
    }, 3500);
    
    // Loop the animation
    const resetTimer = setTimeout(() => {
      setShowMoon(true);
      setShowSun(false);
    }, 8500);
    
    return () => {
      clearTimeout(moonSetTimer);
      clearTimeout(resetTimer);
    };
  }, [showSun]);

  const handleWaitlistClick = () => {
    router.push('/join-waitlist');
  };

  const handleProductsClick = () => {
    router.push('/products');
  };

  return (
    <div style={{
      minHeight: '100vh',
      height: 'auto',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1d3a 50%, #0a0e27 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      paddingTop: '6rem',
      paddingBottom: '4rem',
    }}>
      {/* Animated Background Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: showSun 
          ? 'radial-gradient(ellipse at top, rgba(255, 200, 0, 0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(255, 111, 0, 0.4) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at top, rgba(74, 85, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(255, 111, 0, 0.2) 0%, transparent 50%)',
        animation: 'pulseGradient 8s ease-in-out infinite',
        transition: 'background 2s ease-in-out',
        zIndex: 0,
      }} />

      {/* Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(74, 85, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 85, 255, 0.12) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.4,
        zIndex: 0,
      }} />

      {/* Animations - Only render on client */}
      {isClient && (
        <>
          {/* Moon Setting Diagonally */}
          {showMoon && (
            <div style={{
              position: 'absolute',
              top: '85%',
              left: '75%',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #f5f5f5, #d0d0d0)',
              boxShadow: `0 0 80px rgba(255, 255, 255, 0.7), 
                          0 0 120px rgba(255, 255, 255, 0.5),
                          inset -15px -15px 40px rgba(0, 0, 0, 0.25)`,
              zIndex: 5,
              animation: 'moonSetDiagonal 3.5s ease-in-out forwards',
            }}>
              {/* Moon craters */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.18)',
                boxShadow: 'inset 3px 3px 6px rgba(0, 0, 0, 0.4)',
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.15)',
                boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.4)',
              }} />
              <div style={{
                position: 'absolute',
                top: '35%',
                right: '20%',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.14)',
                boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.4)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '45%',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.12)',
                boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)',
              }} />
            </div>
          )}

          {/* Sun Rising Diagonally */}
          {showSun && (
            <>
              {/* Sun core with inner glow layers */}
              <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '5%',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, #ffffff 0%, #fff9e6 15%, #ffeb3b 30%, #ffc107 50%, #ff9800 70%, #ff6f00 100%)',
                boxShadow: `0 0 120px rgba(255, 235, 59, 1),
                            0 0 180px rgba(255, 193, 7, 0.9),
                            0 0 240px rgba(255, 152, 0, 0.7),
                            0 0 300px rgba(255, 111, 0, 0.5),
                            inset 0 0 80px rgba(255, 255, 255, 0.3)`,
                zIndex: 5,
                animation: 'sunRiseDiagonalFast 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, sunPulseGlow 2s ease-in-out infinite 2.5s',
              }}>
                {/* Inner bright core */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '60%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
                  animation: 'innerGlow 1.5s ease-in-out infinite',
                }} />
              </div>
              
              {/* Sunrise glow horizon - more vibrant */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '350px',
                background: 'linear-gradient(to top, rgba(255, 152, 0, 0.6), rgba(255, 193, 7, 0.4), rgba(255, 235, 59, 0.2), transparent)',
                zIndex: 3,
                animation: 'horizonGlowFast 2s ease-out forwards',
              }} />

              {/* Radial light beams effect */}
              <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '5%',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, transparent 40%, rgba(255, 235, 59, 0.3) 50%, rgba(255, 193, 7, 0.2) 70%, transparent 100%)',
                animation: 'sunRiseDiagonalFast 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, expandLight 2s ease-out infinite 2.5s',
                zIndex: 4,
                transform: 'scale(1)',
              }} />

              {/* Sun particles rising with trails */}
              {[...Array(40)].map((_, i) => (
                <div
                  key={`sunparticle-${i}`}
                  style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: `${3 + (i * 2.5) % 35}%`,
                    width: `${3 + (i % 3)}px`,
                    height: `${3 + (i % 3)}px`,
                    background: i % 3 === 0 ? '#ffeb3b' : i % 3 === 1 ? '#ffc107' : '#ff9800',
                    borderRadius: '50%',
                    animation: `floatUpSunFast ${5 + (i % 4)}s ease-out ${(i % 8) * 0.3}s infinite`,
                    filter: 'blur(1px)',
                    boxShadow: `0 0 15px ${i % 3 === 0 ? '#ffeb3b' : i % 3 === 1 ? '#ffc107' : '#ff9800'}`,
                    zIndex: 6,
                    opacity: 0,
                  }}
                />
              ))}

              {/* Light streaks */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`streak-${i}`}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: `${(i * 8) % 100}%`,
                    width: '2px',
                    height: '100px',
                    background: 'linear-gradient(to top, rgba(255, 235, 59, 0.6), transparent)',
                    animation: `streakRise ${3 + (i % 3)}s ease-out ${(i % 6) * 0.2}s infinite`,
                    filter: 'blur(1px)',
                    zIndex: 4,
                    opacity: 0,
                  }}
                />
              ))}
            </>
          )}

          {/* Twinkling Stars - fade out during sunrise */}
          {[...Array(50)].map((_, i) => {
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
                  boxShadow: '0 0 6px rgba(255,255,255,0.9)',
                  zIndex: 1,
                  opacity: showSun ? 0 : 1,
                  transition: 'opacity 3s ease-out',
                }}
              />
            );
          })}

          {/* Shooting Stars - only during night */}
          {!showSun && [0, 1, 2].map((i) => (
            <div
              key={`shooting-${i}`}
              style={{
                position: 'absolute',
                width: '150px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                top: `${10 + i * 15}%`,
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
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                borderRadius: '50%',
                background: showSun
                  ? i === 0 
                    ? 'radial-gradient(circle, rgba(255, 200, 0, 0.3) 0%, transparent 70%)'
                    : i === 1
                    ? 'radial-gradient(circle, rgba(255, 149, 0, 0.25) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255, 111, 0, 0.25) 0%, transparent 70%)'
                  : i === 0 
                    ? 'radial-gradient(circle, rgba(74, 85, 255, 0.45) 0%, transparent 70%)'
                    : i === 1
                    ? 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255, 111, 0, 0.35) 0%, transparent 70%)',
                top: `${15 + i * 30}%`,
                left: `${10 + i * 25}%`,
                animation: `floatOrb ${8 + i * 2}s infinite ease-in-out ${i * 2}s`,
                filter: 'blur(25px)',
                zIndex: 1,
                transition: 'background 2s ease-in-out',
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
                background: i % 3 === 0 ? '#4A55FF' : i % 3 === 1 ? '#8b5cf6' : '#ff6f00',
                borderRadius: '50%',
                bottom: '0',
                left: `${(i * 5) % 100}%`,
                animation: `floatUp ${12 + (i % 6)}s infinite ease-in ${(i % 5) * 1}s`,
                filter: 'blur(1px)',
                boxShadow: `0 0 8px ${i % 3 === 0 ? '#4A55FF' : i % 3 === 1 ? '#8b5cf6' : '#ff6f00'}`,
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
                border: '2px solid rgba(74, 85, 255, 0.3)',
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
        maxWidth: '1100px',
        textAlign: 'center',
        color: 'white',
      }}>
        {/* Animated Headline */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
        }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ffffff 0%, #4A55FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: isClient ? 'fadeInWord 0.6s ease both' : 'none',
          }}>
            Building{' '}
          </span>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: isClient ? 'fadeInWord 0.6s ease 0.2s both' : 'none',
            filter: 'drop-shadow(0 0 20px rgba(74, 85, 255, 0.4))',
          }}>
            Tomorrow&apos;s{' '}
          </span>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ff6f00 0%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: isClient ? 'fadeInWord 0.6s ease 0.4s both' : 'none',
          }}>
            Solutions, Today
          </span>
        </h1>
        
        {/* Improved Subtext */}
        <p style={{
          fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.7',
          fontWeight: '400',
        }}>
          Setica delivers <strong style={{ color: '#4A55FF', fontWeight: '600' }}>60+ integrated products</strong> and premium development services — across healthcare, logistics, fintech, and enterprise solutions — unifying your digital transformation.
        </p>

        {/* Enhanced Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          <button 
          onClick={handleWaitlistClick}
          style={{
            padding: '1.1rem 2.8rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
            border: 'none',
            borderRadius: '14px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            boxShadow: '0 10px 35px rgba(74, 85, 255, 0.5)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 15px 45px rgba(74, 85, 255, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(74, 85, 255, 0.5)';
          }}>
            <span style={{ position: 'relative', zIndex: 2 }}>Join Waitlist →</span>
            {isClient && (
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)',
                animation: 'shimmer 3s infinite',
              }} />
            )}
          </button>

          <button 
          onClick={handleProductsClick}
          style={{
            padding: '1.1rem 2.8rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'white',
            background: 'rgba(74, 85, 255, 0.15)',
            border: '2px solid rgba(74, 85, 255, 0.5)',
            borderRadius: '14px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(74, 85, 255, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(74, 85, 255, 0.8)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 85, 255, 0.3), inset 0 0 20px rgba(74, 85, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(74, 85, 255, 0.15)';
            e.currentTarget.style.borderColor = 'rgba(74, 85, 255, 0.5)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Explore Products
          </button>
        </div>

        {/* Scroll Indicator */}
        {isClient && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'fadeInUp 1s ease 1s both',
          }}>
            <span style={{
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Scroll to explore
            </span>
            <div style={{
              width: '24px',
              height: '36px',
              border: '2px solid rgba(74, 85, 255, 0.6)',
              borderRadius: '12px',
              position: 'relative',
              animation: 'pulse 2s infinite ease-in-out',
            }}>
              <div style={{
                width: '4px',
                height: '8px',
                background: 'rgba(74, 85, 255, 0.9)',
                borderRadius: '2px',
                position: 'absolute',
                top: '6px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'scrollWheel 2s infinite ease-in-out',
              }} />
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.6); }
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
            opacity: 0.7;
          }
          50% { 
            transform: translate(35px, -35px) scale(1.15);
            opacity: 0.9;
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

        @keyframes floatUpSun {
          0% { 
            opacity: 0; 
            transform: translateY(0) translateX(0);
          }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { 
            opacity: 0; 
            transform: translateY(-300px) translateX(50px);
          }
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
          50% { opacity: 0.75; }
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

        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1;
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.8;
          }
        }

        @keyframes scrollWheel {
          0% {
            top: 6px;
            opacity: 1;
          }
          50% {
            top: 14px;
            opacity: 0.5;
          }
          100% {
            top: 6px;
            opacity: 1;
          }
        }

        @keyframes moonSetDiagonal {
          0% {
            top: 15%;
            left: 75%;
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          100% {
            top: 110%;
            left: -20%;
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
        }

        @keyframes sunRiseDiagonalFast {
          0% {
            bottom: -100px;
            left: 5%;
            opacity: 0;
            transform: scale(0.3) rotate(-90deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            bottom: 45%;
            left: 40%;
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes sunPulseGlow {
          0%, 100% {
            box-shadow: 0 0 120px rgba(255, 235, 59, 1),
                        0 0 180px rgba(255, 193, 7, 0.9),
                        0 0 240px rgba(255, 152, 0, 0.7),
                        0 0 300px rgba(255, 111, 0, 0.5),
                        inset 0 0 80px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 140px rgba(255, 235, 59, 1),
                        0 0 200px rgba(255, 193, 7, 1),
                        0 0 280px rgba(255, 152, 0, 0.8),
                        0 0 350px rgba(255, 111, 0, 0.6),
                        inset 0 0 100px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes innerGlow {
          0%, 100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes expandLight {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes horizonGlowFast {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes floatUpSunFast {
          0% { 
            opacity: 0; 
            transform: translateY(0) translateX(0);
          }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { 
            opacity: 0; 
            transform: translateY(-400px) translateX(80px);
          }
        }

        @keyframes streakRise {
          0% {
            opacity: 0;
            height: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            height: 300px;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(1.8rem, 8vw, 2.5rem) !important;
            margin-bottom: 1.2rem !important;
          }
          p {
            font-size: clamp(0.95rem, 4vw, 1.1rem) !important;
            margin-bottom: 2rem !important;
            padding: 0 0.5rem;
          }
          button {
            padding: 0.95rem 2rem !important;
            fontSize: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
}