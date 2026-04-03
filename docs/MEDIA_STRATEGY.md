# BRE Builders — Media Strategy & System
# Images and Videos as a Sales and SEO Tool
# Last updated: April 2026

---

## THE CORE PRINCIPLE

For a construction company, media IS the product.

A homeowner choosing between two contractors:
- Contractor A: text descriptions, one or two photos
- Contractor B: 20+ photos per project, before/after sequences, video walkthrough

Contractor B wins. Every time. Without a single sales call.

BRE Builders has 35 years of completed projects. The work speaks for itself.
The system's job is to make that work visible, organized, and findable.

---

## 1. IMAGE SYSTEM — COMPLETE ARCHITECTURE

### CDN Structure (github.com/brebuilders-new/bre-assets)

Every image lives in ONE place. Organized by type:

```
bre-assets/
├── projects/
│   ├── glenbrook-lake-tahoe/
│   │   ├── hero.webp              ← main portfolio card image
│   │   ├── 01-exterior.webp       ← numbered, labeled
│   │   ├── 02-entry.webp
│   │   ├── 03-kitchen.webp
│   │   └── ...
│   ├── zephyr-cove-lake-tahoe/
│   ├── ripon-estate/
│   ├── rio-tinto/
│   ├── arun-deck-repair/
│   ├── charolettes-deck/
│   ├── car-wash-reno/
│   └── [new-project-slug]/        ← add new projects here
│
├── services/
│   ├── adu/                       ← ADU service images
│   ├── repairs/                   ← structural repair images
│   ├── decks/                     ← deck images
│   ├── commercial/                ← commercial images
│   ├── custom-home/               ← custom home images
│   └── kitchen-bath/              ← kitchen & bath images
│
├── blog/                          ← blog post images (named for topic)
│   ├── 30-Year-Old-Reno-Homes-600x403.webp
│   ├── Unsafe-Deck-Framing-600x403.webp
│   └── ...
│
├── team/                          ← Steve + team photos
│   └── steve-rosenthal.png
│
└── brand/                         ← logos, icons
    └── brelogo.webp
```

### Naming Convention — MANDATORY

Every image file must follow this format:
`[descriptive-subject]-[location-if-relevant]-[sequence].webp`

Examples:
- `exterior-front-elevation-glenbrook-lake-tahoe-01.webp`
- `kitchen-custom-cabinetry-quartz-countertops-02.webp`
- `deck-steel-bracket-structural-repair-03.webp`
- `adu-pool-house-private-entrance-reno-nv-01.webp`

Never: `IMG_4521.jpg`, `photo1.jpg`, `image-39.jpg`

### Image Sizes — What to Capture Per Project

For every project, BRE needs these shots:

**EXTERIOR (required)**
- Hero shot: full exterior, good light, straight-on
- Before (if available): same angle as hero
- Details: entry, garage, windows, unique features

**INTERIOR (if applicable)**
- Each renovated room: wide shot + 1-2 detail shots
- Kitchen: wide + countertops + cabinets + appliances
- Bathrooms: wide + tile + fixtures
- Stairs/unique features

**STRUCTURAL WORK (if applicable)**
- Before: show the problem clearly
- During: show the work in progress
- After: show the repair completed
- Detail shots: connections, hardware, materials

**SEQUENCE SHOTS (highest value)**
Before → During → After sequences are the most powerful
content a construction company can have. They prove competence.

---

## 2. IMAGE METADATA SYSTEM — EVERY IMAGE NEEDS THESE

### The BRE Image Data Standard

Every image in lib/image-catalog.ts must have ALL of these:

```typescript
{
  url: string           // CDN URL: cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/...
  alt: string           // SEO alt text — see formula below
  title: string         // ImageObject schema title
  caption: string       // Display caption — human readable, short
  keywords: string[]    // For image search and AI indexing
  width: number         // Actual pixel width
  height: number        // Actual pixel height
  phase?: string        // 'before' | 'during' | 'after' | 'completed'
  room?: string         // 'kitchen' | 'bathroom' | 'exterior' | 'structural' | etc
  dateCapture?: string  // YYYY-MM when photo was taken (helps freshness)
}
```

### Alt Text Formula — NON-NEGOTIABLE

Format: [What is shown] — [Project Name] [Service Type] by BRE Builders | [City, State] | [License]

