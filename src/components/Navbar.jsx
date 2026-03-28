import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: scrolled ? "rgba(14, 14, 14, 0.96)" : "rgba(14, 14, 14, 0.45)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: scrolled ? "12px 16px" : "18px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              minWidth: 0,
            }}
          >
            <img
              src={logo}
              alt="Riverside Azure Logo"
              style={{
                height: "clamp(34px, 6vw, 44px)",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          <ul
            className="desktop-only"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{
                      color: isActive ? "var(--gold-accent)" : "var(--text-muted)",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontSize: "0.78rem",
                      letterSpacing: "1.4px",
                      fontWeight: "600",
                      transition: "color 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <button
              onClick={onOpenModal}
              className="desktop-only btn-hover"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid var(--gold-accent)",
                padding: "10px 20px",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1.2px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              Get Pricing
            </button>

            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              style={{
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
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                  transformOrigin: "center",
                }}
              />
              <span
                style={{
                  width: "26px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: "26px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10, 10, 10, 0.98)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 24px 40px",
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            width: "100%",
            maxWidth: "320px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <li
                key={link.name}
                style={{
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(16px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: `all 0.35s ease ${index * 0.05}s`,
                }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: "block",
                    color: isActive ? "var(--gold-accent)" : "#fff",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontSize: "clamp(1.1rem, 5vw, 1.5rem)",
                    letterSpacing: "2px",
                    fontFamily: "var(--font-serif)",
                    padding: "10px 0",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={onOpenModal}
          style={{
            marginTop: "32px",
            background: "transparent",
            color: "#fff",
            border: "1px solid var(--gold-accent)",
            padding: "12px 20px",
            textTransform: "uppercase",
            fontSize: "0.78rem",
            letterSpacing: "1.2px",
            fontWeight: "600",
            cursor: "pointer",
            width: "100%",
            maxWidth: "320px",
          }}
        >
          Get Pricing
        </button>
      </div>
    </>
  );
};

export default Navbar;