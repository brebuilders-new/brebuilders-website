---
name: bre-builders-seo
description: SEO and AEO strategy for the BRE Builders website rebuild. Read before writing any page copy, meta tags, schema markup, or URLs. Contains verified keyword map, title formulas, meta descriptions, schema templates, 301 redirect map, and AEO rules. Trigger on: any SEO work, meta writing, schema markup, page content, sitemap, redirects, rankings, GSC for BRE Builders.
---

# BRE Builders — SEO & AEO Strategy Skill

**Read bre-builders-master first, then this skill.**

---

## VERIFIED RANKINGS TO PROTECT

| Keyword | Position | URL (old → new) |
|---|---|---|
| adu builders reno | **#1 + Google AI Overview** | /adus/ → /services/adu/ |
| adu builders reno nv | Page 1 | /adus/ → /services/adu/ |
| foundation repair in reno nv | Page 1 | /repairs/ → /services/repairs/ |
| northern california construction services | Page 1 | General site |

**ADU page is #1 priority.** Any change to that page must be reviewed by MASTER before deploy.

---

## KEYWORD MAP — TARGET PER PAGE

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| / (Home) | general contractor reno nv | licensed contractor reno, home builder reno nv, construction company reno |
| /services/adu/ | adu builders reno nv | accessory dwelling unit reno, adu construction nevada, adu cost reno, $75k adu reno |
| /services/repairs/ | structural repairs reno nv | foundation repair reno, home repair reno nv, structural contractor reno |
| /services/repairs/foundation/ | foundation repair reno nv | foundation issues reno, foundation contractor nevada |
| /services/repairs/water-intrusion/ | water intrusion repair reno | moisture issues reno nv, waterproofing contractor reno |
| /services/kitchen-bath/ | kitchen remodel reno nv | bathroom renovation reno, kitchen contractor reno nv |
| /services/new-home/ | custom home builder reno nv | new home construction nevada, custom homes lake tahoe |
| /services/decks/ | deck builder reno nv | deck repair lake tahoe, deck contractor reno, deck builder sparks |
| /services/commercial/ | commercial contractor reno nv | tenant improvements reno, commercial construction sparks |
| /services/concrete/ | concrete contractor reno nv | concrete slab reno, commercial concrete reno |
| /service-areas/reno/ | general contractor reno nevada | construction company reno nv |
| /service-areas/lake-tahoe/ | contractor lake tahoe nv | construction lake tahoe, remodel lake tahoe |
| /faq/ | bre builders faq | blue reef builders questions, reno contractor faq |
| /blog/how-to-add-adu-nevada/ | how to build adu nevada | nevada adu laws, adu cost reno 2025 |

---

## TITLE TAG FORMULAS

**Home:**
`General Contractor Reno NV – Home & Commercial | Blue Reef Builders`

**Service pages:**
`[Service Name] in [City], NV | Blue Reef Builders – Licensed Since 1989`
Example: `ADU Builders Reno NV | $75K–$300K Complete Builds | BRE Builders`

**Portfolio pages:**
`[Project Name] – [City, State] | BRE Builders Portfolio`
Example: `Lake Tahoe Full Home Renovation | BRE Builders Portfolio`

**Blog posts:**
`[Post Title] | BRE Builders Reno NV`

**Service area pages:**
`[City] General Contractor | Licensed Residential & Commercial | BRE Builders`

**Rules:**
- Max 60 characters
- Always include city + state on local pages
- Always end with brand name
- Include license year or price range where it fits naturally

---

## META DESCRIPTION FORMULAS

**Service pages:**
`[Brand] provides [service] in [city], NV and [region]. Licensed [NV/CA]. [Key differentiator + CTA]. Free estimates.`
Example: `BRE Builders provides ADU construction in Reno, NV. Licensed in Nevada & California. $75K–$300K complete builds, permit-ready plans. Free quote in 24 hours.`

**Portfolio pages:**
`[Brief project description]. Completed by Blue Reef Builders – licensed general contractor in [city/region]. View the full project gallery.`

**Blog posts:**
`[Lead sentence from post]. Expert advice from Blue Reef Builders – licensed contractor serving Reno, NV since 1989.`

**Rules:**
- Max 155 characters
- Include primary keyword naturally
- Include location
- Include a specific action or differentiator
- Never start with brand name

---

## SCHEMA MARKUP TEMPLATES

