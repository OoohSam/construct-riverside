import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const fallbackImage = "/JNCBROTHERS.png";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    availableUnits: 198,
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "KSh 7.9M - 10.2M",
    tour: "https://vr.justeasy.cn/view/1u7358gi64383759-1788920225.html",
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
    availableUnits: 139,
    size: "98.00 - 104.63 SQM",
    desc: "Balanced proportions for long-term living. Perfect for young families.",
    price: "KSh 11M - 15.2M",
    tour: "https://vr.justeasy.cn/view/1w7863l61p4164c2-1788937305.html",
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
    availableUnits: 66,
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "KSh 16.75M - 20.7M",
    tour: "https://vr.justeasy.cn/view/vav178w609449re1-1788937329.html",
    images: [
      new URL("../assets/Apartments/type-c/3 Bedroom.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a2.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a3.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a4.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a1.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a5.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a6.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a7.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a8.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a9.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a10.webp", import.meta.url).href,
      new URL("../assets/Apartments/type-c/a11.webp", import.meta.url).href,
    ],
  },
];

const UnitSection = ({ onInquire, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [mainLoaded, setMainLoaded] = useState(false);
  const [tourPrompt, setTourPrompt] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const activeUnit = useMemo(() => units.find((unit) => unit.id === activeTab) || units[0], [activeTab]);
  const currentImages = activeUnit?.images?.length > 0 ? activeUnit.images : [fallbackImage];
  const currentMainImage = currentImages[activeImage] || fallbackImage;

  useEffect(() => {
    setMainLoaded(false);
  }, [activeTab, activeImage]);

  const getUnitValue = (beds) => {
    if (beds === "1 Bedroom") return 7900000;
    if (beds === "2 Bedroom") return 11000000;
    if (beds === "3 Bedroom") return 16750000;
    return 0;
  };

  const trackUnitView = (unit) => {
    const eventId = createEventId(`view_${unit.beds.replaceAll(" ", "_").toLowerCase()}`);
    trackMetaEvent(
      "ViewContent",
      {
        content_name: unit.beds,
        content_category: "Unit Type",
        unit_type: unit.beds,
        unit_name: unit.name,
        price_range: unit.price,
        size: unit.size,
        available_units: unit.availableUnits,
        currency: "KES",
        value: getUnitValue(unit.beds),
      },
      eventId
    );
  };

  const handleTabChange = (id) => {
    const selectedUnit = units.find((unit) => unit.id === id);
    if (selectedUnit) trackUnitView(selectedUnit);
    setActiveTab(id);
    setActiveImage(0);
    setMainLoaded(false);
  };

  const handleInquiry = () => {
    const eventId = createEventId("unit_inquiry");
    trackMetaEvent(
      "Lead",
      {
        content_name: activeUnit.beds,
        content_category: "Unit Inquiry",
        unit_type: activeUnit.beds,
        unit_name: activeUnit.name,
        price_range: activeUnit.price,
        size: activeUnit.size,
        available_units: activeUnit.availableUnits,
        value: getUnitValue(activeUnit.beds),
        currency: "KES",
      },
      eventId
    );

    if (typeof onInquire === "function") {
      onInquire(activeUnit.beds);
      return;
    }
    if (typeof onOpenModal === "function") {
      onOpenModal(activeUnit.beds);
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
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
      <section className="residences-section">
        <div className="container">
          
          {/* =================================================
              MINIMALIST HEADER
          ================================================= */}
          <header className="residences-header">
            <div className="residences-header-left">
              <span className="residences-number">02</span>
              <h2 className="residences-title">The Residences</h2>
            </div>
            <div className="residences-header-right">
              <p>Three distinct typologies, united by a singular commitment to exceptional spatial design.</p>
            </div>
          </header>

          {/* =================================================
              GALLERY TABS
          ================================================= */}
          <div className="residence-tabs">
            {units.map((unit, index) => {
              const active = activeTab === unit.id;
              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => handleTabChange(unit.id)}
                  className={`residence-tab ${active ? "residence-tab-active" : ""}`}
                >
                  <span className="residence-tab-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="residence-tab-name">{unit.beds}</span>
                  {active && (
                    <motion.span 
                      layoutId="activeTabIndicator" 
                      className="residence-tab-line"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================
              MAIN RESIDENCE DISPLAY
          ================================================= */}
          <div className="residence-display">
            
            {/* LEFT: GALLERY */}
            <div className="residence-gallery">
              <div 
                className="residence-main-image"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {!mainLoaded && <div className="residence-image-loading" />}
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentMainImage}
                    src={currentMainImage}
                    alt={activeUnit.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mainLoaded ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onLoad={() => setMainLoaded(true)}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImage;
                      setMainLoaded(true);
                    }}
                    className="residence-image"
                  />
                </AnimatePresence>

                <div className="residence-image-counter">
                  {String(activeImage + 1).padStart(2, "0")} / {String(currentImages.length).padStart(2, "0")}
                </div>
              </div>

              <div className="residence-thumbnails">
                {currentImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => {
                      setActiveImage(index);
                      setMainLoaded(false);
                    }}
                    className={`residence-thumbnail ${activeImage === index ? "residence-thumbnail-active" : ""}`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="residence-details">
              <div className="residence-detail-header">
                <span className="residence-type">{activeUnit.type}</span>
                <h3 className="residence-name">{activeUnit.name}</h3>
              </div>

              <p className="residence-description">{activeUnit.desc}</p>

              {/* SPECIFICATION LIST */}
              <ul className="residence-specs">
                <li className="residence-spec">
                  <span className="spec-label">Area</span>
                  <span className="spec-value">{activeUnit.size}</span>
                </li>
                <li className="residence-spec">
                  <span className="spec-label">Pricing</span>
                  <span className="spec-value">{activeUnit.price}</span>
                </li>
                <li className="residence-spec">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value">{activeUnit.availableUnits} Units</span>
                </li>
              </ul>

              {/* ACTIONS */}
              <div className="residence-actions">
                <button type="button" className="btn-solid" onClick={handleInquiry}>
                  Request Availability
                </button>
                <button 
                  type="button" 
                  className="btn-outline"
                  onClick={() => {
                    const eventId = createEventId("virtual_tour_click");
                    trackMetaEvent("ViewContent", { content_name: `${activeUnit.beds} Virtual Tour` }, eventId);
                    setTourPrompt(true);
                  }}
                >
                  Virtual Tour ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          VIRTUAL TOUR MODAL (Minimalist)
      ================================================= */}
      <AnimatePresence>
        {tourPrompt && (
          <motion.div 
            className="tour-modal-backdrop" 
            onClick={() => setTourPrompt(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="tour-modal" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
            >
              <button type="button" className="tour-modal-close" onClick={() => setTourPrompt(false)}>✕</button>
              <h3 className="tour-modal-title">Virtual Experience</h3>
              <p className="tour-modal-text">
                Step inside {activeUnit.name}. The interactive tour will open in a secure window.
              </p>
              <div className="tour-modal-actions">
                <a href={activeUnit.tour} target="_blank" rel="noopener noreferrer" className="btn-solid-modal">
                  Enter Tour
                </a>
                <button type="button" onClick={() => setTourPrompt(false)} className="btn-text">
                  Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          STYLES (High Contrast + New Typography)
      ================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --white: #FFFFFF;
          --off-white: #F9F9F9;
          --text-dark: #111111;
          --text-dark-soft: #444444; 
          --azure-main: #1A2875;
          --azure-deep: #111A55;
          --gold-accent: #C5A059;
          --gold-soft: #D4B67A;
          --border-light: #DDDDDD;
          
          --font-body: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        .residences-section {
          background: var(--azure-deep);
          color: var(--white);
          padding: clamp(100px, 12vw, 160px) 0;
          font-family: var(--font-body);
        }

        /* HEADER */
        .residences-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-end;
          margin-bottom: clamp(60px, 8vw, 100px);
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Increased opacity for contrast */
        }

        .residences-header-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .residences-number {
          color: var(--gold-accent); /* Changed to gold for higher legibility */
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .residences-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .residences-header-right p {
          margin: 0;
          color: rgba(255, 255, 255, 0.85); /* Increased contrast */
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 400px;
        }

        /* TABS */
        .residence-tabs {
          display: flex;
          gap: 48px;
          margin-bottom: clamp(40px, 6vw, 60px);
        }

        .residence-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 0 16px 0;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7); /* Boosted contrast from 0.5 */
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .residence-tab:hover, .residence-tab-active {
          color: var(--white);
        }

        .residence-tab-number {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .residence-tab-name {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .residence-tab-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px; /* Made thicker for visual hierarchy */
          background: var(--gold-accent);
        }

        /* DISPLAY GRID */
        .residence-display {
          display: grid;
          grid-template-columns: 1fr 450px; 
          gap: clamp(60px, 8vw, 120px);
          align-items: start;
        }

        /* GALLERY */
        .residence-main-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .residence-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .residence-image-loading {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%);
          background-size: 200% 100%;
          animation: pulse 1.5s infinite linear;
        }

        @keyframes pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .residence-image-counter {
          position: absolute;
          bottom: 24px;
          right: 24px;
          color: var(--azure-deep);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: rgba(255,255,255,0.9);
          padding: 8px 16px;
        }

        .residence-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .residence-thumbnail {
          aspect-ratio: 16 / 10;
          padding: 0;
          border: 2px solid transparent; /* Better active state indicator */
          background: transparent;
          cursor: pointer;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .residence-thumbnail:hover {
          opacity: 0.9;
        }

        .residence-thumbnail-active {
          opacity: 1;
          border-color: var(--gold-accent);
        }

        .residence-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* DETAILS */
        .residence-detail-header {
          margin-bottom: 24px;
        }

        .residence-type {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .residence-name {
          margin: 0;
          color: var(--white);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.2;
        }

        .residence-description {
          color: rgba(255, 255, 255, 0.85); /* Boosted contrast */
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* SPECIFICATION LIST */
        .residence-specs {
          list-style: none;
          padding: 0;
          margin: 0 0 48px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2); /* Boosted contrast */
        }

        .residence-spec {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .spec-label {
          color: rgba(255, 255, 255, 0.75); /* Boosted contrast */
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .spec-value {
          color: var(--gold-accent); /* Make data pop */
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
        }

        /* BUTTONS */
        .residence-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn-solid {
          width: 100%;
          min-height: 60px;
          background: var(--white);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-solid:hover {
          background: var(--gold-accent);
          color: var(--white);
        }

        .btn-outline {
          width: 100%;
          min-height: 60px;
          background: transparent;
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.4); /* Thicker border */
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .btn-outline:hover {
          border-color: var(--gold-accent);
          color: var(--gold-accent);
        }

        /* MODAL */
        .tour-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(17, 26, 85, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .tour-modal {
          background: var(--white); /* White modal for massive contrast against blue background */
          color: var(--azure-deep);
          padding: 48px;
          width: 100%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .tour-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: var(--text-dark);
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        
        .tour-modal-close:hover {
          opacity: 1;
        }

        .tour-modal-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 400;
          margin: 0 0 16px 0;
        }

        .tour-modal-text {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 1rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .tour-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .btn-solid-modal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 60px;
          background: var(--azure-deep);
          color: var(--white);
          border: none;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        
        .btn-solid-modal:hover {
          background: var(--gold-accent);
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 16px 0;
          transition: color 0.3s ease;
        }
        
        .btn-text:hover {
          color: var(--azure-deep);
        }

        /* =================================================
           MOBILE RESPONSIVENESS
        ================================================= */
        @media (max-width: 1024px) {
          .residence-display {
            grid-template-columns: 1fr;
          }
          .residences-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .residences-section {
            padding: 80px 0;
          }
          .residence-tabs {
            overflow-x: auto;
            margin: 0 -24px 32px;
            padding: 0 24px;
            scrollbar-width: none;
          }
          .residence-tab {
            flex-shrink: 0;
          }
          .residence-specs {
            margin-bottom: 32px;
          }
          .tour-modal {
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  );
};

export default UnitSection;