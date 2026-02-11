'use client';

import { useState, FormEvent, useEffect } from 'react';
import { submitContactForm } from '@/lib/firebase/firestore';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

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
            Contact Us
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '500px',
            margin: '0 auto',
            color: '#a0a0a0'
          }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section style={{
        padding: '60px 5%',
        backgroundColor: '#0a0a0a',
        minHeight: 'calc(100vh - 250px)',
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          <div style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <form onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                error={errors.name}
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                error={errors.email}
              />

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-color)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}>
                  Subject
                  <span style={{ color: 'var(--primary-orange)', marginLeft: '4px' }}>*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: errors.subject
                      ? '1px solid rgba(244, 67, 54, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-color)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-inter)',
                  }}
                  onFocus={(e) => {
                    if (!errors.subject) {
                      e.currentTarget.style.borderColor = 'var(--primary-blue)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.subject
                      ? 'rgba(244, 67, 54, 0.5)'
                      : 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
                {errors.subject && (
                  <p style={{
                    marginTop: '6px',
                    fontSize: '0.85rem',
                    color: '#ff6b6b',
                  }}>
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
                    {errors.subject}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-color)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}>
                  Message
                  <span style={{ color: 'var(--primary-orange)', marginLeft: '4px' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: errors.message
                      ? '1px solid rgba(244, 67, 54, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'var(--text-color)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-inter)',
                    resize: 'vertical',
                    minHeight: '150px',
                  }}
                  onFocus={(e) => {
                    if (!errors.message) {
                      e.currentTarget.style.borderColor = 'var(--primary-blue)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.message
                      ? 'rgba(244, 67, 54, 0.5)'
                      : 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
                {errors.message && (
                  <p style={{
                    marginTop: '6px',
                    fontSize: '0.85rem',
                    color: '#ff6b6b',
                  }}>
                    <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
                    {errors.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div style={{
                  padding: '12px',
                  background: 'rgba(244, 67, 54, 0.1)',
                  border: '1px solid rgba(244, 67, 54, 0.3)',
                  borderRadius: '8px',
                  color: '#ff6b6b',
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                }}>
                  <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                  {submitError}
                </div>
              )}

              {success && (
                <div style={{
                  padding: '12px',
                  background: 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  borderRadius: '8px',
                  color: '#4caf50',
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                }}>
                  <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                fullWidth
                size="large"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                  </>
                )}
              </Button>

              <p style={{
                marginTop: '20px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}>
                We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
}
