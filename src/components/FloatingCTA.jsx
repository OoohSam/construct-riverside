import React from "react";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const FloatingCTA = ({ onOpenModal }) => {
  const whatsappNumber = "254796529997";
  const whatsappMessage = encodeURIComponent(
    "I am interested in Riverside Azure"
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

    window.location.href = whatsappUrl;
  };

  return (
    <>
      {/* =========================
          DESKTOP WHATSAPP
      ========================== */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="desktop-only"
        aria-label="Chat with Riverside Azure on WhatsApp"
        style={styles.desktopWhatsapp}
        onClick={() => {
          const eventId = createEventId("whatsapp_click");

          trackMetaEvent(
            "Contact",
            {
              content_name: "WhatsApp Click",
              contact_method: "WhatsApp",
            },
            eventId
          );
        }}
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>

      {/* =========================
          MOBILE STICKY CTA
      ========================== */}
      <div className="mobile-only" style={styles.mobileWrap}>
        <div style={styles.mobileBar}>
          <a href="tel:+254796529997" style={styles.callButton}>
            <span style={styles.smallLabel}>CALL</span>
          </a>

          <button
            type="button"
            onClick={handleWhatsApp}
            style={styles.whatsappButton}
            aria-label="Chat with Riverside Azure on WhatsApp"
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <span style={styles.smallLabel}>WHATSAPP</span>
          </button>

          <button
            type="button"
            onClick={onOpenModal}
            style={styles.priceButton}
            aria-label="Get Riverside Azure price list"
          >
            <span style={styles.priceLabel}>GET PRICE LIST</span>
            <span style={styles.priceArrow}>→</span>
          </button>
        </div>
      </div>

      <style>{`
        .floating-cta-desktop:hover {
          transform: translateY(-3px);
        }

        .floating-cta-price:hover {
          background: #d8b761 !important;
        }

        .floating-cta-call:hover {
          background: rgba(255,255,255,0.08) !important;
        }

        .floating-cta-whatsapp:hover {
          background: rgba(37,211,102,0.10) !important;
        }

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

        @media (max-width: 380px) {
          .floating-cta-label {
            font-size: 0.62rem !important;
            letter-spacing: 0.12em !important;
          }

          .floating-cta-price-label {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTA;

const baseButton = {
  minHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textAlign: "center",
  border: "none",
  textDecoration: "none",
  cursor: "pointer",
  padding: "0 14px",
  fontFamily: "var(--font-body)",
  WebkitTapHighlightColor: "transparent",
  transition:
    "background-color 0.35s var(--ease-luxury), color 0.35s var(--ease-luxury)",
};

const styles = {
  /* =========================
     DESKTOP
  ========================== */

  desktopWhatsapp: {
    position: "fixed",
    right: "28px",
    bottom: "28px",
    width: "58px",
    height: "58px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#25D366",
    color: "#ffffff",

    borderRadius: "50%",
    textDecoration: "none",

    fontSize: "1.65rem",

    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",

    zIndex: 9999,

    transition:
      "transform 0.35s var(--ease-luxury), box-shadow 0.35s var(--ease-luxury)",
  },

  /* =========================
     MOBILE WRAPPER
  ========================== */

  mobileWrap: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 9999,

    paddingBottom: "env(safe-area-inset-bottom)",

    background: "var(--azure-deep)",

    borderTop: "1px solid rgba(201, 163, 78, 0.45)",

    boxShadow: "0 -8px 28px rgba(10, 16, 55, 0.18)",
  },

  mobileBar: {
    display: "grid",
    gridTemplateColumns: "0.82fr 1.08fr 1.45fr",

    width: "100%",
    alignItems: "stretch",
  },

  /* =========================
     CALL
  ========================== */

  callButton: {
    ...baseButton,

    background: "rgba(255,255,255,0.025)",
    color: "rgba(255,255,255,0.88)",

    borderRight: "1px solid rgba(255,255,255,0.12)",
  },

  /* =========================
     WHATSAPP
  ========================== */

  whatsappButton: {
    ...baseButton,

    background: "rgba(255,255,255,0.025)",
    color: "#25D366",

    borderRight: "1px solid rgba(255,255,255,0.12)",
  },

  /* =========================
     PRICE LIST
  ========================== */

  priceButton: {
    ...baseButton,

    background: "var(--gold-accent)",
    color: "var(--azure-deep)",

    gap: "10px",
  },

  /* =========================
     TYPOGRAPHY
  ========================== */

  smallLabel: {
    fontSize: "0.63rem",
    fontWeight: "700",
    letterSpacing: "0.16em",
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  priceLabel: {
    fontSize: "0.68rem",
    fontWeight: "800",
    letterSpacing: "0.13em",
    lineHeight: 1,
    whiteSpace: "nowrap",
  },

  priceArrow: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: 1,
  },
};