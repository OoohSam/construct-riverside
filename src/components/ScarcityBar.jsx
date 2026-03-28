import React from "react";

const ScarcityBar = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.wrapper} className="scarcity-wrapper">
          <div style={styles.textBlock}>
            <h4 style={styles.title}>Phase 1 Release: Limited Inventory</h4>
            <p style={styles.subtitle}>
              Prices increase at Ground Floor Slab level.
            </p>
          </div>

          <div style={styles.progressBlock}>
            <div style={styles.progressHeader}>
              <span>Sold</span>
              <span>65% Allocation</span>
            </div>

            <div style={styles.progressTrack}>
              <div style={styles.progressFill} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .scarcity-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ScarcityBar;

const styles = {
  section: {
    background: "var(--bg-card)",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    padding: "22px 0",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    flexWrap: "wrap",
  },

  textBlock: {
    flex: "1 1 320px",
    minWidth: 0,
  },

  title: {
    color: "#fff",
    marginBottom: "6px",
    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
    lineHeight: 1.3,
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
    lineHeight: 1.5,
    margin: 0,
  },

  progressBlock: {
    flex: "1 1 300px",
    width: "100%",
    maxWidth: "420px",
    minWidth: 0,
  },

  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "0.82rem",
    color: "var(--gold-accent)",
    gap: "12px",
    lineHeight: 1.4,
  },

  progressTrack: {
    width: "100%",
    height: "6px",
    background: "#333",
    borderRadius: "999px",
    overflow: "hidden",
  },

  progressFill: {
    width: "65%",
    height: "100%",
    background: "var(--gold-accent)",
    borderRadius: "999px",
  },
};