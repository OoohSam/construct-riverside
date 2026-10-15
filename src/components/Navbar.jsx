import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Residences", path: "/units" },
    { name: "Investment", path: "/investment" },
    { name: "Journal", path: "/blog" },
    { name: "Agents", path: "/agent-apply" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const handleCta = () => {
    setMobileMenuOpen(false);
    if (typeof onOpenModal === "function") onOpenModal();
  };

  const isActiveRoute = (path) => location.pathname === path || (path === "/" && location.pathname === "/");

  return (
    <>
      <nav className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`} aria-label="Primary navigation">
        <div className="container navbar-container">
          
          <Link to="/" className="navbar-logo-link" aria-label="Riverside Azure Home">
            <img src={logo} alt="Riverside Azure" className="navbar-logo" />
          </Link>

          <ul className="desktop-only navbar-links">
            {navLinks.map((link) => {
              const active = isActiveRoute(link.path);
              return (
                <li key={link.name} className="nav-item">
                  <Link to={link.path} className={`navbar-link ${active ? "navbar-link-active" : ""}`}>
                    <span>{link.name}</span>
                    <span className="navbar-link-line" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="desktop-only navbar-actions">
            <button type="button" onClick={handleCta} className="navbar-cta">
              <span>Secure Phase 1 Pricing</span>
              <span className="navbar-cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          <button
            type="button"
            className={`mobile-only navbar-menu-button ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="burger-line top-line" />
            <span className="burger-line bottom-line" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <nav aria-label="Mobile navigation" className="mobile-navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => {
              const active = isActiveRoute(link.path);
              return (
                <li
                  key={link.name}
                  className="mobile-nav-item"
                  style={{ transitionDelay: mobileMenuOpen ? `${0.06 * index}s` : "0s" }}
                >
                  <Link to={link.path} className={`mobile-nav-link ${active ? "mobile-nav-link-active" : ""}`} tabIndex={mobileMenuOpen ? 0 : -1}>
                    <span className="mobile-nav-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{link.name}</span>
                    {active && <span className="mobile-active-dot" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-bottom">
          <p className="mobile-bottom-label">Riverside · Nairobi</p>
          <button type="button" onClick={handleCta} className="mobile-button" tabIndex={mobileMenuOpen ? 0 : -1}>
            <span>Secure Phase 1 Pricing</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <style>{`
        :root {
          --nav-ease: cubic-bezier(0.19, 1, 0.22, 1);
        }

        .site-navbar {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.6s var(--nav-ease);
        }

        .site-navbar-scrolled {
          background: rgba(17, 26, 85, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 30px rgba(8, 12, 35, 0.15);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-height: 100px;
          padding: 8px 5%;
          transition: min-height 0.6s var(--nav-ease);
        }
        
        .site-navbar-scrolled .navbar-container {
          min-height: 76px;
        }

        .navbar-logo-link { display: flex; align-items: center; position: relative; z-index: 1001; }
        .navbar-logo { height: 46px; transition: height 0.6s var(--nav-ease); }
        .site-navbar-scrolled .navbar-logo { height: 36px; }

        .navbar-links {
          display: flex; align-items: center; justify-content: center; gap: 32px;
          list-style: none; margin: 0; padding: 0; flex: 1;
        }

        .nav-item { display: flex; align-items: center; }

        .navbar-link {
          position: relative; display: inline-flex; align-items: center;
          height: 48px; color: rgba(255,255,255,0.9);
          text-decoration: none; text-transform: uppercase;
          font-family: var(--font-body); font-size: 0.72rem;
          letter-spacing: 0.15em; font-weight: 600;
          transition: color 0.4s var(--nav-ease);
        }

        .navbar-link:hover, .navbar-link-active { color: var(--gold-accent); }

        .navbar-link-line {
          position: absolute; left: 0; bottom: 12px; width: 100%; height: 1px;
          background: var(--gold-accent); opacity: 0; transform: translateY(4px);
          transition: all 0.4s var(--nav-ease);
        }

        .navbar-link:hover .navbar-link-line, .navbar-link-active .navbar-link-line {
          opacity: 1; transform: translateY(0);
        }

        .navbar-actions { display: flex; align-items: center; justify-content: flex-end; }

        .navbar-cta {
          min-height: 48px; display: inline-flex; align-items: center; gap: 12px;
          padding: 0 24px; background: transparent; color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 0;
          font-family: var(--font-body); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer;
          transition: all 0.4s var(--nav-ease);
        }

        .navbar-cta:hover {
          background: var(--gold-accent); color: var(--azure-deep);
          border-color: var(--gold-accent);
        }

        .navbar-cta-arrow { transition: transform 0.4s var(--nav-ease); }
        .navbar-cta:hover .navbar-cta-arrow { transform: translateX(4px); }

        .navbar-menu-button {
          width: 48px; height: 48px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
          background: transparent; border: 1px solid rgba(255, 255, 255, 0.15);
          position: relative; z-index: 1001; cursor: pointer;
        }

        .burger-line {
          height: 1px; background: var(--white); transition: all 0.4s var(--nav-ease);
        }
        
        .top-line { width: 14px; align-self: flex-end; margin-right: 6px; }
        .bottom-line { width: 20px; align-self: flex-end; margin-right: 6px; }

        .navbar-menu-button.open .top-line {
          width: 22px; align-self: center; margin-right: 0;
          transform: translateY(3px) rotate(45deg);
        }
        .navbar-menu-button.open .bottom-line {
          width: 22px; align-self: center; margin-right: 0;
          transform: translateY(-4px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed; top: 0; left: 0; width: 100%; height: 100dvh;
          z-index: 998; display: flex; flex-direction: column; justify-content: center;
          padding: 80px 32px 40px; background: var(--azure-deep); color: var(--white);
          opacity: 0; pointer-events: none; visibility: hidden;
          transition: opacity 0.5s var(--nav-ease), visibility 0.5s;
        }

        .mobile-menu-open { opacity: 1; pointer-events: auto; visibility: visible; }

        .mobile-navigation { width: 100%; max-width: 500px; margin: 0 auto; }
        .mobile-nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }

        .mobile-nav-item {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.5s var(--nav-ease), transform 0.5s var(--nav-ease);
        }
        .mobile-menu-open .mobile-nav-item { opacity: 1; transform: translateY(0); }

        .mobile-nav-link {
          display: grid; grid-template-columns: 40px 1fr auto; align-items: center;
          padding: 12px 0; color: rgba(255,255,255,0.8); text-decoration: none;
          font-family: var(--font-body); font-size: clamp(2.2rem, 8vw, 3rem);
          font-weight: 400; letter-spacing: -0.02em; line-height: 1;
          transition: color 0.4s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link-active { color: var(--gold-accent); }

        .mobile-nav-number {
          font-family: var(--font-body); font-size: 0.75rem; font-weight: 400;
          letter-spacing: 0.1em; color: rgba(255, 255, 255, 0.4);
        }

        .mobile-active-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold-accent); }

        .mobile-bottom {
          width: 100%; max-width: 500px; margin: 48px auto 0; opacity: 0;
          transform: translateY(20px); transition: opacity 0.6s var(--nav-ease) 0.3s, transform 0.6s var(--nav-ease) 0.3s;
        }
        .mobile-menu-open .mobile-bottom { opacity: 1; transform: translateY(0); }

        .mobile-button {
          width: 100%; min-height: 56px; display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px; background: var(--gold-accent); color: var(--azure-deep);
          border: 1px solid var(--gold-accent); font-family: var(--font-body); font-size: 0.75rem;
          font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer;
          transition: all 0.4s var(--nav-ease);
        }

        .mobile-button:hover { background: transparent; color: var(--gold-accent); }

        .mobile-bottom-label {
          margin: 0 0 16px; color: rgba(255,255,255,0.4); font-family: var(--font-body);
          font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .navbar-links { gap: 20px; }
          .navbar-link { font-size: 0.65rem; }
          .navbar-cta { padding: 0 20px; }
        }
        @media (max-width: 900px) { .navbar-cta { display: none; } }
        @media (max-width: 768px) {
          .navbar-container { padding-top: 12px; padding-bottom: 12px; }
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;