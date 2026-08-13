import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts.js";

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>Riverside Azure Journal</p>
          <h1 style={styles.heroTitle}>Property. Investment. Nairobi Living.</h1>
          <p style={styles.heroText}>
            Practical insights for buyers and investors exploring property in
            Riverside, Westlands and Nairobi.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section style={styles.section}>
          <div className="blog-container">
            <div style={styles.sectionHeader}>
              <p style={styles.sectionEyebrow}>Featured Insight</p>
              <h2 style={styles.sectionTitle}>Latest from the Journal</h2>
            </div>

            <Link
              to={`/blog/${featuredPost.slug}`}
              className="featured-blog-card"
              style={styles.featuredCard}
            >
              <div style={styles.featuredImageWrap}>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  style={styles.featuredImage}
                />
                <div style={styles.imageOverlay} />
              </div>

              <div style={styles.featuredContent}>
                <div style={styles.metaRow}>
                  <span style={styles.category}>{featuredPost.category}</span>
                  <span style={styles.meta}>
                    {featuredPost.date} · {featuredPost.readTime}
                  </span>
                </div>

                <h2 style={styles.featuredTitle}>{featuredPost.title}</h2>
                <p style={styles.excerpt}>{featuredPost.excerpt}</p>
                <span style={styles.readMore}>Read Article →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section style={styles.latestSection}>
        <div className="blog-container">
          <div style={styles.sectionHeader}>
            <p style={styles.sectionEyebrow}>Insights</p>
            <h2 style={styles.sectionTitle}>
              {otherPosts.length ? "More Articles" : "More Articles Coming Soon"}
            </h2>

            {!otherPosts.length && (
              <p style={styles.emptyText}>
                We are building a library of practical property and investment
                guides for Nairobi buyers.
              </p>
            )}
          </div>

          {otherPosts.length > 0 && (
            <div style={styles.grid}>
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="blog-card"
                  style={styles.card}
                >
                  <div style={styles.cardImageWrap}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={styles.cardImage}
                    />
                  </div>

                  <div style={styles.cardContent}>
                    <p style={styles.category}>{post.category}</p>
                    <h3 style={styles.cardTitle}>{post.title}</h3>
                    <p style={styles.excerpt}>{post.excerpt}</p>
                    <span style={styles.meta}>
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div className="blog-container" style={styles.ctaInner}>
          <p style={styles.sectionEyebrow}>Riverside Azure</p>
          <h2 style={styles.ctaTitle}>Explore Apartments on Riverside Drive</h2>
          <p style={styles.ctaText}>
            Discover available apartments, project details and investment
            information.
          </p>

          <div style={styles.ctaActions}>
            <Link to="/units" style={styles.primaryButton}>
              View Apartments
            </Link>
            <Link to="/contact" style={styles.secondaryButton}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .blog-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .featured-blog-card:hover,
        .blog-card:hover {
          transform: translateY(-6px);
          border-color: rgba(243, 193, 66, 0.34) !important;
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.32);
        }

        .featured-blog-card:hover img,
        .blog-card:hover img {
          transform: scale(1.045);
        }

        @media (max-width: 900px) {
          .featured-blog-card {
            grid-template-columns: 1fr !important;
          }

          .featured-blog-card > div:first-child {
            min-height: 360px !important;
          }
        }

        @media (max-width: 640px) {
          .blog-container {
            width: min(100% - 28px, 1180px);
          }

          .featured-blog-card > div:first-child {
            min-height: 260px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Blog;

const styles = {
  page: {
    minHeight: "100vh",
    color: "var(--text-main)",
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 42%, #021827 100%)",
  },

  hero: {
    minHeight: "62vh",
    padding: "150px 24px 90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 50% 10%, rgba(243,193,66,0.12), transparent 32%), linear-gradient(180deg, rgba(4,57,94,0.96), rgba(2,17,31,0.96))",
  },

  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    fontSize: "0.8rem",
    fontWeight: 800,
    marginBottom: "18px",
  },

  heroTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2.7rem, 7vw, 5.4rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.045em",
    margin: "0 0 22px",
  },

  heroText: {
    maxWidth: "700px",
    margin: "0 auto",
    color: "rgba(247,244,236,0.78)",
    lineHeight: 1.8,
    fontSize: "clamp(1rem, 2.5vw, 1.16rem)",
  },

  section: {
    padding: "clamp(78px, 10vw, 110px) 0",
  },

  latestSection: {
    padding: "clamp(78px, 10vw, 110px) 0",
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.72), rgba(1,12,22,0.94))",
  },

  sectionHeader: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 42px",
  },

  sectionEyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "0.78rem",
    fontWeight: 800,
    marginBottom: "12px",
  },

  sectionTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 5vw, 3.25rem)",
    letterSpacing: "-0.03em",
    lineHeight: 1.08,
    margin: 0,
  },

  featuredCard: {
    display: "grid",
    gridTemplateColumns: "1.12fr 0.88fr",
    textDecoration: "none",
    color: "inherit",
    overflow: "hidden",
    border: "1px solid rgba(243,193,66,0.16)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.72), rgba(2,17,31,0.9))",
    transition: "all 0.35s ease",
  },

  featuredImageWrap: {
    position: "relative",
    minHeight: "500px",
    overflow: "hidden",
    background: "#021827",
  },

  featuredImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.55s ease",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.05), rgba(2,17,31,0.28))",
  },

  featuredContent: {
    padding: "clamp(30px, 5vw, 58px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  metaRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "18px",
  },

  category: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.75rem",
    fontWeight: 800,
    margin: 0,
  },

  meta: {
    color: "rgba(247,244,236,0.58)",
    fontSize: "0.84rem",
  },

  featuredTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 4vw, 3.2rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
    margin: "0 0 18px",
  },

  excerpt: {
    color: "var(--text-muted)",
    lineHeight: 1.8,
    margin: "0 0 22px",
    fontSize: "0.98rem",
  },

  readMore: {
    color: "var(--gold-accent)",
    fontWeight: 800,
    letterSpacing: "0.03em",
  },

  emptyText: {
    margin: "18px auto 0",
    maxWidth: "620px",
    color: "var(--text-muted)",
    lineHeight: 1.8,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  card: {
    textDecoration: "none",
    color: "inherit",
    border: "1px solid rgba(243,193,66,0.14)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.62), rgba(2,17,31,0.9))",
    overflow: "hidden",
    transition: "all 0.35s ease",
  },

  cardImageWrap: {
    aspectRatio: "16 / 10",
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  },

  cardContent: {
    padding: "24px",
  },

  cardTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "1.55rem",
    lineHeight: 1.25,
    margin: "10px 0 14px",
  },

  ctaSection: {
    padding: "clamp(84px, 11vw, 120px) 0",
    background:
      "radial-gradient(circle at 50% 0%, rgba(243,193,66,0.1), transparent 36%), rgba(1,12,22,0.98)",
  },

  ctaInner: {
    textAlign: "center",
  },

  ctaTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    lineHeight: 1.08,
    margin: "0 0 16px",
  },

  ctaText: {
    maxWidth: "680px",
    margin: "0 auto 28px",
    color: "var(--text-muted)",
    lineHeight: 1.8,
  },

  ctaActions: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryButton: {
    textDecoration: "none",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    padding: "15px 24px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.78rem",
  },

  secondaryButton: {
    textDecoration: "none",
    color: "var(--text-main)",
    padding: "15px 24px",
    border: "1px solid rgba(243,193,66,0.36)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.78rem",
  },
};