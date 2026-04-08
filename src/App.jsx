import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Global Components
import Navbar from "./components/Navbar";
import LeadModal from "./components/LeadModal";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import useScrollReveal from "./hooks/useScrollReveal";

// Pages
import Home from "./pages/Home";
import Units from "./pages/Units";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";
import AboutSection from "./pages/About";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);
}

function AppShell() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useScrollReveal();
  usePageTracking();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div style={styles.app}>
      <ScrollToTop />

      <Navbar onOpenModal={handleOpenModal} />

      <main style={styles.main}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutSection onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />
            <Route
              path="/units"
              element={
                <PageTransition>
                  <Units onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />
            <Route
              path="/investment"
              element={
                <PageTransition>
                  <Investment onCtaClick={handleOpenModal} />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <div style={styles.footerTop} className="footer-top-grid">
            <div style={styles.footerBrand}>
              <h2 style={styles.footerTitle}>RIVERSIDE AZURE</h2>
              <p style={styles.footerDescription}>
                Refined urban living in Riverside, Nairobi. Luxury 1, 2 & 3
                bedroom residences designed for modern investors and homeowners.
              </p>
            </div>

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
                <Link to="/contact" style={styles.footerLink}>
                  Contact
                </Link>
              </div>
            </div>

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
                <p style={styles.footerTextMuted}>25 Riverside Drive, Nairobi</p>
              </div>
            </div>
          </div>

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

      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <FloatingCTA onOpenModal={handleOpenModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "var(--bg-dark)",
  },

  main: {
    flex: 1,
    width: "100%",
    overflowX: "hidden",
  },

  footer: {
    background: "#050505",
    padding: "72px 0 28px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },

  footerTop: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: "40px",
  },

  footerBrand: {
    maxWidth: "420px",
  },

  footerTitle: {
    color: "#fff",
    fontFamily: "var(--font-serif)",
    marginBottom: "16px",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    lineHeight: 1.1,
  },

  footerDescription: {
    color: "rgba(255,255,255,0.65)",
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
    letterSpacing: "0.12em",
    marginBottom: "16px",
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

  footerLink: {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },

  footerTextMuted: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
  },

  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  footerText: {
    color: "#888",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    margin: 0,
  },

  footerDisclaimer: {
    color: "#666",
    fontSize: "0.8rem",
    lineHeight: 1.6,
    margin: 0,
  },
};