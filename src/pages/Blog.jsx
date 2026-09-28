import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogPosts.js";

const Blog = () => {
  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  // Find the featured post from the sorted list, or default to the absolute newest
  const featuredPost = sortedPosts.find((post) => post.featured) || sortedPosts[0];
  
  // The rest of the posts will automatically display in chronological order (newest to oldest)
  const otherPosts = sortedPosts.filter((post) => post.id !== featuredPost?.id);

  /* =========================================================
     GALLERY MOTION (Ultra Smooth & Slow)
     ========================================================= */
  const elegantEase = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: elegantEase } },
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: customDelay, ease: elegantEase },
    }),
  };

  return (
    <>
      <main className="journal-page">
        
        {/* =====================================================
            JOURNAL HERO (Editorial Typography)
        ====================================================== */}
        <section className="hero-editorial">
          <div className="container hero-text-wrapper">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span className="eyebrow" variants={fadeUp}>
                Riverside Azure · Journal
              </motion.span>
              <motion.h1 className="heading-xl" variants={fadeUp}>
                Property, investment<br />
                <span className="text-muted">&amp; Nairobi living.</span>
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeUp}>
                Thoughtful perspectives on property, investment, and contemporary living in Nairobi. Curated by the team at Riverside Azure.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE (Asymmetrical Split)
        ====================================================== */}
        {featuredPost && (
          <section className="section-padding bg-light">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="section-header"
              >
                <span className="eyebrow">Featured Insight</span>
                <h2 className="heading-large">Latest from the Journal.</h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <Link to={`/blog/${featuredPost.slug}`} className="featured-editorial-card">
                  <div className="featured-visual">
                    <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" />
                  </div>
                  
                  <div className="featured-content">
                    <div className="article-meta">
                      <span className="meta-category">{featuredPost.category}</span>
                      <span className="meta-divider">/</span>
                      <span className="meta-date">{featuredPost.date}</span>
                      <span className="meta-divider">/</span>
                      <span className="meta-time">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="heading-medium">{featuredPost.title}</h3>
                    <p className="body-standard text-muted">{featuredPost.excerpt}</p>
                    <span className="btn-minimal">
                      Read Article <span className="arrow-icon">⟶</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* =====================================================
            ARTICLE GRID (Gallery Layout)
        ====================================================== */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              className="section-header split-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div>
                <span className="eyebrow">The Archive</span>
                <h2 className="heading-large">More to explore.</h2>
              </div>
              <div className="header-stats">
                <span className="stat-number">{String(otherPosts.length).padStart(2, "0")}</span>
                <span className="eyebrow">Articles</span>
              </div>
            </motion.div>

            {otherPosts.length > 0 ? (
              <div className="articles-grid">
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={index * 0.1}
                    variants={fadeStagger}
                  >
                    <Link to={`/blog/${post.slug}`} className="article-card">
                      <div className="card-visual">
                        <img src={post.image} alt={post.title} loading="lazy" />
                      </div>
                      <div className="card-content">
                        <div className="article-meta">
                          <span className="meta-category">{post.category}</span>
                          <span className="meta-divider">/</span>
                          <span className="meta-date">{post.date}</span>
                        </div>
                        <h3 className="heading-small">{post.title}</h3>
                        <p className="body-standard text-muted">{post.excerpt}</p>
                        <span className="btn-minimal">
                          Read <span className="arrow-icon">⟶</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-content">
                  <h3 className="heading-medium">More articles are on the way.</h3>
                  <p className="body-standard text-muted">We are building a library of practical property and investment insights for Nairobi buyers.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CTA SECTION (Oversized & Elegant)
        ====================================================== */}
        <section className="cta-section bg-light">
          <div className="container text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="cta-wrapper"
            >
              <span className="eyebrow">Riverside Azure</span>
              <h2 className="heading-xl">Some decisions are better made early.</h2>
              <p className="hero-subtitle mb-large">
                Explore our residences, understand the development and speak with the Riverside Azure sales team about current availability.
              </p>
              
              <div className="cta-actions">
                <Link to="/units" className="btn-solid">
                  Explore Residences
                </Link>
                <Link to="/contact" className="btn-minimal">
                  Contact The Team <span className="arrow-icon">⟶</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES (Simplistic, Stylish, Azure & Gold)
          ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --color-bg: #FCFCFC;
          --color-bg-alt: #F3F3F3;
          --color-azure: #111A55;   /* Deep Azure Blue */
          --color-gold: #C5A059;    /* Elegant Gold */
          --color-text-muted: #767676;
          --color-border: #E5E5E5;
          --font-sans: 'Josefin Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Montserrat', sans-serif;
        }

        .journal-page {
          width: 100%;
          background: var(--color-bg);
          color: var(--color-azure); 
          font-family: var(--font-sans);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5vw;
        }

        /* TYPOGRAPHY */
        .text-muted { color: var(--color-text-muted); }
        .bg-light { background: var(--color-bg-alt); }
        .mb-large { margin-bottom: 3rem !important; }

        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold); 
          margin-bottom: 1rem;
        }

        .heading-xl, .heading-large, .heading-medium, .heading-small {
          font-family: var(--font-display);
          color: var(--color-azure);
        }

        .heading-xl {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 1.05;
          margin: 0 0 2rem 0;
          letter-spacing: -0.02em;
        }

        .heading-large {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
        }

        .heading-medium {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
        }

        .heading-small {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.3;
          margin: 0 0 1rem 0;
        }

        .body-standard {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .section-padding {
          padding: clamp(80px, 15vw, 160px) 0;
        }

        /* HERO EDITORIAL */
        .hero-editorial {
          padding-top: clamp(150px, 20vh, 220px);
          padding-bottom: clamp(60px, 10vh, 100px);
          border-bottom: 1px solid var(--color-border);
        }

        .hero-text-wrapper {
          max-width: 1100px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0;
        }

        /* SECTION HEADERS */
        .section-header {
          margin-bottom: clamp(40px, 8vw, 80px);
        }

        .split-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 2rem;
        }

        .header-stats {
          text-align: right;
        }

        .stat-number {
          display: block;
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 300;
          line-height: 1;
          color: var(--color-azure);
          margin-bottom: 0.5rem;
        }

        /* FEATURED ARTICLE */
        .featured-editorial-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(40px, 8vw, 100px);
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .featured-visual {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--color-border);
        }

        .featured-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .featured-editorial-card:hover .featured-visual img {
          transform: scale(1.05);
        }

        /* META DATA */
        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .meta-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold); 
        }

        .meta-divider {
          color: var(--color-border);
          font-size: 0.9rem;
        }

        .meta-date, .meta-time {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        /* BUTTONS / LINKS */
        .btn-minimal {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          color: var(--color-azure); 
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          padding: 10px 0;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .arrow-icon {
          font-size: 1.5em;
          font-weight: 300;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-minimal:hover, .featured-editorial-card:hover .btn-minimal, .article-card:hover .btn-minimal {
          color: var(--color-gold);
          border-bottom-color: var(--color-gold);
        }

        .btn-minimal:hover .arrow-icon, .featured-editorial-card:hover .arrow-icon, .article-card:hover .arrow-icon {
          transform: translateX(10px);
        }

        .btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          padding: 0 40px;
          background: var(--color-azure);
          color: #FFF;
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-solid:hover {
          background: var(--color-gold);
          color: var(--color-azure);
          transform: translateY(-2px);
        }

        /* ARTICLES GRID */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(40px, 5vw, 80px) 40px;
        }

        .article-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .card-visual {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          margin-bottom: 2rem;
          background: var(--color-border);
        }

        .card-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .article-card:hover .card-visual img {
          transform: scale(1.05);
        }

        /* EMPTY STATE */
        .empty-state {
          padding: 80px 0;
          border-bottom: 1px solid var(--color-border);
        }

        /* CTA SECTION */
        .cta-section {
          padding: clamp(120px, 20vw, 250px) 0;
        }

        .cta-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .text-center .hero-subtitle {
          margin: 0 auto;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .featured-editorial-card {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .split-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .header-stats {
            text-align: left;
          }
          .articles-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .cta-actions {
            flex-direction: column;
            gap: 1.5rem;
            align-items: stretch;
          }
          .cta-actions .btn-solid {
            width: 100%;
          }
          .cta-actions .btn-minimal {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;