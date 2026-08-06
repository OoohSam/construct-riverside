import React, { useRef, useState } from "react";

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    unit: "1 Bedroom",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevents the conversion from firing twice if the user double-clicks.
  const submissionStartedRef = useRef(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent duplicate submissions and duplicate conversion events.
    if (submissionStartedRef.current) return;

    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();

    // Additional validation in case the browser validation is bypassed.
    if (!cleanName || !cleanPhone) {
      return;
    }

    submissionStartedRef.current = true;
    setIsSubmitting(true);

    /*
     * GOOGLE TAG MANAGER EVENT
     *
     * GTM will listen for this event:
     * lead_form_success
     *
     * Do not send the visitor's name or phone number to the data layer.
     */
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "lead_form_success",
      form_name: "riverside_azure_lead_modal",
      unit_type: formData.unit,
      lead_destination: "whatsapp",
    });

    // Remember that the visitor has already completed the lead form.
    localStorage.setItem("riverside_lead", "true");

    /*
     * META PIXEL EVENTS
     */
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

    /*
     * WHATSAPP MESSAGE
     */
    const message = `Hello, I am interested in Riverside Azure.
My name is ${cleanName}.
My phone number is ${cleanPhone}.
I am interested in the ${formData.unit}.
Please share the price list and floor plans.`;

    const brochureUrl =
      "/riverside-azure-brochure-and-pricelist.pdf";

    const whatsappUrl = `https://wa.me/254796529997?text=${encodeURIComponent(
      message
    )}`;

    /*
     * Open the brochure immediately.
     *
     * Opening it directly inside the submit handler reduces the chance
     * that the browser will block it as a popup.
     */
    window.open(brochureUrl, "_blank", "noopener,noreferrer");

    /*
     * Wait briefly before redirecting to WhatsApp.
     *
     * This gives GTM time to process lead_form_success and fire the
     * Google Ads conversion tag before the page navigates away.
     */
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

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            ...styles.closeButton,
            ...(isSubmitting ? styles.closeButtonDisabled : {}),
          }}
          aria-label="Close lead form"
          disabled={isSubmitting}
        >
          &times;
        </button>

        <div style={styles.content}>
          <p style={styles.kicker}>Private Access</p>

          <h3 id="lead-modal-title" style={styles.title}>
            Unlock Investor Pricing
          </h3>

          <p style={styles.subtitle}>
            Receive Phase 1 pricing, floor plans, and the brochure directly via
            WhatsApp.
          </p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={(e) =>
                setFormData((currentData) => ({
                  ...currentData,
                  name: e.target.value,
                }))
              }
              style={styles.input}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              required
              disabled={isSubmitting}
              value={formData.phone}
              onChange={(e) =>
                setFormData((currentData) => ({
                  ...currentData,
                  phone: e.target.value,
                }))
              }
              style={styles.input}
            />

            <select
              name="unit"
              value={formData.unit}
              disabled={isSubmitting}
              onChange={(e) =>
                setFormData((currentData) => ({
                  ...currentData,
                  unit: e.target.value,
                }))
              }
              style={styles.input}
            >
              <option value="1 Bedroom">1 Bedroom Interest</option>
              <option value="2 Bedrooms">2 Bedrooms Interest</option>
              <option value="3 Bedrooms">3 Bedrooms Interest</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              style={{
                ...styles.submitButton,
                ...(isSubmitting ? styles.submitButtonDisabled : {}),
              }}
            >
              {isSubmitting
                ? "Opening WhatsApp..."
                : "Continue to WhatsApp"}
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
      radial-gradient(
        circle at top right,
        rgba(11,95,147,0.34),
        transparent 34%
      ),
      linear-gradient(
        180deg,
        var(--bg-card) 0%,
        var(--azure-deep) 100%
      )
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

  closeButtonDisabled: {
    cursor: "not-allowed",
    opacity: 0.5,
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
    fontWeight: 800,
    fontSize: "0.95rem",
    letterSpacing: "0.03em",
    cursor: "pointer",
    transition: "0.25s ease",
    boxShadow:
      "0 14px 36px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.25)",
  },

  submitButtonDisabled: {
    cursor: "wait",
    opacity: 0.72,
  },
};