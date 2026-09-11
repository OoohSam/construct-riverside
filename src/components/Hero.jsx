import React, { useEffect, useState } from "react";

import fallbackImage from "../assets/hero/Front-View.webp";
import heroVideo from "../assets/Video/web-lead-video.mp4";
import heroMobileVideo from "../assets/Video/web-mobile-hero.mp4";

import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const MOBILE_BREAKPOINT = 768;

export default function Hero({ onCtaClick }) {
const [isMobile, setIsMobile] = useState(false);
const [videoError, setVideoError] = useState(false);

// Detect mobile / desktop screen size
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

// Select the correct video
const selectedVideo = isMobile ? heroMobileVideo : heroVideo;

// Reset video error when switching between desktop and mobile
useEffect(() => {
setVideoError(false);
}, [selectedVideo]);

const handleVideoError = () => {
setVideoError(true);
};

const handleCta = () => {
// Meta Pixel tracking
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

// Open the existing lead modal
if (typeof onCtaClick === "function") {
  onCtaClick();
}


};

return (
<> <section className="hero-section" aria-label="Riverside Azure">

```
    {/* Background video */}
    <div className="hero-background">
      {videoError ? (
        <img
          className="hero-fallback"
          src={fallbackImage}
          alt="Riverside Azure"
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
        >
          <source src={selectedVideo} type="video/mp4" />
        </video>
      )}
    </div>

    {/* Hero text and CTA */}
    <div className="hero-content">
      <h1 className="hero-heading">
        Own a Piece of Riverside
        <br />
        Before It Rises.
      </h1>

      <button
        type="button"
        className="hero-button"
        onClick={handleCta}
      >
        Book A Unit Today
      </button>
    </div>

    {/* Desktop scroll indicator */}
    <div
      className="hero-scroll-indicator"
      aria-hidden="true"
    >
      <span />
    </div>
  </section>

  <style>{`
    .hero-section {
      position: relative;
      width: 100%;
      height: 100svh;
      min-height: 620px;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      padding: 100px 16px 100px;

      box-sizing: border-box;
      overflow: hidden;
      isolation: isolate;
    }

    .hero-background {
      position: absolute;
      inset: 0;

      width: 100%;
      height: 100%;

      z-index: -1;
      overflow: hidden;

      background: #111;
    }

    .hero-video,
    .hero-fallback {
      position: absolute;
      inset: 0;

      width: 100%;
      height: 100%;

      display: block;

      object-fit: cover;
      object-position: center center;
    }

    .hero-fallback {
      pointer-events: none;
      user-select: none;
    }

    .hero-content {
      position: relative;
      z-index: 2;

      width: 100%;
      max-width: 1100px;

      margin: 0 auto 20px;
      padding: 0 20px;

      box-sizing: border-box;

      text-align: center;
    }

    .hero-heading {
      margin: 0 0 28px;

      color: var(--text-main, #ffffff);

      font-family: inherit;

      font-size: clamp(2.3rem, 7vw, 5.2rem);
      font-weight: 600;

      line-height: 1.03;
      letter-spacing: -0.03em;

      text-shadow:
        0 8px 30px rgba(0, 0, 0, 0.45);
    }

    .hero-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      min-height: 56px;
      padding: 0 34px;

      border: 1px solid var(--accent-gold, #c9a227);
      border-radius: 0;

      background: var(--accent-gold, #c9a227);
      color: var(--button-text, #111);

      font-family: inherit;
      font-size: 0.95rem;
      font-weight: 600;

      letter-spacing: 0.04em;
      text-transform: uppercase;

      cursor: pointer;

      box-sizing: border-box;

      transition:
        background-color 180ms ease,
        color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;
    }

    .hero-button:hover {
      background: transparent;
      color: #ffffff;

      transform: translateY(-2px);

      box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.25);
    }

    .hero-button:active {
      transform: translateY(0);
    }

    .hero-button:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 4px;
    }

    .hero-scroll-indicator {
      position: absolute;

      left: 50%;
      bottom: 28px;

      z-index: 3;

      width: 20px;
      height: 32px;

      transform: translateX(-50%);

      border: 1px solid rgba(255, 255, 255, 0.65);
      border-radius: 12px;

      pointer-events: none;
    }

    .hero-scroll-indicator span {
      position: absolute;

      top: 6px;
      left: 50%;

      width: 3px;
      height: 6px;

      transform: translateX(-50%);

      background: #ffffff;
      border-radius: 3px;

      animation: heroScroll 1.8s ease-in-out infinite;
    }

    @keyframes heroScroll {
      0% {
        opacity: 0;
        transform: translateX(-50%) translateY(0);
      }

      30% {
        opacity: 1;
      }

      70% {
        opacity: 1;
      }

      100% {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 100svh;
        min-height: 580px;

        padding: 80px 16px 60px;
      }

      .hero-content {
        padding: 0 16px;
        margin-bottom: 5px;
      }

      .hero-heading {
        font-size: clamp(2.15rem, 10vw, 3.2rem);

        line-height: 1.05;
        letter-spacing: -0.025em;

        margin-bottom: 22px;
      }

      .hero-button {
        width: 100%;
        max-width: 300px;

        min-height: 54px;
        padding: 0 24px;

        font-size: 0.88rem;
      }

      .hero-scroll-indicator {
        display: none;
      }
    }

    @media (max-width: 768px) and (max-height: 700px) {
      .hero-section {
        padding-bottom: 45px;
      }

      .hero-heading {
        font-size: 2rem;
        line-height: 1.05;

        margin-bottom: 18px;
      }
    }

    @media (min-width: 769px) and (max-height: 750px) {
      .hero-section {
        padding-bottom: 65px;
      }

      .hero-content {
        margin-bottom: 0;
      }

      .hero-heading {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        margin-bottom: 20px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-button {
        transition: none;
      }

      .hero-scroll-indicator span {
        animation: none;
      }
    }
  `}</style>
</>

);
}
