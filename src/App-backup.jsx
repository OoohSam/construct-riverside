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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";

// Blog
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";


const isLandingExperience =
  location.pathname === "/riverside" ||
  location.pathname === "/riverside/thank-you";

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
      {/* SCROLL TO TOP */}
      <ScrollToTop />

      {/* NAVIGATION */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* PAGE CONTENT */}
      <main style={styles.main}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* HOME */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutSection onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />

            {/* UNITS */}
            <Route
              path="/units"
              element={
                <PageTransition>
                  <Units onOpenModal={handleOpenModal} />
                </PageTransition>
              }
            />

            {/* INVESTMENT */}
            <Route
              path="/investment"
              element={
                <PageTransition>
                  <Investment onCtaClick={handleOpenModal} />
                </PageTransition>
              }
            />

            {/* BLOG HOMEPAGE */}
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />

            {/* INDIVIDUAL BLOG ARTICLE */}
            <Route
              path="/blog/:slug"
              element={
                <PageTransition>
                  <BlogPost />
                </PageTransition>
              }
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            {/* AGENT APPLICATION */}
            <Route
              path="/agent-apply"
              element={
                <PageTransition>
                  <AgentApply />
                </PageTransition>
              }
            />

            {/* PRIVACY POLICY */}
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
     <SiteFooter/>

      {/* GLOBAL LEAD MODAL */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* FLOATING CTA */}
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