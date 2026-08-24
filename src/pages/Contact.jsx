import React, { useState } from "react";

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

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [form, setForm] = useState({
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
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "Contact Page",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus(
        "Thank you. Our sales team will contact you shortly."
      );

      setForm({
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
      });
    } catch (error) {
      console.error("Lead submission error:", error);

      setStatus(
        "We couldn't submit your details. Please contact us directly on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={styles.section}>
      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <div style={styles.header}>
          <p style={styles.eyebrow}>RIVERSIDE AZURE</p>

          <h1 style={styles.heading}>
            Let's Find Your
            <br />
            <span style={styles.goldText}>Perfect Home</span>
          </h1>

          <p style={styles.subheading}>
            Tell us a little about what you're looking for and our
            sales team will help you find the right opportunity at
            Riverside Azure.
          </p>
        </div>


        {/* =========================
            QUALIFIED LEAD FORM
        ========================== */}

        <div style={styles.formSection}>

          <div style={styles.formIntro}>
            <h2 style={styles.formTitle}>
              Speak With Our Sales Team
            </h2>

            <p style={styles.formDescription}>
              Complete the form below and we'll get back to you with
              availability, pricing and payment options.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* BASIC INFORMATION */}

            <div style={styles.formGroup}>

              <p style={styles.sectionLabel}>
                YOUR DETAILS
              </p>

              <div style={styles.twoColumn}>

                <div style={styles.field}>
                  <label style={styles.label}>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={styles.input}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>
                    WhatsApp / Phone *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                    required
                    style={styles.input}
                  />
                </div>

              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={styles.input}
                />
              </div>

            </div>


            {/* PROPERTY INTEREST */}

            <div style={styles.formGroup}>

              <p style={styles.sectionLabel}>
                YOUR PROPERTY INTEREST
              </p>

              <div style={styles.field}>
                <label style={styles.label}>
                  Which unit are you interested in? *
                </label>

                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">
                    Select a unit type
                  </option>

                  <option value="1 Bedroom">
                    1 Bedroom
                  </option>

                  <option value="2 Bedroom">
                    2 Bedroom
                  </option>

                  <option value="3 Bedroom">
                    3 Bedroom
                  </option>

                  <option value="Not Sure">
                    I'm not sure yet
                  </option>
                </select>
              </div>


              <div style={styles.field}>
                <label style={styles.label}>
                  What are you buying for? *
                </label>

                <div style={styles.optionGrid}>

                  {[
                    ["Own Use", "Own use"],
                    ["Investment", "Investment"],
                    ["Both", "Both"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      style={{
                        ...styles.optionCard,
                        ...(form.purpose === value
                          ? styles.optionCardActive
                          : {}),
                      }}
                    >
                      <input
                        type="radio"
                        name="purpose"
                        value={value}
                        checked={form.purpose === value}
                        onChange={handleChange}
                        required
                        style={styles.radio}
                      />

                      <span>{label}</span>
                    </label>
                  ))}

                </div>
              </div>

            </div>


            {/* INVESTMENT QUALIFICATION */}

            <div style={styles.formGroup}>

              <p style={styles.sectionLabel}>
                YOUR REQUIREMENTS
              </p>

              <div style={styles.field}>
                <label style={styles.label}>
                  Approximate budget
                </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">
                    Select your budget
                  </option>

                  <option value="Below KES 8M">
                    Below KES 8M
                  </option>

                  <option value="KES 8M - 10M">
                    KES 8M – 10M
                  </option>

                  <option value="KES 10M - 13M">
                    KES 10M – 13M
                  </option>

                  <option value="KES 13M - 16M">
                    KES 13M – 16M
                  </option>

                  <option value="KES 16M+">
                    KES 16M+
                  </option>

                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>


              <div style={styles.field}>
                <label style={styles.label}>
                  Preferred payment method
                </label>

                <select
                  name="paymentPlan"
                  value={form.paymentPlan}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">
                    Select payment method
                  </option>

                  <option value="Cash">
                    Full Cash
                  </option>

                  <option value="Installment">
                    Installment Plan
                  </option>

                  <option value="Mortgage">
                    Mortgage / Financing
                  </option>

                  <option value="Not Sure">
                    Not sure yet
                  </option>
                </select>
              </div>


              <div style={styles.field}>
                <label style={styles.label}>
                  When are you looking to purchase?
                </label>

                <select
                  name="timeframe"
                  value={form.timeframe}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">
                    Select timeframe
                  </option>

                  <option value="Immediately">
                    Immediately
                  </option>

                  <option value="Within 1-3 months">
                    Within 1–3 months
                  </option>

                  <option value="Within 3-6 months">
                    Within 3–6 months
                  </option>

                  <option value="Within 6-12 months">
                    Within 6–12 months
                  </option>

                  <option value="Just researching">
                    Just researching
                  </option>
                </select>
              </div>

            </div>


            {/* LOCATION */}

            <div style={styles.formGroup}>

              <p style={styles.sectionLabel}>
                A LITTLE MORE ABOUT YOU
              </p>

              <div style={styles.field}>
                <label style={styles.label}>
                  Where are you currently based?
                </label>

                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="">
                    Select location
                  </option>

                  <option value="Nairobi">
                    Nairobi
                  </option>

                  <option value="Other Kenya">
                    Other — Kenya
                  </option>

                  <option value="East Africa">
                    East Africa
                  </option>

                  <option value="United Kingdom">
                    United Kingdom
                  </option>

                  <option value="United States / Canada">
                    United States / Canada
                  </option>

                  <option value="Middle East">
                    Middle East
                  </option>

                  <option value="Other International">
                    Other — International
                  </option>
                </select>
              </div>


              <div style={styles.field}>
                <label style={styles.label}>
                  Anything else you'd like us to know?
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  style={styles.textarea}
                />
              </div>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              style={{
                ...styles.button,
                opacity: submitting ? 0.7 : 1,
                cursor: submitting
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              {submitting
                ? "Sending..."
                : "Speak With Our Sales Team →"}
            </button>


            {status && (
              <div
                style={{
                  ...styles.status,
                  color: status.startsWith("Thank")
                    ? "#9fe3b2"
                    : "#f4a6a6",
                }}
              >
                {status}
              </div>
            )}

            <p style={styles.privacy}>
              Your information is kept confidential and will only
              be used by the Riverside Azure sales team to respond
              to your inquiry.
            </p>

          </form>
        </div>


        {/* =========================
            DIRECT CONTACT
        ========================== */}

        <div style={styles.contactSection}>

          <div style={styles.contactHeader}>
            <p style={styles.eyebrow}>GET IN TOUCH</p>

            <h2 style={styles.contactTitle}>
              Prefer to speak directly?
            </h2>

            <p style={styles.contactDescription}>
              Our sales team is available to answer questions,
              arrange site visits and discuss available units.
            </p>
          </div>


          <div style={styles.cardsGrid}>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                WhatsApp
              </h3>

              <p style={styles.muted}>
                Fastest way to reach us
              </p>

              <a
                href="https://wa.me/254796529997"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                Chat With Sales →
              </a>
            </div>


            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Call Us
              </h3>

              <p style={styles.muted}>
                Mon–Fri · 8am–5pm
              </p>

              <a
                href="tel:+254796529997"
                style={styles.link}
              >
                0796 529 997
              </a>
            </div>


            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Email Sales
              </h3>

              <p style={styles.muted}>
                Investment inquiries
              </p>

              <a
                href="mailto:info@riversideazure.com"
                style={styles.link}
              >
                info@riversideazure.com
              </a>
            </div>


            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                Visit Site
              </h3>

              <p style={styles.muted}>
                Riverside Drive, Nairobi
              </p>

              <a
                href="https://maps.app.goo.gl/mpJWJq6jBALvGijU6"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                Open in Google Maps →
              </a>
            </div>

          </div>
        </div>


        {/* =========================
            MAP
        ========================== */}

        <div style={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.60477500888726!2d36.7973963187308!3d-1.270017329739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17002d64b365%3A0xf5848f6948e54151!2sJNC%20Brothers!5e0!3m2!1sen!2ske!4v1774085453694!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={styles.iframe}
            allowFullScreen=""
            loading="lazy"
            title="Riverside Azure location"
          />
        </div>


        {/* =========================
            FAQ
        ========================== */}

        <div style={styles.faqSection}>

          <h2 style={styles.faqTitle}>
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              style={styles.faqItem}
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            >
              <div style={styles.faqRow}>

                <h4 style={styles.faqQuestion}>
                  {faq.q}
                </h4>

                <span style={styles.faqToggle}>
                  {openIndex === index ? "−" : "+"}
                </span>

              </div>

              {openIndex === index && (
                <p style={styles.faqAnswer}>
                  {faq.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          FLOATING WHATSAPP
      ========================== */}

      <a
        href="https://wa.me/254796529997"
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappFloat}
        aria-label="Chat with Riverside Azure on WhatsApp"
      >
        <span style={styles.whatsappIcon}>💬</span>
      </a>

    </section>
  );
};


const styles = {

  section: {
    padding: "clamp(88px, 10vw, 120px) 0 80px",
    color: "var(--text-main)",
    background: `
      radial-gradient(
        circle at top right,
        rgba(11,95,147,0.22),
        transparent 34%
      ),
      linear-gradient(
        180deg,
        #04395e 0%,
        #031b2f 42%,
        #021827 100%
      )
    `,
  },

  header: {
    textAlign: "center",
    marginBottom: "46px",
    paddingTop: "20px",
  },

  eyebrow: {
    margin: "0 0 12px",
    color: "var(--gold-accent)",
    fontSize: "0.75rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },

  heading: {
    fontSize: "clamp(2.4rem, 7vw, 4.2rem)",
    marginBottom: "18px",
    lineHeight: 1.04,
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.035em",
    color: "var(--text-main)",
  },

  goldText: {
    color: "var(--gold-accent)",
  },

  subheading: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.98rem, 2.8vw, 1.08rem)",
    lineHeight: 1.75,
    maxWidth: "700px",
    margin: "0 auto",
  },

  formSection: {
    maxWidth: "820px",
    margin: "0 auto 80px",
    padding: "clamp(24px, 5vw, 46px)",
    border: "1px solid rgba(243,193,66,0.20)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.78), rgba(2,17,31,0.90))",
    boxShadow: "0 28px 80px rgba(0,0,0,0.25)",
  },

  formIntro: {
    marginBottom: "34px",
  },

  formTitle: {
    margin: "0 0 10px",
    fontSize: "clamp(1.9rem, 5vw, 2.5rem)",
    lineHeight: 1.15,
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
  },

  formDescription: {
    margin: 0,
    color: "var(--text-muted)",
    lineHeight: 1.7,
  },

  formGroup: {
    paddingBottom: "30px",
    marginBottom: "30px",
    borderBottom:
      "1px solid rgba(243,193,66,0.10)",
  },

  sectionLabel: {
    margin: "0 0 20px",
    color: "var(--gold-accent)",
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: "0.16em",
  },

  twoColumn: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
  },

  field: {
    display: "grid",
    gap: "8px",
    marginBottom: "16px",
  },

  label: {
    fontSize: "0.84rem",
    color: "var(--text-muted)",
    fontWeight: 600,
  },

  input: {
    width: "100%",
    padding: "15px 16px",
    background: "rgba(1,18,32,0.76)",
    border:
      "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    minHeight: "52px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  select: {
    width: "100%",
    padding: "15px 16px",
    background: "#031b2f",
    border:
      "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    minHeight: "52px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "15px 16px",
    background: "rgba(1,18,32,0.76)",
    border:
      "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
    fontSize: "16px",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  optionGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },

  optionCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    minHeight: "52px",
    padding: "0 14px",
    border:
      "1px solid rgba(243,193,66,0.14)",
    background: "rgba(1,18,32,0.55)",
    color: "var(--text-muted)",
    cursor: "pointer",
    boxSizing: "border-box",
  },

  optionCardActive: {
    border:
      "1px solid var(--gold-accent)",
    background:
      "rgba(243,193,66,0.08)",
    color: "var(--text-main)",
  },

  radio: {
    accentColor: "var(--gold-accent)",
  },

  button: {
    width: "100%",
    padding: "16px 20px",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    border:
      "1px solid rgba(255,255,255,0.14)",
    fontWeight: 800,
    cursor: "pointer",
    color: "var(--azure-deep)",
    minHeight: "56px",
    fontSize: "0.95rem",
    boxShadow:
      "0 14px 34px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.24)",
  },

  status: {
    marginTop: "18px",
    textAlign: "center",
    fontSize: "0.92rem",
    lineHeight: 1.6,
  },

  privacy: {
    margin: "16px auto 0",
    maxWidth: "600px",
    textAlign: "center",
    color: "rgba(255,255,255,0.45)",
    fontSize: "0.75rem",
    lineHeight: 1.6,
  },

  contactSection: {
    marginBottom: "60px",
  },

  contactHeader: {
    textAlign: "center",
    maxWidth: "650px",
    margin: "0 auto 34px",
  },

  contactTitle: {
    margin: "0 0 12px",
    fontSize: "clamp(1.9rem, 5vw, 2.5rem)",
    lineHeight: 1.15,
    fontFamily: "var(--font-serif)",
    color: "var(--text-main)",
  },

  contactDescription: {
    margin: 0,
    color: "var(--text-muted)",
    lineHeight: 1.7,
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  card: {
    border:
      "1px solid rgba(243,193,66,0.16)",
    padding: "24px",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.72), rgba(2,17,31,0.82))",
    minHeight: "150px",
    boxShadow:
      "0 18px 40px rgba(0,0,0,0.18)",
  },

  cardTitle: {
    fontSize: "1.15rem",
    margin: "0 0 6px",
    lineHeight: 1.3,
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
  },

  muted: {
    color: "var(--text-muted)",
    margin: "10px 0 14px",
    lineHeight: 1.6,
    fontSize: "0.95rem",
  },

  link: {
    color: "var(--gold-accent)",
    textDecoration: "none",
    wordBreak: "break-word",
    lineHeight: 1.5,
    fontWeight: 700,
  },

  mapWrap: {
    marginBottom: "72px",
    width: "100%",
    height: "clamp(300px, 52vw, 420px)",
    overflow: "hidden",
    border:
      "1px solid rgba(243,193,66,0.14)",
    borderRadius: "4px",
    boxShadow:
      "0 24px 60px rgba(0,0,0,0.24)",
  },

  iframe: {
    border: 0,
    display: "block",
  },

  faqSection: {
    maxWidth: "860px",
    margin: "0 auto",
  },

  faqTitle: {
    textAlign: "center",
    marginBottom: "34px",
    fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
    lineHeight: 1.15,
    fontFamily: "var(--font-serif)",
    color: "var(--text-main)",
  },

  faqItem: {
    borderBottom:
      "1px solid rgba(243,193,66,0.12)",
    padding: "20px 0",
    cursor: "pointer",
  },

  faqRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
  },

  faqQuestion: {
    margin: 0,
    lineHeight: 1.6,
    fontSize: "1rem",
    flex: 1,
    color: "var(--text-main)",
  },

  faqToggle: {
    fontSize: "1.4rem",
    lineHeight: 1,
    color: "var(--gold-accent)",
    flexShrink: 0,
    marginTop: "2px",
    fontWeight: 700,
  },

  faqAnswer: {
    color: "var(--text-muted)",
    marginTop: "10px",
    lineHeight: 1.75,
    paddingRight: "28px",
  },

  whatsappFloat: {
    position: "fixed",
    bottom: "18px",
    right: "18px",
    background:
      "linear-gradient(135deg, #25D366, #1ebc59)",
    color: "#fff",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    fontSize: "24px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 10px 28px rgba(0,0,0,0.28)",
    zIndex: 999,
  },

  whatsappIcon: {
    lineHeight: 1,
  },
};

export default Contact;