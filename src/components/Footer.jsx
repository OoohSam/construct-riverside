
import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo/Riverside-azure-Gold-Logo.png";

/* ==========================================
   RIVERSIDE AZURE FOOTER
   Separate from the main Navbar
========================================== */

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Residences", path: "/units" },
  { name: "Investment", path: "/investment" },
  { name: "Journal", path: "/blog" },
  { name: "Become an Agent", path: "/agent-apply" },
  { name: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
];

/*
  ADD YOUR OFFICIAL SOCIAL MEDIA LINKS BELOW.

  Leave url as "" until the correct link is available.
  The icon will remain visible but won't navigate.
*/

const socialLinks = [
  {
    name: "Facebook",
    type: "facebook",
    url: "https://www.facebook.com/profile.php?id=61578426218430",
  },
  {
    name: "Instagram",
    type: "instagram",
    url: "https://www.instagram.com/riversideazure/",
  },
  {
    name: "LinkedIn",
    type: "linkedin",
    url: "https://www.linkedin.com/in/jnc-brothers-51064b403 ",
  },
  {
    name: "YouTube",
    type: "youtube",
    url: "https://www.youtube.com/@RiversideAzure",
  },

  {
    name: "X",
    type: "x",
    url: "",
  },
];

/* ==========================================
   SOCIAL MEDIA ICONS
   No external icon package required
========================================== */ 


function SocialIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
          />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="2"
          />
          <path d="M7 10v7M7 7v.01M11 17v-7h3v1a3 3 0 0 1 6 2v4M11 10h3" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common}>
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="4"
          />
          <path d="m10 9 5 3-5 3z" />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path d="M4 3h4l12 18h-4z" />
          <path d="M20 3 4 21" />
        </svg>
      );

    default:
      return null;
  }
}

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ra-footer">

      {/* GOLD ACCENT LINE */}
      <div
        className="ra-footer-accent"
        aria-hidden="true"
      />

      <div className="ra-footer-container">

        {/* MAIN FOOTER GRID */}
        <div className="ra-footer-grid">

          {/* COLUMN 1 - BRAND */}
          <div className="ra-footer-brand">

            <Link
              to="/"
              className="ra-footer-logo-link"
              aria-label="Riverside Azure Home"
            >
              <img
                src={logo}
                alt="Riverside Azure"
                className="ra-footer-logo"
              />
            </Link>

            <p className="ra-footer-description">
              Contemporary urban living in the heart of
              Riverside, Nairobi. Discover thoughtfully
              designed 1, 2 and 3-bedroom residences
              created for comfort, elegance and modern
              city living.
            </p>

            <div className="ra-footer-location">
              <span className="ra-footer-location-line" />
              <span>25 Riverside Drive, Nairobi</span>
            </div>
          </div>

          {/* COLUMN 2 - NAVIGATION */}
          <div className="ra-footer-column">

            <h3 className="ra-footer-heading">
              Explore
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="ra-footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COLUMN 3 - LEGAL */}
          <div className="ra-footer-column">

            <h3 className="ra-footer-heading">
              Information
            </h3>

            <ul className="ra-footer-links">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ra-footer-information">
              <span>RIVERSIDE AZURE</span>
              <p>
                Riverside Drive
                <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* COLUMN 4 - SOCIAL MEDIA */}
          <div className="ra-footer-column ra-footer-connect">

            <h3 className="ra-footer-heading">
              Connect With Us
            </h3>

            <p className="ra-footer-social-description">
              Follow Riverside Azure for project updates,
              residential inspiration and the latest news.
            </p>

            <div className="ra-footer-social-icons">

              {socialLinks.map((social) =>
                social.url ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ra-footer-social-icon"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <SocialIcon type={social.type} />
                  </a>
                ) : (
                  <span
                    key={social.name}
                    className="ra-footer-social-icon ra-footer-social-disabled"
                    aria-label={`${social.name} link not configured`}
                    title={`${social.name}: add official profile URL`}
                  >
                    <SocialIcon type={social.type} />
                  </span>
                )
              )}

            </div>

            <Link
              to="/contact"
              className="ra-footer-contact-link"
            >
              Get in Touch
              <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="ra-footer-divider" />

        {/* BOTTOM BAR */}
        <div className="ra-footer-bottom">

          <p className="ra-footer-copyright">
            © {currentYear} Riverside Azure.
            All Rights Reserved.
          </p>

          <div className="ra-footer-bottom-links">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span
              className="ra-footer-bottom-separator"
              aria-hidden="true"
            />

            <Link to="/contact">
              Contact
            </Link>
          </div>

          <p className="ra-footer-bottom-location">
            RIVERSIDE · NAIROBI
          </p>

        </div>
      </div>

      <style>{`

        /* ==========================================
           FOOTER FOUNDATION
        ========================================== */

        .ra-footer {
          --footer-navy: #192335;
          --footer-gold: #b89a4b;
          --footer-white: #ffffff;
          --footer-muted: #b7bfcc;

          position: relative;

          width: 100%;

          background: var(--footer-navy);
          color: var(--footer-white);

          font-family: var(
            --font-body,
            "Montserrat",
            sans-serif
          );

          overflow: hidden;
        }

        /* GOLD TOP BORDER */

        .ra-footer-accent {
          width: 100%;
          height: 2px;

          background: linear-gradient(
            90deg,
            transparent 0%,
            #967729 25%,
            #d2b769 50%,
            #967729 75%,
            transparent 100%
          );
        }

        /* ==========================================
           CONTAINER
        ========================================== */

        .ra-footer-container {
          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          padding:
            85px
            clamp(24px, 5vw, 85px)
            28px;
        }

        /* ==========================================
           GRID
        ========================================== */

        .ra-footer-grid {
          display: grid;

          grid-template-columns:
            minmax(260px, 1.6fr)
            minmax(130px, 0.8fr)
            minmax(140px, 0.8fr)
            minmax(190px, 1fr);

          gap: clamp(25px, 4vw, 70px);
          align-items: start;
        }

        /* ==========================================
           BRAND
        ========================================== */

        .ra-footer-brand {
          max-width: 340px;
        }

        .ra-footer-logo-link {
          display: inline-flex;
          align-items: center;

          margin-bottom: 26px;
        }

        .ra-footer-logo {
          display: block;

          width: auto;
          height: 54px;

          max-width: 210px;
          object-fit: contain;
        }

        .ra-footer-description {
          margin: 0 0 27px;

          color: var(--footer-muted);

          font-size: 0.86rem;
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: 0.005em;
        }

        .ra-footer-location {
          display: flex;
          align-items: center;
          gap: 12px;

          color: #e1d4af;

          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .ra-footer-location-line {
          width: 27px;
          height: 1px;
          flex-shrink: 0;

          background: var(--footer-gold);
        }

        /* ==========================================
           COLUMN HEADINGS
        ========================================== */

        .ra-footer-heading {
          position: relative;

          margin: 7px 0 28px;
          padding-bottom: 16px;

          color: #ffffff;

          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.035em;
          line-height: 1.4;
        }

        .ra-footer-heading::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: 0;

          width: 30px;
          height: 1px;

          background: var(--footer-gold);
        }

        /* ==========================================
           NAVIGATION LINKS
        ========================================== */

        .ra-footer-links {
          display: flex;
          flex-direction: column;
          gap: 16px;

          margin: 0;
          padding: 0;

          list-style: none;
        }

        .ra-footer-links a {
          display: inline-flex;
          align-items: center;

          color: var(--footer-muted);

          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.005em;
          line-height: 1.5;

          text-decoration: none;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .ra-footer-links a:hover {
          color: var(--footer-gold);
          transform: translateX(4px);
        }

        /* ==========================================
           INFORMATION
        ========================================== */

        .ra-footer-information {
          margin-top: 38px;
        }

        .ra-footer-information span {
          display: block;

          margin-bottom: 12px;

          color: var(--footer-gold);

          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .ra-footer-information p {
          margin: 0;

          color: var(--footer-muted);

          font-size: 0.79rem;
          font-weight: 400;
          line-height: 1.8;
        }

        /* ==========================================
           SOCIAL MEDIA
        ========================================== */

        .ra-footer-social-description {
          max-width: 250px;

          margin: 0 0 25px;

          color: var(--footer-muted);

          font-size: 0.82rem;
          line-height: 1.8;
        }

        .ra-footer-social-icons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;
        }

        .ra-footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 39px;
          height: 39px;

          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;

          color: #ffffff;
          background: transparent;

          text-decoration: none;

          transition:
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        a.ra-footer-social-icon:hover {
          background: var(--footer-gold);
          border-color: var(--footer-gold);

          color: var(--footer-navy);

          transform: translateY(-3px);
        }

        .ra-footer-social-disabled {
          opacity: 0.5;
          cursor: default;
        }

        /* ==========================================
           CONTACT LINK
        ========================================== */

        .ra-footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 18px;

          margin-top: 31px;
          padding-bottom: 8px;

          color: #ffffff;

          border-bottom: 1px solid var(--footer-gold);

          font-size: 0.8rem;
          font-weight: 600;

          text-decoration: none;

          transition:
            color 0.3s ease,
            gap 0.3s ease;
        }

        .ra-footer-contact-link span {
          color: var(--footer-gold);
          font-size: 1.1rem;
        }

        .ra-footer-contact-link:hover {
          color: var(--footer-gold);
          gap: 23px;
        }

        /* ==========================================
           DIVIDER
        ========================================== */

        .ra-footer-divider {
          width: 100%;
          height: 1px;

          margin-top: 72px;

          background: rgba(255,255,255,0.13);
        }

        /* ==========================================
           BOTTOM BAR
        ========================================== */

        .ra-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          gap: 18px;

          padding-top: 24px;
        }

        .ra-footer-copyright {
          margin: 0;

          color: rgba(255,255,255,0.55);

          font-size: 0.7rem;
          font-weight: 400;
          line-height: 1.6;
        }

        .ra-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .ra-footer-bottom-links a {
          color: rgba(255,255,255,0.7);

          font-size: 0.7rem;
          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ra-footer-bottom-links a:hover {
          color: var(--footer-gold);
        }

        .ra-footer-bottom-separator {
          display: block;

          width: 1px;
          height: 12px;

          background: rgba(255,255,255,0.25);
        }

        .ra-footer-bottom-location {
          margin: 0;

          color: var(--footer-gold);

          font-size: 0.64rem;
          font-weight: 600;
          letter-spacing: 0.16em;
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 1100px) {
          .ra-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 50px;
          }

          .ra-footer-container {
            padding-top: 65px;
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 650px) {
          .ra-footer-container {
            padding: 55px 24px 26px;
          }

          .ra-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 20px;
            row-gap: 44px;
          }

          .ra-footer-brand {
            grid-column: 1 / -1;
          }

          .ra-footer-logo {
            height: 45px;
          }

          .ra-footer-description {
            max-width: 340px;
            font-size: 0.81rem;
          }

          .ra-footer-links {
            gap: 14px;
          }

          .ra-footer-links a {
            font-size: 0.78rem;
          }

          .ra-footer-heading {
            margin-bottom: 23px;
            font-size: 0.8rem;
          }

          .ra-footer-connect {
            grid-column: 1 / -1;
          }

          .ra-footer-social-description {
            max-width: 320px;
          }

          .ra-footer-divider {
            margin-top: 48px;
          }

          .ra-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
        }

        /* ==========================================
           VERY SMALL SCREENS
        ========================================== */

        @media (max-width: 360px) {
          .ra-footer-grid {
            grid-template-columns: 1fr;
          }

          .ra-footer-brand,
          .ra-footer-connect {
            grid-column: auto;
          }
        }

        /* ==========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .ra-footer *,
          .ra-footer *::before,
          .ra-footer *::after {
            transition: none !important;
            animation: none !important;
          }
        }

      `}</style>
    </footer>
  );
}
