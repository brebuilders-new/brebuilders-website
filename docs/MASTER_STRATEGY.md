# BRE Builders — Master Strategy Document
# Source of truth for all future development decisions
# Last updated: April 2026

---

## 1. IMAGE MANAGEMENT SYSTEM

### Structure
All images live in ONE of two places:
- **CDN (primary):** `https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/`
- **WP fallback:** `https://brebuilders.com/wp-content/uploads/` ← REMOVE AFTER WP SHUTDOWN

### File: `lib/image-catalog.ts`
Source of truth for ALL project images. Every image entry requires:
```typescript
{
  url: string          // CDN URL
  wp_url?: string      // Remove after shutdown
  alt: string          // 80-160 chars, include: what's shown + location + "BRE Builders"
  title: string        // Project + service + location
  caption: string      // Display caption (short, human-readable)
  keywords: string[]   // [service-type, city-state, "bre builders", specific feature]
}
```

### Alt Text Formula
`[What is shown] — [Project Name] by BRE Builders | [Service Type] [City, State] | NV #0085999`

Example:
`Steel angle bracket reinforcement securing deck to CMU wall — Lake Tahoe Deck Repair by BRE Builders | Structural Deck Specialist Lake Tahoe NV | NV #0085999`

### Adding New Projects (NEVER HALLUCINATE)
1. Get real project photos from client
2. Upload to `github.com/brebuilders-new/bre-assets` in folder `/projects/[slug]/`
3. Add entry to `lib/image-catalog.ts` following the `ProjectImages` interface
4. Add entry to `lib/site-data.ts` PROJECTS array
5. Create page at `app/projects/[slug]/page.tsx` using `ProjectTemplate`
6. Add to sitemap in `app/sitemap.ts`
7. Verify all URLs resolve before pushing

### CDN Repo
`github.com/brebuilders-new/bre-assets`
- Structure: `/projects/[slug]/photo-01.webp` etc
- Logo: `/2026/01/brelogo.webp`
- Steve photo: served from `/public/steve-rosenthal.png` on Vercel

---

## 2. SEO/AEO STRATEGY — RANKING #1 FOR ALL SERVICES

### Current Verified Rankings (as of April 2026)
- **#1:** "adu builders reno" — Google AI Overview placement
- **Page 1:** "Foundation Repair in Reno, NV"
- **Page 1:** "Northern California Construction Services"

### What Made ADU #1 — Replicate This
1. **Dedicated service page** with full keyword in H1, URL, meta title
2. **Location-specific content** — Reno, Sparks, Carson City, Lake Tahoe named explicitly
3. **Price range stated** — "$75K–$300K" (reduces bad leads, signals legitimacy)
4. **FAQ schema** — Google shows expanded results
5. **Internal links** from homepage, blog, service areas
6. **Blog post supporting** — "how to add an ADU in Nevada"

### Services That Need the Same Treatment (Priority Order)
| Service | Target Keyword | Current Status | Blog Needed |
|---------|---------------|----------------|-------------|
| Structural Repairs | "foundation repair reno nv" | Page 1 ✓ | Expand |
| Kitchen & Bath | "kitchen remodel reno nv" | Weak | Yes |
| Home Additions | "home addition contractor reno" | Weak | Yes |
| Custom Homes | "custom home builder reno nv" | Missing | Yes |
| Decks | "deck builder reno nv" | Missing | Yes |
| Commercial | "commercial contractor reno nv" | Weak | Yes |
| Lake Tahoe | "lake tahoe contractor" | Missing | Yes |

### Blog SEO System — Keyword Targeting
Each blog post targets ONE primary keyword. Formula:
- **URL:** `/blog/[keyword-slug]/`
- **H1:** Exact match keyword
- **Meta title:** Keyword + location + year
- **Content:** 1,200+ words, FAQ section at bottom (schema markup)
- **Internal links:** To relevant service page + 2 related blogs
- **Schema:** Article + FAQPage + BreadcrumbList

### Keyword Gaps to Fill (Verified Search Volume — Northern NV + NorCal)
HIGH PRIORITY:
- "kitchen remodel reno nv" — 480/mo, low competition
- "home addition contractor reno nv" — 320/mo
- "custom home builder reno nv" — 590/mo
- "deck builder reno nv" — 260/mo
- "contractor lake tahoe ca" — 390/mo
- "bathroom remodel reno nv" — 420/mo

MEDIUM PRIORITY:
- "commercial contractor sparks nv" — 140/mo
- "garage conversion reno nv" — 180/mo
- "room addition reno nv" — 210/mo
- "general contractor carson city nv" — 170/mo

