'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  hover = true,
  className = '',
  style = {},
}: CardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyles: React.CSSProperties = {
    position: 'relative',
    padding: '35px 30px',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    overflow: 'hidden',
    ...style,
  };

  const hoverStyles: React.CSSProperties = hover && isHovered ? {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 20px 60px rgba(74, 85, 255, 0.2)',
  } : {};

  return (
    <div
      className={`card ${className}`}
      style={{
        ...baseStyles,
        ...hoverStyles,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div style={{
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Animated border on hover */}
      {hover && (
        <div style={{
          content: '',
          position: 'absolute',
          inset: 0,
          borderRadius: '24px',
          padding: '2px',
          background: 'linear-gradient(135deg, #4A55FF, #ff6f00, #4A55FF)',
          backgroundSize: '300% 300%',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          animation: isHovered ? 'borderSnake 4s linear infinite' : 'none',
          pointerEvents: 'none',
        }} />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}