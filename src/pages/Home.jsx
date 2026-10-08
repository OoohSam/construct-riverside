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
        title="Luxury Apartments for Sale in Riverside, Nairobi | Riverside Azure"
        description="Explore premium 1, 2 and 3-bedroom apartments at Riverside Azure on Riverside Drive, Nairobi. Discover residences, amenities and investment opportunities."
        canonicalPath="/"
        ogTitle="Luxury Apartments for Sale in Riverside, Nairobi | Riverside Azure"
        ogDescription="Discover Riverside Azure apartments for sale in Nairobi at 25 Riverside Drive. Explore premium living, amenity-rich residences and investment options."
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
