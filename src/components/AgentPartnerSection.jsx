import React from "react";
import { Link } from "react-router-dom";

const AgentPartnerSection = () => {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.card} className="agent-card">
          <div style={styles.left}>
            <p style={styles.eyebrow}>Sales Partner Opportunity</p>

            <h2 style={styles.title}>Partner With Riverside Azure</h2>

            <p style={styles.text}>
              We are onboarding a select group of sales agents to represent
              Riverside Azure — a premium residential development in Riverside,
              Nairobi.
            </p>

            <p style={styles.text}>
              With strong pricing, investor appeal, and marketing support, this
              is an opportunity to close faster and earn more.
            </p>

            <div style={styles.pointsGrid}>
              <div style={styles.point}>Attractive commission structure</div>
              <div style={styles.point}>Marketing & lead support</div>
              <div style={styles.point}>High-demand Riverside location</div>
              <div style={styles.point}>Investor-focused product</div>
            </div>
          </div>

          <div style={styles.right}>
            <div style={styles.sideCard}>
              <p style={styles.sideLabel}>For Sales Agents</p>

              <h3 style={styles.sideTitle}>
                Join Early.
                <br />
                Close Stronger.
              </h3>

              <p style={styles.sideText}>
                Early agents will be prioritized for partnership onboarding,
                project briefing, and sales support.
              </p>

              <Link to="/agent-apply" style={styles.primaryBtn}>
                Apply as Sales Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
       .agent-card:hover {
  box-shadow: 0 28px 70px rgba(0,0,0,0.3);
}

@media (max-width: 900px) {
  .agent-card {
    grid-template-columns: 1fr !important;
    gap: 26px !important;
  }
}

@media (max-width: 768px) {
  .agent-card {
    padding: 22px !important;
  }
}

@media (max-width: 520px) {
  .agent-card {
    padding: 18px !important;
  }
}
      `}</style>
    </section>
  );
};

export default AgentPartnerSection;
const styles = {
  section: {
    background: "#04395e",
    padding: "clamp(64px, 9vw, 96px) 0",
  },

  card: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.9fr",
    gap: "34px",
    padding: "clamp(22px, 4vw, 38px)",
    border: "1px solid rgba(243,193,66,0.28)",
    background:
      "linear-gradient(135deg, #063b63 0%, #052f50 45%, #021827 100%)",
    transition: "box-shadow 0.3s ease",
    boxShadow: "0 26px 70px rgba(0,0,0,0.35)",
  },

  left: {
    display: "flex",
    flexDirection: "column",
  },

  eyebrow: {
    color: "#f3c142",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "0.78rem",
    fontWeight: 800,
    marginBottom: "12px",
  },

  title: {
    color: "#f7f4ec",
    fontSize: "clamp(2rem, 6vw, 2.9rem)",
    fontFamily: "var(--font-serif)",
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    margin: "0 0 18px",
  },

  text: {
    color: "#c7d3dc",
    lineHeight: 1.75,
    fontSize: "clamp(0.96rem, 2.5vw, 1rem)",
    margin: "0 0 14px",
    maxWidth: "760px",
  },

  pointsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    marginTop: "18px",
  },

  point: {
    color: "#f7f4ec",
    borderLeft: "2px solid #f3c142",
    padding: "12px 0 12px 14px",
    background: "rgba(255,255,255,0.06)",
    lineHeight: 1.5,
    fontSize: "0.95rem",
  },

  right: {
    display: "flex",
    alignItems: "stretch",
  },

  sideCard: {
    width: "100%",
    border: "1px solid rgba(243,193,66,0.35)",
    background:
      "linear-gradient(180deg, rgba(243,193,66,0.12), rgba(11,95,147,0.2))",
    padding: "clamp(24px, 5vw, 30px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
  },

  sideLabel: {
    color: "#f3c142",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.76rem",
    fontWeight: 800,
    marginBottom: "12px",
  },

  sideTitle: {
    color: "#f7f4ec",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(1.6rem, 5vw, 2.1rem)",
    lineHeight: 1.12,
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },

  sideText: {
    color: "#c7d3dc",
    lineHeight: 1.7,
    fontSize: "0.95rem",
    marginBottom: "22px",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ffe08a, #f3c142, #dba832)",
    color: "#021827",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "15px 20px",
    fontWeight: "800",
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "52px",
    width: "100%",
    boxShadow:
      "0 14px 34px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.24)",
  },
};