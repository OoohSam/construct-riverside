import React, { useEffect, useState } from "react";

import fallbackImage from "../assets/hero/Front-View.webp";
import heroVideo from "../assets/Video/web-lead-video.mp4";
import heroMobileVideo from "../assets/Video/web-mobile-hero.mp4";

import {
  trackMetaEvent,
  createEventId,
} from "../lib/metaPixel.js";

const MOBILE_BREAKPOINT = 768;

export default function Hero({ onCtaClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const selectedVideo = isMobile
    ? heroMobileVideo
    : heroVideo;

  useEffect(() => {
    setVideoError(false);
  }, [selectedVideo]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

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
      console.warn(
        "Meta Pixel tracking failed:",
        error
      );
    }

    if (typeof onCtaClick === "function") {
      onCtaClick();
    }
  };

  /*
   * Very restrained parallax.
   * The video moves slightly slower than the page,
   * creating depth without making the effect distracting.
   */
  const videoTransform = `translate3d(0, ${
    Math.min(scrollY * 0.12, 90)
  }px, 0) scale(1.035)`;

  const contentTransform = `translate3d(0, ${
    Math.min(scrollY * 0.045, 32)
  }px, 0)`;

  return (
    <>
      <section
        className="hero-section"
        aria-label="Riverside Azure"
      >
        {/* ------------------------------------------------
            MEDIA
        ------------------------------------------------ */}
        <div className="hero-background">
          {videoError ? (
            <img
              className="hero-fallback"
              src={fallbackImage}
              alt="Riverside Azure"
              style={{
                transform: videoTransform,
              }}
            />
          ) : (
            <video
              key={selectedVideo}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={fallbackImage}
              onError={handleVideoError}
              aria-hidden="true"
              style={{
                transform: videoTransform,
              }}
            >
              <source
                src={selectedVideo}
                type="video/mp4"
              />
            </video>
          )}
        </div>

        {/* ------------------------------------------------
            EDGE TREATMENT
            Not a full overlay. These are extremely subtle
            gradients only where text needs separation.
        ------------------------------------------------ */}
        <div
          className="hero-edge-treatment"
          aria-hidden="true"
        />

        {/* ------------------------------------------------
            TOP EDITORIAL LABEL
        ------------------------------------------------ */}
        <div
          className="hero-location"
          style={{
            transform: contentTransform,
          }}
        >
          <span className="hero-location-line" />
          <span>Riverside · Nairobi</span>
        </div>

        {/* ------------------------------------------------
            MAIN CONTENT
        ------------------------------------------------ */}
        <div
          className="hero-content"
          style={{
            transform: contentTransform,
          }}
        >
          <p className="hero-eyebrow">
            A new address in Nairobi
          </p>

          <h1 className="hero-heading">
            Own a Piece
            <br />
            <em>of Riverside</em>
            <br />
            Before It Rises.
          </h1>

          <div className="hero-divider" />

          <p className="hero-description">
            Refined 1, 2 &amp; 3-bedroom residences
            <br className="desktop-break" />
            in the heart of Riverside.
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

        {/* ------------------------------------------------
            PROJECT NUMBER
        ------------------------------------------------ */}
        <div className="hero-project-mark">
          <span>01</span>
          <span className="hero-project-mark-line" />
          <span>RIVERSIDE AZURE</span>
        </div>

        {/* ------------------------------------------------
            SCROLL INDICATOR
        ------------------------------------------------ */}
        <div
          className="hero-scroll"
          aria-hidden="true"
        >
          <span className="hero-scroll-label">
            Scroll to explore
          </span>

          <span className="hero-scroll-line">
            <span />
          </span>
        </div>
      </section>

      <style>{`

        /* =================================================
           HERO BASE
        ================================================= */

        .hero-section {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          background: var(--azure-deep);
          isolation: isolate;
        }

        /* =================================================
           VIDEO / IMAGE
        ================================================= */

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: var(--azure-deep);
        }

        .hero-video,
        .hero-fallback {
          position: absolute;
          inset: -2%;
          width: 104%;
          height: 104%;
          object-fit: cover;
          object-position: center center;
          display: block;

          /*
           * The video itself remains visually clean.
           * No dark full-screen overlay is applied.
           */
          will-change: transform;
          transition:
            transform 0.15s linear;
        }

        .hero-fallback {
          filter: none;
        }

        /* =================================================
           VERY SUBTLE EDGE TREATMENT
        ================================================= */

        .hero-edge-treatment {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          /*
           * This is deliberately NOT a conventional
           * dark overlay. It only gives the left text
           * area a little separation.
           */
          background:
            linear-gradient(
              90deg,
              rgba(7, 12, 43, 0.28) 0%,
              rgba(7, 12, 43, 0.10) 30%,
              rgba(7, 12, 43, 0) 58%
            );

          opacity: 0.75;
        }

        /* =================================================
           LOCATION LABEL
        ================================================= */

        .hero-location {
          position: absolute;
          top: 132px;
          left: clamp(24px, 6vw, 88px);

          z-index: 3;

          display: flex;
          align-items: center;
          gap: 12px;

          color: rgba(255, 255, 255, 0.9);

          font-family: var(--font-body);
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          line-height: 1;
          text-transform: uppercase;

          will-change: transform;
        }

        .hero-location-line {
          width: 34px;
          height: 1px;
          background: var(--gold-accent);
          flex-shrink: 0;
        }

        /* =================================================
           MAIN CONTENT
        ================================================= */

        .hero-content {
          position: absolute;

          left: clamp(
            24px,
            7.5vw,
            118px
          );

          bottom: clamp(
            90px,
            12vh,
            145px
          );

          z-index: 3;

          width: min(
            720px,
            calc(100% - 48px)
          );

          will-change: transform;
        }

        .hero-eyebrow {
          margin: 0 0 18px;

          color: var(--gold-soft);

          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .hero-heading {
          margin: 0;

          color: var(--white);

          font-family: var(--font-display);
          font-size: clamp(
            3.5rem,
            7.2vw,
            7.1rem
          );

          font-weight: 400;
          letter-spacing: -0.055em;
          line-height: 0.91;

          max-width: 760px;

          text-wrap: balance;
        }

        .hero-heading em {
          color: var(--gold-soft);
          font-style: italic;
          font-weight: 400;
        }

        .hero-divider {
          width: 54px;
          height: 1px;
          margin-top: 28px;
          margin-bottom: 18px;
          background: var(--gold-accent);
        }

        .hero-description {
          margin: 0 0 26px;

          color: rgba(255, 255, 255, 0.82);

          font-family: var(--font-body);
          font-size: clamp(
            0.88rem,
            1.4vw,
            1rem
          );

          font-weight: 400;
          line-height: 1.65;
          letter-spacing: 0.01em;
        }

        /* =================================================
           CTA
        ================================================= */

        .hero-button {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;

          min-height: 52px;

          padding:
            0 20px
            0 24px;

          border:
            1px solid
            var(--gold-accent);

          border-radius: 0;

          background: var(--gold-accent);
          color: var(--azure-deep);

          font-family: var(--font-body);
          font-size: 0.69rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          line-height: 1;
          text-transform: uppercase;

          cursor: pointer;
          overflow: hidden;

          transition:
            color 0.4s var(--ease-luxury),
            background-color 0.4s var(--ease-luxury),
            border-color 0.4s var(--ease-luxury),
            transform 0.4s var(--ease-luxury);
        }

        .hero-button::before {
          content: "";

          position: absolute;
          inset: 0;

          background: var(--azure-deep);

          transform: translateX(-101%);
          transition:
            transform 0.5s var(--ease-luxury);

          z-index: 0;
        }

        .hero-button > span {
          position: relative;
          z-index: 1;
        }

        .hero-button:hover {
          color: var(--white);
          border-color: var(--azure-deep);
          transform: translateY(-2px);
        }

        .hero-button:hover::before {
          transform: translateX(0);
        }

        .hero-button-arrow {
          font-size: 1rem;
          font-weight: 400;
          transition:
            transform 0.4s var(--ease-luxury);
        }

        .hero-button:hover
        .hero-button-arrow {
          transform: translateX(5px);
        }

        /* =================================================
           PROJECT MARK
        ================================================= */

        .hero-project-mark {
          position: absolute;

          right: clamp(
            24px,
            5vw,
            72px
          );

          bottom: 52px;

          z-index: 3;

          display: flex;
          align-items: center;
          gap: 10px;

          color:
            rgba(255, 255, 255, 0.58);

          font-family: var(--font-body);
          font-size: 0.57rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1;

          writing-mode: horizontal-tb;
        }

        .hero-project-mark > span:first-child {
          color: var(--gold-soft);
          font-size: 0.68rem;
        }

        .hero-project-mark-line {
          width: 28px;
          height: 1px;
          background:
            rgba(255, 255, 255, 0.4);
        }

        /* =================================================
           SCROLL
        ================================================= */

        .hero-scroll {
          position: absolute;

          left: 50%;
          bottom: 38px;

          z-index: 3;

          display: flex;
          align-items: center;
          gap: 13px;

          transform:
            translateX(-50%);

          color:
            rgba(255, 255, 255, 0.62);

          font-family: var(--font-body);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1;
          text-transform: uppercase;

          pointer-events: none;
        }

        .hero-scroll-line {
          position: relative;

          width: 48px;
          height: 1px;

          overflow: hidden;

          background:
            rgba(255, 255, 255, 0.35);
        }

        .hero-scroll-line span {
          position: absolute;

          left: 0;
          top: 0;

          width: 18px;
          height: 1px;

          background:
            var(--gold-accent);

          animation:
            heroScrollLine
            2.2s
            var(--ease-luxury)
            infinite;
        }

        @keyframes heroScrollLine {
          0% {
            transform:
              translateX(-20px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          70% {
            opacity: 1;
          }

          100% {
            transform:
              translateX(48px);
            opacity: 0;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1024px) {
          .hero-location {
            top: 118px;
          }

          .hero-content {
            bottom: 105px;
          }

          .hero-heading {
            font-size: clamp(
              3.4rem,
              8vw,
              5.8rem
            );
          }

          .hero-project-mark {
            bottom: 32px;
          }

          .hero-scroll {
            bottom: 30px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 768px) {
          .hero-section {
            min-height: 680px;
          }

          .hero-background {
            inset: 0;
          }

          .hero-video,
          .hero-fallback {
            inset: -2%;
            width: 104%;
            height: 104%;

            /*
             * Mobile videos often have a different
             * composition, so keep the centre as the
             * default rather than aggressively cropping.
             */
            object-position: center center;
          }

          .hero-edge-treatment {
            background:
              linear-gradient(
                180deg,
                rgba(7, 12, 43, 0.18) 0%,
                rgba(7, 12, 43, 0) 30%,
                rgba(7, 12, 43, 0.22) 72%,
                rgba(7, 12, 43, 0.38) 100%
              );

            opacity: 0.72;
          }

          .hero-location {
            top: 102px;
            left: 18px;

            gap: 9px;

            font-size: 0.58rem;
            letter-spacing: 0.18em;
          }

          .hero-location-line {
            width: 24px;
          }

          .hero-content {
            left: 18px;
            bottom: 104px;

            width:
              calc(100% - 36px);
          }

          .hero-eyebrow {
            margin-bottom: 14px;

            font-size: 0.59rem;
            letter-spacing: 0.18em;
          }

          .hero-heading {
            max-width: 600px;

            font-size:
              clamp(
                3.05rem,
                13vw,
                4.6rem
              );

            line-height: 0.91;
            letter-spacing: -0.05em;
          }

          .hero-divider {
            width: 40px;
            margin-top: 20px;
            margin-bottom: 13px;
          }

          .hero-description {
            margin-bottom: 20px;

            font-size: 0.78rem;
            line-height: 1.55;
          }

          .desktop-break {
            display: none;
          }

          .hero-button {
            min-height: 49px;

            padding-left: 18px;
            padding-right: 15px;

            gap: 20px;

            font-size: 0.61rem;
            letter-spacing: 0.12em;
          }

          .hero-project-mark {
            display: none;
          }

          .hero-scroll {
            left: 18px;
            bottom: 31px;

            transform: none;

            gap: 10px;

            font-size: 0.53rem;
            letter-spacing: 0.14em;
          }

          .hero-scroll-line {
            width: 36px;
          }

          .hero-scroll-line span {
            width: 14px;
          }

          @keyframes heroScrollLine {
            0% {
              transform:
                translateX(-16px);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            70% {
              opacity: 1;
            }

            100% {
              transform:
                translateX(36px);
              opacity: 0;
            }
          }
        }

        /* =================================================
           SMALL PHONES
        ================================================= */

        @media (max-width: 480px) {
          .hero-section {
            min-height: 640px;
          }

          .hero-location {
            top: 92px;
          }

          .hero-content {
            bottom: 91px;
          }

          .hero-heading {
            font-size:
              clamp(
                2.75rem,
                13.2vw,
                3.8rem
              );
          }

          .hero-description {
            max-width: 290px;
          }

          .hero-button {
            width: auto;
          }

          .hero-scroll {
            bottom: 25px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-video,
          .hero-fallback,
          .hero-content,
          .hero-location {
            transform: none !important;
          }

          .hero-scroll-line span {
            animation: none;
          }
        }

      `}</style>
    </>
  );
}