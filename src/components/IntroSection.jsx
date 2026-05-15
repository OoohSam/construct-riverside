import React from "react";

const IntroSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.glow}></div>
      <div className="container" style={styles.container}>
        <p style={styles.kicker}>Riverside, Nairobi</p>

        <h2 style={styles.title}>
          A New Standard of Modern Living
        </h2>

        <p style={styles.text}>
          Welcome to Riverside Azure. A refined residential address of 1, 2 & 3-bedroom residences in one of Nairobi’s most sought-after neighborhoods.
        </p>

        <p style={styles.text}>
          Located minutes from key business hubs, lifestyle destinations, and
          cultural landmarks, Riverside Azure places you at the center of it all
          while maintaining the privacy of an exclusive enclave.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;

const styles = {
  section: {
    padding: "100px 0",
    background: `
      radial-gradient(circle at top right, rgba(11,95,147,0.12), transparent 30%),
      linear-gradient(
        180deg,
        var(--bg-dark) 0%,
        var(--azure-deep) 55%,
        var(--bg-deep) 100%
      )
    `,
    borderBottom: "1px solid rgba(243,193,66,0.08)",
    position: "relative",
    overflow: "hidden",
  },

  container: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  kicker: {
    color: "var(--gold-accent)",
    fontSize: "0.82rem",
    letterSpacing: "0.32em",
    marginBottom: "16px",
    textTransform: "uppercase",
    fontWeight: 700,
    textShadow: "0 2px 10px rgba(0,0,0,0.25)",
  },

  title: {
    color: "var(--text-main)",
    fontSize: "clamp(2rem, 4.8vw, 3.2rem)",
    fontFamily: "var(--font-serif)",
    marginBottom: "26px",
    lineHeight: 1.18,
    letterSpacing: "-0.03em",
    textShadow: "0 6px 24px rgba(0,0,0,0.28)",
  },

  text: {
    color: "var(--text-muted)",
    fontSize: "clamp(1rem, 2vw, 1.08rem)",
    lineHeight: 1.95,
    marginBottom: "18px",
    fontWeight: 400,
    maxWidth: "760px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  glow: {
  position: "absolute",
  top: "-120px",
  right: "-80px",
  width: "320px",
  height: "320px",
  background: "rgba(11,95,147,0.12)",
  filter: "blur(90px)",
  borderRadius: "50%",
  zIndex: 1,
},
};