'use client';

import { useState, useEffect } from 'react';
import { addToWaitlist, getWaitlistCount, getInterestCount, incrementInterestCount } from '@/lib/firebase/firestore';

export default function JoinWaitlistPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [interestCount, setInterestCount] = useState(0);
  const [hasClickedInterest, setHasClickedInterest] = useState(false);

  useEffect(() => {
    // Add loaded class
    document.body.classList.add('loaded');
    
    // Check if user has clicked interest before
    const userInterested = localStorage.getItem('seticaUserInterested');
    if (userInterested === 'true') {
      setHasClickedInterest(true);
    }

    // Fetch counts
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [waitlist, interest] = await Promise.all([
        getWaitlistCount(),
        getInterestCount()
      ]);
      setWaitlistCount(waitlist);
      setInterestCount(interest);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      await addToWaitlist(email);
      setMessage({ 
        text: 'Success! You\'ve joined the waitlist. Check your email soon!', 
        type: 'success' 
      });
      setEmail('');
      
      // Refresh counts
      await fetchCounts();
    } catch (error: any) {
      if (error.message === 'Email already exists in waitlist') {
        setMessage({ 
          text: 'This email is already on the waitlist!', 
          type: 'error' 
        });
      } else {
        setMessage({ 
          text: 'An error occurred. Please try again.', 
          type: 'error' 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInterestClick = async () => {
    if (hasClickedInterest) return;

    try {
      await incrementInterestCount();
      setHasClickedInterest(true);
      localStorage.setItem('seticaUserInterested', 'true');
      
      // Refresh counts
      await fetchCounts();
    } catch (error) {
      console.error('Error incrementing interest:', error);
    }
  };

  return (
    <>
      <header className="page-header" style={{
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 60px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        overflow: 'hidden'
      }}>
        <div className="stars" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 0,
          background: '#000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center'
        }}></div>
        <div className="twinkling" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 1,
          background: 'transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center',
          animation: 'move-twink-back 200s linear infinite'
        }}></div>
        <div className="header-content" style={{ position: 'relative', zIndex: 5 }}>
          <h1>Join the Setica Waitlist</h1>
          <p>
            Be among the first to experience the future of integrated life management. 
            Sign up for exclusive updates and early access.
          </p>
        </div>
      </header>

      <section style={{
        padding: '80px 5%',
        background: 'linear-gradient(to bottom, var(--dark-card), var(--dark-bg))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }} className="waitlist-section">
        <div style={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: 'clamp(30px, 5vw, 50px)',
          borderRadius: '24px',
          maxWidth: '550px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflow: 'hidden'
        }} className="waitlist-container">
          <h2 style={{
            color: 'var(--text-color)',
            marginBottom: '15px',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)'
          }}>Get Early Access</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '30px',
            fontSize: '0.95rem'
          }}>
            Enter your email below to reserve your spot and receive notifications about our launch.
          </p>

          {message.text && (
            <div style={{
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: '500',
              backgroundColor: message.type === 'success' 
                ? 'rgba(46, 204, 113, 0.2)' 
                : 'rgba(231, 76, 60, 0.2)',
              color: message.type === 'success' ? '#2ecc71' : '#e74c3c',
              border: `1px solid ${message.type === 'success' ? '#2ecc71' : '#e74c3c'}`
            }}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                padding: '15px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-color)',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{
                padding: '15px 20px',
                fontSize: '1rem',
                borderRadius: '12px',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                'Join Waitlist Now'
              )}
            </button>
          </form>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '25px',
            marginTop: '40px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="stats-container">
            <div className="stat-box" style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '25px 20px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              overflow: 'hidden'
            }}>
              <p style={{
                fontSize: '0.85rem',
                marginBottom: '12px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '500'
              }}>People Interested</p>
              <span style={{
                fontSize: '2.8rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #4A55FF, #6366f1)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
                lineHeight: 1,
                marginBottom: '15px',
                transition: 'transform 0.3s ease'
              }}>
                {interestCount}
              </span>
              <button
                onClick={handleInterestClick}
                disabled={hasClickedInterest}
                style={{
                  background: hasClickedInterest 
                    ? 'rgba(46, 204, 113, 0.2)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-color)',
                  border: `1px solid ${hasClickedInterest ? 'rgba(46, 204, 113, 0.3)' : 'rgba(255, 255, 255, 0.15)'}`,
                  padding: '10px 20px',
                  fontSize: '0.85rem',
                  cursor: hasClickedInterest ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '10px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  opacity: hasClickedInterest ? 0.6 : 1
                }}
              >
                <i className={hasClickedInterest ? 'fas fa-check' : 'fas fa-heart'}></i>
                {' '}
                {hasClickedInterest ? 'Thanks!' : "I'm Interested!"}
              </button>
            </div>

            <div className="stat-box waitlist-stat" style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '25px 20px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              overflow: 'hidden'
            }}>
              <p style={{
                fontSize: '0.85rem',
                marginBottom: '12px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontWeight: '500'
              }}>On Waitlist</p>
              <span style={{
                fontSize: '2.8rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #ff6f00, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
                lineHeight: 1,
                marginBottom: '15px',
                transition: 'transform 0.3s ease'
              }}>
                {waitlistCount}
              </span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }

        input:focus {
          outline: none;
          border-color: var(--primary-blue) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 0 0 3px rgba(74, 85, 255, 0.3);
        }

        button:hover:not(:disabled) {
          background: rgba(74, 85, 255, 0.2) !important;
          border-color: rgba(74, 85, 255, 0.4) !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(74, 85, 255, 0.3);
        }

        .stat-box:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 20px 60px rgba(74, 85, 255, 0.2) !important;
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </>
  );
}