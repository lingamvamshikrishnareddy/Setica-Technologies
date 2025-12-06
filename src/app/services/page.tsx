'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firestore';

export default function ServicesPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [pricingTab, setPricingTab] = useState<'development' | 'maintenance'>('development');

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const handleNavigateToWaitlist = () => {
    router.push('/join-waitlist');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await addDoc(collection(db, 'contact-messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: 'new'
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      description: 'Strategic marketing campaigns across Instagram, Reddit, X (Twitter), WeChat, and LinkedIn.',
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
        'ChatGPT API integration'
      ]
    }
  ];

  const whyUsStats = [
    {
      number: '8+',
      label: 'Projects Delivered',
      icon: 'fas fa-check-circle',
      description: '5 PWA websites, 2 full-stack web projects, 1 mobile app'
    },
    {
      number: '6+',
      label: 'Satisfied Clients',
      icon: 'fas fa-users',
      description: 'All projects delivered with 5-star ratings'
    },
    {
      number: '100+',
      label: 'Community Members',
      icon: 'fas fa-heart',
      description: 'Growing community of developers and businesses'
    },
    {
      number: '2+',
      label: 'Years Experience',
      icon: 'fas fa-calendar',
      description: 'Delivering excellence since 2022'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce PWA Platform',
      category: 'PWA Website',
      description: 'Full-featured progressive web app with payment integration and real-time inventory',
      tech: ['React', 'Node.js', 'MongoDB', 'PWA'],
      rating: 5
    },
    {
      title: 'Healthcare Appointment System',
      category: 'Full-Stack Web',
      description: 'Complete booking system with patient management and telemedicine features',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      rating: 5
    },
    {
      title: 'Fitness Tracking Mobile App',
      category: 'Mobile App',
      description: 'Cross-platform fitness app with workout plans and progress tracking',
      tech: ['React Native', 'Firebase', 'AI Integration'],
      rating: 5
    },
    {
      title: 'Real Estate Listing Platform',
      category: 'PWA Website',
      description: 'Property listing platform with advanced search and virtual tours',
      tech: ['React', 'Express', 'MongoDB'],
      rating: 5
    }
  ];

  const developmentPricing = [
    {
      name: 'Basic App Package',
      price: '$499',
      currency: 'USD',
      description: 'Frontend Development',
      features: [
        'Mobile app for your users',
        'Converting your design into working app',
        'Connecting to external services',
        'Smooth animations and transitions',
        '10-30 Day Delivery',
        'Unlimited changes until you are happy'
      ],
      popular: false
    },
    {
      name: 'Complete Starter Package',
      price: '$1999',
      currency: 'USD',
      description: 'MVP Development',
      features: [
        'Mobile app plus admin dashboard',
        'Custom design for your brand',
        'Building your apps brain (backend)',
        '1-3 Month Delivery',
        'App Store & Play Store publishing',
        'Unlimited changes until you are happy'
      ],
      popular: true
    },
    {
      name: 'Everything You Need',
      price: '$3499',
      currency: 'USD',
      description: 'Full-Cycle Development',
      features: [
        'User app, business app & admin dashboard',
        'Premium customized design',
        'Complete backend built for growth',
        '2-4 Month Delivery',
        'Full control with admin dashboard',
        'Unlimited changes until you are happy'
      ],
      popular: false
    }
  ];

  const maintenancePricing = [
    {
      name: 'Essential Care Plan',
      price: '$99',
      currency: '/month',
      description: 'Basic',
      features: [
        'Fix up to 5 bugs each week',
        'Add 1 small feature every 2 months',
        'Monthly app speed improvements',
        'Email help (24-hour response)',
        'Monthly progress summaries'
      ],
      popular: false
    },
    {
      name: 'Most Popular Plan',
      price: '$299',
      currency: '/month',
      description: 'Standard',
      features: [
        'Fix up to 10 bugs each week',
        'Add 2 new features each month',
        'Urgent help within 6 hours',
        'Monthly security check-ups',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Complete Care Package',
      price: '$799',
      currency: '/month',
      description: 'Premium',
      features: [
        'Unlimited bug fixes anytime',
        'Custom feature roadmap',
        'Round-the-clock help (2-hour response)',
        'Your own personal tech manager',
        'Long-term app growth planning'
      ],
      popular: false
    }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable SaaS Applications',
      excerpt: 'Learn the essential architecture patterns for creating scalable multi-tenant SaaS platforms.',
      date: 'Nov 28, 2024',
      category: 'Development',
      readTime: '8 min read'
    },
    {
      title: 'AI Integration Best Practices',
      excerpt: 'How to effectively integrate ChatGPT and Claude APIs into your applications.',
      date: 'Nov 15, 2024',
      category: 'AI/ML',
      readTime: '6 min read'
    },
    {
      title: 'PWA vs Native Apps in 2024',
      excerpt: 'A comprehensive comparison to help you choose the right approach for your project.',
      date: 'Nov 3, 2024',
      category: 'Mobile',
      readTime: '10 min read'
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

      {/* Why Choose Us Section */}
      <section style={{
        padding: '100px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Why Choose Setica?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Proven track record of delivering exceptional digital solutions
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {whyUsStats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '40px 30px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease'
            }} className="stat-card">
              <i className={stat.icon} style={{
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '20px',
                display: 'block'
              }}></i>
              <h3 style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: 'var(--text-color)',
                marginBottom: '10px'
              }}>
                {stat.number}
              </h3>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#4A55FF',
                marginBottom: '15px'
              }}>
                {stat.label}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6'
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(to bottom, var(--dark-card), var(--dark-bg))'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Our Services
          </h2>
        </div>

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
                <button 
                  onClick={handleNavigateToWaitlist}
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
                    cursor: 'pointer'
                  }}
                  className="service-cta"
                >
                  Get Started <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section style={{
        padding: '100px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Our Recent Projects
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Showcasing excellence in every delivery
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              padding: '35px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease'
            }} className="project-card">
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(74, 85, 255, 0.15)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#4A55FF',
                marginBottom: '20px'
              }}>
                {project.category}
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                marginBottom: '15px',
                color: 'var(--text-color)',
                fontWeight: '700'
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '20px'
              }}>
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} style={{
                    padding: '4px 12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                {[...Array(project.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" style={{ color: '#FFD700', fontSize: '1rem' }}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(to bottom, var(--dark-card), var(--dark-bg))'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Transparent Pricing
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            No hidden fees, clear deliverables
          </p>

          {/* Pricing Toggle */}
          <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button
              onClick={() => setPricingTab('development')}
              style={{
                flex: 1,
                padding: '14px 24px',
                borderRadius: '12px',
                border: 'none',
                background: pricingTab === 'development' 
                  ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                  : 'transparent',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Development
            </button>
            <button
              onClick={() => setPricingTab('maintenance')}
              style={{
                flex: 1,
                padding: '14px 24px',
                borderRadius: '12px',
                border: 'none',
                background: pricingTab === 'maintenance' 
                  ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                  : 'transparent',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Maintenance
            </button>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {(pricingTab === 'development' ? developmentPricing : maintenancePricing).map((pkg, index) => (
            <div key={index} style={{
              position: 'relative',
              padding: '40px 30px',
              background: pkg.popular 
                ? 'linear-gradient(135deg, rgba(74, 85, 255, 0.1), rgba(255, 111, 0, 0.1))' 
                : 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              border: pkg.popular 
                ? '2px solid rgba(74, 85, 255, 0.5)' 
                : '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.4s ease'
            }} className="pricing-card">
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '30px',
                  padding: '8px 20px',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  borderRadius: '20px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  boxShadow: '0 5px 20px rgba(74, 85, 255, 0.4)'
                }}>
                  {pricingTab === 'maintenance' ? 'MOST POPULAR' : 'RECOMMENDED'}
                </div>
              )}

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                {pkg.description}
              </p>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--text-color)',
                fontWeight: '700',
                marginBottom: '20px'
              }}>
                {pkg.name}
              </h3>

              <div style={{ marginBottom: '30px' }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {pkg.price}
                </span>
                <span style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-muted)',
                  marginLeft: '8px'
                }}>
                  {pkg.currency}
                </span>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 30px 0'
              }}>
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} style={{
                    padding: '12px 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <i className="fas fa-check-circle" style={{
                      color: '#4A55FF',
                      fontSize: '1rem',
                      minWidth: '20px',
                      marginTop: '2px'
                    }}></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleNavigateToWaitlist}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: pkg.popular 
                    ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                    : 'rgba(74, 85, 255, 0.1)',
                  color: pkg.popular ? 'white' : '#4A55FF',
                  border: pkg.popular ? 'none' : '1px solid rgba(74, 85, 255, 0.3)',
                  borderRadius: '14px',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                className="pricing-cta"
              >
                {pricingTab === 'development' ? 'Start Your Project' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section style={{
        padding: '100px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Latest Insights
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Stay updated with our latest thoughts on development and technology
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{
              padding: '35px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} className="blog-card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <span style={{
                  padding: '6px 16px',
                  background: 'rgba(74, 85, 255, 0.15)',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#4A55FF'
                }}>
                  {post.category}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  {post.date}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px',
                color: 'var(--text-color)',
                fontWeight: '700'
              }}>
                {post.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}>
                {post.excerpt}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#4A55FF',
                  fontWeight: '600'
                }}>
                  Read More →
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section style={{
        padding: '80px 5%',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>Ready to Build Something Amazing?</h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '3rem'
          }}>
            Let&apos;s discuss your project and create exceptional digital experiences together.
          </p>

          <form onSubmit={handleSubmit} style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'left'
          }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-color)',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'var(--text-color)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4A55FF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-color)',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'var(--text-color)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4A55FF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-color)',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'var(--text-color)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4A55FF'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '16px 40px',
                background: isSubmitting 
                  ? 'rgba(74, 85, 255, 0.5)' 
                  : 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="submit-btn"
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
            </button>

            {submitStatus === 'success' && (
              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '12px',
                color: '#22c55e',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
                color: '#ef4444',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                ✕ Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>

          <p style={{
            marginTop: '25px',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
          }}>
            Or email us directly at{' '}
            <a 
              href="mailto:lingamvamshikrishnareddy@gmail.com"
              style={{
                color: '#4A55FF',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              lingamvamshikrishnareddy@gmail.com
            </a>
          </p>
        </div>
      </section>

      <style jsx>{`
        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(74, 85, 255, 0.3);
          border-color: rgba(74, 85, 255, 0.3);
        }

        .service-cta:hover {
          background: rgba(74, 85, 255, 0.2) !important;
          border-color: rgba(74, 85, 255, 0.4) !important;
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(74, 85, 255, 0.3);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(74, 85, 255, 0.3);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .pricing-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(74, 85, 255, 0.4);
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(74, 85, 255, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(74, 85, 255, 0.4);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </>
  );
}