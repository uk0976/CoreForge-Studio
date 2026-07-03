import React, { useState } from 'react';
import { Layers, Database, Cloud, Cpu, FileJson, Wallet, Send, BarChart2, ShieldAlert, CheckCircle2 } from 'lucide-react';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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

      <style>{`
        @media (max-width: 900px) {
          .tech-split {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Technologies;
