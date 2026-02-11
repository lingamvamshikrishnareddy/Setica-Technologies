'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  testimonial: string;
  reviewer: string;
  link?: string;
  category: string;
  demoVideos?: string[];
}

export default function PortfolioPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const projects: Project[] = [
    // Web Development
    {
      id: 1,
      title: 'FundVault',
      description: 'Full-stack Next.js crowdfunding platform enabling organizations to raise funds efficiently. Features include secure donation processing, campaign management, and real-time analytics dashboard.',
      techStack: ['Next.js', 'TypeScript', 'Neon DB', 'Prisma', 'AWS', 'Docker'],
      testimonial: 'Vamshi is a capable contributor who performs well when working independently and can deliver solid individual results. He makes effective use of AI Assistant coding tools to support his development work.',
      reviewer: 'Akhilesh',
      link: 'https://www.fundvault.in',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Pocket Stylist',
      description: 'AI-powered personal styling web application with Firebase integration. Provides personalized fashion recommendations based on user preferences and style profiles.',
      techStack: ['HTML/CSS/JS', 'Firebase', 'Responsive Design'],
      testimonial: 'Very good and quick turnaround in 3 days with firebase integration',
      reviewer: 'Client (Upwork)',
      link: 'https://www.pocketstylist.ai',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Shriji Hardware',
      description: 'E-commerce website for professional tools and appliances. Features product catalog, search functionality, and responsive design optimized for all devices.',
      techStack: ['Web Development', 'Responsive Design', 'E-commerce'],
      testimonial: 'Professional and reliable service delivery',
      reviewer: 'Shriji Hardware Client',
      link: 'https://storied-empanada-0ca2ad.netlify.app/',
      category: 'Web Development'
    },
    // Mobile Apps
    {
      id: 4,
      title: 'Mobile App',
      description: 'Native mobile application currently in testing and deployment phase. Client-focused development with emphasis on user experience and performance optimization.',
      techStack: ['React Native', 'Expo', 'Mobile Development', 'Testing', 'Deployment'],
      testimonial: 'yes it is good',
      reviewer: 'Deesha Kumbham - Apple Software Engineer',
      category: 'Mobile Apps',
      demoVideos: []
    },
    // Data Services
    {
      id: 5,
      title: 'Portugal Client - Data Collection',
      description: 'Custom data collection and lead generation solution for international client. Automated scraping workflows with data validation and export capabilities.',
      techStack: ['Data Collection', 'Web Scraping', 'Lead Generation'],
      testimonial: 'Satisfied with the data quality and timely delivery',
      reviewer: 'Portugal Client',
      category: 'Data Services'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Data Services'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Header */}
      <header style={{
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '140px 5% 80px',
        backgroundColor: '#0a0a0a',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center',
          animation: 'move-twink-back 200s linear infinite'
        }}></div>
        <div style={{ zIndex: 5, position: 'relative' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            background: 'linear-gradient(135deg, #4A55FF, #ff6f00, #4A55FF)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '1rem',
            fontWeight: 800,
            animation: 'gradientShift 8s ease infinite'
          }}>
            Our Portfolio
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#a0a0a0',
            lineHeight: 1.7
          }}>
            Explore our diverse portfolio of successful projects and client testimonials. Each project represents our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </header>

      {/* Portfolio Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: '#111'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeCategory === category 
                    ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  color: activeCategory === category ? '#fff' : '#a0a0a0',
                  boxShadow: activeCategory === category 
                    ? '0 8px 25px rgba(74, 85, 255, 0.3)' 
                    : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  position: 'relative',
                  padding: '35px 30px',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(74, 85, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gradient overlay on hover */}
                <div style={{
                  content: '',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 0,
                  pointerEvents: 'none'
                }} className="project-overlay" />

                {/* Animated border */}
                <div style={{
                  content: '',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '24px',
                  padding: '2px',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00, #4A55FF)',
                  backgroundSize: '300% 300%',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 1
                }} className="project-border" />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Category Tag */}
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '18px',
                    background: 'rgba(74, 85, 255, 0.15)',
                    color: '#4A55FF',
                    border: '1px solid rgba(74, 85, 255, 0.2)'
                  }}>
                    {project.category}
                  </span>

                  {/* Title & Link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '15px'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      color: '#fff',
                      fontWeight: 700,
                      margin: 0
                    }}>
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#4A55FF',
                          fontSize: '1.1rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ff6f00'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#4A55FF'}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#a0a0a0',
                    marginBottom: '20px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '25px'
                  }}>
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '5px 12px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          background: 'rgba(255, 111, 0, 0.1)',
                          color: '#ff6f00',
                          border: '1px solid rgba(255, 111, 0, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Demo Videos Section */}
                  {project.demoVideos && project.demoVideos.length > 0 && (
                    <div style={{
                      marginBottom: '25px'
                    }}>
                      <h4 style={{
                        fontSize: '0.85rem',
                        color: '#fff',
                        fontWeight: 600,
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fas fa-video" style={{ color: '#ff6f00' }}></i>
                        Demo Videos
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        {project.demoVideos.map((videoUrl, index) => (
                          <div
                            key={index}
                            style={{
                              borderRadius: '12px',
                              overflow: 'hidden',
                              border: '1px solid rgba(255, 111, 0, 0.2)',
                              background: 'rgba(0, 0, 0, 0.3)'
                            }}
                          >
                            <iframe
                              width="100%"
                              height="200"
                              src={videoUrl}
                              title={`Demo video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{
                                display: 'block'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonial */}
                  <div style={{
                    padding: '20px',
                    borderRadius: '16px',
                    background: 'rgba(74, 85, 255, 0.05)',
                    border: '1px solid rgba(74, 85, 255, 0.1)',
                    position: 'relative'
                  }}>
                    <i className="fas fa-quote-left" style={{
                      position: 'absolute',
                      top: '12px',
                      left: '15px',
                      color: '#4A55FF',
                      fontSize: '1.2rem',
                      opacity: 0.5
                    }}></i>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: '#c0c0c0',
                      fontStyle: 'italic',
                      paddingLeft: '25px',
                      marginBottom: '12px'
                    }}>
                      "{project.testimonial}"
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      paddingLeft: '25px'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        {project.reviewer.charAt(0)}
                      </div>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#fff',
                        fontWeight: 600
                      }}>
                        {project.reviewer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div style={{
            marginTop: '80px',
            padding: '50px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.1), rgba(255, 111, 0, 0.1))',
            border: '2px solid rgba(74, 85, 255, 0.2)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '10px'
                }}>
                  5+
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#a0a0a0'
                }}>
                  Projects Completed
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '10px'
                }}>
                  4+
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#a0a0a0'
                }}>
                  Industries Served
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '10px'
                }}>
                  100%
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#a0a0a0'
                }}>
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '10px'
                }}>
                  Global
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#a0a0a0'
                }}>
                  Client Base
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '1.5rem',
            color: '#fff',
            fontWeight: 700
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#a0a0a0',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Let's collaborate to bring your vision to life. Contact us today and let's build something amazing together.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/book-consultation"
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(74, 85, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(74, 85, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 85, 255, 0.3)';
              }}
            >
              Book a Consultation
            </a>
            <a
              href="/book-consultation"
              style={{
                padding: '16px 40px',
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255,255,255,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
