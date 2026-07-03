import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const Process = () => {
  return (
    <div style={{ paddingTop: '8rem', overflow: 'hidden' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Our Method</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Our Development Process</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Explore our complete 10-step roadmap. We manage client deliverables from scoping and design iterations to deployment and post-launch maintenance.
        </p>
      </section>

      {/* Full-Page Vertical Timeline */}
      <section className="section" style={{ paddingBottom: '8rem', position: 'relative' }}>
        
        {/* Timeline Central Tracking Line */}
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(to bottom, #00f0ff 0%, #8b5cf6 30%, #d946ef 70%, transparent 100%)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }} 
          className="timeline-line" 
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          {agencyData.processStages.map((proc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={proc.step}
                style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                  marginBottom: '5rem'
                }}
                className="timeline-item"
              >
                {/* Connecting Dot Indicator */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#05050a',
                    border: '3px solid #00f0ff',
                    boxShadow: '0 0 10px #00f0ff',
                    zIndex: 3
                  }} 
                  className="timeline-dot" 
                />

                {/* Glass Card */}
                <div
                  className="glass-panel interactive-hover"
                  style={{
                    width: '45%',
                    padding: '2.5rem',
                    borderRadius: '24px',
                    position: 'relative',
                    border: '1px solid var(--glass-border)',
                    background: 'var(--glass-bg)'
                  }}
                >
                  {/* Floating Large Number Indicator */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '30px',
                      fontSize: '3rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-headings)',
                      color: 'rgba(0, 240, 255, 0.03)',
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                  >
                    {proc.step}
                  </div>

                  {/* Card Content */}
                  <span style={{ color: '#00f0ff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                    Phase {proc.step}
                  </span>
                  
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>
                    {proc.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {proc.description}
                  </p>

                  {/* Verification Checkmark Badge */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
                    <CheckCircle2 size={14} />
                    <span>Verified Scoping Milestone</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-end !important;
            margin-bottom: 3.5rem !important;
          }
          .timeline-dot {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-item .glass-panel {
            width: calc(100% - 55px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Process;
