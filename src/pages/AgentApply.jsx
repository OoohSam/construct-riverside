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

    const message = `Agent Application:\nName: ${form.name}\nPhone: ${form.phone}\nAgency: ${form.agency}\nExperience: ${form.experience}`;
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
            HERO
        ====================================================== */}
        <section className="agent-hero">
          <div className="container agent-hero-container">
            <motion.div
              className="agent-hero-copy"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.p className="section-meta gold-text" variants={fadeUp}>
                Riverside Azure · Partners
              </motion.p>
              <motion.h1 className="hero-title" variants={fadeUp}>
                Grow with<br />
                Riverside.
              </motion.h1>
              <motion.p className="hero-desc" variants={fadeUp}>
                Join our network of property professionals and represent
                Riverside Azure to buyers looking for a considered
                residential address in Nairobi.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="#apply" className="btn-solid-hero">
                  Become a Partner
                </a>
              </motion.div>
            </motion.div>

            <div className="agent-hero-bottom">
              <span>01 — PARTNERSHIP</span>
              <span>NAIROBI · KENYA</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="agent-intro">
          <div className="container">
            <div className="agent-intro-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <p className="section-meta">The Opportunity</p>
                <h2 className="section-title">
                  More than a listing.<br />
                  A partnership.
                </h2>
              </motion.div>

              <motion.div
                className="agent-intro-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.15}
                variants={fadeStagger}
              >
                <p className="lead-text">
                  Riverside Azure is a new residential development on
                  Riverside Drive, offering one, two and three-bedroom
                  residences designed for contemporary Nairobi living.
                </p>
                <p className="body-text">
                  We work with property agents and agencies who understand
                  their clients and value professional, transparent
                  relationships.
                </p>
                <p className="body-text">
                  Whether you are an established agency or an independent
                  property professional, our team is ready to support you
                  throughout the sales process.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFITS (Architectural Grid)
        ====================================================== */}
        <section className="agent-benefits">
          <div className="container">
            <div className="agent-benefits-header">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <p className="section-meta gold-text">02 — Why Riverside Azure</p>
                <h2 className="section-title light-text">A product worth representing.</h2>
              </motion.div>
              <p className="body-text light-text-soft">
                Give your clients access to a development backed by a
                practical approach to location, design and execution.
              </p>
            </div>

            <div className="agent-benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  className="agent-benefit"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index * 0.15}
                  variants={fadeStagger}
                >
                  <span className="agent-benefit-number">{benefit.number}</span>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            APPLICATION FORM (Concierge Style)
        ====================================================== */}
        <section id="apply" className="agent-application">
          <div className="container">
            <div className="agent-application-grid">
              
              {/* LEFT: STICKY INFO */}
              <motion.div
                className="agent-application-aside"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="sticky-content">
                  <p className="section-meta">03 — Partner Application</p>
                  <h2 className="section-title">Let's work together.</h2>
                  <p className="body-text">
                    Tell us a little about yourself and your property
                    experience. Our team will contact you with the next
                    steps for becoming a Riverside Azure sales partner.
                  </p>

                  <div className="agent-application-note">
                    <span className="gold-rule" />
                    <p className="body-text">
                      <strong>25 Riverside Drive</strong><br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: FORM */}
              <motion.div
                className="agent-form-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <form onSubmit={handleSubmit} className="agent-form">
                  <div className="agent-form-header">
                    <h3>Your Details</h3>
                  </div>

                  <div className="agent-form-grid">
                    <div className="agent-field">
                      <label htmlFor="agent-name">Full Name *</label>
                      <input
                        id="agent-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="min-input"
                      />
                    </div>

                    <div className="agent-field">
                      <label htmlFor="agent-phone">Phone / WhatsApp *</label>
                      <input
                        id="agent-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="min-input"
                      />
                    </div>

                    <div className="agent-field">
                      <label htmlFor="agent-agency">Agency / Company</label>
                      <input
                        id="agent-agency"
                        type="text"
                        name="agency"
                        value={form.agency}
                        onChange={handleChange}
                        className="min-input"
                      />
                    </div>

                    <div className="agent-field">
                      <label htmlFor="agent-experience">Experience Level *</label>
                      <div className="select-wrapper">
                        <select
                          id="agent-experience"
                          name="experience"
                          value={form.experience}
                          onChange={handleChange}
                          required
                          className="min-input"
                        >
                          <option value="">Select experience level</option>
                          <option value="New Agent">New Agent</option>
                          <option value="1–2 Years">1–2 Years</option>
                          <option value="3–5 Years">3–5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-solid-submit">
                    Submit Application <span>→</span>
                  </button>

                  <p className="agent-form-note">
                    By submitting this application, you will be
                    connected with the Riverside Azure sales team via WhatsApp.
                  </p>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="agent-final">
          <div className="container">
            <motion.div
              className="agent-final-inner"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <p className="section-meta">Riverside Azure</p>
              <h2 className="section-title">
                A considered address.<br />
                A worthwhile partnership.
              </h2>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist)
          ========================================================= */}
      <style>{`
        .agent-page {
          background: var(--white);
          color: var(--text-dark);
          overflow-x: hidden;
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

        .gold-text { color: var(--gold-accent) !important; }
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
        .agent-hero {
          min-height: 80svh;
          background: var(--azure-deep); /* Pure architectural blue */
          color: var(--white);
          display: flex;
          align-items: flex-end;
        }

        .agent-hero-container {
          min-height: 80svh;
          padding-top: clamp(140px, 15vw, 180px);
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .agent-hero-copy {
          max-width: 800px;
          padding-bottom: clamp(60px, 8vw, 100px);
        }

        .hero-title {
          margin: 0 0 24px 0;
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .hero-desc {
          margin: 0 0 40px 0;
          color: rgba(255, 255, 255, 0.7);
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
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .btn-solid-hero:hover {
          background: var(--white);
        }

        .agent-hero-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.5);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        /* INTRO */
        .agent-intro {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .agent-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        /* BENEFITS (Dark Mode Architectural Grid) */
        .agent-benefits {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--azure-deep);
          color: var(--white);
        }

        .agent-benefits-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
          margin-bottom: clamp(60px, 8vw, 100px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 40px;
        }

        .agent-benefits-header .body-text {
          margin: 0;
          max-width: 400px;
        }

        .agent-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .agent-benefit {
          display: flex;
          flex-direction: column;
          padding: 40px 40px 40px 0;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .agent-benefit:not(:first-child) {
          padding-left: 40px;
        }

        .agent-benefit:last-child {
          border-right: none;
          padding-right: 0;
        }

        .agent-benefit-number {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 40px;
        }

        .benefit-content h3 {
          margin: 0 0 16px 0;
          color: var(--white);
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
        }

        .benefit-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* APPLICATION FORM */
        .agent-application {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--off-white);
        }

        .agent-application-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .agent-application-aside {
          position: sticky;
          top: 120px;
        }

        .agent-application-note {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }

        .agent-application-note .gold-rule {
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold-accent);
          margin-bottom: 16px;
        }

        .agent-form-wrapper {
          background: var(--white);
          border-top: 1px solid var(--text-dark);
          padding: 48px;
        }

        .agent-form {
          display: flex;
          flex-direction: column;
        }

        .agent-form-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .agent-form-header h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--azure-deep);
        }

        .agent-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 24px;
          margin-bottom: 40px;
        }

        .agent-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .agent-field label {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Minimalist Inputs */
        .min-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(21, 24, 42, 0.2);
          color: var(--text-dark);
          font-family: var(--font-body);
          font-size: 16px;
          padding: 12px 0;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .min-input:focus {
          border-bottom-color: var(--gold-accent);
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
          color: var(--gold-accent);
          pointer-events: none;
        }

        select.min-input {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          padding-right: 24px;
        }

        .btn-solid-submit {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 60px;
          padding: 0 24px;
          background: var(--azure-deep);
          color: var(--white);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-solid-submit:hover {
          background: var(--gold-accent);
          color: var(--azure-deep);
        }

        .agent-form-note {
          margin: 24px 0 0 0;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.75rem;
          line-height: 1.6;
          text-align: center;
        }

        /* FINAL CTA */
        .agent-final {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
          border-top: 1px solid var(--border-light);
          text-align: center;
        }

        .agent-final-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .agent-intro-grid, .agent-application-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .agent-application-aside {
            position: static;
          }
          .agent-benefits-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .agent-hero {
            min-height: 75svh;
          }
          .agent-hero-container {
            padding-top: 120px;
          }
          .hero-title {
            font-size: clamp(3rem, 12vw, 4rem);
          }
          .agent-benefits-grid {
            grid-template-columns: 1fr;
          }
          .agent-benefit {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 32px 0;
          }
          .agent-benefit:not(:first-child) {
            padding-left: 0;
          }
          .agent-benefit:last-child {
            border-bottom: none;
          }
          .agent-form-wrapper {
            padding: 32px 24px;
          }
          .agent-form-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default AgentApply;