import React from "react";
import {
  Waves,
  Dumbbell,
  Sofa,
  Baby,
  Store,
  ShieldCheck,
  Camera,
  Building2,
} from "lucide-react";

const groups = [
  {
    title: "Lifestyle",
    items: [
      { label: "Swimming Pool", icon: Waves },
      { label: "Fully Equipped Gym", icon: Dumbbell },
      { label: "Residents’ Lounge", icon: Sofa },
      { label: "Kids’ Playroom", icon: Baby },
      { label: "Convenience Store", icon: Store },
    ],
  },
  {
    title: "Security & Management",
    items: [
      { label: "Hotel-Styled Property Management", icon: Building2 },
      { label: "24-Hour Security", icon: ShieldCheck },
      { label: "24-Hour CCTV Surveillance", icon: Camera },
    ],
  },
];

export default function ApartmentAmenities() {
  return (
    <section className="apartment-amenities">
      <h2>Development amenities</h2>

      {groups.map((group) => (
        <div className="apartment-amenities-group" key={group.title}>
          <h3>{group.title}</h3>

          <ul>
            {group.items.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <style>{`
        .apartment-category .apartment-amenities {
          margin-top: 24px;
          padding: 24px;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
          background: #FFFFFF;
        }

        .apartment-category .apartment-amenities h2 {
          margin: 0 0 24px;
          font-size: 24px;
        }

        .apartment-category .apartment-amenities-group + 
        .apartment-amenities-group {
          margin-top: 28px;
        }

        .apartment-category .apartment-amenities h3 {
          margin: 0 0 16px;
          color: #626878;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .apartment-category .apartment-amenities ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .apartment-category .apartment-amenities li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #111A55;
          font-size: 14px;
          line-height: 1.5;
        }

        .apartment-category .apartment-amenities li svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 480px) {
          .apartment-category .apartment-amenities ul {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}