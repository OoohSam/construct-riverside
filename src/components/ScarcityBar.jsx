import React from 'react';

const ScarcityBar = () => {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid #333',
      borderBottom: '1px solid #333',
      padding: '20px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '5px' }}>Phase 1 Release: Limited Inventory</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Prices increase at Ground Floor Slab level.</p>
        </div>
        <div style={{ flex: 1, maxWidth: '400px', minWidth: '280px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: 'var(--gold-accent)' }}>
            <span>Sold</span>
            <span>65% Allocation</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '2px' }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--gold-accent)', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScarcityBar;