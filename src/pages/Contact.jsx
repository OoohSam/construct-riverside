import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "../components/Seo";

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
      {/* SEO: align the contact page with buyer enquiries and direct sales intent. */}
      <Seo
        title="Contact Riverside Azure | Apartments in Riverside Nairobi"
        description="Contact the Riverside Azure team for apartment availability, pricing, floor plans, site visits and enquiries at 25 Riverside Drive, Nairobi."
        canonicalPath="/contact"
        ogTitle="Contact Riverside Azure | Apartments in Riverside Nairobi"
        ogDescription="Speak with the Riverside Azure sales team about pricing, availability, site visits and apartment enquiries in Nairobi."
      />

      <main className="contact-page">
        {/* =========================================================
            HERO (Editorial Typography)
            ========================================================= */}
        <section className="hero-editorial">
          <div className="container hero-text-wrapper">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Riverside · Nairobi
              </motion.span>
              <motion.h1 className="heading-xl" variants={fadeUp}>
                Begin a <br />
                <span className="text-muted">conversation.</span>
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeUp}>
                Tell us what you are looking for and our sales team will help you explore 
                the residences, pricing, and payment options available at Riverside Azure.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <a href="#enquiry" className="btn-solid">
                  Make an Enquiry
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-minimal">
                  WhatsApp Sales <span className="arrow-icon">⟶</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            DIRECT CONTACT INFO
            ========================================================= */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="editorial-grid">
              
              {/* Left: Intro */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="col-left sticky-col"
              >
                <span className="eyebrow">Get In Touch</span>
                <h2 className="heading-large">Your next address starts here.</h2>
                <p className="body-standard text-muted">
                  Whether you are buying for yourself, your family, or as an investment, 
                  our team can guide you through the development. Ask us about available residences, 
                  current pricing, or arranging a private visit.
                </p>
              </motion.div>

              {/* Right: Architectural Grid of Contact Details */}
              <div className="col-right info-details-grid">
                {[
                  { num: "01", label: "WhatsApp", title: "Chat with Sales", link: whatsappUrl, cta: "Start a conversation ⟶" },
                  { num: "02", label: "Phone", title: "0796 529 997", link: "tel:+254796529997", cta: "Call the sales team ⟶", sub: "Mon–Fri · 8am–5pm" },
                  { num: "03", label: "Email", title: "Email Sales", link: "mailto:info@riversideazure.com", cta: "info@riversideazure.com ⟶" },
                  { num: "04", label: "Location", title: "25 Riverside Drive", link: "https://maps.app.goo.gl/mpJWJq6jBALvGijU6", cta: "Open in Google Maps ⟶", sub: "Riverside, Nairobi" }
                ].map((item, index) => (
                  <motion.a
                    key={item.num}
                    href={item.link}
                    target={item.label === "Email" || item.label === "Phone" ? "_self" : "_blank"}
                    rel={item.label === "Email" || item.label === "Phone" ? "" : "noreferrer"}
                    className="contact-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index * 0.15}
                    variants={fadeStagger}
                  >
                    <span className="card-meta"><span className="text-gold">{item.num}</span> / {item.label}</span>
                    <h3 className="heading-medium">{item.title}</h3>
                    {item.sub && <p className="body-small text-muted">{item.sub}</p>}
                    <span className="card-cta">{item.cta}</span>
                  </motion.a>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* =========================================================
            ENQUIRY FORM (Concierge Style)
            ========================================================= */}
        <section id="enquiry" className="section-padding">
          <div className="container">
            <div className="editorial-grid">
              
              {/* Form Sticky Header */}
              <motion.div
                className="col-left sticky-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="sticky-content">
                  <span className="eyebrow">Private Enquiry</span>
                  <h2 className="heading-large">Tell us what you're looking for.</h2>
                  <p className="body-standard text-muted">
                    A few details help our team prepare the right information before we contact you.
                  </p>
                  <div className="privacy-note">
                    <span className="gold-rule" />
                    <p className="body-standard text-muted">Your information remains confidential and is used only to respond to your Riverside Azure enquiry.</p>
                  </div>
                </div>
              </motion.div>

              {/* The Minimalist Form */}
              <motion.div
                className="col-right form-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
              >
                <form onSubmit={handleSubmit} className="concierge-form">
                  
                  {/* Step 1 */}
                  <div className="form-step">
                    <div className="step-header">
                      <span className="step-num">01</span>
                      <h3 className="heading-small">Your Details</h3>
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
                      <h3 className="heading-small">Property Interest</h3>
                    </div>
                    <div className="input-grid">
                      <div className="input-group">
                        <label htmlFor="interest">Residence of Interest *</label>
                        <div className="select-wrapper">
                          <select id="interest" name="interest" value={form.interest} onChange={handleChange} required className="min-input select-input">
                            <option value="" disabled>Select a unit type</option>
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
                          <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange} required className="min-input select-input">
                            <option value="" disabled>Select purpose</option>
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
                      <h3 className="heading-small">Requirements</h3>
                    </div>
                    <div className="input-grid">
                      <div className="input-group">
                        <label htmlFor="budget">Approximate Budget</label>
                        <div className="select-wrapper">
                          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="min-input select-input">
                            <option value="" disabled>Select budget</option>
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
                          <select id="timeframe" name="timeframe" value={form.timeframe} onChange={handleChange} className="min-input select-input">
                            <option value="" disabled>Select timeframe</option>
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
                    <button type="submit" disabled={submitting} className="btn-solid submit-btn">
                      {submitting ? "Sending..." : "Submit Enquiry"} <span className="arrow-icon">⟶</span>
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
            <span className="eyebrow text-gold">RIVERSIDE · NAIROBI</span>
            <span className="heading-medium text-white mb-0">25 Riverside Drive</span>
          </div>
        </section>

        {/* =========================================================
            FAQ
            ========================================================= */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="editorial-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="col-left"
              >
                <span className="eyebrow">Questions</span>
                <h2 className="heading-large">Before you visit us.</h2>
              </motion.div>

              <div className="col-right faq-list">
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
                        className={`faq-trigger ${isOpen ? "active" : ""}`}
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
                            transition={{ duration: 0.4, ease: elegantEase }}
                          >
                            <p className="body-standard text-muted">{faq.a}</p>
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
          STYLES (Simplistic, Stylish, Azure & Gold)
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --color-bg: #FCFCFC;
          --color-bg-alt: #F3F3F3;
          --color-azure: #111A55;   /* Deep Azure Blue */
          --color-gold: #C5A059;    /* Elegant Gold */
          --color-text-main: #111111;
          --color-text-muted: #767676;
          --color-border: #E5E5E5;
          --font-sans: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .contact-page {
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
        .bg-light { background: var(--color-bg-alt); }
        .mb-0 { margin-bottom: 0 !important; }

        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold); 
          margin-bottom: 1rem;
        }

        .heading-xl, .heading-large, .heading-medium, .heading-small {
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
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }

        .heading-small {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.3;
          margin: 0;
        }

        .body-standard {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .body-small {
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .section-padding {
          padding: clamp(80px, 15vw, 160px) 0;
        }

        /* HERO EDITORIAL */
        .hero-editorial {
          padding-top: clamp(150px, 20vh, 220px);
          padding-bottom: clamp(60px, 10vh, 100px);
          border-bottom: 1px solid var(--color-border);
        }

        .hero-text-wrapper {
          max-width: 900px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 0 3rem 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        /* BUTTONS */
        .btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .btn-solid:hover:not(:disabled) {
          background: var(--color-gold);
          color: var(--color-azure);
          transform: translateY(-2px);
        }
        
        .btn-solid:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .btn-minimal {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          color: var(--color-azure); 
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 10px 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .arrow-icon {
          font-size: 1.5em;
          font-weight: 300;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-minimal:hover {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        .btn-minimal:hover .arrow-icon {
          transform: translateX(10px);
        }

        /* EDITORIAL GRID */
        .editorial-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }
        
        .sticky-col {
          position: sticky;
          top: 120px;
        }

        /* DIRECT CONTACT CARDS */
        .info-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-card:hover {
          background: var(--color-bg-alt);
          transform: translateY(-5px);
          border-color: var(--color-gold);
          box-shadow: 0 10px 30px rgba(17, 26, 85, 0.05);
        }

        .card-meta {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .card-cta {
          margin-top: 2rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-azure);
          transition: color 0.3s ease;
        }

        .contact-card:hover .card-cta {
          color: var(--color-gold);
        }

        /* ENQUIRY FORM */
        .privacy-note {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        .gold-rule {
          display: block;
          width: 40px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.5rem;
        }

        .concierge-form {
          display: flex;
          flex-direction: column;
          gap: 4rem; 
        }

        .form-step {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .step-num {
          color: var(--color-gold);
          font-weight: 600;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 1.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .input-group label {
          color: var(--color-text-muted);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
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
          bottom: 12px;
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

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          text-align: center;
          font-weight: 500;
          background: rgba(197, 160, 89, 0.1); /* Light gold background */
          color: var(--color-azure);
          border: 1px solid var(--color-gold);
        }

        /* MAP SECTION */
        .map-section {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 400px;
          background: var(--color-border);
        }

        .map-section iframe {
          /* Premium moody grayscale look */
          filter: grayscale(1) contrast(1.1) brightness(0.9); 
        }

        .map-label {
          position: absolute;
          left: 0;
          bottom: 0;
          background: var(--color-azure);
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
        }

        /* FAQ SECTION */
        .faq-list {
          border-top: 1px solid var(--color-border);
        }

        .faq-item {
          border-bottom: 1px solid var(--color-border);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          background: none;
          border: none;
          color: var(--color-azure);
          cursor: pointer;
          text-align: left;
          transition: color 0.3s ease;
        }
        
        .faq-trigger:hover, .faq-trigger.active {
          color: var(--color-gold);
        }

        .faq-q {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          padding-right: 2rem;
        }

        .faq-icon {
          color: var(--color-gold);
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding-bottom: 2rem;
          margin: 0;
          max-width: 600px;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .sticky-col {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-editorial {
            padding-top: 120px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
          .info-details-grid {
            grid-template-columns: 1fr;
          }
          .input-grid {
            grid-template-columns: 1fr;
          }
          .map-label {
            width: 100%;
            padding: 2rem;
          }
          .faq-trigger {
            padding: 1.5rem 0;
          }
          .faq-q {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;