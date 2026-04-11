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

    // Meta tracking
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

    window.location.href = `https://wa.me/254796529997?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>Apply as Sales Partner</h1>

        <p style={styles.subtitle}>
          Join Riverside Azure and earn from one of Nairobi’s most exciting new
          developments.
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
    background: "#0a0a0a",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },

  container: {
    width: "100%",
    maxWidth: "420px",
  },

  title: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: "30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    padding: "14px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
  },

  button: {
    background: "var(--gold-accent)",
    border: "none",
    padding: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },
};