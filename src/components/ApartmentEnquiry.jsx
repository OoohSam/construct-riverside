import React, { useState } from "react";

const salesPhone = "254796529997";

export default function ApartmentEnquiry({ unit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (!cleanName || !cleanPhone) return;

    const enquiry = [
      "Hello, I am interested in Riverside Azure.",
      `Apartment: ${unit.beds}`,
      `Name: ${cleanName}`,
      `Phone: ${cleanPhone}`,
      message.trim() || "Please share pricing, availability and floor plans.",
      `Page: ${window.location.href}`,
    ].join("\n");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "apartment_whatsapp_handoff",
      form_name: "apartment_category_enquiry",
      unit_type: unit.beds,
      page_path: window.location.pathname,
      lead_destination: "whatsapp",
    });

    window.location.assign(
      `https://wa.me/${salesPhone}?text=${encodeURIComponent(enquiry)}`
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the ${unit.beds} apartments at Riverside Azure. Please share pricing and availability.`
  );

  return (
    <aside className="apartment-enquiry-panel">
      <div className="apartment-enquiry-header">
        <p>Riverside Azure</p>
        <h2>Contact our sales team</h2>
      </div>

      <div className="apartment-contact-options">
        <a href={`https://wa.me/${salesPhone}?text=${whatsappMessage}`}>
          WhatsApp
        </a>
        <a href={`tel:+${salesPhone}`}>Call sales</a>
      </div>

      <form onSubmit={handleSubmit}>
        <p>
          Enquire about <strong>{unit.beds}</strong>
        </p>

        <label htmlFor="apartment-enquiry-name">Full name</label>
        <input
          id="apartment-enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="apartment-enquiry-phone">Phone number</label>
        <input
          id="apartment-enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+254..."
          required
          maxLength={30}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <label htmlFor="apartment-enquiry-message">Message</label>
        <textarea
          id="apartment-enquiry-message"
          name="message"
          rows={4}
          maxLength={1500}
          placeholder="I would like the price list, floor plans or a site visit."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Continue on WhatsApp</button>

        <small>
          WhatsApp will open with your enquiry. Press Send there to
          share it with our sales team.
        </small>
      </form>
    </aside>
  );
}