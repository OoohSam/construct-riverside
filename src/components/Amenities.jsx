import React from "react";

const Amenities = () => {
  const amenityGroups = [
    {
      label: "Lifestyle",
      items: [
        {
          title: "Swimming Pool",
          desc: "A well-designed pool area offering relaxation, recreation, and added lifestyle appeal.",
        },
        {
          title: "Fully Equipped Gym",
          desc: "A modern fitness space designed to support everyday wellness and active living.",
        },
        {
          title: "Residents’ Lounge",
          desc: "A comfortable shared space for informal meetings, quiet moments, and resident interaction.",
        },
        {
          title: "Kids’ Playroom",
          desc: "A dedicated indoor space for children, designed with comfort, safety, and family living in mind.",
        },
        {
          title: "Convenience Store",
          desc: "Everyday essentials within easy reach, adding practical value to modern urban living.",
        },
      ],
    },
    {
      label: "Security & Management",
      items: [
        {
          title: "Hotel-Styled Property Management",
          desc: "Professional day-to-day management designed to support convenience, upkeep, and a refined residential experience.",
        },
        {
          title: "24-Hour Security",
          desc: "Round-the-clock on-site security presence for greater peace of mind and controlled access.",
        },
        {
          title: "24-Hour CCTV Surveillance",
          desc: "Continuous monitored surveillance across key common areas and entry points.",
        },
      ],
    },
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <p style={styles.eyebrow}>Lifestyle Amenities</p>

          <h2 style={styles.title}>Curated for Modern Living</h2>

          <p style={styles.subtitle}>
            Thoughtfully selected amenities designed to support comfort,
            convenience, security, and the everyday experience of living at
            Riverside Azure.
          </p>
        </div>

        <div style={styles.groupsWrap}>
          {amenityGroups.map((group, groupIndex) => (
            <div key={groupIndex} style={styles.groupBlock}>
              <div style={styles.groupHeader}>
                <p style={styles.groupLabel}>{group.label}</p>
              </div>

              <div style={styles.grid}>
                {group.items.map((item, index) => (
                  <div
                    key={`${group.label}-${index}`}
                    style={styles.card}
                    className="amenity-card"
                  >
                    <div style={styles.icon} />

                    <h4 style={styles.cardTitle}>{item.title}</h4>

                    <p style={styles.cardDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .amenity-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold-accent);
          box-shadow: 0 16px 36px rgba(0,0,0,0.22);
        }

        @media (max-width: 768px) {
          .amenity-card:hover {
            transform: none;
            box-shadow: none;
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
    padding: "88px 0",
  },

  header: {
    maxWidth: "760px",
    marginBottom: "48px",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: "0.8rem",
    marginBottom: "12px",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 2.7rem)",
    color: "#fff",
    marginBottom: "16px",
    lineHeight: 1.15,
    fontFamily: "var(--font-serif)",
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.95rem, 2.2vw, 1rem)",
    lineHeight: 1.7,
    margin: 0,
  },

  groupsWrap: {
    display: "grid",
    gap: "42px",
  },

  groupBlock: {
    display: "grid",
    gap: "22px",
  },

  groupHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  groupLabel: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.82rem",
    margin: 0,
    paddingBottom: "6px",
    borderBottom: "1px solid rgba(212,175,55,0.35)",
    display: "inline-block",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "24px",
    border: "1px solid #2f2f2f",
    transition: "all 0.3s ease",
    background: "rgba(255,255,255,0.01)",
    minHeight: "190px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  icon: {
    width: "38px",
    height: "38px",
    background: "var(--gold-accent)",
    marginBottom: "18px",
    flexShrink: 0,
  },

  cardTitle: {
    color: "#fff",
    fontSize: "1.08rem",
    marginBottom: "10px",
    lineHeight: 1.35,
  },

  cardDesc: {
    color: "var(--text-muted)",
    fontSize: "0.92rem",
    lineHeight: 1.6,
    margin: 0,
  },
};