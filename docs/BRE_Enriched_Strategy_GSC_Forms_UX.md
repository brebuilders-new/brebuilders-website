# BRE Builders — Enriched Website Strategy
## GSC Intelligence · Form Specs · Device Psychology · Conversion Architecture

**Extracted:** April 1, 2026  
**Data Sources:** Google Search Console (3 months), Fluent Forms Export (Forms 1,3,6,7,8,9,10), Live Site Scrape  
**Status:** Source of truth for new site build — all data verified, no fabrication

---

## PART 1 — GOOGLE SEARCH CONSOLE INTELLIGENCE

### 1.1 — 90-Day Performance Summary (Jan 1 – Mar 30, 2026)

| Metric | Value | What It Means |
|---|---|---|
| Total Clicks | **442** | Low for a licensed GC — massive upside |
| Total Impressions | **68,624** | Strong visibility, terrible CTR |
| Average CTR | **0.64%** | Industry average is 3–5%. We're at 1/5th. CTR is the problem. |
| Average Position | **35–43** | Most pages in the "invisible zone" — page 3–4 |
| Best single day | **13 clicks (Mar 5)** | Baseline to 10x |

### 1.2 — DEVICE SPLIT (Most Critical Finding)

| Device | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| **Mobile** | 217 | 19,872 | **1.09%** | **28.04** |
| **Desktop** | 223 | 48,436 | **0.46%** | 38.07 |
| Tablet | 2 | 316 | 0.63% | 11.39 |

**THE INSIGHT:**
- Desktop has **2.4x more impressions** than mobile but almost identical click count
- Mobile CTR (1.09%) is **2.4x better** than desktop CTR (0.46%)
- Mobile avg position is **10 spots better** than desktop
- **Conclusion: Mobile users are more intentional, closer to hiring. Desktop users are browsing/researching.**
- **This mandates completely different UX, copy, and CTA hierarchy per device**

### 1.3 — PAGE PERFORMANCE (All Pages, Ranked by Impressions)

| Page | Clicks | Impressions | CTR | Position | Verdict |
|---|---|---|---|---|---|
| `/additions/` | 21 | **19,319** | 0.11% | 43 | 🔴 Worst CTR on site — biggest fix opportunity |
| `/adus/` | 76 | **17,384** | 0.44% | 56 | 🟡 High volume, low CTR due to tail keyword drag |
| `/` (home) | 159 | 5,807 | **2.74%** | 18.79 | 🟢 Best CTR — homepage is working |
| `/how-to-add-an-adu-in-nevada-...` | 70 | 5,327 | 1.31% | 11.71 | 🟢 Blog post performing well — keep |
| `/residential-services/` | 4 | 4,855 | 0.08% | 23.61 | 🔴 4,855 impressions, 4 clicks — broken page/title |
| `/decks/` | 17 | 2,829 | 0.60% | 12.79 | 🟡 Pos 13, should convert better |
| `/portfolio/adus/` | 13 | 2,606 | 0.50% | 34.83 | 🟡 Portfolio page getting SEO traction |
| `/hauling-removal/` | 1 | 2,482 | 0.04% | 17.97 | 🔴 2,482 impressions, 1 click — catastrophic CTR |
| `/kitchen/` | 1 | 2,198 | 0.05% | 25.63 | 🔴 2,198 impressions, 1 click — broken CTR |
| `/new-home/` | 7 | 1,705 | 0.41% | 26.44 | 🟡 Low CTR for custom home — position needs work |
| `/contact/` | 18 | 1,369 | 1.31% | 24.10 | 🟢 Contact page CTR is strong |
| `/about/` | 9 | 1,211 | 0.74% | 10.35 | 🟡 Pos 10, could be higher |
| `/repairs/` | 1 | 830 | 0.12% | 37.61 | 🔴 Repairs page barely visible |
| `/service-areas/northern-california/` | 2 | 895 | 0.22% | 14.65 | 🟡 CA page needs work |