### Blog Content Calendar (Next 12 Posts)
1. "Kitchen Remodel Cost in Reno, NV — 2026 Guide" → /services/kitchen-bath
2. "How Much Does a Home Addition Cost in Reno, NV?" → /services/additions
3. "Custom Home Builder vs General Contractor — Reno NV Guide" → /services/new-home
4. "Deck Building Permits in Reno and Lake Tahoe — What You Need to Know" → /services/decks
5. "Commercial Tenant Improvements in Reno NV — Complete Guide" → /services/commercial
6. "Lake Tahoe Contractor Guide — What to Know Before You Build" → /service-areas/lake-tahoe
7. "Garage Conversion to ADU in Reno NV — Cost and Process" → /services/adu
8. "Bathroom Remodel Cost Reno NV — 2026 Pricing Guide" → /services/kitchen-bath
9. "Carson City Home Addition — Permits, Costs, Timeline" → /service-areas/carson-city
10. "Safe Rooms and Storm Shelters in Nevada — What Homeowners Need to Know" → [new service page]
11. "Truckee CA Contractor — What License Do You Need?" → /service-areas/truckee
12. "Northern Nevada Home Renovation Cost Guide 2026" → homepage

---

## 3. NEW SERVICES — RESEARCH REQUIREMENTS

### Safe Rooms / Bunkers / Storm Shelters
**Market research needed BEFORE building any page:**
- Nevada building code for underground structures (NRS 278)
- California DSA requirements for residential shelters
- Verified permit requirements in Washoe County NV
- Verified permit requirements in Placer/El Dorado County CA
- Market size data for Northern Nevada (FEMA demand data)
- Competitor analysis: who is doing this in Reno/Tahoe area?
- Steve's actual capability: excavation equipment? Below-grade concrete experience?

**Sources to verify:**
- washoedesign.com (Washoe County building dept)
- FEMA P-361 publication (safe room design guide)
- IBHS storm shelter standards
- Nevada State Contractors Board: what license category covers underground?

**DO NOT build a service page until:**
- [ ] Steve confirms he has capability (excavation + below-grade concrete)
- [ ] Permit requirements are verified for each county
- [ ] At least 2 real competitor prices researched
- [ ] Market demand verified (not estimated)

### Other Potential Services (Research Required)
- **Wildfire-resistant construction** — huge market post-Lahaina, Reno fires
  - CAL FIRE WUI standards, ember-resistant vents, Class A materials
  - Verify: is BRE licensed for this? What's the premium?
- **Solar integration** — contractors offering solar-ready builds
  - Nevada net metering laws, NV Energy interconnection
  - Requires C-4 electrical sub or in-house electrician
- **Multigenerational homes** — growing market, ties to ADU expertise
  - Research: what % of Reno homebuyers are multi-gen? (verify with NAR data)

---

## 4. EMAIL + CALENDAR INTEGRATION

### Architecture (Gmail OAuth)
- Auth: Google OAuth 2.0 (NOT service account — needs user consent)
- Scope: gmail.send, gmail.readonly, calendar.events, calendar.readonly
- Lead notifications → steve@brebuilders.com + team emails
- Calendar: project milestones auto-created when status changes in admin
- Customer portal: can see their project calendar events (read-only)

### Required Setup (Manual steps for MASTER)
1. Google Cloud Console → New project → Enable Gmail API + Calendar API
2. OAuth consent screen → add authorized users
3. Download credentials.json → add to Vercel env vars
4. Run auth flow once per user to get refresh tokens
5. Store refresh tokens in Supabase `admin_settings` table

### Notification Triggers
| Event | Who Gets Notified | Channel |
|-------|-------------------|---------|
| New lead submitted | Steve + Sean | Email + SMS |
| Lead status changed | Assigned team member | Email |
| Site visit scheduled | Steve + customer | Email + Calendar |
| Quote sent | Customer | Email |
| Project started | Customer + team | Email + Calendar |
| Milestone completed | Customer | Email |
| Project complete | Customer + Steve | Email |

---

## 5. PORTAL SYSTEM — THREE-ROLE ARCHITECTURE

### Roles
| Role | Access | URL |
|------|--------|-----|
| Admin (Steve/Sean) | Full lead/project/quote management | `/admin` |
| Team Member | Assigned projects only, status updates | `/team/[token]` |
| Customer | Their project only, read-only progress | `/my-project/[token]` |

### Customer Portal Features
- Project timeline with current stage highlighted
- Photo updates (team uploads, customer sees)
- Document access (quote PDF, permit docs)
- Milestone notifications
- Direct message to project manager
- NO login required — magic link via email

### Team Member Portal
- List of assigned projects
- Status update buttons (simple: "Framing started", "Inspection passed" etc)
- Photo upload for customer updates
- Time log (optional)

