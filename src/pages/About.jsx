import React, { useState } from "react";
import { motion } from "framer-motion";

import fallbackImage from "../assets/hero/Front-View.webp";
import cityVideo from "../assets/Video/riverside-city-video.mp4";

import martinImg from "../assets/Directors/Martin.webp";
import linnImg from "../assets/Directors/Linn.webp";
import liuImg from "../assets/Directors/Liu.webp";

const directors = [
  { name: "Lin", role: "Head of Operations", image: linnImg },
  { name: "Liu", role: "Site Manager", image: liuImg },
];

const completedProjects = [
  {
    name: "Argyle Grand Hotel",
    type: "Hospitality",
    year: "Completed Development",
    website: "https://argylehotelkenya.ke/",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553059860.jpg?k=4a36f6c381244fa98507c9bc2c504838b4d6a1bc5344c30e3258b6de613adcde&o=",
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
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.25, 1, 0.5, 1];

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
      <main className="about-page">
        
        {/* =====================================================
            HERO (Cinematic & Grounded)
        ====================================================== */}
        <section className="about-hero">
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={fallbackImage}
              onError={() => setVideoError(true)}
              className="about-hero-media"
            >
              <source src={cityVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src={fallbackImage}
              alt="Riverside Azure exterior"
              className="about-hero-media"
            />
          )}

          <div className="about-hero-shade" />

          <div className="container about-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: quietEase }}
              className="about-hero-content"
            >
              <div className="about-eyebrow">
                <span className="eyebrow-line" />
                <span>About Riverside Azure</span>
              </div>
              <h1 className="about-hero-title">
                Built on experience.<br />
                Designed for what comes next.
              </h1>
              <p className="about-hero-text">
                Riverside Azure is the latest residential development from JNC Brothers &amp; Company Limited — 
                bringing together local experience, contemporary design, and a considered approach to urban living.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPER STORY (Architectural Grid)
        ====================================================== */}
        <section className="about-developer">
          <div className="container">
            
            <div className="developer-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="developer-header"
              >
                <span className="section-meta">01 — The Developer</span>
                <h2 className="section-title">
                  JNC Brothers &amp;<br />
                  Company Limited.
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1}
                variants={fadeStagger}
                className="developer-copy"
              >
                <p className="lead-text">
                  Riverside Azure is developed by JNC Brothers &amp; Company Limited, a Chinese-backed developer 
                  with established experience across hospitality and residential projects in Kenya.
                </p>
                <p className="body-text">
                  The company brings together international development experience and a practical understanding of the 
                  Kenyan market. Its projects are approached with an emphasis on disciplined execution, functional design, 
                  and long-term value.
                </p>
                <p className="body-text">
                  Riverside Azure represents the next expression of that approach — a contemporary residential address 
                  in Nairobi's Riverside neighbourhood, conceived for both modern living and long-term ownership.
                </p>
              </motion.div>
            </div>

            {/* Developer Pillars */}
            <div className="developer-pillars">
              {developerPoints.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.2 + (index * 0.1)}
                  variants={fadeStagger}
                  className="pillar-card"
                >
                  <span className="pillar-number">{point.number}</span>
                  <h3 className="pillar-title">{point.title}</h3>
                  <p className="pillar-text">{point.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================================
            TRACK RECORD (Solid Dark Mode)
        ====================================================== */}
        <section className="about-projects">
          <div className="container">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="projects-header"
            >
              <div className="projects-header-left">
                <span className="section-meta gold-text">02 — Track Record</span>
                <h2 className="section-title light-text">Experience you can see.</h2>
              </div>
              <div className="projects-header-right">
                <p className="body-text light-text-soft">
                  Our previous developments span hospitality and residential living across Kenya. 
                  Riverside Azure builds on that experience with a new generation of contemporary urban residences.
                </p>
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
                  custom={0.1 + (index * 0.1)}
                  variants={fadeStagger}
                  className="project-card"
                >
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.name} loading="lazy" />
                    {project.isVideo && <div className="project-play">▶</div>}
                  </div>
                  <div className="project-info">
                    <div className="project-meta">
                      <span className="project-type">{project.type}</span>
                      <h3 className="project-title">{project.name}</h3>
                    </div>
                    <span className="project-link">
                      {project.isVideo ? "Watch Project" : "Visit Website"} ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================================
            LEADERSHIP (Off-White)
        ====================================================== */}
        <section className="about-leadership">
          <div className="container">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="leadership-header"
            >
              <div className="leadership-header-left">
                <span className="section-meta">03 — Leadership</span>
                <h2 className="section-title">Leadership with purpose.</h2>
              </div>
              <div className="leadership-header-right">
                <p className="body-text">
                  Riverside Azure is supported by an experienced team responsible for operations, 
                  construction, and the day-to-day delivery of the development.
                </p>
              </div>
            </motion.div>

            {/* <div className="leadership-grid">
              {directors.map((director, index) => (
                <motion.div
                  key={director.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.1 + (index * 0.1)}
                  variants={fadeStagger}
                  className="director-card"
                >
                  <div className="director-image-wrap">
                    <img src={director.image} alt={director.name} loading="lazy" />
                  </div>
                  <div className="director-info">
                    <h3 className="director-name">{director.name}</h3>
                    <p className="director-role">{director.role}</p>
                  </div>
                </motion.div>
              ))}
            </div> */}

          </div>
        </section>

        {/* =====================================================
            BROCHURE CTA (Solid Structure)
        ====================================================== */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-grid">
              <div className="cta-left">
                <span className="section-meta gold-text">Riverside Azure</span>
                <h2 className="section-title light-text">Explore the full development.</h2>
              </div>
              <div className="cta-right">
                <p className="body-text light-text-soft">
                  Discover the residences, floor plans, amenities, pricing, and investment 
                  opportunity in the complete Riverside Azure brochure.
                </p>
                <button onClick={downloadBrochure} className="btn-solid-cta">
                  Download Pricelist &amp; Brochure <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist)
          ========================================================= */}
      <style>{`
        .about-page {
          width: 100%;
          background: var(--white);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* TYPOGRAPHY UTILITIES */
        .section-meta {
          display: block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
          margin-bottom: 24px;
        }

        .gold-text { color: var(--gold-accent); }
        .light-text { color: var(--white) !important; }
        .light-text-soft { color: rgba(255, 255, 255, 0.7) !important; }

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .lead-text {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 600;
          line-height: 1.6;
          color: var(--text-dark);
        }

        .body-text {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        .body-text:last-child { margin-bottom: 0; }

        /* HERO */
        .about-hero {
          position: relative;
          height: 85svh;
          min-height: 600px;
          display: flex;
          align-items: flex-end;
          background: var(--azure-deep);
        }

        .about-hero-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17, 26, 85, 0.9) 0%, rgba(17, 26, 85, 0.2) 60%, transparent 100%);
        }

        .about-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-bottom: clamp(60px, 8vw, 100px);
        }

        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--gold-accent);
        }

        .about-hero-title {
          margin: 0 0 24px 0;
          color: var(--white);
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .about-hero-text {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 600px;
        }

        /* DEVELOPER STORY */
        .about-developer {
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .developer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        .developer-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: clamp(80px, 10vw, 120px);
          border-top: 1px solid var(--border-light);
          padding-top: 40px;
        }

        .pillar-card {
          display: flex;
          flex-direction: column;
        }

        .pillar-number {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .pillar-title {
          margin: 0 0 16px 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--azure-deep);
        }

        .pillar-text {
          margin: 0;
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-dark-soft);
        }

        /* TRACK RECORD */
        .about-projects {
          background: var(--azure-deep); /* Solid architectural flat color */
          color: var(--white);
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .projects-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
          margin-bottom: clamp(60px, 8vw, 100px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 40px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px 40px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .project-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: rgba(255,255,255,0.05);
          overflow: hidden;
          margin-bottom: 24px;
        }

        .project-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .project-card:hover .project-image-wrap img {
          transform: scale(1.03);
        }

        .project-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 2rem;
          background: rgba(17, 26, 85, 0.3);
          transition: background 0.3s ease;
        }

        .project-card:hover .project-play {
          background: rgba(17, 26, 85, 0.1);
        }

        .project-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-type {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .project-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
        }

        .project-link {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          transition: color 0.3s ease;
        }

        .project-card:hover .project-link {
          color: var(--gold-accent);
        }

        /* LEADERSHIP */
        .about-leadership {
          background: var(--off-white);
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .leadership-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
          margin-bottom: clamp(60px, 8vw, 100px);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 40px;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .director-card {
          display: flex;
          flex-direction: column;
        }

        .director-image-wrap {
          aspect-ratio: 3 / 4; /* Classic portrait ratio */
          background: var(--border-light);
          margin-bottom: 24px;
          overflow: hidden;
        }

        .director-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1); /* Editorial B&W */
          transition: filter 0.8s ease, transform 0.8s ease;
        }

        .director-card:hover .director-image-wrap img {
          filter: grayscale(0%) contrast(1); /* Color reveals on hover */
          transform: scale(1.02);
        }

        .director-info {
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .director-name {
          margin: 0 0 8px 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--azure-deep);
        }

        .director-role {
          margin: 0;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
        }

        /* CTA SECTION */
        .about-cta {
          background: var(--azure-deep);
          padding: clamp(80px, 10vw, 120px) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1); /* Separates it if placed below another dark section */
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: center;
        }

        .btn-solid-cta {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 56px;
          margin-top: 32px;
          padding: 0 24px;
          background: var(--white);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .btn-solid-cta:hover {
          background: var(--gold-accent);
          color: var(--white);
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 992px) {
          .developer-grid, .projects-header, .leadership-header, .cta-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .developer-pillars {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            min-height: 80svh;
          }
          .about-developer, .about-projects, .about-leadership, .about-cta {
            padding: 80px 0;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .btn-solid-cta {
            padding: 0 16px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;