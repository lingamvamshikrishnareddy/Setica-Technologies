'use client';

import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const coreValues = [
    {
      icon: 'fas fa-heart',
      title: 'Contribution to Humanity',
      description: 'Every product we build aims to save lives, solve universal problems, and create meaningful impact for all of mankind.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Win-Win Solutions',
      description: 'Building technology that benefits everyone - creating value for users, partners, and stakeholders through mutual growth.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Bold Innovation',
      description: 'Taking calculated risks to build solutions for complex problems that require innovative thinking and cutting-edge technology.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Universal Problem Solving',
      description: 'Bridging digital products with AI, web, and mobile to address real-world problems that impact humanity globally.'
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
          display: 'block',
          zIndex: 0,
          background: '#000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center'
        }}></div>
        <div style={{
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
            fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
            color: '#fff',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Building Technology That Serves Humanity
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
            maxWidth: '750px',
            margin: '0 auto',
            color: '#a0a0a0'
          }}>
            Discover the philosophy behind Setica — a mission to solve universal problems, save lives, and create meaningful impact through innovative technology.
          </p>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: '#111',
        color: '#fff'
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
          }}>
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: '1.5rem',
              justifyContent: 'center'
            }}>
              <i className="fas fa-bullseye" style={{
                fontSize: '1.5em',
                color: '#4A55FF',
                lineHeight: 1
              }}></i>
              Our Mission
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: '#a0a0a0',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              To contribute meaningfully to humanity by building technology that solves universal problems, improves lives, and enhances productivity. We bridge the gap between human needs and digital innovation through AI, web, and mobile products that create lasting value for all stakeholders.
            </p>
          </div>

          <div style={{
            padding: '30px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: '1.5rem',
              justifyContent: 'center'
            }}>
              <i className="fas fa-eye" style={{
                fontSize: '1.5em',
                color: '#4A55FF',
                lineHeight: 1
              }}></i>
              Our Vision
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              color: '#a0a0a0',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              To build a global ecosystem where technology serves humanity's greatest needs. Creating ethical, impactful solutions that enhance lives worldwide, drive sustainable growth, and leave a lasting positive contribution to society.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{
        padding: '80px 5%',
        background: '#0a0a0a'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            marginBottom: '30px',
            fontSize: '2.5rem',
            color: '#fff'
          }}>
            The Philosophy Behind Setica
          </h2>
          
          <div style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: '#a0a0a0',
            textAlign: 'left',
            marginTop: '40px'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Setica was born from a fundamental question: <strong style={{ color: '#fff', fontWeight: 600 }}>How can technology truly serve humanity?</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The answer became clear — meaningful impact comes from solving real problems that improve lives and create value for society. It's about building solutions that address genuine needs and contribute positively to communities worldwide.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Across India and globally, there exist numerous challenges that require innovative solutions. <strong style={{ color: '#fff', fontWeight: 600 }}>Setica exists to bridge that gap</strong>, using AI, web, and mobile technologies to create comprehensive solutions that improve productivity, enhance quality of life, and generate sustainable value.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: '#4A55FF', fontWeight: 600 }}>
              We believe in taking ownership of building the future we envision — through innovation, dedication, and strategic execution.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This isn't just about building products. It's about creating an ecosystem where technology addresses universal problems while generating value for users, partners, and stakeholders alike.
            </p>
          </div>
        </div>

        {/* Market Opportunity Section */}
        <section style={{
          padding: '80px 5%',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0f1419 100%)'
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <h2 style={{
              marginBottom: '40px',
              fontSize: '2.5rem',
              color: '#fff',
              textAlign: 'center'
            }}>
              Market Opportunity & Differentiation
            </h2>

            <div style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#a0a0a0',
              marginBottom: '40px'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The Indian digital market presents unprecedented opportunities across multiple sectors. <strong style={{ color: '#fff', fontWeight: 600 }}>From healthcare to logistics, fintech to enterprise solutions</strong> — there's immense potential for innovative platforms that prioritize user value and transparent pricing.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Current market dynamics show high demand for accessible, affordable, and user-centric solutions. <strong style={{ color: '#fff', fontWeight: 600 }}>Setica aims to capture this opportunity</strong> by building comprehensive alternatives that offer better value propositions and superior user experiences.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: '#ff6f00', fontWeight: 600 }}>
                Our competitive advantage: Integrated ecosystem approach powered by AI + Human expertise.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                By combining cutting-edge AI technology with deep understanding of user needs, <strong style={{ color: '#fff', fontWeight: 600 }}>we're building scalable solutions</strong> that address multiple pain points through a unified platform — creating network effects and sustainable competitive moats.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px',
              marginTop: '50px'
            }}>
              <div style={{
                padding: '25px',
                borderRadius: '16px',
                background: 'rgba(74, 85, 255, 0.1)',
                border: '2px solid rgba(74, 85, 255, 0.3)',
                textAlign: 'center'
              }}>
                <i className="fas fa-chart-line" style={{
                  fontSize: '2.5rem',
                  color: '#4A55FF',
                  marginBottom: '15px',
                  display: 'block'
                }}></i>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#fff',
                  marginBottom: '10px'
                }}>Growing Market</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a0a0a0',
                  margin: 0
                }}>Massive TAM across healthcare, logistics, and enterprise sectors</p>
              </div>

              <div style={{
                padding: '25px',
                borderRadius: '16px',
                background: 'rgba(74, 85, 255, 0.1)',
                border: '2px solid rgba(74, 85, 255, 0.3)',
                textAlign: 'center'
              }}>
                <i className="fas fa-users" style={{
                  fontSize: '2.5rem',
                  color: '#4A55FF',
                  marginBottom: '15px',
                  display: 'block'
                }}></i>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#fff',
                  marginBottom: '10px'
                }}>User-Centric Approach</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a0a0a0',
                  margin: 0
                }}>Transparent pricing and genuine value creation for customers</p>
              </div>

              <div style={{
                padding: '25px',
                borderRadius: '16px',
                background: 'rgba(74, 85, 255, 0.1)',
                border: '2px solid rgba(74, 85, 255, 0.3)',
                textAlign: 'center'
              }}>
                <i className="fas fa-network-wired" style={{
                  fontSize: '2.5rem',
                  color: '#4A55FF',
                  marginBottom: '15px',
                  display: 'block'
                }}></i>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#fff',
                  marginBottom: '10px'
                }}>Ecosystem Play</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a0a0a0',
                  margin: 0
                }}>Integrated platform creating powerful network effects</p>
              </div>

              <div style={{
                padding: '25px',
                borderRadius: '16px',
                background: 'rgba(74, 85, 255, 0.1)',
                border: '2px solid rgba(74, 85, 255, 0.3)',
                textAlign: 'center'
              }}>
                <i className="fas fa-robot" style={{
                  fontSize: '2.5rem',
                  color: '#4A55FF',
                  marginBottom: '15px',
                  display: 'block'
                }}></i>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#fff',
                  marginBottom: '10px'
                }}>AI-Powered Edge</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a0a0a0',
                  margin: 0
                }}>Leveraging cutting-edge AI for efficiency and scalability</p>
              </div>
            </div>

            <div style={{
              marginTop: '50px',
              padding: '40px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.1), rgba(255, 111, 0, 0.1))',
              border: '2px solid rgba(74, 85, 255, 0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#fff',
                marginBottom: '20px'
              }}>
                The Solution: Human-AI Synergy
              </h3>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#a0a0a0',
                maxWidth: '700px',
                margin: '0 auto 25px'
              }}>
                By combining human insight with artificial intelligence, we're building scalable alternatives that create genuine value, foster innovation, and generate sustainable growth across multiple verticals.
              </p>
              <p style={{
                fontSize: '1.2rem',
                color: '#4A55FF',
                fontWeight: 700
              }}>
                Join us in building the future of integrated digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{
            marginBottom: '40px',
            fontSize: '2rem',
            color: '#fff',
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
              <div key={index} style={{
                padding: '30px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease',
                textAlign: 'center'
              }}>
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
                  color: '#fff',
                  fontWeight: 700
                }}>
                  {value.title}
                </h3>
                <p style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#a0a0a0',
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
        backgroundColor: '#111',
        padding: '80px 5%',
        color: '#a0a0a0',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#fff',
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
          A passionate entrepreneur driven by innovation, dedication, and the vision to build technology that creates lasting impact.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <div style={{
            textAlign: 'center',
            flexShrink: 0
          }}>
            <img 
              src="/images/profile.webp" 
              alt="VK Profile"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'block',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <h3 style={{
              fontSize: '1.6rem',
              color: '#fff',
              marginBottom: '5px'
            }}>
              Lingam Vamshi Krishna Reddy
            </h3>
            <span style={{
              fontSize: '1rem',
              color: '#a0a0a0',
              display: 'block',
              marginBottom: '15px'
            }}>
              Founder & CEO - Building the Future of Integrated Solutions
            </span>
          </div>

          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.7',
            color: '#a0a0a0'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Hi, I'm Vamshi. Setica was born from a profound question: <strong style={{ color: '#fff', fontWeight: 600 }}>How can technology truly serve humanity?</strong> After extensive research and market analysis, I realized the answer lies in building comprehensive solutions that address real problems and create genuine value for all stakeholders.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              My journey has been one of continuous learning and growth. I've traveled extensively across India, conducting market research and understanding the pain points people face daily — identifying opportunities where innovative technology can make a real difference. This hands-on approach has given me invaluable insights into building products that truly resonate with users.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                At 26, I'm leveraging my prime years to build these integrated solutions with a clear roadmap and strategic vision.
              </strong> I believe in win-win solutions — using AI, web, and mobile technologies to improve productivity, enhance lives, and create sustainable business models that benefit everyone in the ecosystem.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              My approach combines technical expertise with business acumen. I'm building alternatives that offer better value propositions, demonstrating that innovation and user-centric design can coexist with profitability and scalable growth.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>
                I'm seeking strategic partners and investors who share this vision.
              </strong> Together, we can build technology that truly serves humanity, creates sustainable competitive advantages, and generates long-term value through innovative solutions that address real market needs. <strong style={{ color: '#4A55FF' }}>Let's build the future together.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        textAlign: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: '#fff'
          }}>
            Join Us in Building the Future
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#a0a0a0',
            marginBottom: '2rem'
          }}>
            Partner with us to create innovative solutions that serve humanity while generating sustainable growth and lasting value.
          </p>
          <button
            style={{
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              marginRight: '15px',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(74, 85, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            GET IN TOUCH →
          </button>
          <button
            onClick={() => window.open('https://github.com/lingamvamshikrishnareddy/setica', '_blank')}
            style={{
              padding: '16px 40px',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              marginTop: '10px',
              border: '2px solid rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <i className="fab fa-github"></i> View on GitHub
          </button>
        </div>
      </section>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style jsx>{`
        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }
      `}</style>
    </>
  );
}