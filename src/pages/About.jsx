import React from 'react';
import { Shield, Sparkles, HeartHandshake, Eye, Target, Compass, Code2, Layers } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const About = () => {
  const coreValues = [
    { title: "Innovation", desc: "We deploy modern technologies like React, Next.js, and AI integrations to solve real business bottlenecks.", icon: <CpuIcon /> },
    { title: "Transparency", desc: "No hidden charges, no fake statistics, no template locks. We share transparent codebases and timelines.", icon: <ShieldIcon /> },
    { title: "Creativity", desc: "Every website layout we design is custom-forged from scratch to convey visual luxury.", icon: <SparklesIcon /> },
    { title: "Quality", desc: "We optimize asset compression and code bundles to ensure flawless loading speeds and 100/100 Core Web Vitals.", icon: <QualityIcon /> },
    { title: "Reliability", desc: "We deliver on-time mockups and provide structured monthly backups and maintenance to support your growth.", icon: <ReliabilityIcon /> },
    { title: "Customer Success", desc: "We measure our success by your digital achievements—our goal is to make your business generate leads and trust.", icon: <CustomerIcon /> }
  ];

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* 1. Header & Our Story */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>About CoreForge</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Our Story</h1>
          <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: 1.7, marginBottom: '2rem' }}>
            CoreForge Studio was founded in 2026 with a singular goal: to help startups, local businesses, and enterprises establish a premium online presence through modern web design and high-performance technology.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            We noticed that the web is cluttered with slow, identical templates that fail to engage users. We started this studio to offer custom-coded, pixel-perfect digital solutions designed to grow your business, build customer trust, and rank on search results.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="section grid-2" style={{ alignItems: 'flex-start' }}>
        <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(0, 240, 255, 0.05)', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.15)', borderRadius: '50px', padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Target size={14} style={{ marginRight: '6px' }} />
            <span>Our Mission</span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>To build high-quality digital experiences that help businesses grow online.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            We compile clean, responsive, and performance-tuned setups to convert your target visitors into active customers, supporting your operations at every launch phase.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(139, 92, 246, 0.05)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.15)', borderRadius: '50px', padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Eye size={14} style={{ marginRight: '6px' }} />
            <span>Our Vision</span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>To become a trusted creative technology studio known for innovation and quality.</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            We aim to expand our custom React framework blueprints, setting the standard for transparent agency delivery and Awwwards-level development quality.
          </p>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Our Pillars</span>
          <h2 style={{ marginTop: '0.5rem' }}>Our Core Values</h2>
        </div>

        <div className="grid-3">
          {coreValues.map((val, i) => (
            <div className="glass-panel" key={i}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {val.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{val.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why We Started */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="section grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Founding Story</span>
            <h2 style={{ marginTop: '0.5rem' }}>Why We Started</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Before founding CoreForge Studio, we saw many small business owners paying thousands of dollars for websites built on visual page builders. These templates were slow, crashed on mobile screens, and made SEO optimization impossible.
            </p>
            <p style={{ lineHeight: 1.7 }}>
              Our passion is solving technical business problems. We started this studio to offer custom handcrafting in code. We handle all hosting rules, domain settings, SSL checkpoints, and SEO structures so you can focus completely on running your business.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '3.5rem', borderLeft: '4px solid #00f0ff' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Our Code Commitment</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "We do not recycle layouts or resell standard page templates. Every element in our design prototypes is custom-built to support your specific business roadmap."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>The Creators</span>
          <h2 style={{ marginTop: '0.5rem' }}>Meet the Team</h2>
        </div>

        <div className="grid-3">
          {agencyData.team.map((member, i) => (
            <div className="glass-panel" key={i} style={{ padding: 0, overflow: 'hidden', borderRadius: '24px' }}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{member.name}</h3>
                <div style={{ color: '#00f0ff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technologies We Love */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Frameworks</span>
        <h2 style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>Technologies We Love</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {agencyData.technologies.frontend.concat(agencyData.technologies.backend).map((tech, i) => (
            <span 
              key={i} 
              className="glass-panel interactive-hover"
              style={{
                padding: '0.8rem 1.6rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#fff',
                cursor: 'default'
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

// Simple visual icons for values
const CpuIcon = () => <Sparkles size={18} color="#00f0ff" />;
const ShieldIcon = () => <Shield size={18} color="#8b5cf6" />;
const SparklesIcon = () => <Layers size={18} color="#d946ef" />;
const QualityIcon = () => <Code2 size={18} color="#10b981" />;
const ReliabilityIcon = () => <Compass size={18} color="#f59e0b" />;
const CustomerIcon = () => <HeartHandshake size={18} color="#ec4899" />;

export default About;
