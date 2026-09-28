import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fallbackImage = "/JNCBROTHERS.png";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "KSh 7.9M - 11M",
    tour: "https://vr.justeasy.cn/view/1w77n7g4h7387018-1774860206.html",
    images: [
      new URL("../assets/Apartments/type-b/1 bedroom.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-b/b1.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-b/b2.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-b/b3.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-b/b4.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-b/b5.webp", import.meta.url).href,
    ],
  },
  {
    id: 2,
    type: "Type B",
    name: "The Urban Sanctuary",
    beds: "2 Bedroom",
    size: "98.00 - 104.63 SQM",
    desc: "Balanced proportions for long-term living. Perfect for young families.",
    price: "KSh 11M - 17M",
    tour: "https://vr.justeasy.cn/view/17f74741k11h3gj1-1774860063.html",
    images: [
      new URL("../assets/Apartments/type-a/2 Bedroom.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d1.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d2.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d3.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d4.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-a/d5.webp", import.meta.url).href,
    ],
  },
  {
    id: 3,
    type: "Type C",
    name: "The Heritage Residence",
    beds: "3 Bedroom",
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "KSh 16M - 23M",
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
    () => units.find((unit) => unit.id === activeTab) || units[0],
    [activeTab]
  );

  const currentImages = activeUnit?.images?.length > 0 ? activeUnit.images : [fallbackImage];
  const currentMainImage = currentImages[activeImage] || fallbackImage;

  /* =========================================================
     GALLERY MOTION
     ========================================================= */
  const elegantEase = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: elegantEase } },
  };

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
    if (touchStartX.current === null || touchEndX.current === null || currentImages.length <= 1) return;

    const delta = touchStartX.current - touchEndX.current;
    const threshold = 40;

    if (delta > threshold) {
      setActiveImage((prev) => (prev + 1) % currentImages.length);
    } else if (delta < -threshold) {
      setActiveImage((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <main className="units-page">
        {/* =====================================================
            PAGE INTRO
        ====================================================== */}
        <section className="hero-editorial">
          <div className="container hero-text-wrapper">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Riverside Azure · Residences
              </motion.span>
              <motion.h1 className="heading-xl" variants={fadeUp}>
                Designed for<br />
                <span className="text-muted">the way you live.</span>
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeUp}>
                A considered collection of one, two and three-bedroom residences 
                at the heart of Nairobi's Riverside neighbourhood.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            RESIDENCE CATALOGUE
        ====================================================== */}
        <section className="section-padding">
          <div className="container">
            <div className="section-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                <span className="eyebrow">The Collection</span>
                <h2 className="heading-large">Three ways to call Riverside home.</h2>
              </motion.div>
            </div>

            {/* MINIMALIST TABS */}
            <div className="tabs-container">
              {units.map((unit, index) => {
                const active = activeTab === unit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => handleTabChange(unit.id)}
                    className={`tab-btn ${active ? "active" : ""}`}
                  >
                    <span className="tab-number">0{index + 1}</span>
                    <span className="tab-label">{unit.beds}</span>
                    {active && (
                      <motion.span 
                        layoutId="activeTabIndicator" 
                        className="tab-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* RESIDENCE DISPLAY */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUnit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: elegantEase }}
                className="residence-grid"
              >
                {/* GALLERY (Left) */}
                <div className="residence-gallery">
                  <div
                    className="gallery-main-frame"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {!mainLoaded && <div className="skeleton-loader" />}
                    <img
                      key={currentMainImage}
                      src={currentMainImage}
                      alt={activeUnit.name}
                      onLoad={() => setMainLoaded(true)}
                      onError={(e) => {
                        if (e.currentTarget.src !== fallbackImage) {
                          e.currentTarget.onerror = null; 
                          e.currentTarget.src = fallbackImage;
                        }
                        setMainLoaded(true);
                      }}
                      className={mainLoaded ? "loaded" : ""}
                    />
                    <div className="gallery-counter">
                      {String(activeImage + 1).padStart(2, "0")} / {String(currentImages.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="gallery-thumbnails">
                    {currentImages.map((img, index) => (
                      <button
                        key={`${activeUnit.id}-thumb-${index}`}
                        type="button"
                        onClick={() => {
                          setActiveImage(index);
                          setMainLoaded(false);
                        }}
                        className={`thumb-btn ${activeImage === index ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          alt={`${activeUnit.name} view ${index + 1}`}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* DETAILS (Right) */}
                <div className="residence-details">
                  <div className="detail-header">
                    <span className="eyebrow text-gold">{activeUnit.type}</span>
                    <h3 className="heading-medium">{activeUnit.name}</h3>
                    <p className="body-standard text-muted">{activeUnit.desc}</p>
                  </div>

                  <ul className="spec-list">
                    <li>
                      <span className="spec-label">Residence</span>
                      <span className="spec-value">{activeUnit.beds}</span>
                    </li>
                    <li>
                      <span className="spec-label">Total Area</span>
                      <span className="spec-value">{activeUnit.size}</span>
                    </li>
                    <li className="spec-highlight">
                      <span className="spec-label">Starting From</span>
                      <span className="spec-value price-text text-gold">{activeUnit.price}</span>
                    </li>
                  </ul>

                  <div className="action-group">
                    <button type="button" onClick={handleInquiry} className="btn-solid">
                      Request Availability
                    </button>
                    <button type="button" onClick={() => setTourPrompt(true)} className="btn-minimal">
                      Enter Virtual Tour <span className="arrow-icon">⟶</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <section className="section-padding bg-light">
          <div className="container">
            <motion.div
              className="statement-editorial"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="col-left">
                <span className="eyebrow">The Address</span>
                <h2 className="heading-large">
                  A quieter side of<br />modern Nairobi.
                </h2>
              </div>
              <div className="col-right">
                <p className="body-large text-muted">
                  Riverside Azure brings together considered residences, contemporary amenities, and a well-connected address along Riverside Drive.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            VIRTUAL TOUR MODAL
        ====================================================== */}
        <AnimatePresence>
          {tourPrompt && (
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTourPrompt(false)}
            >
              <motion.div
                className="modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: elegantEase }}
                onClick={(e) => e.stopPropagation()}
              >
                <button type="button" className="modal-close" onClick={() => setTourPrompt(false)}>
                  ✕
                </button>
                <span className="eyebrow text-gold">Virtual Experience</span>
                <h3 className="heading-medium">{activeUnit.name}</h3>
                <p className="body-standard text-muted">
                  Explore the {activeUnit.beds.toLowerCase()} virtually. The interactive tour will open in a new secure window.
                </p>
                <div className="modal-actions">
                  <a href={activeUnit.tour} target="_blank" rel="noopener noreferrer" className="btn-solid">
                    Enter Virtual Tour
                  </a>
                  <button type="button" onClick={() => setTourPrompt(false)} className="btn-minimal">
                    Go Back
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* =========================================================
          STYLES (Azure & Gold Integrated)
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --color-bg: #FCFCFC;
          --color-bg-alt: #F3F3F3;
          --color-azure: #111A55;   /* Deep Azure Blue */
          --color-gold: #C5A059;    /* Elegant Gold */
          --color-text-muted: #767676;
          --color-border: #E5E5E5;
          
          --font-sans: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .units-page {
          width: 100%;
          background: var(--color-bg);
          color: var(--color-azure); /* Main text color switches to deep azure */
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
        .text-muted { color: var(--color-text-muted); }
        .text-gold { color: var(--color-gold) !important; }
        .bg-light { background: var(--color-bg-alt); }

        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gold); /* Eyebrows default to Gold */
          margin-bottom: 1rem;
        }

        .heading-xl, .heading-large, .heading-medium {
          font-family: var(--font-display);
          color: var(--color-azure);
        }

        .heading-xl {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 1.05;
          margin: 0 0 2rem 0;
          letter-spacing: -0.02em;
        }

        .heading-large {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
        }

        .heading-medium {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 1rem 0;
        }

        .body-large {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          line-height: 1.4;
          font-weight: 400;
          margin: 0;
        }

        .body-standard {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .section-padding {
          padding: clamp(80px, 15vw, 160px) 0;
        }

        /* HERO EDITORIAL */
        .hero-editorial {
          padding-top: clamp(150px, 20vh, 220px);
          padding-bottom: clamp(60px, 10vh, 100px);
          border-bottom: 1px solid var(--color-border);
        }

        .hero-text-wrapper {
          max-width: 1100px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0;
        }

        /* TABS CONTAINER */
        .section-header { margin-bottom: clamp(40px, 6vw, 60px); }

        .tabs-container {
          display: flex;
          gap: clamp(20px, 4vw, 60px);
          margin-bottom: clamp(40px, 6vw, 80px);
          border-bottom: 1px solid var(--color-border);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tabs-container::-webkit-scrollbar { display: none; }

        .tab-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 0 16px 0;
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: color 0.3s ease;
          flex-shrink: 0;
        }

        .tab-btn:hover, .tab-btn.active {
          color: var(--color-azure);
        }

        .tab-number {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .tab-label {
          font-size: 1.1rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tab-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-gold); /* Indicator in Gold */
        }

        /* RESIDENCE DISPLAY GRID */
        .residence-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: start;
        }

        /* GALLERY */
        .gallery-main-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          background: var(--color-bg-alt);
          overflow: hidden;
          margin-bottom: 16px;
        }

        .gallery-main-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .gallery-main-frame img.loaded {
          opacity: 1;
        }

        .skeleton-loader {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #F3F3F3 0%, #EFEFEF 50%, #F3F3F3 100%);
          background-size: 200% 100%;
          animation: skeleton-pulse 1.5s infinite linear;
        }

        @keyframes skeleton-pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .gallery-counter {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: var(--color-azure);
          color: #FFF;
          padding: 8px 16px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          border-radius: 40px;
        }

        .gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 12px;
        }

        .thumb-btn {
          aspect-ratio: 16 / 11;
          padding: 0;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) opacity(0.5);
          transition: all 0.4s ease;
        }

        .thumb-btn:hover img {
          filter: grayscale(50%) opacity(0.8);
        }

        .thumb-btn.active {
          border-color: var(--color-gold); /* Gold border for active thumb */
        }
        
        .thumb-btn.active img {
          filter: grayscale(0%) opacity(1);
        }

        /* DETAILS LIST */
        .detail-header {
          margin-bottom: 3rem;
        }

        .spec-list {
          list-style: none;
          padding: 0;
          margin: 0 0 3rem 0;
          border-top: 1px solid var(--color-border);
        }

        .spec-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .spec-label {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
        }

        .spec-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-azure);
        }

        .spec-highlight {
          background: var(--color-bg-alt);
          padding: 1.5rem !important;
          margin: 0 -1.5rem; 
        }

        .price-text {
          font-family: var(--font-display);
          font-size: 1.4rem;
        }

        /* BUTTONS - AZURE & GOLD INTERACTIONS */
        .action-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 60px;
          background: var(--color-azure);
          color: #FFF;
          border: none;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-solid:hover {
          background: var(--color-gold);
          color: var(--color-azure); /* Ensures high legibility against Gold */
          transform: translateY(-2px);
        }

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
          padding: 5px 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .arrow-icon {
          font-size: 1.5em;
          font-weight: 300;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-minimal:hover {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        .btn-minimal:hover .arrow-icon {
          transform: translateX(10px);
        }

        /* BOTTOM STATEMENT */
        .statement-editorial {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: center;
        }

        /* MODAL LIGHTBOX */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(17, 26, 85, 0.8); /* Azure tinted blur */
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-card {
          background: var(--color-bg);
          padding: clamp(40px, 6vw, 60px);
          width: 100%;
          max-width: 550px;
          position: relative;
          box-shadow: 0 20px 50px rgba(17, 26, 85, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: var(--color-azure);
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.5;
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .modal-close:hover {
          opacity: 1;
          color: var(--color-gold);
        }

        .modal-actions {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .residence-grid, .statement-editorial {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .gallery-main-frame {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 768px) {
          .spec-highlight {
            margin: 0;
            padding: 1.5rem 0 !important;
            background: transparent;
          }
          .modal-card {
            padding: 40px 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Units;