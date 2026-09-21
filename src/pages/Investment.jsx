import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero/Front-View.webp";

const roiData = [
  {
    id: 1,
    unit: "1 Bedroom",
    shortUnit: "01",
    price: 7800000,
    furnishedRent: 160000,
    unfurnishedRent: 80000,
    furnishedRoi: 24,
    unfurnishedRoi: 12,
    furnishedPayback: "4 years",
    unfurnishedPayback: "8 years",
  },
  {
    id: 2,
    unit: "2 Bedrooms",
    shortUnit: "02",
    price: 12000000,
    furnishedRent: 220000,
    unfurnishedRent: 150000,
    furnishedRoi: 18,
    unfurnishedRoi: 12,
    furnishedPayback: "6 years",
    unfurnishedPayback: "8 years",
  },
  {
    id: 3,
    unit: "3 Bedrooms",
    shortUnit: "03",
    price: 22000000,
    furnishedRent: 300000,
    unfurnishedRent: 200000,
    furnishedRoi: 16,
    unfurnishedRoi: 14,
    furnishedPayback: "6 years",
    unfurnishedPayback: "7 years",
  },
];

const formatKes = (value) => `KSh ${Number(value).toLocaleString("en-KE")}`;

const InvestmentPage = ({ onCtaClick }) => {
  const [selectedUnitId, setSelectedUnitId] = useState(1);
  const [rentalType, setRentalType] = useState("furnished");
  const [scroll, setScroll] = useState(0);

  const selectedUnit = useMemo(
    () => roiData.find((item) => item.id === selectedUnitId) || roiData[0],
    [selectedUnitId]
  );

  const monthlyRent = rentalType === "furnished" ? selectedUnit.furnishedRent : selectedUnit.unfurnishedRent;
  const annualIncome = monthlyRent * 12;
  const grossRoi = selectedUnit.price > 0 ? ((annualIncome / selectedUnit.price) * 100).toFixed(1) : "0.0";
  const paybackPeriod = rentalType === "furnished" ? selectedUnit.furnishedPayback : selectedUnit.unfurnishedPayback;

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      setScroll(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const highlights = [
    {
      number: "01",
      title: "Riverside Address",
      text: "A strategically positioned residential address within one of Nairobi's established business and lifestyle corridors.",
    },
    {
      number: "02",
      title: "Rental Demand",
      text: "The location is positioned to serve professionals, expatriates, corporate tenants, long-term residents and short-stay demand.",
    },
    {
      number: "03",
      title: "Multiple Strategies",
      text: "Investors can evaluate furnished and unfurnished rental approaches across three distinct residential typologies.",
    },
  ];

  /* =========================================================
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.25, 1, 0.5, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: quietEase } }
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 10 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: quietEase }
    })
  };

  return (
    <>
      <main className="investment-page">
        {/* Progress Bar */}
        <div className="scroll-progress" style={{ transform: `scaleX(${scroll})` }} />

        {/* =========================================================
            HERO
            ========================================================= */}
        <section className="inv-hero">
          <div className="inv-hero-bg">
            <motion.img
              src={heroImg}
              alt="Riverside Azure"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: quietEase }}
            />
            <div className="inv-hero-overlay" />
          </div>

          <div className="container inv-hero-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span className="section-meta gold-text" variants={fadeUp}>
                Investment · Riverside, Nairobi
              </motion.span>
              <motion.h1 className="hero-title" variants={fadeUp}>
                Invest in a<br />
                considered address.
              </motion.h1>
              <motion.p className="hero-desc" variants={fadeUp}>
                Riverside Azure combines a prime Nairobi address with flexible
                residential typologies and projected rental income potential.
              </motion.p>
              <motion.button type="button" onClick={onCtaClick} className="btn-solid-hero" variants={fadeUp}>
                Speak to an Advisor
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            INTRO
            ========================================================= */}
        <section className="inv-intro">
          <div className="container">
            <div className="inv-grid-50">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="section-meta">The Investment Case</span>
                <h2 className="section-title">
                  A residential<br />asset with purpose.
                </h2>
              </motion.div>

              <motion.div
                className="inv-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.15}
                variants={fadeStagger}
              >
                <p className="lead-text">
                  The value of a residential investment is shaped by more than its purchase price.
                </p>
                <p className="body-text">
                  Location, tenant demand, usability, rental strategy and the
                  quality of the underlying development all influence an asset's long-term potential.
                </p>
                <p className="body-text">
                  Riverside Azure is positioned within Riverside, giving
                  investors access to an established Nairobi neighbourhood while
                  offering a contemporary residential product designed for modern urban living.
                </p>
                <div className="inv-signature">
                  <span className="gold-rule" />
                  <span>25 Riverside Drive · Nairobi</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            THESIS (Highlights)
            ========================================================= */}
        <section className="inv-thesis">
          <div className="container">
            <motion.div
              className="inv-header-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <span className="section-meta">01 — Why Riverside</span>
                <h2 className="section-title">Three reasons to consider the address.</h2>
              </div>
              <p className="body-text">
                An investment case built around location, demand and choice —
                rather than a single return figure.
              </p>
            </motion.div>

            <div className="thesis-grid">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.number}
                  className="thesis-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.15}
                  variants={fadeStagger}
                >
                  <span className="thesis-number">{item.number}</span>
                  <h3 className="thesis-title">{item.title}</h3>
                  <p className="thesis-text">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            ROI TABLE (Dark Prospectus Style)
            ========================================================= */}
        <section className="inv-roi">
          <div className="container">
            <motion.div
              className="inv-header-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <span className="section-meta gold-text">02 — Rental Return</span>
                <h2 className="section-title light-text">Understand the numbers.</h2>
              </div>
              <p className="body-text light-text-soft">
                Indicative rental scenarios across the three Riverside Azure residential typologies.
              </p>
            </motion.div>

            <motion.div
              className="roi-table-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="roi-table-header">
                <span>UNIT TYPE</span>
                <span>PRICE FROM</span>
                <span>FURNISHED</span>
                <span>UNFURNISHED</span>
              </div>

              {roiData.map((item) => (
                <div className="roi-table-row" key={item.id}>
                  <div className="roi-col-unit">
                    <span className="roi-short">{item.shortUnit}</span>
                    <strong className="roi-name">{item.unit}</strong>
                  </div>
                  <div className="roi-col">
                    <span className="roi-label">Purchase price</span>
                    <strong className="roi-val">{formatKes(item.price)}</strong>
                  </div>
                  <div className="roi-col">
                    <span className="roi-label">Monthly rent · Gross ROI</span>
                    <strong className="roi-val">{formatKes(item.furnishedRent)} <span className="roi-highlight">{item.furnishedRoi}%</span></strong>
                    <span className="roi-sub">{item.furnishedPayback} indicative payback</span>
                  </div>
                  <div className="roi-col">
                    <span className="roi-label">Monthly rent · Gross ROI</span>
                    <strong className="roi-val">{formatKes(item.unfurnishedRent)} <span className="roi-highlight">{item.unfurnishedRoi}%</span></strong>
                    <span className="roi-sub">{item.unfurnishedPayback} indicative payback</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <p className="roi-disclaimer">
              Projected gross ROI is based on indicative monthly rental estimates. Actual returns may vary depending on occupancy, furnishing standard, service charges, management fees, taxes, operating costs and market conditions.
            </p>
          </div>
        </section>

        {/* =========================================================
            CALCULATOR
            ========================================================= */}
        <section className="inv-calculator">
          <div className="container">
            <motion.div
              className="inv-header-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <span className="section-meta">03 — Investment Tool</span>
                <h2 className="section-title">Explore your rental scenario.</h2>
              </div>
              <p className="body-text">
                Select a residence and rental strategy to see an indicative income and gross return scenario.
              </p>
            </motion.div>

            <motion.div
              className="calc-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
            >
              <div className="calc-controls-grid">
                <div className="calc-inputs">
                  <div className="calc-field">
                    <label>Residence</label>
                    <div className="calc-select-wrap">
                      <select value={selectedUnitId} onChange={(e) => setSelectedUnitId(Number(e.target.value))}>
                        {roiData.map((item) => <option key={item.id} value={item.id}>{item.unit}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="calc-field">
                    <label>Rental Strategy</label>
                    <div className="calc-select-wrap">
                      <select value={rentalType} onChange={(e) => setRentalType(e.target.value)}>
                        <option value="furnished">Furnished</option>
                        <option value="unfurnished">Unfurnished</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="calc-reference">
                  <span className="ref-label">Selected Residence</span>
                  <strong className="ref-name">{selectedUnit.unit}</strong>
                  <span className="ref-price">From {formatKes(selectedUnit.price)}</span>
                </div>
              </div>

              <div className="calc-results-grid">
                <div className="calc-result calc-highlight">
                  <span className="res-label">Est. Monthly Rent</span>
                  <strong className="res-val">{formatKes(monthlyRent)}</strong>
                </div>
                <div className="calc-result">
                  <span className="res-label">Projected Annual Income</span>
                  <strong className="res-val">{formatKes(annualIncome)}</strong>
                </div>
                <div className="calc-result">
                  <span className="res-label">Est. Gross ROI</span>
                  <strong className="res-val">{grossRoi}%</strong>
                </div>
                <div className="calc-result">
                  <span className="res-label">Indicative Payback</span>
                  <strong className="res-val">{paybackPeriod}</strong>
                </div>
              </div>

              <div className="calc-footer">
                <span className="calc-footer-note">Based on indicative {rentalType} rental assumptions.</span>
                <button type="button" onClick={onCtaClick} className="btn-text">
                  Request Full Details ↗
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SCENARIOS (Editorial Cards)
            ========================================================= */}
        <section className="inv-scenarios">
          <div className="container">
            <motion.div
              className="inv-header-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <span className="section-meta">04 — Income Scenarios</span>
                <h2 className="section-title">Different homes. Different strategies.</h2>
              </div>
              <p className="body-text">
                The right unit depends on your intended holding strategy,
                capital position and target tenant profile.
              </p>
            </motion.div>

            <div className="scenario-grid">
              {roiData.map((item, index) => (
                <motion.article
                  key={item.id}
                  className={`scenario-card ${index === 1 ? 'scenario-card-featured' : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.15}
                  variants={fadeStagger}
                >
                  <div className="scenario-top">
                    <span>{item.shortUnit}</span>
                    <span>{item.unit}</span>
                  </div>
                  <h3 className="scenario-title">
                    {index === 0 ? "Accessible entry point." : index === 1 ? "Balanced residential asset." : "A larger legacy residence."}
                  </h3>
                  <div className="scenario-divider" />
                  <div className="scenario-stats">
                    <div className="stat-row">
                      <span className="stat-label">Furnished ROI</span>
                      <strong className="stat-val">{item.furnishedRoi}%</strong>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Unfurnished ROI</span>
                      <strong className="stat-val">{item.unfurnishedRoi}%</strong>
                    </div>
                  </div>
                  <div className="scenario-bottom">
                    From {formatKes(item.price)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
            ========================================================= */}
        <section className="inv-cta">
          <div className="container">
            <motion.div
              className="inv-cta-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className="section-meta gold-text">Riverside Azure</span>
              <h2 className="section-title light-text">Invest in the address.<br />Live in the value.</h2>
              <p className="body-text light-text-soft">
                Speak with our team for current pricing, floor plans, payment options and the complete investment pack.
              </p>
              <button type="button" onClick={onCtaClick} className="btn-solid-cta">
                Request Investment Pack
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist Structure)
          ========================================================= */}
      <style>{`
        .investment-page {
          background: var(--white);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* SCROLL PROGRESS */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gold-accent);
          transform-origin: 0%;
          z-index: 9999;
        }

        /* TYPOGRAPHY UTILITIES */
        .section-meta {
          display: block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
          margin-bottom: 24px;
        }

        .gold-text { color: var(--gold-accent); }
        .light-text { color: var(--white) !important; }
        .light-text-soft { color: rgba(255, 255, 255, 0.7) !important; }

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .lead-text {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 600;
          line-height: 1.6;
          color: var(--text-dark);
        }

        .body-text {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        /* HERO */
        .inv-hero {
          position: relative;
          min-height: 85svh;
          display: flex;
          align-items: flex-end;
          background: var(--azure-deep);
        }

        .inv-hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .inv-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .inv-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17, 26, 85, 0.95) 0%, rgba(17, 26, 85, 0.4) 50%, rgba(17, 26, 85, 0.1) 100%);
        }

        .inv-hero-content {
          position: relative;
          z-index: 2;
          padding-bottom: clamp(60px, 10vw, 100px);
          max-width: 800px;
        }

        .hero-title {
          margin: 0 0 24px 0;
          color: var(--white);
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .hero-desc {
          margin: 0 0 40px 0;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 500px;
        }

        .btn-solid-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 32px;
          background: var(--gold-accent);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-solid-hero:hover {
          background: var(--white);
        }

        /* SHARED HEADER ROW */
        .inv-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
          margin-bottom: clamp(60px, 8vw, 100px);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 40px;
        }

        .inv-header-row .body-text {
          margin: 0;
          max-width: 400px;
        }

        /* INTRO */
        .inv-intro {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .inv-grid-50 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .inv-signature {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
        }

        .gold-rule {
          width: 40px;
          height: 1px;
          background: var(--gold-accent);
        }

        .inv-signature span:last-child {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
        }

        /* THESIS */
        .inv-thesis {
          padding: 0 0 clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .thesis-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .thesis-card {
          display: flex;
          flex-direction: column;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }

        .thesis-number {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .thesis-title {
          margin: 0 0 16px 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--azure-deep);
        }

        .thesis-text {
          margin: 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-dark-soft);
        }

        /* ROI TABLE */
        .inv-roi {
          background: var(--azure-deep);
          color: var(--white);
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .inv-roi .inv-header-row {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .roi-table-wrapper {
          border-top: 1px solid rgba(255,255,255,0.2);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .roi-table-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr 1.2fr;
          gap: 24px;
          padding: 24px 0;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .roi-table-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr 1.2fr;
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          align-items: center;
        }

        .roi-col-unit {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .roi-short {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .roi-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
        }

        .roi-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .roi-label {
          color: rgba(255,255,255,0.5);
          font-family: var(--font-body);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .roi-val {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--white);
        }

        .roi-highlight {
          color: var(--gold-accent);
          margin-left: 8px;
        }

        .roi-sub {
          color: rgba(255,255,255,0.4);
          font-family: var(--font-body);
          font-size: 0.75rem;
        }

        .roi-disclaimer {
          margin: 40px 0 0 0;
          color: rgba(255,255,255,0.4);
          font-family: var(--font-body);
          font-size: 0.8rem;
          line-height: 1.6;
          text-align: center;
        }

        /* CALCULATOR */
        .inv-calculator {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--off-white);
        }

        .calc-box {
          border-top: 1px solid var(--border-light);
        }

        .calc-controls-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 48px 0;
          border-bottom: 1px solid var(--border-light);
        }

        .calc-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .calc-field {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calc-field label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
        }

        .calc-select-wrap {
          position: relative;
        }

        .calc-select-wrap::after {
          content: "↓";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold-accent);
          pointer-events: none;
        }

        .calc-select-wrap select {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-light);
          padding: 12px 24px 12px 0;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-dark);
          outline: none;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .calc-select-wrap select:focus {
          border-bottom-color: var(--gold-accent);
        }

        .calc-reference {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 48px;
          border-left: 1px solid var(--border-light);
        }

        .ref-label {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .ref-name {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 400;
          color: var(--azure-deep);
          margin-bottom: 4px;
        }

        .ref-price {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-dark-soft);
        }

        .calc-results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid var(--border-light);
        }

        .calc-result {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          padding: 40px 24px;
          border-right: 1px solid var(--border-light);
        }

        .calc-result:last-child {
          border-right: none;
        }

        .calc-highlight .res-val {
          color: var(--gold-accent);
        }

        .res-label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
        }

        .res-val {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 400;
          color: var(--azure-deep);
        }

        .calc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
        }

        .calc-footer-note {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--text-dark-soft);
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--azure-main);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .btn-text:hover {
          color: var(--gold-accent);
        }

        /* SCENARIOS */
        .inv-scenarios {
          padding: 0 0 clamp(100px, 12vw, 160px) 0;
          background: var(--off-white);
        }

        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .scenario-card {
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: var(--white);
          border: 1px solid var(--border-light);
        }

        .scenario-card-featured {
          background: var(--azure-deep);
          color: var(--white);
          border-color: var(--azure-deep);
        }

        .scenario-top {
          display: flex;
          justify-content: space-between;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .scenario-title {
          margin: 0 0 32px 0;
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.2;
          color: var(--azure-deep);
        }

        .scenario-card-featured .scenario-title {
          color: var(--white);
        }

        .scenario-divider {
          width: 100%;
          height: 1px;
          background: var(--border-light);
          margin-bottom: 32px;
        }

        .scenario-card-featured .scenario-divider {
          background: rgba(255,255,255,0.1);
        }

        .scenario-stats {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 48px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--text-dark-soft);
        }

        .scenario-card-featured .stat-label {
          color: rgba(255,255,255,0.6);
        }

        .stat-val {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 700;
        }

        .scenario-card-featured .stat-val {
          color: var(--gold-accent);
        }

        .scenario-bottom {
          margin-top: auto;
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--text-dark-soft);
        }

        .scenario-card-featured .scenario-bottom {
          color: rgba(255,255,255,0.5);
        }

        /* FINAL CTA */
        .inv-cta {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--azure-deep);
          text-align: center;
        }

        .inv-cta-content {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .btn-solid-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          margin-top: 32px;
          padding: 0 32px;
          background: var(--white);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .btn-solid-cta:hover {
          background: var(--gold-accent);
          color: var(--white);
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .inv-header-row, .inv-grid-50, .calc-controls-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .roi-table-header, .roi-table-row {
            min-width: 800px; /* Forces scroll on tablet/mobile */
          }
          .calc-reference {
            padding: 24px 0 0 0;
            border-left: none;
            border-top: 1px solid var(--border-light);
          }
          .calc-results-grid {
            grid-template-columns: 1fr 1fr;
          }
          .calc-result {
            border-bottom: 1px solid var(--border-light);
          }
          .calc-result:nth-child(2) { border-right: none; }
          .calc-result:nth-child(3), .calc-result:nth-child(4) { border-bottom: none; }
          .scenario-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .inv-hero {
            min-height: 75svh;
          }
          .inv-intro, .inv-thesis, .inv-roi, .inv-calculator, .inv-cta {
            padding: 80px 0;
          }
          .inv-scenarios {
            padding: 0 0 80px 0;
          }
          .thesis-grid {
            grid-template-columns: 1fr;
          }
          .calc-inputs, .calc-results-grid {
            grid-template-columns: 1fr;
          }
          .calc-result {
            border-right: none;
            padding: 24px 0;
          }
          .calc-result:last-child {
            border-bottom: none;
          }
          .calc-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default InvestmentPage;