# Riverside Azure SEO Audit

Status: Documentation-only audit prepared before implementation.
Date: 2026-10-07
Scope: Repository review + live-site inspection + SEO strategy baseline.

## 1. Objective

This document captures the current SEO state of the Riverside Azure website and forms the decision base for a full search optimization project. It is intended to support technical SEO, content planning, keyword targeting, and implementation work without changing the project at this stage.

## 2. Project baseline

- Project name: Riverside Azure
- Website: https://www.riversideazure.co.ke/
- Platform: React + Vite + React Router
- Hosting: Vercel
- Source control: GitHub
- Current app routes identified in the repository:
  - /
  - /about
  - /units
  - /investment
  - /blog
  - /blog/:slug
  - /contact
  - /agent-apply
  - /privacy-policy
  - /riverside
  - /riverside/thank-you

## 3. Verified project facts

These facts are supported by the repository and live-site markup reviewed during the audit.

### Business and location
- Property name: Riverside Azure
- Address reference: 25 Riverside Drive, Nairobi
- Country: Kenya
- Primary market: Nairobi real estate / Riverside area property search
- Developer reference: JNC Brothers & Company Limited
- Website: https://www.riversideazure.co.ke/
- Contact phone reference: +254 796 529997

### Product facts
- Residential development with 1, 2 and 3-bedroom units
- Product positioning: luxury / premium apartments for sale in Riverside, Nairobi
- Unit pricing references in current metadata: from KES 7.8M
- Search-relevant product phrases observed in the site and competitor ecosystem:
  - Riverside Azure apartments
  - apartments for sale in Riverside Nairobi
  - apartments for sale on Riverside Drive
  - 1 bedroom apartments Riverside Nairobi
  - 2 bedroom apartments Riverside Nairobi
  - 3 bedroom apartments Riverside Nairobi

### Amenities and project attributes
The project materials reference these features:
- swimming pool
- gym
- residents' lounge
- kids' playroom
- convenience store
- hotel-styled property management
- 24-hour security
- CCTV
- residential development positioned in Riverside, Nairobi

## 4. Technical audit findings

### 4.1 Global metadata is not route-specific
The root document in [index.html](index.html) contains one shared title and one shared description for the app shell. This is the main technical SEO risk.

Current homepage title observed:
- Riverside Azure Apartments | 1, 2 & 3 Bedroom Homes on Riverside Drive, Nairobi

Current homepage description observed:
- Riverside Azure is a premium off-plan residential development at 25 Riverside Drive, Nairobi, offering 1, 2 and 3-bedroom apartments from KES 7.8M. Book a site visit today.

### 4.2 Same title appears across multiple key routes
I checked the live site for the following routes:
- /
- /about
- /units
- /investment
- /blog

The returned HTML for those routes showed the same title as the homepage shell. This means the app currently lacks strong page-level differentiation for search engines.

### 4.3 SPA route architecture requires careful crawl validation
The app uses React Router and a client-side route model as shown in [src/App.jsx](src/App.jsx). This is not inherently a problem, but search engines need each route to be crawlable, indexable, and correctly rendered. For a multi-page property site, route-by-route metadata and canonical tags are essential.

### 4.4 Sitemap is present but incomplete
The public sitemap file at [public/sitemap.xml](public/sitemap.xml) includes:
- /
- /floor-plans
- /location
- /investment
- /contact

It does not currently reflect the full commercial and content architecture of the site, including the core service pages and blog cluster.

### 4.5 Robots file allows crawling
The robots file at [public/robots.txt](public/robots.txt) currently allows all user agents and points to the sitemap. This is not a problem by itself; the bigger issue is whether the sitemap reflects the real SEO architecture.

### 4.6 No clear per-page canonical strategy was identified in the repository review
There is no evidence in the source files reviewed that a centralized canonical layer or route-specific canonical metadata system is in place.

### 4.7 Structured data is too minimal for a high-value property site
The site currently has a broad Residence schema in [index.html](index.html), but it does not yet show a full schema strategy for:
- Organization
- WebSite
- WebPage
- BreadcrumbList
- Article
- FAQPage
- property-specific landing pages where appropriate

### 4.8 Blog content exists but should be organized into topical clusters
The blog dataset in [src/data/blogPosts.js](src/data/blogPosts.js) is a valuable base. It includes SEO titles and descriptions, but the current blog strategy should be expanded into clear clusters such as:
- Riverside guide content
- apartment buying guides
- Nairobi investment guides
- off-plan property education
- unit-specific buying information

### 4.9 Investment page includes numeric claims that need verification before publishing as ranking copy
The investment page in [src/pages/Investment.jsx](src/pages/Investment.jsx) includes rental and ROI-related figures. These may be useful for conversion, but they must be checked carefully before they are treated as authoritative SEO content.

## 5. Key SEO risks

1. Duplicate page metadata across routes
2. Weak route-level SEO differentiation
3. Incomplete sitemap coverage
4. No canonical handling for route-specific pages
5. Lack of dedicated bedroom-based unit pages
6. Missing page-specific structured data
7. Blog content not yet fully mapped to search intent
8. Investment and yield copy may need fact-checking
9. High-visibility landing pages are not fully separated from marketing pages

## 6. Opportunity areas

The strongest opportunities are:
- homepage keyword targeting for Riverside Nairobi apartments
- dedicated pages for 1-bedroom, 2-bedroom, and 3-bedroom apartment searches
- local SEO through Riverside Drive / Riverside Nairobi authority building
- investment landing page targeting property investment Nairobi and apartment investment Nairobi
- blog/guide content cluster for buyer education and property knowledge
- stronger internal-link connections across units, investment, blog, and contact pages

## 7. Recommended SEO architecture

This is the recommended target direction for the project.

### Core pages
- /
- /about
- /units
- /units/1-bedroom
- /units/2-bedroom
- /units/3-bedroom
- /location
- /investment
- /contact
- /blog

### Secondary content pages
- /blog/riverside-guide
- /blog/off-plan-property-investment-in-kenya
- /blog/apartment-buying-checklist-kenya
- /blog/nairobi-property-investment-guide

### Pages that should be excluded from index
- /privacy-policy
- /riverside/thank-you

These are conversion and compliance pages and should not compete as product or property landing pages in search results.

## 8. Recommended SEO implementation order

1. Create a clean route-level SEO metadata layer
2. Fix page titles and meta descriptions per page
3. Add canonical URLs per route
4. Expand the sitemap to include all real indexable pages
5. Add structured data for core pages
6. Create or sharpen dedicated unit pages
7. Build location and investment landing pages
8. Publish content clusters around buyers and investment topics
9. Optimize hero media and image performance
10. Validate in Search Console after deployment

## 9. Summary

The project already possesses strong raw material for SEO: real estate product facts, location, unit mix, project purpose, amenities, investment context, and a useful blog foundation. The core challenge is not lack of content but the lack of a clean search architecture.

The next phase is a deliberate, fact-checked SEO implementation that organizes the site by search intent, page authority, and conversion flow rather than by marketing page appearance alone.
