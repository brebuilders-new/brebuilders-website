---
name: bre-builders-master
description: Master skill for the BRE Builders website rebuild project. MUST be read at the start of every session involving this project. Contains verified company facts, tech stack, session checklist, and all project-level rules. Trigger on: any BRE Builders work, brebuilders.com, Blue Reef Builders, Steve Rosenthal, any session involving this site rebuild.
---

# BRE Builders — Master Project Skill

**Read this FIRST every session. Then read the relevant sub-skill.**

---

## SESSION START CHECKLIST

Before touching any file:
- [ ] Confirm task scope — what exactly are we building/fixing this session?
- [ ] Confirm CA license number has been verified (1009219 vs 1093798) — if not, don't put it on any page yet
- [ ] Check if repo has any open issues or pending PRs
- [ ] Confirm staging URL is live: https://brebuilders-website.vercel.app (or current staging URL)
- [ ] Read the relevant sub-skill for the session work (SEO, images, content, forms, deploy)

---

## VERIFIED COMPANY FACTS

| Field | Verified Value | Source |
|---|---|---|
| Legal Name | Blue Reef Enterprises, LLC | Live site footer |
| DBA | BRE Builders / Blue Reef Builders | Throughout site |
| Owner | Steve Rosenthal | Site + memory |
| Phone | (775) 391-4517 | Live site footer |
| Email (primary) | brebuilders@gmail.com | Client provided |
| Email (Steve) | steve@brebuilders.com | Live site footer |
| Email (CC) | chris@[domain], sean@[domain] — verify exact emails | Client provided context |
| Address | 2600 Mill St #400, Reno, NV 89502 | Live site footer |
| Founded | 1989 | Live site |
| Years Experience | **35+** — USE THIS. Not 20, not 30 | Site says "Since 1989" |
| Nevada License | **#0085999** ← VERIFIED | Live site footer |
| California License | **⚠️ UNVERIFIED — confirm before publishing** | Footer: 1009219 / Portfolio: 1093798 |
| Current WP Site | https://brebuilders.com | Live |
| New Repo | https://github.com/brebuilders-new/brebuilders-website | Created Phase 0 |

**⚠️ CRITICAL FLAG — Do NOT put CA license on any page until client confirms correct number.**

---

## TECH STACK

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG/SSR, SEO-friendly |
| Styling | Tailwind CSS | Utility-first |
| Animations | Framer Motion | For hero, scroll, galleries |
| Fonts | Cormorant Garamond + Syne + JetBrains Mono | Google Fonts |
| Images | next/image with WebP | Performance + CWV |
| Forms | React Hook Form + /api/contact route | No WP dependency |
| Email | Resend (brebuilders@gmail.com primary, cc steve + chris + sean) | Form submissions |
| Leads DB | Supabase (optional, TBD with client) | Lead storage |
| Hosting | Vercel | Auto-deploy from GitHub |
| CMS | Static MDX for blog | Keep simple |
| Schema | Inline JSON-LD per page | Full control |
| Sitemap | next-sitemap | Auto-generated |
| Analytics | Google Analytics 4 | Existing GSC connected |

---

## REPO & DEPLOYMENT

```
Repo:     https://github.com/brebuilders-new/brebuilders-website
Token:    [TOKEN_IN_PROJECT_GIT_FILE]  (in /mnt/project/git)
Git user: BRE Builders <brebuilders@gmail.com>
Branch:   main (production) / dev (staging)
Vercel:   https://vercel.com/brebuilders
Staging:  https://brebuilders-website.vercel.app (post-Vercel-connect)
Live:     https://brebuilders.com (DNS cutover at Phase 10 ONLY)
```

**NEVER push directly to main without local build passing.**
**DO NOT touch the live WordPress site at brebuilders.com during build.**

---

## EMAIL ROUTING

All form submissions route to:
- **To:** brebuilders@gmail.com
- **CC:** steve@brebuilders.com, chris@[verify], sean@[verify]
- **From:** no-reply@brebuilders.com (via Resend)
- **Reply-To:** brebuilders@gmail.com

---

## URL ARCHITECTURE (New Site)

