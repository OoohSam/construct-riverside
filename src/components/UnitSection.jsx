import React, { useState } from 'react';

const units = [
  {
    id: 1,
    type: 'Type A',
    name: 'The Executive Suite',
    beds: '1 Bedroom',
    size: '65.62 - 69.58 SQM',
    desc: 'High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000', // Modern interior dark
    price: 'Ask for Price'
  },
  {
    id: 2,
    type: 'Type B',
    name: 'The Urban Sanctuary',
    beds: '2 Bedrooms',
    size: '98.00 - 104.63 SQM',
    desc: 'Balanced proportions for long-term living. Perfect for young families.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    price: 'Ask for Price'
  },
  {
    id: 3,
    type: 'Type C',
    name: 'The Heritage Residence',
    beds: '3 Bedrooms',
    size: '141.95 SQM',
    desc: 'Versatile luxury. Expansive living spaces for those who value legacy.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
    price: 'Ask for Price'
  }
];

const UnitSection = ({ onInquire }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="reveal" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: '#fff' }}>The Collection</h2>
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', borderBottom: '1px solid #333' }}>
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setActiveTab(unit.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeTab === unit.id ? 'var(--gold-accent)' : '#666',
                borderBottom: activeTab === unit.id ? '2px solid var(--gold-accent)' : '2px solid transparent',
                padding: '0 20px 20px 0',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-serif)'
              }}
            >
              {unit.beds}
            </button>
          ))}
        </div>

        {/* Content */}
        {units.map((unit) => (
          activeTab === unit.id && (
            <div key={unit.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
              
              {/* Image Card */}
              <div style={{ height: '400px', background: '#222', position: 'relative', overflow: 'hidden' }}>
                <img src={unit.image} alt={unit.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', padding: '10px 20px', color: '#fff' }}>
                  Floor Plan Available on Request
                </div>
              </div>

              {/* Details */}
              <div>
                <span style={{ color: 'var(--gold-accent)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  {unit.type}
                </span>
                <h3 style={{ fontSize: '3rem', margin: '10px 0 20px', color: '#fff' }}>{unit.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
                  {unit.desc}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ borderLeft: '1px solid var(--gold-accent)', paddingLeft: '15px' }}>
                    <p style={{ color: '#666', fontSize: '0.8rem' }}>Total Area</p>
                    <p style={{ color: '#fff', fontSize: '1.2rem' }}>{unit.size}</p>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--gold-accent)', paddingLeft: '15px' }}>
                    <p style={{ color: '#666', fontSize: '0.8rem' }}>Payment Plan</p>
                    <p style={{ color: '#fff', fontSize: '1.2rem' }}>Flexible</p>
                  </div>
                </div>

                <button 
                  onClick={() => onInquire(unit.beds)}
                  style={{
                    background: 'transparent',
                    border: '1px solid #fff',
                    color: '#fff',
                    padding: '15px 40px',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'var(--gold-accent)';
                    e.target.style.border = '1px solid var(--gold-accent)';
                    e.target.style.color = '#000';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.border = '1px solid #fff';
                    e.target.style.color = '#fff';
                  }}
                >
                  Get Pricing for {unit.beds}
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default UnitSection;