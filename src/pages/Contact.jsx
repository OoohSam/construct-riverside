import React, { useState } from "react";

const faqs = [
  {
    q: "What is the payment plan for Riverside Azure?",
    a: "We offer flexible payment plans tailored for both local and international investors.",
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. You can book a private site visit via WhatsApp or contact form.",
  },
  {
    q: "Do you offer property management?",
    a: "Yes. We provide full-service property management including tenant sourcing.",
  },
  {
    q: "Is this a good Airbnb investment?",
    a: "Yes. The location is optimized for high occupancy and short-term rental demand.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h1 style={styles.heading}>Contact Our Team</h1>
          <p style={styles.subheading}>
            Speak to our team and secure your unit today.
          </p>
        </div>

        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>WhatsApp</h3>
            <p style={styles.muted}>Fastest way to reach us</p>
            <a
              href="https://wa.me/254700686666"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              Chat Now →
            </a>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Email Sales</h3>
            <p style={styles.muted}>Investment inquiries</p>
            <a href="mailto:info@riversideazure.com" style={styles.link}>
              info@riversideazure.com
            </a>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Visit Site</h3>
            <p style={styles.muted}>Riverside Drive, Nairobi</p>
            <a
              href="https://maps.app.goo.gl/mpJWJq6jBALvGijU6"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              Open in Google Maps →
            </a>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Call Us</h3>
            <p style={styles.muted}>Mon–Fri 8am–5pm</p>
            <a href="tel:+254700686666" style={styles.link}>
              0700 686 666
            </a>
          </div>
        </div>

        <div style={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.60477500888726!2d36.7973963187308!3d-1.270017329739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17002d64b365%3A0xf5848f6948e54151!2sJNC%20Brothers!5e0!3m2!1sen!2ske!4v1774085453694!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={styles.iframe}
            allowFullScreen=""
            loading="lazy"
            title="map"
          />
        </div>

        <div style={styles.formSection}>
          <h2 style={styles.formTitle}>Send a Message</h2>

          <div style={styles.formGrid}>
            <input placeholder="Your Name" style={styles.input} />
            <input placeholder="Email Address" style={styles.input} />
            <textarea
              placeholder="Your Message"
              rows="5"
              style={styles.textarea}
            />
            <button style={styles.button}>Send Message</button>
          </div>
        </div>

        <div style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              style={styles.faqItem}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div style={styles.faqRow}>
                <h4 style={styles.faqQuestion}>{faq.q}</h4>
                <span style={styles.faqToggle}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p style={styles.faqAnswer}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/254700686666"
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappFloat}
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </section>
  );
};

const styles = {
  section: {
    padding: "clamp(88px, 10vw, 120px) 0 80px",
    color: "var(--text-main)",
    background: `
      radial-gradient(circle at top right, rgba(11,95,147,0.22), transparent 34%),
      linear-gradient(180deg, #04395e 0%, #031b2f 42%, #021827 100%)
    `,
  },

  header: {
    textAlign: "center",
    marginBottom: "56px",
    paddingTop: "20px",
  },

  heading: {
    fontSize: "clamp(2.2rem, 7vw, 3.4rem)",
    marginBottom: "14px",
    lineHeight: 1.08,
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.03em",
    color: "var(--text-main)",
  },

  subheading: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.98rem, 2.8vw, 1.08rem)",
    lineHeight: 1.7,
    maxWidth: "720px",
    margin: "0 auto",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "56px",
  },

  card: {
    border: "1px solid rgba(243,193,66,0.16)",
    padding: "24px",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.72), rgba(2,17,31,0.82))",
    minHeight: "160px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
  },

  cardTitle: {
    fontSize: "1.15rem",
    marginBottom: "6px",
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
    border: "1px solid rgba(243,193,66,0.14)",
    borderRadius: "4px",
    boxShadow: "0 24px 60px rgba(0,0,0,0.24)",
  },

  iframe: {
    border: 0,
    display: "block",
  },

  formSection: {
    maxWidth: "760px",
    margin: "0 auto 72px auto",
    padding: "clamp(24px, 4vw, 36px)",
    border: "1px solid rgba(243,193,66,0.14)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.56), rgba(2,17,31,0.72))",
  },

  formTitle: {
    marginBottom: "20px",
    fontSize: "clamp(1.8rem, 5vw, 2.3rem)",
    lineHeight: 1.15,
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
  },

  formGrid: {
    display: "grid",
    gap: "14px",
  },

  input: {
    width: "100%",
    padding: "15px 16px",
    background: "rgba(1,18,32,0.72)",
    border: "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    minHeight: "52px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "15px 16px",
    background: "rgba(1,18,32,0.72)",
    border: "1px solid rgba(243,193,66,0.16)",
    color: "var(--text-main)",
    outline: "none",
    resize: "vertical",
    minHeight: "150px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  button: {
    padding: "15px 18px",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    border: "1px solid rgba(255,255,255,0.14)",
    fontWeight: "800",
    cursor: "pointer",
    color: "var(--azure-deep)",
    minHeight: "54px",
    boxShadow:
      "0 14px 34px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.24)",
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
    borderBottom: "1px solid rgba(243,193,66,0.12)",
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
    boxShadow: "0 10px 28px rgba(0,0,0,0.28)",
    zIndex: 999,
  },
};

export default Contact;