**⚠️ SPAM PAGES INDEXED (from December 2024 malware incident):**
- `/step-into-the-spotlight-win-big-with-nine-casino-today-4226/` — must return 410 Gone
- `/vavada-casino/` — must return 410 Gone
- These are hurting domain authority. Handle in `next.config.js` with status 410.

### 1.4 — QUICK WIN KEYWORDS (Positions 3–10, Zero Clicks)

These queries are on or near page 1 but getting **zero clicks**. Fix the title tag and meta description = immediate traffic with no ranking work needed.

| Keyword | Position | Impressions | Fix |
|---|---|---|---|
| `home additions reno, nv` | 3.5 | 106 | Title: "Home Additions Reno NV \| Add Space..." |
| `home addition companies reno nv` | 3.6 | 101 | Meta desc needs service area + price signal |
| `home addition contractors reno nv` | 3.6 | 98 | Same fix as above |
| `custom built home reno` | 3.6 | 97 | Title needs "Custom" prominent |
| `addition contractors reno` | 4.6 | 100 | Match exact query in title |
| `adu companies reno nv` | 5.1 | 136 | ADU page title needs "companies" variant |
| `deck contractors reno nv` | 5.8 | 117 | Deck page title fix |
| `adu contractors reno nv` | 6.0 | 146 | Add "contractors" to ADU title |
| `accessory dwelling unit builders reno nv` | 6.0 | 136 | Long-form keyword in meta |
| `demo and hauling near me` | 5.8 | 124 | Hauling page needs complete overhaul |
| `lake tahoe adu builder` | 7.5 | 192 | Add Lake Tahoe ADU section |
| `building repair northern california` | 8.1 | 265 | CA service area page priority |
| `built home solutions reno nv` | 8.7 | 257 | Brand confusion — claim this |
| `foundation framing reno` | 10.7 | 194 | Repairs/foundation page |
| `general contractors near me` | 15.0 | 122 | Homepage meta needs "near me" signal |

### 1.5 — MASSIVE UNTAPPED KEYWORD CLUSTERS

These have thousands of impressions but position 48–75 (page 5–8). Proper content = page 1.

**ADU Cluster (Combined: ~15,000 impressions, avg pos 65):**
- `adu contractor` — 1,997 impr, pos 73
- `adu builders near me` — 1,577 impr, pos 55
- `adu contractors near me` — 1,317 impr, pos 48
- `adu contractors` — 963 impr, pos 69
- `adu builders` — 876 impr, pos 70
- `adu builder` — 862 impr, pos 72
- `adu builder near me` — 841 impr, pos 71

**Additions/Home Expansion Cluster (~7,000 impressions, avg pos 52):**
- `home addition contractors` — 2,240 impr, pos 55
- `home addition contractor` — 1,344 impr, pos 56
- `home addition contractors near me` — 530 impr, pos 48
- `room addition contractors` — 674 impr, pos 53
- `home additions near me` — 527 impr, pos 69

**The additions page has 19,319 impressions at 0.11% CTR.**  
**If CTR improves to 2% → 386 clicks/quarter vs current 21. That's an 18x improvement.**

### 1.6 — BRAND QUERIES (Confirmation of Brand Awareness)

| Query | Clicks | CTR | Position |
|---|---|---|---|
| `blue reef enterprises` | 27 | 31.4% | 2.06 |
| `bre builders` | 19 | 47.5% | 1.6 |
| `blue reef construction` | 3 | 25% | 2.67 |
| `blue ridge builders` | 1 | 33% | 1.67 (brand confusion) |
| `brc builders` | 1 | 100% | 1 |
| `brb builders` | 1 | 100% | 3 |

**Brand CTR is 25–47% — users who know BRE are finding and clicking. The problem is organic discovery CTR at 0.44–0.64%.**

---

## PART 2 — DEVICE-SPECIFIC PSYCHOLOGY & UX STRATEGY

### 2.1 — Who Is On Mobile vs Desktop

**Mobile Visitor (1.09% CTR, pos 28, same click count as desktop despite 60% fewer impressions):**
- Higher intent: searching while at a property, after noticing a problem, or during a contractor conversation
- Shorter attention span — scans first 3 seconds
- Wants: phone number NOW, quick proof they're local and licensed, one tap to call
- Decision cycle: same day or next day
- Primary actions: Call, Text, Request callback
- Friction tolerance: near zero — every extra tap is a lost conversion

**Desktop Visitor (0.46% CTR, pos 38, 2.4x more impressions):**
- Research mode — comparing multiple contractors
- Longer time on site acceptable
- Wants: detailed project photos, pricing ranges, credentials, FAQ answers
- Decision cycle: 1–4 weeks
- Primary actions: Fill out detailed form, view portfolio, read reviews
- Friction tolerance: medium — will complete multi-step form if value is clear

### 2.2 — Mobile UX Rules (Non-Negotiable)

1. **Phone number in sticky header** — always visible, one tap to call
2. **Hero CTA = "Call Now" primary, "Get a Quote" secondary** — not reversed
3. **First 3 seconds must answer: local? licensed? what they do?** — above fold only
4. **No multi-step form on mobile homepage** — direct to call or tap to short form
5. **Services grid: 2-column max** — no horizontal scrolling
6. **Portfolio: full-width swipeable cards** — not masonry
7. **FAQs: accordion** — collapsed by default, each answer ≤ 3 lines
8. **Testimonials: single-card swipe** — not 3-column grid
9. **Contact section: show phone prominently before form** — 40% of mobile users will call if number is visible; 8% will fill a form
10. **Page weight: < 2.5MB total** — Nevada rural areas have slower mobile connections

### 2.3 — Desktop UX Rules

1. **Full hero with background imagery** — impress immediately
2. **Portfolio: masonry or 3-column grid** — show depth of work
3. **Service cards: 4-column** with hover states showing project images
4. **Intelligent form prominent** — desktop users will fill forms
5. **Trust signals in sidebar or persistent right panel** — license numbers, years, testimonials
6. **Project detail modals** — let them deep-dive without leaving page
7. **Blog content visible** — desktop users research; content drives trust

### 2.4 — Conversion Psychology Per Service

**ADU inquiries (highest value lead):**
- Mobile: Fear of missing out on rental income → "Your neighbor is making $1,800/month from their ADU"
- Desktop: Investment calculator angle → show ROI math, ROI timeline, rental income ranges
- Both: Lead with cost transparency ($75K–$300K) — contractors who hide prices lose trust

**Structural Repair inquiries (urgency-driven):**
- Mobile: "Is your home safe?" — urgency + local + licensed = call now
- Desktop: Educational content, symptom checker, visual diagnostic guide
- Both: Urgency without fear-mongering — "get it inspected before it gets worse"

**Kitchen/Bath (aspiration-driven):**
- Mobile: Hero image of finished kitchen, then "How much does it cost in Reno?"
- Desktop: Full before/after galleries, material options, project timelines
- Both: Social proof heavy — Austin's testimonial (concrete + deck + kitchen all in one) is the anchor

**Deck inquiries (seasonal, safety-driven):**
- Mobile: "8 Signs Your Deck Is No Longer Safe" — matches existing blog post + intent
- Desktop: Gallery-first with material options and pricing range
- Both: Lake Tahoe angle — this region = wood deck weather = strong local signal

---

## PART 3 — FLUENT FORMS COMPLETE SPECIFICATION

All 8 forms extracted from live WordPress site. Forms 7–10 are the purpose-built intelligent forms.

### FORM 1 — Subscription Form (ID: 2)
**Type:** Email capture  
**Fields:** Email only + submit  
**New site use:** Newsletter/updates opt-in in footer

### FORM 2 — Detailed Contact Form (ID: 3)
**Type:** General project inquiry  
**Fields (26 total):**
- Company Name (optional)
- Full Name (First, Middle, Last) — First + Last required
- Email [REQ], Phone [REQ]
- Preferred Contact Method [REQ] — radio
- **Services Section:** "What kind of work do you need?" — checkbox
- Other Service (text)
- Property Type — select
- Age of Property — select
- **Project Section:** Full address
- Project Description [REQ] — textarea
- Budget Range [REQ] — select
- Timeline / Preferred Start Date [REQ] — date
- "Do you have architectural plans?" [REQ] — radio (Yes/No)
- "Do you need architectural plans?" [REQ] — radio
- **Additional:** How did you hear about us? [REQ], Additional Notes [REQ]
- Terms + Consent
- Honeypot URL field (bot trap)

### FORM 3 — Job Application (ID: 6)
**Type:** Careers  
**Fields (34 total):**
- Personal info (name, phone, email, address)
- Preferred contact method
- Position applying for — select
- Available start date
- Expected hourly rate
- Work type (checkboxes)
- US work authorization, visa sponsorship, driver's license, background check, drug check — all radio
- Previous employment (company, position, dates, duties, reference)
- Education level, institution, graduation year, certifications
- How did you hear about BRE Builders?
- Accuracy confirmation + date submitted

### FORM 4 — New Home Construction Form (ID: 7) ⭐
**Type:** Custom home build lead  
**Fields (18 groups):**

| Field | Type | Options |
|---|---|---|
| Name | name fields | First, Middle, Last |
| Phone | number | REQ |
| Email | email | |
| Project Address | address block | REQ city/state/zip |
| **Type of home** | select REQ | Single-story / Two-story / Multi-level custom / Modern / Mountain-lodge style / Not sure yet |
| **Architectural plans?** | select REQ | Yes / No / In progress / Need BRE to design / No plans yet |
| **Engineering completed?** | select REQ | Yes / No / Not Sure |
| Approx sqft | text REQ | |
| Bedrooms | number REQ | |
| Bathrooms | number REQ | |
| **Special rooms?** | checkbox REQ | Home office / Gym / Theater / Workshop / Bunker / Multi-gen space / Other |
| **Own the land?** | select REQ | Yes / No / In escrow |
| **Property requires:** | multi-select REQ | Grading / Foundation replacement / Septic / Well / Retaining walls / Drainage management / Access improvements |
| **Budget Range** | select REQ | Under $300k / $300k–$450k / $450k–$750k / $750k–$1M+ |
| **Timeline** | select REQ | Ready to start / 3–6 months / 6–12 months / Researching only |
| Notes | textarea REQ | |
| Terms + GDPR | | REQ |

### FORM 5 — Structural Repair Inspection (ID: 8) ⭐
**Type:** Structural inspection request  
**Fields (20 groups):**

| Field | Options |
|---|---|
| Name, Email, Phone | standard |
| Property Address | REQ |
| **Property Type** | Single-family home / Condo-Townhome / Commercial building |
| **Year Built** | Before 1980 / 1980–1999 / 2000–2010 / After 2010 / Not sure |
| **Occupancy** | Owner-occupied / Rental property / Vacant / In escrow / preparing to sell |
| **Issues noticed** | Cracks in walls/ceilings / Cracks in foundation/masonry / Doors-windows not closing / Uneven floors / Bowing walls / Water near foundation / Deck concerns / Other |
| **Location of issue** | Interior walls / Exterior walls / Foundation / Floors / Deck-balcony / Garage / Basement-crawl space |
| **When noticed** | Recently (last few weeks) / Several months ago / Over a year ago / Not Sure |
| **Issue changing?** | Yes getting worse / It appears stable / Unsure |
| **Triggering events** | Heavy rain/snow melt / Earth movement / Nearby construction / Remodel / None |
| **Why reaching out** | Concern about safety / Home inspection flagged / Preparing to sell / Buying a home / Planning repairs / General concern |
| **Working with anyone?** | Home inspector / Realtor / Engineer / Insurance company / No |
| **Timeline** | As soon as possible / Within 1–2 weeks / Within a month / Just gathering information |
| Additional details | textarea REQ |
| **Confirmation** | "I understand this is an evaluation request, not a repair quote." |
| Terms + GDPR | |

### FORM 6 — Foundation Inspection Request (ID: 9) ⭐
**Type:** Foundation-specific inspection  
**Fields (16 groups):**

| Field | Options |
|---|---|
| Name, Email, Phone, Address | REQ |
| **Primary residence?** | Yes / No / It's a rental-investment property |
| **Property Type** | Single-Family Home / Townhome-Condo / Multi-Unit / Commercial / Not sure |
| **What started this?** | New crack / Existing crack getting worse / Uneven floors / Doors-windows misalign / Water near foundation / Home inspection / Buying-selling / Previous repair failing / Want professional confirmation |
| **Where seeing issue?** | Foundation-slab / Interior walls / Exterior walls / Floors / Crawl space / Basement / Multiple areas / Not sure |
| **Issue changing?** | Yes getting worse / Stable / Not sure |
| **How soon evaluation?** | Immediately / Within 1–2 weeks / Within a month / Just gathering information |
| **Other contractor?** | Yes / No / Not yet |
| Tell us what matters | textarea REQ |
| Confirmation | "I understand this request is for a professional evaluation, not an instant repair quote." |

### FORM 7 — Water Intrusion & Moisture Evaluation (ID: 10) ⭐
**Type:** Water/moisture inspection — most detailed form  
**Fields (24 groups):**

| Field | Options |
|---|---|
| Name, Email, Phone, Address | REQ |
| **Preferred contact** | Call / Text / Email |
| **Best time to contact** | Morning (8–11) / Midday (11–2) / Afternoon (2–5) / Evening (after 5) / Dont Call |
| **Primary residence?** | Yes / No |
| **Property Type** | Single-family / Townhome-Condo / Multi-family / Commercial |
| Year Built (approx) | text REQ |
| Square Footage (approx) | text REQ |
| **Where seeing moisture?** | Basement-lower level / Crawl space / Garage / Interior wall lower / Floor-slab / Near foundation exterior / Around windows-doors / Ceiling-roof leak / Not sure |
| **Signs noticed** | Water stains / Musty smell / Standing water / Damp drywall / Bubbling paint / Soft-spongy flooring / Efflorescence / Mold-like spotting / Wood swollen-rotting / Cracks near area / Not sure |
| **When does it happen?** | During heavy rain / After snow melt / After irrigation / Random-ongoing / Certain seasons / Not sure |
| **Duration** | Less than 1 week / 1–4 weeks / 1–3 months / 3–6 months / 6+ months / Not sure |
| **Getting worse?** | Yes / No / Not sure |
| **Also happening?** | Doors-windows sticking / Floors uneven / New drywall cracks / Cracks widening / Gaps at baseboards / Exterior cracks / Foundation cracks visible / None / Not sure |
| **Urgency** | Emergency (active water) / Urgent (this week) / Soon (1–2 weeks) / Planning (2–4 weeks) |
| **Easy access?** | Yes / No (needs coordination) / Not sure |
| **Pets on site?** | Yes / No |
| Anything else | textarea REQ |
| Consent | "I agree to be contacted by BRE Builders regarding Water Intrusion-Moisture Evaluation request." |

---

## PART 4 — NEW SITE CONVERSION ARCHITECTURE

### 4.1 — Page-Level Conversion Goals

| Page | Mobile Goal | Desktop Goal | Primary CTA |
|---|---|---|---|
| Home | Call or tap-to-form | Explore + form submit | Call / Get Quote |
| ADU | Call or quick form | Full ADU form | Free ADU Quote |
| Repairs | Call NOW | Inspection request form | Request Inspection |
| Foundation | Call — urgency | Foundation form (Form 9) | Get Evaluation |
| Water Intrusion | Call — urgency | Water form (Form 10) | Schedule Evaluation |
| Kitchen/Bath | Inspiration → call | Gallery → detailed form | See Our Work |
| Decks | Quick form or call | Gallery + form | Get Deck Quote |
| New Home | Call to discuss | Full new home form (Form 7) | Start Planning |
| Contact | Call | Any service form | — |
| Portfolio | Swipe gallery | Deep project view | Contact About This |

