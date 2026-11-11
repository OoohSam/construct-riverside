import React, { useState } from "react";
import { Link } from "react-router-dom";
import { units } from "../data/apartments";
import ApartmentEnquiry from "../components/ApartmentEnquiry";
import ApartmentAmenities from "../components/ApartmentAmenities";

const fallbackImage = "/JNCBROTHERS.png";

function ApartmentDetails({ unit, onOpenModal }) {
  const [activeImage, setActiveImage] = useState(0);

  const images = unit.images?.length ? unit.images : [fallbackImage];

  return (
    <section className="apartment-category">
      <nav aria-label="Breadcrumb" className="apartment-breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/units">Apartments</Link>
        <span aria-hidden="true"> / </span>
        <span>{unit.beds}</span>
      </nav>

<header className="apartment-page-header">
  <div>
    <p className="apartment-eyebrow">Riverside Azure</p>
    <h1>
      {unit.beds} Apartments for Sale in Riverside, Nairobi
    </h1>
  </div>

  <div className="apartment-header-price">
    <span>Price range</span>
    <strong>{unit.price}</strong>
  </div>
</header>
           <div className="apartment-grid">
        {/* LEFT COLUMN: gallery and apartment details */}
        <div className="apartment-left-column">
          <img
            className="apartment-main-image"
            src={images[activeImage]}
            alt={`${unit.beds} apartment at Riverside Azure — view ${
              activeImage + 1
            }`}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackImage;
            }}
          />

          <div className="apartment-thumbnails">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show apartment image ${index + 1}`}
                aria-pressed={activeImage === index}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackImage;
                  }}
                />
              </button>
            ))}
          </div>

          <div className="apartment-summary">
            <h2>{unit.name}</h2>

            <p style={{ lineHeight: 1.7, color: "#626878" }}>
              {unit.desc}
            </p>

            <dl>
              <div>
                <dt>Bedrooms</dt>
                <dd>{unit.beds}</dd>
              </div>

              <div>
                <dt>Total area</dt>
                <dd>{unit.size}</dd>
              </div>

              <div>
                <dt>Price range</dt>
                <dd>{unit.price}</dd>
              </div>
            </dl>

            <Link className="apartment-back" to="/units">
              Explore all apartments
            </Link>
          </div>
                    {unit.floorPlan && (
            <section className="apartment-floor-plan">
              <h2>Floor plan</h2>
              <p>
                Explore the layout of our {unit.beds.toLowerCase()} apartment.
              </p>

              <a
                href={unit.floorPlan}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${unit.beds} floor plan in a new tab`}
              >
                <img
                  src={unit.floorPlan}
                  alt={`${unit.beds} apartment floor plan at Riverside Azure`}
                  loading="lazy"
                />
              </a>

              <a
                href={unit.floorPlan}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open full-size floor plan
              </a>
            </section>
          )}
                    <ApartmentAmenities />
        </div>

        {/* RIGHT COLUMN: sales enquiry */}
        <ApartmentEnquiry key={unit.slug} unit={unit} />
      </div>

      <style>{`
        .apartment-category {
          max-width: 1280px;
          margin: 0 auto;
          padding: 160px 24px 80px;
          color: #111A55;
        }

        .apartment-category .apartment-breadcrumb {
          margin-bottom: 32px;
          font-size: 14px;
          line-height: 1.8;
        }

        .apartment-category a {
          color: inherit;
        }

        .apartment-category .apartment-eyebrow {
          color: #8A692D;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .apartment-category h1 {
          max-width: 900px;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.15;
          margin: 16px 0 24px;
        }

        .apartment-category header > p:last-child {
          max-width: 720px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .apartment-category .apartment-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
          gap: 48px;
          align-items: start;
        }

        .apartment-category .apartment-main-image {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 11;
          object-fit: cover;
          background: #F3F3F3;
        }

        .apartment-category .apartment-thumbnails {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 12px 0;
        }

        .apartment-category .apartment-thumbnails button {
          flex: 0 0 88px;
          padding: 3px;
          border: 2px solid transparent;
          background: white;
          cursor: pointer;
        }

        .apartment-category .apartment-thumbnails
        button[aria-pressed="true"] {
          border-color: #C5A059;
        }

        .apartment-category .apartment-thumbnails img {
          display: block;
          width: 100%;
          height: 64px;
          object-fit: cover;
        }

        .apartment-category h2 {
          font-size: 28px;
          margin: 0 0 24px;
        }

        .apartment-category dl {
          margin: 0 0 32px;
        }

        .apartment-category dl > div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 0;
          border-bottom: 1px solid #E5E5E5;
        }

        .apartment-category dt {
          color: #666;
        }

        .apartment-category dd {
          margin: 0;
          font-weight: 600;
        }

        .apartment-category .apartment-enquiry {
          width: 100%;
          padding: 18px 24px;
          border: 0;
          background: #111A55;
          color: white;
          font: inherit;
          cursor: pointer;
        }

        .apartment-category .apartment-back {
          display: inline-block;
          margin-top: 24px;
        }

        .apartment-category .apartment-grid {
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 28px;
}

.apartment-category .apartment-summary {
  margin-top: 24px;
  padding: 24px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  background: #FFFFFF;
}

.apartment-category .apartment-enquiry-panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #E0E3EB;
  border-radius: 8px;
  background: #FFFFFF;
}

.apartment-category .apartment-enquiry-header {
  padding: 22px;
  background: #111A55;
  color: #FFFFFF;
}

.apartment-category .apartment-enquiry-header p {
  margin: 0 0 8px;
  color: #E1C58E;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.apartment-category .apartment-enquiry-header h2 {
  margin: 0;
  color: #FFFFFF;
  font-size: 21px;
}

.apartment-category .apartment-contact-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px 20px 0;
}

.apartment-category .apartment-contact-options a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 8px;
  border: 1px solid #111A55;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.apartment-category .apartment-contact-options a:first-child {
  border-color: #187D3D;
  color: #187D3D;
}

.apartment-category .apartment-enquiry-panel form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.apartment-category .apartment-enquiry-panel form p {
  margin: 0 0 8px;
  font-size: 15px;
}

.apartment-category .apartment-enquiry-panel label {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
}

.apartment-category .apartment-enquiry-panel input,
.apartment-category .apartment-enquiry-panel textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #CBD0DD;
  border-radius: 4px;
  background: #FFFFFF;
  color: #111A55;
  font: inherit;
  font-size: 16px;
}

.apartment-category .apartment-enquiry-panel textarea {
  resize: vertical;
}

.apartment-category .apartment-enquiry-panel input:focus,
.apartment-category .apartment-enquiry-panel textarea:focus {
  outline: 2px solid #111A55;
  outline-offset: 2px;
}

.apartment-category .apartment-enquiry-panel button {
  min-height: 48px;
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #111A55;
  color: #FFFFFF;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.apartment-category .apartment-enquiry-panel button:hover {
  background: #263578;
}

.apartment-category .apartment-enquiry-panel small {
  color: #626878;
  font-size: 12px;
  line-height: 1.6;
}

        @media (max-width: 768px) {
          .apartment-category {
            padding-top: 130px;
          }

          .apartment-category .apartment-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .apartment-category {
  max-width: 1200px;
  box-sizing: border-box;
}

.apartment-category .apartment-page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 24px;
}

.apartment-category .apartment-page-header h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(24px, 2.5vw, 34px);
  line-height: 1.3;
}

.apartment-category .apartment-page-header .apartment-eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
}

.apartment-category .apartment-header-price {
  flex-shrink: 0;
  text-align: right;
}

.apartment-category .apartment-header-price span {
  display: block;
  margin-bottom: 6px;
  color: #626878;
  font-size: 13px;
}

.apartment-category .apartment-header-price strong {
  display: block;
  color: #111A55;
  font-size: clamp(21px, 2vw, 28px);
}

@media (max-width: 900px) {
  .apartment-category .apartment-page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .apartment-category .apartment-header-price {
    text-align: left;
  }
}

.apartment-category .apartment-left-column {
  min-width: 0;
}

.apartment-category .apartment-floor-plan {
  margin-top: 24px;
  padding: 24px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  background: #FFFFFF;
}

.apartment-category .apartment-floor-plan p {
  color: #626878;
  line-height: 1.7;
}

.apartment-category .apartment-floor-plan img {
  display: block;
  width: 100%;
  height: auto;
  margin: 20px 0;
}
      `}</style>
    </section>
  );
}

export default function ApartmentCategory({ slug, onOpenModal }) {
  const unit = units.find((item) => item.slug === slug);

  if (!unit) {
    return (
      <section style={{ padding: "160px 24px 80px" }}>
        <h1>Apartment category unavailable</h1>
        <Link to="/units">Explore all apartments</Link>
      </section>
    );
  }

  return (
    <ApartmentDetails
      key={unit.slug}
      unit={unit}
      onOpenModal={onOpenModal}
    />
  );
}