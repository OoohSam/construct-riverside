import React, { useState } from "react";
import fallbackImage from "../assets/hero/Front-View.webp";
import cityVideo from "../assets/Video/riverside-city-video.mp4";
import martinImg from "../assets/Directors/Martin.webp";
import linnImg from "../assets/Directors/Linn.webp";
import liuImg from "../assets/Directors/Liu.webp";
import Kavata from "../assets/Directors/Kavata.webp";

const directors = [
  { name: "Martin", role: "Head of Sales", image: martinImg },
  { name: "Lin", role: "Head of Operations", image: linnImg },
  { name: "Liu", role: "Site Manager", image: liuImg },
  { name: "Kavata", role: "Sales Manager", image: Kavata },
];

const completedProjects = [
  {
    name: "Argyle Grand Hotel",
    type: "Hospitality",
    website: "https://argylehotelkenya.ke/",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553059860.jpg?k=4a36f6c381244fa98507c9bc2c504838b4d6a1bc5344c30e3258b6de613adcde&o=",
    isVideo: false,
  },
  {
    name: "Apple Tree Apartments",
    type: "Residential",
    website: "https://www.youtube.com/watch?v=aHcrVmcU8Qk",
    image: "https://img.youtube.com/vi/aHcrVmcU8Qk/hqdefault.jpg",
    isVideo: true,
  },
  {
    name: "Mango Tree Apartments",
    type: "Residential",
    website: "https://www.youtube.com/watch?v=eH3c-SccjVA",
    image: "https://img.youtube.com/vi/eH3c-SccjVA/hqdefault.jpg",
    isVideo: true,
  },
  {
    name: "Jacaranda Gardens Apartments",
    type: "Residential",
    website: "https://jacarandagardens.co.ke/",
    image: "https://images.prop24.com/vfh24rrvtwkwx7wodummvtp4xy/Crop600x400",
    isVideo: false,
  },
];

const developerPoints = [
  "Chinese-backed developer with active project experience in Kenya",
  "Track record across hospitality and residential developments",
  "Focused on quality execution, long-term value, and market confidence",
];

