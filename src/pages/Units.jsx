import React, { useEffect, useMemo, useRef, useState } from "react";

const fallbackImage = "/JNCBROTHERS.png";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "KSh 7.9M - 8.5M",
    tour: "https://vr.justeasy.cn/view/1w77n7g4h7387018-1774860206.html",
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
    price: "KSh 12.7M - 13.6M",
    tour: "https://vr.justeasy.cn/view/17f74741k11h3gj1-1774860063.html",
    images: [
      new URL("../assets/Apartments/type-a/b11.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b6.jpg", import.meta.url).href,
      new URL("../assets/Apartments/type-a/b3.webp", import.meta.url).href,
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
    price: "KSh 18.4M - 19.2M",
    tour: "https://vr.justeasy.cn/view/1w77n7g4h7387018-1774860206.html",
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
  const [mainLoaded, setMainLoaded] = useState(false);
  const [tourPrompt, setTourPrompt] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const activeUnit = useMemo(
    () => units.find((u) => u.id === activeTab) || units[0],
    [activeTab]
  );

  const currentImages =
    activeUnit?.images?.length > 0 ? activeUnit.images : [fallbackImage];

  const currentMainImage = currentImages[activeImage] || fallbackImage;

  useEffect(() => {
    setMainLoaded(false);
  }, [activeTab, activeImage]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setActiveImage(0);
    setMainLoaded(false);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      currentImages.length <= 1
    ) {
      return;
    }

    const delta = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (delta > threshold) {
      setActiveImage((prev) => (prev + 1) % currentImages.length);
    } else if (delta < -threshold) {
      setActiveImage((prev) =>
        prev === 0 ? currentImages.length - 1 : prev - 1
      );
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <section
        style={{
          padding: "100px 0",
          background: "var(--bg-dark)",
        }}
      >
        <div className="container">
          <div style={styles.headerRow}>
            <div>
              <p style={styles.eyebrow}>Residences</p>
              <h2 style={styles.sectionTitle}>Our Collection</h2>
            </div>
          </div>

          <div className="tabs-row" style={styles.tabsRow}>
            {units.map((unit) => (
              <button
                key={unit.id}
                onClick={() => handleTabChange(unit.id)}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === unit.id ? styles.tabButtonActive : {}),
                }}
              >
                {unit.beds}
              </button>
            ))}
          </div>

          <div className="unit-grid" style={styles.unitGrid}>
            <div>
              <div
                className="main-image-box"
                style={styles.mainImageBox}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {!mainLoaded && <div style={styles.skeleton} />}

                <img
                  key={currentMainImage}
                  src={currentMainImage}
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

                <div style={styles.imageOverlay} />
              </div>

              <div className="thumb-grid" style={styles.thumbGrid}>
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setActiveImage(index);
                      setMainLoaded(false);
                    }}
                    aria-label={`View ${activeUnit.name} image ${index + 1}`}
                    style={{
                      ...styles.thumbButton,
                      ...(activeImage === index ? styles.thumbButtonActive : {}),
                    }}
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

              <div className="info-grid" style={styles.infoGrid}>
                <div style={styles.infoCard}>
                  <p style={styles.labelStyle}>Total Area</p>
                  <p style={styles.valueStyle}>{activeUnit.size}</p>
                </div>

                <div style={styles.priceCard}>
                  <p style={styles.labelStyle}>Price Range</p>
                  <p style={styles.valueStyle}>{activeUnit.price}</p>
                </div>
              </div>

              <div className="button-row" style={styles.buttonRow}>
                <button
                  onClick={() => setTourPrompt(true)}
                  style={styles.secondaryBtn}
                >
                  Virtual Tour
                </button>

                <button onClick={handleInquiry} style={styles.primaryBtn}>
                  Request Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {tourPrompt && (
        <div style={styles.tourPromptStyle} onClick={() => setTourPrompt(false)}>
          <div style={styles.tourCard} onClick={(e) => e.stopPropagation()}>
            <p style={styles.tourEyebrow}>Virtual Experience</p>

            <h3 style={styles.tourTitle}>Launch Virtual Tour</h3>

            <p style={styles.tourText}>
              The virtual tour for {activeUnit.beds} will open in a new tab so
              you can continue browsing Riverside Azure afterward.
            </p>

            <div style={styles.tourButtonRow}>
              <button
                onClick={() => setTourPrompt(false)}
                style={styles.tourSecondaryBtn}
              >
                Cancel
              </button>

              <a
                href={activeUnit.tour}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.tourPrimaryBtn}
              >
                Open Tour
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes skeletonLoading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes fadeInImage {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes goldPulse {
          0% { box-shadow: 0 0 0 rgba(212,175,55,0); }
          50% { box-shadow: 0 0 22px rgba(212,175,55,0.14); }
          100% { box-shadow: 0 0 0 rgba(212,175,55,0); }
        }

        .tabs-row button:hover {
          transform: translateY(-1px);
        }

        .main-image-box:hover img {
          transform: scale(1.04);
        }

        @media (max-width: 900px) {
          .unit-grid {
            grid-template-columns: 1fr !important;
            gap: 34px !important;
          }
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr !important;
          }

          .button-row {
            flex-direction: column !important;
          }

          .tabs-row {
            gap: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "34px",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.78rem",
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    color: "#fff",
    lineHeight: 1.1,
    margin: 0,
    fontFamily: "var(--font-serif)",
  },

  tabsRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "40px",
    paddingBottom: "6px",
  },

  tabButton: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(212,175,55,0.55)",
    padding: "12px 18px",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    transition: "all 0.28s ease",
    minHeight: "46px",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  },

  tabButtonActive: {
    background: "rgba(212,175,55,0.12)",
    color: "var(--gold-accent)",
    border: "1px solid var(--gold-accent)",
    boxShadow: "0 0 22px rgba(212,175,55,0.12)",
  },

  unitGrid: {
    display: "grid",
    gridTemplateColumns: "1.18fr 1fr",
    gap: "52px",
    alignItems: "start",
  },

  mainImageBox: {
    position: "relative",
    width: "100%",
    aspectRatio: "16/10",
    overflow: "hidden",
    background: "#111",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  skeleton: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, #1b1b1b 25%, #2a2a2a 50%, #1b1b1b 75%)",
    backgroundSize: "200% 100%",
    animation: "skeletonLoading 1.4s ease-in-out infinite",
  },

  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.7s ease, opacity 0.35s ease",
    animation: "fadeInImage 0.45s ease",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.18), rgba(0,0,0,0.02) 35%, rgba(0,0,0,0))",
    pointerEvents: "none",
  },

  thumbGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(82px,1fr))",
    gap: "10px",
    marginTop: "14px",
  },

  thumbButton: {
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    overflow: "hidden",
    cursor: "pointer",
    background: "#151515",
    padding: 0,
    border: "1px solid transparent",
    transition: "all 0.25s ease",
  },

  thumbButtonActive: {
    border: "1px solid var(--gold-accent)",
    boxShadow: "0 0 16px rgba(212,175,55,0.12)",
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
    transition: "transform 0.4s ease",
  },

  details: {
    width: "100%",
  },

  typeLabel: {
    color: "var(--gold-accent)",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    display: "inline-block",
    marginBottom: "10px",
  },

  title: {
    color: "#fff",
    fontSize: "clamp(2rem,5vw,3rem)",
    fontFamily: "var(--font-serif)",
    margin: "0 0 18px",
    lineHeight: 1.08,
  },

  description: {
    color: "var(--text-muted)",
    lineHeight: 1.8,
    marginBottom: "28px",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(1rem, 2.2vw, 1.06rem)",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(0,1fr))",
    gap: "18px",
    marginBottom: "30px",
  },

  infoCard: {
    borderLeft: "1px solid rgba(212,175,55,0.6)",
    paddingLeft: "15px",
  },

  priceCard: {
    borderLeft: "1px solid var(--gold-accent)",
    paddingLeft: "15px",
    background: "linear-gradient(90deg, rgba(212,175,55,0.05), rgba(212,175,55,0))",
    animation: "goldPulse 3s ease-in-out infinite",
  },

  labelStyle: {
    color: "#777",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "8px",
  },

  valueStyle: {
    color: "#fff",
    fontSize: "1.08rem",
    lineHeight: 1.5,
  },

  buttonRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    padding: "14px 24px",
    cursor: "pointer",
    fontWeight: "600",
    minHeight: "50px",
    flex: "1 1 220px",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.22)",
    padding: "14px 24px",
    cursor: "pointer",
    fontWeight: "500",
    minHeight: "50px",
    flex: "1 1 220px",
    transition: "transform 0.25s ease, border-color 0.25s ease, color 0.25s ease",
  },

  tourPromptStyle: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.74)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    padding: "20px",
  },

  tourCard: {
    background: "linear-gradient(180deg, #111 0%, #0c0c0c 100%)",
    padding: "34px 24px",
    width: "460px",
    maxWidth: "100%",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
  },

  tourEyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.76rem",
    marginBottom: "12px",
  },

  tourTitle: {
    color: "#fff",
    fontFamily: "var(--font-serif)",
    margin: "0 0 14px",
    fontSize: "1.7rem",
    lineHeight: 1.2,
  },

  tourText: {
    color: "#bbb",
    lineHeight: "1.75",
    marginBottom: "24px",
    fontFamily: "var(--font-sans)",
  },

  tourButtonRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  tourPrimaryBtn: {
    background: "var(--gold-accent)",
    color: "#000",
    border: "none",
    padding: "14px 22px",
    textDecoration: "none",
    fontWeight: "600",
    minHeight: "48px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 180px",
  },

  tourSecondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "14px 22px",
    cursor: "pointer",
    minHeight: "48px",
    flex: "1 1 140px",
  },
};

export default Units;