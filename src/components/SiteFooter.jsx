 <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <div style={styles.footerTop} className="footer-top-grid">
            {/* BRAND */}
            <div style={styles.footerBrand}>
              <h2 style={styles.footerTitle}>RIVERSIDE AZURE</h2>

              <p style={styles.footerDescription}>
                Refined urban living in Riverside, Nairobi. Luxury 1, 2 & 3
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
              &copy; {new Date().getFullYear()} JNC Brothers & Company Limited.
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


//Be Still and Know that I am God.
//Psalm 46:10
//Seek the Lord while He may be found, call upon Him while He is near.
//Isaiah 55:6
//isaiah 54:1-17
//with a little wrath did i put you to silence, and with a little anger i hid my face from you for a moment. but with everlasting kindness i will have mercy on you, says the lord your redeemer.