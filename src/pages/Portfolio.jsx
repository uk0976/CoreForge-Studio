import React, { useState } from 'react';
import { Target, Compass, Sparkles, CheckCircle2, Cpu, Globe, ArrowRight } from 'lucide-react';
import { agencyData } from '../data/agencyData';
import Modal from '../components/Modal';

const Portfolio = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div style={{ paddingTop: '8rem' }}>
      <div className="section">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Showcase Prototypes</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Featured Concept Projects</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto' }}>
            As a newly launched creative agency, we have built these showcase concept projects to demonstrate our high-fidelity design aesthetics and front-end coding capabilities.
          </p>
        </div>

        {/* Concept Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem'
          }}
          className="portfolio-grid"
        >
          {agencyData.portfolioConcepts.map((concept) => (
            <div
              key={concept.id}
              onClick={() => setSelectedConcept(concept)}
              className="glass-panel interactive-hover"
              style={{
                cursor: 'pointer',
                padding: 0,
                borderRadius: '28px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Card Image */}
              <div style={{ height: '340px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={concept.image} 
                  alt={concept.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                  className="portfolio-card-img"
                />
                
                {/* Industry Category Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(5, 5, 10, 0.85)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '50px',
                    padding: '0.4rem 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  {concept.category}
                </div>
              </div>

              {/* Card Info */}
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: '#fff' }}>{concept.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineClamp: 2, WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {concept.objective}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontWeight: 700, fontSize: '0.9rem' }}>
                  <span>View Concept Case Study</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Concept Modal view */}
      <Modal isOpen={!!selectedConcept} onClose={() => setSelectedConcept(null)}>
        {selectedConcept && (
          <div>
            {/* Modal Image */}
            <div style={{ height: '300px', borderRadius: '18px', overflow: 'hidden', marginBottom: '2.5rem' }}>
              <img 
                src={selectedConcept.image} 
                alt={selectedConcept.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Modal Header */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#00f0ff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                {selectedConcept.category}
              </span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '0.2rem', marginBottom: '0.5rem', color: '#fff' }}>
                {selectedConcept.title}
              </h2>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Type: <strong>Design & Coding Prototype</strong>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Objectives */}
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '3px solid #00f0ff', paddingLeft: '0.75rem' }}>
                  <Target size={16} color="#00f0ff" />
                  <span>Project Objectives</span>
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {selectedConcept.objective}
                </p>
              </div>

              {/* Design Approach */}
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '3px solid #8b5cf6', paddingLeft: '0.75rem' }}>
                  <Compass size={16} color="#8b5cf6" />
                  <span>Design Approach</span>
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {selectedConcept.approach}
                </p>
              </div>

              {/* Expected Outcome */}
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '3px solid #d946ef', paddingLeft: '0.75rem' }}>
                  <Sparkles size={16} color="#d946ef" />
                  <span>Expected Business Outcome</span>
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {selectedConcept.outcome}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.8rem' }}>Technologies Used</h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedConcept.techUsed.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#00f0ff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div 
                className="glass-panel" 
                style={{ 
                  background: 'rgba(0, 240, 255, 0.01)', 
                  borderColor: 'rgba(0, 240, 255, 0.15)',
                  padding: '2rem',
                  borderRadius: '18px'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', color: '#00f0ff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} />
                  <span>Core Prototype Features</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {selectedConcept.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fff' }}>
                      <span style={{ color: '#00f0ff' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close/Back button at the bottom of the content */}
              <button 
                onClick={() => setSelectedConcept(null)}
                className="btn btn-secondary interactive-hover"
                style={{ 
                  marginTop: '1.5rem', 
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: 'auto'
                }}
              >
                <span>← Close details & Go back</span>
              </button>

            </div>
          </div>
        )}
      </Modal>

      <style>{`
        .portfolio-card-img {
          transform: scale(1);
        }
        .glass-panel:hover .portfolio-card-img {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
