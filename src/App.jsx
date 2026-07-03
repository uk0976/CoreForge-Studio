import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

// Visual Layout Elements
import Noise from './components/Noise';
import Aurora from './components/Aurora';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Technologies from './pages/Technologies';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import BookConsultation from './pages/BookConsultation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';

function App() {
  const [route, setRoute] = useState('home');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currency, setCurrency] = useState(() => {
    const saved = localStorage.getItem('cf_currency');
    return saved ? JSON.parse(saved) : { code: 'INR', symbol: '₹', name: 'India', rate: 83.5, flag: '🇮🇳' };
  });

  // 1. Initial Page Loader Progress Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Animate loader screen fade-out using GSAP
          gsap.to('.custom-loader', {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => setLoading(false)
          });
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // 2. Lenis Smooth Scrolling Engine (Desktop Only)
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // 3. Hash Router sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validRoutes = [
        'home', 'services', 'portfolio', 'about', 'pricing', 'contact', 
        'offers', 'case-studies', 'blog', 'faq', 'careers', 
        'technologies', 'process', 'testimonials', 'book-consultation', 
        'privacy', 'terms'
      ];
      
      if (!hash || hash === '') {
        setRoute('home');
      } else if (validRoutes.includes(hash)) {
        setRoute(hash);
      } else {
        setRoute('404');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Custom route update with transition animations
  const handleRouteUpdate = (newRoute) => {
    const transitionOverlay = document.querySelector('.transition-overlay');
    if (!transitionOverlay) {
      window.location.hash = `#/${newRoute}`;
      return;
    }

    // GSAP page wipe transition
    gsap.timeline()
      .to(transitionOverlay, {
        transform: 'translateY(0%)',
        duration: 0.5,
        ease: 'power3.in'
      })
      .add(() => {
        window.location.hash = `#/${newRoute}`;
      })
      .to(transitionOverlay, {
        transform: 'translateY(-100%)',
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.15
      })
      .set(transitionOverlay, {
        transform: 'translateY(100%)'
      });
  };

  // Router Map rendering
  const renderActivePage = () => {
    switch (route) {
      case 'home':
        return <Home setRoute={handleRouteUpdate} currency={currency} />;
      case 'services':
        return <Services currency={currency} />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing currency={currency} />;
      case 'contact':
        return <Contact />;
      case 'offers':
        return <Offers />;
      case 'case-studies':
        return <CaseStudies />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'careers':
        return <Careers />;
      case 'technologies':
        return <Technologies />;
      case 'process':
        return <Process />;
      case 'testimonials':
        return <Testimonials />;
      case 'book-consultation':
        return <BookConsultation />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsAndConditions />;
      default:
        return <NotFound setRoute={handleRouteUpdate} />;
    }
  };

  return (
    <>
      {/* 404/Loading screen */}
      {loading && (
        <div className="custom-loader">
          <div style={{ fontFamily: 'var(--font-headings)', fontSize: '2rem', fontWeight: 800 }}>
            ⚡ CORE<span style={{ color: '#00f0ff' }}>FORGE</span>
          </div>
          <div className="loader-bar">
            <div className="loader-progress" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Slide Transition wipe panel */}
      <div className="transition-overlay" />

      {/* Screen textures */}
      <Noise />
      <Aurora />
      <Cursor />

      {/* Navigation Layout */}
      <Navbar currentRoute={route} setRoute={handleRouteUpdate} currency={currency} setCurrency={setCurrency} />

      {/* Active viewport page view */}
      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 2 }}>
        {renderActivePage()}
      </main>

      {/* Footer Layout */}
      <Footer setRoute={handleRouteUpdate} />
    </>
  );
}

export default App;
