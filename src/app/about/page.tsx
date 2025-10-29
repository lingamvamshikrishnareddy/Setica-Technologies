'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const coreValues = [
    {
      icon: 'fas fa-users-cog',
      title: 'Community & Openness',
      description: 'Built collaboratively with transparency. Open source isn\'t just code; it\'s our philosophy.'
    },
    {
      icon: 'fas fa-link',
      title: 'Seamless Integration',
      description: 'Connecting the dots between digital tools and daily tasks for effortless workflows.'
    },
    {
      icon: 'fas fa-compass-drafting',
      title: 'User-Centric Design',
      description: 'Prioritizing intuitive interfaces and meaningful interactions that genuinely simplify.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Privacy & Ethics',
      description: 'Committed to ethical practices and respecting user privacy by design.'
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <header style={{
        minHeight: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '140px 5% 80px',
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--text-color)',
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
        <div className="header-content" style={{ zIndex: 5, position: 'relative' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
            color: 'var(--text-color)',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Simplifying Life Through Integration
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
            maxWidth: '750px',
            margin: '0 auto',
            color: 'var(--text-muted)'
          }}>
            Discover the driving force behind Setica — our mission, vision, and commitment to open-source innovation.
          </p>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: 'var(--dark-card)',
        color: 'var(--text-color)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          textAlign: 'center'
        }}>
          <div style={{
            padding: '30px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} className="mission-block">
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '1.8rem',
              color: 'var(--text-color)',
              marginBottom: '1.5rem',
              justifyContent: 'center'
            }}>
              <i className="fas fa-bullseye" style={{
                fontSize: '1.5em',
                color: 'var(--primary-blue)',
                lineHeight: 1
              }}></i>
              Our Mission
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              To empower individuals by simplifying digital complexity through a unified, intuitive, 
              and open-source platform that seamlessly integrates the essential tools for modern life.
            </p>
          </div>

          <div style={{
            padding: '30px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} className="vision-block">
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '1.8rem',
              color: 'var(--text-color)',
              marginBottom: '1.5rem',
              justifyContent: 'center'
            }}>
              <i className="fas fa-eye" style={{
                fontSize: '1.5em',
                color: 'var(--primary-blue)',
                lineHeight: 1
              }}></i>
              Our Vision
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              To foster a global community building and benefiting from ethical, user-centric technology 
              that enhances human connection, productivity, and well-being, free from data exploitation.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section style={{
        padding: '80px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <Image
                src="/vamshikrishnareddy_Lingam__imagine_prompt__Minimalist_abstract_visualization_33bca415-7a58-4ba1-9300-99bd347ce25a.png"
                alt="Abstract visualization of integrated digital tools"
                width={500}
                height={400}
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                marginTop: '10px',
                textAlign: 'center'
              }}>
                Conceptualizing the Setica Ecosystem
              </p>
            </div>
          </div>

          <div>
            <h2 style={{
              marginBottom: '20px',
              fontSize: '2rem',
              color: 'var(--text-color)'
            }}>
              Technology Designed for Humans
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem'
            }}>
              Setica is more than just software; it&apos;s an ambitious <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>open-source ecosystem</strong> designed to tackle the fragmentation and complexity of our digital lives. We believe technology should serve people, adapting to their needs, not the other way around.
            </p>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem'
            }}>
              By combining cutting-edge interaction design with robust engineering, we&apos;re building a unified platform where disparate digital tools converge into a seamless, intuitive experience. Our goal is to reduce friction and empower users to focus on what truly matters.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{
            marginBottom: '40px',
            fontSize: '1.5rem',
            color: 'var(--text-color)',
            textAlign: 'center'
          }}>
            Our Core Values
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {coreValues.map((value, index) => (
              <div key={index} className="value-item">
                <i className={value.icon} style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '2.5rem',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '20px',
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}></i>
                <h3 style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '1.3rem',
                  marginBottom: '12px',
                  color: 'var(--text-color)',
                  fontWeight: 700
                }}>
                  {value.title}
                </h3>
                <p style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'var(--text-muted)',
                  marginBottom: 0
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{
        backgroundColor: 'var(--dark-card)',
        padding: '80px 5%',
        color: 'var(--text-muted)',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'var(--text-color)',
          marginBottom: '1.5rem',
          fontSize: 'clamp(2rem, 5vw, 2.8rem)'
        }}>
          Meet the Founder
        </h2>
        <p style={{
          marginBottom: '60px',
          fontSize: '1.15rem',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Setica is currently driven by an individual passion for creating better, more integrated technology.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left'
        }} className="founder-container">
          <div style={{
            textAlign: 'center',
            flexShrink: 0
          }}>
            <Image
              src="/profile.jpg"
              alt="Lingam Vamshi Krishna Reddy Profile Picture"
              width={180}
              height={180}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                objectFit: 'cover',
                border: '4px solid var(--primary-blue)',
                display: 'block',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            />
            <h3 style={{
              fontSize: '1.6rem',
              color: 'var(--text-color)',
              marginBottom: '5px'
            }}>
              Lingam Vamshi Krishna Reddy
            </h3>
            <span style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              display: 'block',
              marginBottom: '15px'
            }}>
              Founder - Indie Developer & AI Researcher
            </span>
          </div>

          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.7',
            color: 'var(--text-muted)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Hi, I&apos;m Vamshi. As an indie developer fascinated by the potential of technology to improve our lives, I started Setica to address the digital clutter and disjointed experiences I saw everywhere. My goal is to build tools that feel less like applications and more like natural extensions of our intentions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>
                Setica is born from the belief that complexity can be elegant, and that open collaboration leads to stronger, more ethical solutions.
              </strong> While currently an indie project, the vision is much larger — a thriving ecosystem built with and for the community.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I&apos;m excited about the future and the innovative products planned under the Setica umbrella. Let&apos;s build something amazing together.
            </p>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a
                href="mailto:lingamvamshikrishnareddy@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                className="contact-btn"
              >
                <i className="fas fa-paper-plane"></i> Get In Touch
              </a>
            </div>
          </div>
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
            Be Part of the Journey
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem'
          }}>
            Follow the project&apos;s progress, contribute ideas, or join the waitlist to be notified about upcoming launches.
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
              transition: 'all 0.3s ease',
              marginRight: '15px'
            }}
            className="btn-cta"
          >
            JOIN WAITLIST →
          </Link>
          <a
            href="https://github.com/lingamvamshikrishnareddy/setica"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 40px',
              background: 'rgba(255,255,255,0.8)',
              color: 'var(--dark-bg)',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              marginTop: '10px'
            }}
            className="btn-secondary"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }

        .mission-block:hover,
        .vision-block:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(74, 85, 255, 0.4);
        }

        @media (min-width: 768px) {
          .founder-container {
            flex-direction: row !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </>
  );
}