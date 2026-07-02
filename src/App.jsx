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
import AgentApply from "./pages/AgentApply";

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
            <Route
              path="/agent-apply"
              element={
                <PageTransition>
                  <AgentApply />
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
          <a href="tel:+254700686666" style={styles.footerLink}>
            +254 700 686 666
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
    background: "linear-gradient(180deg, #02111f 0%, #010c16 100%)",
    padding: "72px 0 28px",
    borderTop: "1px solid rgba(243,193,66,0.12)",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  },

  footerSocialLinks: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
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

  footerLink: {
    color: "rgba(247,244,236,0.82)",
    textDecoration: "none",
    fontSize: "0.95rem",
    lineHeight: 1.6,
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