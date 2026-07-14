import React, { useState } from 'react';
import { Layers, Database, Cloud, Cpu, FileJson, Wallet, Send, BarChart2, ShieldAlert, CheckCircle2 } from 'lucide-react';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [selectedElement, setSelectedElement] = useState(null);

  const periodicElements = [
    { symbol: "Rt", name: "React", weight: "9.8", category: "Frontend", color: "#00f0ff", desc: "Component-based user interface rendering library." },
    { symbol: "Nx", name: "Next.js", weight: "9.5", category: "Frontend", color: "#00f0ff", desc: "Server rendering, static optimization, and SEO routing." },
    { symbol: "Ts", name: "TypeScript", weight: "9.0", category: "Frontend", color: "#00f0ff", desc: "Strict type safety structure to eliminate syntax runtime bugs." },
    { symbol: "Gs", name: "GSAP", weight: "8.5", category: "Frontend", color: "#00f0ff", desc: "GreenSock timeline animations and scroll trigger effects." },
    { symbol: "Fm", name: "Framer", weight: "8.2", category: "Frontend", color: "#00f0ff", desc: "React layout transitions and micro-state button animations." },
    { symbol: "Tw", name: "Tailwind", weight: "7.8", category: "Frontend", color: "#00f0ff", desc: "Utility-first css prototyping classes when requested." },

    { symbol: "Nd", name: "Node.js", weight: "9.2", category: "Backend", color: "#8b5cf6", desc: "Event-driven runtime engine for high-speed API servers." },
    { symbol: "Ex", name: "Express", weight: "8.0", category: "Backend", color: "#8b5cf6", desc: "JSON REST routing middleware API layers." },

    { symbol: "Mg", name: "MongoDB", weight: "8.8", category: "Database", color: "#d946ef", desc: "Flexible NoSQL document collections for forms and data schemas." },
    { symbol: "Pg", name: "Postgres", weight: "9.0", category: "Database", color: "#d946ef", desc: "Robust structured relational tables for enterprise data sets." },
    { symbol: "Pr", name: "Prisma", weight: "8.2", category: "Database", color: "#d946ef", desc: "Type-safe database query mappings and schemas ORM." },

    { symbol: "Aw", name: "AWS S3", weight: "9.5", category: "Cloud", color: "#10b981", desc: "Secure media assets bucket file storage systems." },
    { symbol: "Vc", name: "Vercel", weight: "9.8", category: "Cloud", color: "#10b981", desc: "Global edge CDN server network hosting under 50ms latency." },
    { symbol: "Cf", name: "Cloudflare", weight: "9.6", category: "Cloud", color: "#10b981", desc: "DNS routing, SSL gateway rules, and DDoS shield protection." },

    { symbol: "Op", name: "OpenAI GPT", weight: "9.4", category: "AI", color: "#f59e0b", desc: "Context-trained models for custom chatbot integration." },
    { symbol: "Ge", name: "Gemini", weight: "9.2", category: "AI", color: "#f59e0b", desc: "Multimodal analysis pipeline queries and data mappings." },

    { symbol: "St", name: "Stripe", weight: "9.8", category: "Payments", color: "#ec4899", desc: "Credit card invoice checkouts and billing portals." },
    { symbol: "Sa", name: "Sanity.io", weight: "8.5", category: "CMS", color: "#06b6d4", desc: "Headless real-time schema blog posting editor dashboards." }
  ];

  // Categorized tech ecosystem matching all 10 requested columns
  const techData = {
    Frontend: [
      { name: "React", role: "UI rendering with modular, reusable components." },
      { name: "Next.js", role: "Server component rendering, static optimization, and SEO routing." },
      { name: "TypeScript", role: "Strict compile-time typing to eliminate syntax bugs." },
      { name: "Tailwind CSS", role: "Fast utility styling drafts when requested." },
      { name: "GSAP", role: "GreenSock timeline animations and scroll trigger effects." },
      { name: "Framer Motion", role: "React layout transitions and button hover micro-states." }
    ],
    Backend: [
      { name: "Node.js", role: "Fast event-driven runtime for API server nodes." },
      { name: "Express", role: "Minimalist routing middleware for transferring JSON data." }
    ],
    Database: [
      { name: "MongoDB", useCase: "NoSQL document storage for blogs and forms metadata." },
      { name: "PostgreSQL", useCase: "Structured relational tables for enterprise data sets." },
      { name: "Prisma ORM", useCase: "Type-safe database queries and automated schema migration." }
    ],
    Cloud: [
      { name: "AWS", useCase: "Secure media asset storage buckets and edge hosting files." },
      { name: "Vercel CDN", useCase: "Global CDN caching server network under 50ms latency." }
    ],
    AI: [
      { name: "OpenAI API", useCase: "Context-trained GPT assistants for automated support queries." },
      { name: "Gemini API", useCase: "Multimodal analysis pipelines and vector search setups." }
    ],
    CMS: [
      { name: "WordPress", useCase: "Traditional content inputs integrated headless with React templates." },
      { name: "Sanity.io", useCase: "Real-time headless schema builder for rapid blog posting." }
    ],
    "Payment Gateways": [
      { name: "Stripe Checkpoint", useCase: "Credit checkout portals, subscription plans, and invoice billing." },
      { name: "PayPal Checkout", useCase: "International transactions and secure wallet checkouts." }
    ],
    Deployment: [
      { name: "Vercel Deploy", useCase: "Continuous integration from GitHub push commits to production." },
      { name: "Netlify", useCase: "Static HTML forms validation and serverless edge redirects." }
    ],
    Analytics: [
      { name: "Google Analytics 4", useCase: "Auditing visitor sources, session time scales, and conversions." },
      { name: "Google Tag Manager", useCase: "Injecting event tracking scripts without modifying source files." }
    ],
    Security: [
      { name: "Cloudflare SSL", useCase: "Full HTTPS encryption, DNS routing rules, and DDoS shielding." },
      { name: "Helmet.js", useCase: "Hardening HTTP headers inside API servers to prevent injections." }
    ]
  };

  const categories = Object.keys(techData);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Frontend': return <Layers size={18} />;
      case 'Backend': return <FileJson size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      case 'AI': return <Cpu size={18} />;
      case 'CMS': return <Layers size={18} />;
      case 'Payment Gateways': return <Wallet size={18} />;
      case 'Deployment': return <Send size={18} />;
      case 'Analytics': return <BarChart2 size={18} />;
      case 'Security': return <ShieldAlert size={18} />;
      default: return <CheckCircle2 size={18} />;
    }
  };

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Technology toolkit</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Technologies We Love</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Explore our toolkit. We select modern, high-speed, secure libraries to build digital assets that perform beautifully.
        </p>
      </section>

      {/* Categories Tabs & Lists */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '4rem' }} className="tech-split">
          
          {/* Left Column: 10 Categories List */}
          <div className="tech-tabs-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="interactive-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.1rem 1.5rem',
                  borderRadius: '12px',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)' : 'var(--glass-bg)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'transparent' : 'var(--glass-border)',
                  color: activeCategory === cat ? '#050505' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ opacity: 0.8 }}>{getCategoryIcon(cat)}</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Technology Details Grid */}
          <div>
            <div className="glass-panel" style={{ minHeight: '400px', background: 'linear-gradient(135deg, rgba(5,5,10,0.85) 0%, rgba(255,255,255,0.01) 100%)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', color: '#00f0ff', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {getCategoryIcon(activeCategory)}
                <span>Category Stack: {activeCategory}</span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>Ecosystem Elements</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {techData[activeCategory].map((tool, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      borderBottom: '1px solid rgba(255,255,255,0.05)', 
                      paddingBottom: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <h4 style={{ fontSize: '1.2rem', color: '#00f0ff' }}>{tool.name}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {tool.role || tool.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Periodic Table of Dev Stack */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Interactive Explorer</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Periodic Table of Technologies</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Tap any elements card in the periodic grid to view details of our coding stack integrations.
          </p>
        </div>

        <div className="periodic-table">
          {periodicElements.map((el, i) => (
            <div 
              key={i} 
              className="element-card"
              onClick={() => setSelectedElement(selectedElement === el ? null : el)}
              style={{
                borderColor: selectedElement?.symbol === el.symbol ? el.color : 'var(--glass-border)',
                boxShadow: selectedElement?.symbol === el.symbol ? `0 0 15px ${el.color}` : 'none',
                background: selectedElement?.symbol === el.symbol ? 'rgba(255,255,255,0.02)' : 'var(--glass-bg)',
                transform: selectedElement?.symbol === el.symbol ? 'scale(1.02)' : 'scale(1)',
                padding: '1.25rem 1rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                <span>{el.weight}</span>
                <span style={{ color: el.color, fontWeight: 700 }}>{el.category[0]}</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', textAlign: 'center', margin: '0.4rem 0', fontFamily: 'var(--font-headings)' }}>
                {el.symbol}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {el.name}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Element Details Panel */}
        {selectedElement && (
          <div 
            className="glass-panel"
            style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              borderLeft: `4px solid ${selectedElement.color}`,
              background: 'linear-gradient(135deg, rgba(5,5,10,0.9) 0%, rgba(255,255,255,0.01) 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span style={{ color: selectedElement.color, textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {selectedElement.category} Element Details
                </span>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                  {selectedElement.name} ({selectedElement.symbol})
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                  {selectedElement.desc}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.8rem 1.4rem', borderRadius: '10px', border: '1px solid var(--glass-border)', flexShrink: 0 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>INTEGRATION SCORE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: selectedElement.color }}>{selectedElement.weight} / 10</div>
              </div>
            </div>
          </div>
        )}
      </section>

      <style>{`
        @media (max-width: 900px) {
          .tech-split {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .tech-tabs-container {
            flex-direction: row !important;
            overflow-x: auto !important;
            padding: 0.5rem 0.25rem !important;
            gap: 0.5rem !important;
            white-space: nowrap !important;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .tech-tabs-container::-webkit-scrollbar {
            display: none;
          }
          .tech-tabs-container button {
            flex-shrink: 0 !important;
            padding: 0.8rem 1.2rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Technologies;
