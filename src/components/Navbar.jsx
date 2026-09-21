import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* =========================================================
     NAVIGATION
     ========================================================= */
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Residences", path: "/units" },
    { name: "Investment", path: "/investment" },
    { name: "Journal", path: "/blog" },
    { name: "Agents", path: "/agent-apply" },
    { name: "Contact", path: "/contact" },
  ];

  /* =========================================================
     SCROLL STATE
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================================
     MOBILE MENU BODY LOCK
     ========================================================= */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     ROUTE CHANGE
     ========================================================= */
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  /* =========================================================
     CTA
     ========================================================= */
  const handleCta = () => {
    setMobileMenuOpen(false);
    if (typeof onOpenModal === "function") {
      onOpenModal();
    }
  };

  /* =========================================================
     ACTIVE ROUTE
     ========================================================= */
  const isActiveRoute = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`}
        aria-label="Primary navigation"
        style={styles.nav(scrolled)}
      >
        <div className="container navbar-container" style={styles.container(scrolled)}>
          
          {/* LOGO */}
          <Link to="/" style={styles.logoLink} aria-label="Riverside Azure Home">
            <img src={logo} alt="Riverside Azure" style={styles.logo(scrolled)} />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="desktop-only navbar-links" style={styles.desktopNav}>
            {navLinks.map((link) => {
              const active = isActiveRoute(link.path);
              return (
                <li key={link.name} style={styles.navItem}>
                  <Link
                    to={link.path}
                    className={`navbar-link ${active ? "navbar-link-active" : ""}`}
                    style={styles.navLink(active)}
                  >
                    <span>{link.name}</span>
                    <span className="navbar-link-line" style={styles.activeLine(active)} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP CTA */}
          <div className="desktop-only navbar-actions" style={styles.actions}>
            <button
              type="button"
              onClick={handleCta}
              style={styles.desktopButton}
              className="navbar-cta"
            >
              <span>Secure Phase 1 Pricing</span>
              <span className="navbar-cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON (Strict 48x48px target) */}
          <button
            type="button"
            className="mobile-only navbar-menu-button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            style={styles.mobileToggle}
          >
            <span style={styles.burgerLine(mobileMenuOpen, 1)} />
            <span style={styles.burgerLine(mobileMenuOpen, 2)} />
          </button>
        </div>
      </nav>

      {/* =======================================================
          MOBILE MENU (App-like Fullscreen Overlay)
          ======================================================= */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile navigation" className="mobile-navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => {
              const active = isActiveRoute(link.path);
              return (
                <li
                  key={link.name}
                  className="mobile-nav-item"
                  style={{
                    transitionDelay: mobileMenuOpen ? `${0.06 * index}s` : "0s",
                  }}
                >
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${active ? "mobile-nav-link-active" : ""}`}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <span className="mobile-nav-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{link.name}</span>
                    {active && <span className="mobile-active-dot" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* MOBILE CTA */}
        <div className="mobile-bottom">
          <p className="mobile-bottom-label">Riverside · Nairobi</p>
          <button
            type="button"
            onClick={handleCta}
            className="mobile-button"
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            <span>Secure Phase 1 Pricing</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* =======================================================
          STYLES (Refined for true luxury)
          ======================================================= */}
      <style>{`
        /* ANIMATION TIMING - The true luxury ease */
        :root {
          --nav-ease: cubic-bezier(0.19, 1, 0.22, 1);
        }

        .site-navbar {
          transition: background-color 0.6s var(--nav-ease),
                      border-color 0.6s var(--nav-ease),
                      box-shadow 0.6s var(--nav-ease);
        }

        .site-navbar-scrolled {
          box-shadow: 0 4px 30px rgba(8, 12, 35, 0.15);
        }

        /* DESKTOP LINKS */
        .navbar-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 48px;
          transition: color 0.4s var(--nav-ease);
        }

        .navbar-link:hover {
          color: var(--gold-accent) !important;
        }

        .navbar-link-line {
          position: absolute;
          left: 0;
          bottom: 12px; /* Lifted slightly closer to text */
          width: 100%;
          height: 1px;
          background: var(--gold-accent);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.4s var(--nav-ease), transform 0.4s var(--nav-ease);
        }

        .navbar-link:hover .navbar-link-line,
        .navbar-link-active .navbar-link-line {
          opacity: 1 !important;
          transform: translateY(0);
        }

        /* DESKTOP CTA */
        .navbar-cta {
          position: relative;
        }

        .navbar-cta:hover {
          background: var(--gold-accent) !important;
          color: var(--azure-deep) !important;
          border-color: var(--gold-accent) !important;
        }

        .navbar-cta-arrow {
          transition: transform 0.4s var(--nav-ease);
        }

        .navbar-cta:hover .navbar-cta-arrow {
          transform: translateX(4px);
        }

        /* MOBILE MENU OVERLAY */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100dvh; /* Prevents mobile browser bar clipping */
          z-index: 998;
          display: flex;
          flex-direction: column;
          justify-content: center; /* Center vertically for an editorial feel */
          padding: 80px 32px 40px;
          background: var(--azure-deep);
          color: var(--white);
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
          transition: opacity 0.5s var(--nav-ease), visibility 0.5s;
        }

        .mobile-menu-open {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }

        .mobile-navigation {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px; /* Slight gap instead of rigid borders */
        }

        .mobile-nav-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s var(--nav-ease), transform 0.5s var(--nav-ease);
        }

        .mobile-menu-open .mobile-nav-item {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav-link {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          align-items: center;
          width: 100%;
          padding: 12px 0; /* Massive touch target */
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 2.75rem); /* Larger, more dramatic typography */
          line-height: 1;
          transition: color 0.4s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link-active {
          color: var(--gold-accent) !important;
        }

        .mobile-nav-number {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 400; /* Lighter weight for editorial contrast */
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4); /* Softer number color */
        }

        .mobile-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-accent);
        }

        .mobile-bottom {
          width: 100%;
          max-width: 500px;
          margin: 48px auto 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s var(--nav-ease) 0.3s, transform 0.6s var(--nav-ease) 0.3s;
        }

        .mobile-menu-open .mobile-bottom {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-button {
          width: 100%;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          background: var(--gold-accent);
          color: var(--azure-deep);
          border: 1px solid var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: background-color 0.4s var(--nav-ease), color 0.4s var(--nav-ease);
        }

        .mobile-button:hover {
          background: transparent;
          color: var(--gold-accent);
        }

        .mobile-bottom-label {
          margin: 0 0 16px;
          color: rgba(255,255,255,0.4);
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        /* RESPONSIVE TWEAKS */
        @media (max-width: 1100px) {
          .navbar-links { gap: 20px !important; }
          .navbar-link { font-size: 0.65rem !important; }
          .navbar-cta { padding: 0 20px !important; }
        }
        @media (max-width: 900px) {
          .navbar-cta { display: none !important; }
        }
        @media (max-width: 768px) {
          .navbar-container {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }
        }
      `}</style>
    </>
  );
};

