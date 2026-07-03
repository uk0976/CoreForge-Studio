import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, MapPin, Briefcase, Plus, Star } from 'lucide-react';
import { agencyData } from '../data/agencyData';
import Modal from '../components/Modal';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', resume: '' });

  const perks = [
    { title: "Remote Freedom", desc: "Work from anywhere in the world. We rely on output and structured check-ins rather than physical seat hours." },
    { title: "Premium Hardware Setup", desc: "Receive a brand-new MacBook Pro M4 Max, 32-inch 4K color-accurate monitor, and ergonomic desk accessories budget." },
    { title: "Awwwards-Level Mentorship", desc: "Collaborate directly with award-winning creative developers, full-stack engineers, and expert motion directors." },
    { title: "Health & Wellbeing stipend", desc: "Annual stipend of $2,000 covering gym memberships, mental health counselors, and private clinic check-ups." }
  ];

  const handleInputChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applicant.name || !applicant.email) return;

    // Trigger candidate success confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#d946ef']
    });

    setApplySubmitted(true);
    setApplicant({ name: '', email: '', portfolio: '', resume: '' });
    setTimeout(() => {
      setApplySubmitted(false);
      setSelectedJob(null);
    }, 4000);
  };

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Grow With Us</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Careers at CoreForge</h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          We are always looking for creative frontend developers, full-stack architects, and UI/UX designers pushing the limits of the modern web.
        </p>
      </section>

      {/* Perks Section */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Why Join Us</span>
            <h2 style={{ marginTop: '0.5rem' }}>Our Work Culture Perks</h2>
          </div>

          <div className="grid-2">
            {perks.map((perk, i) => (
              <div key={i} className="glass-panel" style={{ borderLeft: '4px solid #00f0ff' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{perk.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Open Positions</span>
          <h2 style={{ marginTop: '0.5rem' }}>Find Your Fit</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {agencyData.careers.map((job) => (
            <div 
              key={job.id}
              className="glass-panel"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem' }}
              className="job-opening-card glass-panel"
            >
              <div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }} className="job-badges">
                  <span style={{ fontSize: '0.75rem', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.15)', padding: '0.2rem 0.8rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={10} />
                    <span>{job.location}</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.15)', padding: '0.2rem 0.8rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Briefcase size={10} />
                    <span>{job.type}</span>
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{job.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '600px' }}>
                  {job.description}
                </p>
              </div>

              <button 
                onClick={() => setSelectedJob(job)}
                className="btn btn-secondary interactive-hover"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
              >
                <span>Apply Role</span>
                <Plus size={16} color="#00f0ff" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Modal */}
      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && (
          <div>
            <span style={{ color: '#00f0ff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
              Applying Role: {selectedJob.department}
            </span>
            <h2 style={{ fontSize: '2rem', marginTop: '0.2rem', marginBottom: '1rem' }}>{selectedJob.title}</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Location: <strong>{selectedJob.location}</strong> ({selectedJob.type})
            </div>

            {/* Role Requirements Checklist */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.8rem' }}>Role Requirements</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedJob.requirements.map((req, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#00f0ff' }}>✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem' }}>Submit Application</h4>
            <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="apply-form-split">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={applicant.name}
                    onChange={handleInputChange}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.7rem 1rem', color: '#fff' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={applicant.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.7rem 1rem', color: '#fff' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Portfolio Link / GitHub URI</label>
                <input 
                  type="url" 
                  name="portfolio"
                  value={applicant.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                  style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.7rem 1rem', color: '#fff' }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Cover Letter / Bio URI</label>
                <textarea 
                  rows="3"
                  name="resume"
                  value={applicant.resume}
                  onChange={handleInputChange}
                  placeholder="Briefly tell us about your experience..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.7rem 1rem', color: '#fff', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary interactive-hover" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                <span>Submit Candidate Profile</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {applySubmitted && (
              <div style={{ marginTop: '1.5rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Star size={12} fill="#00f0ff" />
                <span>Application submitted! We will evaluate and reply in 3 business days.</span>
              </div>
            )}
          </div>
        )}
      </Modal>

      <style>{`
        @media (max-width: 900px) {
          .job-opening-card {
            flex-direction: column;
            align-items: stretch !important;
            gap: 1.5rem !important;
          }
          .apply-form-split {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;
