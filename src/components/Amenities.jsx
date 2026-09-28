import React from "react";
import {
  Waves,
  Dumbbell,
  Sofa,
  Baby,
  Store,
  ShieldCheck,
  Camera,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const amenityGroups = [
  {
    number: "01",
    label: "Lifestyle",
    intro: "Spaces designed to make everyday life more comfortable, connected, and considered.",
    items: [
      {
        number: "01",
        title: "Swimming Pool",
        icon: Waves,
        desc: "A well-designed pool area offering relaxation, recreation, and added lifestyle appeal.",
      },
      {
        number: "02",
        title: "Fully Equipped Gym",
        icon: Dumbbell,
        desc: "A modern fitness space designed to support everyday wellness and active living.",
      },
      {
        number: "03",
        title: "Residents’ Lounge",
        icon: Sofa,
        desc: "A comfortable shared space for informal meetings, quiet moments, and resident interaction.",
      },
      {
        number: "04",
        title: "Kids’ Playroom",
        icon: Baby,
        desc: "A dedicated indoor space for children, designed with comfort, safety, and family living in mind.",
      },
      {
        number: "05",
        title: "Convenience Store",
        icon: Store,
        desc: "Everyday essentials within easy reach, adding practical value to modern urban living.",
      },
    ],
  },
  {
    number: "02",
    label: "Security & Management",
    intro: "Professional services and considered security measures supporting peace of mind.",
    items: [
      {
        number: "01",
        title: "Hotel-Styled Property Management",
        icon: Building2,
        desc: "Professional day-to-day management designed to support convenience, upkeep, and a refined residential experience.",
      },
      {
        number: "02",
        title: "24-Hour Security",
        icon: ShieldCheck,
        desc: "Round-the-clock on-site security presence for greater peace of mind and controlled access.",
      },
      {
        number: "03",
        title: "24-Hour CCTV Surveillance",
        icon: Camera,
        desc: "Continuous monitored surveillance across key common areas and entry points.",
      },
    ],
  },
];

const Amenities = () => {
  /* =========================================================
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: quietEase } }
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 15 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: quietEase }
    })
  };

  return (
    <>
      <section className="amenities-section">
        <div className="container">
          
          {/* =========================================================
              STRUCTURAL HEADER
              ========================================================= */}
          <motion.header 
            className="amenities-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="header-top">
              <span className="section-number">03</span>
              <span className="section-eyebrow">The Riverside Experience</span>
            </div>
            
            <div className="header-bottom">
              <h2 className="section-title">
                Curated for<br />
                Modern Living.
              </h2>
              <div className="header-copy">
                <p>
                  Riverside Azure brings together a considered collection of spaces 
                  and services designed around the way modern residents live.
                </p>
                <div className="header-rule" />
                <p className="header-location">
                  25 Riverside Drive<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </motion.header>

          {/* =========================================================
              AMENITY GROUPS (Architectural List)
              ========================================================= */}
          <div className="amenity-groups">
            {amenityGroups.map((group) => (
              <motion.div
                key={group.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="amenity-group"
              >
                {/* Left Column: Group Info */}
                <div className="group-info">
                  <span className="group-number">{group.number}</span>
                  <h3 className="group-label">{group.label}</h3>
                  <p className="group-intro">{group.intro}</p>
                </div>

                {/* Right Column: Items */}
                <div className="group-list">
                  {group.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={index * 0.1}
                        variants={fadeStagger}
                        className="amenity-item"
                      >
                        <div className="item-meta">
                          <span className="item-number">{item.number}</span>
                          <Icon className="item-icon" strokeWidth={1.5} />
                        </div>
                        <div className="item-content">
                          <h4 className="item-title">{item.title}</h4>
                          <p className="item-desc">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          STYLES (High Contrast + New Typography)
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --white: #FFFFFF;
          --off-white: #F4F4F4; /* Deepened off-white slightly to pop inner elements */
          --text-dark: #111111;
          --text-dark-soft: #444444; /* Darkened for much higher contrast reading */
          --azure-main: #1A2875;
          --azure-deep: #111A55;
          --gold-accent: #C5A059;
          --border-light: #DDDDDD; /* Darkened borders for clear structure */
          
          --font-body: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .amenities-section {
          background: var(--off-white);
          color: var(--text-dark);
          padding: clamp(100px, 12vw, 160px) 0;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* HEADER */
        .amenities-header {
          margin-bottom: clamp(80px, 10vw, 140px);
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 40px;
        }

        .section-number {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .section-eyebrow {
          color: var(--azure-deep); /* Use deepest azure for punchy header */
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .header-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: start;
        }

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(3rem, 5.5vw, 5rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--azure-deep);
        }

        .header-copy p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-dark);
          max-width: 480px;
        }

        .header-rule {
          width: 50px; /* Made line slightly longer for balance */
          height: 2px; /* Thicker rule for contrast */
          background: var(--gold-accent); /* Make it pop in gold */
          margin: 32px 0;
        }

        .header-location {
          font-family: var(--font-body);
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.15em !important;
          text-transform: uppercase;
          color: var(--text-dark-soft) !important;
        }

        /* GROUPS */
        .amenity-groups {
          display: flex;
          flex-direction: column;
          gap: clamp(80px, 10vw, 120px);
        }

        .amenity-group {
          display: grid;
          grid-template-columns: minmax(300px, 0.6fr) 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: start;
        }

        .group-info {
          position: sticky;
          top: 120px; 
        }

        .group-number {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 16px;
        }

        .group-label {
          margin: 0 0 24px 0;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.1;
          color: var(--azure-deep);
        }

        .group-intro {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-dark-soft);
          max-width: 380px;
        }

        /* ITEMS LIST */
        .group-list {
          border-top: 1px solid var(--border-light);
        }

        .amenity-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 32px;
          padding: 32px 0;
          border-bottom: 1px solid var(--border-light);
          align-items: start;
          transition: background-color 0.4s ease, padding-left 0.4s ease;
        }

        .amenity-item:hover {
          background-color: var(--white); 
          padding-left: 16px;
          border-color: transparent; /* Seamless hover */
          box-shadow: inset 0 -1px 0 var(--border-light); /* Maintain the line visually beneath the hover */
        }

        .item-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .item-number {
          color: var(--gold-accent); /* Boosted contrast from grey to gold */
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .item-icon {
          width: 36px; /* Slightly larger icon */
          height: 36px;
          color: var(--azure-deep); /* Switched to deepest blue for high contrast punch */
        }

        .item-content {
          max-width: 500px;
        }

        .item-title {
          margin: 0 0 12px 0;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--text-dark);
        }

        .item-desc {
          margin: 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-dark-soft); /* Darkened text-dark-soft applied here */
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 992px) {
          .header-bottom, .amenity-group {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          
          .group-info {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .amenities-section {
            padding: 80px 0;
          }

          .section-title {
            font-size: clamp(2.5rem, 10vw, 3.5rem);
          }

          .amenity-groups {
            gap: 80px;
          }

          .amenity-item {
            grid-template-columns: 48px 1fr;
            gap: 20px;
            padding: 24px 0;
          }

          .amenity-item:hover {
            padding-left: 0; 
            background-color: transparent;
            box-shadow: none;
          }

          .item-icon {
            width: 28px;
            height: 28px;
          }

          .item-title {
            font-size: 1.25rem;
            margin-bottom: 8px;
          }

          .item-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Amenities;