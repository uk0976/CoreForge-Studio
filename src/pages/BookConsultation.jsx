import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, ArrowRight, UserCheck, Star, Sparkles, ChevronDown } from 'lucide-react';

const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.02)',
          border: isOpen ? '1px solid #00f0ff' : '1px solid var(--glass-border)',
          borderRadius: '10px',
          padding: '0.75rem 1rem',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          fontSize: '0.85rem',
          boxShadow: isOpen ? '0 0 10px rgba(0, 240, 255, 0.15)' : 'none'
        }}
      >
        <span>{value}</span>
        <ChevronDown size={14} color="#00f0ff" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            marginTop: '0.5rem',
            background: '#0c0c16',
            border: '1px solid var(--glass-border)',
            borderRadius: '12px',
            zIndex: 100,
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.05)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
                color: value === opt ? '#00f0ff' : 'var(--text-secondary)',
                background: value === opt ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
                transition: 'all 0.2s',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (value !== opt) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.target.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (value !== opt) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BookConsultation = () => {
  const [selectedDate, setSelectedDate] = useState('2026-07-06');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: 'Business Website',
    budget: 'Professional Package ($1.5k - $3k)',
    timeline: 'Standard (4 - 6 Weeks)',
    features: []
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const dateOptions = [
    { dateStr: "2026-07-06", dayName: "Mon", dayNum: "06" },
    { dateStr: "2026-07-07", dayName: "Tue", dayNum: "07" },
    { dateStr: "2026-07-08", dayName: "Wed", dayNum: "08" },
    { dateStr: "2026-07-09", dayName: "Thu", dayNum: "09" },
    { dateStr: "2026-07-10", dayName: "Fri", dayNum: "10" }
  ];

  const timeSlots = [
    "10:00 AM CET", "11:30 AM CET", "2:00 PM CET", "4:30 PM CET"
  ];

  const featureOptions = [
    "Blog Section", "User Authentication", "Payment Gateways", "AI Chatbot", "Multi-lingual Setup", "Headless CMS"
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureToggle = (feature) => {
    const isSelected = formData.features.includes(feature);
    const updatedFeatures = isSelected 
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    setFormData({ ...formData, features: updatedFeatures });
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !selectedSlot) return;

    // Trigger consultation success confetti
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#d946ef']
    });

    setBookingConfirmed(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      projectType: 'Business Website',
      budget: 'Professional Package ($1.5k - $3k)',
      timeline: 'Standard (4 - 6 Weeks)',
      features: []
    });
    setSelectedSlot('');
    setTimeout(() => setBookingConfirmed(false), 5000);
  };

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Strategy Session</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Book Consultation</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Schedule a direct 1-on-1 strategy call with our Creative Director. Pick your meeting date/time and share your project requirements below.
        </p>
      </section>

      {/* Booking Form Layout */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.9fr', gap: '4rem' }} className="booking-split">
          
          {/* Left Column: Date & Time Scheduler */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* 1. Date Selector */}
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <Calendar size={18} color="#00f0ff" />
                <span>1. Select Date</span>
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
                {dateOptions.map((opt) => (
                  <div
                    key={opt.dateStr}
                    onClick={() => setSelectedDate(opt.dateStr)}
                    className="interactive-hover"
                    style={{
                      padding: '0.8rem 0.5rem',
                      borderRadius: '12px',
                      background: selectedDate === opt.dateStr ? 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)' : 'var(--glass-bg)',
                      border: '1px solid',
                      borderColor: selectedDate === opt.dateStr ? 'transparent' : 'var(--glass-border)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      color: selectedDate === opt.dateStr ? '#050505' : '#fff'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>{opt.dayName}</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '0.2rem' }}>{opt.dayNum}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Slot Selector */}
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <Clock size={18} color="#8b5cf6" />
                <span>2. Select Time Slot</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {timeSlots.map((slot) => (
                  <div
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className="interactive-hover"
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      background: selectedSlot === slot ? 'rgba(0, 240, 255, 0.05)' : 'var(--glass-bg)',
                      border: '1px solid',
                      borderColor: selectedSlot === slot ? '#00f0ff' : 'var(--glass-border)',
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: selectedSlot === slot ? '#00f0ff' : 'var(--text-secondary)',
                      transition: 'all 0.3s'
                    }}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Inquiry Questionnaire */}
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff' }}>3. Project Questionnaire</h3>
            
            <form onSubmit={handleBookSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Contact Info (Name, Email, Phone) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="consult-form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 (555) 019-2831"
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
                  />
                </div>
              </div>

              {/* Business Name & Project Type */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="consult-form-grid-2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Business Name (Optional)</label>
                  <input 
                    type="text" 
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. My Business LLC"
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
                  />
                </div>
                <CustomSelect 
                  label="Project Type"
                  options={["Landing Page", "Business Website", "E-commerce Store", "Custom Web App", "UI/UX Design Only"]}
                  value={formData.projectType}
                  onChange={(val) => setFormData({ ...formData, projectType: val })}
                />
              </div>

              {/* Budget Range & Expected Timeline */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="consult-form-grid-2">
                <CustomSelect 
                  label="Budget Range"
                  options={[
                    "Starter Package ($1,490)",
                    "Professional Package ($1.5k - $3k)",
                    "Business Package ($4,900)",
                    "Custom Retainer (Enterprise)"
                  ]}
                  value={formData.budget}
                  onChange={(val) => setFormData({ ...formData, budget: val })}
                />
                <CustomSelect 
                  label="Expected Timeline"
                  options={["Urgent (Under 3 Weeks)", "Standard (4 - 6 Weeks)", "Flexible (2+ Months)"]}
                  value={formData.timeline}
                  onChange={(val) => setFormData({ ...formData, timeline: val })}
                />
              </div>

              {/* Required Features (Checkboxes) */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>Required Features</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }} className="features-checkboxes">
                  {featureOptions.map((feat) => {
                    const selected = formData.features.includes(feat);
                    return (
                      <div
                        key={feat}
                        onClick={() => handleFeatureToggle(feat)}
                        className="interactive-hover"
                        style={{
                          padding: '0.6rem 0.8rem',
                          borderRadius: '8px',
                          border: '1px solid',
                          borderColor: selected ? '#00f0ff' : 'var(--glass-border)',
                          background: selected ? 'rgba(0, 240, 255, 0.05)' : 'rgba(255,255,255,0.01)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          color: selected ? '#00f0ff' : 'var(--text-secondary)',
                          textAlign: 'center',
                          transition: 'all 0.3s'
                        }}
                      >
                        {feat}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selection validation text */}
              {selectedSlot ? (
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '0.8rem 1.2rem', borderRadius: '10px', fontSize: '0.85rem', color: '#00f0ff' }}>
                  Meeting Schedule: <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>
                </div>
              ) : (
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  * Please pick a date and time slot in the left panels to unlock scheduling.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary interactive-hover"
                disabled={!selectedSlot}
                style={{ alignSelf: 'flex-start', opacity: selectedSlot ? 1 : 0.5 }}
              >
                <span>Confirm Session Booking</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {bookingConfirmed && (
              <div style={{ marginTop: '1.5rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                <Star size={14} fill="#00f0ff" />
                <span>Session Booked! Check your inbox for Google Meet link details.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 950px) {
          .consult-split {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 650px) {
          .consult-form-grid, .consult-form-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .features-selector-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BookConsultation;
