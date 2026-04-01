# BRE Builders — New Website Project
## Skills Required · Talent Stack · Complete TODO · Phase Strategy

**Document Version:** 1.0 · April 2026  
**Source of Truth:** BRE_MASTER_CONTENT_STRATEGY.md  
**Design Reference:** BRE_Futuristic_Website.html  
**Status:** Pre-build — review before starting

---

## PART 1 — SKILLS REQUIRED (Claude Project Skills to Create)

The following skills need to be created before building starts. Each session starts by reading the relevant skill. Without them, every session restarts from zero.

---

### SKILL-01: `bre-builders-master`
**Priority:** CRITICAL — create before anything else  
**Triggers:** Any work on the BRE Builders website rebuild

**What it must contain:**
- Company facts (verified): legal name, owner, licenses, phone, email, address
- License numbers confirmed by client: NV #0085999 · CA #[TO VERIFY — 1009219 vs 1093798]
- Correct "years experience" figure to use: 35+ (not 20, not 30)
- Tech stack chosen for new site (to be confirmed — see Part 2)
- Hosting/deployment provider and repo location
- All verified page URLs, content page titles, meta descriptions
- Image base URL: `https://brebuilders.com/wp-content/uploads/`
- Content flags: Ripon vs Modesto, Stephanie vs Carmel, CA license discrepancy
- What NOT to invent: all claims must be verified against `BRE_MASTER_CONTENT_STRATEGY.md`
- Session start checklist specific to BRE

---

### SKILL-02: `bre-builders-seo`
**Priority:** HIGH — needed before any page is written  
**Triggers:** Any SEO work, meta writing, schema markup, content writing for BRE

**What it must contain:**
- Verified rankings: #1 "adu builders reno" with AI Overview, Page 1 "foundation repair in reno nv", Page 1 "northern california construction services"
- Full keyword map per page (from master strategy doc)
- 301 redirect map (old WP URLs → new URLs) — must be implemented exactly
- Schema markup templates per page type (LocalBusiness, Service, FAQ, Review, Portfolio)
- Title tag formulas per page type
- Meta description formulas per page type
- AEO rules: speakable content, FAQ schema, answer-first structure
- Image alt text standards: always include location + service + brand name
- Internal linking strategy
- DO NOT change existing indexed URLs without implementing 301s first

---

### SKILL-03: `bre-builders-images`
**Priority:** HIGH — needed before any portfolio/gallery page is built  
**Triggers:** Any image use, gallery build, alt text writing, image component work

