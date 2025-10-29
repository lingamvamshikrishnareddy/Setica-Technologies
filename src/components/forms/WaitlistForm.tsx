'use client';

import { useState, FormEvent } from 'react';
import { useFirebase } from '@/hooks/useFirebase';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
}

export default function WaitlistForm() {
  const { addToWaitlist, loading, error } = useFirebase();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interest: 'products',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    const result = await addToWaitlist({
      ...formData,
      timestamp: new Date(),
    });

    if (result) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: 'products',
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginBottom: '10px',
        }}>
          Join the Waitlist
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-muted)',
        }}>
          Be the first to access Setica's unified platform and premium services
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />

        <Input
          label="Company (Optional)"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company Name"
        />

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: 'var(--text-color)',
            fontSize: '0.9rem',
            fontWeight: '600',
          }}>
            I'm interested in
          </label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: 'var(--text-color)',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <option value="products">Products (40+ Solutions)</option>
            <option value="services">Development Services</option>
            <option value="both">Both Products & Services</option>
            <option value="partnership">Partnership Opportunities</option>
          </select>
        </div>

        {error && (
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
            {error}
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
            Successfully joined the waitlist! We'll be in touch soon.
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          fullWidth
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </>
          )}
        </Button>

        <p style={{
          marginTop: '20px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}>
          By joining, you agree to receive updates about Setica's products and services.
        </p>
      </form>
    </div>
  );
}