'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label && (
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: 'var(--text-color)',
          fontSize: '0.9rem',
          fontWeight: '600',
        }}>
          {label}
          {props.required && (
            <span style={{ color: 'var(--primary-orange)', marginLeft: '4px' }}>*</span>
          )}
        </label>
      )}
      
      <input
        className={className}
        style={{
          width: '100%',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: error 
            ? '1px solid rgba(244, 67, 54, 0.5)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          color: 'var(--text-color)',
          fontSize: '1rem',
          outline: 'none',
          transition: 'all 0.3s ease',
          fontFamily: 'var(--font-inter)',
        }}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = 'var(--primary-blue)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error 
            ? 'rgba(244, 67, 54, 0.5)' 
            : 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        }}
        {...props}
      />
      
      {error && (
        <p style={{
          marginTop: '6px',
          fontSize: '0.85rem',
          color: '#ff6b6b',
        }}>
          <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
          {error}
        </p>
      )}
    </div>
  );
}