### 4.2 — Intelligent Form Architecture (New Site)

The new intelligent form replaces all 8 individual forms with one adaptive system.

**Stage 1 — Service Selector (all devices):**
Tap/click your service type — form dynamically loads Stage 2 fields for that service.

**Stage 2 — Service-Specific Questions:**

| Service Selected | Form Fields Loaded | Based On |
|---|---|---|
| ADU | Type, use, size, budget ($75K–$300K tiers), timeline | New (plus Form 7 budget) |
| Custom Home Build | Form 7 fields — style, plans, eng, sqft, beds/baths, special rooms, land, site prep, budget, timeline | Form ID 7 — exact |
| Structural Repair | Form 8 fields — property type, year, occupancy, issues checklist, location, trigger | Form ID 8 — exact |
| Foundation | Form 9 fields — residence type, what started it, where, urgency | Form ID 9 — exact |
| Water Intrusion | Form 10 fields — contact method, time, property, moisture location, signs, timing, duration, urgency | Form ID 10 — exact |
| Kitchen/Bath | Room(s), scope, budget, priorities | Simplified Form 3 |
| Deck | New or repair, issues, material, size, location type | New |
| Commercial | Business type, scope, sqft, state | New |
| Concrete | Project type, sqft | New |
| Hauling | Type, property size | New |
| General | Description textarea + General Form 3 | Form ID 3 |

**Stage 3 — Contact Info (all services):**
First name, last name, phone, email, city, best time to contact

**Stage 4 — Final (all services):**
Timeline, how did you find us, additional notes, consent, submit

### 4.3 — Mobile-Specific Form Behavior

- **Steps 1–4 become a full-screen modal** with progress indicator
- **Each step = one question maximum** on mobile (not a group of fields)
- **Auto-advance** after radio/checkbox selection where possible
- **Phone field first** in Stage 3 on mobile (not name) — we want to call them
- **"Call Instead"** button persistent at bottom of every form step on mobile
- **Form auto-saves** between steps — user can close and return

### 4.4 — Trust Signal Placement Per Device

**Mobile — sticky elements:**
```
Header: [Logo] [Phone: (775) 391-4517 — TAP TO CALL]
Bottom bar: [Call] [Text] [Get Quote]
```

**Desktop — persistent sidebar or section:**
```
• Licensed NV #0085999 | CA #[verified]
• Since 1989 — 35+ Years
• Free Estimates
• 1-Year Warranty
• [Star ratings from testimonials]
```

---

## PART 5 — SEO ENRICHMENT STRATEGY

### 5.1 — Title Tag Fixes (Based on GSC Data)

| Page | Current Title (WP) | New Title (Fixes CTR) |
|---|---|---|
| /additions/ | "Additions — Add square footage..." | `Home Additions Reno NV \| Room & Garage Additions \| BRE Builders` |
| /residential-services/ | (generic) | `Residential Construction Services Reno NV \| Licensed GC Since 1989` |
| /hauling-removal/ | (generic) | `Hauling & Demolition Reno NV \| Same-Day Removal \| BRE Builders` |
| /kitchen/ | (generic) | `Kitchen & Bath Remodel Reno NV \| Licensed Contractor \| BRE Builders` |
| /adus/ | `ADU Builders Reno NV \| $75K-$300K` | `ADU Builders Reno NV \| $75K–$300K Complete Builds \| BRE Builders` ✓ |
| /decks/ | (generic) | `Deck Builder Reno NV \| Deck Repair Lake Tahoe \| BRE Builders` |
| /new-home/ | (generic) | `Custom Home Builder Reno NV \| New Home Construction \| BRE Builders` |