### Base Schema (ALL pages — in layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://brebuilders.com/#business",
  "name": "Blue Reef Builders",
  "alternateName": ["BRE Builders", "Blue Reef Enterprises"],
  "url": "https://brebuilders.com",
  "telephone": "+17753914517",
  "email": "brebuilders@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2600 Mill St #400",
    "addressLocality": "Reno",
    "addressRegion": "NV",
    "postalCode": "89502",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.5296,
    "longitude": -119.8138
  },
  "foundingDate": "1989",
  "areaServed": [
    {"@type": "City", "name": "Reno", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "City", "name": "Sparks", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "Place", "name": "Lake Tahoe, NV"},
    {"@type": "City", "name": "Carson City", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "City", "name": "Truckee", "containedInPlace": {"@type": "State", "name": "California"}},
    {"@type": "Place", "name": "Northern California"}
  ],
  "sameAs": [
    "https://www.facebook.com/BlueReefBuilds/",
    "https://www.linkedin.com/in/steven-rosenthal-94223b15",
    "https://www.yelp.com/biz/blue-reef-enterprises-reno"
  ]
}
```
**Note:** Add CA license to hasCredential array ONLY after client confirms correct number.

### Service Page Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {"@id": "https://brebuilders.com/#business"},
  "areaServed": [{"@type": "City", "name": "Reno"}, {"@type": "State", "name": "Nevada"}],
  "serviceType": "[Service Type]",
  "description": "[Service description]",
  "url": "https://brebuilders.com/services/[slug]/"
}
```

### FAQ Schema (FAQ page + service pages with FAQs)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```

### Portfolio/Project Schema
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "[Project Title]",
  "creator": {"@id": "https://brebuilders.com/#business"},
  "locationCreated": {"@type": "Place", "name": "[City, State]"},
  "description": "[Project description]",
  "image": ["[image-url-1]", "[image-url-2]"]
}
```

### Review Schema (embed in home + about)
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {"@type": "Person", "name": "[Name]"},
  "reviewBody": "[Quote text]",
  "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
  "itemReviewed": {"@id": "https://brebuilders.com/#business"}
}
```

---

## AEO RULES (Answer Engine Optimization)

These rules get BRE cited by ChatGPT, Perplexity, Gemini, Google AI Overviews.

1. **Answer-first structure** — Lead every service section with the direct answer to the most common question. For ADUs: "ADU costs in Reno range from $75,000 to $300,000 for complete builds."

2. **Speakable markup** — Add `speakable` schema to FAQ answers and key stat blocks.

3. **FAQ on every service page** — Minimum 3 FAQs per service page with FAQ schema.

4. **llms.txt** — Create at /public/llms.txt listing all services, facts, and areas served. Allows AI crawlers to read site summary.

5. **Precise numbers always** — "$175 per square foot" beats "affordable pricing." Specific numbers get cited by AI.

6. **Location + service in every heading** — "ADU Builders Reno Nevada" not just "ADU Builders."

7. **Licensing in content** — "Licensed in Nevada (#0085999) and California" — appears in first 100 words of key pages.

---

## IMAGE SEO RULES

All image attributes must follow this formula:
- `alt`: [what is shown] + [service/project type] + [city, state]
- `title`: [project name or service] + [city] + [brand]

Examples:
- ✅ `alt="Lake Tahoe Full Home Renovation Completed Exterior – BRE Builders Zephyr Cove NV"`
- ✅ `title="Lake Tahoe Interior Renovation Project – BRE Builders Portfolio"`
- ❌ `alt="renovation"` (too vague)
- ❌ `alt="img-01"` (useless)

Use image registry in bre-builders-images skill for all verified alt text.

---

## SITEMAP PRIORITIES

```
/                       priority: 1.0, changefreq: weekly
/services/adu/          priority: 0.9, changefreq: monthly   ← #1 ranking
/services/repairs/      priority: 0.9, changefreq: monthly   ← Page 1 ranking
/contact/               priority: 0.9, changefreq: monthly
/projects/              priority: 0.8, changefreq: monthly
/services/*             priority: 0.8, changefreq: monthly
/projects/*             priority: 0.7, changefreq: monthly
/service-areas/*        priority: 0.7, changefreq: monthly
/blog/*                 priority: 0.6, changefreq: weekly
/faq/                   priority: 0.7, changefreq: monthly
/about/                 priority: 0.6, changefreq: monthly
```

---

## POST-LAUNCH GSC MONITORING

Week 1–2 after DNS cutover — check daily:
1. Search Console → Coverage — no spike in 404s
2. Search Console → Performance — no drop in impressions for "adu builders reno"
3. Search Console → Sitemaps — new sitemap indexed
4. Manual Google search: `site:brebuilders.com` — pages being indexed
5. Manual Google search: `adu builders reno` — confirm #1 position holds

**If ranking drops:** First check that 301 from /adus/ → /services/adu/ is working. Then check that ADU page content matches old page depth.
