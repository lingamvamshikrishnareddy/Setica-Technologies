'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const phases = [
    {
      title: 'Phase 1: Foundation & Core Services',
      products: [
        {
          icon: 'fas fa-briefcase-medical',
          title: 'Telehealth Platform',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Comprehensive virtual healthcare with consultations, secure health records, and ambulance connectivity.'
        },
        {
          icon: 'fas fa-hard-hat',
          title: 'Jobs Platform',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'AI-powered job matching for blue-collar workers with skill verification and career resources.'
        },
        {
          icon: 'fas fa-heartbeat',
          title: 'Health & Fitness Hub',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Centralized wellness tracking with nutrition, workouts, and wearable integration.'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Women\'s Safety Tools',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Real-time location sharing, SOS alerts, and institutional partnerships for enhanced safety.'
        }
      ]
    },
    {
      title: 'Phase 2: Service Expansion & Integration',
      products: [
        {
          icon: 'fas fa-cogs',
          title: 'Enterprise Management SaaS',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Business OS platform with CRM, project management, and workflow automation. Alternative to Zoho and Salesforce.'
        },
        {
          icon: 'fas fa-shipping-fast',
          title: 'SetCart - Quick Commerce',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Transparent quick commerce with zero dark patterns, connecting users with local stores for rapid delivery.'
        },
        {
          icon: 'fas fa-tools',
          title: 'Construction & Trades SaaS',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Project management, scheduling, and communication tools for the construction industry.'
        },
        {
          icon: 'fas fa-car',
          title: 'Vayu Ride Sharing',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Integrated ride-hailing with driver verification, multiple transport options, and loyalty rewards.'
        },
        {
          icon: 'fas fa-calendar-alt',
          title: 'Gatherly Event Platform',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Event organization, RSVP management, and community gathering discovery.'
        },
        {
          icon: 'fas fa-plane-departure',
          title: 'Yatra - Travel & Hospitality',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Budget travel platform with spiritual travel mode, honeymoon packages, and AI-powered itinerary planning with transparent pricing.'
        }
      ]
    },
    {
      title: 'Phase 3: Advanced Solutions & Tech',
      products: [
        // All the research phase products
        { icon: 'fas fa-traffic-light', title: 'Traffic AI', status: 'Research', statusClass: 'status-research', description: 'AI-powered traffic management and route optimization for smart cities.' },
        { icon: 'fas fa-spa', title: 'Beauty Care Platform', status: 'Research', statusClass: 'status-research', description: 'At-home beauty services, salon booking, and personalized beauty recommendations.' },
        { icon: 'fas fa-car-side', title: 'Vehicle Wash Service', status: 'Research', statusClass: 'status-research', description: 'On-demand vehicle cleaning and maintenance booking platform.' },
        { icon: 'fas fa-hand-holding-medical', title: 'Addiction Recovery App', status: 'Research', statusClass: 'status-research', description: 'Support platform for cigarette, alcohol, and substance addiction recovery with community and tracking.' },
        { icon: 'fas fa-envelope-open-text', title: 'Cold DM Website', status: 'Research', statusClass: 'status-research', description: 'Professional outreach platform for effective cold messaging and lead generation.' },
        { icon: 'fas fa-user-shield', title: 'Cyber Shield', status: 'Research', statusClass: 'status-research', description: 'Comprehensive cybersecurity platform for personal and business protection.' },
        { icon: 'fas fa-user-nurse', title: 'Senior & Baby Care', status: 'Research', statusClass: 'status-research', description: 'Specialized care management for elderly and infant monitoring with caregiver coordination.' },
        { icon: 'fas fa-clipboard-check', title: 'Client Scope Creep Killer', status: 'Research', statusClass: 'status-research', description: 'Project management tool to prevent scope creep with clear boundaries and change tracking.' },
        { icon: 'fas fa-link', title: 'Blockchain Solutions', status: 'Research', statusClass: 'status-research', description: 'Decentralized applications and blockchain integration for secure transactions.' },
        { icon: 'fas fa-graduation-cap', title: 'College Life Management', status: 'Research', statusClass: 'status-research', description: 'All-in-one platform for students managing academics, schedules, and campus life.' },
        { icon: 'fas fa-robot', title: 'AI Job Application Agent', status: 'Research', statusClass: 'status-research', description: 'Automated job searching and application with AI-powered resume optimization.' },
        { icon: 'fas fa-heart-broken', title: 'Divorce Support (Men\'s Focus)', status: 'Research', statusClass: 'status-research', description: 'Resources, legal guidance, and emotional support for men navigating divorce.' },
        { icon: 'fas fa-comments', title: 'AI Chatbot (SLM Models)', status: 'Research', statusClass: 'status-research', description: 'Small language model powered conversational AI for business and personal use.' },
        { icon: 'fas fa-cookie-bite', title: 'ChippyChips.in', status: 'Research', statusClass: 'status-research', description: 'Pure vegetarian snacks delivery platform celebrating authentic Indian flavors.' },
        { icon: 'fas fa-utensils', title: 'BriyaniBro.in', status: 'Research', statusClass: 'status-research', description: 'Specialized online food delivery focusing on authentic biryani and regional cuisines.' },
        { icon: 'fas fa-om', title: 'Fast & Yoga', status: 'Research', statusClass: 'status-research', description: 'Integrated fasting and yoga practice platform for holistic wellness.' },
        { icon: 'fas fa-recycle', title: 'Waste Management & Carbon Credits', status: 'Research', statusClass: 'status-research', description: 'Sustainable waste management with carbon credit tracking and trading.' },
        { icon: 'fas fa-code', title: 'Synaptika AI Agent', status: 'Research', statusClass: 'status-research', description: 'AI-powered coding assistant for automated software development and code optimization.' },
        { icon: 'fas fa-solar-panel', title: 'Energy Monitor Grid', status: 'Research', statusClass: 'status-research', description: 'Smart energy monitoring and solar panel installation management platform.' },
        { icon: 'fas fa-building', title: 'Keeper - Resident Portal', status: 'Research', statusClass: 'status-research', description: 'Visitor management, maintenance requests, and payment portal for residential communities.' },
        { icon: 'fas fa-charging-station', title: 'Kalam EV Vehicle', status: 'Research', statusClass: 'status-research', description: 'Quad-motor electric vehicle with specialized lithium battery cells for unmatched reliability.' },
        { icon: 'fas fa-film', title: 'Studio Suite', status: 'Research', statusClass: 'status-research', description: 'Integrated video editing and design platform for content creators.' },
        { icon: 'fas fa-table', title: 'Excel Kitab', status: 'Research', statusClass: 'status-research', description: 'Online collaborative spreadsheet platform with advanced data analysis and real-time collaboration features.' },
        { icon: 'fas fa-baby', title: 'Baby ScreenRant Killer', status: 'Research', statusClass: 'status-research', description: 'Comprehensive parenting app for babies aged 1-5 with nutrition tracking, habit building, memory preservation, developmental checklists, and age-appropriate skill training.' },
        { icon: 'fas fa-laugh', title: 'Nexora', status: 'Research', statusClass: 'status-research', description: 'Entertainment platform for viral memes, movie shorts, and trending content discovery.' },
        { icon: 'fas fa-video', title: 'Pixel Stream', status: 'Research', statusClass: 'status-research', description: 'OTT platform dedicated to short films, comedy content, and emerging directors with opera performance streaming.' },
        { icon: 'fas fa-rocket', title: 'Startup Fundraising CRM', status: 'Research', statusClass: 'status-research', description: 'Comprehensive CRM for startups to manage investor relations, pitch tracking, and fundraising pipelines.' },
        { icon: 'fas fa-broadcast-tower', title: 'WaveLink', status: 'Research', statusClass: 'status-research', description: 'Video communication platform with integrated Persona AI agent for enhanced meetings and collaboration.' },
        { icon: 'fas fa-apple-alt', title: 'Nutrition Buddy', status: 'Research', statusClass: 'status-research', description: 'AI-powered meal planning and nutrition tracking with personalized recommendations and recipe suggestions.' },
        { icon: 'fas fa-home', title: 'Remis - Real Estate SaaS', status: 'Research', statusClass: 'status-research', description: 'Comprehensive real estate management and property search platform.' },
        { icon: 'fas fa-newspaper', title: 'User Stories News', status: 'Research', statusClass: 'status-research', description: 'Community-driven news platform featuring real user stories and experiences.' },
        { icon: 'fas fa-cut', title: 'Online Tailoring', status: 'Research', statusClass: 'status-research', description: 'Virtual tailoring services with precise measurements and home delivery.' },
        { icon: 'fas fa-chart-line', title: 'Stock & Trading - Quant Trading', status: 'Research', statusClass: 'status-research', description: 'Quantitative trading platform with algorithmic strategies and market analysis.' },
        { icon: 'fas fa-helicopter', title: 'Drones Logistics Platform', status: 'Research', statusClass: 'status-research', description: 'Automated drone delivery network for last-mile logistics.' },
        { icon: 'fas fa-bullhorn', title: 'Marketing SaaS - Creator Connect', status: 'Research', statusClass: 'status-research', description: 'Platform connecting brands with memers, influencers, and podcasters.' },
        { icon: 'fas fa-industry', title: 'Manufacturing SaaS', status: 'Research', statusClass: 'status-research', description: 'Production scheduling, quality control, and supply chain management.' },
        { icon: 'fas fa-tractor', title: 'FarmiCart', status: 'Research', statusClass: 'status-research', description: 'Direct B2B and retail marketplace connecting farmers with better pricing, eliminating middlemen for fair trade.' },
        { icon: 'fas fa-cloud', title: 'Cloud Bharath', status: 'Research', statusClass: 'status-research', description: 'Indigenous cloud infrastructure platform for Indian businesses.' },
        { icon: 'fas fa-wifi', title: 'LiFi Telecommunication', status: 'Research', statusClass: 'status-research', description: 'Data-only communication using light fidelity technology at reduced costs.' },
        { icon: 'fas fa-brain', title: 'NeuroSync - Brain Interface', status: 'Research', statusClass: 'status-research', description: 'Neural chip technology enabling brain-to-brain API communication.' },
        { icon: 'fas fa-water', title: 'Ganga - Water Purification', status: 'Research', statusClass: 'status-research', description: 'Advanced desalination and water purification converting seawater to fresh water.' },
        { icon: 'fas fa-dna', title: 'Mother AI - Life Creation', status: 'Research', statusClass: 'status-research', description: 'Biotech platform combining AI with gene editing for assisted reproductive technologies.' }
      ]
    }
  ];

  return (
    <>
      {/* Header */}
      <header style={{
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 60px',
        backgroundColor: 'var(--dark-bg)',
        overflow: 'hidden'
      }} className="page-header">
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
        <div style={{ zIndex: 5, position: 'relative' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: 'var(--text-color)',
            marginBottom: '1rem'
          }}>
            Product Ecosystem
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '700px',
            margin: '0 auto',
            color: 'var(--text-muted)'
          }}>
            Our comprehensive suite of integrated solutions spanning healthcare, productivity, mobility, and emerging technologies.
          </p>
        </div>
      </header>

      {/* Roadmap Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: 'var(--dark-card)',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          padding: '40px 0'
        }} className="roadmap-timeline">
          {/* Timeline line */}
          <div style={{
            content: '',
            position: 'absolute',
            left: '50px',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(to bottom, var(--primary-blue), var(--primary-orange))',
            borderRadius: '2px',
            opacity: 0.5
          }}></div>

          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} style={{ marginBottom: '60px', position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-orange))',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '12px',
                display: 'inline-block',
                marginBottom: '30px',
                fontSize: '1.4rem',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(74, 85, 255, 0.3)',
                position: 'relative',
                left: '-15px',
                zIndex: 2
              }}>
                {phase.title}
              </div>

              {phase.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  style={{
                    position: 'relative',
                    paddingLeft: '100px',
                    marginBottom: '40px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    padding: '25px 30px 25px 100px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
                  }}
                  className={`timeline-item ${product.statusClass}`}
                >
                  {/* Icon */}
                  <div style={{
                    position: 'absolute',
                    left: '30px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--dark-bg)',
                    border: `3px solid ${
                      product.statusClass === 'status-development' ? 'var(--primary-blue)' :
                      product.statusClass === 'status-planned' ? 'var(--primary-orange)' :
                      '#00b894'
                    }`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3
                  }}>
                    <i className={product.icon} style={{
                      color: product.statusClass === 'status-development' ? 'var(--primary-blue)' :
                             product.statusClass === 'status-planned' ? 'var(--primary-orange)' :
                             '#00b894',
                      fontSize: '1.2rem'
                    }}></i>
                  </div>

                  {/* Content */}
                  <div>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '15px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      backgroundColor: product.statusClass === 'status-development' ? 'rgba(74, 85, 255, 0.2)' :
                                      product.statusClass === 'status-planned' ? 'rgba(255, 111, 0, 0.2)' :
                                      'rgba(0, 184, 148, 0.2)',
                      color: product.statusClass === 'status-development' ? 'var(--primary-blue)' :
                             product.statusClass === 'status-planned' ? 'var(--primary-orange)' :
                             '#00b894'
                    }}>
                      {product.status}
                    </span>
                    <h3 style={{
                      fontSize: '1.3rem',
                      marginBottom: '10px',
                      color: 'var(--text-color)'
                    }}>
                      {product.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                      marginBottom: 0
                    }}>
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>
            Join Our Innovation Journey
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem'
          }}>
            Be part of building the future with our comprehensive product ecosystem.
          </p>
          <Link
            href="/join-waitlist"
            style={{
              padding: '16px 40px',
              background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-orange))',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
            className="btn-cta"
          >
            JOIN WAITLIST →
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }

        .timeline-item:hover {
          background-color: rgba(255, 255, 255, 0.07) !important;
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .roadmap-timeline::before {
            left: 25px !important;
          }

          .timeline-item {
            padding-left: 70px !important;
            padding-right: 20px !important;
          }

          .timeline-item > div:first-child {
            left: 5px !important;
          }
        }
      `}</style>
    </>
  );
}