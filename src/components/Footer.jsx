import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          
          {/* =========================================================
              TOP BRAND STATEMENT
              ========================================================= */}
          <div className="footer-brand-section">
            <div className="footer-brand-header">
              <span className="footer-eyebrow">Riverside · Nairobi</span>
            </div>

            <div className="footer-brand-grid">
              <h2 className="footer-brand-title">
                A considered address<br />
                for modern Nairobi.
              </h2>

              <div className="footer-brand-side">
                <p className="footer-brand-desc">
                  Riverside Azure is a refined collection of 1, 2 &amp; 3-bedroom residences 
                  created for contemporary urban living and long-term value.
                </p>
                <Link to="/contact" className="btn-solid-footer">
                  Enquire About Riverside Azure
                </Link>
              </div>
            </div>
          </div>

          {/* =========================================================
              STRUCTURAL DIVIDER
              ========================================================= */}
          <div className="footer-divider" />

          {/* =========================================================
              NAVIGATION / CONTACT GRID
              ========================================================= */}
          <div className="footer-nav-grid">
            
            {/* COLUMN 1: IDENTITY */}
            <div className="footer-col-identity">
              <div className="footer-logo">
                <span className="logo-top">RIVERSIDE</span>
                <span className="logo-bottom">AZURE</span>
              </div>
              <p className="footer-address">
                25 Riverside Drive<br />
                Nairobi, Kenya
              </p>
              <div className="footer-developer">
                <span>Developed by</span>
                <strong>JNC Brothers &amp; Company Limited</strong>
              </div>
            </div>

            {/* COLUMN 2: EXPLORE */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="col-number">01</span>
                <span className="col-title">Explore</span>
              </div>
              <nav className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/units" className="footer-link">Residences</Link>
                <Link to="/investment" className="footer-link">Investment</Link>
                <Link to="/blog" className="footer-link">Journal</Link>
              </nav>
            </div>

            {/* COLUMN 3: CONNECT */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="col-number">02</span>
                <span className="col-title">Connect</span>
              </div>
              <nav className="footer-links">
                <a href="tel:+254796529997" className="footer-link">+254 796 529 997</a>
                <a href="mailto:info@riversideazure.com" className="footer-link">sales@riversideazure.com</a>
                <Link to="/contact" className="footer-link">Visit Our Sales Office</Link>
              </nav>
            </div>

            {/* COLUMN 4: FOLLOW */}
            <div className="footer-col">
              <div className="footer-col-header">
                <span className="col-number">03</span>
                <span className="col-title">Follow</span>
              </div>
              <nav className="footer-links">
                <a href="https://www.facebook.com/profile.php?id=61578426218430" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Facebook <span className="arrow">↗</span>
                </a>
                <a href="https://www.instagram.com/riversideazure/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Instagram <span className="arrow">↗</span>
                </a>
                <a href="https://www.tiktok.com/@riversideazure" target="_blank" rel="noopener noreferrer" className="footer-link">
                  TikTok <span className="arrow">↗</span>
                </a>
              </nav>
            </div>

          </div>

          {/* =========================================================
              BOTTOM BAR
              ========================================================= */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>© {currentYear} JNC Brothers &amp; Company Limited.</span>
              <span className="copyright-rights">All Rights Reserved.</span>
            </div>

            <div className="footer-legal">
              <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
              <span className="legal-dot">·</span>
              <span className="legal-text">
                Prices, layouts, images &amp; availability subject to change without notice.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================
          STYLES (Gallery Minimalist Structure)
          ========================================================= */}
      <style>{`
        .site-footer {
          background: var(--azure-deep);
          color: var(--white);
          padding: clamp(100px, 12vw, 160px) 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* TOP BRAND SECTION */
        .footer-brand-section {
          margin-bottom: clamp(60px, 8vw, 100px);
        }

        .footer-brand-header {
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 16px;
        }

        .footer-eyebrow {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .footer-brand-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: flex-end;
        }

        .footer-brand-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .footer-brand-side {
          max-width: 480px;
        }

        .footer-brand-desc {
          margin: 0 0 40px 0;
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
        }

        .btn-solid-footer {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 56px;
          background: var(--white);
          color: var(--azure-deep);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .btn-solid-footer:hover {
          background: var(--gold-accent);
          color: var(--white);
        }

        /* STRUCTURAL DIVIDER */
        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: clamp(60px, 8vw, 100px);
        }

        /* NAVIGATION GRID */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr; /* Architectural hierarchy */
          gap: 40px;
          padding-bottom: 80px;
        }

        .footer-col-identity {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
          font-family: var(--font-display);
          font-size: 1.75rem;
          line-height: 1;
        }

        .logo-top {
          letter-spacing: 0.05em;
        }

        .logo-bottom {
          color: var(--gold-accent);
          font-size: 1.1rem;
          letter-spacing: 0.3em;
          margin-top: 4px;
        }

        .footer-address {
          margin: 0 0 32px 0;
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-developer {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .footer-developer strong {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .footer-col-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .col-number {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
        }

        .col-title {
          color: rgba(255, 255, 255, 0.5);
          font-family: var(--font-body);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 0; /* Ensures a good touch target on mobile */
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--gold-accent);
        }

        .footer-link .arrow {
          margin-left: 8px;
          font-size: 0.8rem;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover .arrow {
          opacity: 1;
        }

        /* BOTTOM BAR */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-family: var(--font-body);
        }

        .footer-copyright {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.7rem;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: var(--gold-accent);
        }

        .legal-dot {
          color: var(--gold-accent);
        }

        .legal-text {
          color: rgba(255, 255, 255, 0.4);
        }

        /* =========================================================
           MOBILE RESPONSIVENESS (Proper CSS)
           ========================================================= */
        @media (max-width: 1024px) {
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr; /* 2x2 Grid for tablets */
            gap: 60px 40px;
          }
          .footer-col-identity {
            grid-column: 1 / -1; /* Spans full width on top */
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .site-footer {
            padding: 80px 0 40px;
          }
          .footer-brand-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-brand-title {
            font-size: clamp(2.5rem, 10vw, 3.2rem);
          }
          .footer-nav-grid {
            grid-template-columns: 1fr; /* Full stack for mobile */
            gap: 48px;
            padding-bottom: 48px;
          }
          .footer-col-identity {
            padding-bottom: 24px;
          }
          .footer-col-header {
            margin-bottom: 16px;
          }
          .footer-link {
            padding: 12px 0; /* Larger touch targets for mobile */
            border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Specification sheet look */
          }
          .footer-link:last-child {
            border-bottom: none;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 24px;
          }
          .footer-legal {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .legal-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;