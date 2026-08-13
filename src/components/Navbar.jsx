import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";
import { trackMetaEvent, createEventId } from "../lib/metaPixel.js";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Units", path: "/units" },
  { name: "Investment", path: "/investment" },
  { name: "Blog", path: "/blog" },
  { name: "Agents", path: "/agent-apply" },
  { name: "Contact", path: "/contact" },
];

  return (
    <>
      <nav style={styles.nav(scrolled)}>
        <div className="container" style={styles.container(scrolled)}>
          <Link to="/" style={styles.logoLink}>
            <img src={logo} alt="Riverside Azure Logo" style={styles.logo} />
          </Link>

          <ul className="desktop-only" style={styles.desktopNav}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.name}>
                  <Link to={link.path} style={styles.navLink(isActive)}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={styles.actions}>
            <button
              onClick={onOpenModal}
              className="desktop-only"
              style={styles.desktopButton}
            >
              Secure Phase 1 Pricing
            </button>

            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              style={styles.mobileToggle}
            >
              <span style={styles.burgerLine1(mobileMenuOpen)} />
              <span style={styles.burgerLine2(mobileMenuOpen)} />
              <span style={styles.burgerLine3(mobileMenuOpen)} />
            </button>
          </div>
        </div>
      </nav>

      <div style={styles.mobileMenu(mobileMenuOpen)}>
        <ul style={styles.mobileNavList}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <li key={link.name} style={styles.mobileNavItem(mobileMenuOpen, index)}>
                <Link to={link.path} style={styles.mobileNavLink(isActive)}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button onClick={onOpenModal} style={styles.mobileButton}>
          Secure Phase 1 Pricing
        </button>
      </div>
    </>
  );
};

export default Navbar;

const styles = {
  nav: (scrolled) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: scrolled
      ? "linear-gradient(180deg, rgba(2,17,31,0.96), rgba(3,27,47,0.94))"
      : "linear-gradient(180deg, rgba(2,17,31,0.58), rgba(3,27,47,0.38))",
    backdropFilter: "blur(14px)",
    borderBottom: scrolled
      ? "1px solid rgba(243,193,66,0.12)"
      : "1px solid transparent",
    boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.22)" : "none",
    transition: "all 0.35s ease",
  }),

  container: (scrolled) => ({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: scrolled ? "12px 16px" : "20px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  }),

  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    minWidth: 0,
  },

  logo: {
    height: "clamp(34px, 6vw, 44px)",
    width: "auto",
    objectFit: "contain",
    display: "block",
  },

  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  navLink: (isActive) => ({
    color: isActive ? "var(--gold-accent)" : "var(--text-muted)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.78rem",
    letterSpacing: "1.8px",
    fontWeight: "700",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  }),

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexShrink: 0,
  },

  desktopButton: {
    background: "transparent",
    color: "var(--text-main)",
    border: "1px solid rgba(243,193,66,0.38)",
    padding: "11px 22px",
    textTransform: "uppercase",
    fontSize: "0.75rem",
    letterSpacing: "1.5px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.35s ease",
    whiteSpace: "nowrap",
    boxShadow: "0 10px 24px rgba(243,193,66,0.08)",
  },

  mobileToggle: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "6px",
    padding: "8px",
    minWidth: "44px",
    minHeight: "44px",
    zIndex: 1001,
  },

  burgerBase: {
    width: "26px",
    height: "2px",
    background: "var(--gold-accent)",
    transition: "all 0.3s ease",
    transformOrigin: "center",
  },

  burgerLine1: (open) => ({
    width: "26px",
    height: "2px",
    background: "var(--gold-accent)",
    transition: "all 0.3s ease",
    transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
    transformOrigin: "center",
  }),

  burgerLine2: (open) => ({
    width: "26px",
    height: "2px",
    background: "var(--gold-accent)",
    transition: "all 0.3s ease",
    opacity: open ? 0 : 1,
  }),

  burgerLine3: (open) => ({
    width: "26px",
    height: "2px",
    background: "var(--gold-accent)",
    transition: "all 0.3s ease",
    transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none",
    transformOrigin: "center",
  }),

  mobileMenu: (open) => ({
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.98), rgba(3,27,47,0.99))",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 24px 40px",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
    pointerEvents: open ? "auto" : "none",
    transition: "all 0.3s ease",
  }),

  mobileNavList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    maxWidth: "320px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  mobileNavItem: (open, index) => ({
    transform: open ? "translateY(0)" : "translateY(16px)",
    opacity: open ? 1 : 0,
    transition: `all 0.35s ease ${index * 0.05}s`,
  }),

  mobileNavLink: (isActive) => ({
    display: "block",
    color: isActive ? "var(--gold-accent)" : "var(--text-main)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "clamp(1.1rem, 5vw, 1.5rem)",
    letterSpacing: "2px",
    fontFamily: "var(--font-serif)",
    padding: "10px 0",
    textShadow: "0 4px 18px rgba(0,0,0,0.22)",
  }),

  mobileButton: {
    marginTop: "32px",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "14px 22px",
    textTransform: "uppercase",
    fontSize: "0.78rem",
    letterSpacing: "1.4px",
    fontWeight: "800",
    cursor: "pointer",
    width: "100%",
    maxWidth: "320px",
    boxShadow:
      "0 14px 36px rgba(243,193,66,0.22), inset 0 1px 0 rgba(255,255,255,0.24)",
  },
};