/* ============================================================
   STYLES OBJECT
   ============================================================ */
const styles = {
  nav: (scrolled) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: scrolled
      ? "rgba(17, 26, 85, 0.95)" /* Slightly more transparent */
      : "linear-gradient(180deg, rgba(8, 14, 48, 0.6) 0%, rgba(8, 14, 48, 0) 100%)",
    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
  }),
  container: (scrolled) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "28px",
    minHeight: scrolled ? "76px" : "100px", /* More dramatic size shift */
    paddingTop: "8px",
    paddingBottom: "8px",
    transition: "min-height 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
  }),
  logoLink: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    position: "relative",
    zIndex: 1001,
  },
  logo: (scrolled) => ({
    height: scrolled ? "36px" : "46px",
    width: "auto",
    objectFit: "contain",
    display: "block",
    transition: "height 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
  }),
  desktopNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    flex: 1,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
  },
  navLink: (active) => ({
    color: active ? "var(--gold-accent)" : "rgba(255,255,255,0.9)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "var(--font-body)",
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    fontWeight: 600, /* Softened from 700 */
  }),
  activeLine: (active) => ({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(4px)",
  }),
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexShrink: 0,
  },
  desktopButton: {
    minHeight: "48px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "0 24px",
    background: "transparent",
    color: "var(--white)",
    border: "1px solid rgba(255, 255, 255, 0.3)", /* Calmer border */
    borderRadius: 0,
    fontFamily: "var(--font-body)",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
  },
  mobileToggle: {
    width: "48px", /* Perfect mobile touch target */
    height: "48px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: 0,
    background: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.15)", /* Softer border than gold */
    borderRadius: 0,
    flexShrink: 0,
    position: "relative",
    zIndex: 1001,
  },
  burgerLine: (open, index) => ({
    width: index === 1 && !open ? "20px" : open ? "22px" : "14px",
    height: "1px",
    background: "var(--white)",
    transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
    transform: open && index === 1 ? "translateY(3px) rotate(45deg)" 
             : open && index === 2 ? "translateY(-4px) rotate(-45deg)" 
             : "none",
    alignSelf: index === 1 ? "center" : "flex-end",
    marginRight: index === 1 || open ? "0" : "6px", /* Asymmetrical touch to feel hand-crafted */
  }),
};

export default Navbar;