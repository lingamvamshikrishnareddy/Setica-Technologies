'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  useEffect(() => {
    // Add loaded class to body after page loads
    document.body.classList.add('loaded');
  }, []);

  const solutions = [
    {
      title: 'Telehealth Platform',
      icon: 'fas fa-briefcase-medical',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'Connect with healthcare providers, schedule appointments, and manage your health records - all in one secure location.',
      features: [
        'Virtual doctor consultations',
        'Secure medical record access',
        'Ambulance service connectivity',
        'Prescription management'
      ]
    },
    {
      title: 'Blue Collar Jobs Platform',
      icon: 'fas fa-hard-hat',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'A dedicated platform connecting skilled workers with relevant opportunities, designed specifically for the underserved blue-collar segment.',
      features: [
        'AI-powered job matching',
        'Skill verification tracking',
        'Direct messaging',
        'Career resources'
      ]
    },
    {
      title: 'Health & Fitness App',
      icon: 'fas fa-heartbeat',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'Track your nutrition, plan workouts, and monitor your progress with personalized health insights.',
      features: [
        'Personalized nutrition tracking',
        'Adaptive workout routines',
        'Progress tracking & reports',
        'Wearable device integration'
      ]
    },
    {
      title: 'Women\'s Safety Tools',
      icon: 'fas fa-shield-alt',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'Enhance personal security with location sharing, emergency contacts, and community safety features.',
      features: [
        'Real-time location sharing',
        'One-tap emergency alert (SOS)',
        'Institutional safety partnerships',
        'Automated journey monitoring'
      ]
    },
    {
      title: 'SetCart Quick Commerce',
      icon: 'fas fa-shipping-fast',
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Transparent quick commerce with zero dark patterns, connecting users with local stores for rapid delivery.',
      features: [
        '100% transparent pricing',
        'Sub-30 min local delivery',
        'No hidden fees or tricks',
        'Support local businesses'
      ]
    },
    {
      title: 'Vayu Ride Sharing',
      icon: 'fas fa-car',
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Connected transportation service optimizing urban mobility with focus on affordability and efficiency.',
      features: [
        'Real-time ride matching',
        'Driver verification & safety',
        'Multiple transport options',
        'Loyalty & rewards system'
      ]
    },
    {
      title: 'Enterprise Management SaaS',
      icon: 'fas fa-cogs',
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Complete business OS with CRM, project management, and workflow automation. Alternative to Zoho and Salesforce.',
      features: [
        'Unified CRM platform',
        'Project management tools',
        'Workflow automation',
        'Team collaboration'
      ]
    },
    {
      title: 'Yatra - Travel & Hospitality',
      icon: 'fas fa-plane-departure',
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Complete travel platform with budget stays, spiritual travel, honeymoon packages, and AI itinerary planning.',
      features: [
        'Budget stays (₹99-₹499)',
        'Spiritual travel mode',
        'AI Travel Assistant',
        'Gamified rewards system'
      ]
    },
    {
      title: 'Fintech Solution',
      icon: 'fas fa-coins',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Manage your finances with modern tools for budgeting, seamless payments, and financial wellness insights.',
      features: [
        'Automated expense tracking',
        'Secure P2P payments',
        'Financial health scoring',
        'Goal-based savings tracking'
      ]
    },
    {
      title: 'AI Job Application Agent',
      icon: 'fas fa-robot',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Automated job searching and application with AI-powered resume optimization.',
      features: [
        'Auto job search & apply',
        'Resume optimization',
        'Interview preparation',
        'Application tracking'
      ]
    },
    {
      title: 'Cyber Shield',
      icon: 'fas fa-user-shield',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Comprehensive cybersecurity platform for personal and business protection.',
      features: [
        'Real-time threat monitoring',
        'Identity protection',
        'Secure browsing & VPN',
        'Data encryption tools'
      ]
    },
    {
      title: 'Kalam EV Vehicle',
      icon: 'fas fa-charging-station',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Quad-motor electric vehicle with specialized lithium battery cells for unmatched reliability.',
      features: [
        '4-motor redundancy',
        'Advanced battery tech',
        'Smart connectivity',
        'Sustainable design'
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
            in development or planned for future releases.
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
                <span className={`status-tag ${solution.statusClass}`}>
                  {solution.status}
                </span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
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
                <Link href="/products" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }} className="read-more">
                  Learn more <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/products" className="btn btn-primary" style={{ marginRight: '15px' }}>
            View Complete Roadmap (40+ Products)
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