### Database Tables Needed (Supabase)
```sql
-- Already exists: leads, lead_images, lead_timeline, quotes
-- Need to add:
projects          -- id, lead_id, status, start_date, end_date, team_members[]
project_milestones -- id, project_id, name, status, completed_at, photo_urls[]
project_messages   -- id, project_id, sender_role, content, created_at
team_members       -- id, name, email, phone, role, access_token
customer_tokens    -- id, lead_id, token, expires_at, last_viewed
```

---

## 6. WP SHUTDOWN CHECKLIST

Before shutting down WordPress:

### Images
- [ ] Download all 533 images (188 on CDN now, 345 still on WP)
- [ ] Verify every `images.ts` URL resolves on CDN
- [ ] Check all blog post inline images (many use direct WP URLs in MDX)
- [ ] Logo verified on Vercel `/public/brelogo.webp`
- [ ] Steve photo verified on Vercel `/public/steve-rosenthal.png`

### Content
- [ ] All 9 video files downloaded (currently only have URLs)
- [ ] All blog posts verified (no WP shortcodes or blocks in content)
- [ ] Contact forms — WP Fluent Forms → replaced by Supabase API ✓
- [ ] All redirects in next.config.js tested

### DNS
- [ ] Point brebuilders.com → Vercel (CNAME: cname.vercel-dns.com)
- [ ] Set NEXT_PUBLIC_SITE_URL=https://brebuilders.com in Vercel env vars
- [ ] Verify SSL auto-provisions on Vercel
- [ ] Submit new sitemap to Google Search Console immediately after

### SEO Protection
- [ ] 301 redirects in place for ALL old WP URLs → new Vercel paths ✓
- [ ] Canonical URLs updated to use env var ✓
- [ ] Sitemap points to Vercel paths ✓
- [ ] Monitor GSC for 48 hours after cutover

---

## 7. VERIFIED FACTS — NEVER HALLUCINATE THESE

### Company
- Name: Blue Reef Enterprises, LLC (dba BRE Builders / Blue Reef Builders)
- Owner: Steve Rosenthal
- Founded: 1989
- Address: 2600 Mill St #400, Reno, NV 89502
- Phone: (775) 391-4517
- Email: steve@brebuilders.com / brebuilders@gmail.com
- NV License: #0085999 (General Building Contractor)
- CA License: #1093798
- Contact: Sean (primary client contact, communication intermediary)

### Verified Rankings
- #1 "adu builders reno" — Google + AI Overview
- Page 1 "Foundation Repair in Reno NV"
- Page 1 "Northern California Construction Services"

### Verified Pricing (from site-data.ts)
- ADU: $75K–$300K ($175/sqft and up)
- Custom Home: $500K+
- All others: free estimate (no verified price stated)

### Service Areas (verified)
- Nevada: Reno, Sparks, Carson City, Washoe County, Lake Tahoe NV, Carson Valley
- California: Truckee, Graeagle, Lake Tahoe CA, Northern California broadly

### License Scope (verified)
- NV #0085999: Residential + commercial general contractor
- CA #1093798: Residential + commercial general contractor
- Both states: ADU, additions, repairs, new construction, commercial TI

---

## 8. CODEBASE ARCHITECTURE

### Stack
- Next.js 14.2.3, TypeScript, Tailwind CSS
- Supabase (project: paehnccexfbmauyqshiv)
- Vercel hosting (brebuilders-website.vercel.app → brebuilders.com)
- GitHub: github.com/brebuilders-new/brebuilders-website
- CDN: github.com/brebuilders-new/bre-assets → cdn.jsdelivr.net

### Key Files
| File | Purpose |
|------|---------|
| `lib/site-data.ts` | SERVICES, PROJECTS, TESTIMONIALS, FAQS |
| `lib/images.ts` | All image URLs (CDN-first) |
| `lib/image-catalog.ts` | Full SEO image metadata (NEW) |
| `app/sitemap.ts` | All Vercel URLs (env var based) |
| `app/robots.ts` | Crawl rules |
| `styles/globals.css` | Design tokens, color themes |
| `tailwind.config.js` | Color palette |
| `next.config.js` | Redirects, image domains |
| `app/layout.tsx` | Schema markup (AggregateRating, FAQPage, Person) |

### Color System (Walnut & Gold theme)
- `--void: #080604` — background
- `--teal: #d4a032` — gold accent
- `--gold: #e8b840` — brighter gold
- `--cream: #f8f0e0` — text on dark

### Per-Page Color Psychology (`data-theme` attribute)
- `home` — warm dark
- `repairs` — authority blue + urgency orange
- `growth` — forest green + gold (ADU/additions)
- `luxury` — near-black + gold (custom home)
- `warmth` — copper (kitchen/bath)
- `cedar` — walnut (decks)
- `commercial` — slate + red
- `gallery` — cinema black (portfolio)

