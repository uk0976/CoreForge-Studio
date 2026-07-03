import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Sparkles, Layers, Cpu, Code2, HeartHandshake, Gauge, BadgeDollarSign, Compass } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const Home = ({ setRoute, currency = { code: 'INR', symbol: '₹', rate: 83.5 } }) => {
  const canvasRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Background Interactive Canvas Particle Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const maxParticles = 80;
    
    let mouse = { x: null, y: null, radius: 150 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.3)' : 'rgba(139, 92, 246, 0.3)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 0.5;
            this.y -= (dy / dist) * force * 0.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (100 - dist) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const grad = ctx.createRadialGradient(width/2, height/2, 10, width/2, height/2, Math.max(width, height));
      grad.addColorStop(0, '#05050a');
      grad.addColorStop(1, '#020205');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigateTo = (route) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setRoute(route);
  };

  // Why Choose Us list
  const highlights = [
    { title: "Modern Design", desc: "No cookie-cutter templates. We design fresh layouts focused on luxury minimalism.", icon: <Sparkles size={20} color="#00f0ff" /> },
    { title: "Mobile Responsive", desc: "Every website is coded and verified to render perfectly on smartphones, tablets, and desktops.", icon: <Layers size={20} color="#8b5cf6" /> },
    { title: "SEO Optimized", desc: "We deploy structured schemas, meta hierarchies, and search configs to index your site correctly on Google.", icon: <CheckCircle2 size={20} color="#d946ef" /> },
    { title: "Fast Performance", desc: "Using static server-side execution and asset compression to achieve rapid page loads.", icon: <Gauge size={20} color="#10b981" /> },
    { title: "Affordable Pricing", desc: "Transparent starter costs and custom breakdowns. No hidden support fees or lock-ins.", icon: <BadgeDollarSign size={20} color="#f59e0b" /> },
    { title: "Continuous Support", desc: "Direct support windows and training guides to help you manage your platform easily.", icon: <HeartHandshake size={20} color="#ec4899" /> }
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* 2. Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '8rem 2rem 6rem'
      }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
        
        {/* Vignette Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 30%, rgba(5,5,5,0.95) 90%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div className="section" style={{ zIndex: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '0.5rem 1.25rem', borderRadius: '50px', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#00f0ff', borderRadius: '50%', boxShadow: '0 0 8px #00f0ff' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>CoreForge Studio Launching 2026</span>
          </div>

          <h1 className="hero-headline" style={{ marginBottom: '1.5rem' }}>
            We Build Websites That <br />
            <span className="gradient-text glow-text">Grow Businesses.</span>
          </h1>

          <p style={{ maxWidth: '750px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            CoreForge Studio designs premium websites, AI-powered web applications, landing pages, branding, and digital experiences that help startups and enterprises generate leads, build trust, and scale online.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }} className="hero-cta-btns">
            <button onClick={() => navigateTo('book-consultation')} className="btn btn-primary interactive-hover">
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => navigateTo('portfolio')} className="btn btn-secondary interactive-hover">
              <span>View Concept Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section className="section grid-2" style={{ alignItems: 'center' }}>
        <div>
          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Who We Are</span>
          <h2 style={{ marginTop: '0.5rem' }}>A New Era for Web Design</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            CoreForge Studio is a newly launched web design and development agency. We founded this studio because we believe startups and growing local businesses deserve premium digital presentation without templates or slow, bloated code.
          </p>
          <p>
            We bridge the gap between creative visual design and full-stack engineering. By combining clean layouts, responsive coding, and transparent work roadmaps, we build sites that communicate authority.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="glass-panel" style={{ borderLeft: '4px solid #00f0ff', padding: '3rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1rem' }}>No Fake Accolades.<br />Just Real Quality.</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              We don't buy artificial reviews or invent fake statistics. We build trust by delivering clean, validated code, sharing transparent project files, and providing continuous support.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Our Services</span>
          <h2 style={{ marginTop: '0.5rem' }}>Web Design & Technology</h2>
        </div>

        <div className="grid-3">
          {agencyData.servicesList.slice(0, 3).map((service, i) => (
            <div className="glass-panel" key={i} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: 'rgba(0, 240, 255, 0.05)', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '50px', padding: '0.35rem 0.85rem', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Starting at {currency.symbol}{Math.round(service.cost * currency.rate).toLocaleString()}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '2rem' }}>
                {service.overview}
              </p>
              <div 
                onClick={() => navigateTo('services')}
                className="interactive-hover" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#00f0ff', fontWeight: 600, fontSize: '0.9rem' }}
              >
                <span>Read Requirements</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button onClick={() => navigateTo('services')} className="btn btn-secondary interactive-hover">
            <span>View All 20 Services</span>
          </button>
        </div>
      </section>

      {/* 5. Why Choose CoreForge Studio */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Client Value</span>
            <h2 style={{ marginTop: '0.5rem' }}>Why Choose CoreForge Studio</h2>
          </div>

          <div className="grid-3">
            {highlights.map((item, i) => (
              <div className="glass-panel" key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Development Process */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Workflow Map</span>
          <h2 style={{ marginTop: '0.5rem' }}>Our Development Process</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Show first 4 process stages on Home for clean summaries */}
          {agencyData.processStages.slice(0, 4).map((proc, i) => (
            <div key={i} className="glass-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 3.5rem' }} className="process-row-panel glass-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <span style={{ fontFamily: 'var(--font-headings)', fontSize: '2.2rem', fontWeight: 800, color: 'rgba(255,255,255,0.05)' }}>{proc.step}</span>
                <div>
                  <h3 style={{ fontSize: '1.35rem', margin: 0, marginBottom: '0.2rem' }}>{proc.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{proc.description}</p>
                </div>
              </div>
              <ArrowRight size={20} color="#00f0ff" className="process-arrow" />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button onClick={() => navigateTo('process')} className="btn btn-secondary interactive-hover">
            <span>Explore All 10 Workflow Steps</span>
          </button>
        </div>
      </section>

      {/* 7. Featured Demo Projects */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Showcase Prototypes</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: 0 }}>Featured Concept Projects</h2>
            </div>
            <button onClick={() => navigateTo('portfolio')} className="btn btn-secondary interactive-hover">
              <span>View Concept Gallery</span>
            </button>
          </div>

          <div className="grid-2">
            {agencyData.portfolioConcepts.slice(0, 2).map((project, i) => (
              <div 
                key={i} 
                className="glass-panel interactive-hover" 
                onClick={() => navigateTo('portfolio')}
                style={{ cursor: 'pointer', padding: 0, overflow: 'hidden', borderRadius: '24px' }}
              >
                <div style={{ overflow: 'hidden', height: '300px', position: 'relative' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    className="project-image-zoom"
                  />
                  <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(5, 5, 10, 0.8)', border: '1px solid var(--glass-border)', padding: '0.4rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {project.category}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{project.objective}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: '#00f0ff', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span>Analyze Design Approach</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technologies We Use */}
      <section className="section" style={{ textAlign: 'center' }}>
        <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Our Toolkit</span>
        <h2 style={{ marginTop: '0.5rem', marginBottom: '3.5rem' }}>Technologies We Use</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {agencyData.technologies.frontend.concat(agencyData.technologies.backend).map((tech, i) => (
            <span 
              key={i}
              className="glass-panel interactive-hover"
              style={{
                padding: '0.8rem 1.6rem',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#fff',
                cursor: 'default'
              }}
            >
              {tech.name}
            </span>
          ))}
          <span className="glass-panel" style={{ padding: '0.8rem 1.6rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 600, color: '#00f0ff' }}>WordPress</span>
          <span className="glass-panel" style={{ padding: '0.8rem 1.6rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 600, color: '#00f0ff' }}>Cloud Platforms</span>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>FAQ</span>
            <h2 style={{ marginTop: '0.5rem' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {agencyData.faq.slice(0, 4).map((item, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ padding: '1.5rem 2rem', cursor: 'pointer', transition: 'border 0.3s' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{item.question}</h4>
                  <ChevronDown 
                    size={18} 
                    color="#00f0ff"
                    style={{ 
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                
                {openFaq === i && (
                  <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div className="section" style={{ textAlign: 'center', padding: '8rem 2rem', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Ready to Build Your <br />
            <span className="gradient-text glow-text">Digital Presence?</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.15rem' }}>
            Schedule a 30-minute introductory call. Let's discuss your requirements and select the right tech stack for your brand.
          </p>
          <button onClick={() => navigateTo('book-consultation')} className="btn btn-primary interactive-hover">
            <span>Book A Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .project-image-zoom {
          transform: scale(1);
        }
        .glass-panel:hover .project-image-zoom {
          transform: scale(1.05);
        }
        .process-row-panel {
          transition: all 0.4s ease;
        }
        .process-row-panel:hover {
          border-color: #00f0ff !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }
        .process-arrow {
          transform: translateX(0);
          transition: transform 0.3s ease;
        }
        .process-row-panel:hover .process-arrow {
          transform: translateX(10px);
        }
        @media (max-width: 768px) {
          .process-row-panel {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1rem;
          }
          .process-arrow {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
