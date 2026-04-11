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
          box-shadow: 0 24px 60px rgba(0,0,0,0.24);
        }

        @media (max-width: 900px) {
          .agent-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px !important;
          }
        }

        @media (max-width: 768px) {
          .agent-card {
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AgentPartnerSection;

const styles = {
  section: {
    background: "var(--bg-card)",
    padding: "72px 0",
  },

  card: {
    display: "grid",
    gridTemplateColumns: "1.35fr 0.9fr",
    gap: "34px",
    padding: "32px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "linear-gradient(180deg, #111 0%, #0c0c0c 100%)",
    transition: "box-shadow 0.3s ease",
  },

  left: {
    display: "flex",
    flexDirection: "column",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.8rem",
    marginBottom: "12px",
  },

  title: {
    color: "#fff",
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    fontFamily: "var(--font-serif)",
    lineHeight: 1.12,
    margin: "0 0 18px",
  },

  text: {
    color: "var(--text-muted)",
    lineHeight: 1.75,
    fontSize: "1rem",
    margin: "0 0 14px",
    maxWidth: "760px",
  },

  pointsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    marginTop: "16px",
  },

  point: {
    color: "#fff",
    borderLeft: "1px solid var(--gold-accent)",
    padding: "10px 0 10px 14px",
    background: "rgba(255,255,255,0.01)",
    lineHeight: 1.5,
    fontSize: "0.95rem",
  },

  right: {
    display: "flex",
    alignItems: "stretch",
  },

  sideCard: {
    width: "100%",
    border: "1px solid rgba(212,175,55,0.2)",
    background:
      "linear-gradient(180deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  sideLabel: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.76rem",
    marginBottom: "12px",
  },

  sideTitle: {
    color: "#fff",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    lineHeight: 1.15,
    margin: "0 0 16px",
  },

  sideText: {
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.7,
    fontSize: "0.95rem",
    marginBottom: "22px",
  },

  primaryBtn: {
    background: "var(--gold-accent)",
    color: "#000",
    textDecoration: "none",
    border: "none",
    padding: "14px 20px",
    fontWeight: "700",
    textAlign: "center",
    display: "inline-block",
    minHeight: "50px",
  },
};