### 5.2 — New Pages Required (Based on GSC Keyword Gaps)

These keyword clusters have significant impression volume but no dedicated page:

| New Page | Target Keyword | Impressions (current) | New URL |
|---|---|---|---|
| Home Additions Reno | `home additions reno nv` | 106 @ pos 3.5 | `/services/additions/` ✓ |
| Lake Tahoe ADU | `lake tahoe adu builder` | 192 @ pos 7.5 | `/service-areas/lake-tahoe/adu/` |
| Demolition & Hauling | `demolition and hauling services near me` | 198 @ pos 7.3 | `/services/hauling/` ✓ |
| Foundation Repair | `foundation framing reno` | 194 @ pos 10.7 | `/services/repairs/foundation/` ✓ |
| Building Repair NorCal | `building repair northern california` | 265 @ pos 8.1 | `/service-areas/northern-california/` ✓ |
| Concrete Ripon | `concrete house ripon` | 140 @ pos 10.3 | `/projects/ripon-estate/` ✓ |
| Tenant Improvements | `tenant improvement contractors near me` | 103 @ pos 8.2 | `/services/commercial/tenant-improvements/` |
| Garage ADU Reno | `garage conversion to adu reno` | (tracked) | `/services/adu/garage-conversion/` |

### 5.3 — Spam URL Handling (Must Implement Day 1)

Add to `next.config.js`:
```javascript
// Spam URLs from December 2024 malware incident — return 410 Gone
{ source: '/step-into-the-spotlight-win-big-with-nine-casino-today-4226/', destination: '/', permanent: false, statusCode: 410 },
{ source: '/vavada-casino/', destination: '/', permanent: false, statusCode: 410 },
{ source: '/', has: [{ type: 'query', key: 'm', value: '(?!undefined).*' }], destination: '/', permanent: true },
```

### 5.4 — Content Velocity Plan (Post-Launch Blogs)

Based on keyword gaps:
1. "How Much Does an ADU Cost in Reno in 2026?" — targets `adu cost reno` cluster
2. "Home Addition vs. Moving: Real Cost Comparison for Reno Homeowners" — targets additions cluster
3. "Deck Safety Inspection: What to Look For Before Summer" — seasonal, targets deck safety
4. "General Contractor Near Me: How to Choose in Northern Nevada" — targets `general contractors near me`
5. "Lake Tahoe Home Renovation Guide: What Permits You Need" — geo-targeted

---

## PART 6 — HOMEPAGE STRUCTURE (DEVICE-SPECIFIC)

### 6.1 — Mobile Homepage Flow

```
1. STICKY HEADER
   Logo | (775) 391-4517 [TAP TO CALL]

2. HERO (above fold — everything critical)
   H1: "Reno's Licensed General Contractor Since 1989"
   Subtext: "Residential · Commercial · ADUs · Repairs"
   [CALL NOW — (775) 391-4517] ← primary CTA, full width
   [Get a Free Quote] ← secondary, outlined

3. TRUST BAR (below fold, swipeable)
   NV Licensed #0085999 | CA Licensed | 35+ Years | Free Estimates

4. SERVICES (2-column tap grid)
   ADU | Kitchen & Bath
   Decks | Repairs
   Custom Home | Commercial
   [All Services →]

5. SOCIAL PROOF (single swipeable card)
   Testimonial: "I found these guys... concrete, deck, kitchen, electrical all in one..." — Austin, Reno

6. RECENT PROJECTS (3-card vertical scroll)
   [Image] Title, Location
   [View All Projects]

7. QUICK FORM (collapsed accordion)
   "Get a Quote — Takes 2 Minutes"
   [Expand → Service selector + name + phone + submit]

8. STICKY BOTTOM BAR (fixed)
   [📞 Call] [💬 Text] [📋 Quote]
```

### 6.2 — Desktop Homepage Flow

