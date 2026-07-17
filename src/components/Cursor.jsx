import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth cursor follow using requestAnimationFrame
    const tick = () => {
      // Interpolate main glow (slower, smooth follow)
      cursorX += (mouseX - cursorX) * 0.08;
      cursorY += (mouseY - cursorY) * 0.08;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      // Interpolate center dot (faster, tighter follow)
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(tick);
    };

    const animFrame = requestAnimationFrame(tick);

    // Hover actions: expand cursor on interactive components
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive-hover') ||
        target.closest('.interactive-hover');

      if (isInteractive) {
        cursor.classList.add('cursor-hover-active');
        dot.classList.add('dot-hover-active');
      } else {
        cursor.classList.remove('cursor-hover-active');
        dot.classList.remove('dot-hover-active');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Background radial soft spotlight */}
      <div 
        ref={cursorRef} 
        className="cursor-glow" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen',
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease'
        }}
      />
      
      {/* Small sharp cursor point */}
      <div 
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#00f0ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #00f0ff, 0 0 20px #8b5cf6',
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s'
        }}
      />

      <style>{`
        @media (min-width: 769px) {
          html, body, a, button, select, input, textarea, [role="button"], .interactive-hover {
            cursor: none !important;
          }
        }
        .cursor-hover-active {
          width: 500px !important;
          height: 500px !important;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(139, 92, 246, 0.04) 60%, transparent 80%) !important;
        }
        .dot-hover-active {
          width: 24px !important;
          height: 24px !important;
          background-color: transparent !important;
          border: 1px solid #00f0ff !important;
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.5) !important;
        }
        @media (max-width: 768px) {
          .cursor-glow, .cursor-dot {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Cursor;
