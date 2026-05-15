import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero/Front-View.webp";

const InvestmentPage = ({ onCtaClick }) => {
  const [price, setPrice] = useState(12000000);
  const [rent, setRent] = useState(200000);
  const [occupancy, setOccupancy] = useState(80);
  const [scroll, setScroll] = useState(0);

  const annual = rent * 12 * (occupancy / 100);
  const yieldVal = price > 0 ? ((annual / price) * 100).toFixed(1) : "0.0";

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const scrolled = total > 0 ? window.scrollY / total : 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const highlights = [
    {
      title: "Prime Riverside Address",
      text: "Riverside remains one of Nairobi’s most established residential and rental corridors.",
    },
    {
      title: "Flexible End-Use Strategy",
      text: "Units can appeal to both owner-occupiers and income-focused buyers.",
    },
    {
      title: "Illustrative Yield Potential",
      text: "Model different income scenarios depending on furnishing, occupancy, and management approach.",
    },
  ];

  const scenarios = [
    {
      title: "Long-Term Rental",
      income: "KSh 120,000 – 180,000 / month",
      assumption: "Stable occupancy with professional or expatriate tenants.",
      note: "Suitable for buyers seeking lower operational involvement and consistent income flow.",
    },
    {
      title: "Short-Stay / Airbnb",
      income: "KSh 180,000 – 280,000+ / month",
      assumption: "Furnished unit with active short-stay management.",
      note: "Can outperform standard leasing when occupancy and guest turnover are well managed.",
    },
    {
      title: "Capital Appreciation",
      income: "Value-led upside",
      assumption: "Early-stage entry, location strength, and project progression.",
      note: "Positioned for buyers who value rental income and medium-term appreciation potential.",
    },
  ];

  return (
    <section style={styles.page}>
      <div style={{ ...styles.scrollBar, width: `${scroll * 100}%` }} />

      <section style={styles.heroSection}>
        <motion.img
          src={heroImg}
          alt="Riverside Azure investment"
          style={styles.heroImg}
          animate={{ scale: 1.12 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <div style={styles.heroOverlay} />

        <div className="container" style={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={styles.heroContent}
          >
            <p style={styles.eyebrow}>Riverside Drive, Nairobi</p>
            <h1 style={styles.heroTitle}>Invest in the Future Skyline</h1>
            <p style={styles.heroText}>
              Premium location, flexible income potential, and a structured path
              for both local and diaspora buyers.
            </p>

            <button onClick={onCtaClick} style={styles.primaryCta}>
              Speak to Advisor
            </button>
          </motion.div>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionIntro}>
            <p style={styles.sectionEyebrow}>Investment Highlights</p>
            <h2 style={styles.sectionTitle}>Why Invest</h2>
          </div>

          <div style={styles.grid}>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                style={styles.card}
                className="investment-card"
              >
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.sectionDark}>
        <div className="container">
          <div style={styles.sectionIntro}>
            <p style={styles.sectionEyebrow}>Illustrative Scenarios</p>
            <h2 style={styles.sectionTitle}>Income Pathways</h2>
          </div>

          <div style={styles.scenarioGrid} className="scenario-grid">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                style={styles.scenarioCard}
                className="investment-card"
              >
                <p style={styles.scenarioLabel}>Scenario</p>
                <h3 style={styles.scenarioTitle}>{scenario.title}</h3>
                <p style={styles.scenarioValue}>{scenario.income}</p>
                <p style={styles.scenarioAssumption}>{scenario.assumption}</p>
                <p style={styles.scenarioText}>{scenario.note}</p>
              </motion.div>
            ))}
          </div>

          <p style={styles.sectionDisclaimer}>
            Income ranges above are indicative examples only and are not
            guarantees. Actual performance depends on unit selection, furnishing,
            occupancy, management approach, and operating costs.
          </p>
        </div>
      </section>

      <section style={styles.sectionDark}>
        <div className="container">
          <div style={styles.sectionIntro}>
            <p style={styles.sectionEyebrow}>Investment Tool</p>
            <h2 style={styles.sectionTitle}>ROI Calculator</h2>
          </div>

          <div style={styles.calculatorShell}>
            <div style={styles.calculatorGrid}>
              <label style={styles.field}>
                <span style={styles.label}>Purchase Price (KES)</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value) || 0)}
                  style={styles.input}
                />
              </label>

              <label style={styles.field}>
                <span style={styles.label}>Monthly Rent (KES)</span>
                <input
                  type="number"
                  value={rent}
                  onChange={(e) => setRent(Number(e.target.value) || 0)}
                  style={styles.input}
                />
              </label>

              <label style={styles.field}>
                <span style={styles.label}>Occupancy Rate (%)</span>
                <input
                  type="number"
                  value={occupancy}
                  onChange={(e) => setOccupancy(Number(e.target.value) || 0)}
                  style={styles.input}
                  min="0"
                  max="100"
                />
              </label>
            </div>

            <div style={styles.results}>
              <div style={styles.resultCard}>
                <p style={styles.resultLabel}>Projected Annual Income</p>
                <h3 style={styles.resultValue}>KES {annual.toLocaleString()}</h3>
              </div>

              <div style={styles.resultCard}>
                <p style={styles.resultLabel}>Estimated Gross Yield</p>
                <h3 style={styles.resultValue}>{yieldVal}%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .scenario-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .investment-card:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default InvestmentPage;

