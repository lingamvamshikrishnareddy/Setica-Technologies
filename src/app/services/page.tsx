'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const services = [
    {
      title: 'Mobile App Development',
      icon: 'fas fa-mobile-alt',
      description: 'Cross-platform mobile applications built with React Native for seamless iOS and Android experiences.',
      features: [
        'React Native development',
        'Native performance optimization',
        'Cross-platform compatibility',
        'App Store & Play Store deployment',
        'Push notifications & analytics'
      ]
    },
    {
      title: 'Web Development & PWA',
      icon: 'fas fa-code',
      description: 'Modern web applications with MERN stack, TypeScript, and Next.js optimized for performance and SEO.',
      features: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'TypeScript & Next.js',
        'Progressive Web Apps (PWA)',
        'ChatGPT-powered SEO ranking',
        'Responsive & accessible design'
      ]
    },
    {
      title: 'Lead Collection & Management',
      icon: 'fas fa-users',
      description: 'Comprehensive lead generation systems with advanced CRM integration and automation workflows.',
      features: [
        'Custom lead capture forms',
        'CRM integration & automation',
        'Lead scoring & qualification',
        'Email marketing automation',
        'Analytics & conversion tracking'
      ]
    },
    {
      title: 'Multi-Platform Marketing',
      icon: 'fas fa-bullhorn',
      description: 'Strategic marketing campaigns across Instagram, Reddit, X (Twitter), WeChat, and LinkedIn with comprehensive metrics.',
      features: [
        'Instagram marketing & growth',
        'Reddit community engagement',
        'X (Twitter) strategy & automation',
        'LinkedIn B2B outreach',
        'WeChat international reach',
        'Comprehensive analytics dashboard'
      ]
    },
    {
      title: 'AI Model Fine-tuning & Chatbots',
      icon: 'fas fa-brain',
      description: 'Custom AI solutions including SLM/LLM fine-tuning, RAG implementation, and intelligent chatbot development.',
      features: [
        'Small & Large Language Model fine-tuning',
        'External RAG (Retrieval Augmented Generation)',
        'Custom AI chatbot development',
        'AI agent orchestration',
        'Domain-specific model training',
        'API integration & deployment'
      ]
    }
  ];

  const techStack = [
    { name: 'React & React Native', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'OpenAI & Claude', icon: 'fas fa-robot' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Next.js', icon: 'fas fa-layer-group' }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery',
      description: 'Understanding your vision, requirements, and business goals'
    },
    {
      step: '2',
      title: 'Design',
      description: 'Creating intuitive interfaces and user experiences'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Building with cutting-edge technologies and best practices'
    },
    {
      step: '4',
      title: 'Testing',
      description: 'Rigorous quality assurance and performance optimization'
    },
    {
      step: '5',
      title: 'Deployment',
      description: 'Launch and ongoing support with monitoring'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 80px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        overflow: 'hidden'
      }} className="services-hero">
        <div className="services-hero-content" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h1>Premium Development Services</h1>
          <p>
            Transform your vision into reality with our cutting-edge development and AI solutions. 
            From mobile apps to intelligent automation, we deliver excellence.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(to bottom, var(--dark-card), var(--dark-bg))',
        position: 'relative'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }} className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  marginBottom: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.15), rgba(255, 111, 0, 0.15))',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease'
                }} className="service-icon">
                  <i className={service.icon} style={{
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}></i>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  color: 'var(--text-color)',
                  fontWeight: '700'
                }}>{service.title}</h3>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'var(--text-muted)',
                  marginBottom: '25px'
                }}>{service.description}</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 25px 0'
                }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      padding: '10px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className="fas fa-check-circle" style={{
                        color: '#4A55FF',
                        fontSize: '0.8rem',
                        minWidth: '16px'
                      }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:lingamvamshikrishnareddy@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: 'rgba(74, 85, 255, 0.1)',
                    color: '#4A55FF',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(74, 85, 255, 0.2)',
                    textDecoration: 'none'
                  }}
                  className="service-cta"
                >
                  Get Started <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{
        padding: '80px 5%',
        background: 'var(--dark-bg)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--text-color)' }}>
          Our Technology Stack
        </h2>
        <p style={{
          maxWidth: '700px',
          margin: '0 auto 50px',
          color: 'var(--text-muted)'
        }}>
          We leverage cutting-edge technologies to deliver robust, scalable solutions
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }} className="tech-logos">
          {techStack.map((tech, index) => (
            <div key={index} style={{
              padding: '20px 30px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }} className="tech-logo">
              <i className={tech.icon} style={{
                fontSize: '1.8rem',
                background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}></i>
              <span style={{
                fontWeight: '600',
                color: 'var(--text-color)',
                fontSize: '0.95rem'
              }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '80px 5%',
        background: 'linear-gradient(to bottom, var(--dark-bg), var(--dark-card))'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '60px',
          color: 'var(--text-color)'
        }}>Our Development Process</h2>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }} className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '30px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }} className="process-step" data-step={step.step}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1.2rem',
                color: 'white'
              }}>
                {step.step}
              </div>
              <h4 style={{
                margin: '20px 0 10px',
                color: 'var(--text-color)',
                fontSize: '1.1rem'
              }}>{step.title}</h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                margin: 0
              }}>{step.description}</p>
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
          }}>Ready to Build Something Amazing?</h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem'
          }}>
            Let&apos;s discuss your project and create exceptional digital experiences together.
          </p>
          <a 
            href="mailto:lingamvamshikrishnareddy@gmail.com"
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
            CONTACT US →
          </a>
        </div>
      </section>

      <style jsx>{`
        .service-cta:hover {
          background: rgba(74, 85, 255, 0.2) !important;
          border-color: rgba(74, 85, 255, 0.4) !important;
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(74, 85, 255, 0.3);
        }

        .tech-logo:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(74, 85, 255, 0.3) !important;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(74, 85, 255, 0.2);
        }

        .process-step:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .process-steps {
            grid-template-columns: 1fr !important;
          }

          .tech-logos {
            gap: 15px !important;
          }

          .tech-logo {
            padding: 15px 20px !important;
          }
        }
      `}</style>
    </>
  );
}