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

    // imported from local assets for better performance and control
    // these images should be placed in the public/assets/Apartments/type-b/ directory
    // the naming convention (c1.jpg, c2.jpg, etc.) allows for easy iteration in the code
    //this is how to import  "/"
images: [
  new URL("../assets/Apartments/type-b/c6.png", import.meta.url).href,
  new URL("../assets/Apartments/type-b/c1.png", import.meta.url).href,
  new URL("../assets/Apartments/type-b/c2.png", import.meta.url).href,
  new URL("../assets/Apartments/type-b/c3.png", import.meta.url).href,
  new URL("../assets/Apartments/type-b/c4.png", import.meta.url).href,
  new URL("../assets/Apartments/type-b/c5.jpg", import.meta.url).href,
],

    floor3d: "/models/apartment.glb",
  },

  {
    id: 2,
    type: "Type B",
    name: "The Urban Sanctuary",
    beds: "2 Bedroom",
    size: "98.00 - 104.63 SQM",
    desc: "Balanced proportions for long-term living. Perfect for young families.",
    price: "Ask for Price",

images: [
  new URL("../assets/Apartments/type-a/b11.png", import.meta.url).href,
  new URL("../assets/Apartments/type-a/a1.png", import.meta.url).href,
  new URL("../assets/Apartments/type-a/b6.png", import.meta.url).href,
  new URL("../assets/Apartments/type-a/b5.png", import.meta.url).href,
  // new URL("../assets/Apartments/type-a/b4.png", import.meta.url).href,
  new URL("../assets/Apartments/type-a/b10.jpg", import.meta.url).href,
  // new URL("../assets/Apartments/type-a/b3.png", import.meta.url).href,
  new URL("../assets/Apartments/type-a/b8.png", import.meta.url).href,
],

    floor3d: "/models/psx_japanese_house.glb",
  },

  {
    id: 3,
    type: "Type C",
    name: "The Heritage Residence",
    beds: "3 Bedroom",
    size: "141.95 SQM",
    desc: "Versatile luxury. Expansive living spaces for those who value legacy.",
    price: "Ask for Price",

  images: [
  new URL("../assets/Apartments/type-c/a14.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a5.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a3.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a2.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a7.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a6.jpg", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a13.jpg", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a10.png", import.meta.url).href,
  new URL("../assets/Apartments/type-c/a9.jpg", import.meta.url).href,
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
                background: "var(--gold-accent)",
                border: "none",
                color: activeTab === unit.id ? "black" : "#777",
                borderBottom:
                  activeTab === unit.id
                    ? "2px solid var(--gold-accent)"
                    : "2px solid transparent",
                padding: activeTab === unit.id ? "15px 20px" : "10px 15px",
                fontSize: "1.1rem",
                fontWeight: "600",
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
