import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const Pricing = ({ currency = { code: 'INR', symbol: '₹', rate: 83.5 } }) => {
  const [traffic, setTraffic] = useState(5000);
  const [orderValue, setOrderValue] = useState(150); // in USD
  const [bounceRate, setBounceRate] = useState(60);

  // Math/Logic for conversions
  const visitorRecovery = traffic * (bounceRate / 100) * 0.3;
  const conversionLift = traffic * 0.018;
  const additionalRevenue = (visitorRecovery + conversionLift) * orderValue;

  // Helper to round currency amounts to nearest 500 or 100 for Indian Market rates
  const formatPrice = (priceVal) => {
    const converted = priceVal * currency.rate;
    if (currency.code === 'INR') {
      // Round to nearest 500
      return Math.round(converted / 500) * 500;
    }
    return Math.round(converted);
  };

  // Optional add-ons pricing
  const optionalAddons = [
    { name: "Extra Custom Page Design & Code", price: 40, suffix: " / page" },
    { name: "Bespoke Vector Logo Design", price: 80, suffix: "" },
    { name: "Copywriting Content Strategy (5 pages)", price: 100, suffix: "" },
    { name: "Additional Month Maintenance Support", price: 25, suffix: " / mo" }
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
            className="glass-panel laser-bracket-h"
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
                  {currency.symbol}{formatPrice(tier.price).toLocaleString()}
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
                {currency.symbol}{formatPrice(addon.price).toLocaleString()}{addon.suffix}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Advantage Comparison Table */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Market Advantage</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Our Pricing vs. Industry Average</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            We keep our operating overhead minimal to deliver custom designs and hand-written React code at under 20% of traditional agency rates.
          </p>
        </div>

        <div 
          className="glass-panel" 
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            padding: '2.5rem',
            border: '1px solid var(--glass-border)',
            background: 'var(--glass-bg)',
            overflowX: 'auto'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Service / Plan</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Traditional Agency</th>
                <th style={{ padding: '1rem', color: '#00f0ff', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700 }}>CoreForge Cost</th>
                <th style={{ padding: '1rem', color: '#10b981', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, textAlign: 'right' }}>Your Savings</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Starter (Landing Page)", average: 1490, current: 249 },
                { name: "Professional (Business Site)", average: 2890, current: 499 },
                { name: "Business (E-Commerce / SaaS)", average: 4990, current: 899 },
                { name: "Extra Custom Page", average: 200, current: 40 },
                { name: "Bespoke Vector Logo", average: 400, current: 80 }
              ].map((item, index) => {
                const savingsPercent = Math.round(((item.average - item.current) / item.average) * 100);
                const formatAverage = (priceVal) => {
                  const converted = priceVal * currency.rate;
                  if (currency.code === 'INR') {
                    return Math.round(converted / 500) * 500;
                  }
                  return Math.round(converted);
                };
                return (
                  <tr 
                    key={index} 
                    style={{ 
                      borderBottom: index === 4 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    <td style={{ padding: '1.25rem 1rem', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{item.name}</td>
                    <td style={{ padding: '1.25rem 1rem', color: 'var(--text-secondary)', textDecoration: 'line-through', fontSize: '0.95rem' }}>
                      {currency.symbol}{formatAverage(item.average).toLocaleString()}
                    </td>
                    <td style={{ padding: '1.25rem 1rem', color: '#00f0ff', fontWeight: 800, fontSize: '0.95rem' }}>
                      {currency.symbol}{formatPrice(item.current).toLocaleString()}
                    </td>
                    <td style={{ padding: '1.25rem 1rem', color: '#10b981', fontWeight: 800, textAlign: 'right', fontSize: '0.95rem' }}>
                      Save {savingsPercent}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dynamic ROI Savings Calculator */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Interactive Tool</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>ROI & Performance Calculator</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Estimate the revenue increase you can unlock by switching from a slow, template website to a custom-coded CoreForge site.
          </p>
        </div>

        <div 
          className="roi-split-panel glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(12, 12, 20, 0.9) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px'
          }}
        >
          {/* Sliders Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Est. Monthly Website Traffic</label>
                <span style={{ color: '#00f0ff', fontWeight: 700 }}>{traffic.toLocaleString()} visitors</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500"
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00f0ff', cursor: 'pointer' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Average Customer Value (Lead / Order)</label>
                <span style={{ color: '#8b5cf6', fontWeight: 700 }}>{currency.symbol}{Math.round(orderValue * currency.rate).toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={orderValue} 
                onChange={(e) => setOrderValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#8b5cf6', cursor: 'pointer' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Current Website Bounce Rate</label>
                <span style={{ color: '#d946ef', fontWeight: 700 }}>{bounceRate}%</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="90" 
                step="5"
                value={bounceRate} 
                onChange={(e) => setBounceRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d946ef', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* ROI Output Card */}
          <div 
            style={{ 
              background: 'rgba(5, 5, 10, 0.4)', 
              border: '1px solid rgba(0, 240, 255, 0.1)', 
              borderRadius: '16px', 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Est. Additional Monthly Revenue
            </span>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#10b981', margin: '0.5rem 0', fontFamily: 'var(--font-headings)' }}>
              {currency.symbol}{formatPrice(additionalRevenue).toLocaleString()}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
              Based on reducing bounce rate by <strong>{Math.round(bounceRate * 0.3)}%</strong> (due to loading under 1s) and achieving a conservative <strong>+1.8% conversion lift</strong> in form/checkout completions.
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Speed Increase</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#00f0ff', marginTop: '0.2rem' }}>Up to 5x Faster</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Google PageSpeed</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#8b5cf6', marginTop: '0.2rem' }}>98+ Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .enterprise-quote-panel {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .roi-split-panel {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 1.5rem !important;
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
