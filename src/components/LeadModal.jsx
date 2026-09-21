import React, { useEffect, useRef, useState } from "react";

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unit: "1 Bedroom",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionStartedRef = useRef(false);

  // Lock background scrolling while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submissionStartedRef.current) return;

    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();

    if (!cleanName || !cleanPhone) {
      return;
    }

    submissionStartedRef.current = true;
    setIsSubmitting(true);

    /* =========================================================
       TRACKING & CONVERSION
       ========================================================= */
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_form_success",
      form_name: "riverside_azure_lead_modal",
      unit_type: formData.unit,
      lead_destination: "whatsapp",
    });

    localStorage.setItem("riverside_lead", "true");

    if (typeof window.fbq === "function") {
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

    /* =========================================================
       WHATSAPP REDIRECTION
       ========================================================= */
    const message = `Hello, I am interested in Riverside Azure.\nMy name is ${cleanName}.\nMy phone number is ${cleanPhone}.\nI am interested in the ${formData.unit}.\nPlease share the price list and floor plans.`;

    const brochureUrl = "/riverside-azure-brochure-and-pricelist.pdf";
    const whatsappUrl = `https://wa.me/254796529997?text=${encodeURIComponent(message)}`;

    window.open(brochureUrl, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      onClose();
      window.location.assign(whatsappUrl);
    }, 1200);
  };

  const handleOverlayClick = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  const handleChange = (field, value) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  };

  return (
    <div className="lead-overlay" onMouseDown={handleOverlayClick} role="presentation">
      <div
        className="lead-modal"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        <button
          type="button"
          className="lead-close"
          onClick={onClose}
          aria-label="Close lead form"
          disabled={isSubmitting}
        >
          <span aria-hidden="true">✕</span>
        </button>

        <div className="lead-header">
          <span className="lead-eyebrow">Riverside · Nairobi</span>
          <h2 id="lead-modal-title" className="lead-title">
            Begin Your<br />
            Riverside Journey.
          </h2>
          <p className="lead-subtitle">
            Request the latest Phase 1 pricing, floor plans, and project brochure. 
            Our team will continue the conversation with you privately on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="lead-form">
          <div className="lead-field-group">
            <label htmlFor="lead-name" className="lead-label">Full Name</label>
            <input
              id="lead-name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="lead-input"
            />
          </div>

          <div className="lead-field-group">
            <label htmlFor="lead-phone" className="lead-label">Phone Number</label>
            <input
              id="lead-phone"
              type="tel"
              name="phone"
              placeholder="+254..."
              autoComplete="tel"
              required
              disabled={isSubmitting}
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="lead-input"
            />
          </div>

          <div className="lead-field-group">
            <label htmlFor="lead-unit" className="lead-label">Residence of Interest</label>
            <div className="lead-select-wrapper">
              <select
                id="lead-unit"
                name="unit"
                value={formData.unit}
                disabled={isSubmitting}
                onChange={(e) => handleChange("unit", e.target.value)}
                className="lead-input lead-select"
              >
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="lead-submit"
          >
            <span>{isSubmitting ? "Opening WhatsApp..." : "Request Price List"}</span>
            {!isSubmitting && <span className="lead-submit-arrow" aria-hidden="true">→</span>}
          </button>
        </form>

        <div className="lead-footer">
          <p className="lead-footer-text">
            Your details are used only to respond to your Riverside Azure enquiry.
          </p>
        </div>
      </div>

      {/* =========================================================
          STYLES (Gallery Minimalist Modal)
          ========================================================= */}
      <style>{`
        .lead-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(17, 26, 85, 0.85); /* Deep azure backdrop */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          overflow-y: auto;
        }

        .lead-modal {
          position: relative;
          width: 100%;
          max-width: 540px;
          background: var(--azure-deep); /* Solid, flat, pure dark tone */
          color: var(--white);
          padding: 56px 48px;
          border: 1px solid rgba(255, 255, 255, 0.1); /* Extremely subtle architectural edge */
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
        }

        .lead-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px; /* Perfect mobile touch target */
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.5rem;
          font-weight: 300;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .lead-close:hover:not(:disabled) {
          color: var(--white);
        }

        .lead-close:disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }

        /* HEADER */
        .lead-header {
          margin-bottom: 40px;
        }

        .lead-eyebrow {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .lead-title {
          margin: 0 0 16px 0;
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 2.75rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .lead-subtitle {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* FORM */
        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 28px; /* More breathing room between inputs */
        }

        .lead-field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lead-label {
          color: rgba(255, 255, 255, 0.4);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* The Minimalist Input: Underline Only */
        .lead-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--white);
          font-family: var(--font-body);
          font-size: 16px; /* Must be 16px to prevent iOS auto-zoom */
          padding: 12px 0; /* Vertical padding only, flush to the edges */
          outline: none;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }

        .lead-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }

        .lead-input:focus {
          border-bottom-color: var(--gold-accent);
        }

        .lead-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Custom Select Styling */
        .lead-select-wrapper {
          position: relative;
        }

        .lead-select-wrapper::after {
          content: "↓";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold-accent);
          pointer-events: none;
          font-size: 0.9rem;
        }

        .lead-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          padding-right: 24px;
        }

        .lead-select option {
          background: var(--azure-deep);
          color: var(--white);
        }

        /* BUTTON */
        .lead-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 56px;
          margin-top: 12px;
          padding: 0 24px;
          background: var(--gold-accent);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .lead-submit:hover:not(:disabled) {
          background: var(--white);
        }

        .lead-submit:disabled {
          cursor: wait;
          opacity: 0.7;
        }

        .lead-submit-arrow {
          font-size: 1.1rem;
        }

        /* FOOTER */
        .lead-footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lead-footer-text {
          margin: 0;
          color: rgba(255, 255, 255, 0.3);
          font-family: var(--font-body);
          font-size: 0.7rem;
          line-height: 1.5;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 768px) {
          .lead-overlay {
            padding: 16px;
          }

          .lead-modal {
            padding: 40px 24px 32px;
          }

          .lead-close {
            top: 12px;
            right: 12px;
          }

          .lead-title {
            font-size: 2rem;
          }

          .lead-form {
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default LeadModal;