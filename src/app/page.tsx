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
      description: 'Comprehensive healthcare solution combining online telemedicine consultations, pharmacy services, and ambulance connectivity in one platform.',
      features: [
        'Virtual doctor consultations',
        'Online pharmacy integration',
        'Ambulance service connectivity',
        'Secure health records access'
      ]
    },
    {
      title: 'Blue Collar Jobs Platform',
      icon: 'fas fa-hard-hat',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'Comprehensive job portal connecting local and international blue-collar workers with verified opportunities across industries.',
      features: [
        'Local to international job matching',
        'Skill verification system',
        'Multi-language support',
        'Career progression tracking'
      ]
    },
    {
      title: 'NutriHealth Buddy',
      icon: 'fas fa-heartbeat',
      status: 'In Development',
      statusClass: 'status-development',
      description: 'AI-powered nutrition and wellness companion for personalized meal planning, health tracking, and fitness guidance.',
      features: [
        'AI meal planning & recipes',
        'Calorie & macro tracking',
        'Fitness integration',
        'Health insights & reports'
      ]
    },
    {
      title: 'Women\'s Safety App',
      icon: 'fas fa-shield-alt',
      status: 'In Development',
      statusClass: 'status-development',
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
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Transparent quick commerce with zero hidden prices, no dark patterns, and assured quality delivery.',
      features: [
        '100% transparent pricing',
        'No dark patterns guarantee',
        'Quality assured delivery',
        'Local store partnerships'
      ]
    },
    {
      title: 'Vayu Ride Sharing',
      icon: 'fas fa-car',
      status: 'Planned',
      statusClass: 'status-planned',
      description: 'Connected transportation with autonomous car services, car wash, and comprehensive vehicle care features.',
      features: [
        'Ride-hailing service',
        'Autonomous vehicle ready',
        'Car wash & care booking',
        'Vehicle maintenance alerts'
      ]
    },
    {
      title: 'Enterprise Management SaaS',
      icon: 'fas fa-cogs',
      status: 'Planned',
      statusClass: 'status-planned',
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
      status: 'Planned',
      statusClass: 'status-planned',
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
      status: 'Research',
      statusClass: 'status-research',
      description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density.',
      features: [
        'AI vision-based detection',
        'Dynamic signal timing',
        'Traffic density analysis',
        'Smart city integration'
      ]
    },
    {
      title: 'AI Job Application Agent',
      icon: 'fas fa-robot',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Automated job searching and application agent with intelligent matching and profile optimization.',
      features: [
        'Auto job search & apply',
        'Resume optimization',
        'Interview preparation',
        'Application tracking'
      ]
    },
    {
      title: 'NeuroSync Brain Interface',
      icon: 'fas fa-brain',
      status: 'Research',
      statusClass: 'status-research',
      description: 'Neural chip technology enabling brain-to-brain API communication for next-generation connectivity.',
      features: [
        'Brain-computer interface',
        'Thought-based communication',
        'Neural API integration',
        'Privacy-first design'
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