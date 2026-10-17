
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Residences", path: "/units" },
  { name: "Investment", path: "/investment" },
  { name: "Journal", path: "/blog" },
  { name: "Agents", path: "/agent-apply" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ onOpenModal }) {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Lock background scroll while menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  // Existing pricing modal functionality
  const handleCta = () => {
    setMobileMenuOpen(false);

    if (typeof onOpenModal === "function") {
      onOpenModal();
    }
  };

  const isActiveRoute = (path) =>
    location.pathname === path;

  return (
    <>
      <header
        className={`ra-floating-header ${
          scrolled ? "ra-header-scrolled" : ""
        }`}
      >
        <nav
          className="ra-navbar"
          aria-label="Primary navigation"
        >
          {/* BRAND LOGO */}
          <Link
            to="/"
            className="ra-navbar-brand"
            aria-label="Riverside Azure Home"
          >
            <img
              src={logo}
              alt="Riverside Azure"
              className="ra-navbar-logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="ra-nav-links">
            {navLinks.map((link) => {
              const active = isActiveRoute(link.path);

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`ra-nav-link ${
                      active ? "ra-nav-active" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP PRICING CTA */}
          <div className="ra-nav-actions">
            <button
              type="button"
              className="ra-pricing-button"
              onClick={handleCta}
            >
              <span>Secure Phase 1 Pricing</span>
              <span
                className="ra-pricing-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className={`ra-menu-toggle ${
              mobileMenuOpen ? "ra-menu-open" : ""
            }`}
            onClick={() =>
              setMobileMenuOpen((previous) => !previous)
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="ra-mobile-navigation"
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* MOBILE NAVIGATION */}
      <div
        id="ra-mobile-navigation"
        className={`ra-mobile-panel ${
          mobileMenuOpen ? "ra-mobile-visible" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="ra-mobile-links">
            {navLinks.map((link, index) => {
              const active = isActiveRoute(link.path);

              return (
                <li
                  key={link.name}
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 45}ms`
                      : "0ms",
                  }}
                >
                  <Link
                    to={link.path}
                    className={
                      active ? "ra-mobile-active" : ""
                    }
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="ra-mobile-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{link.name}</span>

                    <span className="ra-mobile-link-arrow">
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ra-mobile-footer">
          <p>RIVERSIDE DRIVE · NAIROBI</p>

          <button
            type="button"
            className="ra-mobile-pricing"
            onClick={handleCta}
          >
            <span>Secure Phase 1 Pricing</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>

      <style>{`

        /* ==========================================
           RIVERSIDE AZURE FLOATING NAVIGATION
        ========================================== */

        .ra-floating-header {
          --ra-navy: #192335;
          --ra-gold: #967729;
          --ra-ivory: #faf9f6;
          --ra-ease: cubic-bezier(0.22, 1, 0.36, 1);

          position: fixed;
          top: 20px;
          left: 0;
          right: 0;

          width: min(94%, 1440px);
          margin: 0 auto;

          z-index: 1100;

          transition:
            top 0.45s var(--ra-ease),
            width 0.45s var(--ra-ease);
        }

        /* ==========================================
           FLOATING PILL
        ========================================== */

        .ra-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;

          min-height: 74px;
          padding: 9px 13px 9px 24px;
          gap: 20px;

          background: rgba(255, 255, 255, 0.97);

          border: 1px solid rgba(25, 35, 53, 0.055);
          border-radius: 100px;

          box-shadow:
            0 5px 28px rgba(16, 24, 40, 0.055),
            0 1px 5px rgba(16, 24, 40, 0.025);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          transition:
            min-height 0.4s var(--ra-ease),
            padding 0.4s var(--ra-ease),
            box-shadow 0.4s var(--ra-ease);
        }

        /* ==========================================
           SCROLLED STATE
        ========================================== */

        .ra-header-scrolled {
          top: 12px;
          width: min(92%, 1320px);
        }

        .ra-header-scrolled .ra-navbar {
          min-height: 64px;
          padding-top: 7px;
          padding-bottom: 7px;

          background: rgba(255, 255, 255, 0.96);

          box-shadow:
            0 10px 40px rgba(16, 24, 40, 0.09),
            0 2px 8px rgba(16, 24, 40, 0.025);
        }

        /* ==========================================
           BRAND LOGO
        ========================================== */

        .ra-navbar-brand {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          flex-shrink: 0;

          text-decoration: none;
          min-width: 0;
        }

        .ra-navbar-logo {
          display: block;
          height: 41px;
          width: auto;
          max-width: 165px;
          object-fit: contain;

          transition:
            height 0.4s var(--ra-ease),
            transform 0.4s var(--ra-ease);
        }

        .ra-navbar-brand:hover .ra-navbar-logo {
          transform: scale(1.025);
        }

        .ra-header-scrolled .ra-navbar-logo {
          height: 36px;
        }

        /* ==========================================
           DESKTOP LINKS
        ========================================== */

        .ra-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;

          gap: clamp(13px, 1.55vw, 28px);

          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ra-nav-links li {
          display: flex;
          flex-shrink: 0;
        }

        .ra-nav-link {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 40px;
          padding: 0 1px;

          color: var(--ra-navy);

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.01em;

          text-decoration: none;
          white-space: nowrap;

          transition: color 0.3s ease;
        }

        .ra-nav-link:hover,
        .ra-nav-active {
          color: var(--ra-gold);
        }

        /* ACTIVE LINK GOLD INDICATOR */

        .ra-nav-link::after {
          content: "";

          position: absolute;
          left: 50%;
          bottom: 3px;

          width: 0;
          height: 2px;

          background: var(--ra-gold);
          border-radius: 4px;

          transform: translateX(-50%);

          transition:
            width 0.35s var(--ra-ease);
        }

        .ra-nav-link:hover::after,
        .ra-nav-active::after {
          width: 18px;
        }

        /* ==========================================
           PRICING BUTTON
        ========================================== */

        .ra-nav-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .ra-pricing-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 12px;
          min-height: 45px;

          padding: 0 21px;

          background: var(--ra-navy);
          color: #fff;

          border: 1px solid var(--ra-navy);
          border-radius: 100px;

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;

          cursor: pointer;

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s var(--ra-ease),
            box-shadow 0.3s ease;
        }

        .ra-pricing-button:hover {
          background: var(--ra-gold);
          border-color: var(--ra-gold);

          transform: translateY(-1px);

          box-shadow:
            0 5px 15px rgba(150, 119, 41, 0.17);
        }

        .ra-pricing-arrow {
          font-size: 1rem;
          font-weight: 400;
          transition: transform 0.3s ease;
        }

        .ra-pricing-button:hover .ra-pricing-arrow {
          transform: translate(2px, -2px);
        }

        /* ==========================================
           MOBILE MENU TOGGLE
        ========================================== */

        .ra-menu-toggle {
          display: none;

          width: 42px;
          height: 42px;

          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;

          background: var(--ra-navy);

          border: none;
          border-radius: 50%;

          cursor: pointer;
          flex-shrink: 0;
          padding: 0;

          position: relative;
          z-index: 1102;
        }

        .ra-menu-toggle span {
          display: block;

          width: 19px;
          height: 1.5px;

          background: #fff;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .ra-menu-toggle.ra-menu-open span:first-child {
          transform: translateY(3.75px) rotate(45deg);
        }

        .ra-menu-toggle.ra-menu-open span:last-child {
          transform: translateY(-3.75px) rotate(-45deg);
        }

        /* ==========================================
           MOBILE PANEL
        ========================================== */

        .ra-mobile-panel {
          --ra-navy: #192335;
          --ra-gold: #967729;
          --ra-ease: cubic-bezier(0.22, 1, 0.36, 1);

          position: fixed;
          inset: 0;
          z-index: 1050;

          width: 100%;
          height: 100dvh;

          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 118px 30px 40px;

          background: #faf9f6;

          opacity: 0;
          visibility: hidden;
          pointer-events: none;

          overflow-y: auto;
          overscroll-behavior: contain;

          transition:
            opacity 0.4s ease,
            visibility 0.4s ease;
        }

        .ra-mobile-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .ra-mobile-panel nav {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .ra-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 3px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .ra-mobile-links li {
          opacity: 0;
          transform: translateY(14px);

          transition:
            opacity 0.45s var(--ra-ease),
            transform 0.45s var(--ra-ease);
        }

        .ra-mobile-visible .ra-mobile-links li {
          opacity: 1;
          transform: translateY(0);
        }

        .ra-mobile-links a {
          display: grid;
          grid-template-columns: 33px 1fr auto;
          align-items: center;

          gap: 10px;
          padding: 13px 0;

          color: var(--ra-navy);

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          font-size: clamp(1.6rem, 7vw, 2.4rem);
          font-weight: 400;
          letter-spacing: -0.045em;

          text-decoration: none;

          border-bottom: 1px solid rgba(25, 35, 53, 0.08);

          transition: color 0.3s ease;
        }

        .ra-mobile-links a:hover,
        .ra-mobile-links .ra-mobile-active {
          color: var(--ra-gold);
        }

        .ra-mobile-number {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0;
          color: rgba(25, 35, 53, 0.4);
        }

        .ra-mobile-link-arrow {
          font-size: 1rem;
          font-weight: 400;
          opacity: 0.55;
        }

        /* ==========================================
           MOBILE FOOTER
        ========================================== */

        .ra-mobile-footer {
          width: 100%;
          max-width: 600px;

          margin: 38px auto 0;
        }

        .ra-mobile-footer p {
          margin: 0 0 18px;

          color: #716d64;

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.14em;
        }

        .ra-mobile-pricing {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          min-height: 54px;

          padding: 0 22px;

          background: var(--ra-navy);
          color: #fff;

          border: 1px solid var(--ra-navy);
          border-radius: 50px;

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          font-size: 0.72rem;
          font-weight: 600;

          cursor: pointer;

          transition: background 0.3s ease;
        }

        .ra-mobile-pricing:hover {
          background: var(--ra-gold);
          border-color: var(--ra-gold);
        }

        /* ==========================================
           RESPONSIVE DESKTOP
        ========================================== */

        @media (max-width: 1250px) {
          .ra-nav-links,
          .ra-nav-actions {
            display: none;
          }

          .ra-menu-toggle {
            display: flex;
          }

          .ra-navbar {
            justify-content: space-between;
          }
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 768px) {
          .ra-floating-header {
            top: 14px;
            width: calc(100% - 30px);
          }

          .ra-header-scrolled {
            top: 10px;
            width: calc(100% - 24px);
          }

          .ra-navbar {
            min-height: 66px;
            padding: 8px 11px 8px 20px;
          }

          .ra-navbar-logo {
            height: 36px;
          }

          .ra-header-scrolled .ra-navbar-logo {
            height: 33px;
          }

          .ra-menu-toggle {
            width: 40px;
            height: 40px;
          }

          .ra-mobile-panel {
            padding: 112px 25px 34px;
          }
        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {
          .ra-floating-header {
            width: calc(100% - 24px);
            top: 12px;
          }

          .ra-header-scrolled {
            top: 8px;
          }

          .ra-navbar {
            min-height: 60px;
            padding: 7px 9px 7px 17px;
          }

          .ra-navbar-logo {
            height: 32px;
            max-width: 145px;
          }

          .ra-menu-toggle {
            width: 39px;
            height: 39px;
          }

          .ra-mobile-panel {
            padding: 96px 22px 25px;
          }

          .ra-mobile-links a {
            padding: 10px 0;
            font-size: clamp(1.5rem, 7vw, 2rem);
          }

          .ra-mobile-footer {
            margin-top: 25px;
          }
        }

        @media (max-height: 670px) and (max-width: 1250px) {
          .ra-mobile-panel {
            justify-content: flex-start;
          }

          .ra-mobile-links a {
            padding: 8px 0;
          }
        }

        /* ==========================================
           ACCESSIBILITY
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .ra-floating-header,
          .ra-navbar,
          .ra-navbar *,
          .ra-mobile-panel,
          .ra-mobile-panel * {
            transition: none !important;
            animation: none !important;
          }
        }




        
/* ==========================================
   RIVERSIDE AZURE
   NAVBAR SCROLL DESIGN UPDATE
========================================== */

/* 1. KEEP THE AREA OUTSIDE THE PILL TRANSPARENT */

.ra-floating-header,
.ra-floating-header.ra-header-scrolled {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* 2. NAVBAR BEFORE SCROLLING - WHITE */

.ra-floating-header:not(.ra-header-scrolled) .ra-navbar {
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid rgba(25, 35, 53, 0.055);

  box-shadow:
    0 5px 28px rgba(16, 24, 40, 0.055),
    0 1px 5px rgba(16, 24, 40, 0.025);
}

/* 3. NAVBAR AFTER SCROLLING - NAVY BLUE */

.ra-header-scrolled .ra-navbar {
  background: #192335 !important;

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    0 12px 35px rgba(10, 18, 35, 0.28),
    0 3px 12px rgba(10, 18, 35, 0.15),
    0 0 1px rgba(10, 18, 35, 0.2);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transition:
    background 0.4s ease,
    box-shadow 0.4s ease,
    border-color 0.4s ease;
}

/* 4. BIGGER, BOLDER NAVIGATION LINKS */

.ra-nav-link {
  font-size: 0.82rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.015em;
  transition: color 0.3s ease;
}

/* 5. DARK LINKS BEFORE SCROLLING */

.ra-floating-header:not(.ra-header-scrolled) .ra-nav-link {
  color: #192335;
}

/* 6. WHITE LINKS AFTER SCROLLING */

.ra-header-scrolled .ra-nav-link {
  color: #ffffff !important;
}

/* 7. GOLD HOVER AND ACTIVE PAGE */

.ra-header-scrolled .ra-nav-link:hover,
.ra-header-scrolled .ra-nav-active {
  color: #c9a64c !important;
}

/* ACTIVE PAGE INDICATOR */

.ra-header-scrolled .ra-nav-link::after {
  background: #c9a64c;
}

/* 8. PRICING BUTTON BEFORE SCROLLING */

.ra-floating-header:not(.ra-header-scrolled)
.ra-pricing-button {
  background: #192335;
  color: #ffffff;
  border-color: #192335;
}

/* 9. GOLD PRICING BUTTON AFTER SCROLLING */

.ra-header-scrolled .ra-pricing-button {
  background: #b89a4b;
  color: #192335;

  border: 1px solid #b89a4b;

  font-size: 0.76rem;
  font-weight: 700;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
}

/* PRICING BUTTON HOVER */

.ra-header-scrolled .ra-pricing-button:hover {
  background: #d2b769;
  border-color: #d2b769;

  transform: translateY(-2px);

  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.2);
}

/* 10. LOGO REMAINS GOLD */

.ra-header-scrolled .ra-navbar-logo {
  filter: none;
}

/* 11. MOBILE MENU BUTTON AFTER SCROLL */

.ra-header-scrolled .ra-menu-toggle {
  background: #b89a4b;
}

.ra-header-scrolled .ra-menu-toggle span {
  background: #192335;
}

/* 12. SMOOTH COLOR TRANSITIONS */

.ra-navbar,
.ra-nav-link,
.ra-pricing-button,
.ra-menu-toggle {
  transition:
    background-color 0.4s ease,
    color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.4s ease,
    transform 0.35s ease;
}

/* 13. PREVENT NAVIGATION OVERCROWDING */

@media (min-width: 1251px) {
  .ra-nav-links {
    gap: clamp(10px, 1.2vw, 22px);
  }
}

/* 14. MOBILE NAVIGATION */

@media (max-width: 1250px) {
  .ra-header-scrolled .ra-navbar {
    background: #192335 !important;
  }
}

/* 15. RESPECT REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {
  .ra-navbar,
  .ra-nav-link,
  .ra-pricing-button,
  .ra-menu-toggle {
    transition: none !important;
  }
}

/* =========================================
   REMOVE FULL-WIDTH NAVBAR BACKGROUND
========================================= */

/* Floating header must remain transparent */
.ra-floating-header,
.ra-header-scrolled {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

/* Only the rounded navbar becomes navy */
.ra-header-scrolled .ra-navbar {
  background: #192335 !important;
  border-radius: 100px !important;

  box-shadow:
    0 12px 35px rgba(10, 18, 35, 0.28),
    0 3px 12px rgba(10, 18, 35, 0.15);
}

/* White text on navy navbar */
.ra-header-scrolled .ra-nav-link {
  color: #ffffff !important;
}

/* Gold active page */
.ra-header-scrolled .ra-nav-link.ra-nav-active {
  color: #c9a64c !important;
}


      `
      
      
      
      
      
      }</style>
    </>
  );


  
}
