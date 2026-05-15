import React from "react";
import {
  Waves,
  Dumbbell,
  Sofa,
  Baby,
  Store,
  ShieldCheck,
  Camera,
  Building2
} from "lucide-react";


const Amenities = () => {
 const amenityGroups = [
  {
    label: "Lifestyle",
    items: [
      {
        title: "Swimming Pool",
        icon: Waves,
        desc: "A well-designed pool area offering relaxation, recreation, and added lifestyle appeal.",
      },
      {
        title: "Fully Equipped Gym",
        icon: Dumbbell,
        desc: "A modern fitness space designed to support everyday wellness and active living.",
      },
      {
        title: "Residents’ Lounge",
        icon: Sofa,
        desc: "A comfortable shared space for informal meetings, quiet moments, and resident interaction.",
      },
      {
        title: "Kids’ Playroom",
        icon: Baby,
        desc: "A dedicated indoor space for children, designed with comfort, safety, and family living in mind.",
      },
      {
        title: "Convenience Store",
        icon: Store,
        desc: "Everyday essentials within easy reach, adding practical value to modern urban living.",
      },
    ],
  },
  {
    label: "Security & Management",
    items: [
      {
        title: "Hotel-Styled Property Management",
        icon: Building2,
        desc: "Professional day-to-day management designed to support convenience, upkeep, and a refined residential experience.",
      },
      {
        title: "24-Hour Security",
        icon: ShieldCheck,
        desc: "Round-the-clock on-site security presence for greater peace of mind and controlled access.",
      },
      {
        title: "24-Hour CCTV Surveillance",
        icon: Camera,
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
                    <item.icon style={styles.icon} strokeWidth={1.8} />

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
          transform: translateY(-6px);
          border-color: var(--gold-accent);
          box-shadow: 0 22px 48px rgba(0,0,0,0.28);
        }

        @media (max-width: 980px) {
          .amenity-card:hover {
            transform: none;
          }
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
    background: `
      radial-gradient(circle at top right, rgba(11,95,147,0.18), transparent 32%),
      linear-gradient(180deg, #04395e 0%, #031b2f 46%, #021827 100%)
    `,
    padding: "clamp(78px, 10vw, 110px) 0",
  },

  header: {
    maxWidth: "760px",
    marginBottom: "54px",
    paddingRight: "12px",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontSize: "0.8rem",
    marginBottom: "14px",
    fontWeight: 800,
  },

  title: {
    fontSize: "clamp(2.1rem, 6vw, 3.1rem)",
    color: "var(--text-main)",
    marginBottom: "18px",
    lineHeight: 1.08,
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.03em",
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: "clamp(0.96rem, 2.5vw, 1.05rem)",
    lineHeight: 1.8,
    margin: 0,
    maxWidth: "680px",
  },

  groupsWrap: {
    display: "grid",
    gap: "52px",
  },

  groupBlock: {
    display: "grid",
    gap: "24px",
  },

  groupHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  groupLabel: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.82rem",
    fontWeight: 800,
    margin: 0,
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(243,193,66,0.4)",
    display: "inline-block",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "22px",
  },

  card: {
    padding: "26px",
    border: "1px solid rgba(243,193,66,0.12)",
    transition: "all 0.3s ease",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.56), rgba(2,17,31,0.82))",
    minHeight: "210px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
  },

icon: {
  width: "42px",
  height: "42px",
  color: "var(--gold-accent)",
  marginBottom: "18px",
  flexShrink: 0,
  padding: "8px",
  background:
    "linear-gradient(135deg, rgba(243,193,66,0.12), rgba(11,95,147,0.14))",
  border: "1px solid rgba(243,193,66,0.22)",
  boxShadow: "0 8px 18px rgba(243,193,66,0.12)",
},

  cardTitle: {
    color: "var(--text-main)",
    fontSize: "1.12rem",
    marginBottom: "12px",
    lineHeight: 1.35,
    fontFamily: "var(--font-serif)",
  },

  cardDesc: {
    color: "var(--text-muted)",
    fontSize: "0.94rem",
    lineHeight: 1.75,
    margin: 0,
  },
};