Examples:
- "Steel angle bracket reinforcement securing elevated deck to CMU wall — Arun Hillside Deck Repair by BRE Builders | Lake Tahoe, NV | NV #0085999"
- "Kitchen renovation custom cabinetry and quartz countertops — Zephyr Cove Full Home Renovation by BRE Builders | Lake Tahoe, NV | NV #0085999"
- "Dry rot exposure in wall framing — Quaking Aspen Structural Repair by BRE Builders | Reno, NV | NV #0085999"

Rules:
- 80-160 characters
- Always describe what is SHOWN, not what the page is about
- Always include "BRE Builders"
- Always include city, state
- Always include license number
- Never write "image of" or "photo of" — just describe it

### Caption Formula

Short, human-readable, title-case:
"Steel Bracket Deck Reinforcement — Lake Tahoe NV"
"Kitchen Renovation — Zephyr Cove, Lake Tahoe"
"Dry Rot Exposure — Structural Repair, Reno NV"

---

## 3. VIDEO SYSTEM — COMPLETE ARCHITECTURE

### Platform: YouTube (Primary)

All videos hosted on YouTube. Reasons:
- No file size limits
- Free global CDN
- Embeds anywhere
- YouTube is the world's second largest search engine
- Google shows YouTube videos in search results

### Video Categories Needed

**PROJECT WALKTHROUGHS (highest priority)**
- 2-5 minute walkthrough of a completed project
- Show before, during, after
- Steve or a team member explains what was done and why
- Format: handheld phone is fine, good lighting matters

**SERVICE EXPLAINERS (second priority)**
- "What does an ADU actually include?"
- "How does structural repair work?"
- "What happens during a foundation assessment?"
- 60-90 seconds, answer one specific question

**PROCESS VIDEOS**
- "What happens from your first call to project completion"
- "How BRE Builders approaches structural assessment"
- Build trust before the first conversation

**TESTIMONIALS**
- Client on camera, 60-90 seconds
- "What was the problem, how did BRE solve it, would you recommend them"
- Most powerful trust signal that exists

### YouTube SEO Formula — Every Video

**Title:** [Project/Topic] — [Service Type] by BRE Builders | [City, State]
Example: "Lake Tahoe Full Home Renovation — Exterior & Interior Transformation | Zephyr Cove, NV"

**Description (first 125 chars are shown before "more"):**
"BRE Builders completed a full home renovation at [address/area]. [2 sentences about scope]. Licensed NV #0085999 · CA #1093798."

**Full description includes:**
- What was done (3-5 bullet points)
- Location and license numbers
- Call to action: "(775) 391-4517 | brebuilders.com | Free estimates"
- Chapters with timestamps (if video > 2 minutes)

**Tags:**
- Primary: "bre builders", "[city] contractor", "[service] [city] nv"
- Secondary: "licensed contractor nevada", "general contractor reno", "nv #0085999"

**Thumbnail:**
- Best single frame from the video
- OR custom thumbnail: project hero photo + BRE logo + title text
- High contrast, readable at small size

### Adding a New Video — The 5-Step Process

1. Upload to YouTube Studio (youtube.com/upload)
2. Set title, description, tags using formulas above
3. Set thumbnail (custom preferred)
4. Copy the video ID from the URL (youtube.com/watch?v=THIS_PART)
5. Add entry to lib/videos.ts VIDEOS array

That's it. The VideoGallery component handles display automatically.

---

## 4. HOW IMAGES AND VIDEOS APPEAR ON SITE

### Homepage
- Hero section: 1 full-bleed background image (best project photo)
- Service panels: 1 hero image per service category
- Project showcase: 3-6 thumbnail cards → links to project pages
- Videos section: 3 featured videos (VideoGallery featured=true)

### Project Pages (/projects/[slug]/)
- Hero: full-width project exterior or best photo
- Gallery: all photos in grid or lightbox
- Each photo has: caption, alt text, proper schema
- VideoGallery filtered to this project (if video exists)

### Service Pages (/services/[slug]/)
- Hero: best photo for this service type
- Process section: before/during/after images
- Mini portfolio: 3-4 project thumbnails from this service category
- VideoGallery filtered to this service type

### Blog Posts
- Hero: relevant image for the topic
- Inline images: every 300-400 words, break up text
- Images must illustrate the specific point being made
- Never use generic stock photos for topics we have real photos of

