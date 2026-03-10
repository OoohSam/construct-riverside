import React, { useState, useEffect } from "react";
import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "20px 0",
        background: scrolled ? "rgba(14, 14, 14, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid #333" : "none",
        transition: "all 0.4s ease",
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
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={logo}
            alt="Riverside Azure Logo"
            style={{ height: "40px" }}
          />
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <button
            onClick={onOpenModal}
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid var(--gold-accent)",
              padding: "10px 25px",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              letterSpacing: "1px",
            }}
            className="desktop-only"
          >
            Request Price List
          </button>
        </div>
        {/* initially hidden on mobile, can be shown with a hamburger menu if needed in the future */}
      </div>
    </nav>
  );
};

export default Navbar;
