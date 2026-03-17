// import React, { useState, useEffect } from "react";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Units", path: "/units" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Location", path: "/location" },
    { name: "Investment", path: "/investment" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: scrolled ? "15px 0" : "25px 0",
          background: scrolled ? "rgba(14, 14, 14, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                // background: "var(--gold-accent)",
                borderRadius: "2px",
              }}
            >
              {" "}
              {logo && (
                <img
                  src={logo}
                  alt="Riverside Azure Logo"
                  style={{ height: "40px", objectFit: "contain" }}
                />
              )}
            </div>
          </Link>

          <ul
            className="desktop-only"
            style={{
              display: "flex",
              gap: "35px",
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
                    className="nav-link"
                    style={{
                      color: isActive
                        ? "var(--gold-accent)"
                        : "var(--text-muted)",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "1.5px",
                      fontWeight: "600",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              onClick={onOpenModal}
              className="desktop-only btn-hover"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid var(--gold-accent)",
                padding: "12px 28px",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1.5px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              Get Pricing
            </button>

            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "5px",
                zIndex: 1001,
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(6px, 6px)"
                    : "none",
                }}
              ></span>
              <span
                style={{
                  width: "30px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              ></span>
              <span
                style={{
                  width: "30px",
                  height: "2px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg-dark)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{
                transform: mobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: mobileMenuOpen ? 1 : 0,
                transition: `all 0.4s ease ${index * 0.05}s`,
              }}
            >
              <Link
                to={link.path}
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--gold-accent)"
                      : "#fff",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontSize: "1.5rem",
                  letterSpacing: "4px",
                  fontFamily: "var(--font-serif)",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
