import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = ({ currentRoute, setRoute, currency, setCurrency }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyRef = useRef(null);

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'India', rate: 83.5, flag: '🇮🇳' },
    { code: 'USD', symbol: '$', name: 'United States', rate: 1, flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Europe', rate: 0.92, flag: '🇪🇺' },
    { code: 'GBP', symbol: '£', name: 'United Kingdom', rate: 0.78, flag: '🇬🇧' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE', rate: 3.67, flag: '🇦🇪' }
  ];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Toggle sticky navbar backdrop strength
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Pricing', route: 'pricing' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' }
  ];

  // All 18 pages categorized for the fullscreen overlay
  const menuCategories = {
    core: [
      { label: 'Home Page', route: 'home' },
      { label: 'Services & Skills', route: 'services' },
      { label: 'Project Portfolio', route: 'portfolio' },
      { label: 'Case Studies', route: 'case-studies' },
      { label: 'Investment Pricing', route: 'pricing' },
      { label: 'About Our Team', route: 'about' }
    ],
    experience: [
      { label: 'Periodic Tech Stack', route: 'technologies' },
      { label: 'Interactive Process', route: 'process' },
      { label: 'Client Testimonials', route: 'testimonials' },
      { label: 'Weekly Blog', route: 'blog' },
      { label: 'Frequently Asked FAQ', route: 'faq' }
    ],
    growth: [
      { label: 'Exclusive Offers', route: 'offers' },
      { label: 'Book Consultation', route: 'book-consultation' },
      { label: 'Careers at Studio', route: 'careers' },
      { label: 'Privacy Policy', route: 'privacy' },
      { label: 'Terms & Conditions', route: 'terms' }
    ]
  };

  const navigateTo = (route) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setRoute(route);
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        {/* Scroll Progress Bar */}
        <div 
          style={{
            height: '2px',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #d946ef)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            transition: 'width 0.1s ease-out'
          }}
        />

        <div 
          className="navbar-header-row"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Logo */}
          <div 
            onClick={() => navigateTo('home')} 
            className="interactive-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontWeight: 800,
              fontFamily: 'var(--font-headings)',
              fontSize: '1.4rem',
              letterSpacing: '-0.03em'
            }}
          >
            <span style={{ color: '#00f0ff' }}>⚡</span>
            <span>CORE<span style={{ color: '#00f0ff' }}>FORGE</span></span>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-only"
          >
            {navLinks.map((link) => (
              <span
                key={link.route}
                onClick={() => navigateTo(link.route)}
                className={`interactive-hover ${currentRoute === link.route ? 'nav-active' : ''}`}
                style={{
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: currentRoute === link.route ? '#00f0ff' : 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.2rem 0'
                }}
              >
                {link.label}
              </span>
            ))}
          </nav>

          {/* CTA & Menu Buttons */}
          <div className="navbar-actions-row" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button 
              onClick={() => navigateTo('book-consultation')}
              className="btn btn-secondary desktop-only interactive-hover"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>Consultation</span>
              <Sparkles size={14} color="#00f0ff" />
            </button>

            {/* Premium Currency Selector */}
            <div ref={currencyRef} style={{ position: 'relative' }}>
              <div 
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="interactive-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '50px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <span>{currency ? currency.flag : '🇮🇳'} {currency ? currency.symbol : '₹'}</span>
                <span className="currency-code-label" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{currency ? currency.code : 'INR'}</span>
              </div>

              {isCurrencyOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    width: '180px',
                    background: '#0c0c16',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(0, 240, 255, 0.05)',
                    zIndex: 101,
                    overflow: 'hidden',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  {currencies.map((cur) => (
                    <div
                      key={cur.code}
                      onClick={() => {
                        setCurrency(cur);
                        localStorage.setItem('cf_currency', JSON.stringify(cur));
                        setIsCurrencyOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 1.25rem',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        color: currency && currency.code === cur.code ? '#00f0ff' : 'var(--text-secondary)',
                        background: currency && currency.code === cur.code ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
                        transition: 'all 0.2s',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        if (!currency || currency.code !== cur.code) e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                      onMouseLeave={(e) => {
                        if (!currency || currency.code !== cur.code) e.target.style.background = 'transparent';
                      }}
                    >
                      <span>{cur.flag} {cur.code} ({cur.symbol})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="interactive-hover"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                transition: 'all 0.3s'
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div 
        className="fullscreen-menu-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 999,
          background: 'rgba(5, 5, 10, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.6s cubic-bezier(0.85, 0, 0.15, 1)',
          padding: '6rem 2rem 2rem'
        }}
      >
        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4rem'
          }}
          className="menu-grid"
        >
          {/* Core Categories */}
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>Core Sections</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {menuCategories.core.map((item) => (
                <div 
                  key={item.route}
                  onClick={() => navigateTo(item.route)}
                  className="menu-link-item"
                >
                  <span className="menu-number">{currentRoute === item.route ? '⚡' : '→'}</span>
                  <span className="menu-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Capabilities */}
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>Agency Capabilities</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {menuCategories.experience.map((item) => (
                <div 
                  key={item.route}
                  onClick={() => navigateTo(item.route)}
                  className="menu-link-item"
                >
                  <span className="menu-number">{currentRoute === item.route ? '⚡' : '→'}</span>
                  <span className="menu-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth & Policies */}
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>Growth & Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {menuCategories.growth.map((item) => (
                <div 
                  key={item.route}
                  onClick={() => navigateTo(item.route)}
                  className="menu-link-item"
                >
                  <span className="menu-number">{currentRoute === item.route ? '⚡' : '→'}</span>
                  <span className="menu-text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Overlay footer */}
        <div 
          style={{
            maxWidth: '1200px',
            margin: '4rem auto 0',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
          className="menu-footer"
        >
          <div>CoreForge Studio © 2026. Forging Digital Experiences.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" className="interactive-hover">Twitter</a>
            <a href="#" className="interactive-hover">LinkedIn</a>
            <a href="#" className="interactive-hover">Awwwards</a>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-only {
          @media (max-width: 768px) {
            display: none !important;
          }
        }
        .nav-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #00f0ff;
          box-shadow: 0 0 8px #00f0ff;
        }
        .menu-link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: all 0.3s;
          padding: 0.25rem 0;
        }
        .menu-link-item:hover {
          color: #00f0ff;
          transform: translateX(10px);
        }
        .menu-number {
          font-size: 1.1rem;
          color: #8b5cf6;
          transition: color 0.3s;
        }
        .menu-link-item:hover .menu-number {
          color: #00f0ff;
        }
        @media (max-width: 768px) {
          .navbar-header-row {
            padding: 0.75rem 1rem !important;
          }
          .navbar-actions-row {
            gap: 0.55rem !important;
          }
          .currency-code-label {
            display: none !important;
          }
          .fullscreen-menu-overlay {
            justify-content: flex-start !important;
            overflow-y: auto !important;
            padding-top: 6rem !important;
            padding-bottom: 4rem !important;
          }
          .menu-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            overflow-y: visible !important;
            max-height: none !important;
          }
          .menu-footer {
            flex-direction: column;
            gap: 1rem;
            margin-top: 3rem !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
