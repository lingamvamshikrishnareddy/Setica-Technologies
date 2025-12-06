'use client';

import { useEffect } from 'react';

export default function TermsConditionsPage() {
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
            Terms & Conditions
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
              Agreement to Terms
            </h2>
            <p style={{ marginBottom: '30px' }}>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of Setica&apos;s website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access our services.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Services Provided
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Setica provides the following services:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Mobile application development (iOS and Android)</li>
              <li style={{ marginBottom: '10px' }}>Web development and Progressive Web Apps (PWA)</li>
              <li style={{ marginBottom: '10px' }}>Lead collection and management systems</li>
              <li style={{ marginBottom: '10px' }}>Multi-platform digital marketing</li>
              <li style={{ marginBottom: '10px' }}>AI model fine-tuning and chatbot development</li>
              <li style={{ marginBottom: '10px' }}>API integration services</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Project Engagement
            </h2>
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              3.1 Project Scope
            </h3>
            <p style={{ marginBottom: '20px' }}>
              All projects begin with a detailed scope of work that outlines deliverables, timelines, and costs. Any changes to the agreed scope will be subject to additional charges and timeline adjustments.
            </p>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              3.2 Client Responsibilities
            </h3>
            <p style={{ marginBottom: '15px' }}>
              Clients are responsible for:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Providing timely feedback and approvals</li>
              <li style={{ marginBottom: '10px' }}>Supplying necessary content, assets, and access</li>
              <li style={{ marginBottom: '10px' }}>Making timely payments as per the agreement</li>
              <li style={{ marginBottom: '10px' }}>Ensuring all provided content is legally compliant</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Payment Terms
            </h2>
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              4.1 Development Projects
            </h3>
            <ul style={{
              marginBottom: '20px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>50% upfront payment to initiate the project</li>
              <li style={{ marginBottom: '10px' }}>50% upon project completion and delivery</li>
              <li style={{ marginBottom: '10px' }}>Payments are processed through Razorpay</li>
            </ul>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              4.2 Maintenance Plans
            </h3>
            <p style={{ marginBottom: '30px' }}>
              Maintenance plans are billed monthly in advance. Services will be suspended if payment is not received within 7 days of the due date.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Intellectual Property
            </h2>
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              5.1 Ownership
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Upon full payment, clients receive full ownership rights to the delivered work, including source code and design files. Setica retains the right to showcase the project in our portfolio unless otherwise agreed.
            </p>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              5.2 Third-Party Components
            </h3>
            <p style={{ marginBottom: '30px' }}>
              Projects may include third-party libraries, frameworks, or services that are subject to their own licensing terms. Clients are responsible for complying with these licenses.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Warranties and Disclaimers
            </h2>
            <p style={{ marginBottom: '15px' }}>
              We provide a 30-day warranty on all completed projects for bug fixes and issues related to the original scope. This warranty does not cover:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Issues caused by client modifications or third-party changes</li>
              <li style={{ marginBottom: '10px' }}>Hosting, server, or infrastructure problems</li>
              <li style={{ marginBottom: '10px' }}>New feature requests or scope changes</li>
              <li style={{ marginBottom: '10px' }}>Third-party service outages or API changes</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Limitation of Liability
            </h2>
            <p style={{ marginBottom: '30px' }}>
              To the maximum extent permitted by law, Setica shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or business interruption, arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the preceding 12 months.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Confidentiality
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation survives the termination of the agreement.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Termination
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Either party may terminate the agreement with 30 days written notice. Upon termination:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Client must pay for all work completed to date</li>
              <li style={{ marginBottom: '10px' }}>Setica will provide all completed work and source files</li>
              <li style={{ marginBottom: '10px' }}>Ongoing maintenance services will cease</li>
              <li style={{ marginBottom: '10px' }}>Confidentiality obligations remain in effect</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Force Majeure
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Neither party shall be liable for any failure to perform due to circumstances beyond reasonable control, including but not limited to acts of God, war, terrorism, pandemics, or internet service disruptions.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Governing Law
            </h2>
            <p style={{ marginBottom: '30px' }}>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Changes to Terms
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We reserve the right to modify these Terms at any time. We will notify clients of any material changes via email. Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Contact Information
            </h2>
            <p style={{ marginBottom: '10px' }}>
              For questions about these Terms, please contact:
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