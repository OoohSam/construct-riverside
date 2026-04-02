import React from "react";

const IntroSection = () => {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <p style={styles.kicker}>Riverside, Nairobi</p>

        <h2 style={styles.title}>
          A New Standard of Modern Living
        </h2>

        <p style={styles.text}>
          Welcome to Riverside Azure — a refined residential address in one of
          Nairobi’s most sought-after neighborhoods. Designed with elegance,
          comfort, and functionality in mind, each residence offers a seamless
          balance between contemporary architecture and serene living.
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
    padding: "80px 0",
    background: "#0B0B0B",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },

  container: {
    maxWidth: "780px",
    margin: "0 auto",
    textAlign: "center",
  },

  kicker: {
    color: "var(--gold-accent)",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
    marginBottom: "12px",
    textTransform: "uppercase",
  },

  title: {
    color: "#fff",
    fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
    fontFamily: "var(--font-serif)",
    marginBottom: "20px",
    lineHeight: 1.3,
  },

  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1rem",
    lineHeight: 1.8,
    marginBottom: "14px",
  },
};