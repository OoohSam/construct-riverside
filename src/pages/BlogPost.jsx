import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

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

    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMeta = !metaDescription;
    const previousDescription = metaDescription?.getAttribute("content") || "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", post.seoDescription || post.excerpt);

    return () => {
      document.title = previousTitle;

      if (createdMeta) {
        metaDescription?.remove();
      } else {
        metaDescription?.setAttribute("content", previousDescription);
      }
    };
  }, [post]);

  if (!post) {
    return (
      <main style={styles.notFoundPage}>
        <div style={styles.notFoundCard}>
          <p style={styles.eyebrow}>Riverside Azure Journal</p>
          <h1 style={styles.notFoundTitle}>Article not found</h1>
          <Link to="/blog" style={styles.primaryButton}>
            Back to Blog
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
            {block.items.map((item) => (
              <li key={item} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        );

      case "numbered-list":
        return (
          <ol key={index} style={styles.list}>
            {block.items.map((item) => (
              <li key={item} style={styles.listItem}>
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

  return (
    <main style={styles.page}>
      <article>
        <header style={styles.hero}>
          <img src={post.image} alt={post.title} style={styles.heroImage} />
          <div style={styles.heroOverlay} />

          <div style={styles.heroContent}>
            <Link to="/blog" style={styles.backLink}>
              ← Riverside Azure Journal
            </Link>

            <p style={styles.eyebrow}>{post.category}</p>
            <h1 style={styles.title}>{post.title}</h1>

            <div style={styles.metaRow}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <section style={styles.articleSection}>
          <div className="article-layout" style={styles.articleLayout}>
            <aside className="article-aside" style={styles.aside}>
              <p style={styles.asideLabel}>In this article</p>

              <nav style={styles.toc}>
                {post.sections
                  .filter((section) => section.heading)
                  .map((section) => {
                    const id = slugify(section.heading);
                    return (
                      <a key={section.heading} href={`#${id}`} style={styles.tocLink}>
                        {section.heading}
                      </a>
                    );
                  })}

                {post.faqs?.length > 0 && (
                  <a href="#frequently-asked-questions" style={styles.tocLink}>
                    Frequently Asked Questions
                  </a>
                )}
              </nav>
            </aside>

            <div className="article-body" style={styles.articleBody}>
              {post.sections.map((section, sectionIndex) => (
                <section
                  key={sectionIndex}
                  id={section.heading ? slugify(section.heading) : undefined}
                  style={styles.contentSection}
                >
                  {section.heading && (
                    <h2 style={styles.sectionHeading}>{section.heading}</h2>
                  )}

                  {section.blocks.map(renderBlock)}
                </section>
              ))}

              {post.faqs?.length > 0 && (
                <section
                  id="frequently-asked-questions"
                  style={styles.contentSection}
                >
                  <p style={styles.sectionEyebrow}>Buyer Questions</p>
                  <h2 style={styles.sectionHeading}>Frequently Asked Questions</h2>

                  <div style={styles.faqList}>
                    {post.faqs.map((faq) => (
                      <div key={faq.question} style={styles.faqItem}>
                        <h3 style={styles.faqQuestion}>{faq.question}</h3>
                        <p style={styles.paragraph}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section style={styles.conclusion}>
                {post.conclusion.map((paragraph) => (
                  <p key={paragraph} style={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>

              <section style={styles.ctaCard}>
                <p style={styles.sectionEyebrow}>Riverside Azure</p>
                <h2 style={styles.ctaTitle}>Interested in Riverside Azure?</h2>
                <p style={styles.ctaText}>
                  Explore the development or contact our team to learn more about
                  available apartments and payment options.
                </p>

                <div style={styles.ctaActions}>
                  <Link to="/units" style={styles.primaryButton}>
                    Explore Apartments
                  </Link>
                  <Link to="/contact" style={styles.secondaryButton}>
                    Contact Our Team
                  </Link>
                </div>
              </section>

              <p style={styles.disclaimer}>
                This article is for general information only and should not be
                treated as legal, tax, investment or financial advice. Buyers
                should obtain independent professional advice before entering
                into a property transaction.
              </p>

              <Link to="/blog" style={styles.returnLink}>
                ← Back to Riverside Azure Journal
              </Link>
            </div>
          </div>
        </section>
      </article>

      <style>{`
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
        }
      `}</style>
    </main>
  );
};

export default BlogPost;

const styles = {
  page: {
    minHeight: "100vh",
    color: "var(--text-main)",
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 38%, #021827 100%)",
  },

  hero: {
    minHeight: "78vh",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
  },

  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(2,17,31,0.28), rgba(2,17,31,0.62) 50%, rgba(1,12,22,0.97))",
  },

  heroContent: {
    position: "relative",
    zIndex: 1,
    width: "min(980px, calc(100% - 40px))",
    margin: "0 auto",
    padding: "150px 0 72px",
  },

  backLink: {
    display: "inline-block",
    color: "rgba(247,244,236,0.72)",
    textDecoration: "none",
    marginBottom: "30px",
    fontSize: "0.9rem",
  },

  eyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: "0.78rem",
    fontWeight: 800,
    marginBottom: "14px",
  },

  title: {
    maxWidth: "920px",
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2.55rem, 7vw, 5rem)",
    lineHeight: 1.04,
    letterSpacing: "-0.045em",
    margin: "0 0 22px",
  },

  metaRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    color: "rgba(247,244,236,0.64)",
    fontSize: "0.9rem",
  },

  articleSection: {
    padding: "clamp(62px, 9vw, 100px) 20px 110px",
  },

  articleLayout: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "230px minmax(0, 760px)",
    gap: "70px",
    justifyContent: "center",
    alignItems: "start",
  },

  aside: {
    position: "sticky",
    top: "120px",
    borderLeft: "1px solid rgba(243,193,66,0.22)",
    paddingLeft: "18px",
  },

  asideLabel: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: "0.72rem",
    fontWeight: 800,
    margin: "0 0 16px",
  },

  toc: {
    display: "grid",
    gap: "11px",
  },

  tocLink: {
    color: "rgba(247,244,236,0.58)",
    textDecoration: "none",
    lineHeight: 1.5,
    fontSize: "0.86rem",
  },

  articleBody: {
    minWidth: 0,
  },

  contentSection: {
    marginBottom: "54px",
    scrollMarginTop: "120px",
  },

  sectionEyebrow: {
    color: "var(--gold-accent)",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "0.76rem",
    fontWeight: 800,
    marginBottom: "10px",
  },

  sectionHeading: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(1.8rem, 4vw, 2.65rem)",
    lineHeight: 1.14,
    letterSpacing: "-0.025em",
    margin: "0 0 22px",
  },

  subheading: {
    fontFamily: "var(--font-serif)",
    fontSize: "1.35rem",
    lineHeight: 1.3,
    margin: "30px 0 12px",
    color: "rgba(247,244,236,0.96)",
  },

  paragraph: {
    color: "rgba(247,244,236,0.76)",
    lineHeight: 1.9,
    fontSize: "1.03rem",
    margin: "0 0 18px",
  },

  list: {
    margin: "8px 0 24px",
    paddingLeft: "24px",
    color: "rgba(247,244,236,0.76)",
  },

  listItem: {
    marginBottom: "10px",
    paddingLeft: "4px",
    lineHeight: 1.75,
  },

  formula: {
    margin: "24px 0",
    padding: "22px 24px",
    borderLeft: "3px solid var(--gold-accent)",
    background: "rgba(243,193,66,0.08)",
    color: "var(--text-main)",
    fontWeight: 800,
    lineHeight: 1.6,
  },

  faqList: {
    display: "grid",
    gap: "16px",
  },

  faqItem: {
    padding: "22px 22px 4px",
    border: "1px solid rgba(243,193,66,0.14)",
    background: "rgba(1,18,32,0.38)",
  },

  faqQuestion: {
    fontFamily: "var(--font-serif)",
    fontSize: "1.25rem",
    margin: "0 0 10px",
    lineHeight: 1.35,
  },

  conclusion: {
    margin: "10px 0 46px",
    paddingTop: "32px",
    borderTop: "1px solid rgba(243,193,66,0.16)",
  },

  ctaCard: {
    marginTop: "52px",
    padding: "clamp(28px, 5vw, 44px)",
    background:
      "linear-gradient(180deg, rgba(6,43,70,0.78), rgba(2,17,31,0.92))",
    border: "1px solid rgba(243,193,66,0.18)",
    textAlign: "center",
  },

  ctaTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
    margin: "0 0 14px",
    lineHeight: 1.1,
  },

  ctaText: {
    color: "var(--text-muted)",
    maxWidth: "600px",
    margin: "0 auto 24px",
    lineHeight: 1.8,
  },

  ctaActions: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryButton: {
    display: "inline-block",
    textDecoration: "none",
    background:
      "linear-gradient(135deg, var(--gold-soft), var(--gold-accent), var(--gold-hover))",
    color: "var(--azure-deep)",
    padding: "15px 22px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.76rem",
  },

  secondaryButton: {
    display: "inline-block",
    textDecoration: "none",
    border: "1px solid rgba(243,193,66,0.38)",
    color: "var(--text-main)",
    padding: "15px 22px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.76rem",
  },

  disclaimer: {
    marginTop: "30px",
    color: "rgba(247,244,236,0.48)",
    fontSize: "0.83rem",
    lineHeight: 1.7,
  },

  returnLink: {
    display: "inline-block",
    marginTop: "28px",
    color: "var(--gold-accent)",
    textDecoration: "none",
    fontWeight: 700,
  },

  notFoundPage: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "120px 20px",
    background:
      "linear-gradient(180deg, #04395e 0%, #031b2f 42%, #021827 100%)",
  },

  notFoundCard: {
    textAlign: "center",
  },

  notFoundTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2.3rem, 7vw, 4rem)",
    marginBottom: "28px",
  },
};