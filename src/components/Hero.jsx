import React from "react";
import fallbackImage from "../assets/hero/Front-View.webp";

const Hero = ({ onCtaClick }) => {
  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.background,
          backgroundImage: `url(${fallbackImage})`,
        }}
      />

      <div style={styles.overlay} />

      <div style={styles.content}>
        <p style={styles.subText} className="fade-up delay-1">
          Excavation | 25 Riverside Drive, Nairobi
        </p>

        <h1 style={styles.heading}>
          <span className="fade-up delay-2">Own the Skyline</span>
          <br />
          <span className="fade-up delay-3">Before It Rises.</span>
        </h1>

        <div className="fade-up delay-4" style={styles.buttonWrap}>
          <button onClick={onCtaClick} style={styles.button}>
            Unlock Early Investor Pricing
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
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65))",
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
    letterSpacing: "2px",
    marginBottom: "16px",
    fontWeight: 600,
    fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
    lineHeight: 1.5,
  },

  heading: {
    fontSize: "clamp(2.2rem, 8vw, 5rem)",
    color: "#fff",
    marginBottom: "24px",
    lineHeight: 1.05,
    textShadow: "0 4px 20px rgba(0,0,0,0.6)",
  },

  buttonWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  button: {
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    padding: "14px 24px",
    fontSize: "clamp(0.95rem, 2.5vw, 1rem)",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
    maxWidth: "340px",
    minHeight: "52px",
    lineHeight: 1.2,
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
    height: "34px",
    background: "#fff",
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