```
/                           Home
/about/                     About
/our-approach/              Our Approach
/careers/                   Careers
/services/                  Services hub
/services/adu/              ADU (HIGHEST SEO PRIORITY — #1 ranking)
/services/kitchen-bath/     Kitchen & Bath
/services/new-home/         Custom Home Building
/services/additions/        Additions
/services/decks/            Decks
/services/lofts-condos/     Lofts & Condo Remodels
/services/repairs/          Structural Repairs (Page 1 ranking)
/services/repairs/foundation/         Foundation Repair
/services/repairs/water-intrusion/    Water Intrusion
/services/concrete/         Concrete
/services/hauling/          Hauling & Removal
/services/commercial/       Commercial hub
/services/retail/           Retail
/services/office/           Office
/services/warehouse/        Warehouse & Metal Buildings
/projects/                  Portfolio hub
/projects/[slug]/           Individual project pages
/service-areas/             Service areas hub
/service-areas/reno/        Reno
/service-areas/sparks/      Sparks
/service-areas/lake-tahoe/  Lake Tahoe
/service-areas/carson-city/ Carson City
/service-areas/truckee/     Truckee
/service-areas/northern-california/ Northern CA
/faq/                       FAQ
/blog/                      Blog hub
/blog/[slug]/               Blog posts
/contact/                   Contact / Quote form
```

---

## 301 REDIRECT MAP (Implement in next.config.js Phase 1)

```
/adus/                    → /services/adu/
/repairs/                 → /services/repairs/
/repairs/foundation-repair-and-foundation-issues-in-reno-nv/ → /services/repairs/foundation/
/repairs/water-intrusion-and-moisture-issues-in-reno-nv/ → /services/repairs/water-intrusion/
/concrete/                → /services/concrete/
/kitchen/                 → /services/kitchen-bath/
/decks/                   → /services/decks/
/new-home/                → /services/new-home/
/additions/               → /services/additions/
/retail/                  → /services/retail/
/office/                  → /services/office/
/warehouse-metal-buildings/ → /services/warehouse/
/hauling-removal/         → /services/hauling/
/lofts-and-condo-remodels/ → /services/lofts-condos/
/frequently-asked-questions-bre-builders/ → /faq/
/blogs/                   → /blog/
/project-type/home-remodeling/ → /services/
/project-type/commercial-tenant-improvements/ → /services/commercial/
/project-type/custom-home-building/ → /services/new-home/
/portfolio/lake-tahoe-interior-renovation-project/ → /projects/lake-tahoe-interior-renovation/
/portfolio/ripon-california-estate-project/ → /projects/ripon-estate/
/portfolio/rio-tinto-home-renovation-project/ → /projects/rio-tinto-renovation/
/portfolio/quaking-aspen-structural-repair/ → /projects/quaking-aspen-repair/
/portfolio/lake-tahoe-deck-balcony-structural-repair/ → /projects/lake-tahoe-deck-repair/
/portfolio/mine-shaft-framing-shed-construction-reno-nv/ → /projects/mine-shaft-framing/
/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation/ → /projects/car-wash-reno/
/portfolio/arun-hillside-deck-repair-lake-tahoe-nv/ → /projects/arun-deck-repair/
/portfolio/charolettes-deck/ → /projects/charolettes-deck/
/service-areas/nevada/    → /service-areas/
/service-areas/northern-california/ → /service-areas/northern-california/
/residential-services/    → /services/
```

---

## VERIFIED SEO RANKINGS (Protect These)

| Keyword | Position | Page |
|---|---|---|
| adu builders reno | **#1 + Google AI Overview** | /services/adu/ |
| foundation repair in reno nv | **Page 1** | /services/repairs/ |
| northern california construction services | **Page 1** | General |

**Rule:** The ADU page is the highest-value SEO asset on this site. The new `/services/adu/` page must replicate the keyword density, FAQ structure, and content depth of the existing `/adus/` page EXACTLY before DNS cutover.

---

## WHAT NEVER TO DO

- Never invent a price, timeline, license number, or fact. Source from bre-builders-content skill.
- Never put CA license on any page until client confirms correct number.
- Never change existing 301 redirects once set — breaking them kills rankings.
- Never push a broken build to main — it blocks all deploys.
- Never touch brebuilders.com WordPress site during build.
- Never use "20 years" or "30 years" — always "35+" or "Since 1989."
- Never write alt text from memory — use bre-builders-images skill registry.
- Never write testimonials from memory — use bre-builders-content skill exactly.

---

## SESSION END — ALWAYS DO THIS

1. Run `npm run build` — fix all errors before committing
2. Commit with descriptive message: `feat: [what was built]` or `fix: [what was fixed]`
3. Push to `dev` branch first, verify staging
4. Flag any SKILL UPDATE needed

**SKILL UPDATE format:**
```
SKILL UPDATE: bre-builders-master → [finding]
```
