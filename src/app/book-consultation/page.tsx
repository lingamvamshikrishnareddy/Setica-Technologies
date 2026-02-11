'use client';

import { useState } from 'react';

export default function BookConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM'
  ];

  const benefits = [
    'Clear project roadmap within 30 days',
    'Technical architecture review',
    'Detailed estimate and timeline'
  ];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <>
      {/* Main Content - Adjusted for header/footer */}
      <div style={{
        minHeight: 'calc(100vh - 80px)', // Adjust based on your header height
        background: '#fff',
        display: 'flex',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        marginTop: '0', // Remove if your layout needs spacing
      }}>
        {/* Left Side - Branding & Info */}
        <div style={{
          width: '45%',
          padding: '60px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
        }}>
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #fff 0%, #ccc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Let's build something great together
            </h1>
            
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#aaa',
              marginBottom: '40px',
            }}>
              Book a free 30-minute consultation to discuss your project ideas, 
              technical requirements, and get a clear roadmap for your digital product.
            </p>

            {/* Benefits */}
            <div>
              {benefits.map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                  fontSize: '16px',
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ 
            marginTop: '40px', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '12px' }}>
              Prefer to reach out directly?
            </p>
            <a href="mailto:hello@setica.com" style={{ 
              color: '#4A55FF', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
            }}>
              hello@setica.com
            </a>
          </div>
        </div>

        {/* Right Side - Calendar Booking */}
        <div style={{
          width: '55%',
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
        }}>
          {/* Calendar Header */}
          <div style={{
            padding: '40px 60px',
            borderBottom: '1px solid #e5e5e5',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{
                padding: '6px 12px',
                background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                borderRadius: '20px',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
              }}>
                30 min
              </span>
              <span style={{ color: '#666', fontSize: '14px' }}>Product Strategy Call</span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', margin: 0, color: '#1a1a1a' }}>
              Book a consultation
            </h2>
          </div>

          {/* Calendar Body */}
          <div style={{ 
            flex: 1, 
            padding: '40px 60px', 
            overflow: 'auto',
            display: 'flex',
            gap: '60px',
          }}>
            {/* Date Selection */}
            <div style={{ width: '320px' }}>
              {/* Month Navigation */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}>
                <button 
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                  {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </span>
                <button 
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Day Names */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '4px',
                marginBottom: '8px',
              }}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} style={{ 
                    textAlign: 'center', 
                    padding: '8px 0',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#888',
                  }}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '4px',
              }}>
                {/* Empty cells for days before first of month */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} style={{ padding: '8px' }} />
                ))}
                
                {/* Days of month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  const today = new Date();
                  const isToday = day === today.getDate() &&
                                 currentMonth.getMonth() === today.getMonth() &&
                                 currentMonth.getFullYear() === today.getFullYear();
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'none',
                        background: isSelected 
                          ? 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)' 
                          : 'transparent',
                        color: isSelected ? 'white' : '#1a1a1a',
                        fontSize: '14px',
                        fontWeight: isToday && !isSelected ? '600' : '400',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = '#f5f5f5';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {day}
                      {isToday && !isSelected && (
                        <div style={{
                          position: 'absolute',
                          bottom: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#4A55FF',
                        }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#1a1a1a',
              }}>
                {selectedDate ? `Select a time for ${months[currentMonth.getMonth()]} ${selectedDate}` : 'Select a date first'}
              </h3>

              {selectedDate ? (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                  maxHeight: '400px',
                  overflowY: 'auto',
                }}>
                  {timeSlots.map((time, index) => {
                    const isSelected = selectedTime === time;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: '14px 20px',
                          borderRadius: '10px',
                          border: isSelected 
                            ? '2px solid #4A55FF' 
                            : '2px solid #e5e5e5',
                          background: isSelected ? 'rgba(74, 85, 255, 0.05)' : 'white',
                          color: isSelected ? '#4A55FF' : '#1a1a1a',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          textAlign: 'center',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#4A55FF';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#e5e5e5';
                          }
                        }}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div style={{
                  padding: '60px 40px',
                  textAlign: 'center',
                  background: '#f9f9f9',
                  borderRadius: '12px',
                  color: '#888',
                  fontSize: '14px',
                }}>
                  Please select a date to see available times
                </div>
              )}
            </div>
          </div>

          {/* Booking Footer */}
          <div style={{
            padding: '24px 60px',
            borderTop: '1px solid #e5e5e5',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            background: '#fafafa',
          }}>
            <button
              disabled={!selectedDate || !selectedTime}
              onClick={() => selectedDate && selectedTime && setShowForm(true)}
              style={{
                padding: '12px 32px',
                borderRadius: '8px',
                border: 'none',
                background: selectedDate && selectedTime
                  ? 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)'
                  : '#e5e5e5',
                color: selectedDate && selectedTime ? 'white' : '#999',
                fontSize: '14px',
                fontWeight: '600',
                cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
              }}
            >
              Schedule Event
            </button>
          </div>

          {/* Contact Form Modal */}
          {showForm && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                width: '90%',
                maxWidth: '500px',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}>
                {showSuccess ? (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>
                      Consultation Booked!
                    </h2>
                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                      Your consultation has been scheduled for <strong>{months[currentMonth.getMonth()]} {selectedDate} at {selectedTime}</strong>.
                      We'll send a confirmation email to {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setShowForm(false);
                        setShowSuccess(false);
                        setSelectedDate(null);
                        setSelectedTime(null);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      style={{
                        padding: '12px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0, color: '#1a1a1a' }}>
                        Complete Your Booking
                      </h2>
                      <button
                        onClick={() => setShowForm(false)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '8px',
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>

                    <div style={{
                      padding: '16px',
                      background: '#f9f9f9',
                      borderRadius: '8px',
                      marginBottom: '24px',
                    }}>
                      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                        <strong>Date:</strong> {months[currentMonth.getMonth()]} {selectedDate}, {currentMonth.getFullYear()}<br />
                        <strong>Time:</strong> {selectedTime}
                      </p>
                    </div>

                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      
                      // Simulate booking submission
                      await new Promise(resolve => setTimeout(resolve, 1500));
                      
                      setIsSubmitting(false);
                      setShowSuccess(true);
                    }}>
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#4A55FF'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#4A55FF'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#4A55FF'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
                        />
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1a1a1a' }}>
                          What would you like to discuss?
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid #e5e5e5',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                            resize: 'vertical',
                          }}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#4A55FF'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: '14px',
                          borderRadius: '8px',
                          border: 'none',
                          background: isSubmitting
                            ? '#e5e5e5'
                            : 'linear-gradient(135deg, #4A55FF 0%, #ff6f00 100%)',
                          color: isSubmitting ? '#999' : 'white',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}