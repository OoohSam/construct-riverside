import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero/Front-View.webp";

const InvestmentPage = ({ onCtaClick }) => {
  const [price, setPrice] = useState(12000000);
  const [rent, setRent] = useState(200000);
  const [occupancy, setOccupancy] = useState(80);

  const annual = rent * 12 * (occupancy / 100);
  const yieldVal = ((annual / price) * 100).toFixed(1);

  /* ---------------- SCROLL PROGRESS ---------------- */
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
      setScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- COUNT UP ---------------- */
  const useCount = (end) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
      let start = 0;
      const step = end / 60;
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setVal(Math.floor(start));
      }, 16);
      return () => clearInterval(interval);
    }, [end]);
    return val;
  };

  const countIncome = useCount(annual);
  const countYield = useCount(yieldVal);

  return (
    <section style={{ color: "#fff", position: "relative" }}>

      {/* SCROLL PROGRESS BAR */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${scroll * 100}%`,
        background: "gold",
        zIndex: 9999
      }} />

      {/* HERO */}
      <div style={styles.hero}>
        <motion.img
          src={heroImg}
          alt=""
          style={styles.heroImg}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <div style={styles.overlay}></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.heroContent}
        >
          <h1>Invest in the Future Skyline</h1>
          <p>Premium returns. Prime location. Proven developer.</p>

          <button onClick={onCtaClick} style={styles.cta}>
            Speak to Advisor
          </button>
        </motion.div>
      </div>

      {/* FLOATING ROI CARD */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.floatingCard}
      >
        <h3>Projected Returns</h3>
        <p>KES {countIncome.toLocaleString()}</p>
        <span>{countYield}% Yield</span>
      </motion.div>

      {/* WHY INVEST */}
      <div style={styles.section}>
        <h2>Why Invest</h2>

        <div style={styles.grid}>
          {["Prime Location", "High Demand", "Capital Growth"].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={styles.card}
            >
              <h3>{t}</h3>
              <p>Riverside Drive offers unmatched investment potential.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PARALLAX */}
      <div style={styles.parallax}>
        <h2>Built for High Returns</h2>
      </div>

      {/* ROI CALCULATOR */}
      <div style={styles.sectionDark}>
        <h2>ROI Calculator</h2>

        <div style={styles.calculator}>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={styles.input}
          />

          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            style={styles.input}
          />

          <input
            type="number"
            value={occupancy}
            onChange={(e) => setOccupancy(Number(e.target.value))}
            style={styles.input}
          />

          <div style={styles.results}>
            <h3>KES {annual.toLocaleString()}</h3>
            <p>{yieldVal}% Yield</p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={styles.final}>
        <h2>Secure Your Investment</h2>
        <button onClick={onCtaClick} style={styles.cta}>
          Get Started
        </button>
      </div>

    </section>
  );
};

export default InvestmentPage;


const styles = {
  hero: {
    height: "90vh",
    position: "relative",
    overflow: "hidden"
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)"
  },

  heroContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },

  floatingCard: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    padding: "30px",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  section: {
    padding: "100px 40px"
  },

  sectionDark: {
    padding: "100px 40px",
    background: "#0a0a0a"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px",
    marginTop: "40px"
  },

  card: {
    padding: "25px",
    background: "#111",
    border: "1px solid #222",
    cursor: "pointer"
  },

  parallax: {
    height: "300px",
    backgroundImage: "url('/assets/hero/Front-View.webp')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  calculator: {
    maxWidth: "500px",
    margin: "40px auto",
    display: "grid",
    gap: "15px"
  },

  input: {
    padding: "14px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff"
  },

  results: {
    textAlign: "center",
    marginTop: "20px"
  },

  final: {
    textAlign: "center",
    padding: "120px 20px"
  },

  cta: {
    padding: "16px 40px",
    background: "gold",
    border: "none",
    cursor: "pointer"
  }
};