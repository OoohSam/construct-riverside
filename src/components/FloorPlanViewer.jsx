import React, { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Living Room",
    top: "40%",
    left: "55%",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    id: 2,
    name: "Bedroom",
    top: "60%",
    left: "30%",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 3,
    name: "Kitchen",
    top: "35%",
    left: "25%",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
  }
];


const FloorPlanViewer = ({ image }) => {
  const [activeRoom, setActiveRoom] = useState(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      
      {/* Floor Plan */}
      <img
        src={image}
        alt="floorplan"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      />

      {/* Hotspots */}
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => setActiveRoom(room)}
          style={{
            position: "absolute",
            top: room.top,
            left: room.left,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "gold",
            cursor: "pointer",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}

      {/* Popup */}
      {activeRoom && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "#000",
            color: "#fff",
            padding: "20px",
            width: "300px"
          }}
        >

          <h3>{activeRoom.name}</h3>

          <img
            src={activeRoom.image}
            style={{ width: "100%", marginTop: "10px" }}
          />

          <button
            onClick={() => setActiveRoom(null)}
            style={{
              marginTop: "10px",
              background: "var(--gold-accent)",
              border: "none",
              padding: "8px 15px"
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FloorPlanViewer;