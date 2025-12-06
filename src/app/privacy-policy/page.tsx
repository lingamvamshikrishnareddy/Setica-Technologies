'use client';

import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 60px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            marginBottom: '1rem',
            color: 'var(--text-color)',
            fontWeight: '800'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)'
          }}>
            Last Updated: December 6, 2024
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section style={{
        padding: '80px 5%',
        background: 'var(--dark-bg)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '50px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '0'
            }}>
              Introduction
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Setica (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: '15px' }}>
              We collect information that you provide directly to us, including:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Name and contact information (email address, phone number)</li>
              <li style={{ marginBottom: '10px' }}>Business information and project requirements</li>
              <li style={{ marginBottom: '10px' }}>Payment and billing information</li>
              <li style={{ marginBottom: '10px' }}>Communications you send to us</li>
              <li style={{ marginBottom: '10px' }}>Usage data and analytics</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              How We Use Your Information
            </h2>
            <p style={{ marginBottom: '15px' }}>
              We use the information we collect to:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Provide, maintain, and improve our services</li>
              <li style={{ marginBottom: '10px' }}>Process transactions and send related information</li>
              <li style={{ marginBottom: '10px' }}>Send you technical notices and support messages</li>
              <li style={{ marginBottom: '10px' }}>Respond to your comments and questions</li>
              <li style={{ marginBottom: '10px' }}>Communicate about products, services, and events</li>
              <li style={{ marginBottom: '10px' }}>Monitor and analyze trends and usage</li>
              <li style={{ marginBottom: '10px' }}>Detect, prevent, and address technical issues</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Information Sharing and Disclosure
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>With service providers who perform services on our behalf</li>
              <li style={{ marginBottom: '10px' }}>To comply with legal obligations</li>
              <li style={{ marginBottom: '10px' }}>To protect and defend our rights and property</li>
              <li style={{ marginBottom: '10px' }}>With your consent or at your direction</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Data Security
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Data Retention
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Your Rights
            </h2>
            <p style={{ marginBottom: '15px' }}>
              You have the right to:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Access and receive a copy of your personal information</li>
              <li style={{ marginBottom: '10px' }}>Correct inaccurate personal information</li>
              <li style={{ marginBottom: '10px' }}>Request deletion of your personal information</li>
              <li style={{ marginBottom: '10px' }}>Object to or restrict processing of your information</li>
              <li style={{ marginBottom: '10px' }}>Withdraw consent at any time</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Cookies and Tracking Technologies
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Third-Party Services
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Children&apos;s Privacy
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Changes to This Privacy Policy
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Contact Us
            </h2>
            <p style={{ marginBottom: '10px' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p style={{ marginBottom: '5px' }}>
              Email: <a href="mailto:lingamvamshikrishnareddy@gmail.com" style={{ color: '#4A55FF', textDecoration: 'none' }}>lingamvamshikrishnareddy@gmail.com</a>
            </p>
            <p>
              Address: Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </>
  );
}