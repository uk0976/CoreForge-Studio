import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Mail, Compass, Star } from 'lucide-react';

const Footer = ({ setRoute }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Trigger Awwwards-style premium feedback confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#00f0ff', '#8b5cf6', '#d946ef']
    });

    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Website Design", route: "services" },
        { label: "Website Development", route: "services" },
        { label: "SEO & Performance", route: "services" },
        { label: "AI Integrations", route: "services" }
      ]
    },
    {
      title: "Explore",
      links: [
        { label: "Our Portfolio", route: "portfolio" },
        { label: "Case Studies", route: "case-studies" },
        { label: "Process Map", route: "process" },
        { label: "Proficiencies", route: "technologies" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Studio", route: "about" },
        { label: "We're Hiring", route: "careers" },
        { label: "Client Pricing", route: "pricing" },
        { label: "Special Offers", route: "offers" }
      ]
    }
  ];

  const navigateTo = (route) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setRoute(route);
  };

  return (
    <footer 
      style={{
        background: 'linear-gradient(to top, #020207 0%, var(--bg-primary) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '6rem 2rem 3rem',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr) 1.5fr',
          gap: '3rem',
          marginBottom: '5rem'
        }}
        className="footer-grid"
      >
        {/* Branding Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            onClick={() => navigateTo('home')}
            className="interactive-hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontWeight: 800,
              fontFamily: 'var(--font-headings)',
              fontSize: '1.6rem'
            }}
          >
            <span style={{ color: '#00f0ff' }}>⚡</span>
            <span>CORE<span style={{ color: '#00f0ff' }}>FORGE</span></span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Forging high-performance websites, immersive UI/UX designs, and advanced AI systems that scale businesses.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }} className="social-links">
            <a href="#" className="social-icon-btn interactive-hover">TW</a>
            <a href="#" className="social-icon-btn interactive-hover">LI</a>
            <a href="#" className="social-icon-btn interactive-hover">AW</a>
            <a href="#" className="social-icon-btn interactive-hover">GH</a>
          </div>
        </div>

        {/* Category lists */}
        {footerLinks.map((cat, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h5 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
              {cat.title}
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {cat.links.map((link, j) => (
                <li key={j}>
                  <span 
                    onClick={() => navigateTo(link.route)}
                    className="footer-link interactive-hover"
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h5 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
            Stay Forged
          </h5>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Get curated design reviews, tech updates, and exclusive startup packages.
          </p>
          
          <form onSubmit={handleSubscribe} style={{ position: 'relative', marginTop: '0.5rem' }}>
            <input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                padding: '0.8rem 3rem 0.8rem 1.2rem',
                fontSize: '0.9rem',
                color: '#fff',
                transition: 'border 0.3s'
              }}
              required
            />
            <button 
              type="submit"
              className="interactive-hover"
              style={{
                position: 'absolute',
                right: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#00f0ff',
                color: '#050505',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ArrowRight size={14} />
            </button>
          </form>

          {subscribed && (
            <div style={{ color: '#00f0ff', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Star size={12} fill="#00f0ff" />
              <span>Subscription forged successfully!</span>
            </div>
          )}
        </div>
      </div>

      {/* Copy & Legal footer section */}
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}
        className="footer-bottom"
      >
        <div>
          © 2026 CoreForge Studio. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <span onClick={() => navigateTo('privacy')} className="legal-link interactive-hover">Privacy Policy</span>
          <span onClick={() => navigateTo('terms')} className="legal-link interactive-hover">Terms & Conditions</span>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #00f0ff;
        }
        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: all 0.3s;
        }
        .social-icon-btn:hover {
          border-color: #00f0ff;
          color: #00f0ff;
          background: rgba(0, 240, 255, 0.05);
        }
        .legal-link {
          cursor: pointer;
          transition: color 0.2s;
        }
        .legal-link:hover {
          color: #00f0ff;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
