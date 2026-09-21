import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is the payment plan for Riverside Azure?",
    a: "We offer flexible payment plans for both local and international buyers. Our sales team can explain the available payment structures based on your preferred unit and payment method.",
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. You can schedule a private site visit with our sales team. You can also contact us directly through WhatsApp for the fastest response.",
  },
  {
    q: "Do you offer property management?",
    a: "Yes. Property management services can be arranged for owners who intend to rent out their units, including tenant sourcing and ongoing management.",
  },
  {
    q: "Is Riverside Azure suitable for Airbnb or short-term rental?",
    a: "The Riverside location offers strong potential for both long-term and short-term rental demand. Our team can provide more information about the investment potential of the development.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  purpose: "",
  budget: "",
  paymentPlan: "",
  timeframe: "",
  location: "",
  message: "",
};

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Contact Page" }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Something went wrong.");

      setStatus("Thank you. Our sales team will contact you shortly.");
      setForm(initialForm);
    } catch (error) {
      console.error("Lead submission error:", error);
      setStatus("We couldn't submit your details. Please contact us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = "https://wa.me/254796529997";

  return (
    <>
      <main className="contact-page">
        {/* =========================================================
            HERO
            ========================================================= */}
        <section className="contact-hero">
          <div className="container contact-hero-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="contact-hero-content"
            >
              <motion.span className="section-meta gold-text" variants={fadeUp}>
                Riverside · Nairobi
              </motion.span>
              <motion.h1 className="hero-title" variants={fadeUp}>
                Begin a conversation.
              </motion.h1>
              <motion.p className="hero-desc" variants={fadeUp}>
                Tell us what you are looking for and our sales team will help you explore 
                the residences, pricing, and payment options available at Riverside Azure.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <a href="#enquiry" className="btn-solid-hero">Make an Enquiry</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-text-hero">
                  WhatsApp Sales ↗
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            DIRECT CONTACT INFO
            ========================================================= */}
        <section className="contact-info">
          <div className="container">
            <div className="info-grid">
              
              {/* Left: Intro */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="info-intro"
              >
                <span className="section-meta">Get In Touch</span>
                <h2 className="section-title">Your next address starts here.</h2>
                <p className="body-text">
                  Whether you are buying for yourself, your family, or as an investment, 
                  our team can guide you through the development. Ask us about available residences, 
                  current pricing, or arranging a private visit.
                </p>
              </motion.div>

              {/* Right: Architectural Grid of Contact Details */}
              <div className="info-details-grid">
                {[
                  { num: "01", label: "WhatsApp", title: "Chat with Sales", link: whatsappUrl, cta: "Start a conversation ↗" },
                  { num: "02", label: "Phone", title: "0796 529 997", link: "tel:+254796529997", cta: "Call the sales team ↗", sub: "Mon–Fri · 8am–5pm" },
                  { num: "03", label: "Email", title: "Email Sales", link: "mailto:info@riversideazure.com", cta: "info@riversideazure.com ↗" },
                  { num: "04", label: "Location", title: "25 Riverside Drive", link: "https://maps.app.goo.gl/mpJWJq6jBALvGijU6", cta: "Open in Google Maps ↗", sub: "Riverside, Nairobi" }
                ].map((item, index) => (
                  <motion.a
                    key={item.num}
                    href={item.link}
                    target={item.label === "Email" || item.label === "Phone" ? "_self" : "_blank"}
                    rel={item.label === "Email" || item.label === "Phone" ? "" : "noreferrer"}
                    className="detail-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index * 0.1}
                    variants={fadeStagger}
                  >
                    <span className="detail-meta">{item.num} · {item.label}</span>
                    <h3 className="detail-title">{item.title}</h3>
                    {item.sub && <p className="detail-sub">{item.sub}</p>}
                    <span className="detail-cta">{item.cta}</span>
                  </motion.a>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================================
            ENQUIRY FORM (Gallery Minimalist Style)
            ========================================================= */}
        <section id="enquiry" className="contact-form-section">
          <div className="container">
            <div className="form-layout">
              
              {/* Form Sticky Header */}
              <motion.div
                className="form-aside"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="sticky-content">
                  <span className="section-meta">Private Enquiry</span>
                  <h2 className="section-title">Tell us what you're looking for.</h2>
                  <p className="body-text">
                    A few details help our team prepare the right information before we contact you.
                  </p>
                  <div className="privacy-note">
                    <span className="gold-rule" />
                    <p>Your information remains confidential and is used only to respond to your Riverside Azure enquiry.</p>
                  </div>
                </div>
              </motion.div>

              {/* The Minimalist Form */}
              <motion.div
                className="form-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
              >
                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1 */}
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-num">01</span>
                      <h3>Your Details</h3>
                    </div>
                    <div className="input-grid">
                      <div className="input-group">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required className="min-input" />
                      </div>
                      <div className="input-group">
                        <label htmlFor="phone">Phone / WhatsApp *</label>
                        <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required className="min-input" />
                      </div>
                      <div className="input-group full-width">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="min-input" />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-num">02</span>
                      <h3>Property Interest</h3>
                    </div>
                    <div className="input-grid">
                      <div className="input-group">
                        <label htmlFor="interest">Residence of Interest *</label>
                        <div className="select-wrapper">
                          <select id="interest" name="interest" value={form.interest} onChange={handleChange} required className="min-input">
                            <option value="">Select a unit type</option>
                            <option value="1 Bedroom">1 Bedroom</option>
                            <option value="2 Bedroom">2 Bedroom</option>
                            <option value="3 Bedroom">3 Bedroom</option>
                            <option value="Not Sure">I'm not sure yet</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-group">
                        <label htmlFor="purpose">Primary Purpose *</label>
                        <div className="select-wrapper">
                          <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange} required className="min-input">
                            <option value="">Select purpose</option>
                            <option value="Own Use">Own Use</option>
                            <option value="Investment">Investment</option>
                            <option value="Both">Both</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-num">03</span>
                      <h3>Requirements</h3>
                    </div>
                    <div className="input-grid">
                      <div className="input-group">
                        <label htmlFor="budget">Approximate Budget</label>
                        <div className="select-wrapper">
                          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="min-input">
                            <option value="">Select budget</option>
                            <option value="Below KES 8M">Below KES 8M</option>
                            <option value="KES 8M - 10M">KES 8M – 10M</option>
                            <option value="KES 10M - 13M">KES 10M – 13M</option>
                            <option value="KES 13M - 16M">KES 13M – 16M</option>
                            <option value="KES 16M+">KES 16M+</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-group">
                        <label htmlFor="timeframe">Purchase Timeframe</label>
                        <div className="select-wrapper">
                          <select id="timeframe" name="timeframe" value={form.timeframe} onChange={handleChange} className="min-input">
                            <option value="">Select timeframe</option>
                            <option value="Immediately">Immediately</option>
                            <option value="Within 1-3 months">Within 1–3 months</option>
                            <option value="Within 3-6 months">Within 3–6 months</option>
                            <option value="Just researching">Just researching</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-group full-width">
                        <label htmlFor="message">Additional Information</label>
                        <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" className="min-input" />
                      </div>
                    </div>
                  </div>

                  <div className="form-submit-wrapper">
                    <button type="submit" disabled={submitting} className="btn-solid-submit">
                      {submitting ? "Sending..." : "Submit Enquiry"} <span>→</span>
                    </button>
                    
                    <AnimatePresence mode="wait">
                      {status && (
                        <motion.div 
                          className="status-message"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {status}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            MAP (Edge to Edge, Architectural)
            ========================================================= */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.60477500888726!2d36.7973963187308!3d-1.270017329739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17002d64b365%3A0xf5848f6948e54151!2sJNC%20Brothers!5e0!3m2!1sen!2ske!4v1774085453694!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Riverside Azure location"
          />
          <div className="map-label">
            <span className="label-top">RIVERSIDE · NAIROBI</span>
            <span className="label-bottom">25 Riverside Drive</span>
          </div>
        </section>

        {/* =========================================================
            FAQ
            ========================================================= */}
        <section className="faq-section">
          <div className="container">
            <div className="faq-layout">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="section-meta">Questions</span>
                <h2 className="section-title">Before you visit us.</h2>
              </motion.div>

              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.div
                      key={faq.q}
                      className="faq-item"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={index * 0.1}
                      variants={fadeStagger}
                    >
                      <button
                        type="button"
                        className="faq-trigger"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-q">{faq.q}</span>
                        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            className="faq-answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: quietEase }}
                          >
                            <p>{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist)
          ========================================================= */}
      <style>{`
        .contact-page {
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

        .gold-text { color: var(--gold-accent); }

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .body-text {
          margin: 24px 0 0 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        /* HERO */
        .contact-hero {
          background: var(--azure-deep);
          color: var(--white);
          padding: clamp(140px, 15vw, 180px) 0 clamp(80px, 10vw, 120px) 0;
        }

        .contact-hero-content {
          max-width: 800px;
        }

        .hero-title {
          margin: 0 0 24px 0;
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5.5rem);
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

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 32px;
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

        .btn-text-hero {
          color: var(--white);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .btn-text-hero:hover {
          color: var(--gold-accent);
        }

        /* INFO SECTION */
        .contact-info {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .info-intro {
          position: sticky;
          top: 120px;
        }

        .info-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .detail-block {
          display: flex;
          flex-direction: column;
          padding: 32px;
          background: var(--off-white);
          border: 1px solid var(--border-light);
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .detail-block:hover {
          background: var(--white);
        }

        .detail-meta {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .detail-title {
          margin: 0 0 8px 0;
          color: var(--azure-deep);
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
        }

        .detail-sub {
          margin: 0;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          line-height: 1.6;
        }

        .detail-cta {
          margin-top: 32px;
          color: var(--azure-main);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .detail-block:hover .detail-cta {
          color: var(--gold-accent);
        }

        /* FORM SECTION (Gallery Minimalist) */
        .contact-form-section {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--off-white);
        }

        .form-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .form-aside {
          position: sticky;
          top: 120px;
        }

        .privacy-note {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }

        .privacy-note .gold-rule {
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold-accent);
          margin-bottom: 16px;
        }

        .privacy-note p {
          margin: 0;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          line-height: 1.6;
        }

        .form-wrapper form {
          display: flex;
          flex-direction: column;
          gap: 60px; /* Strong architectural separation between steps */
        }

        .form-step {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .step-num {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .step-header h3 {
          margin: 0;
          color: var(--azure-deep);
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .input-group label {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* The true minimalist input */
        .min-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(21, 24, 42, 0.2);
          color: var(--text-dark);
          font-family: var(--font-body);
          font-size: 16px; /* Prevents iOS zoom */
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

        .form-submit-wrapper {
          margin-top: 24px;
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

        .btn-solid-submit:hover:not(:disabled) {
          background: var(--gold-accent);
          color: var(--azure-deep);
        }

        .btn-solid-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .status-message {
          margin-top: 16px;
          padding: 16px;
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.85rem;
          background: rgba(21, 24, 42, 0.05);
          color: var(--azure-deep);
        }

        /* MAP */
        .map-section {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 400px;
          background: var(--border-light);
        }

        .map-section iframe {
          filter: grayscale(1) contrast(1.1); /* Editorial B&W map */
        }

        .map-label {
          position: absolute;
          left: 0;
          bottom: 0;
          background: var(--azure-deep);
          color: var(--white);
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label-top {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .label-bottom {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
        }

        /* FAQ */
        .faq-section {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .faq-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .faq-list {
          border-top: 1px solid var(--border-light);
        }

        .faq-item {
          border-bottom: 1px solid var(--border-light);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          background: none;
          border: none;
          color: var(--azure-deep);
          cursor: pointer;
          text-align: left;
        }

        .faq-q {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 600;
          padding-right: 24px;
        }

        .faq-icon {
          color: var(--gold-accent);
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
          max-width: 600px;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .info-grid, .form-layout, .faq-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .info-intro, .form-aside {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding-top: 120px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .info-details-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .input-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .map-label {
            width: 100%;
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;