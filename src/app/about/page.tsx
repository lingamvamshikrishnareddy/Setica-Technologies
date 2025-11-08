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
      icon: 'fas fa-heart',
      title: 'Contribution to Humanity',
      description: 'Every product we build aims to save lives, solve universal problems, and create meaningful impact for all of mankind.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Win-Win Solutions',
      description: 'Building technology that benefits everyone - no losers, only collective growth and mutual prosperity for all.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Action Over Comfort',
      description: 'Taking risks in our prime to solve problems others won\'t tackle due to laziness or commitments.'
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
            Building Technology That Serves Humanity
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
            maxWidth: '750px',
            margin: '0 auto',
            color: 'var(--text-muted)'
          }}>
            Discover the philosophy behind Setica — a mission to solve universal problems, save lives, and create meaningful impact for all of mankind.
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
              To contribute meaningfully to humanity by building technology that solves universal problems, saves lives, improves productivity, and creates win-win solutions. We bridge the gap between human needs and digital innovation through AI, web, and mobile products that benefit all of mankind.
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
              To build a global movement where every human joins in solving universal problems together. Creating ethical, impactful technology that serves humanity, enhances lives worldwide, and leaves a lasting positive contribution to society and mankind.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{
        padding: '80px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            marginBottom: '30px',
            fontSize: '2.5rem',
            color: 'var(--text-color)'
          }}>
            The Philosophy Behind Setica
          </h2>
          
          <div style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            textAlign: 'left',
            marginTop: '40px'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Setica was born from a fundamental question: <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>What is life?</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The answer became clear — before we leave this world, what truly matters is <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>how much we contribute to humanity and society</strong>. It&apos;s about how many lives we save, how many problems we solve, and how beneficial our work is to all of mankind.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              In India and across the world, countless problems exist that nobody wants to solve — either due to laziness or existing commitments. <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>Setica exists to bridge that gap</strong>, using AI, web, and mobile technologies to create win-win solutions that improve productivity and save human lives.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--primary-blue)', fontWeight: 600 }}>
              If you want the future to be good, you must take it into your own hands. No one is going to come save you.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This isn&apos;t just about building products. It&apos;s about creating a movement where every human can join in solving universal problems that matter to all of us.
            </p>
          </div>
        </div>

        {/* The Problem Section */}
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
            color: 'var(--text-color)',
            textAlign: 'center'
          }}>
            The Problem We&apos;re Solving
          </h2>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '40px'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Large corporations and MNCs are overcharging for basic necessities — internet bills, loan rates, grocery prices, housing costs. <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>The rich are getting richer while prices keep going up.</strong>
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Even when these companies generate massive revenue and record profits, they still conduct layoffs. <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>Human life is not valued in today&apos;s corporate world.</strong>
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: 'var(--primary-orange)', fontWeight: 600 }}>
              The solution is simple: If we don&apos;t buy their products, they don&apos;t get revenue.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              But we need alternatives. That&apos;s why I&apos;m building products that put power back in the hands of people. <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>I want to change the system with Human + AI</strong> — where income inequality is justified, where human life is valued, and where everyone has access to fair pricing and opportunities.
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
              background: 'rgba(255, 111, 0, 0.1)',
              border: '2px solid rgba(255, 111, 0, 0.3)',
              textAlign: 'center'
            }}>
              <i className="fas fa-wifi" style={{
                fontSize: '2.5rem',
                color: 'var(--primary-orange)',
                marginBottom: '15px',
                display: 'block'
              }}></i>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--text-color)',
                marginBottom: '10px'
              }}>Internet Bills</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: 0
              }}>Overpriced connectivity keeping people disconnected</p>
            </div>

            <div style={{
              padding: '25px',
              borderRadius: '16px',
              background: 'rgba(255, 111, 0, 0.1)',
              border: '2px solid rgba(255, 111, 0, 0.3)',
              textAlign: 'center'
            }}>
              <i className="fas fa-percentage" style={{
                fontSize: '2.5rem',
                color: 'var(--primary-orange)',
                marginBottom: '15px',
                display: 'block'
              }}></i>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--text-color)',
                marginBottom: '10px'
              }}>Loan Rates</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: 0
              }}>Unfair interest rates trapping people in debt</p>
            </div>

            <div style={{
              padding: '25px',
              borderRadius: '16px',
              background: 'rgba(255, 111, 0, 0.1)',
              border: '2px solid rgba(255, 111, 0, 0.3)',
              textAlign: 'center'
            }}>
              <i className="fas fa-shopping-cart" style={{
                fontSize: '2.5rem',
                color: 'var(--primary-orange)',
                marginBottom: '15px',
                display: 'block'
              }}></i>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--text-color)',
                marginBottom: '10px'
              }}>Grocery Prices</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: 0
              }}>Basic necessities becoming unaffordable luxuries</p>
            </div>

            <div style={{
              padding: '25px',
              borderRadius: '16px',
              background: 'rgba(255, 111, 0, 0.1)',
              border: '2px solid rgba(255, 111, 0, 0.3)',
              textAlign: 'center'
            }}>
              <i className="fas fa-home" style={{
                fontSize: '2.5rem',
                color: 'var(--primary-orange)',
                marginBottom: '15px',
                display: 'block'
              }}></i>
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--text-color)',
                marginBottom: '10px'
              }}>Housing Costs</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: 0
              }}>Skyrocketing prices making homeownership a dream</p>
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
              color: 'var(--text-color)',
              marginBottom: '20px'
            }}>
              The Solution: Human + AI
            </h3>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              margin: '0 auto 25px'
            }}>
              By combining human ingenuity with artificial intelligence, we can build alternatives that value people over profits, that justify income through contribution, and that create opportunities for everyone.
            </p>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--primary-blue)',
              fontWeight: 700
            }}>
              All I need is your support to make this vision a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{
            marginBottom: '40px',
            fontSize: '2rem',
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
              <div key={index} className="value-item" style={{
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
          A solo journey driven by passion, resilience, and the unwavering belief that one person can make a difference for all of humanity.
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
              src="/images/profile.jpg"
              alt="Lingam Vamshi Krishna Reddy Profile Picture"
              width={300}
              height={300}
              priority
              style={{
                width: '300px',
                height: '300px',
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
              Founder & Solo Builder - On a Mission to Serve Humanity
            </span>
          </div>

          <div style={{
            fontSize: '1.05rem',
            lineHeight: '1.7',
            color: 'var(--text-muted)'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Hi, I&apos;m Vamshi. Setica was born from a profound question: <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>What is life?</strong> After deep reflection, I realized the answer lies in contribution — before we leave this world, what truly matters is how much we&apos;ve contributed to humanity and society, how many lives we&apos;ve saved, and how many problems we&apos;ve solved for mankind.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              My journey hasn&apos;t been easy. I&apos;ve faced countless failures, traveled to many places across India and learned about problems people face daily — problems that nobody wants to solve, either due to laziness or existing commitments. I&apos;ve taken every odd job imaginable to gain product knowledge and understand the real world, much like the early days of entrepreneurs who hustled to learn their craft.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>
                At 26, I&apos;m in my prime, and I&apos;m building all these products alone to solve universal problems.
              </strong> I believe in win-win solutions — bridging digital products with AI, web, and mobile technologies to improve productivity, save human lives, and create meaningful impact for all of humanity. I&apos;m building alternatives to overpriced services so people have real choices, not monopolies.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The beauty of taking this risk now is simple: if I fail, I can always return to freelancing or get a stable job. But my passion isn&apos;t stability — it&apos;s solving problems and building businesses that bring joy not just to me, but to everyone they touch. That&apos;s what drives me every single day.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--text-color)', fontWeight: 600 }}>
                Now, all that&apos;s left is for every human who shares this vision to join this journey.
              </strong> Together, we can build technology that truly serves humanity, breaks the monopoly of overpriced services, values human life over corporate profits, and creates a fairer world where income inequality is justified by contribution, not exploitation. <strong style={{ color: 'var(--primary-blue)' }}>All I need is your support.</strong>
            </p>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        textAlign: 'center'
      }}>
        <div className="cta-content">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>
            Join the Movement to Serve Humanity
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem'
          }}>
            Every human who shares this vision is invited to join this journey. Together, we can solve universal problems and create lasting positive impact for all of mankind.
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
            JOIN THE MOVEMENT →
          </Link>
          <a
            href="https://github.com/lingamvamshikrishnareddy/setica"
            target="_blank"
            rel="noopener noreferrer"
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
              border: '2px solid rgba(255,255,255,0.2)'
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

        .value-item:hover {
          transform: translateY(-5px);
        }

        .value-item:hover i {
          transform: scale(1.1);
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(74, 85, 255, 0.4);
        }

        .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(74, 85, 255, 0.4);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-3px);
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