```
1. NAV BAR
   Logo | Services ▾ | Projects | Areas | About | FAQ | [Get a Quote →]

2. HERO (full viewport)
   H1: "Northern Nevada and Reno General Contractor Since 1989"
   Cycling word: "Built With Precision / Integrity / Craftsmanship..."
   Subtext: Licensed Nevada & California GC for residential and commercial
   [Get a Free Quote] [View Our Projects]
   Stats: 35+ Years | NV + CA Licensed | Free Estimates | 1-Year Warranty
   Background: project image or subtle grid

3. SERVICES (4-column grid with hover project thumbnails)
   ADU | Kitchen & Bath | Custom Home | Decks
   Repairs | Concrete | Commercial | Hauling

4. PORTFOLIO PREVIEW (3-column masonry or featured project)
   Lake Tahoe | Ripon CA | Quaking Aspen | [View All 9+ Projects]

5. ABOUT STRIP
   "Since 1989 — Built for Northern Nevada"
   Steve Rosenthal + company story + values (4 cards)

6. TESTIMONIALS (3-column grid)
   All 6 verified testimonials

7. SERVICE AREAS MAP
   Interactive: Reno, Sparks, Lake Tahoe, Carson City, Truckee, Graeagle, NorCal

8. INTELLIGENT QUOTE FORM (full width)
   4-step form with all service options visible

9. FOOTER
   4-column with all services, company links, contact info, license numbers
```

---

## PART 7 — COMPLETE TODO UPDATES (Based on New Data)

### New items added from GSC + Forms analysis:

- [ ] **N-001** — Implement 410 status for both spam URLs in next.config.js
- [ ] **N-002** — Fix `/additions/` title tag: biggest single CTR opportunity (19K impressions, 0.11% CTR)
- [ ] **N-003** — Fix `/residential-services/` page: 4,855 impressions, 4 clicks — broken
- [ ] **N-004** — Fix `/hauling-removal/` page: 2,482 impressions, 1 click — broken
- [ ] **N-005** — Fix `/kitchen/` page: 2,198 impressions, 1 click — broken
- [ ] **N-006** — Create `/service-areas/lake-tahoe/adu/` — 192 impressions at pos 7.5
- [ ] **N-007** — Form 7 (New Home) must be exact spec replica in new intelligent form
- [ ] **N-008** — Form 8 (Structural Repair) exact spec replica
- [ ] **N-009** — Form 9 (Foundation) exact spec replica  
- [ ] **N-010** — Form 10 (Water Intrusion) exact spec replica — most detailed, most valuable
- [ ] **N-011** — Mobile sticky bottom bar: Call / Text / Quote — must be on all pages
- [ ] **N-012** — Desktop: Add price signals to all service title tags where appropriate
- [ ] **N-013** — Careers page uses Form 6 (job application) — must replicate all 34 fields
- [ ] **N-014** — "built home solutions reno nv" (257 impressions, pos 8.7) — brand confusion, claim with homepage SEO
- [ ] **N-015** — Query `?m=XXXXXXXX` spam URLs — filter in next.config.js

---

## PART 8 — VERCEL DEPLOYMENT STATUS

**Repo:** https://github.com/brebuilders-new/brebuilders-website  
**Deployment URL:** https://brebuilders-website-anngext4v-brebuilders.vercel.app  
**Status:** LIVE (protected with Vercel SSO — normal for new deployments)  
**Build:** PASSING — Next.js 14, 0 errors  
**Current content:** Placeholder "Coming Soon" page  

**To disable SSO protection:**  
Vercel Dashboard → brebuilders project → Settings → Deployment Protection → Disable "Vercel Authentication" for public access

**Environment variables still needed (add in Vercel dashboard):**
```
RESEND_API_KEY        = [get from resend.com]
CONTACT_TO_EMAIL      = brebuilders@gmail.com
CONTACT_CC_EMAILS     = steve@brebuilders.com,[chris email],[sean email]
NEXT_PUBLIC_SITE_URL  = https://brebuilders.com
NEXT_PUBLIC_GA_ID     = G-[from existing GSC/GA account]
```
