import React from "react";

const Amenities = () => {
  const items = [
    {
      title: "River-Facing Pool",
      desc: "Infinity edge swimming pool overlooking the green canopy.",
    },
    {
      title: "Residents' Lounge",
      desc: "Coffee shop and fully equipped business center.",
    },
    {
      title: "Sky Gym",
      desc: "State-of-the-art fitness center with panoramic views.",
    },
    {
      title: "Smart Access",
      desc: "Biometric entry, Video intercoms, and 24hr CCTV.",
    },
  ];

  return (
    <section className="reveal" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Curated for Control</h2>

          <p style={styles.subtitle}>
            Amenities designed not just for leisure, but for the efficient
            management of a high-performance life.
          </p>
        </div>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <div key={index} style={styles.card} className="amenity-card">
              <div style={styles.icon}></div>

              <h4 style={styles.cardTitle}>{item.title}</h4>

              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .amenity-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold-accent);
        }

        @media (max-width: 768px) {
          .amenity-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Amenities;

const styles = {
  section: {
    background: "var(--bg-card)",
    padding: "80px 0",
  },

  header: {
    maxWidth: "640px",
    marginBottom: "40px",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    color: "#fff",
    marginBottom: "16px",
    lineHeight: 1.2,
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.95rem, 2.2vw, 1rem)",
    lineHeight: 1.6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "22px",
    border: "1px solid #333",
    transition: "all 0.3s ease",
    background: "transparent",
    minHeight: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  icon: {
    width: "36px",
    height: "36px",
    background: "var(--gold-accent)",
    marginBottom: "16px",
  },

  cardTitle: {
    color: "#fff",
    fontSize: "1.1rem",
    marginBottom: "8px",
    lineHeight: 1.3,
  },

  cardDesc: {
    color: "var(--text-muted)",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
};