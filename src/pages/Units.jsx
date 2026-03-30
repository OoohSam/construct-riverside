import React, { useMemo, useState } from "react";

const fallbackImage = "/JNCBROTHERS.png";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "8 M - 13M",
    images: [
      new URL("../assets/Apartments/type-b/c6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-b/c1.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-b/c2.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-b/c3.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-b/c4.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-b/c5.jpg", import.meta.url).href,
    ],
  },

  {
    id: 2,
    type: "Type B",
    name: "The Urban Sanctuary",
    beds: "2 Bedroom",
    size: "98.00 - 104.63 SQM",
    desc: "Balanced proportions for long-term living. Perfect for young families.",
    price: "14-8 M - 19 M",
    images: [
      new URL("../assets/Apartments/type-a/b11.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b3.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b5.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b4.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b10.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b8.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/a1.jpg", import.meta.url).href,
    ],
  },
  {
    id: 3,
    type: "Type C",
    name: "The Heritage Residence",
    beds: "3 Bedroom",
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "22.5 M - 27 M",
    images: [
      new URL("../assets/Apartments/type-c/a14.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a5.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a3.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a16.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a2.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a13.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a7.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a10.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a4.jpg", import.meta.url).href,
    ],
  },
];

const Units = ({ onOpenModal, onInquire }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const activeUnit = useMemo(
    () => units.find((u) => u.id === activeTab) || units[0],
    [activeTab],
  );

  const currentImages =
    activeUnit?.images && activeUnit.images.length > 0
      ? activeUnit.images
      : [fallbackImage];

  const currentMainImage = currentImages[activeImage] || fallbackImage;

  const handleTabChange = (unitId) => {
    setActiveTab(unitId);
    setActiveImage(0);
  };

  const handleInquiry = () => {
    if (typeof onInquire === "function") {
      onInquire(activeUnit.beds);
      return;
    }

    if (typeof onOpenModal === "function") {
      onOpenModal(activeUnit.beds);
    }
  };

  return (
    <section
      id="units-page"
      style={{
        padding: "100px 0",
        opacity: 1,
        visibility: "visible",
        display: "block",
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            marginBottom: "36px",
            color: "#fff",
            lineHeight: 1.15,
          }}
        >
          Our Collection
        </h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "36px",
            borderBottom: "1px solid #333",
            flexWrap: "wrap",
            paddingBottom: "14px",
          }}
        >
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => handleTabChange(unit.id)}
              style={{
                background:
                  activeTab === unit.id ? "var(--gold-accent)" : "transparent",
                border: "1px solid var(--gold-accent)",
                color: activeTab === unit.id ? "#000" : "#fff",
                padding: "12px 16px",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
                fontWeight: activeTab === unit.id ? "700" : "500",
                cursor: "pointer",
                transition: "0.3s ease",
                minHeight: "46px",
                whiteSpace: "nowrap",
              }}
            >
              {unit.beds}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="unit-grid"
        >
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 10",
                overflow: "hidden",
                marginBottom: "14px",
                background: "#222",
                borderRadius: "4px",
              }}
            >
              <img
                src={currentMainImage}
                alt={activeUnit.name}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(78px, 1fr))",
                gap: "10px",
              }}
            >
              {currentImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${activeUnit.name} image ${index + 1}`}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    cursor: "pointer",
                    padding: 0,
                    overflow: "hidden",
                    background: "#222",
                    borderRadius: "3px",
                    border:
                      activeImage === index
                        ? "2px solid var(--gold-accent)"
                        : "2px solid transparent",
                  }}
                >
                  <img
                    src={img}
                    alt={`${activeUnit.name} ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <span
              style={{
                color: "var(--gold-accent)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.85rem",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              {activeUnit.type}
            </span>

            <h3
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                margin: "0 0 18px",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              {activeUnit.name}
            </h3>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(1rem, 2.2vw, 1.08rem)",
                marginBottom: "28px",
                lineHeight: "1.7",
              }}
            >
              {activeUnit.desc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "16px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  borderLeft: "1px solid var(--gold-accent)",
                  paddingLeft: "14px",
                }}
              >
                <p
                  style={{
                    color: "#777",
                    fontSize: "0.78rem",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Total Area
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    lineHeight: 1.5,
                  }}
                >
                  {activeUnit.size}
                </p>
              </div>

              <div
                style={{
                  borderLeft: "1px solid var(--gold-accent)",
                  paddingLeft: "14px",
                }}
              >
                <p
                  style={{
                    color: "#777",
                    fontSize: "0.78rem",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Price
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    lineHeight: 1.5,
                  }}
                >
                  {activeUnit.price}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={handleInquiry}
                style={{
                  background: "var(--gold-accent)",
                  border: "none",
                  color: "#000",
                  padding: "14px 22px",
                  fontWeight: "600",
                  cursor: "pointer",
                  minHeight: "48px",
                  flex: "1 1 220px",
                }}
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .unit-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 768px) {
          .unit-grid {
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Units;
