import React from 'react';
import { Sparkles, Gift, Tag, Globe, ArrowRight, ShieldCheck, Search, Flame } from 'lucide-react';

const Offers = () => {
  const launchOffers = [
    {
      title: "Launch Discount",
      discount: "15% Off Any Package",
      desc: "To welcome our first cohort of launch partners. Secure high-end custom UI design and React code at introductory prices.",
      icon: <Tag size={24} color="#00f0ff" />,
      type: "First Cohort Special"
    },
    {
      title: "Free Consultation",
      discount: "30-Min Strategy Call",
      desc: "Book a direct call with our creative director. We will review your layouts scope, target budget, and recommend coding stacks.",
      icon: <Sparkles size={24} color="#8b5cf6" />,
      type: "Introductory Meeting"
    },
    {
      title: "Free Basic SEO Setup",
      discount: "Google Indexing Ready",
      desc: "We include custom schema.org tags, keyword meta setups, and submit your XML sitemap to Google Search Console in all launches.",
      icon: <Search size={24} color="#d946ef" />,
      type: "Visibility Package"
    },
    {
      title: "Free Domain Assistance",
      discount: "DNS & SSL Configuration",
      desc: "We configure your custom domain, set up secure Cloudflare DNS routes, and install HTTPS SSL certificates. 100% complimentary.",
      icon: <Globe size={24} color="#10b981" />,
      type: "DNS Integration"
    },
    {
      title: "Free Website Audit",
      discount: "Google PageSpeed Check",
      desc: "Send us your existing website URL. We will compile a detailed speed audit highlighting assets blockages and core bugs.",
      icon: <Flame size={24} color="#f59e0b" />,
      type: "Performance Audit"
    },
    {
      title: "Referral Rewards",
      discount: "10% Referral Reward",
      desc: "Refer a business or startup needing design/code. Once they sign their agreement, we wire you 10% of their project fee in cash.",
      icon: <Gift size={24} color="#ec4899" />,
      type: "Referral Program"
    }
  ];

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Exclusive Incentives</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Launch Promotions</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Take advantage of our launch-phase incentives to build your premium digital presence and optimize your performance benchmarks.
        </p>
      </section>

      {/* Offers Grid */}
      <section className="section grid-3" style={{ paddingBottom: '8rem' }}>
        {launchOffers.map((offer, index) => (
          <div 
            key={index} 
            className="glass-panel"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              padding: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {offer.icon}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.8rem', borderRadius: '50px' }}>
                {offer.type}
              </span>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem', color: '#fff' }}>{offer.title}</h3>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00f0ff', marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>
              {offer.discount}
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: 1.6, marginBottom: '2rem' }}>
              {offer.desc}
            </p>

            <a 
              href="#/book-consultation"
              className="btn btn-secondary interactive-hover"
              style={{ width: '100%', padding: '0.8rem 1.5rem', fontSize: '0.85rem' }}
            >
              <span>Claim Promotion</span>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Offers;
