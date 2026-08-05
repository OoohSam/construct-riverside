import React from "react";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const FloatingCTA = ({ onOpenModal }) => {
  const whatsappNumber = "254700686666";
  const whatsappMessage = encodeURIComponent(
    "I am interested in Riverside Azure"
  );

 const handleWhatsApp = () => {
  const eventId = createEventId("whatsapp_click");

  trackMetaEvent(
    "Contact",
    {
      content_name: "WhatsApp Click",
      contact_method: "WhatsApp",
    },
    eventId
  );

  window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
};

  return (
    <>
      {/* Desktop WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="desktop-only"
        aria-label="Chat on WhatsApp"
        style={styles.desktopWhatsapp}
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      {/* Mobile Sticky CTA */}
      <div className="mobile-only" style={styles.mobileWrap}>
        <div style={styles.mobileBar}>
          <a href="tel:+254796529997" style={styles.callButton}>
            <span style={styles.buttonLabel}>Call</span>
          </a>

          <button onClick={handleWhatsApp} style={styles.whatsappButton}>
            <span style={styles.buttonLabel}>WhatsApp</span>
          </button>

          <button onClick={onOpenModal} style={styles.priceButton}>
            <span style={styles.priceLabel}>Get Price List</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;

const baseButton = {
  minHeight: "58px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  border: "none",
  background: "transparent",
  textDecoration: "none",
  cursor: "pointer",
  padding: "0 14px",
  transition: "all 0.25s ease",
  WebkitTapHighlightColor: "transparent",
};

const styles = {
  desktopWhatsapp: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: "#25D366",
    color: "#fff",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    zIndex: 9999,
    textDecoration: "none",
  },

  mobileWrap: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    paddingBottom: "env(safe-area-inset-bottom)",
    background: "rgba(7, 7, 7, 0.96)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 -10px 30px rgba(0,0,0,0.28)",
  },

  mobileBar: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr 1.35fr",
    width: "100%",
    alignItems: "stretch",
  },

  callButton: {
    ...baseButton,
    background: "#101010",
    color: "rgba(255,255,255,0.92)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
  },

  whatsappButton: {
    ...baseButton,
    background: "#151515",
    color: "#25D366",
    borderRight: "1px solid rgba(255,255,255,0.06)",
  },

  priceButton: {
    ...baseButton,
    background: "#121212",
    color: "var(--gold-accent)",
  },

  buttonLabel: {
    fontSize: "0.93rem",
    fontWeight: "600",
    letterSpacing: "0.01em",
  },

  priceLabel: {
    fontSize: "0.93rem",
    fontWeight: "700",
    letterSpacing: "0.01em",
    whiteSpace: "nowrap",
  },
};