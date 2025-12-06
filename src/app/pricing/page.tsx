'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PricingPage() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<'development' | 'maintenance'>('development');

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const developmentPackages = [
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
        'Help when you need it',
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
        'Converting designs into working app',
        'Building your apps brain (backend)',
        '1-3 Month Delivery',
        'Getting your app on App Store & Play Store',
        'Testing everything works perfectly',
        'Unlimited changes until you are happy'
      ],
      popular: true
    },
    {
      name: 'Everything You Need',
      price: '$3499',
      currency: 'USD',
      description: 'Full-Cycle App Development',
      features: [
        'User app, business app & admin dashboard',
        'Premium design customized for your brand',
        'Converting designs into working app',
        'Complete backend system built for growth',
        '2-4 Month Delivery',
        'Publishing on App Store & Play Store',
        'Thorough testing for flawless performance',
        'Full control with admin dashboard',
        'Unlimited changes until you are happy'
      ],
      popular: false
    }
  ];

  const maintenancePackages = [
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
        'Basic app security checks',
        'Updates for new phone systems',
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
        'Speed improvements every two weeks',
        'Urgent help within 6 hours',
        'Monthly security check-ups',
        'Monthly planning call',
        'Quarterly security deep dive',
        'Priority support when you need help'
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
        'Custom feature roadmap for your growth',
        'Weekly speed and performance updates',
        'Round-the-clock help (2-hour response)',
        'Advanced monthly security reviews',
        'Your own personal tech manager',
        'First-in-line for feature requests',
        'Detailed app health reports',
        'Long-term app growth planning'
      ],
      popular: false
    }
  ];

  const currentPackages = billingCycle === 'development' ? developmentPackages : maintenancePackages;

  return (
    <>
      {/* Hero Section */}
      <header style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 80px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: '800'
          }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Choose the perfect package for your project needs. No hidden fees, no surprises.
          </p>
        </div>
      </header>

      {/* Pricing Toggle */}
      <section style={{
        padding: '60px 5% 80px',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto 60px',
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '6px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <button
            onClick={() => setBillingCycle('development')}
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              border: 'none',
              background: billingCycle === 'development' 
                ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                : 'transparent',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
          >
            Development
          </button>
          <button
            onClick={() => setBillingCycle('maintenance')}
            style={{
              flex: 1,
              padding: '14px 24px',
              borderRadius: '12px',
              border: 'none',
              background: billingCycle === 'maintenance' 
                ? 'linear-gradient(135deg, #4A55FF, #ff6f00)' 
                : 'transparent',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
          >
            Maintenance
          </button>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {currentPackages.map((pkg, index) => (
            <div
              key={index}
              style={{
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
              }}
              className="pricing-card"
            >
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
                  {billingCycle === 'maintenance' ? 'MOST POPULAR' : 'RECOMMENDED'}
                </div>
              )}

              <div style={{ marginBottom: '10px' }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  {pkg.description}
                </p>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: 'var(--text-color)',
                  fontWeight: '700',
                  marginBottom: '20px'
                }}>
                  {pkg.name}
                </h3>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <span style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {pkg.price}
                </span>
                <span style={{
                  fontSize: '1.2rem',
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
                onClick={() => router.push('/join-waitlist')}
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
                {billingCycle === 'development' ? 'Start Your Project' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{
          maxWidth: '800px',
          margin: '100px auto 0',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: 'var(--text-color)'
          }}>
            Questions? We&apos;ve Got Answers
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            marginBottom: '40px'
          }}>
            Still have questions about our pricing? Contact us directly.
          </p>
          <button
            onClick={() => router.push('/services')}
            style={{
              padding: '16px 40px',
              background: 'rgba(74, 85, 255, 0.1)',
              color: '#4A55FF',
              border: '1px solid rgba(74, 85, 255, 0.3)',
              borderRadius: '14px',
              fontWeight: '700',
              fontSize: '1.05rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="contact-btn"
          >
            Contact Us
          </button>
        </div>
      </section>

      <style jsx>{`
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .pricing-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(74, 85, 255, 0.4);
        }

        .contact-btn:hover {
          background: rgba(74, 85, 255, 0.2);
          border-color: rgba(74, 85, 255, 0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .pricing-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </>
  );
}