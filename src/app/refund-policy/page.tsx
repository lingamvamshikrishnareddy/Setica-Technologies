'use client';

import { useEffect } from 'react';

export default function RefundPolicyPage() {
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
            Cancellation & Refund Policy
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
              Overview
            </h2>
            <p style={{ marginBottom: '30px' }}>
              At Setica, we strive to ensure complete client satisfaction with our development services. This Cancellation and Refund Policy outlines the terms under which cancellations and refunds are processed for our various service offerings.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Development Projects
            </h2>
            
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              2.1 Cancellation Before Project Commencement
            </h3>
            <p style={{ marginBottom: '20px' }}>
              If you cancel before any work has begun on your project:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>100% refund of the initial payment, minus a 5% processing fee</li>
              <li style={{ marginBottom: '10px' }}>Refund will be processed within 7-10 business days</li>
              <li style={{ marginBottom: '10px' }}>Written cancellation notice must be provided via email</li>
            </ul>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              2.2 Cancellation After Project Commencement
            </h3>
            <p style={{ marginBottom: '15px' }}>
              If you cancel after work has begun:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>You will be charged for all work completed to date</li>
              <li style={{ marginBottom: '10px' }}>Any remaining balance will be refunded, minus processing fees</li>
              <li style={{ marginBottom: '10px' }}>All completed work, source code, and design files will be provided</li>
              <li style={{ marginBottom: '10px' }}>A detailed breakdown of completed work will be provided</li>
            </ul>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              2.3 Project Milestones
            </h3>
            <p style={{ marginBottom: '30px' }}>
              Once a project milestone is approved and payment is received, that portion of the work is considered final and non-refundable. This includes design approvals, completed development phases, and delivered features.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Maintenance Plans
            </h2>
            
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              3.1 Monthly Subscriptions
            </h3>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>You may cancel your maintenance plan at any time with 7 days notice</li>
              <li style={{ marginBottom: '10px' }}>No refunds for the current billing period</li>
              <li style={{ marginBottom: '10px' }}>Service will continue until the end of the paid period</li>
              <li style={{ marginBottom: '10px' }}>All unused features or hours do not roll over after cancellation</li>
            </ul>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              3.2 Annual Plans
            </h3>
            <p style={{ marginBottom: '20px' }}>
              For annual maintenance plans paid upfront:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Cancellations within 30 days: 80% refund minus processing fees</li>
              <li style={{ marginBottom: '10px' }}>Cancellations after 30 days: Pro-rated refund for unused months minus a 20% early termination fee</li>
              <li style={{ marginBottom: '10px' }}>No refunds after 6 months of service</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Refund Eligibility
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Refunds are eligible under the following conditions:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Project deliverables do not match the agreed scope</li>
              <li style={{ marginBottom: '10px' }}>Setica is unable to complete the project as specified</li>
              <li style={{ marginBottom: '10px' }}>Major technical issues that cannot be resolved</li>
              <li style={{ marginBottom: '10px' }}>Breach of contract by Setica</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Non-Refundable Items
            </h2>
            <p style={{ marginBottom: '15px' }}>
              The following are non-refundable:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Third-party service fees (hosting, domains, API subscriptions)</li>
              <li style={{ marginBottom: '10px' }}>App Store and Play Store submission fees</li>
              <li style={{ marginBottom: '10px' }}>Licensed software, themes, or plugins purchased for your project</li>
              <li style={{ marginBottom: '10px' }}>Marketing and advertising expenses</li>
              <li style={{ marginBottom: '10px' }}>Consultation fees and discovery sessions</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Refund Process
            </h2>
            
            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              6.1 Request Procedure
            </h3>
            <p style={{ marginBottom: '20px' }}>
              To request a refund:
            </p>
            <ol style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Send a written request to lingamvamshikrishnareddy@gmail.com</li>
              <li style={{ marginBottom: '10px' }}>Include your project details and reason for refund</li>
              <li style={{ marginBottom: '10px' }}>Provide payment transaction details</li>
              <li style={{ marginBottom: '10px' }}>Allow 3-5 business days for review</li>
            </ol>

            <h3 style={{
              color: 'var(--text-color)',
              fontSize: '1.3rem',
              marginBottom: '15px',
              marginTop: '25px'
            }}>
              6.2 Processing Time
            </h3>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Approved refunds are processed within 7-10 business days</li>
              <li style={{ marginBottom: '10px' }}>Refunds are issued to the original payment method</li>
              <li style={{ marginBottom: '10px' }}>Bank processing may take an additional 5-7 business days</li>
              <li style={{ marginBottom: '10px' }}>You will receive email confirmation once the refund is processed</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Dispute Resolution
            </h2>
            <p style={{ marginBottom: '15px' }}>
              If you are dissatisfied with our services:
            </p>
            <ul style={{
              marginBottom: '30px',
              paddingLeft: '30px'
            }}>
              <li style={{ marginBottom: '10px' }}>Contact us immediately to discuss concerns</li>
              <li style={{ marginBottom: '10px' }}>We will work to resolve issues within 48 hours</li>
              <li style={{ marginBottom: '10px' }}>A meeting will be scheduled to understand and address your concerns</li>
              <li style={{ marginBottom: '10px' }}>We may offer revisions, adjustments, or partial refunds as appropriate</li>
            </ul>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Client-Initiated Delays
            </h2>
            <p style={{ marginBottom: '30px' }}>
              If a project is delayed due to client unavailability, lack of feedback, or failure to provide necessary materials for more than 30 days, no refunds will be provided for work completed to date. Projects may be considered abandoned after 60 days of client inactivity.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Scope Changes
            </h2>
            <p style={{ marginBottom: '30px' }}>
              If the project scope changes significantly after commencement, additional fees will apply. Refunds will not be provided for scope changes requested by the client after work has begun on the original scope.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Chargebacks
            </h2>
            <p style={{ marginBottom: '30px' }}>
              Filing a chargeback before contacting us to resolve the issue is considered fraud. We reserve the right to pursue legal action and ban clients who file fraudulent chargebacks. All disputes should be directed to us first for resolution.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Force Majeure
            </h2>
            <p style={{ marginBottom: '30px' }}>
              In cases of force majeure (natural disasters, pandemics, war, etc.) that prevent project completion, we will work with clients to either reschedule the project or provide a pro-rated refund based on completed work.
            </p>

            <h2 style={{
              color: 'var(--text-color)',
              fontSize: '1.8rem',
              marginBottom: '20px',
              marginTop: '40px'
            }}>
              Policy Changes
            </h2>
            <p style={{ marginBottom: '30px' }}>
              We reserve the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting. Existing projects will be governed by the policy in effect at the time of project commencement.
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
              For refund requests or questions about this policy:
            </p>
            <p style={{ marginBottom: '5px' }}>
              Email: <a href="mailto:lingamvamshikrishnareddy@gmail.com" style={{ color: '#4A55FF', textDecoration: 'none' }}>lingamvamshikrishnareddy@gmail.com</a>
            </p>
            <p style={{ marginBottom: '20px' }}>
              Address: Hyderabad, Telangana, India
            </p>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
              We are committed to fair and transparent business practices. Our goal is to ensure your complete satisfaction with our services.
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