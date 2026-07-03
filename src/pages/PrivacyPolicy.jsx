import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section className="section" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '8rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Legal Information</span>
        <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '2.5rem' }}>Privacy Policy</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>
            Last Updated: July 3, 2026
          </p>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>1. Information We Collect</h3>
            <p>
              We collect information that you directly transmit to us when utilizing our contact forms, newsletter subscription fields, and booking questionnaires. This includes names, email addresses, contact telephone numbers, project briefs, and budget estimations.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>2. How We Use Data</h3>
            <p>
              We utilize collected info explicitly to coordinate consultation sessions, respond to support inquiries, distribute technical articles/deals (if you opted into our newsletter list), and manage client agreements. We do not sell or lease your data to brokers.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>3. Analytics & Cookies</h3>
            <p>
              We run standard analytics scripts (such as Google Analytics) to audit traffic flows, evaluate page loading speeds, and verify rendering on mobile viewports. These scripts use cookies to record anonymous interaction stats.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.8rem' }}>4. Data Security</h3>
            <p>
              Your security is paramount. All transmission pathways utilize SSL checkpoints, and internal database indexes are protected with role-based JWT keys.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