const styles = {
  page: {
    color: "var(--text-main)",
    position: "relative",
    overflowX: "hidden",
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 42%, #021827 100%)",
  },

  scrollBar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "3px",
    background:
      "linear-gradient(90deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    zIndex: 9999,
  },

  heroSection: {
    position: "relative",
    minHeight: "100svh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },

  heroImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.38), rgba(3,27,47,0.72), rgba(1,12,22,0.94))",
  },

  heroContainer: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    paddingTop: "110px",
    paddingBottom: "120px",
  },

  heroContent: {
    maxWidth: "820px",
    textAlign: "center",
    margin: "0 auto",
    padding: "0 14px",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    fontSize: "0.82rem",
    marginBottom: "18px",
    fontWeight: 800,
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 8vw, 5.2rem)",
    lineHeight: 1.02,
    marginBottom: "18px",
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.04em",
  },

  heroText: {
    fontSize: "clamp(1rem, 3vw, 1.18rem)",
    lineHeight: 1.8,
    color: "rgba(247,244,236,0.88)",
    maxWidth: "720px",
    margin: "0 auto 28px",
  },

  primaryCta: {
    padding: "16px 28px",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    border: "1px solid rgba(255,255,255,0.14)",
    cursor: "pointer",
    fontWeight: "800",
    minHeight: "54px",
    fontSize: "0.98rem",
  },

  section: {
    padding: "clamp(74px, 10vw, 100px) 0",
  },

  sectionDark: {
    padding: "clamp(74px, 10vw, 100px) 0",
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.78), rgba(1,12,22,0.92))",
  },

  sectionIntro: {
    textAlign: "center",
    maxWidth: "780px",
    margin: "0 auto 40px",
    padding: "0 14px",
  },

  sectionEyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontSize: "0.8rem",
    marginBottom: "12px",
    fontWeight: 800,
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 6vw, 3.4rem)",
    lineHeight: 1.06,
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.03em",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "24px",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.58), rgba(2,17,31,0.78))",
    border: "1px solid rgba(243,193,66,0.14)",
    minHeight: "210px",
  },

  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "12px",
    fontFamily: "var(--font-serif)",
  },

  cardText: {
    color: "var(--text-muted)",
    lineHeight: 1.8,
    fontSize: "0.98rem",
  },

  scenarioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },

  scenarioCard: {
    padding: "26px 24px",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.72), rgba(2,17,31,0.9))",
    border: "1px solid rgba(243,193,66,0.18)",
    minHeight: "280px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
  },

  scenarioLabel: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.76rem",
    fontWeight: 800,
    marginBottom: "12px",
  },

  scenarioTitle: {
    fontSize: "1.35rem",
    marginBottom: "16px",
    lineHeight: 1.25,
    fontFamily: "var(--font-serif)",
  },

  scenarioValue: {
    fontSize: "1.25rem",
    fontWeight: "800",
    marginBottom: "14px",
    color: "var(--gold-accent)",
    lineHeight: 1.35,
  },

  scenarioAssumption: {
    color: "rgba(247,244,236,0.82)",
    lineHeight: 1.65,
    marginBottom: "14px",
    fontSize: "0.94rem",
  },

  scenarioText: {
    color: "var(--text-muted)",
    lineHeight: 1.75,
    fontSize: "0.95rem",
    marginBottom: 0,
  },

  sectionDisclaimer: {
    maxWidth: "860px",
    margin: "26px auto 0",
    color: "rgba(255,255,255,0.62)",
    lineHeight: 1.75,
    fontSize: "0.9rem",
    textAlign: "center",
  },

  calculatorShell: {
    maxWidth: "820px",
    margin: "0 auto",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.66), rgba(2,17,31,0.82))",
    border: "1px solid rgba(243,193,66,0.16)",
    padding: "clamp(22px, 5vw, 34px)",
  },

  calculatorGrid: {
    display: "grid",
    gap: "16px",
    marginBottom: "24px",
  },

  field: {
    display: "grid",
    gap: "8px",
  },

  label: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.76)",
  },

  input: {
    width: "100%",
    padding: "15px 16px",
    background: "rgba(1,18,32,0.72)",
    border: "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    minHeight: "52px",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "16px",
  },

  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  resultCard: {
    background: "rgba(1,18,32,0.42)",
    border: "1px solid rgba(243,193,66,0.12)",
    padding: "18px",
    textAlign: "center",
  },

  resultLabel: {
    margin: "0 0 8px",
    color: "rgba(255,255,255,0.68)",
    fontSize: "0.88rem",
  },

  resultValue: {
    margin: 0,
    fontSize: "clamp(1.4rem, 4vw, 2.1rem)",
    color: "var(--gold-accent)",
    fontWeight: 800,
  },
};