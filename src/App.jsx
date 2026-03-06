import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScarcityBar from './components/ScarcityBar';
import UnitSection from './components/UnitSection';
import Amenities from './components/Amenities';
import LeadModal from './components/LeadModal';
import FloatingCTA from './components/FloatingCTA';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Initialize scroll animations
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={handleOpenModal} />
      
      <main>
        <Hero onCtaClick={handleOpenModal} />
        <ScarcityBar />
        
        {/* Intro Text */}
        <div className="container reveal" style={{ padding: '80px 0', textAlign: 'center', maxWidth: '800px' }}>
          <h3 style={{ color: 'var(--gold-accent)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '20px' }}>
            The Location
          </h3>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#fff' }}>
            Riverside Drive is Nairobi’s <span style={{ color: 'var(--gold-accent)' }}>silent power corridor</span>. Home to embassies, multinational HQs, and the city’s most astute investors. 
            <span style={{ color: 'var(--gold-accent)' }}> Riverside Azure</span> places you in the center of this dialogue.
          </p>
        </div>


        <UnitSection onInquire={handleOpenModal} />

        <Amenities />
        
        {/* Diaspora / Trust Section */}
        <section className="reveal" style={{ padding: '100px 0', borderTop: '1px solid #333' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Invest From Anywhere</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.6' }}>
                Join investors from London, Dubai, and New York. We facilitate fully remote acquisition with digital signing and verified payment structures.
              </p>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>Developer Track Record:</h4>
              <ul style={{ color: 'var(--text-muted)', listStyle: 'none' }}>
                <li style={{ marginBottom: '10px' }}>✓ Argyle Grand (Completed)</li>
                <li style={{ marginBottom: '10px' }}>✓ Appletree Apartments (Delivered)</li>
                <li>✓ Mango Tree, Mombasa Rd (Sold Out)</li>
              </ul>
            </div>
            <div style={{ height: '300px', background: '#222' }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Building" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: '#000', padding: '60px 0', borderTop: '1px solid #222' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>RIVERSIDE AZURE</h2>
          <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} JNC Brothers & Company Limited. All Rights Reserved.</p>
        </div>
      </footer>

      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <FloatingCTA onOpenModal={handleOpenModal} />
    </div>
  );
}

export default App;