import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Global Components
import Navbar from "./components/Navbar";
import LeadModal from "./components/LeadModal";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
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

  // Dedicated landing-page experience:
  // no normal Navbar, global lead modal, floating CTA, or global footer.
  const isLandingExperience =
    location.pathname === "/riverside" ||
    location.pathname === "/riverside/thank-you";

  return (
    <div style={styles.app}>
      <ScrollToTop />

      {/* NORMAL WEBSITE NAVIGATION */}
      {!isLandingExperience && (
        <Navbar onOpenModal={handleOpenModal} />
      )}

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

            {/* DEDICATED RIVERSIDE AZURE LANDING PAGE */}
            <Route path="/riverside" element={<LandingPage />} />

            {/* LANDING PAGE THANK-YOU */}
            <Route
              path="/riverside/thank-you"
              element={<ThankYou />}
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* NORMAL WEBSITE FOOTER
          LandingPage.jsx and ThankYou.jsx will use Footer.jsx themselves. */}
      {!isLandingExperience && <Footer />}

      {/* NORMAL WEBSITE LEAD MODAL */}
      {!isLandingExperience && (
        <LeadModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* NORMAL WEBSITE FLOATING CTA */}
      {!isLandingExperience && (
        <FloatingCTA onOpenModal={handleOpenModal} />
      )}
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
    background: "#FFFFFF",
  },

  main: {
    flex: 1,
    width: "100%",
    overflowX: "hidden",
  },
};