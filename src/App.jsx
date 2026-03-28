import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import LeadModal from "./components/LeadModal";
import FloatingCTA from "./components/FloatingCTA";
import useScrollReveal from "./hooks/useScrollReveal";

// Pages
import Home from "./pages/Home";
import Units from "./pages/Units";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";
import AboutSection from "./pages/About";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll animation hook
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div style={styles.app}>
        <Navbar onOpenModal={handleOpenModal} />

        <main style={styles.main}>
          <Routes>
            <Route
              path="/"
              element={<Home onOpenModal={handleOpenModal} />}
            />

            <Route path="/about" element={<AboutSection />} />

            <Route
              path="/units"
              element={<Units onOpenModal={handleOpenModal} />}
            />

            {/* ✅ FIXED: pass modal handler */}
            <Route
              path="/investment"
              element={<Investment onCtaClick={handleOpenModal} />}
            />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <div className="container" style={styles.footerInner}>
            <h2 style={styles.footerTitle}>RIVERSIDE AZURE</h2>

            <p style={styles.footerText}>
              &copy; {new Date().getFullYear()} JNC Brothers & Company Limited.
              All Rights Reserved.
            </p>
          </div>
        </footer>

        {/* Global UI */}
        <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <FloatingCTA onOpenModal={handleOpenModal} />
      </div>
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
    background: "#000",
    padding: "60px 0",
    borderTop: "1px solid #222",
  },

  footerInner: {
    textAlign: "center",
  },

  footerTitle: {
    color: "#fff",
    fontFamily: "var(--font-serif)",
    marginBottom: "20px",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
  },

  footerText: {
    color: "#666",
    fontSize: "0.85rem",
    lineHeight: 1.6,
  },
};