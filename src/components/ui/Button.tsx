'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontFamily: 'var(--font-inter)',
    width: fullWidth ? '100%' : 'auto',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '8px 16px',
      fontSize: '0.85rem',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '0.9rem',
    },
    large: {
      padding: '16px 32px',
      fontSize: '1rem',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-orange))',
      color: 'white',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--text-color)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--primary-blue)',
      border: '2px solid var(--primary-blue)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      className={`btn ${className}`}
      style={combinedStyles}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 85, 255, 0.3)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        } else if (variant === 'outline') {
          e.currentTarget.style.background = 'var(--primary-blue)';
          e.currentTarget.style.color = 'white';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        } else if (variant === 'outline') {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--primary-blue)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}