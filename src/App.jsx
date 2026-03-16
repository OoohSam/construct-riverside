import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScarcityBar from "./components/ScarcityBar";
import UnitSection from "./components/UnitSection";
import Amenities from "./components/Amenities";
import LeadModal from "./components/LeadModal";
import FloatingCTA from "./components/FloatingCTA";
import useScrollReveal from "./hooks/useScrollReveal";
import AboutSection from './components/AboutSection';

function App() {

  const myOpeningParagraph = "Your exact opening paragraph text goes here. Do not alter it. The component will render it beautifully.";

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize scroll animations
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        <Hero onCtaClick={handleOpenModal} />
        <ScarcityBar />


      {/* NEW ABOUT SECTION */}
        <AboutSection openingParagraph={myOpeningParagraph} />


        {/* Intro Text */}
        <div
          className="container reveal"
          style={{ padding: "80px 0", textAlign: "center", maxWidth: "800px" }}
        >
          <h3
            style={{
              color: "var(--gold-accent)",
              textTransform: "uppercase",
              fontSize: "1.9rem",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            The Location
          </h3>
          <p style={{ fontSize: "1.5rem", lineHeight: "1.6", color: "#fff" }}>
            Riverside Drive is Nairobi’s{" "}
            <span style={{ color: "var(--gold-accent)" }}>
              silent power corridor
            </span>
            . Home to embassies, multinational HQs, and the city’s most astute
            investors.
            <span style={{ color: "var(--gold-accent)" }}>
              {" "}
              Riverside Azure
            </span>{" "}
            places you in the center of this dialogue.
          </p>
        </div>

        <UnitSection onInquire={handleOpenModal} />

        <Amenities />

        {/* Diaspora / Trust Section */}
     <section
  className="reveal"
  style={{ padding: "100px 0", borderTop: "1px solid #333" }}
>
  <div className="container">

    <h2
      style={{
        fontSize: "2.5rem",
        color: "#fff",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      Developer Track Record
    </h2>

    <p
      style={{
        color: "var(--text-muted)",
        textAlign: "center",
        maxWidth: "700px",
        margin: "0 auto 60px auto",
        lineHeight: "1.6",
      }}
    >
      Join investors from London, Dubai, and New York. Our developer has
      successfully delivered landmark projects across Nairobi.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: "35px",
      }}
    >

      {/* ARGYLE */}
      <a
        href="https://argylehotelkenya.ke/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="project-card">

          <div className="project-image">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553059940.jpg?k=18c9c19656fef97658a74f6a76a72dd425b82453a8cc79a8661b2ed9d205275a&o=" alt="Argyle Grand" />
            <span className="status">Completed</span>
          </div>

          <div className="project-content">
            <h3>Argyle Grand</h3>
            <p>Nairobi Luxury Hotel Development</p>
          </div>

        </div>
      </a>

      {/* APPLETREE */}
      <a href="#" style={{ textDecoration: "none" }}>
        <div className="project-card">

          <div className="project-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphCx4Ne6OYwmb3GrU2prtFj5Ta_t1mB8_Mg&s" alt="Appletree Apartments" />
            <span className="status">Delivered</span>
          </div>

          <div className="project-content">
            <h3>Appletree Apartments</h3>
            <p>Modern Urban Living</p>
          </div>

        </div>
      </a>

      {/* MANGO TREE */}
      <a href="#" style={{ textDecoration: "none" }}>
        <div className="project-card">

          <div className="project-image">
            <img src="/assets/Temp/Mango-tree-1(1).jpg" alt="Mango Tree Apartments" />
            <span className="status">Sold Out</span>
          </div>

          <div className="project-content">
            <h3>Mango Tree</h3>
            <p>Mombasa Road Development</p>
          </div>

        </div>
      </a>

    </div>
  </div>
</section>
      </main>

      <footer
        style={{
          background: "#000",
          padding: "60px 0",
          borderTop: "1px solid #222",
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
  );
}

export default App;
