import React, { useState } from 'react';
import { Search, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { agencyData } from '../data/agencyData';
import Modal from '../components/Modal';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Design', 'Technology', 'AI'];

  // Filter & Search Logic
  const filteredArticles = agencyData.blog.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '8rem' }}>
      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <span style={{ color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 700 }}>Agency Logbook</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Insights & Articles</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
          Weekly reviews on creative web layouts, static frame speed optimizations, server integrations, and AI pipelines.
        </p>

        {/* Search and filter controls panel */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
          className="blog-controls"
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="interactive-hover"
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)' : 'var(--glass-bg)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'transparent' : 'var(--glass-border)',
                  color: selectedCategory === cat ? '#050505' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input bar */}
          <div style={{ position: 'relative', width: '300px' }} className="blog-search-bar">
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50px',
                padding: '0.6rem 1.2rem 0.6rem 2.8rem',
                fontSize: '0.9rem',
                color: '#fff'
              }}
            />
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="grid-3">
          {filteredArticles.map((art) => (
            <div 
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="glass-panel interactive-hover"
              style={{
                cursor: 'pointer',
                padding: 0,
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={art.image} 
                  alt={art.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <span>{art.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={12} />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', flexGrow: 0 }}>{art.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem' }}>
                  {art.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontSize: '0.85rem', fontWeight: 700 }}>
                  <span>Read Article</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Article Modal */}
      <Modal isOpen={!!activeArticle} onClose={() => setActiveArticle(null)}>
        {activeArticle && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <span>{activeArticle.category} — {activeArticle.date}</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 style={{ fontSize: '2.4rem', color: '#fff', marginBottom: '1.5rem' }}>{activeArticle.title}</h2>
            
            <div style={{ height: '320px', borderRadius: '18px', overflow: 'hidden', marginBottom: '2.5rem' }}>
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ color: '#fff', fontWeight: 600, marginBottom: '1.5rem' }}>
                {activeArticle.summary}
              </p>
              <p style={{ whiteSpace: 'pre-wrap' }}>
                {activeArticle.content}
              </p>
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        @media (max-width: 900px) {
          .blog-controls {
            flex-direction: column;
            align-items: stretch !important;
            gap: 1.5rem !important;
          }
          .blog-search-bar {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
