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
              href="https://wa.me/254796529997"
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
            <a href="tel:+254796529997" style={styles.link}>
              0796 529 997
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
        href="https://wa.me/254796529997"
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
    padding: "96px 0 80px",
    color: "#fff",
  },

  header: {
    textAlign: "center",
    marginBottom: "56px",
    paddingTop: "20px",
  },

  heading: {
    fontSize: "clamp(2rem, 6vw, 3rem)",
    marginBottom: "12px",
    lineHeight: 1.15,
  },

  subheading: {
    color: "#aaa",
    fontSize: "clamp(0.95rem, 2.4vw, 1rem)",
    lineHeight: 1.6,
    maxWidth: "680px",
    margin: "0 auto",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "56px",
  },

  card: {
    border: "1px solid #222",
    padding: "22px",
    background: "#111",
    minHeight: "150px",
  },

  cardTitle: {
    fontSize: "1.15rem",
    marginBottom: "6px",
    lineHeight: 1.3,
  },

  muted: {
    color: "#888",
    margin: "10px 0 14px",
    lineHeight: 1.5,
    fontSize: "0.95rem",
  },

  link: {
    color: "var(--gold-accent)",
    textDecoration: "none",
    wordBreak: "break-word",
    lineHeight: 1.5,
  },

  mapWrap: {
    marginBottom: "72px",
    width: "100%",
    height: "380px",
    overflow: "hidden",
    border: "1px solid #222",
    borderRadius: "4px",
  },

  iframe: {
    border: 0,
    display: "block",
  },

  formSection: {
    maxWidth: "700px",
    margin: "0 auto 72px auto",
  },

  formTitle: {
    marginBottom: "20px",
    fontSize: "clamp(1.6rem, 4vw, 2rem)",
    lineHeight: 1.2,
  },

  formGrid: {
    display: "grid",
    gap: "14px",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
    outline: "none",
    minHeight: "50px",
  },

  textarea: {
    width: "100%",
    padding: "14px 16px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
    outline: "none",
    resize: "vertical",
    minHeight: "140px",
  },

  button: {
    padding: "14px 18px",
    background: "var(--gold-accent)",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    color: "#000",
    minHeight: "50px",
  },

  faqSection: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  faqTitle: {
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "clamp(1.6rem, 4vw, 2rem)",
    lineHeight: 1.2,
  },

  faqItem: {
    borderBottom: "1px solid #333",
    padding: "18px 0",
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
    lineHeight: 1.5,
    fontSize: "1rem",
    flex: 1,
  },

  faqToggle: {
    fontSize: "1.3rem",
    lineHeight: 1,
    color: "var(--gold-accent)",
    flexShrink: 0,
    marginTop: "2px",
  },

  faqAnswer: {
    color: "#aaa",
    marginTop: "10px",
    lineHeight: 1.7,
    paddingRight: "28px",
  },

  whatsappFloat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "#fff",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    fontSize: "24px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    zIndex: 999,
  },
};

export default Contact;