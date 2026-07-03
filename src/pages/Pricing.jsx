import React from 'react';
import { Check, Clock, ShieldCheck, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const Pricing = ({ currency = { code: 'INR', symbol: '₹', rate: 83.5 } }) => {
  // Optional add-ons pricing
  const optionalAddons = [
    { name: "Extra Custom Page Design & Code", price: 250, suffix: " / page" },
    { name: "Bespoke Vector Logo Design", price: 490, suffix: "" },
    { name: "Copywriting Content Strategy (5 pages)", price: 650, suffix: "" },
    { name: "Additional Month Maintenance Support", price: 150, suffix: " / mo" }
  ];

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Investment Tiers</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Transparent Packages</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Select the layout complexity and database specs that fit your business stage. No template locks. Complete ownership.
        </p>
      </section>

      {/* Pricing Cards Grid (3 Packages + Enterprise Quote Card) */}
      <section className="section grid-3" style={{ paddingBottom: '4rem' }}>
        {agencyData.pricing.map((tier, i) => (
          <div 
            key={i} 
            className="glass-panel"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              padding: '2.5rem'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: '#fff' }}>{tier.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', minHeight: '40px' }}>{tier.description}</p>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-headings)' }}>
                  {currency.symbol}{Math.round(tier.price * currency.rate).toLocaleString()}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  / fixed project cost
                </span>
              </div>
            </div>

            {/* Timelines and support specs */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem', 
                background: 'rgba(255,255,255,0.02)', 
                padding: '1rem', 
                borderRadius: '12px', 
                marginBottom: '2rem',
                border: '1px solid var(--glass-border)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Build Time</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                  <Clock size={12} />
                  <span>{tier.time}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Free Support</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                  <ShieldCheck size={12} />
                  <span>{tier.support}</span>
                </div>
              </div>
            </div>

            {/* List of features */}
            <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', marginBottom: '0.8rem' }}>
              What's Included
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1, marginBottom: '2.5rem' }}>
              {tier.features.map((feat, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Check size={14} color="#00f0ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#/book-consultation"
              className="btn btn-secondary interactive-hover"
              style={{ width: '100%' }}
            >
              <span>Get Started</span>
            </a>
          </div>
        ))}
      </section>

      {/* Enterprise Custom Quote Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div 
          className="glass-panel" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.8fr 1.2fr', 
            gap: '4rem', 
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.15)'
          }}
          className="enterprise-quote-panel glass-panel"
        >
          <div>
            <div style={{ display: 'inline-flex', background: 'rgba(0, 240, 255, 0.05)', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '50px', padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Custom Retainer
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Enterprise Custom Scope</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Need a bespoke SaaS application, dynamic dashboard charts, automated LLM customer support routing, or complex database relationships? We design complete custom proposals from scratch to fit your technical criteria.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Requires technical scoping session</div>
            <a 
              href="#/book-consultation"
              className="btn btn-primary interactive-hover"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <span>Request Custom Proposal</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Optional Add-Ons Panel */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem' }}>Optional Add-Ons</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Customize your layout scope with specific add-on components.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {optionalAddons.map((addon, index) => (
            <div 
              key={index}
              className="glass-panel"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 2rem',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)'
              }}
              className="addon-row-panel glass-panel"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Plus size={16} color="#00f0ff" />
                <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{addon.name}</span>
              </div>
              <span style={{ fontWeight: 700, color: '#00f0ff', fontSize: '0.95rem' }}>
                {currency.symbol}{Math.round(addon.price * currency.rate).toLocaleString()}{addon.suffix}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .enterprise-quote-panel {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .addon-row-panel {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
