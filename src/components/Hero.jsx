import React, { useEffect, useState } from "react";
import fallbackImage from "../assets/hero/Front-View.webp";
import heroVideo from "../assets/Video/hero-house.mp4";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const Hero = ({ onCtaClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showVideo = !isMobile && !videoError;

  const handleHeroCtaClick = () => {
    const eventId = createEventId("hero_book_unit_click");

    trackMetaEvent(
      "Contact",
      {
        content_name: "Book A Unit Today",
        content_category: "Hero CTA",
        contact_method: "Lead Modal",
      },
      eventId
    );

    if (typeof onCtaClick === "function") {
      onCtaClick();
    }
  };

  return (
    <section style={styles.section}>
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={fallbackImage}
          onError={() => setVideoError(true)}
          style={styles.video}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            ...styles.background,
            backgroundImage: `url(${fallbackImage})`,
          }}
        />
      )}

      <div style={styles.overlay} />

      <div style={styles.content}>
        <p style={styles.subText} className="fade-up delay-1">
          Excavation | 25 Riverside Drive, Nairobi
        </p>

        <h1 style={styles.heading}>
          <span className="fade-up delay-2">Own a Piece of Riverside</span>
          <br />
          <span className="fade-up delay-3">Before It Rises.</span>
        </h1>

        <div className="fade-up delay-4" style={styles.buttonWrap}>
          <button onClick={handleHeroCtaClick} style={styles.button}>
            Book A Unit Today
          </button>
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        style={styles.scrollIndicator}
        aria-hidden="true"
      >
        <div style={styles.scrollLine}></div>
      </div>

      <style>{animations}</style>
    </section>
  );
};

export default Hero;

const styles = {
  section: {
    minHeight: "100svh",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "100px 16px 48px",
    background:
      "radial-gradient(circle at top right, rgba(11,95,147,0.18), transparent 30%)",
  },

  video: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  background: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    animation: "zoomSlow 20s ease-in-out infinite alternate",
    transform: "scale(1)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: `
    linear-gradient(
      180deg,
      rgba(2, 17, 31, 0.38) 0%,
      rgba(3, 27, 47, 0.58) 38%,
      rgba(2, 24, 39, 0.78) 72%,
      rgba(1, 12, 22, 0.92) 100%
    )
  `,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },

  subText: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "18px",
    fontWeight: 700,
    fontSize: "clamp(0.78rem, 2vw, 1rem)",
    lineHeight: 1.5,
    textShadow: "0 2px 12px rgba(0,0,0,0.25)",
  },

  heading: {
    fontSize: "clamp(2.4rem, 8vw, 5.4rem)",
    color: "var(--text-main)",
    marginBottom: "24px",
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    textShadow: "0 8px 30px rgba(0, 0, 0, 0.38)",
  },

  buttonWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  button: {
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "16px 28px",
    fontSize: "clamp(0.95rem, 2.5vw, 1rem)",
    fontWeight: "700",
    letterSpacing: "0.03em",
    cursor: "pointer",
    width: "100%",
    maxWidth: "360px",
    minHeight: "56px",
    lineHeight: 1.2,
    boxShadow:
      "0 12px 35px rgba(243, 193, 66, 0.28), inset 0 1px 0 rgba(255,255,255,0.25)",
    transition: "all 0.35s ease",
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },

  scrollLine: {
    width: "2px",
    height: "38px",
    background:
      "linear-gradient(to bottom, rgba(243,193,66,0), var(--gold-accent), rgba(243,193,66,0))",
    animation: "scrollMove 1.5s infinite",
  },
};

const animations = `
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s forwards;
}

.delay-1 { animation-delay: 0.3s; }
.delay-2 { animation-delay: 0.6s; }
.delay-3 { animation-delay: 0.9s; }
.delay-4 { animation-delay: 1.2s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomSlow {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}

@keyframes scrollMove {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(12px); }
}

@media (max-width: 768px) {
  .fade-up {
    transform: translateY(20px);
  }

  .hero-scroll-indicator {
    display: none;
  }
}
`;