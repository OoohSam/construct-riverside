import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerContainer}>
        <div style={styles.footerTop} className="footer-top-grid">
          {/* BRAND */}
          <div style={styles.footerBrand}>
            <h2 style={styles.footerTitle}>RIVERSIDE AZURE</h2>

            <p style={styles.footerDescription}>
              Refined urban living in Riverside, Nairobi. Luxury 1, 2 &amp; 3
              bedroom residences designed for modern investors and homeowners.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Quick Links</h4>

            <div style={styles.footerLinks}>
              <Link to="/" style={styles.footerLink}>
                Home
              </Link>

              <Link to="/about" style={styles.footerLink}>
                About
              </Link>

              <Link to="/units" style={styles.footerLink}>
                Units
              </Link>

              <Link to="/investment" style={styles.footerLink}>
                Investment
              </Link>

              <Link to="/blog" style={styles.footerLink}>
                Blog
              </Link>

              <Link to="/contact" style={styles.footerLink}>
                Contact
              </Link>

              <Link to="/privacy-policy" style={styles.footerLink}>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Contact</h4>

            <div style={styles.footerContact}>
              <a href="tel:+254796529997" style={styles.footerLink}>
                +254 796 529 997
              </a>

              <a
                href="mailto:info@riversideazure.com"
                style={styles.footerLink}
              >
                info@riversideazure.com
              </a>

              <p style={styles.footerTextMuted}>
                25 Riverside Drive, Nairobi
              </p>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Follow Us</h4>

            <div style={styles.footerSocialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61578426218430"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerLink}
                aria-label="Follow Riverside Azure on Facebook"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/riversideazure/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerLink}
                aria-label="Follow Riverside Azure on Instagram"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@riversideazure"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.footerLink}
                aria-label="Follow Riverside Azure on TikTok"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div style={styles.footerBottom}>
          <p style={styles.footerText}>
            &copy; {new Date().getFullYear()} JNC Brothers &amp; Company Limited.
            All Rights Reserved.
          </p>

          <p style={styles.footerDisclaimer}>
            Prices, layouts, images, and availability are subject to change
            without notice.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    background: "linear-gradient(180deg, #02111f 0%, #010c16 100%)",
    padding: "72px 0 28px",
    borderTop: "1px solid rgba(243,193,66,0.12)",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },

  footerTop: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "40px",
    alignItems: "flex-start",
  },

  footerBrand: {
    maxWidth: "440px",
  },

  footerTitle: {
    color: "var(--text-main)",
    fontFamily: "var(--font-serif)",
    marginBottom: "16px",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    lineHeight: 1.1,
  },

  footerDescription: {
    color: "var(--text-muted)",
    fontSize: "0.95rem",
    lineHeight: 1.8,
    margin: 0,
  },

  footerColumn: {
    display: "flex",
    flexDirection: "column",
  },

  footerHeading: {
    color: "var(--gold-accent)",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    marginBottom: "16px",
    fontWeight: 800,
  },

  footerLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  footerContact: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  footerSocialLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  footerLink: {
    color: "rgba(247,244,236,0.82)",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    transition: "color 0.25s ease",
  },

  footerTextMuted: {
    color: "rgba(255,255,255,0.58)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
  },

  footerBottom: {
    borderTop: "1px solid rgba(243,193,66,0.08)",
    paddingTop: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  footerText: {
    color: "rgba(255,255,255,0.52)",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    margin: 0,
  },

  footerDisclaimer: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.8rem",
    lineHeight: 1.6,
    margin: 0,
  },
};