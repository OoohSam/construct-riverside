import React from 'react';

const AboutSection = ({ openingParagraph }) => {
  const defaultOpening = openingParagraph || "[INSERT YOUR ORIGINAL OPENING PARAGRAPH HERE. E.g., Riverside Azure is born from a desire to redefine luxury living in Nairobi, merging timeless architectural restraint with the unmatched prestige of the Riverside diplomatic enclave.]";

  const sections =[
    {
      id: "01",
      title: "Who We Are",
      content: "JNC Brothers & Company Limited is a forward-thinking real estate development firm anchored in the belief that true luxury is defined by quality, precision, and endurance. While Riverside Azure introduces our vision to Nairobi’s premium residential market, our foundation is built on years of rigorous industry experience. We do not just construct buildings; we curate environments that elevate the urban experience. Our development philosophy is rooted in structural integrity, sophisticated architectural restraint, and an unwavering respect for the evolving needs of the modern resident."
    },
    {
      id: "02",
      title: "A Proven Track Record",
      content: "In real estate, trust is earned strictly through delivery. Our capability and financial foundation are demonstrated by a portfolio of successfully executed, high-profile developments. From the hospitality-driven excellence of the Argyle Grand Hotel to the thoughtfully delivered residential communities of Apple Tree Apartments and Mango Tree Apartments, our history is defined by completed milestones, not simply promises. These past projects stand as a tangible testament to our project management acumen, adherence to strict timelines, and unwavering commitment to our stakeholders."
    },
    {
      id: "03",
      title: "The Vision Behind Riverside Azure",
      content: "Riverside Azure was conceived with a singular objective: to create a residence that respects the distinguished character of Nairobi’s Riverside drive while introducing a new standard of effortless, modern living. The vision was to design a sanctuary that balances the rapid energy of the city with the quiet composure of a private retreat. By prioritizing spatial harmony, natural light, and premium materiality, Riverside Azure is calibrated for those who appreciate quiet confidence over loud ornamentation. It is a timeless addition to one of Nairobi’s most secure, globally connected, and highly sought-after neighborhoods."
    },
    {
      id: "04",
      title: "Built for Living & Investment",
      content: "A truly premium property must serve dual purposes flawlessly: it must be a space you are proud to call home, and an asset that commands enduring market value. For the homeowner, Riverside Azure offers intelligent floor layouts, exceptional ground-floor and rooftop amenities, and hotel-style management that simplifies daily life. For the local and international investor, it represents a highly strategic acquisition. Situated in a high-demand diplomatic and corporate zone, the development is carefully positioned to deliver high occupancy, consistent rental yields, and robust long-term capital appreciation."
    },
    {
      id: "05",
      title: "Our Commitment to Excellence",
      content: "At JNC Brothers, our responsibility extends far beyond the handover of keys. Our commitment to excellence is reflected in our meticulous material selection, rigorous construction standards, and proactive approach to facility management. We are building Riverside Azure to mature gracefully, ensuring that both the physical hardware of the building and its intrinsic market value endure the test of time. This is more than a present lifestyle decision—it is a secure, long-term conviction backed by uncompromising standards."
    }
  ];

  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg-dark)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Main Opening Paragraph */}
        <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto 80px auto', textAlign: 'center' }}>
          <h2 style={{ 
            color: 'var(--gold-accent)', 
            textTransform: 'uppercase', 
            letterSpacing: '3px', 
            fontSize: '0.9rem',
            marginBottom: '20px',
            fontWeight: 600 
          }}>
            The Developer
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            lineHeight: '1.6', 
            color: 'var(--text-main)',
            fontFamily: 'var(--font-serif)' 
          }}>
            {defaultOpening}
          </p>
        </div>

        {/* Structured Grid Layout */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="reveal"
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '30px', 
                padding: '40px 0', 
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {/* Left Column: Number & Title */}
              <div style={{ flex: '1 1 300px' }}>
                <span style={{ 
                  color: 'var(--gold-accent)', 
                  fontSize: '1rem', 
                  fontFamily: 'var(--font-sans)', 
                  display: 'block', 
                  marginBottom: '10px' 
                }}>
                  {section.id}
                </span>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  color: 'var(--text-main)', 
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  {section.title}
                </h3>
              </div>

              {/* Right Column: Content */}
              <div style={{ flex: '2 1 500px' }}>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1.05rem', 
                  lineHeight: '1.7', 
                  margin: 0 
                }}>
                  {section.content}
                </p>

                {/* Optional: Add visual badges for the Track Record section */}
                {section.id === "02" && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '15px', 
                    flexWrap: 'wrap', 
                    marginTop: '25px' 
                  }}>
                    {['Argyle Grand Hotel', 'Apple Tree Apartments', 'Mango Tree Apartments'].map((project, idx) => (
                      <span key={idx} style={{
                        padding: '8px 16px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-main)',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {project}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;