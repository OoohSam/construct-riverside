import React, { useState } from "react";
import FloorPlanViewer from "./FloorPlanViewer";
import ModelViewer from "./ModelViewer";

const units = [
  {
    id: 1,
    type: "Type A",
    name: "The Executive Suite",
    beds: "1 Bedroom",
    size: "65.62 - 69.58 SQM",
    desc: "High-yield asset ideal for Airbnb. Located in the diplomatic heart of Nairobi.",
    price: "35,000",

    images: [
      "/assets/units/type-a-1.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
    ],

    floor3d: "/models/apartment.glb",
  },

  {
    id: 2,
    type: "Type B",
    name: "The Urban Sanctuary",
    beds: "2 Bedrooms",
    size: "98.00 - 104.63 SQM",
    desc: "Balanced proportions for long-term living. Perfect for young families.",
    price: "Ask for Price",

    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80",
    ],

    floor3d: "/models/psx_japanese_house.glb",
  },

  {
    id: 3,
    type: "Type C",
    name: "The Heritage Residence",
    beds: "3 Bedrooms",
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "Ask for Price",

    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80",
    ],

    floor3d: "/models/southway.glb",
  },
];

const UnitSection = ({ onInquire }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const activeUnit = units.find((u) => u.id === activeTab);

  return (
    <section className="reveal" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "50px", color: "#fff" }}>
          Our Collection
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginBottom: "50px",
            borderBottom: "1px solid #333",
          }}
        >
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => {
                setActiveTab(unit.id);
                setActiveImage(0);
              }}
              style={{
                background: "transparent",
                border: "none",
                color: activeTab === unit.id ? "var(--gold-accent)" : "#777",
                borderBottom:
                  activeTab === unit.id
                    ? "2px solid var(--gold-accent)"
                    : "2px solid transparent",
                padding: "0 0 15px 0",
                fontSize: "1.1rem",
                cursor: "pointer",
              }}
            >

              {unit.beds}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Image Gallery */}

          <div>
            {/* Main Image */}

            <div
              style={{
                height: "420px",
                overflow: "hidden",
                marginBottom: "15px",
                background: "#222",
              }}
            >
              <img
                src={activeUnit.images[activeImage]}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Thumbnails */}

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {activeUnit.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(index)}
                  style={{
                    width: "90px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border:
                      activeImage === index
                        ? "2px solid var(--gold-accent)"
                        : "2px solid transparent",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}

          <div>
            <span
              style={{
                color: "var(--gold-accent)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "0.9rem",
              }}
            >
              {activeUnit.type}
            </span>

            <h3
              style={{
                fontSize: "3rem",
                margin: "10px 0 20px",
                color: "#fff",
              }}
            >
              {activeUnit.name}
            </h3>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.1rem",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              {activeUnit.desc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  borderLeft: "1px solid var(--gold-accent)",
                  paddingLeft: "15px",
                }}
              >
                <p style={{ color: "#666", fontSize: "0.8rem" }}>Total Area</p>
                <p style={{ color: "#fff", fontSize: "1.2rem" }}>
                  {activeUnit.size}
                </p>
              </div>

              <div
                style={{
                  borderLeft: "1px solid var(--gold-accent)",
                  paddingLeft: "15px",
                }}
              >
                <p style={{ color: "#666", fontSize: "0.8rem" }}>
                  Payment Plan
                </p>
                <p style={{ color: "#fff", fontSize: "1.2rem" }}>Flexible</p>
              </div>
            </div>

            {/* 3D Floor Plan */}

            <button
              onClick={() => setViewerOpen(true)}
              style={{
                background: "var(--gold-accent)",
                border: "none",
                color: "#000",
                padding: "14px 28px",
                fontWeight: "600",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              View 3D Floor Plan
            </button>

            {/* Inquiry Button */}

            <button
              onClick={() => onInquire(activeUnit.beds)}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "14px 28px",
                cursor: "pointer",
              }}
            >
              Get Pricing
            </button>
          </div>
        </div>
      </div>


    {/* 3D Viewer Modal */}

      {viewerOpen && (
        <div style={modalStyle}>
          <button onClick={() => setViewerOpen(false)} style={closeBtn}>
            Close
          </button>
          <ModelViewer modelPath={activeUnit.floor3d} />
          
        </div>
      )}

      {/* 3D Viewer Modal */}


    </section>
  );
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#000",
  zIndex: 9999,



};


const closeBtn = {
  position: "absolute",
  top: "20px",
  right: "20px",
  

  border: "none",
  cursor: "pointer",


   background: "var(--gold-accent)",
              color: "#fff",
              border: "1px solid var(--gold-accent)",
              padding: "10px 25px",


};

export default UnitSection;
