import React from "react";
import Hero from "../components/Hero";
import ScarcityBar from "../components/ScarcityBar";
import Amenities from "../components/Amenities";
import UnitSection from "../components/UnitSection";

function Home({ onOpenModal }) {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <Hero onCtaClick={onOpenModal} />
      <ScarcityBar />
      <UnitSection onInquire={onOpenModal} />
      <Amenities />
    </main>
  );
}

export default Home;