import React, { useState } from "react";

const AgentApply = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    agency: "",
    experience: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_category: "Agent Application",
      });
    }

    const message = `Agent Application:
Name: ${form.name}
Phone: ${form.phone}
Agency: ${form.agency}
Experience: ${form.experience}`;

    window.location.href = `https://wa.me/254700686666?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <p style={styles.eyebrow}>Sales Partner Opportunity</p>

        <h1 style={styles.title}>Apply as Sales Partner</h1>

        <p style={styles.subtitle}>
          Join Riverside Azure and represent one of Nairobi’s most promising
          new residential developments.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="Agency / Company (Optional)"
            value={form.agency}
            onChange={(e) => setForm({ ...form, agency: e.target.value })}
            style={styles.input}
          />

          <select
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
            style={styles.input}
          >
            <option value="">Experience Level</option>
            <option>New Agent</option>
            <option>1–2 Years</option>
            <option>3–5 Years</option>
            <option>5+ Years</option>
          </select>

          <button type="submit" style={styles.button}>
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default AgentApply;

const styles = {
  section: {
    minHeight: "100svh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(88px, 12vw, 120px) 18px 48px",
    background: `
      radial-gradient(circle at top right, rgba(11,95,147,0.28), transparent 34%),
      linear-gradient(180deg, #04395e 0%, #031b2f 45%, #021827 100%)
    `,
  },

  card: {
    width: "100%",
    maxWidth: "460px",
    background: `
      radial-gradient(circle at top right, rgba(243,193,66,0.12), transparent 30%),
      linear-gradient(180deg, rgba(6,43,70,0.88), rgba(2,17,31,0.96))
    `,
    border: "1px solid rgba(243,193,66,0.26)",
    boxShadow:
      "0 30px 80px rgba(0,0,0,0.42), 0 0 38px rgba(11,95,147,0.18)",
    padding: "clamp(24px, 6vw, 36px)",
    boxSizing: "border-box",
  },

  eyebrow: {
    color: "#f3c142",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontSize: "0.75rem",
    fontWeight: 800,
    margin: "0 0 12px",
  },

  title: {
    color: "#f7f4ec",
    fontSize: "clamp(2rem, 7vw, 2.6rem)",
    fontFamily: "var(--font-serif)",
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    margin: "0 0 14px",
  },

  subtitle: {
    color: "#c7d3dc",
    fontSize: "clamp(0.95rem, 3.6vw, 1rem)",
    lineHeight: 1.7,
    margin: "0 0 28px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    padding: "15px 14px",
    minHeight: "52px",
    background: "rgba(1,18,32,0.72)",
    border: "1px solid rgba(243,193,66,0.18)",
    color: "#f7f4ec",
    outline: "none",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },

  button: {
    marginTop: "8px",
    minHeight: "54px",
    background: "linear-gradient(135deg, #ffe08a, #f3c142, #dba832)",
    color: "#021827",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "15px",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow:
      "0 14px 34px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.24)",
  },
};