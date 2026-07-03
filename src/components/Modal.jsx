import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2000,
        background: 'rgba(2, 2, 7, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div 
        className="modal-content"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--glass-border)',
          borderRadius: '24px',
          position: 'relative',
          overflowY: 'auto',
          animation: 'slide-up-modal 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Sticky Close Button */}
        <button 
          onClick={onClose}
          className="interactive-hover"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            transition: 'all 0.3s',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Inner Body */}
        <div style={{ padding: '3.5rem' }}>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes slide-up-modal {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (max-width: 768px) {
          .modal-backdrop {
            padding: 1rem !important;
          }
          .modal-content {
            max-height: 95vh !important;
          }
          .modal-content > div {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