**What it must contain:**
- Complete image registry (all IDs, URLs, verified alt text, SEO title, caption)
- Lake Tahoe gallery: 16 images, exact URLs, captions, which project they belong to
- Ripon Estate gallery: 5 images, exact URLs, captions
- ADU images: pool-house.jpg, inlaw-unit.jpg, garage.jpg, adu-homepage-600x403.jpg
- Repairs images: Foundation-Repair-*.jpg, Water-Intrusion-*.jpg
- All structural repair images with correct alt text
- All deck images with correct alt text
- All commercial images with correct alt text
- All generic service card images (SVC-001 through SVC-016) with corrected alt text
- Rule: NEVER use an image without its registered alt text and title
- Rule: alt text = [what's in image] + [service type] + [location] + [brand]
- Image naming convention for new uploads
- Note: 619 Lakeview Dr Glenbrook NV project has 37 images — only 1 extracted so far. Need full gallery fetch.

---

### SKILL-04: `bre-builders-content`
**Priority:** HIGH — needed before writing any page copy  
**Triggers:** Writing any page, blog post, component copy, testimonial, FAQ, service description

**What it must contain:**
- Brand voice rules: direct, professional, licensed, no fluff, no "we strive to"
- All verified testimonials (6 clients, exact text, correct names — pending Stephanie/Carmel verify)
- All FAQ questions and answers (15 verbatim from site)
- All service descriptions verbatim from current site
- ADU cost data: $75K–$300K, $175/sqft, studio starts $75K, 1-bed $95K–$115K, 2-bed $115K–$300K
- ADU permit data: 4–6 weeks, $3,000–$5,000 Washoe County
- ADU rental data: $1,200–$2,000/month, 30-day minimum
- Project timelines: repairs 1–3 days, deck 3–7 days, kitchen 2–3 weeks, ADU 1.5–3 months
- Materials used: Trex decking, pressure-treated lumber, composite siding, premium waterproofing membranes
- Warranty: 1-year workmanship warranty
- Content gaps identified (10 items) — what to create new vs migrate from existing
- Rule: NEVER invent a price, timeline, or specification. If not in this skill or master doc, ask MASTER.

---

### SKILL-05: `bre-builders-deploy`
**Priority:** HIGH — needed before any deployment work  
**Triggers:** Deploy, commit, push, build, Vercel, server, hosting

**What it must contain:**
- Tech stack (to be confirmed)
- Repo URL and git credentials/token
- Deployment provider (Vercel / Netlify / other — TBD)
- Build command
- Environment variables required
- Domain: brebuilders.com — DNS setup instructions
- Pre-deploy checklist (build passes, 301 redirects in place, no broken image URLs)
- Post-deploy verification checklist (all pages load, form works, images load, GSC not broken)
- Rollback procedure

---

### SKILL-06: `bre-builders-forms`
**Priority:** MEDIUM — needed before form build  
**Triggers:** Any contact form, quote form, intelligent form work

**What it must contain:**
- Full field spec for each service type (ADU, kitchen/bath, deck, repair, commercial, custom home, concrete, addition)
- Full Repairs form spec (extracted verbatim from Fluent Forms — 15 fields, all options)
- Form submission destination (email? CRM? database? — TBD with client)
- Required vs optional fields
- Validation rules
- Success state messaging
- Thank you email copy
- Lead notification email copy to Steve
- GDPR/consent language

---

## PART 2 — TALENT STACK REQUIRED

### Tech Stack Recommendation for New Site

| Layer | Recommended | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SEO-friendly SSG/SSR, easy deployment, image optimization, fast |
| Styling | **Tailwind CSS** | Fast, consistent, matches current design system |
| Animations | **Framer Motion** | Handles the futuristic motion design from prototype |
| Fonts | Google Fonts (Cormorant Garamond, Syne, JetBrains Mono) | Already in design prototype |
| Images | **Next/Image with WebP optimization** | Performance + GSC Core Web Vitals |
| Forms | **React Hook Form + custom API route** | Replaces Fluent Forms, no WP dependency |
| Email/CRM | **Resend (email) + Supabase (lead storage)** OR simple email forwarding | TBD with client |
| Hosting | **Vercel** | Free tier capable, instant CDN, auto-deploy from GitHub |
| CMS | **None initially** — static MDX for blogs | Keep it simple, upgrade later |
| Schema | Inline JSON-LD in `<head>` per page | Full control, no plugin dependency |
| Sitemap | `next-sitemap` package | Auto-generated on build |
| Analytics | Google Analytics 4 + Google Search Console | Already connected |

### Roles Required

| Role | Skills | Who Does It | Notes |
|---|---|---|---|
| Frontend Dev | Next.js, React, Tailwind, Framer Motion | MASTER + Claude | Primary builder |
| SEO Strategist | Schema markup, meta, redirects, GSC | MASTER + Claude | Critical — verified rankings to protect |
| Copywriter | All page copy migration + new content | MASTER + Claude | Must use verified content only — no hallucinations |
| Image Handler | Alt text, optimization, WebP conversion | Claude | Registry already built |
| Form Engineer | React Hook Form, multi-step logic, email | MASTER + Claude | Intelligent form already prototyped |
| Content Strategist | Blog migration, new content plan | MASTER + Claude | 10 content gaps identified |

**Bottom line:** This is a 2-person job (MASTER + Claude). No external contractors needed if using Next.js + Vercel.

---

## PART 3 — CLIENT VERIFICATION REQUIRED (Before Starting)

These must be answered by Steve/Sean BEFORE any build work:

| # | Question | Why It Matters | Urgency |
|---|---|---|---|
| 1 | **Correct CA license number?** Footer says 1009219. Ripon portfolio says 1093798. Which is correct? | Shows on every page, in schema markup, legal compliance | BLOCKER |
| 2 | **Correct testimonial name?** "Stephanie" on homepage vs "Carmel" on other pages — same quote. Which is correct? | Shows in testimonials, affects credibility | HIGH |
| 3 | **New website domain?** Keep brebuilders.com or new domain? | Determines redirect strategy, GSC setup | BLOCKER |
| 4 | **Form submission destination?** Where should quote requests go? Email only / CRM / both? | Determines form backend architecture | HIGH |
| 5 | **619 Lakeview Dr project** — 37-photo gallery. Can we get all images? | Portfolio completeness | MEDIUM |
| 6 | **New photos coming?** Any new projects to add before launch? | Content planning | MEDIUM |
| 7 | **Video embed?** Keep YouTube link or self-host Lake Tahoe project video? | Performance, user experience | LOW |
| 8 | **Steve headshot?** No owner photo currently on site. Add for E-E-A-T? | Google E-E-A-T ranking factor | MEDIUM |
| 9 | **Financing partner?** FAQ says "working with third-party lenders." Ready to name one? | Converts leads | LOW |
| 10 | **Blog migration?** All 12 blog posts stay? Any to update or remove? | Redirect planning, SEO | MEDIUM |

---

## PART 4 — COMPLETE TODO LIST (Ordered by Phase)

---

### PHASE 0 — SETUP & VERIFICATION
*Estimated time: 1–2 sessions*

- [ ] **0.1** — CLIENT: Verify CA license number (1009219 vs 1093798) — **BLOCKER**
- [ ] **0.2** — CLIENT: Confirm testimonial name Stephanie vs Carmel — **BLOCKER**
- [ ] **0.3** — CLIENT: Confirm domain stays brebuilders.com
- [ ] **0.4** — CLIENT: Confirm form submission destination (email / CRM)
- [ ] **0.5** — Create SKILL-01 `bre-builders-master` in Claude Skills
- [ ] **0.6** — Create SKILL-02 `bre-builders-seo` in Claude Skills
- [ ] **0.7** — Create SKILL-03 `bre-builders-images` in Claude Skills
- [ ] **0.8** — Create SKILL-04 `bre-builders-content` in Claude Skills
- [ ] **0.9** — Create SKILL-05 `bre-builders-deploy` in Claude Skills
- [ ] **0.10** — Create SKILL-06 `bre-builders-forms` in Claude Skills
- [ ] **0.11** — Fetch full 619 Lakeview Dr Glenbrook project gallery (37 images) and add to image registry
- [ ] **0.12** — Fetch remaining service pages not yet fully scraped (kitchen, decks, about, concrete, services)
- [ ] **0.13** — Initialize GitHub repo: `brebuilders-new`
- [ ] **0.14** — Initialize Next.js 14 project with Tailwind + Framer Motion
- [ ] **0.15** — Connect repo to Vercel, confirm staging URL is live

---

### PHASE 1 — FOUNDATION (Site Architecture)
*Estimated time: 2–3 sessions*

- [ ] **1.1** — Set up file/folder structure per recommended architecture:
  ```
  /app
    /page.tsx (home)
    /about/page.tsx
    /services/[slug]/page.tsx
    /projects/[slug]/page.tsx
    /service-areas/[location]/page.tsx
    /faq/page.tsx
    /blog/[slug]/page.tsx
    /contact/page.tsx
  /components
    /ui (Button, Card, Badge, etc.)
    /layout (Nav, Footer)
    /sections (Hero, Services, Portfolio, Testimonials, etc.)
    /forms (IntelligentQuoteForm)
    /gallery (LightboxGallery, ProjectGallery)
  /lib
    /projects.ts (project data)
    /services.ts (service data)
    /images.ts (image registry)
    /schema.ts (JSON-LD generators)
  /public/images (optimized copies of WP images)
  ```
- [ ] **1.2** — Build global Nav component (sticky, mobile-responsive, matches futuristic design)
- [ ] **1.3** — Build Footer component (4-column, contact info, license numbers)
- [ ] **1.4** — Set up global fonts (Cormorant Garamond, Syne, JetBrains Mono via Google Fonts)
- [ ] **1.5** — Set up CSS variables and Tailwind config (colors, spacing, transitions from prototype)
- [ ] **1.6** — Implement 301 redirect map in `next.config.js`
- [ ] **1.7** — Set up `next-sitemap` configuration
- [ ] **1.8** — Set up base JSON-LD schema generator (GeneralContractor schema on all pages)
- [ ] **1.9** — Set up `<head>` meta template (title, description, OG, canonical per page)
- [ ] **1.10** — Implement custom cursor component (from prototype)
- [ ] **1.11** — Implement noise overlay and grid background components

---

### PHASE 2 — HOME PAGE
*Estimated time: 1–2 sessions*

- [ ] **2.1** — Hero section: animated H1 (Cormorant), badge with live dot, stat block (35+ years, NV·CA dual licensed)
- [ ] **2.2** — Hero: background gradient + grid lines
- [ ] **2.3** — Hero: scroll indicator
- [ ] **2.4** — Services section: 8-card grid with hover interactions (from prototype)
- [ ] **2.5** — Portfolio preview: 3 featured projects with overlay
- [ ] **2.6** — Values section: 4 cards (Exceptional Service, Quality Focused, Competitive Pricing, Fair Warranty)
- [ ] **2.7** — Testimonials: 6-card grid with verified quotes
- [ ] **2.8** — Service areas ticker / area highlights
- [ ] **2.9** — CTA banner: "Now Accepting New Projects" → /contact
- [ ] **2.10** — Home page meta: title, description, OG image
- [ ] **2.11** — Home page schema: LocalBusiness + GeneralContractor + AggregateRating
- [ ] **2.12** — Framer Motion scroll-triggered animations on all sections
- [ ] **2.13** — Mobile responsive check (all breakpoints)
- [ ] **2.14** — Core Web Vitals check (LCP < 2.5s, CLS < 0.1)

---

### PHASE 3 — PORTFOLIO SYSTEM
*Estimated time: 2–3 sessions*

- [ ] **3.1** — Build `ProjectCard` component (image, type badge, title, location, hover overlay)
- [ ] **3.2** — Build `LightboxGallery` component (open, close, prev/next, keyboard nav, counter)
- [ ] **3.3** — Build `ProjectGallery` component (masonry layout, filter buttons by category)
- [ ] **3.4** — Build `/projects` hub page with filter system (All/Renovation/Repair/Custom/Commercial/Deck)
- [ ] **3.5** — Lake Tahoe Interior Renovation project page: all 16 images, captions, YouTube embed, project details
- [ ] **3.6** — Ripon CA Luxury Estate project page: 5 images, captions, all text content, in-page FAQ
- [ ] **3.7** — Rio Tinto Home Renovation project page
- [ ] **3.8** — Quaking Aspen Structural Repair project page
- [ ] **3.9** — Lake Tahoe Deck Balcony Repair project page
- [ ] **3.10** — Mine Shaft Framing & Shed project page
- [ ] **3.11** — Car Wash Construction project page
- [ ] **3.12** — Arun Hillside Deck Repair project page
- [ ] **3.13** — Charolette's Deck project page
- [ ] **3.14** — 619 Lakeview Dr Glenbrook project page (once all 37 images retrieved — **0.11**)
- [ ] **3.15** — All project pages: schema markup (CreativeWork + ImageObject per image)
- [ ] **3.16** — All project images: verified alt text and title from image registry (SKILL-03)
- [ ] **3.17** — Mobile responsive check for all gallery views

---

### PHASE 4 — SERVICE PAGES
*Estimated time: 3–4 sessions (13 service pages)*

For EACH service page, the checklist is:
- [ ] Build page with all extracted content (verbatim from SKILL-04)
- [ ] SEO meta: title, description, canonical (from SKILL-02)
- [ ] Service schema JSON-LD
- [ ] FAQ section with FAQ schema (if page has FAQs)
- [ ] Related projects section (link to relevant portfolio items)
- [ ] CTA to intelligent quote form (pre-selecting that service)
- [ ] Internal links to related services

**Individual service pages:**
- [ ] **4.1** — `/services/adu/` — ADU Builders Reno (highest SEO priority — existing #1 ranking)
- [ ] **4.2** — `/services/repairs/` — Structural Repairs (Page 1 ranking for "foundation repair in reno nv")
- [ ] **4.3** — `/services/repairs/foundation/` — Foundation Repair sub-page
- [ ] **4.4** — `/services/repairs/water-intrusion/` — Water Intrusion sub-page
- [ ] **4.5** — `/services/kitchen-bath/` — Kitchen & Bath Remodels
- [ ] **4.6** — `/services/new-home/` — Custom Home Building
- [ ] **4.7** — `/services/decks/` — Deck Construction & Repair
- [ ] **4.8** — `/services/additions/` — Home Additions
- [ ] **4.9** — `/services/lofts-condos/` — Lofts & Condo Remodels
- [ ] **4.10** — `/services/commercial/` — Commercial Hub
- [ ] **4.11** — `/services/retail/` — Retail Construction
- [ ] **4.12** — `/services/office/` — Office Construction
- [ ] **4.13** — `/services/warehouse/` — Warehouse & Metal Buildings
- [ ] **4.14** — `/services/concrete/` — Concrete Services
- [ ] **4.15** — `/services/hauling/` — Hauling & Removal
- [ ] **4.16** — `/services/` — Services hub (all services overview)
- [ ] **4.17** — `/residential-services/` — Residential hub page

---

### PHASE 5 — INTELLIGENT CONTACT FORM
*Estimated time: 1–2 sessions*

- [ ] **5.1** — Build multi-step form component: 4 steps (service → contact → service-specific → notes)
- [ ] **5.2** — Step 1: Service selector grid (9 service types with icons)
- [ ] **5.3** — Step 2: Contact fields (name, phone, email, city, contact time preference)
- [ ] **5.4** — Step 3 ADU: type, intended use, size, budget (dynamic)
- [ ] **5.5** — Step 3 Repair: issue checkboxes, property type, when noticed (full Fluent Forms spec)
- [ ] **5.6** — Step 3 Kitchen/Bath: room(s), scope, budget
- [ ] **5.7** — Step 3 Deck: new/repair, issues, location type
- [ ] **5.8** — Step 3 Custom Home: build type, bedrooms, budget, land ownership
- [ ] **5.9** — Step 3 Commercial: business type, scope, sqft
- [ ] **5.10** — Step 3 Concrete/Addition/Other: describe project textarea
- [ ] **5.11** — Step 4: Timeline, referral source, additional notes
- [ ] **5.12** — Progress bar (animated, 4 steps)
- [ ] **5.13** — Success state (animated checkmark + confirmation message)
- [ ] **5.14** — Form validation on all required fields
- [ ] **5.15** — API route `/api/contact` — receive form, send email to steve@brebuilders.com via Resend
- [ ] **5.16** — Lead email template to Steve (formatted summary of all form fields)
- [ ] **5.17** — Auto-reply email to client (confirmation of receipt + contact details)
- [ ] **5.18** — Optional: store leads in Supabase table `bre_leads` (if MASTER wants persistence)
- [ ] **5.19** — Test all service paths end-to-end

---

### PHASE 6 — COMPANY PAGES
*Estimated time: 1 session*

- [ ] **6.1** — `/about/` — Company history, Steve Rosenthal bio (if photo/bio provided by client), team, mission, values
- [ ] **6.2** — `/our-approach/` — Process steps, how BRE works
- [ ] **6.3** — `/faq/` — All 15 FAQs with FAQ schema, speakable markup
- [ ] **6.4** — `/careers/` — Basic page, "contact us" to apply
- [ ] **6.5** — Schema: Person schema for Steve on About page (E-E-A-T signal)

---

### PHASE 7 — SERVICE AREAS
*Estimated time: 1 session*

- [ ] **7.1** — `/service-areas/` — Hub page with all 8 areas
- [ ] **7.2** — `/service-areas/reno/` — Reno-specific page
- [ ] **7.3** — `/service-areas/sparks/` — Sparks-specific page
- [ ] **7.4** — `/service-areas/lake-tahoe/` — Lake Tahoe-specific page
- [ ] **7.5** — `/service-areas/carson-city/` — Carson City-specific page
- [ ] **7.6** — `/service-areas/truckee/` — Truckee-specific page
- [ ] **7.7** — `/service-areas/northern-california/` — NorCal hub page
- [ ] **7.8** — Each area page: LocalBusiness schema with geo coordinates + areaServed
- [ ] **7.9** — Internal links from service pages → relevant area pages

---

### PHASE 8 — BLOG MIGRATION
*Estimated time: 1–2 sessions*

- [ ] **8.1** — Set up MDX blog system in Next.js
- [ ] **8.2** — Migrate all 12 confirmed blog posts (content scraped and stored in master doc)
- [ ] **8.3** — Set up `/blog/` hub with category filters
- [ ] **8.4** — Each blog post: Article schema, author (Steve Rosenthal), datePublished, image
- [ ] **8.5** — Verify all 301 redirects from old WP blog URLs are working
- [ ] **8.6** — GSC: verify no indexed blog posts show 404 post-launch

---

### PHASE 9 — SEO FINAL LAYER
*Estimated time: 1 session*

- [ ] **9.1** — Verify all 301 redirects from WP → new site (every URL in redirect map)
- [ ] **9.2** — Generate XML sitemap with `next-sitemap` — all pages, correct priorities
- [ ] **9.3** — Create `robots.txt`
- [ ] **9.4** — Create `llms.txt` (AEO — AI search engine discoverability)
- [ ] **9.5** — Verify all page titles are unique (no duplicates)
- [ ] **9.6** — Verify all meta descriptions are under 160 chars
- [ ] **9.7** — Verify all canonical URLs are self-referencing and correct
- [ ] **9.8** — Verify all schema markup validates (Google Rich Results Test)
- [ ] **9.9** — Verify all images have alt text (no empty alt attributes)
- [ ] **9.10** — Verify Core Web Vitals on all key pages: LCP, CLS, INP
- [ ] **9.11** — Submit new sitemap to Google Search Console
- [ ] **9.12** — Submit to Bing Webmaster Tools
- [ ] **9.13** — Verify old GSC property (brebuilders.com) is connected to new site post-launch
- [ ] **9.14** — Monitor for ranking drops in first 2 weeks post-launch (ADU, foundation repair pages are highest risk)

---

### PHASE 10 — LAUNCH CHECKLIST
*Estimated time: 0.5 session*

- [ ] **10.1** — Full site crawl: no 404s, no broken images, no broken internal links
- [ ] **10.2** — Form end-to-end test: submit each service type, verify email receipt to steve@brebuilders.com
- [ ] **10.3** — Mobile test: all pages on iOS Safari and Android Chrome
- [ ] **10.4** — Page speed test: all critical pages score ≥ 85 on PageSpeed Insights
- [ ] **10.5** — SSL certificate active on brebuilders.com
- [ ] **10.6** — DNS cutover from WP/SiteGround → Vercel
- [ ] **10.7** — Verify brebuilders.com loads from Vercel post-DNS
- [ ] **10.8** — Verify all 301 redirects are live on production domain
- [ ] **10.9** — Verify Google Analytics 4 is tracking hits
- [ ] **10.10** — Verify Google Search Console picks up new sitemap
- [ ] **10.11** — Social links working: Facebook, LinkedIn, Yelp, Nevada Builders
- [ ] **10.12** — Take post-launch screenshot of homepage for records

---

### PHASE 11 — POST-LAUNCH (CONTENT GAPS)
*Scheduled after site is live — prioritize by conversion impact*

- [ ] **11.1** — Steve Rosenthal bio page with headshot (E-E-A-T signal — high SEO value)
- [ ] **11.2** — Before/After gallery component (high conversion for contractors)
- [ ] **11.3** — Service area pages: Graeagle, Carson Valley
- [ ] **11.4** — Pricing transparency page (ranges per service)
- [ ] **11.5** — Materials page (Trex, pressure-treated lumber, composite siding, waterproofing)
- [ ] **11.6** — Emergency repairs / urgent response landing page
- [ ] **11.7** — Financing page (formalize once partner confirmed)
- [ ] **11.8** — Permits & licensing page (dedicated)
- [ ] **11.9** — New blog posts targeting content gaps (custom homes, lofts, additions)
- [ ] **11.10** — Video transcript from Lake Tahoe YouTube for SEO

---

## PART 5 — SESSION-BY-SESSION EXECUTION PLAN

| Session | Phase | Deliverable | Duration Est. |
|---|---|---|---|
| S1 | Phase 0 | Get client answers, create all 6 skills, init repo + Next.js, Vercel connected | 2–3 hrs |
| S2 | Phase 1 | File structure, Nav, Footer, CSS vars, 301 redirects, base schema, meta template | 2–3 hrs |
| S3 | Phase 2 | Full home page (all sections + mobile + animations) | 3–4 hrs |
| S4 | Phase 3a | Portfolio system: components, hub page, Lake Tahoe + Ripon project pages | 3–4 hrs |
| S5 | Phase 3b | Remaining 7 portfolio project pages + lightbox polish | 2–3 hrs |
| S6 | Phase 4a | ADU, Repairs, Foundation, Water Intrusion service pages (highest SEO priority) | 3–4 hrs |
| S7 | Phase 4b | Kitchen/Bath, New Home, Decks, Additions, Lofts service pages | 3–4 hrs |
| S8 | Phase 4c | Commercial, Retail, Office, Warehouse, Concrete, Hauling service pages | 2–3 hrs |
| S9 | Phase 5 | Intelligent contact form complete (all service paths + API + email) | 3–4 hrs |
| S10 | Phase 6+7 | About, FAQ, Careers, Approach + all Service Area pages | 2–3 hrs |
| S11 | Phase 8 | Blog migration (all 12 posts + hub + schema) | 2–3 hrs |
| S12 | Phase 9+10 | SEO final layer + full launch checklist + DNS cutover | 2–3 hrs |

**Total estimated:** 10–12 focused sessions (each 2–4 hours)

---

## PART 6 — RULES FOR THIS PROJECT

These apply to every session. No exceptions.

1. **Read `bre-builders-master` skill at the start of every session.** Not optional.
2. **Never invent a price, timeline, license number, or specification.** Source from master doc or ask MASTER.
3. **The verified CA license discrepancy must be resolved in Phase 0** before it appears anywhere on the site.
4. **Do not touch the live WordPress site.** The new site is built in parallel. DNS cutover happens only at Phase 10.
5. **All image alt text must come from SKILL-03 (image registry).** Do not write new alt text from memory.
6. **All page copy must come from SKILL-04 (content).** Do not paraphrase or rewrite verified quotes, testimonials, or FAQs.
7. **301 redirects must be implemented before DNS cutover.** A missing redirect is a lost ranking.
8. **ADU page is the highest-priority SEO page** — it holds the #1 ranking with AI Overview. The new ADU page must match or exceed the keyword density and structure of the existing page before the switch.
9. **Do not rebuild what works.** The existing rankings are real. The goal is to port them cleanly, not re-invent.
10. **Every session ends with a SKILL UPDATE flag** for anything discovered that should go into a skill file.

---

## PART 7 — RISK REGISTER

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| ADU #1 ranking drops post-launch | Medium | High | Match existing ADU page structure exactly, implement 301, monitor GSC daily for 2 weeks |
| CA license number wrong on site | High | High | **BLOCKER — resolve in Phase 0 before any page is built** |
| Missing 301 redirects → 404s | Medium | High | Complete redirect map in Phase 1 before any other page |
| Form emails not arriving to Steve | Low | High | Test end-to-end in Phase 5, confirm before launch |
| Image URLs break (WP stays live briefly) | Low | Medium | Download all critical images to `/public/images/` in repo during Phase 3 |
| Google re-indexes old WP URLs after launch | Low | Medium | Keep WP running for 30 days post-launch minimum, 301s handle this |
| Mobile layout broken on key pages | Medium | Medium | Responsive check at end of each phase |
| Build deploy fails at launch | Low | High | Build locally before every push, never push broken build |

---

## PART 8 — QUICK REFERENCE CARD

```
COMPANY:     Blue Reef Enterprises, LLC (BRE Builders / Blue Reef Builders)
OWNER:       Steve Rosenthal
PHONE:       (775) 391-4517
EMAIL:       steve@brebuilders.com
ADDRESS:     2600 Mill St #400, Reno, NV 89502
NV LICENSE:  #0085999  ← VERIFIED
CA LICENSE:  #1009219 OR #1093798  ← MUST VERIFY WITH CLIENT
FOUNDED:     1989
EXPERIENCE:  35+ years  ← USE THIS NUMBER, NOT 20 OR 30
AREAS:       Reno · Sparks · Lake Tahoe · Carson City · Truckee · Graeagle · Northern CA
TOP RANKING: #1 "adu builders reno" with Google AI Overview
REPO:        TBD (create in Phase 0)
STAGING:     TBD (Vercel, create in Phase 0)
LIVE SITE:   https://brebuilders.com (WordPress — DO NOT TOUCH during build)
```
