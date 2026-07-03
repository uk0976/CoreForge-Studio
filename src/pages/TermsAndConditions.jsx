import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '8rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Legal Information</span>
        <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '2.5rem' }}>Terms & Conditions</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>
            Last Updated: July 3, 2026
          </p>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>1. Agreement of Terms</h3>
            <p>
              By accessing this website, you verify that you agree to be bound by these Terms and Conditions. If you do not agree to these rules, you are prohibited from utilizing our site assets.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>2. Project Consultation Agreements</h3>
            <p>
              Booking a consultation session or submitting an inquiry does not constitute a legal contract for development. Project scopes, pricing specifications, delivery timelines, and copyright clauses are explicitly declared in individual client contracts signed by both parties.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>3. Proprietary Design Assets</h3>
            <p>
              All branding icons, animated canvas scripts, custom CSS variables, and layout assets displayed on this site are the intellectual property of CoreForge Studio. You are prohibited from copying or packaging our code layouts for generic template redistribution.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>4. Limitation of Liability</h3>
            <p>
              In no event shall CoreForge Studio be liable for any direct or indirect damages arising out of the use or inability to use the assets on this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
