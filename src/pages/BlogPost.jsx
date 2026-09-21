
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../data/blogPosts.js";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    document.title = post.seoTitle || post.title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const createdMeta = !metaDescription;
    const previousDescription =
      metaDescription?.getAttribute("content") || "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      post.seoDescription || post.excerpt
    );

    return () => {
      document.title = previousTitle;

      if (createdMeta) {
        metaDescription?.remove();
      } else {
        metaDescription?.setAttribute(
          "content",
          previousDescription
        );
      }
    };
  }, [post]);

  if (!post) {
    return (
      <main style={styles.notFoundPage}>
        <div className="blog-container">
          <p className="eyebrow">RIVERSIDE AZURE · JOURNAL</p>

          <h1 style={styles.notFoundTitle}>
            Article not found.
          </h1>

          <p style={styles.notFoundText}>
            The article you are looking for may have moved or
            no longer be available.
          </p>

          <Link
            to="/blog"
            className="article-primary-button"
            style={styles.primaryButton}
          >
            Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "subheading":
        return (
          <h3 key={index} style={styles.subheading}>
            {block.text}
          </h3>
        );

      case "list":
        return (
          <ul key={index} style={styles.list}>
            {block.items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        );

      case "numbered-list":
        return (
          <ol key={index} style={styles.numberedList}>
            {block.items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ol>
        );

      case "formula":
        return (
          <div key={index} style={styles.formula}>
            {block.text}
          </div>
        );

      default:
        return (
          <p key={index} style={styles.paragraph}>
            {block.text}
          </p>
        );
    }
  };

  const sectionsWithHeadings = post.sections.filter(
    (section) => section.heading
  );

  return (
    <main style={styles.page}>
      {/* =====================================================
          ARTICLE HEADER
      ====================================================== */}

      <header style={styles.header}>
        <div className="article-container">
          <div style={styles.headerTop}>
            <Link
              to="/blog"
              className="back-link"
              style={styles.backLink}
            >
              <span>←</span>
              <span>Riverside Azure Journal</span>
            </Link>

            <span style={styles.articleNumber}>ARTICLE 01</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={styles.headerContent}
          >
            <p className="eyebrow">{post.category}</p>

            <h1 style={styles.title}>{post.title}</h1>

            <div style={styles.headerBottom}>
              <p style={styles.excerpt}>{post.excerpt}</p>

              <div style={styles.meta}>
                <span>{post.date}</span>
                <span style={styles.metaLine}>—</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}

      <section style={styles.heroImageSection}>
        <div className="article-container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={styles.heroImageWrap}
          >
            <img
              src={post.image}
              alt={post.title}
              style={styles.heroImage}
            />

            <div style={styles.imageCaption}>
              RIVERSIDE AZURE · NAIROBI
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE BODY
      ====================================================== */}

      <section style={styles.articleSection}>
        <div className="article-container">
          <div className="article-layout" style={styles.articleLayout}>
            {/* TABLE OF CONTENTS */}

            {sectionsWithHeadings.length > 0 && (
              <aside
                className="article-aside"
                style={styles.aside}
              >
                <div style={styles.asideInner}>
                  <p style={styles.asideLabel}>
                    IN THIS ARTICLE
                  </p>

                  <nav style={styles.toc}>
                    {sectionsWithHeadings.map(
                      (section, index) => {
                        const id = slugify(section.heading);

                        return (
                          <a
                            key={`${section.heading}-${index}`}
                            href={`#${id}`}
                            className="toc-link"
                            style={styles.tocLink}
                          >
                            <span style={styles.tocNumber}>
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span>{section.heading}</span>
                          </a>
                        );
                      }
                    )}

                    {post.faqs?.length > 0 && (
                      <a
                        href="#frequently-asked-questions"
                        className="toc-link"
                        style={styles.tocLink}
                      >
                        <span style={styles.tocNumber}>
                          {String(
                            sectionsWithHeadings.length + 1
                          ).padStart(2, "0")}
                        </span>

                        <span>Frequently Asked Questions</span>
                      </a>
                    )}
                  </nav>
                </div>
              </aside>
            )}

            <article className="article-body" style={styles.articleBody}>
              {/* ARTICLE SECTIONS */}

              {post.sections.map((section, sectionIndex) => (
                <motion.section
                  key={`${section.heading || "section"}-${sectionIndex}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  id={
                    section.heading
                      ? slugify(section.heading)
                      : undefined
                  }
                  style={styles.contentSection}
                >
                  {section.heading && (
                    <div style={styles.sectionHeadingWrap}>
                      <span style={styles.sectionIndex}>
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>

                      <h2 style={styles.sectionHeading}>
                        {section.heading}
                      </h2>
                    </div>
                  )}

                  <div>
                    {section.blocks.map(renderBlock)}
                  </div>
                </motion.section>
              ))}

              {/* FAQ */}

              {post.faqs?.length > 0 && (
                <motion.section
                  id="frequently-asked-questions"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={styles.contentSection}
                >
                  <div style={styles.sectionHeadingWrap}>
                    <span style={styles.sectionIndex}>
                      {String(
                        sectionsWithHeadings.length + 1
                      ).padStart(2, "0")}
                    </span>

                    <div>
                      <p style={styles.sectionEyebrow}>
                        BUYER QUESTIONS
                      </p>

                      <h2 style={styles.sectionHeading}>
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </div>

                  <div style={styles.faqList}>
                    {post.faqs.map((faq, index) => (
                      <div
                        key={`${faq.question}-${index}`}
                        className="faq-item"
                        style={styles.faqItem}
                      >
                        <div style={styles.faqNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>
                          <h3 style={styles.faqQuestion}>
                            {faq.question}
                          </h3>

                          <p style={styles.paragraph}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* CONCLUSION */}

              {post.conclusion?.length > 0 && (
                <section style={styles.conclusion}>
                  <p style={styles.conclusionLabel}>
                    IN CONCLUSION
                  </p>

                  {post.conclusion.map(
                    (paragraph, index) => (
                      <p
                        key={`${paragraph}-${index}`}
                        style={styles.conclusionParagraph}
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </section>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section style={styles.ctaSection}>
        <div className="article-container">
          <div className="cta-grid" style={styles.ctaGrid}>
            <div>
              <p className="eyebrow">RIVERSIDE AZURE</p>

              <h2 style={styles.ctaTitle}>
                Turn insight
                <br />
                into action.
              </h2>
            </div>

            <div style={styles.ctaRight}>
              <p style={styles.ctaText}>
                Explore Riverside Azure's residences or speak
                directly with our team about availability,
                pricing and payment options.
              </p>

              <div className="cta-actions" style={styles.ctaActions}>
                <Link
                  to="/units"
                  className="article-primary-button"
                  style={styles.primaryButton}
                >
                  Explore Residences
                  <span>↗</span>
                </Link>

                <Link
                  to="/contact"
                  className="article-secondary-button"
                  style={styles.secondaryButton}
                >
                  Contact The Team
                </Link>
              </div>
            </div>
          </div>

          <div style={styles.ctaBottom}>
            <span>25 RIVERSIDE DRIVE</span>
            <span>NAIROBI · KENYA</span>
            <span>RIVERSIDE AZURE</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER ARTICLE NAV
      ====================================================== */}

      <section style={styles.articleFooter}>
        <div className="article-container">
          <Link
            to="/blog"
            className="return-link"
            style={styles.returnLink}
          >
            <span>←</span>
            <span>Back to Riverside Azure Journal</span>
          </Link>

          <p style={styles.disclaimer}>
            This article is for general information only and
            should not be treated as legal, tax, investment or
            financial advice. Buyers should obtain independent
            professional advice before entering into a property
            transaction.
          </p>
        </div>
      </section>

      <style>{`
        .article-container {
          width: min(1280px, calc(100% - 64px));
          margin: 0 auto;
        }

        .back-link,
        .toc-link,
        .return-link {
          text-decoration: none;
        }

        .back-link:hover {
          color: var(--azure-deep) !important;
        }

        .toc-link {
          transition:
            color 0.35s var(--ease-luxury),
            padding-left 0.35s var(--ease-luxury);
        }

        .toc-link:hover {
          color: var(--azure-deep) !important;
          padding-left: 4px;
        }

        .toc-link:hover .toc-number {
          color: var(--gold-accent);
        }

        .faq-item {
          transition:
            border-color 0.35s var(--ease-luxury),
            background-color 0.35s var(--ease-luxury);
        }

        .faq-item:hover {
          border-color: rgba(43, 57, 144, 0.25) !important;
          background: white !important;
        }

        .article-primary-button,
        .article-secondary-button {
          transition:
            transform 0.4s var(--ease-luxury),
            background-color 0.4s var(--ease-luxury),
            border-color 0.4s var(--ease-luxury),
            color 0.4s var(--ease-luxury);
        }

        .article-primary-button:hover {
          transform: translateY(-2px);
          background: var(--gold-hover) !important;
          border-color: var(--gold-hover) !important;
        }

        .article-secondary-button:hover {
          transform: translateY(-2px);
          background: white !important;
          border-color: white !important;
          color: var(--azure-deep) !important;
        }

        .return-link:hover {
          gap: 16px !important;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 980px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }

          .article-aside {
            display: none !important;
          }

          .article-body {
            max-width: 760px !important;
          }
        }

        @media (max-width: 640px) {
          .article-container {
            width: min(100% - 36px, 1280px);
          }

          .header {
            padding-top: 125px !important;
          }

          .header-top {
            margin-bottom: 55px !important;
          }

          .article-number {
            display: none !important;
          }

          .title {
            font-size: clamp(2.8rem, 13vw, 4.2rem) !important;
          }

          .header-bottom {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }

          .meta {
            justify-self: start !important;
          }

          .hero-image-section {
            padding-top: 0 !important;
          }

          .hero-image-wrap {
            aspect-ratio: 4 / 3 !important;
          }

          .article-section {
            padding-top: 70px !important;
            padding-bottom: 80px !important;
          }

          .section-heading-wrap {
            grid-template-columns: 38px 1fr !important;
            gap: 16px !important;
          }

          .section-heading {
            font-size: 2rem !important;
          }

          .paragraph,
          .conclusion-paragraph {
            font-size: 0.98rem !important;
          }

          .faq-item {
            grid-template-columns: 32px 1fr !important;
            gap: 14px !important;
            padding: 22px 0 !important;
          }

          .cta-section {
            padding-top: 82px !important;
          }

          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .cta-title {
            font-size: clamp(2.9rem, 14vw, 4.3rem) !important;
          }

          .cta-actions {
            flex-direction: column !important;
          }

          .cta-actions a {
            width: 100% !important;
          }

          .cta-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }

          .article-footer {
            padding-top: 40px !important;
            padding-bottom: 100px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default BlogPost;

const styles = {
  page: {
    minHeight: "100vh",
    background: "var(--white)",
    color: "var(--text-dark)",
  },

  /* =====================================================
     HEADER
  ====================================================== */

  header: {
    padding: "150px 0 90px",
    background:
      "linear-gradient(135deg, #ffffff 0%, #fafaf8 68%, #f5f5f1 100%)",
    borderBottom: "1px solid var(--border-light)",
  },

  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "90px",
  },

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "var(--text-dark-soft)",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    transition: "color 0.35s var(--ease-luxury)",
  },

  articleNumber: {
    color: "var(--gold-accent)",
    fontSize: "0.65rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
  },

  headerContent: {
    maxWidth: "1040px",
  },

  title: {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "clamp(3.4rem, 7vw, 7rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.055em",
    color: "var(--azure-deep)",
    margin: 0,
  },

  headerBottom: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "60px",
    alignItems: "end",
    marginTop: "40px",
    maxWidth: "900px",
  },

  excerpt: {
    maxWidth: "610px",
    margin: 0,
    color: "var(--text-dark-soft)",
    fontSize: "1rem",
    lineHeight: 1.85,
  },

  meta: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: "#777b86",
    fontSize: "0.72rem",
    whiteSpace: "nowrap",
  },

  metaLine: {
    color: "var(--gold-accent)",
  },

  /* =====================================================
     IMAGE
  ====================================================== */

  heroImageSection: {
    padding: "0 0 120px",
    background: "var(--white)",
  },

  heroImageWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "2 / 1",
    overflow: "hidden",
    background: "var(--off-white)",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  imageCaption: {
    position: "absolute",
    right: "22px",
    bottom: "18px",
    color: "white",
    fontSize: "0.58rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
    textShadow: "0 2px 10px rgba(0,0,0,0.35)",
  },

  /* =====================================================
     ARTICLE
  ====================================================== */

  articleSection: {
    padding: "20px 0 130px",
    background: "var(--white)",
  },

  articleLayout: {
    display: "grid",
    gridTemplateColumns: "220px minmax(0, 760px)",
    gap: "78px",
    justifyContent: "center",
    alignItems: "start",
  },

  aside: {
    position: "relative",
  },

  asideInner: {
    position: "sticky",
    top: "120px",
    borderLeft: "1px solid var(--border-light)",
    paddingLeft: "20px",
  },

  asideLabel: {
    color: "var(--gold-accent)",
    fontSize: "0.64rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
    margin: "0 0 20px",
  },

  toc: {
    display: "grid",
    gap: "15px",
  },

  tocLink: {
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    gap: "8px",
    color: "#737783",
    fontSize: "0.77rem",
    lineHeight: 1.5,
  },

  tocNumber: {
    color: "#b4b6bc",
    fontSize: "0.62rem",
    paddingTop: "2px",
  },

  articleBody: {
    minWidth: 0,
    maxWidth: "760px",
  },

  contentSection: {
    marginBottom: "78px",
    scrollMarginTop: "110px",
  },

  sectionHeadingWrap: {
    display: "grid",
    gridTemplateColumns: "48px 1fr",
    gap: "20px",
    alignItems: "start",
    marginBottom: "28px",
  },

  sectionIndex: {
    color: "var(--gold-accent)",
    fontFamily: "var(--font-serif)",
    fontSize: "1.45rem",
    lineHeight: 1.1,
    paddingTop: "3px",
  },

  sectionEyebrow: {
    color: "var(--gold-accent)",
    fontSize: "0.65rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
    margin: "0 0 9px",
  },

  sectionHeading: {
    color: "var(--azure-deep)",
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.06,
    letterSpacing: "-0.035em",
    margin: 0,
  },

  subheading: {
    color: "var(--azure-deep)",
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "1.45rem",
    lineHeight: 1.25,
    margin: "35px 0 14px",
  },

  paragraph: {
    color: "var(--text-dark-soft)",
    fontSize: "1.02rem",
    lineHeight: 1.9,
    margin: "0 0 20px",
  },

  list: {
    margin: "15px 0 25px",
    paddingLeft: "22px",
    color: "var(--text-dark-soft)",
  },

  numberedList: {
    margin: "15px 0 25px",
    paddingLeft: "25px",
    color: "var(--text-dark-soft)",
  },

  listItem: {
    paddingLeft: "5px",
    marginBottom: "11px",
    lineHeight: 1.8,
  },

  formula: {
    margin: "30px 0",
    padding: "25px 28px",
    background: "var(--off-white)",
    borderLeft: "2px solid var(--gold-accent)",
    color: "var(--azure-deep)",
    fontFamily: "var(--font-body)",
    fontSize: "0.92rem",
    fontWeight: 700,
    lineHeight: 1.7,
  },

  /* =====================================================
     FAQ
  ====================================================== */

  faqList: {
    borderTop: "1px solid var(--border-light)",
  },

  faqItem: {
    display: "grid",
    gridTemplateColumns: "42px 1fr",
    gap: "20px",
    padding: "27px 0",
    borderBottom: "1px solid var(--border-light)",
    background: "transparent",
  },

  faqNumber: {
    color: "var(--gold-accent)",
    fontFamily: "var(--font-serif)",
    fontSize: "1.25rem",
  },

  faqQuestion: {
    color: "var(--azure-deep)",
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "1.35rem",
    lineHeight: 1.25,
    margin: "0 0 12px",
  },

  /* =====================================================
     CONCLUSION
  ====================================================== */

  conclusion: {
    marginTop: "20px",
    padding: "45px 0 5px",
    borderTop: "1px solid var(--border-light)",
  },

  conclusionLabel: {
    color: "var(--gold-accent)",
    fontSize: "0.66rem",
    fontWeight: 800,
    letterSpacing: "0.18em",
    margin: "0 0 20px",
  },

  conclusionParagraph: {
    color: "var(--azure-deep)",
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
    lineHeight: 1.45,
    margin: "0 0 15px",
  },

  /* =====================================================
     CTA
  ====================================================== */

  ctaSection: {
    padding: "120px 0 38px",
    background:
      "linear-gradient(135deg, var(--azure-deep) 0%, var(--azure-main) 58%, var(--azure-mid) 100%)",
    color: "white",
  },

  ctaGrid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "100px",
    alignItems: "end",
    paddingBottom: "100px",
  },

  ctaTitle: {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "clamp(3.2rem, 6vw, 6rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.05em",
    margin: 0,
    color: "white",
  },

  ctaRight: {
    maxWidth: "480px",
  },

  ctaText: {
    color: "rgba(255,255,255,0.72)",
    fontSize: "1rem",
    lineHeight: 1.85,
    margin: "0 0 30px",
  },

  ctaActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    minHeight: "52px",
    padding: "0 22px",
    background: "var(--gold-accent)",
    color: "var(--azure-deep)",
    border: "1px solid var(--gold-accent)",
    textDecoration: "none",
    fontSize: "0.68rem",
    fontWeight: 800,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "52px",
    padding: "0 22px",
    color: "white",
    border: "1px solid rgba(255,255,255,0.35)",
    textDecoration: "none",
    fontSize: "0.68rem",
    fontWeight: 800,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  ctaBottom: {
    borderTop: "1px solid rgba(255,255,255,0.16)",
    paddingTop: "22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(255,255,255,0.48)",
    fontSize: "0.62rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
  },

  /* =====================================================
     FOOTER
  ====================================================== */

  articleFooter: {
    padding: "48px 0 120px",
    background: "var(--white)",
  },

  returnLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    color: "var(--azure-deep)",
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    transition: "gap 0.4s var(--ease-luxury)",
  },

  disclaimer: {
    maxWidth: "720px",
    margin: "45px 0 0",
    color: "#9699a1",
    fontSize: "0.76rem",
    lineHeight: 1.75,
  },

  /* =====================================================
     NOT FOUND
  ====================================================== */

  notFoundPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "140px 0",
    background: "var(--white)",
    color: "var(--text-dark)",
  },

  notFoundTitle: {
    color: "var(--azure-deep)",
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "clamp(3rem, 7vw, 6rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    margin: "0 0 20px",
  },

  notFoundText: {
    maxWidth: "520px",
    color: "var(--text-dark-soft)",
    lineHeight: 1.8,
    margin: "0 0 30px",
  },
};

