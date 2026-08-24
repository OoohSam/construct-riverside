import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const BROCHURE_URL = "/riverside-azure-brochure-and-pricelist.pdf";

const initialForm = {
  name: "",
  email: "",
  countryCode: "+254",
  phone: "",
  interest: "",
  budget: "",
  decisionMaker: "",
  timeline: "",
  message: "",
  website: "",
};

const LandingPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  /*
   * Capture campaign information from the URL.
   *
   * Example:
   * /riverside?utm_source=google&utm_campaign=riverside_launch
   */
  const campaignData = useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Facebook Pixel page view for the landing page.
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setSubmitError("");

    /*
     * Honeypot:
     * Real visitors never see this field.
     * If a bot fills it, we quietly reject the submission.
     */
    if (form.website.trim()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      countryCode: form.countryCode,
      phone: form.phone.trim(),
      interest: form.interest,
      budget: form.budget,
      decisionMaker: form.decisionMaker,
      timeline: form.timeline,
      message: form.message.trim(),

      ...campaignData,

      landingPage: "/riverside",
      submittedAt: new Date().toISOString(),
    };

    try {
      /*
       * IMPORTANT:
       * The brochure is NOT triggered here until the server
       * confirms that the lead has been successfully saved.
       */
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "We couldn't submit your enquiry."
        );
      }

      /*
       * Conversion tracking happens only after the lead
       * has been successfully accepted by the backend.
       */
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Riverside Azure Landing Page",
        });
      }

      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "lead",
          event_label: "Riverside Azure Landing Page",
        });
      }

      /*
       * Trigger brochure download only after successful
       * lead submission.
       */
      const brochureLink = document.createElement("a");
      brochureLink.href = BROCHURE_URL;
      brochureLink.download = "Riverside-Azure-Brochure.pdf";
      brochureLink.style.display = "none";

      document.body.appendChild(brochureLink);
      brochureLink.click();
      document.body.removeChild(brochureLink);

      /*
       * Finally move the visitor to the thank-you page.
       */
      navigate("/riverside/thank-you");
    } catch (error) {
      console.error("Lead submission error:", error);

      setSubmitError(
        error.message ||
          "Something went wrong while submitting your enquiry. Please try again."
      );

      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing-page">
      {/* =========================================================
          MINIMAL LANDING HEADER
      ========================================================= */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <Link
            to="/riverside"
            className="landing-logo"
            aria-label="Riverside Azure"
          >
            <span className="landing-logo-main">RIVERSIDE</span>
            <span className="landing-logo-sub">AZURE</span>
          </Link>

          <a
            href="#lead-form"
            className="landing-header-link"
          >
            ENQUIRE
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <main>
        <section className="landing-hero">
          <div className="landing-hero-image">
            <img
              src="/assets/landing/hero.webp"
              alt="Riverside Azure residences"
            />
          </div>

          <div className="landing-hero-overlay" />

          <div className="landing-hero-content">
            <p className="landing-eyebrow">
              RIVERSIDE DRIVE · NAIROBI
            </p>

            <h1>
              LIVE IN
              <br />
              <span>RIVERSIDE.</span>
            </h1>

            <p className="landing-hero-description">
              Contemporary 1, 2 &amp; 3 bedroom residences created
              for refined city living in one of Nairobi's most
              sought-after neighbourhoods.
            </p>

            <a
              href="#lead-form"
              className="landing-primary-button"
            >
              VIEW PRICING &amp; AVAILABILITY
              <span>→</span>
            </a>
          </div>

          <div className="landing-hero-scroll">
            <span>SCROLL TO DISCOVER</span>
            <span className="landing-scroll-line" />
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="landing-intro landing-section">
          <div className="landing-container landing-two-column">
            <div>
              <p className="landing-eyebrow landing-eyebrow-dark">
                RIVERSIDE AZURE
              </p>

              <h2>
                Designed for
                <br />
                <em>Riverside living.</em>
              </h2>
            </div>

            <div className="landing-intro-copy">
              <p>
                Riverside Azure brings together considered
                architecture, generous living spaces and a
                distinguished Riverside address.
              </p>

              <p>
                Every residence is designed around the way modern
                homeowners and investors want to live — with
                comfort, convenience and long-term value at its
                centre.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROJECT FACTS
        ========================================================= */}
        <section className="landing-facts">
          <div className="landing-container landing-facts-grid">
            <div className="landing-fact">
              <span>01</span>
              <strong>RIVERSIDE DRIVE</strong>
              <p>Prime Nairobi Address</p>
            </div>

            <div className="landing-fact">
              <span>02</span>
              <strong>1–3 BEDROOMS</strong>
              <p>Contemporary Residences</p>
            </div>

            <div className="landing-fact">
              <span>03</span>
              <strong>20 STOREYS</strong>
              <p>Distinctive Residential Towers</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            RESIDENCES
        ========================================================= */}
        <section className="landing-residences landing-section">
          <div className="landing-container">
            <div className="landing-section-heading">
              <div>
                <p className="landing-eyebrow landing-eyebrow-dark">
                  THE RESIDENCES
                </p>

                <h2>
                  A residence
                  <br />
                  <em>for every ambition.</em>
                </h2>
              </div>

              <p>
                Choose a home that fits your lifestyle today while
                retaining strong long-term appeal.
              </p>
            </div>

            <div className="landing-residence-grid">
              <article className="landing-residence-card">
                <div className="landing-residence-image">
                  <img
                    src="/assets/landing/unit-1.webp"
                    alt="Riverside Azure one bedroom residence"
                  />
                </div>

                <div className="landing-residence-content">
                  <span>01</span>

                  <h3>1 BEDROOM</h3>

                  <p>
                    An intelligently designed residence for
                    contemporary city living.
                  </p>

                  <a href="#lead-form">
                    REQUEST PRICING <span>→</span>
                  </a>
                </div>
              </article>

              <article className="landing-residence-card">
                <div className="landing-residence-image">
                  <img
                    src="/assets/landing/unit-2.webp"
                    alt="Riverside Azure two bedroom residence"
                  />
                </div>

                <div className="landing-residence-content">
                  <span>02</span>

                  <h3>2 BEDROOM</h3>

                  <p>
                    Generous proportions created for comfortable
                    everyday living and entertaining.
                  </p>

                  <a href="#lead-form">
                    REQUEST PRICING <span>→</span>
                  </a>
                </div>
              </article>

              <article className="landing-residence-card">
                <div className="landing-residence-image">
                  <img
                    src="/assets/landing/unit-3.webp"
                    alt="Riverside Azure three bedroom residence"
                  />
                </div>

                <div className="landing-residence-content">
                  <span>03</span>

                  <h3>3 BEDROOM</h3>

                  <p>
                    A larger private residence designed for
                    elevated family living.
                  </p>

                  <a href="#lead-form">
                    REQUEST PRICING <span>→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            IMAGE / LIFESTYLE SECTION
        ========================================================= */}
        <section className="landing-lifestyle landing-section">
          <div className="landing-container">
            <div className="landing-lifestyle-grid">
              <div className="landing-lifestyle-large">
                <img
                  src="/assets/landing/lifestyle-1.webp"
                  alt="Riverside Azure lifestyle"
                />
              </div>

              <div className="landing-lifestyle-copy">
                <p className="landing-eyebrow">
                  LIFE AT RIVERSIDE AZURE
                </p>

                <h2>
                  Space to live.
                  <br />
                  <em>Room to belong.</em>
                </h2>

                <p>
                  From the moment you arrive, Riverside Azure is
                  designed to feel considered, calm and connected.
                </p>

                <p>
                  Carefully planned interiors and thoughtfully
                  selected amenities create a residential experience
                  that feels both private and effortless.
                </p>
              </div>

              <div className="landing-lifestyle-small">
                <img
                  src="/assets/landing/lifestyle-2.webp"
                  alt="Riverside Azure interior"
                />
              </div>

              <div className="landing-lifestyle-small">
                <img
                  src="/assets/landing/lifestyle-3.webp"
                  alt="Riverside Azure living space"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DEVELOPER TRUST
        ========================================================= */}
        <section className="landing-developer">
          <div className="landing-container landing-developer-inner">
            <div>
              <p className="landing-eyebrow">
                DEVELOPED BY
              </p>

              <h2>JNC BROTHERS &amp; COMPANY LIMITED</h2>
            </div>

            <p>
              A development shaped around quality, thoughtful
              design and lasting value.
            </p>
          </div>
        </section>

        {/* =========================================================
            LEAD FORM
        ========================================================= */}
        <section
          id="lead-form"
          className="landing-lead-section landing-section"
        >
          <div className="landing-container landing-lead-grid">
            <div className="landing-lead-intro">
              <p className="landing-eyebrow landing-eyebrow-dark">
                GET IN TOUCH WITH US
              </p>

              <h2>
                Find your place
                <br />
                <em>at Riverside Azure.</em>
              </h2>

              <p>
                Tell us a little about what you're looking for and
                one of our property advisors will be in touch with
                pricing, availability and further information.
              </p>

              <div className="landing-lead-note">
                <span>RIVERSIDE AZURE</span>
                <p>
                  25 Riverside Drive
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="landing-form-wrapper">
              <form
                className="landing-form"
                onSubmit={handleSubmit}
              >
                {/* Honeypot */}
                <div
                  className="landing-honeypot"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="landing-form-group">
                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="landing-form-group">
                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="landing-phone-row">
                  <div className="landing-form-group landing-code">
                    <label htmlFor="countryCode">
                      CODE
                    </label>

                    <select
                      id="countryCode"
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+254">
                        +254
                      </option>

                      <option value="+255">
                        +255
                      </option>

                      <option value="+256">
                        +256
                      </option>

                      <option value="+27">
                        +27
                      </option>

                      <option value="+1">
                        +1
                      </option>

                      <option value="+44">
                        +44
                      </option>

                      <option value="+971">
                        +971
                      </option>
                    </select>
                  </div>

                  <div className="landing-form-group landing-phone">
                    <label htmlFor="phone">
                      PHONE
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="landing-form-group">
                  <label htmlFor="interest">
                    WHAT ARE YOU INTERESTED IN?
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select residence type
                    </option>

                    <option value="1 Bedroom">
                      1 Bedroom
                    </option>

                    <option value="2 Bedroom">
                      2 Bedroom
                    </option>

                    <option value="3 Bedroom">
                      3 Bedroom
                    </option>

                    <option value="Not Sure">
                      Not Sure Yet
                    </option>
                  </select>
                </div>

                <div className="landing-form-group">
                  <label htmlFor="budget">
                    WHAT IS YOUR BUDGET?
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select your budget
                    </option>

                    <option value="Below KES 10M">
                      Below KES 10M
                    </option>

                    <option value="KES 10M – 15M">
                      KES 10M – 15M
                    </option>

                    <option value="KES 15M – 20M">
                      KES 15M – 20M
                    </option>

                    <option value="KES 20M+">
                      KES 20M+
                    </option>

                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>
                </div>

                <div className="landing-form-group">
                  <label htmlFor="decisionMaker">
                    ARE YOU THE DECISION MAKER?
                  </label>

                  <select
                    id="decisionMaker"
                    name="decisionMaker"
                    value={form.decisionMaker}
                    onChange={handleChange}
                  >
                    <option value="">
                      Please select
                    </option>

                    <option value="Yes">
                      Yes
                    </option>

                    <option value="No">
                      No
                    </option>

                    <option value="Joint Decision">
                      Joint Decision
                    </option>
                  </select>
                </div>

                <div className="landing-form-group">
                  <label htmlFor="timeline">
                    HOW SOON WOULD YOU LIKE TO PURCHASE?
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select timeframe
                    </option>

                    <option value="Immediately">
                      Immediately
                    </option>

                    <option value="1–3 Months">
                      1–3 Months
                    </option>

                    <option value="3–6 Months">
                      3–6 Months
                    </option>

                    <option value="6–12 Months">
                      6–12 Months
                    </option>

                    <option value="Just Exploring">
                      Just Exploring
                    </option>
                  </select>
                </div>

                <div className="landing-form-group">
                  <label htmlFor="message">
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us anything else you'd like us to know."
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                {submitError && (
                  <div
                    className="landing-form-error"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="landing-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "SUBMITTING..."
                    : "SUBMIT"}
                </button>

                <p className="landing-form-privacy">
                  By submitting your details, you agree to be
                  contacted by the Riverside Azure property team.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCATION
        ========================================================= */}
        <section className="landing-location">
          <div className="landing-container">
            <div className="landing-location-heading">
              <div>
                <p className="landing-eyebrow landing-eyebrow-dark">
                  FIND US IN RIVERSIDE
                </p>

                <h2>
                  A distinguished
                  <br />
                  <em>Nairobi address.</em>
                </h2>
              </div>

              <p>
                25 Riverside Drive
                <br />
                Riverside, Nairobi, Kenya
              </p>
            </div>

            <div className="landing-map">
              <iframe
                title="Riverside Azure location"
                src="https://www.google.com/maps?q=25%20Riverside%20Drive%2C%20Nairobi%2C%20Kenya&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          EXISTING SITE FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
};

export default LandingPage;