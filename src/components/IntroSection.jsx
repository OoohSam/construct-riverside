import React from "react";
import { motion } from "framer-motion";

function IntroSection() {
  /* =========================================================
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.25, 1, 0.5, 1]; // Smoother, less dramatic curve

  const fadeUp = {
    hidden: { opacity: 0, y: 15 }, // Very short travel distance
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: quietEase } 
    }
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 10 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: quietEase }
    })
  };

  return (
    <>
      <section className="intro-section">
        <div className="container">
          
          {/* =========================================================
              STRUCTURAL HEADER
              ========================================================= */}
          <motion.div 
            className="intro-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="intro-header-content">
              <span className="intro-eyebrow">Riverside · Nairobi</span>
              <span className="intro-number">01</span>
            </div>
            <div className="intro-divider" />
          </motion.div>

          {/* =========================================================
              SYMMETRICAL CONTENT GRID
              ========================================================= */}
          <div className="intro-grid">
            
            {/* Left Column: Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="intro-heading">
                A New Standard <br />
                of Modern Living.
              </h2>
            </motion.div>

            {/* Right Column: Clean Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.15}
              variants={fadeStagger}
              className="intro-copy"
            >
              <p className="intro-lead">
                Welcome to Riverside Azure — a refined collection of
                one, two and three-bedroom residences in one of Nairobi's
                most sought-after neighbourhoods.
              </p>

              <p className="intro-body">
                Located along Riverside Drive, the development places you
                minutes from Nairobi's key business districts, lifestyle
                destinations and cultural landmarks, while maintaining the
                privacy and calm of an exclusive residential address.
              </p>

              <p className="intro-body">
                Designed for contemporary city living, Riverside Azure
                brings together considered architecture, generous interiors
                and a carefully selected range of resident amenities.
              </p>
            </motion.div>
          </div>

          {/* =========================================================
              SPECIFICATION GRID (Gallery Style)
              ========================================================= */}
          <div className="intro-specs">
            {[
              { num: "01", text: "Riverside Address" },
              { num: "02", text: "Contemporary Design" },
              { num: "03", text: "Private Urban Living" }
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3 + (index * 0.1)} 
                variants={fadeStagger}
                className="intro-spec-item"
              >
                <div className="intro-spec-divider" />
                <div className="intro-spec-content">
                  <span className="intro-spec-number">{item.num}</span>
                  <span className="intro-spec-text">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* =========================================================
          STYLES (Gallery Minimalist Structure)
          ========================================================= */}
      <style>{`
        .intro-section {
          background: var(--white); /* Pure white for a gallery feel */
          color: var(--text-dark);
          padding: clamp(80px, 10vw, 160px) 0;
          overflow: hidden;
        }

        /* HEADER */
        .intro-header {
          margin-bottom: clamp(60px, 8vw, 100px);
        }

        .intro-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
        }

        .intro-eyebrow {
          color: var(--azure-main); /* Switched from gold to azure for a cleaner look */
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .intro-number {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .intro-divider {
          width: 100%;
          height: 1px;
          background: rgba(21, 24, 42, 0.1); /* Very subtle structural line */
        }

        /* THE GRID */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Perfect 50/50 split */
          gap: clamp(40px, 8vw, 120px);
          align-items: flex-start; /* Top alignment creates strict order */
        }

        .intro-heading {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem); /* Slightly scaled back for elegance */
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .intro-copy {
          max-width: 540px;
        }

        .intro-lead {
          margin: 0 0 32px 0; /* Clear spacing, no gold lines needed */
          font-family: var(--font-body); /* Changed to body font for a cleaner, modern look */
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 600;
          line-height: 1.6;
          color: var(--text-dark);
        }

        .intro-body {
          margin: 0 0 24px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        .intro-body:last-child {
          margin-bottom: 0;
        }

        /* SPECIFICATION GRID */
        .intro-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Perfect 3-column grid */
          gap: 40px;
          margin-top: clamp(80px, 10vw, 140px);
        }

        .intro-spec-item {
          display: flex;
          flex-direction: column;
        }

        .intro-spec-divider {
          width: 100%;
          height: 1px;
          background: rgba(21, 24, 42, 0.1);
          margin-bottom: 24px;
        }

        .intro-spec-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .intro-spec-number {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .intro-spec-text {
          color: var(--text-dark);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          
          .intro-heading {
            max-width: 600px;
          }
        }

        @media (max-width: 768px) {
          .intro-section {
            padding: 60px 0;
          }

          .intro-header {
            margin-bottom: 40px;
          }

          .intro-specs {
            grid-template-columns: 1fr; /* Stacks cleanly on mobile */
            gap: 0;
            margin-top: 64px;
          }

          .intro-spec-item {
            padding-bottom: 16px;
            margin-bottom: 16px;
          }
          
          .intro-spec-divider {
            display: none; /* Hide top divider on mobile... */
          }
          
          .intro-spec-content {
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(21, 24, 42, 0.1); /* ...and use bottom borders instead for list feel */
          }

          .intro-spec-item:last-child .intro-spec-content {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}

export default IntroSection;