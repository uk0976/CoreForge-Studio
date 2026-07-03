import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

const NotFound = ({ setRoute }) => {
  const canvasRef = useRef(null);

  // Small local particle grid that interacts with the mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = 400);
    let height = (canvas.height = 250);
    let particles = [];

    class MiniParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(new MiniParticle());
    }

    let animId;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* GLITCH CODE TEXT */}
      <h1 
        style={{ 
          fontSize: '9rem', 
          fontFamily: 'var(--font-headings)', 
          fontWeight: 800,
          background: 'linear-gradient(135deg, #00f0ff 30%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.05em'
        }}
        className="glitch-404"
      >
        404
      </h1>

      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Digital Node Lost</h2>
      <p style={{ maxWidth: '450px', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem' }}>
        The layout segment you are trying to access has been deleted, archived, or was never forged in our compilation directories.
      </p>

      {/* Mini Interactive Canvas */}
      <div style={{ border: '1px solid var(--glass-border)', borderRadius: '16px', background: 'rgba(255,255,255,0.01)', padding: '1rem', marginBottom: '3rem' }}>
        <canvas ref={canvasRef} style={{ display: 'block', maxWidth: '100%' }} />
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem', textTransform: 'uppercase' }}>[ Interactive Particle Field ]</div>
      </div>

      <button 
        onClick={() => setRoute('home')}
        className="btn btn-primary interactive-hover"
      >
        <ArrowLeft size={16} />
        <span>Return to Home</span>
      </button>

      <style>{`
        .glitch-404 {
          position: relative;
          text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                      -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch-anim 500ms infinite;
        }
        @keyframes glitch-anim {
          0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
