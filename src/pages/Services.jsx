import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Clock, Tag, MessageSquare } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const Services = ({ currency = { code: 'INR', symbol: '₹', rate: 83.5 } }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Our Capabilities</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Bespoke Digital Services</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Explore our complete catalog of 20 specialized design and development services. We write custom code and design tailored assets. No template locks.
        </p>
      </section>

      {/* Services Grid (20 Services) */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '2.5rem' 
          }}
          className="services-grid"
        >
          {agencyData.servicesList.map((service, index) => (
            <div 
              key={service.id} 
              className="glass-panel"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                borderLeft: hoveredCard === index ? '4px solid #00f0ff' : '1px solid var(--glass-border)',
                transition: 'all 0.3s ease',
                padding: '2.5rem'
              }}
            >
              {/* Top Meta info */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                {/* Starting Price Badge */}
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 700, 
                    color: '#00f0ff', 
                    background: 'rgba(0, 240, 255, 0.05)', 
                    border: '1px solid rgba(0, 240, 255, 0.15)', 
                    padding: '0.35rem 1rem', 
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Tag size={12} />
                  <span>Est. {currency.symbol}{Math.round(service.cost * currency.rate).toLocaleString()}</span>
                </span>

                {/* Timeline Badge */}
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: 'var(--text-secondary)',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.35rem 1rem',
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <Clock size={12} />
                  <span>Timeline: {service.time}</span>
                </span>
              </div>

              {/* Title & Audience info */}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', color: '#fff' }}>{service.title}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Ideal for: <strong>{service.audience}</strong>
              </div>

              {/* Overview */}
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem', lineHeight: 1.6 }}>
                {service.overview}
              </p>

              {/* Key Features bullet points list */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', marginBottom: '0.75rem' }}>
                  What's Included
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <Check size={12} color="#00f0ff" style={{ flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a 
                href="#/book-consultation"
                className="btn btn-secondary interactive-hover"
                style={{ width: '100%', gap: '0.5rem', padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
              >
                <span>Request {service.title}</span>
                <ArrowRight size={14} color="#00f0ff" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
