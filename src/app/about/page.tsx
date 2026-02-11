'use client';

import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const coreValues = [
    {
      icon: 'fas fa-heart',
      title: 'Humanity First',
      description: 'Every product we build aims to create meaningful impact for all of mankind.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Bold Innovation',
      description: 'Taking calculated risks to build solutions for complex problems.'
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <header style={{
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 5% 50px',
        backgroundColor: '#0a0a0a',
        color: '#fff',
      }}>
        <div style={{ zIndex: 5, position: 'relative' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            color: '#fff',
            marginBottom: '1rem',
          }}>
            About Setica
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '500px',
            margin: '0 auto',
            color: '#a0a0a0'
          }}>
            Building technology that serves humanity.
          </p>
        </div>
      </header>

      {/* Mission */}
      <section style={{
        padding: '60px 5%',
        backgroundColor: '#111',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#fff',
            marginBottom: '1.5rem',
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#a0a0a0',
          }}>
            To contribute meaningfully to humanity by building technology that solves universal problems and creates lasting value.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section style={{
        padding: '60px 5%',
        background: '#0a0a0a'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h2 style={{
            marginBottom: '30px',
            fontSize: '1.8rem',
            color: '#fff',
            textAlign: 'center'
          }}>
            Core Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
          }}>
            {coreValues.map((value, index) => (
              <div key={index} style={{
                padding: '25px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <i className={value.icon} style={{
                  fontSize: '2rem',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '15px',
                  display: 'block',
                }}></i>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  color: '#fff',
                  fontWeight: 600
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
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
        padding: '60px 5%',
        color: '#a0a0a0',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <img 
            src="/images/profile.webp" 
            alt="VK Profile"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
          
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              color: '#fff',
              marginBottom: '5px'
            }}>
              Lingam Vamshi Krishna Reddy
            </h3>
            <span style={{
              fontSize: '0.95rem',
              color: '#a0a0a0',
              display: 'block',
            }}>
              Founder & CEO
            </span>
          </div>

          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#a0a0a0',
            maxWidth: '500px',
          }}>
            Building technology that creates lasting impact.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 5%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.6rem, 4vw, 2rem)',
          marginBottom: '1rem',
          color: '#fff'
        }}>
          Let's Build Together
        </h2>
        <a
          href="/book-consultation"
          style={{
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1rem',
            display: 'inline-block',
            transition: 'all 0.3s ease',
          }}
        >
          Get in Touch
        </a>
      </section>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
}
