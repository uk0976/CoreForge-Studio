import React from 'react';
import { MessageSquare, Award, Clock } from 'lucide-react';

const Testimonials = () => {
  return (
    <div style={{ paddingTop: '8rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <section className="section" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          
          {/* Visual Indicator Icon */}
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#00f0ff' }}>
            <MessageSquare size={24} />
          </div>

          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Client Trust</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Client Testimonials Coming Soon</h1>
          
          <div 
            className="glass-panel" 
            style={{ 
              padding: '3rem', 
              borderRadius: '24px', 
              background: 'linear-gradient(135deg, rgba(5,5,10,0.8) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid var(--glass-border)',
              marginTop: '2rem'
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: 1.7, margin: 0 }}>
              We're excited to work with our first clients. Every successful project completed will be showcased here with genuine feedback.
            </p>
          </div>

          {/* Core Forge Pledge */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3.5rem', flexWrap: 'wrap' }} className="testimonials-pledge">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Award size={14} color="#00f0ff" />
              <span>100% Genuine Reviews</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Clock size={14} color="#8b5cf6" />
              <span>Verified Collaborations</span>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
