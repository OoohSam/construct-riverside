import React, { useState } from "react";

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unit: "1 Bedroom",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("riverside_lead", "true");

    const message = `Hello, I am interested in Riverside Azure.
My name is ${formData.name}.
My phone number is ${formData.phone}.
I am interested in the ${formData.unit}.
Please share the price list and floor plans.`;

    // Mobile-safe redirect
    window.location.href = `https://wa.me/254796529997?text=${encodeURIComponent(
      message
    )}`;

    onClose();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>

        {/* Content */}
        <div style={styles.content}>
          <h3 style={styles.title}>Unlock Investor Pricing</h3>

          <p style={styles.subtitle}>
            Receive Phase 1 pricing and floor plans directly on WhatsApp.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={styles.input}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              style={styles.input}
            />

            <select
              value={formData.unit}
              onChange={(e) =>
                setFormData({ ...formData, unit: e.target.value })
              }
              style={styles.input}
            >
              <option value="1 Bedroom">1 Bedroom Interest</option>
              <option value="2 Bedrooms">2 Bedrooms Interest</option>
              <option value="3 Bedrooms">3 Bedrooms Interest</option>
            </select>

            <button type="submit" style={styles.submitButton}>
              Continue to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    background: "rgba(6, 6, 6, 0.78)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    overflowY: "auto",
  },

  modal: {
    width: "100%",
    maxWidth: "480px",
    background: "linear-gradient(180deg, #111 0%, #0c0c0c 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    position: "relative",
    padding: "32px 22px",
    boxSizing: "border-box",
  },

  closeButton: {
    position: "absolute",
    top: "14px",
    right: "14px",
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.6rem",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  title: {
    color: "var(--gold-accent)",
    fontSize: "clamp(1.4rem, 4.5vw, 1.7rem)",
    fontFamily: "var(--font-serif)",
    margin: 0,
    letterSpacing: "0.02em",
  },

  subtitle: {
    color: "rgba(255,255,255,0.65)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginTop: "6px",
  },

  input: {
    padding: "14px",
    background: "#0d0d0d",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    outline: "none",
    width: "100%",
    fontSize: "0.95rem",
    transition: "0.2s ease",
  },

  submitButton: {
    marginTop: "10px",
    padding: "15px",
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    fontWeight: "700",
    fontSize: "0.95rem",
    letterSpacing: "0.02em",
    cursor: "pointer",
    transition: "0.25s ease",
  },
};