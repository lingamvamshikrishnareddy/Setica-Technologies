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
          description: 'Comprehensive healthcare solution combining online telemedicine consultations, pharmacy services, and ambulance connectivity in one platform.'
        },
        {
          icon: 'fas fa-hard-hat',
          title: 'Blue Collar Jobs Platform',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Comprehensive job portal connecting local and international blue-collar workers with verified opportunities across industries.'
        },
        {
          icon: 'fas fa-heartbeat',
          title: 'NutriHealth Buddy',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'AI-powered nutrition and wellness companion for personalized meal planning, health tracking, and fitness guidance.'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Women\'s Safety App',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Individual-registered SOS emergency platform with real-time alerts, location sharing, and trusted contact networks.'
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
          description: 'Business OS for MSMEs and startups with CRM, project management, and workflow automation tools.'
        },
        {
          icon: 'fas fa-shipping-fast',
          title: 'SetCart Quick Commerce',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Transparent quick commerce with zero hidden prices, no dark patterns, and assured quality delivery.'
        },
        {
          icon: 'fas fa-tools',
          title: 'Construction Management SaaS',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Comprehensive platform for clients to track contractors from project start to build completion, including design and progress monitoring.'
        },
        {
          icon: 'fas fa-car',
          title: 'Vayu Ride Sharing',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Connected transportation with autonomous car services, car wash, and comprehensive vehicle care features.'
        },
        {
          icon: 'fas fa-calendar-alt',
          title: 'Gatherly Event Platform',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Meetups and events platform for organizing, discovering, and managing community gatherings and social events.'
        },
        {
          icon: 'fas fa-plane-departure',
          title: 'TripNDrip Travel & Hospitality',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Online hospitality and booking platform for hotels, flights, and complete travel experiences.'
        },
        {
          icon: 'fas fa-book',
          title: 'Excel Kitab Accounting',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Simplified accounting and bookkeeping platform designed for small businesses and entrepreneurs.'
        },
        {
          icon: 'fas fa-piggy-bank',
          title: 'FinTech Banking',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Digital banking platform offering personal and business loans, fixed deposits, and comprehensive financial services.'
        }
      ]
    },
    {
      title: 'Phase 3: Advanced Solutions & Technologies',
      products: [
        {
          icon: 'fas fa-traffic-light',
          title: 'Traffic AI',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density instead of traditional fixed timers.'
        },
        {
          icon: 'fas fa-spa',
          title: 'BeautyCare AI',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered beauty routine optimizer with exercise recommendations and personalized product suggestions for skin glow-up and wellness.'
        },
        {
          icon: 'fas fa-car-side',
          title: 'Vehicle Care Services',
          status: 'Research',
          statusClass: 'status-research',
          description: 'On-demand car wash, services, and comprehensive vehicle care with maintenance tracking and alerts.'
        },
        {
          icon: 'fas fa-hand-holding-medical',
          title: 'Addiction Recovery App',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Support platform for alcoholic, smoker, and drug addiction recovery with alternative therapy recommendations and community support.'
        },
        {
          icon: 'fas fa-envelope-open-text',
          title: 'Cold DM Platform',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Consent-first, multi-platform cold DM tool for businesses across Instagram, Twitter, WhatsApp, WeChat, and Snapchat with proper opt-in/opt-out mechanisms.'
        },
        {
          icon: 'fas fa-user-shield',
          title: 'Cyber Shield',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Enterprise-grade cybersecurity SaaS for comprehensive personal and business protection with threat monitoring.'
        },
        {
          icon: 'fas fa-user-nurse',
          title: 'Senior & Baby Care',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Virtual nursing and care management for senior citizens and baby sitting services with real-time monitoring.'
        },
        {
          icon: 'fas fa-clipboard-check',
          title: 'Scope Creep Killer',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Project management tool preventing clients from adding out-of-scope features after fixed-price agreements with clear boundary enforcement.'
        },
        {
          icon: 'fas fa-link',
          title: 'Blockchain Rewards',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Token and rewards system using blockchain for purchase incentives and loyalty programs.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'College Life Management',
          status: 'Research',
          statusClass: 'status-research',
          description: 'All-in-one SaaS platform for students managing academics, schedules, and campus life activities.'
        },
        {
          icon: 'fas fa-robot',
          title: 'AI Job Application Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Automated job searching and application agent with intelligent matching and profile optimization.'
        },
        {
          icon: 'fas fa-heart-broken',
          title: 'Divorce Support Platform',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Divorce support resources and legal guidance specifically focused on men\'s needs during separation.'
        },
        {
          icon: 'fas fa-comments',
          title: 'AI Chatbot (SLM)',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Domain-specialized AI assistant using small language models, beating LLMs in speed, context accuracy, and achieving 80%+ relevance match scores.'
        },
        {
          icon: 'fas fa-cookie-bite',
          title: 'ChippyChips Veg Delivery',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Pure vegetarian food delivery app where orders are accepted within 15 minutes with quality assurance.'
        },
        {
          icon: 'fas fa-utensils',
          title: 'BriyaniBro',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized biryani delivery platform emphasizing premium meat quantity and quality with perfectly flavored rice.'
        },
        {
          icon: 'fas fa-om',
          title: 'Fast & Yoga',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Integrated fasting and yoga platform for nutritional wellness and holistic health practices.'
        },
        {
          icon: 'fas fa-recycle',
          title: 'Waste & Carbon Management',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Waste management, water management, and carbon credits marketplace for sustainable environmental solutions.'
        },
        {
          icon: 'fas fa-ring',
          title: 'Wedding SaaS',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Comprehensive wedding planning platform for managing vendors, guests, budgets, and complete wedding coordination.'
        },
        {
          icon: 'fas fa-code',
          title: 'Synaptika AI Editor',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI coding editor where complete apps and websites can be built in 5 minutes with automated development.'
        },
        {
          icon: 'fas fa-solar-panel',
          title: 'Energy Grid Monitor',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Smart energy grid management, monitoring, and energy production optimization platform.'
        },
        {
          icon: 'fas fa-building',
          title: 'GateKeeping Resident Portal',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Visitor management and maintenance request system for residential communities and commercial buildings.'
        },
        {
          icon: 'fas fa-charging-station',
          title: 'Kalam EV Vehicle',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Quad-motor electric vehicle with specialized lithium battery cells for unmatched reliability and performance.'
        },
        {
          icon: 'fas fa-film',
          title: 'Studio Suite',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Professional platform for creators to edit videos, photos, design logos, and create after effects content.'
        },
        {
          icon: 'fas fa-home',
          title: 'Remis Real Estate SaaS',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Real estate management platform specifically for dealers, agents, and owners focusing on customer satisfaction and lead management.'
        },
        {
          icon: 'fas fa-newspaper',
          title: 'User Stories News',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Platform where every individual can share their story and get featured as news content.'
        },
        {
          icon: 'fas fa-cut',
          title: 'Women\'s Tailoring',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized knitting and custom dress making service for women with precise measurements and designs.'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Stock Trading AI',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered stock and trading platform with intelligent market analysis and automated trading strategies.'
        },
        {
          icon: 'fas fa-helicopter',
          title: 'Drones Logistics',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Fast drone delivery platform for logistics under 3km with comprehensive drone management software.'
        },
        {
          icon: 'fas fa-bullhorn',
          title: 'Creator Connect Marketing',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Digital marketing platform connecting brands with memers, influencers, and podcasters for authentic reach.'
        },
        {
          icon: 'fas fa-industry',
          title: 'Manufacturing SaaS',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Production management, inventory control, and operations optimization for manufacturing businesses.'
        },
        {
          icon: 'fas fa-utensils',
          title: 'Restaurant Tech',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Complete restaurant management system for orders, chef coordination, reservations, and inventory tracking.'
        },
        {
          icon: 'fas fa-tractor',
          title: 'FarmiCart AgriTech',
          status: 'Research',
          statusClass: 'status-research',
          description: 'B2B online agriculture marketplace connecting farmers directly, eliminating middlemen for better pricing and fair trade.'
        },
        {
          icon: 'fas fa-baby',
          title: 'Parenting App (2-6 Years)',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Screen-free parenting platform for daily routine management and skill training for children aged 2-6 years.'
        },
        {
          icon: 'fas fa-laugh',
          title: 'Nexora Entertainment',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Entertainment platform featuring shorts, movie clips, and viral memes for trending content discovery.'
        },
        {
          icon: 'fas fa-video',
          title: 'PixelStream OTT',
          status: 'Research',
          statusClass: 'status-research',
          description: 'OTT platform for local creators, short films, soap operas, and showcasing new artists with original content.'
        },
        {
          icon: 'fas fa-rocket',
          title: 'Startup Fundraising CRM',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized CRM for startups to manage investor relations, pitch tracking, and fundraising pipelines.'
        },
        {
          icon: 'fas fa-broadcast-tower',
          title: 'WaveLink Video Platform',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Video communication platform with integrated features for enhanced meetings and team collaboration.'
        },
        {
          icon: 'fas fa-road',
          title: 'Road Accountability',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Platform for tracking and ensuring accountability in road construction and maintenance projects.'
        },
        {
          icon: 'fas fa-dna',
          title: 'BioTech SaaS',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Biotechnology management platform for research, lab operations, and data analysis in life sciences.'
        },
        {
          icon: 'fas fa-cloud',
          title: 'Cloud Bharath',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Indigenous cloud infrastructure platform designed specifically for Indian businesses with local compliance.'
        },
        {
          icon: 'fas fa-wifi',
          title: 'LiFi Telecommunication',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Pure digital data-only communication service using light fidelity technology at reduced operational costs.'
        },
        {
          icon: 'fas fa-brain',
          title: 'NeuroSync Brain Interface',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Neural chip technology enabling brain-to-brain API communication for next-generation connectivity.'
        },
        {
          icon: 'fas fa-water',
          title: 'Ganga Water Purification',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Advanced desalination and water purification technology converting seawater to fresh water for water scarcity solutions.'
        },
        {
          icon: 'fas fa-shield',
          title: 'Defense Threat Detection',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Advanced threat detection system with laser-based iron dome technology for national security applications.'
        },
        {
          icon: 'fas fa-oil-can',
          title: 'Oil & Gas SaaS',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Comprehensive management platform for oil and gas operations, exploration, and supply chain optimization.'
        },
        {
          icon: 'fas fa-ship',
          title: 'Freight Management',
          status: 'Research',
          statusClass: 'status-research',
          description: 'International freight and logistics SaaS for cross-border shipping and supply chain coordination.'
        },
        {
          icon: 'fas fa-robot',
          title: 'Robotics Platform',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Robotics development and deployment platform for industrial automation and smart manufacturing.'
        },
        {
          icon: 'fas fa-dna',
          title: 'Mother AI - Life Creation',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Biotech platform combining AI with gene editing for assisted reproductive technologies and life creation research.'
        },
        {
  icon: 'fas fa-balance-scale',
  title: 'Justica.ai - Legal Tech',
  status: 'Active',
  statusClass: 'status-active',
  description: 'AI-powered legal technology platform streamlining legal research, document analysis, and case management for law firms and legal professionals.'
},
{
  icon: 'fas fa-handshake',
  title: 'B2B Marketplace',
  status: 'Active',
  statusClass: 'status-active',
  description: 'Enterprise marketplace platform connecting buyers and sellers with intelligent matching, procurement automation, and seamless transaction management.'
}
      ]
    },
    {
      title: 'Phase 4: AI Agent Ecosystem',
      products: [
        {
          icon: 'fas fa-user-tie',
          title: 'AI Sales Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Autonomous sales agent for lead qualification, outreach, follow-ups, and deal closing with natural conversation abilities.'
        },
        {
          icon: 'fas fa-building',
          title: 'AI Real Estate Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered real estate agent for asset management, acquisitions, brokerage, development, property management, damage reports, and tenant communications.'
        },
        {
          icon: 'fas fa-seedling',
          title: 'AI Agriculture Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Precision farming AI agent for crop monitoring, disease detection, resource optimization, and food production management.'
        },
        {
          icon: 'fas fa-gavel',
          title: 'AI Legal Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Legal AI assistant for contract analysis, case research, document drafting, and compliance monitoring.'
        },
        {
          icon: 'fas fa-calculator',
          title: 'AI Accounting Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Automated accounting agent for bookkeeping, tax preparation, financial reporting, and audit assistance.'
        },
        {
          icon: 'fas fa-chart-bar',
          title: 'AI Finance Search Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Financial intelligence agent for market research, investment analysis, and real-time financial data discovery.'
        },
        {
          icon: 'fas fa-landmark',
          title: 'AI Government Infrastructure Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI agent for government infrastructure planning, project monitoring, resource allocation, and public service optimization.'
        },
        {
          icon: 'fas fa-headset',
          title: 'AI Customer Support Agent',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Intelligent customer support agent handling queries, troubleshooting, escalations, and providing 24/7 multilingual assistance.'
        }
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
            Our comprehensive suite of 50+ integrated solutions spanning healthcare, productivity, mobility, and emerging technologies.
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
            Be part of building the future with our comprehensive product ecosystem of 50+ solutions.
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