const About = ({ onOpenModal }) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={fallbackImage}
            onError={() => setVideoError(true)}
            style={styles.heroVideo}
          >
            <source src={cityVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={fallbackImage}
            alt="Riverside Azure exterior"
            style={styles.heroVideo}
          />
        )}

        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>Developed in Riverside, Nairobi</p>

            <h1 style={styles.heroTitle}>
              Backed by Experience.
              <br />
              Designed for Modern Living.
            </h1>

            <p style={styles.heroText}>
              Riverside Azure is a refined residential development in one of
              Nairobi’s most sought-after neighborhoods, combining prime
              location, contemporary design, and long-term investment value.
            </p>

            <button onClick={onOpenModal} style={styles.primaryBtn}>
              Get Price List & Brochure
            </button>
          </div>
        </div>
      </div>

      {/* DEVELOPER */}
      <div style={styles.section}>
        <div className="developer-grid" style={styles.developerGrid}>
          <div style={styles.logoCard}>
            <img
              src="/JNCBROTHERS.gif"
              alt="JNC Brothers Company Limited"
              style={styles.logoImg}
            />
          </div>

          <div>
            <p style={styles.eyebrow}>The Developer</p>

            <h2 style={styles.sectionTitle}>JNC Brothers Company Limited</h2>

            <p style={styles.bodyText}>
              Riverside Azure is developed by{" "}
              <strong style={{ color: "var(--text-main)" }}>
                JNC Brothers Company Limited
              </strong>
              , a Chinese-backed developer with experience across hospitality
              and residential projects in Kenya. The company’s approach
              emphasizes disciplined execution, practical design, and long-term
              project value.
            </p>

            <div style={styles.pointsWrap}>
              {developerPoints.map((point, index) => (
                <div key={index} style={styles.point}>
                  <span style={styles.pointDot}>●</span>
                  <p style={styles.pointText}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETED PROJECTS */}
      <div style={styles.projectsSection}>
        <div style={styles.centerHeader}>
          <p style={styles.eyebrow}>Track Record</p>

          <h2 style={styles.sectionTitle}>Previously Completed Projects</h2>

          <p style={styles.centerText}>
            Our experience is grounded in completed developments across
            hospitality and residential living, reflecting a continued focus on
            quality delivery and long-term value.
          </p>
        </div>

        <div style={styles.projectsGrid}>
          {completedProjects.map((project, index) => (
            <a
              key={index}
              href={project.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="completed-project-card"
              style={styles.projectCard}
            >
              <div style={styles.projectImageWrap}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={styles.projectImage}
                />

                <div className="project-image-overlay" />

                {project.isVideo && (
                  <div className="project-play-badge">
                    <span className="project-play-icon">▶</span>
                  </div>
                )}
              </div>

              <div style={styles.projectInfo}>
                <p style={styles.projectType}>{project.type}</p>

                <h3 style={styles.projectTitle}>{project.name}</h3>

                <span style={styles.projectLink}>
                  {project.isVideo ? "Watch Project" : "Visit Website"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* LEADERSHIP */}
      <div style={styles.leadershipSection}>
        <h2 style={styles.leadershipTitle}>Leadership</h2>

        <div style={styles.directorGrid}>
          {directors.map((director, index) => (
            <div key={index} className="director-card">
              <div className="image-wrapper">
                <img src={director.image} alt={director.name} />
              </div>

              <div className="director-info">
                <h4>{director.name}</h4>
                <p>{director.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BROCHURE */}
      <div style={styles.brochureSection}>
        <h2 style={styles.brochureTitle}>Investment Brochure</h2>

        <p style={styles.brochureText}>
          Get full project details, floor plans, pricing, and investment
          insights.
        </p>

        <button onClick={onOpenModal} style={styles.primaryBtn}>
          Get Price List & Brochure
        </button>
      </div>

      <style>{`
        .director-card {
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .director-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.42);
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid rgba(243,193,66,0.14);
        }

        .image-wrapper img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }

        .director-card:hover .image-wrapper img {
          transform: scale(1.08);
        }

        .director-info {
          margin-top: 18px;
          text-align: center;
          position: relative;
        }

        .director-info h4 {
          margin-bottom: 6px;
          transition: color 0.3s ease;
          color: var(--text-main);
          font-family: var(--font-serif);
          font-size: 1.2rem;
        }

        .director-info p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .director-info::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: var(--gold-accent);
          margin: 10px auto 0;
          transition: width 0.4s ease;
        }

        .director-card:hover .director-info::after {
          width: 40px;
        }

        .director-card:hover h4 {
          color: var(--gold-accent);
        }

        .completed-project-card {
          display: block;
        }

        .completed-project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 58px rgba(0,0,0,0.38);
        }

        .completed-project-card:hover img {
          transform: scale(1.05);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(2,17,31,0.58),
            rgba(2,17,31,0.18) 45%,
            rgba(2,17,31,0.04)
          );
          transition: background 0.35s ease;
        }

        .project-play-badge {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .project-play-icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(2,17,31,0.58);
          border: 1px solid rgba(243,193,66,0.45);
          color: var(--gold-accent);
          font-size: 1.3rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.28);
          backdrop-filter: blur(4px);
        }

        @media (max-width: 900px) {
          .developer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 768px) {
          .director-card:hover,
          .completed-project-card:hover {
            transform: none;
            box-shadow: none;
          }

          .image-wrapper img {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

const styles = {
  page: {
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 42%, #021827 100%)",
    color: "var(--text-main)",
  },

  hero: {
    position: "relative",
    minHeight: "100svh",
    overflow: "hidden",
  },

  heroVideo: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(2,17,31,0.26), rgba(3,27,47,0.58) 55%, rgba(1,12,22,0.88))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px 50px",
  },

  heroContent: {
    maxWidth: "920px",
    textAlign: "center",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "0.8rem",
    fontWeight: 800,
    marginBottom: "14px",
  },

  heroTitle: {
    fontSize: "clamp(2.4rem, 7vw, 4.8rem)",
    lineHeight: 1.08,
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    marginBottom: "22px",
    letterSpacing: "-0.04em",
    textShadow: "0 6px 24px rgba(0,0,0,0.45)",
  },

  heroText: {
    color: "var(--text-muted)",
    maxWidth: "720px",
    margin: "0 auto 30px",
    lineHeight: 1.8,
    fontSize: "clamp(1rem, 2.8vw, 1.12rem)",
  },

  primaryBtn: {
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "15px 28px",
    fontWeight: "800",
    cursor: "pointer",
    minHeight: "54px",
    boxShadow:
      "0 14px 34px rgba(243,193,66,0.24), inset 0 1px 0 rgba(255,255,255,0.24)",
  },

  section: {
    padding: "clamp(76px, 10vw, 110px) 24px",
  },

  developerGrid: {
    maxWidth: "1180px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "44px",
    alignItems: "center",
  },

  logoCard: {
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.58), rgba(2,17,31,0.82))",
    border: "1px solid rgba(243,193,66,0.16)",
    minHeight: "280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    boxShadow: "0 22px 55px rgba(0,0,0,0.22)",
  },

  logoImg: {
    width: "100%",
    maxWidth: "340px",
    height: "auto",
    objectFit: "contain",
  },

  sectionTitle: {
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "18px",
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
  },

  bodyText: {
    color: "var(--text-muted)",
    lineHeight: 1.85,
    marginBottom: "26px",
    fontSize: "1rem",
  },

  pointsWrap: {
    display: "grid",
    gap: "14px",
  },

  point: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    borderLeft: "1px solid var(--gold-accent)",
    paddingLeft: "14px",
  },

  pointDot: {
    color: "var(--gold-accent)",
    lineHeight: 1.4,
  },

  pointText: {
    color: "var(--text-muted)",
    lineHeight: 1.75,
    margin: 0,
  },

  projectsSection: {
    padding: "clamp(76px, 10vw, 110px) 24px",
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.82), rgba(1,12,22,0.96))",
  },

  centerHeader: {
    maxWidth: "1100px",
    margin: "0 auto 50px",
    textAlign: "center",
  },

  centerText: {
    color: "var(--text-muted)",
    maxWidth: "760px",
    margin: "0 auto",
    lineHeight: 1.8,
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  projectCard: {
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.62), rgba(2,17,31,0.88))",
    border: "1px solid rgba(243,193,66,0.14)",
    overflow: "hidden",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    textDecoration: "none",
  },

  projectImageWrap: {
    position: "relative",
    aspectRatio: "16 / 10",
    background: "var(--azure-deep)",
    overflow: "hidden",
  },

  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },

  projectInfo: {
    padding: "24px",
  },

  projectType: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.75rem",
    fontWeight: 700,
    marginBottom: "10px",
  },

  projectTitle: {
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    fontSize: "1.5rem",
    marginBottom: "12px",
    lineHeight: 1.25,
  },

  projectLink: {
    color: "var(--gold-accent)",
    borderBottom: "1px solid rgba(243,193,66,0.35)",
    paddingBottom: "2px",
    fontWeight: 700,
  },

  leadershipSection: {
    padding: "clamp(76px, 10vw, 110px) 24px",
    background:
      "linear-gradient(180deg, rgba(4,57,94,0.42), rgba(2,17,31,0.92))",
  },

  leadershipTitle: {
    textAlign: "center",
    marginBottom: "60px",
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    letterSpacing: "-0.03em",
  },

  directorGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "36px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  brochureSection: {
    padding: "clamp(76px, 10vw, 110px) 24px",
    textAlign: "center",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.66), rgba(2,17,31,0.94))",
  },

  brochureTitle: {
    marginBottom: "20px",
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    letterSpacing: "-0.03em",
  },

  brochureText: {
    color: "var(--text-muted)",
    marginBottom: "30px",
    lineHeight: 1.7,
  },
};