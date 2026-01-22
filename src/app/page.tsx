'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
   const router = useRouter();

   useEffect(() => {
     // Add loaded class to body after page loads
     document.body.classList.add('loaded');
   }, []);

  const solutions = [
    {
      title: 'Telehealth Platform',
      icon: 'fas fa-briefcase-medical',
      status: 'testing',
      description: 'Comprehensive healthcare solution combining online telemedicine consultations, pharmacy services, and ambulance connectivity in one platform.',
      features: [
        'Virtual doctor consultations',
        'Online pharmacy integration',
        'Ambulance service connectivity',
        'Secure health records access'
      ]
    },
    {
      title: 'Women\'s Safety App',
      icon: 'fas fa-shield-alt',
      status: 'testing',
      description: 'Individual-registered SOS emergency platform with real-time alerts, location sharing, and trusted contact networks.',
      features: [
        'Personal SOS registration',
        'Real-time location sharing',
        'Emergency contact alerts',
        'Journey monitoring'
      ]
    },
    {
      title: 'SetCart Quick Commerce',
      icon: 'fas fa-shipping-fast',
      status: 'testing',
      description: 'Transparent quick commerce with zero hidden prices, no dark patterns, and assured quality delivery.',
      features: [
        '100% transparent pricing',
        'No dark patterns guarantee',
        'Quality assured delivery',
        'Local store partnerships'
      ]
    },
    {
      title: 'Enterprise Management SaaS',
      icon: 'fas fa-cogs',
      status: 'testing',
      description: 'Business OS for MSMEs and startups with CRM, project management, and workflow automation tools.',
      features: [
        'Unified CRM platform',
        'MSME-focused features',
        'Startup tools & templates',
        'Workflow automation'
      ]
    },
    {
      title: 'Yatra Travel & Hospitality',
      icon: 'fas fa-plane-departure',
      status: 'testing',
      description: 'Online hospitality and booking platform for hotels, flights, and complete travel experiences.',
      features: [
        'Hotel & flight booking',
        'Travel packages',
        'Itinerary planning',
        'Local experiences'
      ]
    },
    {
      title: 'Traffic AI',
      icon: 'fas fa-traffic-light',
      status: 'testing',
      description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density.',
      features: [
        'AI vision-based detection',
        'Dynamic signal timing',
        'Traffic density analysis',
        'Smart city integration'
      ]
    }
  ];

  return (
    <>
      <Hero />

      {/* Solutions Section */}
      <section className="solutions-section" style={{
        padding: '100px 5%',
        background: 'linear-gradient(to bottom, var(--dark-card), var(--dark-bg))'
      }}>
        <div className="section-header">
          <h2>Featured Solutions & Product Roadmap</h2>
          <p>
            Explore Setica&apos;s comprehensive ecosystem of integrated solutions currently 
            in development or In Development for future releases.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }} className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-card-content" style={{ position: 'relative', zIndex: 1 }}>
                <span className={`status-tag ${solution.status === 'testing' ? 'status-testing' : 'status-development'}`}>
                  {solution.status === 'testing' ? 'Testing & Production' : 'In Development'}
                </span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }} className="solution-icon-wrapper">
                    <i className={solution.icon} style={{
                      fontSize: '2.5rem',
                      background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      transition: 'transform 0.3s ease'
                    }}></i>
                    <h3 style={{
                      fontSize: '1.3rem',
                      color: 'var(--text-color)',
                      fontWeight: '700'
                    }}>{solution.title}</h3>
                  </div>
                  <Heart
                    size={24}
                    style={{
                      color: '#ff6f00',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onClick={() => router.push('/join-waitlist')}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>{solution.description}</p>
                <ul className="features-list" style={{
                  listStyle: 'none',
                  marginBottom: '20px'
                }}>
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      padding: '8px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className="fas fa-check-circle" style={{
                        color: 'var(--primary-blue)',
                        fontSize: '0.7rem'
                      }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '20px'
                }}>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: 'linear-gradient(135deg, #4a55ff, #6b73ff)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={() => window.open('https://example.com/demo', '_blank')}
                  >
                    Demo Link
                  </button>
                  <button style={{
                    flex: 1,
                    padding: '10px 15px',
                    background: 'linear-gradient(135deg, #ff6f00, #ff8c00)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  >
                    Demo Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/products" className="btn btn-primary" style={{ marginRight: '15px' }}>
            View Complete Roadmap (50+ Products)
          </Link>
          <Link href="/services" className="btn btn-primary">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>Ready to Simplify Your Life?</h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem'
          }}>
            Join the waitlist and be the first to experience the unified Setica platform.
          </p>
          <Link href="/join-waitlist" style={{
            padding: '16px 40px',
            background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-orange))',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '1.1rem',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }} className="btn-cta">
            JOIN WAITLIST →
          </Link>
        </div>
      </section>
    </>
  );
}