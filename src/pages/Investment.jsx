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

  const useCount = (end) => {
    const numericEnd = Number(end) || 0;
    const [val, setVal] = useState(0);

    useEffect(() => {
      let start = 0;
      const step = numericEnd / 60;

      const interval = setInterval(() => {
        start += step;
        if (start >= numericEnd) {
          start = numericEnd;
          clearInterval(interval);
        }
        setVal(Math.floor(start));
      }, 16);

      return () => clearInterval(interval);
    }, [numericEnd]);

    return val;
  };

  const countIncome = useCount(annual);
  const countYield = useCount(Number(yieldVal));

  return (
    <section style={styles.page}>
      <div
        style={{
          ...styles.scrollBar,
          width: `${scroll * 100}%`,
        }}
      />

      <section style={styles.heroSection}>
        <motion.img
          src={heroImg}
          alt="Riverside Azure investment"
          style={styles.heroImg}
          animate={{ scale: 1.12 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
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
              Premium returns. Prime location. Flexible ownership structure for
              serious investors.
            </p>

            <div style={styles.heroButtonRow}>
              <button onClick={onCtaClick} style={styles.primaryCta}>
                Speak to Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container" style={styles.floatingCardWrap}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={styles.floatingCard}
        >
          <div style={styles.floatingCardHeader}>
            <h3 style={styles.floatingTitle}>Projected Returns</h3>
            <span style={styles.floatingBadge}>Illustrative</span>
          </div>

          <div style={styles.floatingMetrics}>
            <div style={styles.metricBlock}>
              <p style={styles.metricLabel}>Annual Income</p>
              <p style={styles.metricValue}>KES {countIncome.toLocaleString()}</p>
            </div>

            <div style={styles.metricBlock}>
              <p style={styles.metricLabel}>Estimated Yield</p>
              <p style={styles.metricValue}>{countYield}%</p>
            </div>
          </div>
        </motion.div>
      </div>

      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionIntro}>
            <p style={styles.sectionEyebrow}>Investment Highlights</p>
            <h2 style={styles.sectionTitle}>Why Invest</h2>
          </div>

          <div style={styles.grid}>
            {[
              {
                title: "Prime Location",
                text: "Riverside Drive remains one of Nairobi’s strongest residential and rental corridors.",
              },
              {
                title: "High Demand",
                text: "Demand from professionals, expatriates, and short-stay guests supports resilient occupancy.",
              },
              {
                title: "Capital Growth",
                text: "Early entry can position buyers to benefit from both rental income and long-term appreciation.",
              },
            ].map((item, i) => (
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

      <section style={styles.parallaxSection}>
        <div style={styles.parallaxOverlay} />
        <div className="container" style={styles.parallaxInner}>
          <h2 style={styles.parallaxTitle}>Built for High Returns</h2>
          <p style={styles.parallaxText}>
            A product positioned for both owner-occupiers and income-focused
            buyers.
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

      <section style={styles.finalSection}>
        <div className="container" style={styles.finalInner}>
          <h2 style={styles.finalTitle}>Secure Your Investment</h2>
          <p style={styles.finalText}>
            Speak with our team to review pricing, payment options, and the best
            unit fit for your strategy.
          </p>

          <button onClick={onCtaClick} style={styles.primaryCta}>
            Get Started
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .investment-card:hover {
            transform: none !important;
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
    color: "#fff",
    position: "relative",
    overflowX: "hidden",
  },

  scrollBar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "3px",
    background: "var(--gold-accent)",
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
      "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.88))",
  },

  heroContainer: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    paddingTop: "110px",
    paddingBottom: "120px",
  },

  heroContent: {
    maxWidth: "760px",
    textAlign: "center",
    margin: "0 auto",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "0.82rem",
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "clamp(2.4rem, 7vw, 4.8rem)",
    lineHeight: 1.05,
    marginBottom: "18px",
  },

  heroText: {
    fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    maxWidth: "680px",
    margin: "0 auto 28px",
  },

  heroButtonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  primaryCta: {
    padding: "15px 28px",
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    minHeight: "50px",
    fontSize: "0.98rem",
  },

  floatingCardWrap: {
    position: "relative",
    marginTop: "-55px",
    zIndex: 3,
  },

  floatingCard: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "24px",
    borderRadius: "6px",
    maxWidth: "760px",
    margin: "0 auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
  },

  floatingCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },

  floatingTitle: {
    margin: 0,
    fontSize: "1.3rem",
  },

  floatingBadge: {
    color: "var(--gold-accent)",
    fontSize: "0.82rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  floatingMetrics: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  metricBlock: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "18px",
  },

  metricLabel: {
    margin: "0 0 8px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "0.88rem",
  },

  metricValue: {
    margin: 0,
    fontSize: "clamp(1.3rem, 4vw, 2rem)",
    fontWeight: "700",
  },

  section: {
    padding: "90px 0",
  },

  sectionDark: {
    padding: "90px 0",
    background: "#0a0a0a",
  },

  sectionIntro: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 36px",
  },

  sectionEyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "0.8rem",
    marginBottom: "12px",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    lineHeight: 1.1,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    padding: "24px",
    background: "#111",
    border: "1px solid #222",
    minHeight: "210px",
    transition: "transform 0.25s ease",
  },

  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "12px",
    lineHeight: 1.3,
  },

  cardText: {
    color: "var(--text-muted)",
    lineHeight: 1.7,
    fontSize: "0.98rem",
  },

  parallaxSection: {
    position: "relative",
    minHeight: "320px",
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  parallaxOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
  },

  parallaxInner: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    paddingTop: "60px",
    paddingBottom: "60px",
  },

  parallaxTitle: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    marginBottom: "12px",
    lineHeight: 1.1,
  },

  parallaxText: {
    color: "rgba(255,255,255,0.85)",
    maxWidth: "620px",
    margin: "0 auto",
    lineHeight: 1.7,
  },

  calculatorShell: {
    maxWidth: "760px",
    margin: "0 auto",
    background: "#111",
    border: "1px solid #222",
    padding: "24px",
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
    color: "rgba(255,255,255,0.75)",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    background: "#0b0b0b",
    border: "1px solid #333",
    color: "#fff",
    minHeight: "50px",
    outline: "none",
  },

  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  resultCard: {
    background: "#0d0d0d",
    border: "1px solid #222",
    padding: "18px",
    textAlign: "center",
  },

  resultLabel: {
    margin: "0 0 8px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "0.88rem",
  },

  resultValue: {
    margin: 0,
    fontSize: "clamp(1.35rem, 4vw, 2rem)",
    lineHeight: 1.2,
  },

  finalSection: {
    padding: "100px 0",
  },

  finalInner: {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto",
  },

  finalTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "16px",
    lineHeight: 1.1,
  },

  finalText: {
    color: "var(--text-muted)",
    lineHeight: 1.7,
    marginBottom: "28px",
    fontSize: "1rem",
  },
};