import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero/sunlit-luxury-balcony-overlooking-nairobi.webp";


import {
  trackMetaEvent,
  createEventId,
} from "../lib/metaPixel.js";

export default function Hero({ onCtaClick }) {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCta = () => {
    try {
      const eventId = createEventId();

      trackMetaEvent("Contact", {
        eventID: eventId,
        content_name: "Book A Unit Today",
        content_category: "Hero CTA",
        contact_method: "Lead Modal",
      });
    } catch (error) {
      console.warn("Meta Pixel tracking failed:", error);
    }

    if (typeof onCtaClick === "function") {
      onCtaClick();
    }
  };

  const imageTransform = `translate3d(0, ${Math.min(
    scrollY * 0.1,
    70
  )}px, 0) scale(1.04)`;

  return (
    <>
      <section
        className="hero-section"
        aria-label="Riverside Azure Luxury Apartments"
      >
        {/* BACKGROUND IMAGE */}
        <div className="hero-background">
          <img
            src={heroImage}
            alt="Luxury residences at Riverside Azure overlooking Nairobi"
            className={`hero-image ${
              imageLoaded ? "is-loaded" : ""
            }`}
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
            style={{ transform: imageTransform }}
          />
        </div>

        {/* LIGHT GRADIENT FADE */}
        <div
          className="hero-light-overlay"
          aria-hidden="true"
        />

        {/* MAIN TEXT (FROSTED GLASS CARD) */}
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="hero-heading-dark">Your</span>
            <span className="hero-heading-dark">Sanctuary</span>
            <span className="hero-heading-gold">in Riverside</span>
          </h1>

          <div className="hero-divider" />

          <p className="hero-description">
            Discover 1, 2 &amp; 3-bedroom residences at
            25 Riverside Drive, designed for contemporary
            city living and investment potential.
          </p>

          <button
            type="button"
            className="hero-button"
            onClick={handleCta}
          >
            <span>Book A Unit Today</span>

            <span
              className="hero-button-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>


        



        {/* PROJECT BRANDING */}
        <div className="hero-project-mark">
          <span className="hero-project-mark-line" />
          <span>RIVERSIDE AZURE</span>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero-scroll">
          <span>Scroll to Explore</span>

          <span className="hero-scroll-line">
            <span />
          </span>
        </div>
      </section>

      <style>{`
        /* ==========================================
           HERO FOUNDATION
        ========================================== */

        .hero-section {
          --hero-navy: #192335;
          --hero-gold: #967729;
          --hero-gold-light: #b29650;
          --hero-font: var(--font-display, "Playfair Display", "Montserrat", serif);

          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 600px;
          background: #f4f1eb;
          overflow: hidden;
          isolation: isolate;
        }

        /* ==========================================
           BACKGROUND
        ========================================== */

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: #f4f1eb;
        }

        .hero-image {
          position: absolute;
          inset: -2%;
          width: 104%;
          height: 104%;
          display: block;
          object-fit: cover;
          object-position: center center;
          opacity: 0;
          will-change: transform;
          transition: opacity 1s ease;
        }

        .hero-image.is-loaded {
          opacity: 1;
        }

        /* ==========================================
           SOFT WHITE LEFT FADE
        ========================================== */

        .hero-light-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          background: linear-gradient(
            90deg,
            rgba(250, 249, 246, 0.85) 0%,
            rgba(250, 249, 246, 0.6) 25%,
            rgba(250, 249, 246, 0.15) 50%,
            rgba(250, 249, 246, 0) 70%
          );
        }

        /* ==========================================
           CONTENT LAYOUT (GLASSMORPHISM)
        ========================================== */

        .hero-content {
          position: absolute;
          z-index: 3;

          top: 50%;
          left: clamp(28px, 5.5vw, 92px);

          width: min(580px, 45vw);
          padding: clamp(24px, 4vw, 48px);

          /* Frosted Glass Effect */
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);

          transform: translateY(-50%);
          animation: heroContentEntrance 1.1s ease both;
        }

        /* ==========================================
           HEADING
        ========================================== */

        .hero-heading {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          font-family: var(--hero-font);
          font-size: clamp(3rem, 4.8vw, 5.5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-heading-dark {
          display: block;
          color: var(--hero-navy);
          font-style: normal;
        }

        .hero-heading-gold {
          display: block;
          margin-top: 4px;
          color: var(--hero-gold);
          font-style: italic;
        }

        /* ==========================================
           DIVIDER
        ========================================== */

        .hero-divider {
          width: 48px;
          height: 1px;

          margin-top: 28px;
          margin-bottom: 20px;

          background: rgba(25, 35, 53, 0.2);
        }

        /* ==========================================
           DESCRIPTION
        ========================================== */

        .hero-description {
          max-width: 380px;
          margin: 0 0 28px;

          color: #242424;

          font-family: var(--font-body, "Montserrat", sans-serif);
          font-size: clamp(0.85rem, 0.95vw, 1rem);
          font-weight: 400;
          line-height: 1.7;
          letter-spacing: -0.01em;
        }

        /* ==========================================
           CTA
        ========================================== */

        .hero-button {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;

          min-height: 52px;
          padding: 0 24px;

          border: none;
          border-radius: 4px;

          background: linear-gradient(
            110deg,
            #192335 0%,
            #101725 100%
          );

          color: #fff;

          font-family: var(--font-body, "Montserrat", sans-serif);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          line-height: 1;
          text-transform: uppercase;

          cursor: pointer;
          overflow: hidden;

          transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s ease;
        }

        .hero-button:hover {
          background: var(--hero-gold);
          box-shadow: 0 8px 25px rgba(150, 119, 41, 0.3);
          transform: translateY(-2px);
        }

        .hero-button-arrow {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--hero-gold-light);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .hero-button:hover .hero-button-arrow {
          transform: translateX(5px);
          color: #fff;
        }

        /* ==========================================
           PROJECT MARK
        ========================================== */

        .hero-project-mark {
          position: absolute;
          z-index: 3;

          right: 36px;
          bottom: 35px;

          display: flex;
          align-items: center;
          gap: 10px;

          color: rgba(255,255,255,0.95);

          font-family: var(--font-body, sans-serif);
          font-size: 0.59rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-shadow: 0 1px 5px rgba(0,0,0,0.4);
        }

        .hero-project-mark-line {
          width: 24px;
          height: 1px;
          background: #c2a45d;
        }

        /* ==========================================
           SCROLL INDICATOR
        ========================================== */

        .hero-scroll {
          position: absolute;
          z-index: 3;

          left: 50%;
          bottom: 22px;

          display: flex;
          align-items: center;
          gap: 12px;

          transform: translateX(-50%);

          color: #fff;

          font-family: var(--font-body, sans-serif);
          font-size: 0.59rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }

        .hero-scroll-line {
          position: relative;
          display: block;
          width: 45px;
          height: 1px;

          overflow: hidden;
          background: rgba(255,255,255,0.4);
        }

        .hero-scroll-line span {
          position: absolute;
          top: 0;
          left: 0;

          width: 18px;
          height: 1px;

          background: #fff;

          animation: heroScrollMove 2.3s ease-in-out infinite;
        }

        /* ==========================================
           ANIMATIONS
        ========================================== */

        @keyframes heroContentEntrance {
          from {
            opacity: 0;
            transform: translateY(calc(-50% + 30px));
          }

          to {
            opacity: 1;
            transform: translateY(-50%);
          }
        }

        @keyframes heroScrollMove {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            transform: translateX(48px);
            opacity: 0;
          }
        }

        /* ==========================================
           MEDIUM DESKTOP
        ========================================== */

        @media (max-width: 1200px) {
          .hero-heading {
            font-size: clamp(2.8rem, 4.5vw, 4.5rem);
          }

          .hero-content {
            width: min(480px, 50vw);
          }

          .hero-description {
            max-width: 340px;
          }
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {
          .hero-content {
            left: 35px;
            width: 70%;
          }

          .hero-heading {
            font-size: clamp(3rem, 6vw, 4rem);
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 768px) {
          .hero-section {
            min-height: 650px;
            height: 100svh;
          }

          .hero-image {
            object-position: 58% center;
          }

          .hero-light-overlay {
            background: linear-gradient(
              180deg,
              rgba(250,249,246,0.85) 0%,
              rgba(250,249,246,0.7) 25%,
              rgba(250,249,246,0.2) 60%,
              rgba(250,249,246,0) 100%
            );
          }

          .hero-content {
            top: clamp(105px, 15vh, 140px);
            left: 20px;
            width: calc(100% - 40px);
            transform: none;

            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 24px;

            animation: heroMobileEntrance 0.9s ease both;
          }

          .hero-heading {
            font-size: clamp(2.6rem, 9vw, 3.5rem);
          }

          .hero-divider {
            margin-top: 18px;
            margin-bottom: 16px;
          }

          .hero-description {
            max-width: 100%;
            font-size: 0.85rem;
            line-height: 1.6;
            margin-bottom: 22px;
          }

          .hero-button {
            min-height: 48px;
            padding: 0 20px;
            font-size: 0.65rem;
            width: 100%;
            justify-content: center;
          }

          .hero-project-mark {
            display: none;
          }

          .hero-scroll {
            left: 20px;
            bottom: 24px;
            transform: none;
          }

          @keyframes heroMobileEntrance {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 390px) {
          .hero-heading {
            font-size: clamp(2.3rem, 10vw, 2.8rem);
          }

          .hero-content {
            top: 100px;
            padding: 20px;
          }
        }

        /* ==========================================
           ACCESSIBILITY
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-content,
          .hero-scroll-line span {
            animation: none !important;
            transition: none !important;
          }

          .hero-image {
            transform: none !important;
          }

          .hero-content {
            transform: translateY(-50%);
          }

          @media (max-width: 768px) {
            .hero-content {
              transform: none;
            }
          }
        }
      `}</style>
    </>
  );
}