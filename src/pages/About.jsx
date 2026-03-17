import React from 'react';
import AboutSection from '../components/AboutSection';

const About = () => {
  const myOpeningParagraph = "Riverside Azure is born from a desire to redefine luxury living in Nairobi, merging timeless architectural restraint with the unmatched prestige of the Riverside diplomatic enclave.";
  
  return (
    <div style={{ paddingTop: '100px' }}>
      <AboutSection openingParagraph={myOpeningParagraph} />
    </div>
  );
};
export default About;