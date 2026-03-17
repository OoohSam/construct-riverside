import React, { useEffect, useState } from "react";
import videoFile from "../assets/Video/0317.mp4";

const inputStyle = {
  padding: "14px",
  background: "#111",
  border: "1px solid #333",
  color: "#fff",
  outline: "none",
};


const directors = [
  {
    name: "Martin",
    role: "Head of Sales",
    image: "/src/assets/Directors/martin.webp",
  },
  {
    name: "Lin",
    role: "Head of Operations",
    image: "/src/assets/Directors/linn.webp",
  },
  {
    name: "Liu",
    role: "Site Manager",
    image: "/src/assets/Directors/liu.webp",
  },
];

// Simple scroll reveal hook
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const formatNumber = (val) => {
  if (!val) return "";
  const num = val.toString().replace(/,/g, "");
  return Number(num).toLocaleString();
};

const parseNumber = (val) => {
  return Number(val.toString().replace(/,/g, "")) || 0;
};

// ✅ ROI Calculator moved outside the main component
const Calculator = ({ price, rent, costs, setPrice, setRent, setCosts }) => {
  const currency = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  });

  const percent = (v) => `${v.toFixed(2)}%`;

  const priceNum = parseNumber(price);
  const rentNum = parseNumber(rent);
  const costsNum = parseNumber(costs);

  const annualIncome = rentNum * 12;
  const net = annualIncome - costsNum;
  const roi = priceNum > 0 ? (net / priceNum) * 100 : 0;

  return (
    <div
      className="reveal"
      style={{ maxWidth: "700px", margin: "0 auto", display: "grid", gap: "18px" }}
    >
      <div>
        <label style={{ color: "#aaa" }}>Property Price</label>
        <input
          value={price}
          onChange={(e) =>
            setPrice(formatNumber(e.target.value.replace(/[^0-9]/g, "")))
          }
          style={inputStyle}
        />
      </div>

      <div>
        <label style={{ color: "#aaa" }}>Monthly Rent</label>
        <input
          value={rent}
          onChange={(e) =>
            setRent(formatNumber(e.target.value.replace(/[^0-9]/g, "")))
          }
          style={inputStyle}
        />
      </div>

      <div>
        <label style={{ color: "#aaa" }}>Annual Costs</label>
        <input
          value={costs}
          onChange={(e) =>
            setCosts(formatNumber(e.target.value.replace(/[^0-9]/g, "")))
          }
          style={inputStyle}
        />
      </div>

      <div style={{ border: "1px solid #222", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Annual Income</span>
          <strong>{currency.format(annualIncome)}</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <span>Net Income</span>
          <strong>{currency.format(net)}</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <span>ROI</span>
          <strong style={{ color: "gold", fontSize: "1.5rem" }}>{percent(roi)}</strong>
        </div>
      </div>
    </div>
  );
};


const AboutPage = () => {
  useReveal();

  const [slider, setSlider] = useState(50);

  // Default ROI values
  const [price, setPrice] = useState("8,000,000");
  const [rent, setRent] = useState("1,200");
  const [costs, setCosts] = useState("2,000");

  return (
    <section style={{ background: "#0a0a0a", color: "#fff" }}>
      {/* 🔥 HERO VIDEO (CHINA → NAIROBI) */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.

        </video>


        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div className="reveal">
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>From China to Nairobi</h1>
            <p style={{ color: "#ccc", maxWidth: "700px" }}>
              Global precision meets Nairobi’s future of luxury living.
            </p>
          </div>
        </div>
      </div>

      {/* 🧭 TIMELINE */}
      <div style={{ padding: "100px 40px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          Our Journey
        </h2>

        {["2018", "2020", "2022", "2024"].map((year, i) => (
          <div
            key={i}
            className="reveal"
            style={{ display: "flex", gap: "30px", marginBottom: "40px" }}
          >
            <div style={{ color: "gold" }}>{year}</div>
            <div>
              <h4>Milestone {i + 1}</h4>
              <p style={{ color: "#aaa" }}>Key expansion and project delivery phase.</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🏗 BEFORE / AFTER SLIDER */}
      <div style={{ padding: "100px 40px" }}>
        <h2 className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
          Transformation
        </h2>

        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <img src="/images/before.jpg" alt="Before construction" style={{ width: "100%" }} />

          <div style={{ position: "absolute", top: 0, left: 0, width: slider + "%", overflow: "hidden" }}>
            <img src="/images/after.jpg" alt="After construction" style={{ width: "100%" }} />
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            style={{ width: "100%", marginTop: "20px" }}
          />
        </div>
      </div>

      {/* 🧑‍💼 DIRECTORS SECTION */}
     <div style={{ padding: "100px 40px" }}>
  <h2 className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
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
      <div key={index} className="director-card reveal">
        
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

  {/* 🎬 PREMIUM HOVER STYLES */}
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
    }

    .director-info p {
      color: #aaa;
      font-size: 0.9rem;
    }

    /* 🔥 Gold underline animation */
    .director-info::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: gold;
      margin: 10px auto 0;
      transition: width 0.4s ease;
    }

    .director-card:hover .director-info::after {
      width: 40px;
    }

    .director-card:hover h4 {
      color: gold;
    }
  `}</style>
</div>

      {/* 🌄 PARALLAX SECTION */}
      <div
        style={{
          backgroundImage: "url('/images/parallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px 20px",
          textAlign: "center",
        }}
      >
        <div className="reveal">
          <h2>Built for Legacy</h2>
          <p style={{ color: "#ddd" }}>Where architecture meets long-term value.</p>
        </div>
      </div>

      {/* 🎬 ANIMATION STYLES */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* 📄 DOWNLOAD BROCHURE CTA */}
      <div style={{ padding: "100px 40px", textAlign: "center", background: "#111" }}>
        <h2 className="reveal" style={{ marginBottom: "20px" }}>
          Investment Brochure
        </h2>
        <p className="reveal" style={{ color: "#aaa", marginBottom: "30px" }}>
          Get full project details, floor plans, pricing, and investment insights.
        </p>
        <a
          href="/brochure.pdf"
          download
          className="reveal"
          style={{
            background: "gold",
            color: "#000",
            padding: "14px 30px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Download Brochure
        </a>
      </div>

      {/* 🧮 ROI CALCULATOR */}
      <div style={{ padding: "100px 40px" }}>
        <h2 className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          ROI Calculator
        </h2>

        <Calculator
          price={price}
          rent={rent}
          costs={costs}
          setPrice={setPrice}
          setRent={setRent}
          setCosts={setCosts}
        />
      </div>

      {/* 🏗 OUR PROCESS */}
      <div style={{ padding: "100px 40px", background: "#111" }}>
        <h2 className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          Our Process
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {[
            {
              title: "Design",
              desc: "Conceptual planning focused on spatial efficiency, light, and timeless aesthetics.",
            },
            {
              title: "Build",
              desc: "Precision construction with strict quality control and proven engineering systems.",
            },
            {
              title: "Deliver",
              desc: "On-time completion with long-term value, property management, and investor readiness.",
            },
          ].map((step, i) => (
            <div key={i} className="reveal">
              <h3 style={{ color: "gold", marginBottom: "15px" }}>{step.title}</h3>
              <p style={{ color: "#aaa", lineHeight: "1.7" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 💰 INVESTOR SECTION */}
      <div style={{ padding: "100px 40px" }}>
        <h2 className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
          Investment Perspective
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              label: "Rental Yield",
              value: "8–12%",
              desc: "Driven by high demand in diplomatic and corporate zones.",
            },
            {
              label: "Occupancy",
              value: "High",
              desc: "Strategic Riverside location ensures consistent tenant demand.",
            },
            {
              label: "Capital Growth",
              value: "Strong",
              desc: "Premium developments in Nairobi show steady appreciation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                border: "1px solid #222",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "gold", marginBottom: "10px" }}>{item.value}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>{item.label}</p>
              <p style={{ color: "#aaa", marginTop: "10px", lineHeight: "1.6" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;