---
name: bre-builders-master
description: Master skill for the BRE Builders website rebuild project. MUST be read at the start of every session involving this project. Contains verified company facts, tech stack, session checklist, and all project-level rules. Trigger on: any BRE Builders work, brebuilders.com, Blue Reef Builders, Steve Rosenthal, any session involving this site rebuild.
---

# BRE Builders — Master Project Skill

**Read this FIRST every session. Then read the relevant sub-skill.**

---

## SESSION START CHECKLIST

Before touching any file:
- [ ] Pull latest from main: `git pull origin main`
- [ ] Check staging URL is live: https://brebuilders-website.vercel.app
- [ ] Read the relevant sub-skill (SEO, images, content, forms, deploy)
- [ ] Never put CA license 1009219 on NV pages — it's the CA number

---

## VERIFIED COMPANY FACTS — ALL CONFIRMED

| Field | Verified Value | Notes |
|---|---|---|
| Legal Name | Blue Reef Enterprises, LLC | |
| DBA | BRE Builders / Blue Reef Builders | |
| Owner | Steve Rosenthal | |
| Phone | (775) 391-4517 | |
| Primary Email | brebuilders@gmail.com | All form submissions go here |
| Steve Email | steve@brebuilders.com | CC on all forms |
| Chris Email | chris@brebuilders.com | CC on all forms |
| Sean Email | sean@brebuilders.com | CC on all forms |
| Dev/Test Email | ifyougetlockedout@protonmail.com | TESTING ONLY — no real emails |
| Address | 2600 Mill St #400, Reno, NV 89502 | |
| Founded | 1989 | |
| Experience | **35+** years — USE THIS | Not 20, not 30 |
| **Nevada License** | **#0085999** | ✅ VERIFIED |
| **California License** | **#1093798** | ✅ VERIFIED — CA only |

**License display rule:**
- Nevada pages → "NV License #0085999"
- California pages → "CA License #1093798"  
- Both states / footer → "NV #0085999 · CA #1093798"
- NEVER show both on same line as if they're the same number

---

## EMAIL ROUTING — CONFIRMED

```
PRODUCTION (live site):
  To:      brebuilders@gmail.com
  CC:      steve@brebuilders.com, chris@brebuilders.com, sean@brebuilders.com
  From:    BRE Builders <no-reply@brebuilders.com>
  Reply-To: brebuilders@gmail.com

TESTING / DEVELOPMENT:
  To:      ifyougetlockedout@protonmail.com
  CC:      (none — no internal team during testing)
  From:    BRE Builders <no-reply@brebuilders.com>

ENVIRONMENT VARIABLE SETUP:
  NODE_ENV=development → use dev email only
  NODE_ENV=production  → use full team routing
```

---

## TECH STACK

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Cormorant Garamond + Syne + JetBrains Mono |
| Images | next/image with WebP |
| Forms | React Hook Form + /api/contact route |
| Email | Resend (brebuilders@gmail.com primary) |
| Analytics | @vercel/analytics/next (already in project) |
| Hosting | Vercel — brebuilders team |
| CMS | Static MDX for blog |
| Schema | Inline JSON-LD per page |
| Sitemap | next-sitemap |

---

## REPO & DEPLOYMENT

```
Repo:      https://github.com/brebuilders-new/brebuilders-website
Git Token: [TOKEN_IN_PROJECT_GIT_FILE]
Git user:  BRE Builders <brebuilders@gmail.com>
Branch:    main

Vercel Team:    brebuilders
Vercel Project: prj_sUYTAW11av5uhg8EAVQUM8AQdoZ0
Vercel Token:   [TOKEN_IN_PROJECT_VERCEL_FILE — once added]
Staging URL:    https://brebuilders-website.vercel.app
Live Domain:    brebuilders.com (DNS cutover at Phase 10 ONLY)
```

---

## URL ARCHITECTURE (New Site)

```
/                           Home
/about/                     About
/our-approach/              Our Approach
/careers/                   Careers (uses Form 6 — job application)
/services/                  Services hub
/services/adu/              ADU ← #1 ranking, highest priority
/services/kitchen-bath/     Kitchen & Bath
/services/new-home/         Custom Home (uses Form 7)
/services/additions/        Additions ← BIGGEST CTR fix needed
/services/decks/            Decks
/services/lofts-condos/     Lofts & Condo Remodels
/services/repairs/          Structural Repairs (uses Form 8)
/services/repairs/foundation/         Foundation (uses Form 9)
/services/repairs/water-intrusion/    Water Intrusion (uses Form 10)
/services/concrete/         Concrete
/services/hauling/          Hauling & Removal ← broken CTR fix needed
/services/commercial/       Commercial hub
/services/retail/           Retail
/services/office/           Office
/services/warehouse/        Warehouse & Metal Buildings
/projects/                  Portfolio hub
/projects/[slug]/           Individual project pages
/service-areas/             Service areas hub
/service-areas/reno/        through /service-areas/northern-california/
/service-areas/lake-tahoe/adu/  ← new page needed (192 impressions pos 7.5)
/faq/                       FAQ
/blog/                      Blog hub
/blog/[slug]/               Blog posts
/contact/                   Contact / Quote form
```

---

## WHAT NEVER TO DO

- Never use CA license 1009219 on Nevada-only pages
- Never invent a price, timeline, or fact — source from bre-builders-content skill
- Never send emails to steve/chris/sean/brebuilders in testing — use protonmail only
- Never push broken build to main
- Never touch brebuilders.com WordPress during build
- Never use "20 years" or "30 years" — always "35+" or "Since 1989"
- Never write alt text from memory — use bre-builders-images skill

---

## GSC KEY FINDINGS (April 2026)

- Total impressions: 68,624 / Total clicks: 442 / Overall CTR: 0.64%
- Mobile CTR (1.09%) is 2.4x better than desktop (0.46%)
- /additions/ = 19,319 impressions, 0.11% CTR — biggest single fix
- /hauling-removal/ = 2,482 impressions, 0.04% CTR — broken
- /kitchen/ = 2,198 impressions, 0.05% CTR — broken
- Spam pages from malware: must return 410 Gone

---

## SESSION END — ALWAYS DO THIS

1. `npm run build` — 0 errors before commit
2. `git add [specific files]` — never `git add -A` blindly
3. `git commit -m "feat/fix/content/seo: [what]"`
4. `git push origin main`
5. Flag SKILL UPDATE items
