import React from "react";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

import Amenities from "../components/Amenities";
import UnitSection from "../components/UnitSection";
import IntroSection from "../components/IntroSection";

function Home({ onOpenModal }) {
  return (
    <>
      {/* SEO: define the homepage metadata for the primary property search intent. */}
      <Seo
        title="Luxury Apartments for Sale in Nairobi | Riverside Azure"
        description="Riverside Azure is a growing name among real estate companies in Nairobi, offering premium off-plan apartments and residential projects in Riverside. Explore 1, 2 and 3-bedroom residences at 25 Riverside Drive."
        canonicalPath="/"
        ogTitle="Luxury Apartments for Sale in Nairobi | Riverside Azure"
        ogDescription="Explore premium off-plan apartments and residential projects in Nairobi with Riverside Azure at 25 Riverside Drive, Riverside."
      />

      <main style={{ width: "100%", overflowX: "hidden" }}>
        <Hero onCtaClick={onOpenModal} />
        <IntroSection />
        <UnitSection onInquire={onOpenModal} />
        <Amenities />
      </main>
    </>
  );
}

export default Home;
