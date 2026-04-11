import React from "react";
import Hero from "../components/Hero";

import Amenities from "../components/Amenities";
import UnitSection from "../components/UnitSection";
import IntroSection from "../components/IntroSection";
import AgentPartnerSection from "../components/AgentPartnerSection";

function Home({ onOpenModal }) {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <Hero onCtaClick={onOpenModal} />
      <IntroSection />

       <AgentPartnerSection />
      <UnitSection onInquire={onOpenModal} />
      <Amenities />
    </main>
  );
}

export default Home;
