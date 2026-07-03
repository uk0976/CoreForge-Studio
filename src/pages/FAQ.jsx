import React, { useState } from 'react';
import { Search, ChevronDown, MessageSquare } from 'lucide-react';
import { agencyData } from '../data/agencyData';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // Search filter
  const filteredFaqs = agencyData.faq.filter(
    (item) => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Information Hub</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
          Find fast answers to our creative processes, deployment hosting strategies, pricing models, and security questions.
        </p>

        {/* FAQ Search bar */}
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text"
            placeholder="Type your question here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              padding: '0.8rem 1.5rem 0.8rem 3rem',
              fontSize: '1rem',
              color: '#fff'
            }}
          />
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </section>

      {/* FAQs lists */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  padding: '1.8rem 2.2rem', 
                  cursor: 'pointer', 
                  transition: 'border 0.3s',
                  borderColor: activeFaq === i ? '#00f0ff' : 'var(--glass-border)' 
                }}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0, color: activeFaq === i ? '#00f0ff' : '#fff' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    size={20} 
                    color="#00f0ff"
                    style={{ 
                      transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                
                {activeFaq === i && (
                  <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              No matches found for your query. Send us a direct message on our contact page.
            </div>
          )}
        </div>

        {/* Contact prompt */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>Still have queries? Talk directly with our team.</p>
          <a 
            href="#/contact"
            className="btn btn-secondary interactive-hover"
            style={{ gap: '0.5rem' }}
          >
            <MessageSquare size={16} color="#00f0ff" />
            <span>Connect on Support</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
