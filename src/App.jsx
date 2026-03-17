import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import LeadModal from "./components/LeadModal";
import FloatingCTA from "./components/FloatingCTA";
import useScrollReveal from "./hooks/useScrollReveal";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Units from "./pages/Units";
import Gallery from "./pages/Gallery"; // Ensure this file exists
import Location from "./pages/Location"; // Ensure this file exists
import Investment from "./pages/Investment"; // Ensure this file exists
import Contact from "./pages/Contact"; // Ensure this file exists


//Conponents
import AboutSection from "./components/AboutSection";
import UnitSection from "./components/UnitSection";
import Amenities from "./components/Amenities";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize scroll animations
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="app">
        <Navbar onOpenModal={handleOpenModal} />

        <main>
          {/* This is the new with Navigation */}

          <Routes>
            <Route path="/" element={<Home onOpenModal={handleOpenModal} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/units"
              element={<Units onOpenModal={handleOpenModal} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/location" element={<Location />} /> */}
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </main>

        {/* Persistent Footer */}

        <footer
          style={{
            background: "#000",
            padding: "60px 0",
            borderTop: "1px solid #222",
            marginTop: "auto",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <h2
              style={{
                color: "#fff",
                fontFamily: "var(--font-serif)",
                marginBottom: "20px",
              }}
            >
              RIVERSIDE AZURE
            </h2>
            <p style={{ color: "#666", fontSize: "0.8rem" }}>
              &copy; {new Date().getFullYear()} JNC Brothers & Company Limited.
              All Rights Reserved.
            </p>
          </div>
        </footer>

        <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <FloatingCTA onOpenModal={handleOpenModal} />
      </div>   

    </Router>
  );
}

export default App;
