import React, { useState } from 'react';

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', unit: '1 Bedroom' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to backend/email
    localStorage.setItem('riverside_lead', 'true');
    
    // Redirect to WhatsApp
    const message = `Hello, I am interested in Riverside Azure. My name is ${formData.name}. I am interested in the ${formData.unit}. Please share pricing.`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
    
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        background: 'var(--bg-card)', border: '1px solid #333',
        padding: '40px', width: '90%', maxWidth: '500px', position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem' }}
        >
          &times;
        </button>

        <h3 style={{ color: 'var(--gold-accent)', fontSize: '1.8rem', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
          Unlock Investor Pricing
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.9rem' }}>
          Enter your details to receive the Phase 1 Price List and Floor Plans via WhatsApp.
        </p>

        <form 
         onSubmit={handleSubmit} 
         style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <input 
            type="text" 
            placeholder="Full Name" 
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ padding: '15px', background: '#0E0E0E', border: '1px solid #333', color: '#fff', outline: 'none' }}
          />
          <input 
            type="tel" 
            placeholder="Phone Number (Required)" 
            required
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            style={{ padding: '15px', background: '#0E0E0E', border: '1px solid #333', color: '#fff', outline: 'none' }}
          />
          <select 
            onChange={(e) => setFormData({...formData, unit: e.target.value})}
            style={{ padding: '15px', background: '#0E0E0E', border: '1px solid #333', color: '#fff', outline: 'none' }}
          >
            <option value="1 Bedroom">1 Bedroom Interest</option>
            <option value="2 Bedrooms">2 Bedrooms Interest</option>
            <option value="3 Bedrooms">3 Bedrooms Interest</option>
          </select>
          
          <button 
            type="submit"
            style={{
              background: 'var(--gold-accent)', color: '#000', border: 'none',
              padding: '15px', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px'
            }}
          >
            View Pricing Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;