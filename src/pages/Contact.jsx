import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MessageSquare, Phone, Clock, ArrowRight, ShieldCheck, Star, ChevronDown } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectType: 'Business Website',
    budget: 'Professional Package ($1,490 - $2,890)',
    timeline: 'Standard (4 - 6 Weeks)',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger candidate success confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#d946ef']
    });

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      businessName: '',
      projectType: 'Business Website',
      budget: 'Professional Package ($1,490 - $2,890)',
      timeline: 'Standard (4 - 6 Weeks)',
      details: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Project Inquiry</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Let's Forge Your Project</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Ready to launch your platform? Submit your project details below. Our team reviews all scope inquiries and responds within 4 business hours.
        </p>
      </section>

      {/* Grid Layout */}
      <section className="section grid-2" style={{ alignItems: 'flex-start' }}>
        {/* Left Column: Contact details and office stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>Get In Touch</h2>
          
          <div className="glass-panel" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff' }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SUPPORT EMAIL</div>
              <a href="mailto:hello@coreforge.studio" className="interactive-hover" style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>hello@coreforge.studio</a>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
              <MessageSquare size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>WHATSAPP CHAT</div>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="interactive-hover" style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>+1 (555) 480-1280</a>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>RESPONSE TIME</div>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>Under 4 Business Hours</span>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>WORKING HOURS</div>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>Mon - Fri: 9:00 AM - 6:00 PM CET</span>
            </div>
          </div>

          {/* Office Map Mockup */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px dashed var(--glass-border)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>[ Dubai Design District Office Map Mockup ]</span>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Physical consultations available by appointment after scoping agreements.</div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="glass-panel">
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>Project Inquiry Form</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-split">
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Your Name</label>
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
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Business Name / Website (Optional)</label>
              <input 
                type="text" 
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g. My Business LLC"
                style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="inquiry-dropdowns">
              <CustomSelect 
                label="Project Type"
                options={["Landing Page", "Business Website", "E-commerce Store", "Custom Web App", "UI/UX Design Only"]}
                value={formData.projectType}
                onChange={(val) => setFormData({ ...formData, projectType: val })}
              />

              <CustomSelect 
                label="Budget Range"
                options={[
                  "Starter Package ($1,490)",
                  "Professional Package ($1,490 - $2,890)",
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

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Project Details / Description</label>
              <textarea 
                rows="4"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Briefly tell us about your brand and features you need..."
                style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.75rem 1rem', color: '#fff', resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary interactive-hover" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              <span>Submit Project Inquiry</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {submitted && (
            <div style={{ marginTop: '1.5rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <Star size={14} fill="#00f0ff" />
              <span>Inquiry received! We are auditing your request and will follow up shortly.</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
