import React from 'react';
import { ArrowRight, BarChart3, Clock, Cpu, Sparkles } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const CaseStudies = () => {
  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Proven Metrics</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Deep-Dive Case Studies</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore our client results, code architectures, design research, and visual solutions.
        </p>
      </section>

      {/* Case Studies Lists */}
      <section className="section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {agencyData.portfolio.map((project, i) => (
            <div 
              key={project.id} 
              className="glass-panel"
              style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              {/* Header metrics split */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1.5rem'
                }}
                className="case-header-split"
              >
                <div>
                  <span style={{ color: '#8b5cf6', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>{project.category} / {project.client}</span>
                  <h2 style={{ fontSize: '2.2rem', marginTop: '0.2rem', marginBottom: '0.5rem' }}>{project.title}</h2>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{project.overview}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem' }} className="case-header-metrics">
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Build Timeline</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#00f0ff' }}>{project.timeline}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dev Stack</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#8b5cf6' }}>React / Node</div>
                  </div>
                </div>
              </div>

              {/* In depth Split content description */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }} className="case-content-grid">
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Cpu size={16} color="#00f0ff" />
                    <span>The Problem</span>
                  </h4>
                  <p style={{ fontSize: '0.95rem' }}>{project.problem}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} color="#8b5cf6" />
                    <span>Design & Research</span>
                  </h4>
                  <p style={{ fontSize: '0.95rem' }}>{project.research}</p>
                </div>
              </div>

              {/* Solution & Results */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr', gap: '3rem', alignItems: 'center' }} className="case-bottom-grid">
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>The Solution</h4>
                  <p style={{ fontSize: '0.95rem' }}>{project.solution}</p>
                </div>
                
                <div 
                  className="glass-panel" 
                  style={{ 
                    background: 'rgba(0, 240, 255, 0.01)', 
                    borderColor: 'rgba(0, 240, 255, 0.15)',
                    padding: '2rem'
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', color: '#00f0ff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BarChart3 size={16} />
                    <span>Proven Results Metric</span>
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#fff', margin: 0 }}>{project.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .case-header-split {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .case-header-metrics {
            width: 100% !important;
            justify-content: space-between !important;
          }
          .case-content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .case-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
