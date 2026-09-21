import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogPosts.js";

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost?.id);

  /* =========================================================
     GALLERY MOTION (Quiet & Restrained)
     ========================================================= */
  const quietEase = [0.25, 1, 0.5, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: quietEase } }
  };

  const fadeStagger = {
    hidden: { opacity: 0, y: 10 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: quietEase }
    })
  };

  return (
    <>
      <main className="journal-page">
        {/* =====================================================
            JOURNAL HERO (Architectural Header)
        ====================================================== */}
        <section className="journal-hero">
          <div className="container">
            <motion.div
              className="hero-grid"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <div className="hero-content">
                <motion.span className="section-meta gold-text" variants={fadeUp}>
                  Riverside Azure · Journal
                </motion.span>
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Property, investment<br />&amp; Nairobi living.
                </motion.h1>
                <motion.p className="hero-desc" variants={fadeUp}>
                  Thoughtful perspectives on property, investment, and contemporary living in Nairobi. 
                  Curated by the team at Riverside Azure.
                </motion.p>
              </div>

              <motion.div className="hero-aside" variants={fadeUp}>
                <span className="aside-number">01</span>
                <span className="aside-label">The Journal</span>
                <p className="aside-text">
                  Practical insights for buyers, investors, and homeowners navigating Nairobi's property market.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE (Gallery Layout)
        ====================================================== */}
        {featuredPost && (
          <section className="featured-section">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="section-header"
              >
                <div className="header-left">
                  <span className="section-meta">Featured Insight</span>
                  <h2 className="section-title">Latest from the Journal.</h2>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <Link to={`/blog/${featuredPost.slug}`} className="featured-card">
                  <div className="featured-image-wrap">
                    <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" />
                    <span className="image-number">01</span>
                  </div>
                  
                  <div className="featured-content">
                    <div className="article-meta">
                      <span className="meta-category">{featuredPost.category}</span>
                      <span className="meta-divider">·</span>
                      <span className="meta-date">{featuredPost.date}</span>
                      <span className="meta-divider">·</span>
                      <span className="meta-time">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="featured-title">{featuredPost.title}</h3>
                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    <span className="read-link">Read Article ↗</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* =====================================================
            ARTICLE GRID (Index Layout)
        ====================================================== */}
        <section className="articles-section">
          <div className="container">
            <motion.div
              className="articles-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="header-left">
                <span className="section-meta">The Archive</span>
                <h2 className="section-title">More to explore.</h2>
              </div>
              <div className="header-right">
                <span className="archive-count">{String(otherPosts.length).padStart(2, "0")}</span>
                <span className="archive-label">Articles</span>
              </div>
            </motion.div>

            {otherPosts.length > 0 ? (
              <div className="article-grid">
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
                      <div className="card-image-wrap">
                        <img src={post.image} alt={post.title} loading="lazy" />
                        <span className="card-number">{String(index + 2).padStart(2, "0")}</span>
                      </div>
                      <div className="card-content">
                        <div className="article-meta">
                          <span className="meta-category">{post.category}</span>
                          <span className="meta-divider">·</span>
                          <span className="meta-date">{post.date}</span>
                        </div>
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-excerpt">{post.excerpt}</p>
                        <span className="read-link">Read ↗</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-number">02</span>
                <div className="empty-content">
                  <h3>More articles are on the way.</h3>
                  <p>We are building a library of practical property and investment insights for Nairobi buyers.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            AZURE CTA (Solid Structure)
        ====================================================== */}
        <section className="journal-cta">
          <div className="container">
            <div className="cta-grid">
              <motion.div
                className="cta-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="section-meta gold-text">Riverside Azure</span>
                <h2 className="section-title light-text">
                  Some decisions<br />are better made early.
                </h2>
              </motion.div>

              <motion.div
                className="cta-right"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <p className="body-text light-text-soft">
                  Explore our residences, understand the development and speak with the 
                  Riverside Azure sales team about current availability.
                </p>
                <div className="cta-actions">
                  <Link to="/units" className="btn-solid-cta">
                    Explore Residences
                  </Link>
                  <Link to="/contact" className="btn-outline-cta">
                    Contact The Team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          STYLES (Gallery Minimalist Structure)
          ========================================================= */}
      <style>{`
        .journal-page {
          background: var(--white);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        /* TYPOGRAPHY UTILITIES */
        .section-meta {
          display: block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-dark-soft);
          margin-bottom: 24px;
        }

        .gold-text { color: var(--gold-accent); }
        .light-text { color: var(--white) !important; }
        .light-text-soft { color: rgba(255, 255, 255, 0.7) !important; }

        .section-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--azure-deep);
        }

        .body-text {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
        }

        /* HERO */
        .journal-hero {
          padding: clamp(160px, 15vw, 200px) 0 clamp(80px, 10vw, 120px) 0;
          border-bottom: 1px solid var(--border-light);
          background: var(--white); /* Pure white, no gradients */
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.65fr);
          gap: 80px;
          align-items: end;
        }

        .hero-title {
          margin: 0 0 24px 0;
          font-family: var(--font-display);
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          font-weight: 400;
          line-height: 0.98;
          letter-spacing: -0.03em;
          color: var(--azure-deep);
        }

        .hero-desc {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
          max-width: 540px;
        }

        .hero-aside {
          padding-left: 40px;
          border-left: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
        }

        .aside-number {
          color: var(--gold-accent);
          font-family: var(--font-serif);
          font-size: 2.5rem;
          line-height: 1;
          margin-bottom: 16px;
        }

        .aside-label {
          color: var(--azure-deep);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .aside-text {
          margin: 0;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        /* HEADER ROWS */
        .section-header, .articles-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: clamp(60px, 8vw, 80px);
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 32px;
        }

        /* FEATURED ARTICLE */
        .featured-section {
          padding: clamp(100px, 12vw, 140px) 0;
          background: var(--white);
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .featured-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--off-white);
        }

        .featured-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s var(--ease-luxury); /* Slower, cinematic scale */
        }

        .featured-card:hover .featured-image-wrap img {
          transform: scale(1.03);
        }

        .image-number, .card-number {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(17, 26, 85, 0.85); /* Deep azure tag */
          color: var(--white);
          padding: 8px 12px;
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .meta-category {
          color: var(--gold-accent);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .meta-divider {
          color: var(--border-light);
          font-size: 0.8rem;
        }

        .meta-date, .meta-time {
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.75rem;
        }

        .featured-title {
          margin: 0 0 24px 0;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          font-weight: 400;
          line-height: 1.1;
          color: var(--azure-deep);
        }

        .featured-excerpt {
          margin: 0 0 32px 0;
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-dark-soft);
          max-width: 500px;
        }

        .read-link {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--azure-main);
          transition: color 0.3s ease;
        }

        .featured-card:hover .read-link, .article-card:hover .read-link {
          color: var(--gold-accent);
        }

        /* ARCHIVE (Article Grid) */
        .articles-section {
          padding: 0 0 clamp(100px, 12vw, 160px) 0;
          background: var(--white);
        }

        .archive-count {
          display: block;
          color: var(--gold-accent);
          font-family: var(--font-serif);
          font-size: 3rem;
          line-height: 1;
          text-align: right;
        }

        .archive-label {
          display: block;
          color: var(--text-dark-soft);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 8px;
          text-align: right;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
        }

        .article-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3; /* Standard editorial aspect ratio for cards */
          overflow: hidden;
          background: var(--off-white);
          margin-bottom: 24px;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s var(--ease-luxury);
        }

        .article-card:hover .card-image-wrap img {
          transform: scale(1.03);
        }

        .card-title {
          margin: 0 0 16px 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.2;
          color: var(--azure-deep);
        }

        .card-excerpt {
          margin: 0 0 24px 0;
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-dark-soft);
        }

        /* EMPTY STATE */
        .empty-state {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 60px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .empty-number {
          color: var(--gold-accent);
          font-family: var(--font-serif);
          font-size: 3rem;
          line-height: 1;
        }

        .empty-content h3 {
          margin: 0 0 16px 0;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 400;
          color: var(--azure-deep);
        }

        .empty-content p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-dark-soft);
        }

        /* CTA SECTION */
        .journal-cta {
          background: var(--azure-deep);
          color: var(--white);
          padding: clamp(100px, 12vw, 160px) 0;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: flex-end;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          margin-top: 40px;
        }

        .btn-solid-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 32px;
          background: var(--white);
          color: var(--azure-deep);
          border: none;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-solid-cta:hover {
          background: var(--gold-accent);
        }

        .btn-outline-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 32px;
          background: transparent;
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .btn-outline-cta:hover {
          border-color: var(--white);
        }

        /* =========================================================
           MOBILE RESPONSIVENESS
           ========================================================= */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-aside {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-light);
            padding-top: 32px;
          }
          .featured-card {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .article-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cta-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .journal-hero {
            padding: 120px 0 60px 0;
          }
          .hero-title {
            font-size: clamp(3rem, 12vw, 4rem);
          }
          .section-header, .articles-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .archive-count, .archive-label {
            text-align: left;
          }
          .archive-count {
            font-size: 2.5rem;
          }
          .article-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .empty-state {
            flex-direction: column;
            gap: 24px;
            padding: 40px 0;
          }
          .cta-actions {
            flex-direction: column;
          }
          .btn-solid-cta, .btn-outline-cta {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;