import React from "react";
import fallbackImage from "../assets/hero/Front-View.webp";
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
];

const developerPoints = [
  "Chinese-backed developer with active project experience in Kenya",
  "Track record across hospitality and residential developments",
  "Focused on quality execution, long-term value, and market confidence",
];

const About = ({ onOpenModal }) => {
  return (
    <section style={{ background: "#0a0a0a", color: "#fff" }}>
      {/* HERO (IMAGE ONLY) */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
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

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75))",
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
              }}
            >
              Backed by Experience.
              <br />
              Designed for Modern Living.
            </h1>

            <p
              style={{
                color: "#c7c7c7",
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

      {/* KEEP EVERYTHING ELSE SAME BELOW */}
    </section>
  );
};

export default About;