import React from 'react';
import Limian from "../assets/hero/Front-View.png"

const Hero = ({ onCtaClick }) => {
  return (
    <section style={{
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${Limian})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(14,14,14,0.3), rgba(14,14,14,1))' }}></div>


      <div className="container reveal" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <p style={{ 
          color: 'var(--gold-accent)', 
          textTransform: 'uppercase', 
          letterSpacing: '3px', 
          marginBottom: '20px',
          fontWeight: 600
        }}>
          Excavation Ongoing | Westlands, Nairobi
        </p>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 5vw, 5rem)', 
          color: '#fff', 
          marginBottom: '30px',
          lineHeight: 1.1
        }}>
          Own the Skyline<br/>Before It Rises.
        </h1>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={onCtaClick}
            style={{
              background: 'var(--gold-accent)',
              color: '#000',
              border: 'none',
              padding: '16px 40px',
              fontSize: '1rem',
              fontWeight: '600',
              minWidth: '200px'
            }}
          >
            Unlock Early Investor Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;