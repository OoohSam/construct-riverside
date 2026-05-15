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

    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: formData.unit,
        content_category: "Brochure Request",
        currency: "KES",
      });

      window.fbq("track", "Contact", {
        content_name: formData.unit,
        content_category: "WhatsApp Inquiry",
      });
    }

    const message = `Hello, I am interested in Riverside Azure.
My name is ${formData.name}.
My phone number is ${formData.phone}.
I am interested in the ${formData.unit}.
Please share the price list and floor plans.`;

    setTimeout(() => {
      window.open("/riverside-azure-brochure-and-pricelist.pdf", "_blank");
    }, 700);

    window.location.href = `https://wa.me/254700686666?text=${encodeURIComponent(
      message
    )}`;

    onClose();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>

        <div style={styles.content}>
          <p style={styles.kicker}>Private Access</p>

          <h3 style={styles.title}>Unlock Investor Pricing</h3>

          <p style={styles.subtitle}>
            Receive Phase 1 pricing, floor plans, and the brochure directly via
            WhatsApp.
          </p>

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
    background:
      "linear-gradient(180deg, rgba(1,12,22,0.86), rgba(3,27,47,0.92))",
    backdropFilter: "blur(12px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "clamp(14px, 4vw, 24px)",
    overflowY: "auto",
  },

  modal: {
    width: "100%",
    maxWidth: "480px",
    maxHeight: "calc(100svh - 32px)",
    overflowY: "auto",
    background: `
      radial-gradient(circle at top right, rgba(11,95,147,0.34), transparent 34%),
      linear-gradient(180deg, var(--bg-card) 0%, var(--azure-deep) 100%)
    `,
    border: "1px solid rgba(243,193,66,0.24)",
    boxShadow:
      "0 34px 90px rgba(0,0,0,0.55), 0 0 45px rgba(11,95,147,0.18)",
    position: "relative",
    padding: "clamp(28px, 6vw, 38px) clamp(18px, 5vw, 26px)",
    boxSizing: "border-box",
    borderRadius: "4px",
  },

  closeButton: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--text-muted)",
    fontSize: "1.45rem",
    cursor: "pointer",
    transition: "0.2s ease",
    width: "38px",
    height: "38px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  kicker: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontSize: "0.72rem",
    fontWeight: 800,
    margin: "0 42px 0 0",
  },

  title: {
    color: "var(--text-main)",
    fontSize: "clamp(1.55rem, 7vw, 1.95rem)",
    fontFamily: "var(--font-serif)",
    margin: 0,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    textShadow: "0 4px 18px rgba(0,0,0,0.28)",
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.93rem, 3.6vw, 0.98rem)",
    lineHeight: 1.7,
    margin: 0,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
    marginTop: "6px",
  },

  input: {
    padding: "15px 14px",
    background: "rgba(1,18,32,0.72)",
    border: "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    width: "100%",
    minHeight: "52px",
    fontSize: "16px",
    transition: "0.2s ease",
    boxSizing: "border-box",
    borderRadius: "2px",
  },

  submitButton: {
    marginTop: "8px",
    padding: "16px",
    minHeight: "54px",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: "800",
    fontSize: "0.95rem",
    letterSpacing: "0.03em",
    cursor: "pointer",
    transition: "0.25s ease",
    boxShadow:
      "0 14px 36px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.25)",
  },
};