import React, { useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

import fallbackImage from "../assets/hero/Front-View.webp";
import cityVideo from "../assets/Video/riverside-azure-construction-progress-nairobi-kenya.mp4";

const completedProjects = [
  {
    name: "Argyle Grand Hotel",
    type: "Hospitality",
    year: "Completed Development",
    website: "https://argylehotelkenya.ke/",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553059860.jpg?k=4a36f6c381244fa98507c9bc2c504838b4d6a1bc5344c30e3258b6de613adcde&o=",
    isVideo: false,
  },
  {
    name: "Apple Tree Apartments",
    type: "Residential",
    year: "Completed Development",
    website: "https://www.youtube.com/watch?v=aHcrVmcU8Qk",
    image: "https://img.youtube.com/vi/aHcrVmcU8Qk/hqdefault.jpg",
    isVideo: true,
  },
  {
    name: "Mango Tree Apartments",
    type: "Residential",
    year: "Completed Development",
    website: "https://www.youtube.com/watch?v=eH3c-SccjVA",
    image: "https://img.youtube.com/vi/eH3c-SccjVA/hqdefault.jpg",
    isVideo: true,
  },
  {
    name: "Jacaranda Gardens Apartments",
    type: "Residential",
    year: "Completed Development",
    website: "https://jacarandagardens.co.ke/",
    image: "https://images.prop24.com/vfh24rrvtwkwx7wodummvtp4xy/Crop600x400",
    isVideo: false,
  },
];

const developerPoints = [
  {
    number: "01",
    title: "Local Experience",
    text: "Active experience delivering hospitality and residential developments in Kenya.",
  },
  {
    number: "02",
    title: "Disciplined Execution",
    text: "A practical approach to construction, project coordination and quality control.",
  },
  {
    number: "03",
    title: "Long-Term Value",
    text: "Developments conceived around location, usability and lasting market appeal.",
  },
];

const About = () => {
  const [videoError, setVideoError] = useState(false);

  /* =========================================================
     GALLERY MOTION (Ultra Smooth & Slow)
     ========================================================= */
  const elegantEase = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: elegantEase },
    },
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: customDelay, ease: elegantEase },
    }),
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/riverside-azure-brochure-and-pricelist_compressed.pdf";
    link.download = "Riverside-Azure-Pricelist-and-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* SEO: provide route-specific metadata for the developer and project overview page. */}
      <Seo
        title="About Riverside Azure | Apartments on Riverside Drive, Nairobi"
        description="Learn about Riverside Azure, a premium residential development at 25 Riverside Drive in Nairobi, offering 1, 2 and 3-bedroom apartments for modern urban living."
        canonicalPath="/about"
        ogTitle="About Riverside Azure | Apartments on Riverside Drive, Nairobi"
        ogDescription="Learn about Riverside Azure, a premium residential development in Nairobi offering contemporary apartments by the Riverside Drive address."
      />

      <main className="about-page">
        {/* =====================================================
            HERO (Cinematic Video Background - Centered)
        ====================================================== */}
        <section className="hero-cinematic">
          {/* Background Video */}
          <div className="hero-bg">
            {!videoError ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={fallbackImage}
                onError={() => setVideoError(true)}
                className="hero-media"
              >
                <source src={cityVideo} type="video/mp4" />
              </video>
            ) : (
              <img
                src={fallbackImage}
                alt="Riverside Azure exterior"
                className="hero-media"
              />
            )}
            <div className="hero-overlay"></div>
          </div>

          <div className="container hero-content-container">
            <motion.div
              className="hero-text-wrapper"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.h1 className="heading-xl text-white" variants={fadeUp}>
                {/* 
                  These spans force the text to stay on one line each 
                  without breaking awkwardly, perfectly centered.
                */}
                <span className="title-line">Built on experience.</span>
                <span className="title-line text-gold">Designed for tomorrow.</span>
              </motion.h1>
              
              <motion.p
                className="hero-subtitle text-white-muted"
                variants={fadeUp}
              >
                Riverside Azure is the latest residential development from JNC
                Brothers &amp; Company Limited — bringing together local
                experience, contemporary design, and a considered approach to
                urban living.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPER STORY (Azure Deep Background - High Contrast)
        ====================================================== */}
        <section className="section-padding bg-azure">
          <div className="container">
            <div className="editorial-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="col-left"
              >
                <span className="eyebrow text-gold">The Developer</span>
                <h2 className="heading-large text-white">
                  JNC Brothers &amp; Co.
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1}
                variants={fadeStagger}
                className="col-right"
              >
                <p className="body-large text-white">
                  A Chinese-backed developer with established experience across
                  hospitality and residential projects in Kenya.
                </p>
                <p className="body-standard text-white-muted">
                  The company brings together international development
                  experience and a practical understanding of the Kenyan market.
                  Its projects are approached with an emphasis on disciplined
                  execution, functional design, and long-term value. Riverside
                  Azure represents the next expression of that approach.
                </p>
              </motion.div>
            </div>

            {/* Developer Pillars - Horizontal Grid for Wide Screens */}
            <div className="pillars-grid">
              {developerPoints.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.1 * index}
                  variants={fadeStagger}
                  className="pillar-card"
                >
                  <span className="pillar-num text-gold">{point.number}</span>
                  <h3 className="pillar-title text-white">{point.title}</h3>
                  <p className="pillar-text text-white-muted">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TRACK RECORD (Off-White Background - Gallery Flow)
        ====================================================== */}
        <section className="section-padding bg-off-white">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="section-header split-header"
            >
              <div>
                <span className="eyebrow">Track Record</span>
                <h2 className="heading-large text-azure">
                  Experience you can see.
                </h2>
              </div>
              <div className="header-stats">
                <span className="stat-number">
                  {String(completedProjects.length).padStart(2, "0")}
                </span>
                <span className="eyebrow">Completed</span>
              </div>
            </motion.div>

            <div className="projects-grid">
              {completedProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={0.1 * index}
                  variants={fadeStagger}
                  className="project-card"
                >
                  <div className="project-visual">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                    />
                    {project.isVideo && (
                      <div className="play-indicator">Watch Video</div>
                    )}
                  </div>
                  <div className="project-details">
                    <div className="project-meta">
                      <span className="project-category">{project.type}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <h3 className="project-name text-azure">{project.name}</h3>
                    <span className="btn-minimal">
                      {project.isVideo ? "Watch Now" : "View Project"}{" "}
                      <span className="arrow-icon">⟶</span>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BROCHURE CTA (Azure Background - Bold Closing)
        ====================================================== */}
        <section className="cta-section bg-azure">
          <div className="container text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="cta-wrapper"
            >
              <span className="eyebrow text-gold">Riverside Azure</span>
              <h2 className="heading-xl text-white">Explore the residences.</h2>
              <p className="hero-subtitle text-white-muted mb-large">
                Discover the floor plans, amenities, pricing, and investment
                opportunity in the complete Riverside Azure brochure.
              </p>
              <button onClick={downloadBrochure} className="btn-solid-gold">
                Download Brochure
                <span className="arrow-icon">⟶</span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --color-bg-white: #FCFCFC;
          --color-bg-off-white: #F4F4F4;
          --color-azure: #111A55;
          --color-gold: #C5A059;
          
          --color-text-main: #111111;
          --color-text-muted: #444444;
          --color-text-white: #FFFFFF;
          --color-text-white-muted: rgba(255, 255, 255, 0.75);
          
          --color-border-light: #DDDDDD;
          --color-border-dark: rgba(255, 255, 255, 0.15);
          
          --font-sans: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif; 
        }

        /* UTILITY CLASSES */
        .bg-white { background: var(--color-bg-white); }
        .bg-off-white { background: var(--color-bg-off-white); }
        .bg-azure { background: var(--color-azure); }
        
        .text-azure { color: var(--color-azure) !important; }
        .text-gold { color: var(--color-gold) !important; }
        .text-white { color: var(--color-text-white) !important; }
        .text-muted { color: var(--color-text-muted); }
        .text-white-muted { color: var(--color-text-white-muted) !important; }
        
        .mb-large { margin-bottom: 3rem !important; }

        .about-page {
          width: 100%;
          font-family: var(--font-sans);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* TYPOGRAPHY */
        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-azure); 
          margin-bottom: 1rem;
        }

        .bg-azure .eyebrow {
          color: var(--color-gold);
        }

        .heading-xl {
          font-family: var(--font-display);
          /* Adjusted font scaling so the non-breaking lines fit on small screens */
          font-size: clamp(2rem, 6vw, 5.5rem); 
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
          text-align: center;
        }

        /* Forces each sentence onto its own line and prevents awkward wrapping */
        .title-line {
          display: block;
          white-space: nowrap;
        }

        .heading-large {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.01em;
        }

        .heading-medium {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 400;
          margin: 0 0 1rem 0;
        }

        .body-large {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          line-height: 1.4;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .body-standard {
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .section-padding {
          padding: clamp(80px, 15vw, 180px) 0;
        }

        /* HERO CINEMATIC (Video + Overlay) */
        .hero-cinematic {
          position: relative;
          min-height: 85svh;
          display: flex;
          align-items: flex-end; 
          justify-content: center; 
          padding-top: 80px; 
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          background: var(--color-azure);
        }

        .hero-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            to top, 
            var(--color-azure) 0%, 
            rgba(17, 26, 85, 0.4) 30%, 
            rgba(17, 26, 85, 0) 60%
          );
        }

        .hero-content-container {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 30px; 
        }

        .hero-text-wrapper {
          max-width: 900px;
          text-align: center;
          margin: 0 auto;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          max-width: 650px;
          margin: 0 auto;
        }

        /* DEVELOPER GRID */
        .editorial-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(40px, 8vw, 100px);
          margin-bottom: clamp(60px, 10vw, 120px);
          align-items: start;
        }

        /* PILLARS (3-Column Grid) */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          border-top: 1px solid var(--color-border-dark);
          padding-top: 4rem;
        }

        .pillar-card {
          display: flex;
          flex-direction: column;
        }

        .pillar-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .pillar-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0 0 1rem 0;
        }

        .pillar-text {
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
        }

        /* TRACK RECORD SECTION */
        .split-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 2rem;
          margin-bottom: clamp(60px, 8vw, 80px);
        }

        .header-stats {
          text-align: right;
        }

        .stat-number {
          display: block;
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 300;
          line-height: 1;
          color: var(--color-azure);
          margin-bottom: 0.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(40px, 6vw, 80px) 40px;
        }

        .project-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .project-visual {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          margin-bottom: 1.5rem;
          background: #EAEAEA;
        }

        .project-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-visual img {
          transform: scale(1.05);
        }

        .play-indicator {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: var(--color-azure);
          color: var(--color-bg-white);
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .project-category, .project-year {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .project-category { color: var(--color-gold); }
        .project-year { color: var(--color-text-muted); }

        .project-name {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 400;
          margin: 0 0 0.5rem 0;
        }

        /* BUTTONS & LINKS */
        .btn-minimal {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          color: var(--color-azure);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 10px 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .arrow-icon {
          font-size: 1.5em;
          font-weight: 300;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-minimal:hover, .project-card:hover .btn-minimal {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        .btn-minimal:hover .arrow-icon, .project-card:hover .arrow-icon {
          transform: translateX(10px);
        }

        .btn-solid-gold {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 60px;
          padding: 0 40px;
          background: var(--color-gold);
          color: var(--color-azure);
          border: none;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-solid-gold:hover {
          background: var(--color-bg-white);
          transform: translateY(-2px);
        }
        
        .btn-solid-gold .arrow-icon {
          font-size: 1.2em;
        }
        
        .btn-solid-gold:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* CTA SECTION */
        .cta-section {
          padding: clamp(120px, 20vw, 250px) 0;
        }

        .cta-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .text-center .hero-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 992px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .pillars-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .heading-xl {
            /* Drops down even further for small screens */
            font-size: clamp(1.75rem, 7vw, 3rem); 
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding-top: 3rem;
          }
          .split-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .header-stats {
            text-align: left;
          }
          .project-details {
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default About;