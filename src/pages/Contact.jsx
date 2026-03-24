

import React, { useState } from "react";

const faqs = [
  {
    q: "What is the payment plan for Riverside Azure?",
    a: "We offer flexible payment plans tailored for both local and international investors."
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. You can book a private site visit via WhatsApp or contact form."
  },
  {
    q: "Do you offer property management?",
    a: "Yes. We provide full-service property management including tenant sourcing."
  },
  {
    q: "Is this a good Airbnb investment?",
    a: "Yes. The location is optimized for high occupancy and short-term rental demand."
  }
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ padding: "100px 40px", color: "#fff" }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem" }}>Contact Our Team</h1>
        <p style={{ color: "#aaa" }}>
          Speak to our team and secure your unit today.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "80px"
      }}>

        {/* WhatsApp */}
        <div style={card}>
          <h3>WhatsApp</h3>
          <p style={muted}>Fastest way to reach us</p>
          <a
            href="https://wa.me/254796529997"
            target="_blank"
            rel="noreferrer"
            style={link}
          >
            Chat Now →
          </a>
        </div>

        {/* Sales */}
        <div style={card}>
          <h3>Email Sales</h3>
          <p style={muted}>Investment inquiries</p>
          <a href="mailto:info@riversideazure.com" style={link}>
            info@riversideazure.com
          </a>
        </div>

        {/* Visit */}
        <div style={card}>
          <h3>Visit Site</h3>
          <p style={muted}>Riverside Drive, Nairobi</p>
          <a
            href="https://maps.app.goo.gl/mpJWJq6jBALvGijU6"
            target="_blank"
            rel="noreferrer"
            style={link}
          >
            Open in Google Maps →
          </a>
        </div>

        {/* Call */}
        <div style={card}>
          <h3>Call Us</h3>
          <p style={muted}>Mon–Fri 8am–5pm</p>
          <a href="tel:+254796529997" style={link}>
            0796 529 997
          </a>
        </div>

      </div>

      {/* GOOGLE MAP EMBED */}
      <div style={{ marginBottom: "100px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.60477500888726!2d36.7973963187308!3d-1.270017329739098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17002d64b365%3A0xf5848f6948e54151!2sJNC%20Brothers!5e0!3m2!1sen!2ske!4v1774085453694!5m2!1sen!2ske"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        />
      </div>

      {/* CONTACT FORM */}
      <div style={{ maxWidth: "700px", margin: "0 auto 100px auto" }}>
        <h2 style={{ marginBottom: "20px" }}>Send a Message</h2>

        <div style={{ display: "grid", gap: "15px" }}>
          <input placeholder="Your Name" style={input} />
          <input placeholder="Email Address" style={input} />
          <textarea placeholder="Your Message" rows="5" style={input}></textarea>

          <button style={button}>
            Send Message
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #333",
              padding: "20px 0",
              cursor: "pointer"
            }}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <h4>{faq.q}</h4>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254796529997"
        target="_blank"
        rel="noreferrer"
        style={whatsappFloat}
      >
        💬
      </a>

    </section>
  );
};

/* STYLES */

const card = {
  border: "1px solid #222",
  padding: "25px",
  background: "#111"
};

const muted = {
  color: "#888",
  margin: "10px 0"
};

const link = {
  color: "gold",
  textDecoration: "none"
};

const input = {
  padding: "14px",
  background: "#111",
  border: "1px solid #333",
  color: "#fff",
  outline: "none"
};

const button = {
  padding: "14px",
  background: "gold",
  border: "none",
  fontWeight: "600",
  cursor: "pointer"
};

const whatsappFloat = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "#25D366",
  color: "#fff",
  padding: "15px",
  borderRadius: "50%",
  fontSize: "20px",
  textDecoration: "none"
};

export default Contact;