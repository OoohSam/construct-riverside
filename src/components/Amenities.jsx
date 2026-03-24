import React from 'react';

const Amenities = () => {
  const items = [
    { title: "River-Facing Pool", desc: "Infinity edge swimming pool overlooking the green canopy." },
    { title: "Residents' Lounge", desc: "Coffee shop and fully equipped business center." },
    { title: "Sky Gym", desc: "State-of-the-art fitness center with panoramic views." },
    { title: "Smart Access", desc: "Biometric entry, Video intercoms, and 24hr CCTV." }
  ];

  return (
    <section className="reveal" style={{ background: 'var(--bg-card)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Curated for Control</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Amenities designed not just for leisure, but for the efficient management of a high-performance life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {items.map((item, index) => (
            <div key={index} style={{ padding: '30px', border: '1px solid #333', transition: '0.3s' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--gold-accent)', marginBottom: '20px' }}></div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;