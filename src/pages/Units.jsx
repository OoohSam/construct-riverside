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
      new URL("../assets/Apartments/type-b/c1.webp", import.meta.url).href,
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
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.25, 1, 0.5, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: quietEase } }
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
        <section className="units-intro">
          <div className="container">
            <div className="units-intro-grid">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              >
                <motion.p className="section-meta gold-text" variants={fadeUp}>
                  Riverside Azure · Residences
                </motion.p>
                <motion.h1 className="units-hero-title" variants={fadeUp}>
                  Designed for<br />
                  the way you live.
                </motion.h1>
              </motion.div>

              <motion.div
                className="units-intro-aside"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                <span className="aside-number">01</span>
                <p className="body-text">
                  A considered collection of one, two and three-bedroom residences 
                  at the heart of Nairobi's Riverside neighbourhood.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESIDENCE CATALOGUE
        ====================================================== */}
        <section className="units-catalogue">
          <div className="container">
            <div className="catalogue-header">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                <p className="section-meta">The Collection</p>
                <h2 className="section-title">
                  Three ways to<br />call Riverside home.
                </h2>
              </motion.div>
            </div>

            {/* MINIMALIST TABS */}
            <div className="catalogue-tabs">
              {units.map((unit, index) => {
                const active = activeTab === unit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => handleTabChange(unit.id)}
                    className={`catalogue-tab ${active ? "active" : ""}`}
                  >
                    <span className="tab-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="tab-name">{unit.beds}</span>
                    {active && (
                      <motion.span 
                        layoutId="unitTabIndicator" 
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: quietEase }}
                className="residence-display"
              >
                {/* GALLERY */}
                <div className="residence-gallery">
                  <div
                    className="main-image-wrap"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {!mainLoaded && <div className="image-skeleton" />}
                    <img
                      key={currentMainImage}
                      src={currentMainImage}
                      alt={activeUnit.name}
                      onLoad={() => setMainLoaded(true)}
                      onError={(e) => {
                        // FIX: Prevent infinite loop if fallback image is also missing
                        if (e.currentTarget.src !== fallbackImage) {
                          e.currentTarget.onerror = null; 
                          e.currentTarget.src = fallbackImage;
                        }
                        setMainLoaded(true);
                      }}
                      className={mainLoaded ? "loaded" : ""}
                    />
                    <div className="image-counter">
                      {String(activeImage + 1).padStart(2, "0")} / {String(currentImages.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="thumbnails-grid">
                    {currentImages.map((img, index) => (
                      <button
                        key={`${activeUnit.id}-thumb-${index}`}
                        type="button"
                        onClick={() => {
                          setActiveImage(index);
                          setMainLoaded(false);
                        }}
                        className={`thumbnail-btn ${activeImage === index ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          alt={`${activeUnit.name} thumbnail`}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="residence-details">
                  <div className="detail-header">
                    <span className="unit-type">{activeUnit.type}</span>
                    <h3 className="unit-name">{activeUnit.name}</h3>
                  </div>
                  <p className="unit-desc">{activeUnit.desc}</p>

                  <ul className="unit-specs">
                    <li>
                      <span className="spec-label">Residence</span>
                      <span className="spec-val">{activeUnit.beds}</span>
                    </li>
                    <li>
                      <span className="spec-label">Total Area</span>
                      <span className="spec-val">{activeUnit.size}</span>
                    </li>
                    <li className="spec-price-row">
                      <span className="spec-label">From</span>
                      <span className="spec-price">{activeUnit.price}</span>
                    </li>
                  </ul>

                  <div className="unit-actions">
                    <button type="button" onClick={handleInquiry} className="btn-solid">
                      Request Availability
                    </button>
                    <button type="button" onClick={() => setTourPrompt(true)} className="btn-outline">
                      Virtual Tour ↗
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
        <section className="units-statement">
          <div className="container">
            <motion.div
              className="statement-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="statement-left">
                <span className="section-meta">02 — The Address</span>
                <h2 className="section-title">
                  A quieter side of<br />modern Nairobi.
                </h2>
              </div>
              <div className="statement-right">
                <p className="body-text">
                  Riverside Azure brings together considered residences, 
                  contemporary amenities, and a well-connected address along Riverside Drive.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            VIRTUAL TOUR MODAL (Gallery Minimalist)
        ====================================================== */}
        <AnimatePresence>
          {tourPrompt && (
            <motion.div
              className="tour-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTourPrompt(false)}
            >
              <motion.div
                className="tour-modal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: quietEase }}
                onClick={(e) => e.stopPropagation()}
              >
                <button type="button" className="tour-modal-close" onClick={() => setTourPrompt(false)}>
                  ✕
                </button>
                <h3 className="tour-modal-title">Virtual Experience</h3>
                <p className="tour-modal-text">
                  Explore the {activeUnit.beds} virtually. The tour will open in a new tab.
                </p>
                <div className="tour-modal-actions">
                  <a href={activeUnit.tour} target="_blank" rel="noopener noreferrer" className="btn-solid">
                    Enter Tour
                  </a>
                  <button type="button" onClick={() => setTourPrompt(false)} className="btn-text">
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist Structure)
          ========================================================= */}
      <style>{`
        .units-page {
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

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .body-text {
          margin: 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        /* INTRO */
        .units-intro {
          padding: clamp(140px, 15vw, 180px) 0 clamp(80px, 10vw, 120px) 0;
          background: var(--off-white);
        }

        .units-intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(60px, 8vw, 100px);
          align-items: end;
        }

        .units-hero-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.03em;
          color: var(--azure-deep);
        }

        .units-intro-aside {
          padding-left: 40px;
          border-left: 1px solid var(--border-light);
        }

        .aside-number {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-serif);
          font-size: 2.5rem;
          line-height: 1;
          margin-bottom: 24px;
        }

        /* CATALOGUE */
        .units-catalogue {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .catalogue-header {
          margin-bottom: 60px;
        }

        /* TABS (Gallery Minimalist Style) */
        .catalogue-tabs {
          display: flex;
          gap: 48px;
          margin-bottom: clamp(40px, 6vw, 60px);
          border-bottom: 1px solid var(--border-light);
        }

        .catalogue-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 0 16px 0;
          background: transparent;
          border: none;
          color: rgba(21, 24, 42, 0.4);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .catalogue-tab:hover {
          color: var(--azure-deep);
        }

        .catalogue-tab.active {
          color: var(--azure-deep);
        }

        .tab-number {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
        }

        .tab-name {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .tab-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gold-accent);
        }

        /* RESIDENCE DISPLAY */
        .residence-display {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
        }

        /* GALLERY */
        .main-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--off-white);
          overflow: hidden;
        }

        .main-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .main-image-wrap img.loaded {
          opacity: 1;
        }

        .image-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(21,24,42,0.02) 0%, rgba(21,24,42,0.05) 50%, rgba(21,24,42,0.02) 100%);
          background-size: 200% 100%;
          animation: pulse 1.5s infinite linear;
        }

        @keyframes pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .image-counter {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.9);
          color: var(--azure-deep);
          padding: 8px 16px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .thumbnail-btn {
          aspect-ratio: 16 / 10;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .thumbnail-btn:hover {
          opacity: 0.8;
        }

        .thumbnail-btn.active {
          opacity: 1;
        }

        .thumbnail-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* DETAILS */
        .detail-header {
          margin-bottom: 24px;
        }

        .unit-type {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .unit-name {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 400;
          color: var(--azure-deep);
        }

        .unit-desc {
          margin: 0 0 40px 0;
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        .unit-specs {
          list-style: none;
          padding: 0;
          margin: 0 0 48px 0;
          border-top: 1px solid var(--border-light);
        }

        .unit-specs li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-light);
        }

        .spec-label {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .spec-val {
          color: var(--azure-deep);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .spec-price-row {
          background: var(--off-white);
          padding: 24px !important;
          margin-top: -1px; /* Overlaps border */
        }

        .spec-price {
          color: var(--gold-hover); /* Deeper gold for readability */
          font-family: var(--font-serif);
          font-size: 1.4rem;
        }

        /* BUTTONS */
        .unit-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn-solid {
          width: 100%;
          min-height: 56px;
          background: var(--azure-deep);
          color: var(--white);
          border: none;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-solid:hover {
          background: var(--gold-accent);
          color: var(--azure-deep);
        }

        .btn-outline {
          width: 100%;
          min-height: 56px;
          background: transparent;
          color: var(--azure-deep);
          border: 1px solid rgba(21, 24, 42, 0.2);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .btn-outline:hover {
          border-color: var(--azure-deep);
        }

        /* BOTTOM STATEMENT */
        .units-statement {
          padding: clamp(100px, 12vw, 160px) 0;
          background: var(--azure-deep);
          color: var(--white);
        }

        .statement-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: end;
        }

        .statement-right .body-text {
          color: rgba(255, 255, 255, 0.7);
          max-width: 400px;
        }

        /* MODAL */
        .tour-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(17, 26, 85, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .tour-modal {
          background: var(--white);
          padding: 48px;
          width: 100%;
          max-width: 480px;
          position: relative;
        }

        .tour-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: var(--azure-deep);
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.5;
        }

        .tour-modal-title {
          font-family: var(--font-display);
          font-size: 2rem;
          margin: 0 0 16px 0;
          color: var(--azure-deep);
        }

        .tour-modal-text {
          color: var(--text-dark-soft);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .tour-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 16px 0;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .units-intro-grid, .residence-display, .statement-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .units-intro-aside {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid var(--border-light);
            padding-top: 32px;
          }
        }

        @media (max-width: 768px) {
          .units-intro {
            padding: 120px 0 80px;
          }
          .units-catalogue {
            padding: 80px 0;
          }
          .catalogue-tabs {
            overflow-x: auto;
            margin: 0 -24px 40px;
            padding: 0 24px;
            scrollbar-width: none;
          }
          .catalogue-tabs::-webkit-scrollbar {
            display: none;
          }
          .catalogue-tab {
            flex-shrink: 0;
          }
          .spec-price-row {
            padding: 24px 0 !important;
            background: transparent;
          }
          .tour-modal {
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Units;