import React from 'react';

const FloatingCTA = ({ onOpenModal }) => {
  return (
    <>
      {/* Desktop WhatsApp */}
      <a 
        href="https://wa.me/254700000000?text=I%20am%20interested%20in%20Riverside%20Azure"
        target="_blank"
        rel="noreferrer"
        className="desktop-only"
        style={{
          position: 'fixed', bottom: '30px', right: '30px',
          background: '#25D366', color: '#fff',
          width: '60px', height: '60px', borderRadius: '50%',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontSize: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          zIndex: 999, textDecoration: 'none'
        }}
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      {/* Mobile Sticky Bar */}
      <div className="mobile-only" style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%',
        background: '#0E0E0E', borderTop: '1px solid #333',
        display: 'flex', zIndex: 999
      }}>
        <a href="tel:+254700000000" style={{
          flex: 1, padding: '20px', textAlign: 'center',
          color: '#fff', textDecoration: 'none', background: '#1C1C1C'
        }}>
          Call Now
        </a>
        <button 
          onClick={onOpenModal}
          style={{
            flex: 2, padding: '20px', background: 'var(--gold-accent)',
            color: '#000', border: 'none', fontWeight: 'bold'
          }}
        >
          Get Price List
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;