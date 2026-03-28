import React, { useEffect, useState } from "react";

const fallbackImage = "/JNCBROTHERS.png";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "35,000",
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
    price: "Ask for Price",
    images: [
      new URL("../assets/Apartments/type-a/b11.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b5.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b4.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b10.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b8.jpg", import.meta.url).href,
    ],
  },
  {
    id: 3,
    type: "Type C",
    name: "The Heritage Residence",
    beds: "3 Bedroom",
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "Ask for Price",
    images: [
      new URL("../assets/Apartments/type-c/a5.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a3.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a2.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a7.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a10.jpg", import.meta.url).href,
    ],
  },
];

const UnitSection = ({ onInquire }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [mainLoaded, setMainLoaded] = useState(false);

  // hack: force remount once if needed
  const [sectionKey, setSectionKey] = useState(0);

  const activeUnit = units.find((u) => u.id === activeTab);

  useEffect(() => {
    setMainLoaded(false);
  }, [activeTab, activeImage]);

  // hack: if something weird happens on mount, remount the section once
  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById("unit-section");
      if (section) {
        const styles = window.getComputedStyle(section);
        const hidden =
          styles.display === "none" ||
          styles.visibility === "hidden" ||
          styles.opacity === "0" ||
          section.offsetHeight === 0;

        if (hidden) {
          setSectionKey((prev) => prev + 1);
        }
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!activeUnit) {
    return (
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ color: "#fff" }}>
          Unable to load unit information.
        </div>
      </section>
    );
  }

  return (
    <section
      id="unit-section"
      key={sectionKey}
      style={styles.section}
    >
      <div className="container">
        <h2 style={styles.sectionTitle}>Our Collection</h2>

        <div style={styles.tabsWrap}>
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => {
                setActiveTab(unit.id);
                setActiveImage(0);
                setMainLoaded(false);
              }}
              style={{
                ...styles.tabButton,
                ...(activeTab === unit.id ? styles.tabButtonActive : {}),
              }}
            >
              {unit.beds}
            </button>
          ))}
        </div>

        <div style={styles.grid} className="unit-grid">
          <div>
            <div style={styles.mainImageWrap}>
              {!mainLoaded && <div style={styles.skeleton} />}

              <img
                src={activeUnit.images[activeImage]}
                alt={activeUnit.name}
                onLoad={() => setMainLoaded(true)}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                  setMainLoaded(true);
                }}
                style={{
                  ...styles.mainImage,
                  opacity: mainLoaded ? 1 : 0,
                }}
              />
            </div>

            <div style={styles.thumbGrid}>
              {activeUnit.images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setActiveImage(index);
                    setMainLoaded(false);
                  }}
                  style={{
                    ...styles.thumbButton,
                    border:
                      activeImage === index
                        ? "2px solid var(--gold-accent)"
                        : "2px solid transparent",
                  }}
                  aria-label={`View ${activeUnit.name} image ${index + 1}`}
                >
                  <div style={styles.thumbSkeleton} />
                  <img
                    src={img}
                    alt={`${activeUnit.name} ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                    style={styles.thumbImage}
                  />
                </button>
              ))}
            </div>
          </div>

          <div style={styles.details}>
            <span style={styles.typeLabel}>{activeUnit.type}</span>

            <h3 style={styles.title}>{activeUnit.name}</h3>

            <p style={styles.description}>{activeUnit.desc}</p>

            <div style={styles.metaGrid}>
              <div style={styles.metaCard}>
                <p style={styles.metaLabel}>Total Area</p>
                <p style={styles.metaValue}>{activeUnit.size}</p>
              </div>

              <div style={styles.metaCard}>
                <p style={styles.metaLabel}>Payment Plan</p>
                <p style={styles.metaValue}>Flexible</p>
              </div>
            </div>

            <div style={styles.buttonRow}>
              <button
                onClick={() => onInquire(activeUnit.beds)}
                style={styles.primaryButton}
              >
                Get Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skeletonLoading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

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

const styles = {
  section: {
    padding: "80px 0",
    opacity: 1,
    visibility: "visible",
    display: "block",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    marginBottom: "36px",
    color: "#fff",
    lineHeight: 1.15,
  },

  tabsWrap: {
    display: "flex",
    gap: "12px",
    marginBottom: "36px",
    borderBottom: "1px solid #333",
    flexWrap: "wrap",
    paddingBottom: "14px",
  },

  tabButton: {
    background: "transparent",
    border: "1px solid var(--gold-accent)",
    color: "#ffffff",
    padding: "12px 16px",
    fontSize: "clamp(0.95rem, 2vw, 1rem)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.25s ease",
    minHeight: "46px",
    whiteSpace: "nowrap",
  },

  tabButtonActive: {
    background: "var(--gold-accent)",
    color: "#000",
    fontWeight: 700,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 1fr",
    gap: "48px",
    alignItems: "start",
  },

  mainImageWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 10",
    overflow: "hidden",
    marginBottom: "14px",
    background: "#222",
    borderRadius: "4px",
  },

  skeleton: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, #222 25%, #333 50%, #222 75%)",
    backgroundSize: "200% 100%",
    animation: "skeletonLoading 1.4s ease-in-out infinite",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "opacity 0.3s ease",
  },

  thumbGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(78px, 1fr))",
    gap: "10px",
  },

  thumbButton: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    cursor: "pointer",
    background: "#222",
    overflow: "hidden",
    padding: 0,
    borderRadius: "3px",
  },

  thumbSkeleton: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, #222 25%, #333 50%, #222 75%)",
    backgroundSize: "200% 100%",
    animation: "skeletonLoading 1.4s ease-in-out infinite",
  },

  thumbImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    zIndex: 1,
    display: "block",
  },

  details: {
    width: "100%",
  },

  typeLabel: {
    color: "var(--gold-accent)",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    display: "inline-block",
    marginBottom: "8px",
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    margin: "0 0 18px",
    color: "#fff",
    lineHeight: 1.1,
  },

  description: {
    color: "var(--text-muted)",
    fontSize: "clamp(1rem, 2.2vw, 1.08rem)",
    marginBottom: "28px",
    lineHeight: 1.7,
  },

  metaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px",
    marginBottom: "30px",
  },

  metaCard: {
    borderLeft: "1px solid var(--gold-accent)",
    paddingLeft: "14px",
  },

  metaLabel: {
    color: "#777",
    fontSize: "0.78rem",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  metaValue: {
    color: "#fff",
    fontSize: "clamp(1rem, 2vw, 1.15rem)",
    lineHeight: 1.5,
  },

  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  primaryButton: {
    background: "var(--gold-accent)",
    border: "none",
    color: "#000",
    padding: "14px 22px",
    fontWeight: "600",
    cursor: "pointer",
    minHeight: "48px",
    flex: "1 1 220px",
  },
};

export default UnitSection;