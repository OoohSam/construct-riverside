import React, { useEffect, useState } from "react";
import heroVideo from "../video/House-inside.mp4";
//Fixed thevideo
import fallbackImage from "../assets/hero/Front-View.webp";

const Hero = ({ onCtaClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section style={styles.section}>
      
      {/* VIDEO BACKGROUND */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}

      {/* FALLBACK IMAGE (MOBILE) */}
      {isMobile && (
        <div
          style={{
            ...styles.video,
            backgroundImage: `url(${fallbackImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}

      {/* OVERLAY */}
      <div style={styles.overlay}></div>

      {/* CONTENT */}
      <div style={styles.content}>
        
        <p style={styles.subText} className="fade-up delay-1">
          Excavation   | Riverside Drive, Nairobi
        </p>

        <h1 style={styles.heading}>
          <span className="fade-up delay-2">Own the Skyline</span><br/>
          <span className="fade-up delay-3">Before It Rises.</span>
        </h1>

        <div className="fade-up delay-4">
          <button onClick={onCtaClick} style={styles.button}>
            Unlock Early Investor Pricing
          </button>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div style={styles.scrollIndicator}>
        <div style={styles.scrollLine}></div>
      </div>

      {/* ANIMATION STYLES */}
      <style>{animations}</style>
    </section>
  );
};

export default Hero;






/* ================== STYLES ================== */

const styles = {
  section: {
    height: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    animation: "zoomSlow 20s ease-in-out infinite alternate"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(14,14,14,0.3), rgba(14,14,14,1))",
    zIndex: 1
  },

  content: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "20px"
  },

  subText: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "20px",
    fontWeight: 600
  },

  heading: {
    fontSize: "clamp(3rem, 5vw, 5rem)",
    color: "#fff",
    marginBottom: "30px",
    lineHeight: 1.1
  },

  button: {
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    padding: "16px 40px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer"
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10
  },

  scrollLine: {
    width: "2px",
    height: "40px",
    background: "#fff",
    animation: "scrollMove 1.5s infinite"
  }
};



/* ================== ANIMATIONS ================== */

const animations = `
/* TEXT ANIMATION */
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

/* VIDEO ZOOM */
@keyframes zoomSlow {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

/* SCROLL INDICATOR */
@keyframes scrollMove {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(15px); }
}
`;