### Image Gallery Page (/gallery/)
NOT BUILT YET — needs to be built
- All projects in one browsable grid
- Filter by: service type, location, year
- Each card: project name, location, service, thumbnail
- Click → project page

---

## 5. SCHEMA MARKUP FOR IMAGES

Every project image needs ImageObject schema:

```json
{
  "@type": "ImageObject",
  "url": "https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/...",
  "name": "Title of the image",
  "description": "Same as alt text",
  "caption": "Short caption",
  "width": 1024,
  "height": 684,
  "author": {
    "@type": "Organization",
    "name": "Blue Reef Builders",
    "url": "https://brebuilders.com"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Blue Reef Builders"
  },
  "datePublished": "2025-12",
  "contentLocation": {
    "@type": "Place",
    "name": "Glenbrook, Lake Tahoe, NV"
  }
}
```

Every YouTube video needs VideoObject schema:

```json
{
  "@type": "VideoObject",
  "name": "Lake Tahoe Full Home Renovation — BRE Builders",
  "description": "Complete interior and exterior renovation...",
  "thumbnailUrl": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  "uploadDate": "2025-12-01",
  "duration": "PT3M42S",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "contentUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "publisher": {
    "@type": "Organization",
    "name": "Blue Reef Builders",
    "logo": { "@type": "ImageObject", "url": "https://brebuilders.com/brelogo.webp" }
  }
}
```

---

## 6. WHAT TO SHOOT NEXT — PRIORITY LIST

These are the highest-value media assets BRE does NOT currently have:

**IMMEDIATE (do on next project site visit):**
1. Before/during/after sequence of ANY active structural repair
2. Steve on camera for 60-90 second "about BRE Builders" video
3. Any client willing to give a 60-second video testimonial
4. Before/after photos of ANY completed ADU (pool house, garage conversion)

**SHORT TERM (next 30 days):**
1. Walkthrough video of a completed project (any past client who allows it)
2. Process video: "What happens during a free estimate visit"
3. Photos of any active project in progress (structural, framing, interior)

**ONGOING:**
- Every new project: hero photo on Day 1, progress photos weekly, final photos on completion day
- Every completed project: ask client permission to photograph and share

---

## 7. ADDING NEW PROJECTS — THE COMPLETE CHECKLIST

When BRE completes a new project:

**Photography:**
- [ ] Hero exterior shot (straight on, good light)
- [ ] 3-5 interior shots (key rooms)
- [ ] 2-3 detail/craftsmanship shots
- [ ] Before photos (if available)
- [ ] Name files: [subject]-[location]-[01].webp

**Upload:**
- [ ] Push all photos to bre-assets/projects/[slug]/
- [ ] CDN URL: cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/projects/[slug]/

**Code:**
- [ ] Add ProjectImages entry in lib/image-catalog.ts
- [ ] Every image: url, alt, title, caption, keywords, width, height
- [ ] Add to PROJECTS array in lib/site-data.ts
- [ ] Create app/projects/[slug]/page.tsx using ProjectTemplate
- [ ] Add to app/sitemap.ts

**If video:**
- [ ] Upload to YouTube with proper title/description/tags
- [ ] Add entry to VIDEOS array in lib/videos.ts
- [ ] Set projectSlug to match project page

**Verify:**
- [ ] Project page loads at /projects/[slug]/
- [ ] All images render (check network tab)
- [ ] Schema valid at schema.org/SchemaValidator
- [ ] Page in sitemap

---

## 8. MEDIA RULES — NON-NEGOTIABLE

1. **Real photos only** — No stock photos on project pages. Stock is acceptable for blog illustrations only when no real photo exists.

2. **No images without alt text** — Every image tag needs a proper alt attribute. Empty alt="" is for decorative images only.

3. **WebP format** — All new images uploaded as .webp. Smaller, faster, better SEO signals.

4. **CDN first** — All images served from cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/. Never from WP, never from Vercel public/ for project photos (100MB limit).

5. **Name before upload** — Rename files BEFORE uploading. Once a CDN URL is in the code, changing the filename breaks things.

6. **One source of truth** — lib/image-catalog.ts is the only place image metadata lives. lib/images.ts is a shorthand index. If a URL needs to change, change it in image-catalog.ts first.

7. **VideoObject schema on every video** — Embedded YouTube videos need VideoObject schema on the same page. This is how Google surfaces videos in search results.

8. **Caption every image** — Users read captions. Google reads captions. Captions are SEO content.
