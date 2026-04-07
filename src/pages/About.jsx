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
    <section style={{ background: "#0a0a0a", color: "#fff" }}>
      {/* HERO */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={fallbackImage}
            onError={() => setVideoError(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={cityVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={fallbackImage}
            alt="Riverside Azure exterior"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.75))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              maxWidth: "920px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--gold-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.8rem",
                marginBottom: "18px",
              }}
            >
              Developed in Riverside, Nairobi
            </p>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                lineHeight: 1.12,
                color: "#fff",
                fontFamily: "var(--font-serif)",
                marginBottom: "22px",
                textShadow: "0 4px 20px rgba(0,0,0,0.55)",
              }}
            >
              Backed by Experience.
              <br />
              Designed for Modern Living.
            </h1>

            <p
              style={{
                color: "#d0d0d0",
                maxWidth: "720px",
                margin: "0 auto",
                lineHeight: 1.8,
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                marginBottom: "30px",
              }}
            >
              Riverside Azure is a refined residential development in one of
              Nairobi’s most sought-after neighborhoods, combining prime
              location, contemporary design, and long-term investment value.
            </p>

            <button
              onClick={onOpenModal}
              style={{
                background: "var(--gold-accent)",
                color: "#000",
                border: "none",
                padding: "14px 28px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Get Price List & Brochure
            </button>
          </div>
        </div>
      </div>

      {/* DEVELOPER */}
      <div style={{ padding: "100px 40px" }}>
        <div
          className="developer-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "44px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <img
              src="/JNCBROTHERS.gif"
              alt="JNC Brothers Company Limited"
              style={{
                width: "100%",
                maxWidth: "340px",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "var(--gold-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                fontSize: "0.8rem",
                marginBottom: "12px",
              }}
            >
              The Developer
            </p>

            <h2
              style={{
                color: "#fff",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                marginBottom: "18px",
                lineHeight: 1.15,
              }}
            >
              JNC Brothers Company Limited
            </h2>

            <p
              style={{
                color: "#b5b5b5",
                lineHeight: 1.85,
                marginBottom: "26px",
                fontSize: "1rem",
              }}
            >
              Riverside Azure is developed by{" "}
              <strong style={{ color: "#fff" }}>
                JNC Brothers Company Limited
              </strong>
              , a Chinese-backed developer with experience across hospitality
              and residential projects in Kenya. The company’s approach
              emphasizes disciplined execution, practical design, and long-term
              project value.
            </p>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {developerPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    borderLeft: "1px solid var(--gold-accent)",
                    paddingLeft: "14px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold-accent)",
                      lineHeight: 1.4,
                    }}
                  >
                    ●
                  </span>
                  <p
                    style={{
                      color: "#c1c1c1",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COMPLETED PROJECTS */}
      <div style={{ padding: "100px 40px", background: "#111" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto 50px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--gold-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "0.8rem",
              marginBottom: "12px",
            }}
          >
            Track Record
          </p>

          <h2
            style={{
              color: "#fff",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              marginBottom: "18px",
            }}
          >
            Previously Completed Projects
          </h2>

          <p
            style={{
              color: "#aaa",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Our experience is grounded in completed developments across
            hospitality and residential living, reflecting a continued focus on
            quality delivery and long-term value.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {completedProjects.map((project, index) => (
            <a
              key={index}
              href={project.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="completed-project-card"
              style={{
                background: "#0c0c0c",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  background: "#171717",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                />

                <div className="project-image-overlay" />

                {project.isVideo && (
                  <div className="project-play-badge">
                    <span className="project-play-icon">▶</span>
                  </div>
                )}
              </div>

              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    color: "var(--gold-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontSize: "0.75rem",
                    marginBottom: "10px",
                  }}
                >
                  {project.type}
                </p>

                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {project.name}
                </h3>

                <div style={{ minHeight: "28px" }}>
                  <span
                    style={{
                      color: "var(--gold-accent)",
                      borderBottom: "1px solid rgba(212,175,55,0.35)",
                      paddingBottom: "2px",
                      fontWeight: 500,
                    }}
                  >
                    {project.isVideo ? "Watch Project" : "Visit Website"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* LEADERSHIP */}
      <div style={{ padding: "100px 40px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "60px",
            color: "#fff",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 2.7rem)",
          }}
        >
          Leadership
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
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
      <div
        style={{
          padding: "100px 40px",
          textAlign: "center",
          background: "#111",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#fff",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 2.6rem)",
          }}
        >
          Investment Brochure
        </h2>
        <p
          style={{ color: "#aaa", marginBottom: "30px", lineHeight: 1.7 }}
        >
          Get full project details, floor plans, pricing, and investment
          insights.
        </p>
        <button
          onClick={onOpenModal}
          style={{
            background: "var(--gold-accent)",
            color: "#000",
            padding: "14px 30px",
            border: "none",
            fontWeight: "600",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          Get Price List & Brochure
        </button>
      </div>

      <style>{`
        .director-card {
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .director-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: 6px;
        }

        .image-wrapper img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: transform 0.6s ease;
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
          color: #fff;
        }

        .director-info p {
          color: #aaa;
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
          box-shadow: 0 22px 50px rgba(0,0,0,0.45);
        }

        .completed-project-card:hover img {
          transform: scale(1.05);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.42),
            rgba(0,0,0,0.12) 45%,
            rgba(0,0,0,0.04)
          );
          transition: background 0.35s ease;
        }

        .completed-project-card:hover .project-image-overlay {
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.14) 45%,
            rgba(0,0,0,0.06)
          );
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
          background: rgba(10,10,10,0.55);
          border: 1px solid rgba(212,175,55,0.45);
          color: var(--gold-accent);
          font-size: 1.3rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.28);
          backdrop-filter: blur(4px);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .completed-project-card:hover .project-play-icon {
          transform: scale(1.06);
          box-shadow: 0 10px 34px rgba(0,0,0,0.35);
        }

        @media (max-width: 900px) {
          .developer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .director-card:hover {
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