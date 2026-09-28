import AgentPicture from "../assets/hero/riverside-azure-real-estate-agents-nairobi-kenya.webp";
import React, { useState } from "react";
import { motion } from "framer-motion";



const AgentApply = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    agency: "",
    experience: "",
  });

  /* =========================================================
     GALLERY MOTION (Ultra Smooth & Slow)
     ========================================================= */
  const elegantEase = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: elegantEase } },
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: customDelay, ease: elegantEase },
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_category: "Agent Application",
      });
    }

    const message = `Agent Application:\nName: ${form.name}\nPhone: ${form.phone}\nAgency: ${form.agency || 'Not specified'}\nExperience: ${form.experience || 'Not specified'}`;
    window.location.href = `https://wa.me/254796529997?text=${encodeURIComponent(message)}`;
  };

  const benefits = [
    {
      number: "01",
      title: "A Strong Product",
      text: "Represent a contemporary residential development in one of Nairobi's established neighbourhoods.",
    },
    {
      number: "02",
      title: "Sales Support",
      text: "Work with a dedicated project team for pricing, availability, site visits and buyer enquiries.",
    },
    {
      number: "03",
      title: "A Long-Term Partnership",
      text: "Build a relationship with a development team focused on quality, execution and lasting value.",
    },
  ];

  return (
    <>
      <main className="agent-page">
        
        {/* =====================================================
            HERO (Refined Gradient & Image Positioning)
        ====================================================== */}
        <section className="hero-editorial">
          {/* Background Image */}
          <img 
            src={AgentPicture} 
            alt="Riverside Azure Real Estate Agents" 
            className="hero-bg-image"
          />
          {/* Dissipating Gradient Overlay */}
          <div className="hero-gradient-overlay"></div>

          <div className="container hero-content-container">
            <motion.div
              className="hero-text-wrapper"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Riverside Azure · Partners
              </motion.span>
              <motion.h1 className="heading-xl text-white" variants={fadeUp}>
                Grow with<br />
                <span className="text-gold">Riverside.</span>
              </motion.h1>
              <motion.p className="hero-subtitle text-white-muted" variants={fadeUp}>
                Join our network of property professionals and represent Riverside Azure to buyers looking for a considered residential address in Nairobi.
              </motion.p>
              <motion.div variants={fadeUp} className="hero-actions">
                <a href="#apply" className="btn-solid-gold">
                  Become a Partner
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            INTRO (Asymmetrical Split)
        ====================================================== */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="editorial-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="col-left"
              >
                <span className="eyebrow">The Opportunity</span>
                <h2 className="heading-large">
                  More than a listing.<br />
                  A partnership.
                </h2>
              </motion.div>

              <motion.div
                className="col-right"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.15}
                variants={fadeStagger}
              >
                <p className="body-large">
                  Riverside Azure is a new residential development on Riverside Drive, offering one, two and three-bedroom residences designed for contemporary Nairobi living.
                </p>
                <p className="body-standard text-muted">
                  We work with property agents and agencies who understand their clients and value professional, transparent relationships.
                </p>
                <p className="body-standard text-muted">
                  Whether you are an established agency or an independent property professional, our team is ready to support you throughout the sales process.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS (Azure Deep Background)
        ====================================================== */}
        <section className="benefits-section">
          <div className="container">
            <div className="benefits-header">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <span className="eyebrow text-gold">Why Riverside Azure</span>
                <h2 className="heading-large text-white">A product worth representing.</h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <p className="body-standard text-white-muted">
                  Give your clients access to a development backed by a practical approach to location, design and execution.
                </p>
              </motion.div>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  className="benefit-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.15}
                  variants={fadeStagger}
                >
                  <span className="benefit-number">{benefit.number}</span>
                  <div className="benefit-content">
                    <h3 className="heading-medium text-white">{benefit.title}</h3>
                    <p className="body-standard text-white-muted">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            APPLICATION FORM (Concierge Style)
        ====================================================== */}
        <section id="apply" className="application-section">
          <div className="container">
            <div className="application-grid">
              
              {/* LEFT: STICKY INFO */}
              <motion.div
                className="application-aside"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="sticky-content">
                  <span className="eyebrow">Partner Application</span>
                  <h2 className="heading-large">Let's work together.</h2>
                  <p className="body-standard text-muted">
                    Tell us a little about yourself and your property experience. Our team will contact you with the next steps for becoming a Riverside Azure sales partner.
                  </p>

                  <div className="application-note">
                    <span className="gold-rule" />
                    <p className="body-standard text-muted">
                      <strong style={{ color: "var(--color-azure)", fontFamily: "var(--font-display)" }}>
                        25 Riverside Drive
                      </strong><br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: FORM */}
              <motion.div
                className="form-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <form onSubmit={handleSubmit} className="agent-form">
                  <div className="form-header">
                    <h3 className="heading-medium">Your Details</h3>
                  </div>

                  <div className="form-grid">
                    <div className="input-group">
                      <label htmlFor="agent-name">Full Name *</label>
                      <input
                        id="agent-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="min-input"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="agent-phone">Phone / WhatsApp *</label>
                      <input
                        id="agent-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="min-input"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="agent-agency">Agency / Company (Optional)</label>
                      <input
                        id="agent-agency"
                        type="text"
                        name="agency"
                        value={form.agency}
                        onChange={handleChange}
                        className="min-input"
                        placeholder="Independent or Agency Name"
                      />
                    </div>

                    <div className="input-group">
                      {/* Experience is no longer required */}
                      <label htmlFor="agent-experience">Experience Level (Optional)</label>
                      <div className="select-wrapper">
                        <select
                          id="agent-experience"
                          name="experience"
                          value={form.experience}
                          onChange={handleChange}
                          className="min-input select-input"
                        >
                          <option value="" disabled>Select experience level</option>
                          <option value="New Agent">New Agent</option>
                          <option value="1–2 Years">1–2 Years</option>
                          <option value="3–5 Years">3–5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-solid submit-btn">
                    Submit Application <span className="arrow-icon">⟶</span>
                  </button>

                  <p className="form-note">
                    By submitting this application, you will be connected with the Riverside Azure sales team via WhatsApp.
                  </p>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="final-statement">
          <div className="container">
            <motion.div
              className="statement-inner"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <span className="eyebrow">Riverside Azure</span>
              <h2 className="heading-large">
                A considered address.<br />
                A worthwhile partnership.
              </h2>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --color-bg: #FCFCFC;
          --color-bg-alt: #F3F3F3;
          --color-azure: #111A55;   /* Deep Azure Blue */
          --color-gold: #C5A059;    /* Elegant Gold */
          --color-text-muted: #767676;
          --color-border: #E5E5E5;
          --font-sans: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .agent-page {
          width: 100%;
          background: var(--color-bg);
          color: var(--color-azure);
          font-family: var(--font-sans);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* TYPOGRAPHY */
        .text-muted { color: var(--color-text-muted); }
        .text-gold { color: var(--color-gold) !important; }
        .text-white { color: #FFFFFF !important; }
        .text-white-muted { color: rgba(255, 255, 255, 0.8) !important; }
        .bg-light { background: var(--color-bg-alt); }

        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 1rem;
        }

        .heading-xl, .heading-large, .heading-medium {
          font-family: var(--font-display);
          color: var(--color-azure);
        }

        .heading-xl {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 1.05;
          margin: 0 0 2rem 0;
          letter-spacing: -0.02em;
        }

        .heading-large {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
        }

        .heading-medium {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }

        .body-large {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          line-height: 1.4;
          font-weight: 400;
          margin: 0 0 2rem 0;
        }

        .body-standard {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .section-padding {
          padding: clamp(80px, 15vw, 160px) 0;
        }

        /* HERO EDITORIAL (Fixed Gradient & Image) */
        .hero-editorial {
          position: relative;
          min-height: 85svh;
          display: flex;
          align-items: center;
          padding: 120px 0; 
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Shifts the focus of the image to the right side where the people are */
          object-position: 75% center; 
          z-index: 1;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          /* Sharp gradient: Solid on the left, fades out cleanly by the middle */
          background: linear-gradient(to right, var(--color-azure) 0%, rgba(17, 26, 85, 0.95) 30%, rgba(17, 26, 85, 0) 55%);
        }

        .hero-content-container {
          position: relative;
          z-index: 3;
          width: 100%;
        }

        .hero-text-wrapper {
          /* Restrict width so it doesn't cross over the center figures */
          max-width: 520px; 
        }

        .hero-subtitle {
          margin: 0 0 3rem 0;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn-solid-gold {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          padding: 0 40px;
          background: var(--color-gold);
          color: var(--color-azure);
          border: none;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-solid-gold:hover {
          background: #FFF;
          transform: translateY(-2px);
        }

        /* EDITORIAL GRID (Intro) */
        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
        }

        /* BENEFITS SECTION (Azure Background) */
        .benefits-section {
          background: var(--color-azure);
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .benefits-header {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
          margin-bottom: clamp(60px, 8vw, 100px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 3rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .benefit-card {
          padding: 3rem 3rem 3rem 0;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .benefit-card:not(:first-child) {
          padding-left: 3rem;
        }

        .benefit-card:last-child {
          border-right: none;
          padding-right: 0;
        }

        .benefit-number {
          display: block;
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-gold);
          margin-bottom: 2rem;
        }

        /* APPLICATION SECTION */
        .application-section {
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .application-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .application-aside {
          position: sticky;
          top: 120px;
        }

        .application-note {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        .gold-rule {
          display: block;
          width: 50px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.5rem;
        }

        /* FORM STYLING */
        .form-wrapper {
          background: var(--color-bg);
        }

        .form-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .min-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-azure);
          font-family: var(--font-sans);
          font-size: 1.1rem;
          padding: 10px 0;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .min-input::placeholder {
          color: #CCC;
          font-weight: 300;
        }

        .min-input:focus {
          border-bottom-color: var(--color-gold);
        }

        .select-wrapper {
          position: relative;
        }

        .select-wrapper::after {
          content: "↓";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-gold);
          pointer-events: none;
          font-weight: 600;
        }

        .select-input {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          padding-right: 24px;
        }

        .form-note {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* BUTTONS */
        .btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          min-height: 60px;
          padding: 0 40px;
          background: var(--color-azure);
          color: #FFF;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-solid:hover {
          background: var(--color-gold);
          color: var(--color-azure);
          transform: translateY(-2px);
        }

        .submit-btn {
          width: 100%;
        }

        .arrow-icon {
          font-size: 1.2em;
          font-weight: 300;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-solid:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* FINAL STATEMENT */
        .final-statement {
          padding: clamp(80px, 10vw, 140px) 0;
          border-top: 1px solid var(--color-border);
          text-align: center;
          background: var(--color-bg-alt);
        }

        .statement-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .editorial-grid, .benefits-header, .application-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .application-aside {
            position: static;
          }
        }

        @media (max-width: 768px) {
          /* Switch gradient to flow from bottom to top on narrow screens */
          .hero-gradient-overlay {
            background: linear-gradient(to top, var(--color-azure) 0%, rgba(17, 26, 85, 0.8) 50%, transparent 100%);
          }
          .hero-text-wrapper {
            margin-top: 25vh; /* Push text down so image faces show at the top */
          }
          .hero-bg-image {
            object-position: center 10%; /* Center the people on mobile */
          }
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          .benefit-card {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding: 2.5rem 0;
          }
          .benefit-card:not(:first-child) {
            padding-left: 0;
          }
          .benefit-card:last-child {
            border-bottom: none;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default AgentApply;