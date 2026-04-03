/**
 * BRE Builders — Complete Image Catalog
 * Source of truth for ALL images across the site
 *
 * ADDING NEW PROJECTS — follow this exact process:
 * 1. Upload images to CDN: github.com/brebuilders-new/bre-assets/projects/[slug]/
 * 2. Add ProjectImages entry below
 * 3. Every image MUST have: url, alt, title, caption, keywords[]
 * 4. alt text: 80-160 chars — [what shown] + [location] + "BRE Builders" + license
 * 5. Add to PROJECTS in lib/site-data.ts
 * 6. Create app/projects/[slug]/page.tsx using ProjectTemplate
 * 7. Add to app/sitemap.ts
 *
 * CDN: https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main
 * WP:  https://brebuilders.com/wp-content/uploads (remove after WP shutdown)
 */

export const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'
export const WP  = 'https://brebuilders.com/wp-content/uploads'

export interface BREImage {
  url: string        // CDN preferred, WP fallback
  wp_url?: string    // Remove after WP shutdown
  alt: string        // SEO optimized, 80-160 chars
  title: string      // For ImageObject schema
  caption: string    // Display caption
  keywords: string[] // For image SEO and AI indexing
  width?: number
  height?: number
}

export interface ProjectImages {
  slug: string
  name: string
  address?: string
  location: string
  service_type: string
  year?: string
  thumbnail: BREImage
  gallery: BREImage[]
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const PROJECT_IMAGES: Record<string, ProjectImages> = {

  'glenbrook-lake-tahoe': {
    slug: 'glenbrook-lake-tahoe',
    name: 'Glenbrook Lake Tahoe Full Home Renovation',
    address: 'Glenbrook, Lake Tahoe, NV',
    location: 'Glenbrook, Lake Tahoe, NV',
    service_type: 'full-home-renovation',
    year: '2025',
    thumbnail: {
      url: `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37.webp`,
      wp_url: `${WP}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37.webp`,
      alt: 'Glenbrook Lake Tahoe Full Home Renovation Exterior — BRE Builders Licensed General Contractor NV #0085999',
      title: 'Glenbrook Lake Tahoe Full Home Renovation | BRE Builders',
      caption: 'Glenbrook Lake Tahoe — Full Home Renovation Exterior',
      keywords: ['lake tahoe renovation', 'glenbrook nv contractor', 'full home renovation lake tahoe', 'bre builders', 'licensed general contractor nevada'],
      width: 1024, height: 684,
    },
    gallery: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(n => {
      const pad = String(n).padStart(2, '0')
      const captions = ['Exterior — Full Home Renovation','Front Elevation','Entry and Facade','Main Living Area','Interior Finish Work','Kitchen Renovation','Dining and Living','Master Suite','Master Bathroom','Secondary Bedroom','Hallway and Details','Staircase','Upper Level','Loft Area','Deck and Exterior','Rear Elevation','Side Elevation','Structural Work','Foundation and Site','Framing Phase','Pre-Construction','Completed Project']
      return {
        url: `${CDN}/2025/12/${pad}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37.webp`,
        wp_url: `${WP}/2025/12/${pad}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37.webp`,
        alt: `${captions[n-1] || 'Renovation Phase'} — Glenbrook Lake Tahoe Full Home Renovation by BRE Builders | Licensed Contractor NV #0085999`,
        title: `${captions[n-1] || 'Photo '+n} | Glenbrook Lake Tahoe Renovation | BRE Builders`,
        caption: captions[n-1] || `Photo ${n} of 37`,
        keywords: ['lake tahoe home renovation', 'glenbrook nv', 'bre builders', 'licensed contractor nevada', 'full home renovation'],
        width: 1024, height: 684,
      }
    }),
  },

  'zephyr-cove-lake-tahoe': {
    slug: 'zephyr-cove-lake-tahoe',
    name: 'Zephyr Cove Full Home Renovation',
    address: 'Zephyr Cove, Lake Tahoe, NV',
    location: 'Zephyr Cove, Lake Tahoe, NV',
    service_type: 'full-home-renovation',
    year: '2025',
    thumbnail: {
      url: `${CDN}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`,
      wp_url: `${WP}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`,
      alt: 'Zephyr Cove Lake Tahoe Full Home Renovation Exterior — BRE Builders Licensed General Contractor NV #0085999',
      title: 'Zephyr Cove Lake Tahoe Full Home Renovation | BRE Builders',
      caption: 'Full Home Renovation Exterior — Zephyr Cove, Lake Tahoe',
      keywords: ['lake tahoe renovation', 'zephyr cove nv contractor', 'full home renovation', 'bre builders', 'nv licensed contractor'],
      width: 1024, height: 684,
    },
    gallery: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(n => {
      const pad = String(n).padStart(2, '0')
      const suffix = n === 16 ? '-1' : ''
      const captions = ['Full Home Renovation Exterior','Exterior Deck and Structural Work','Deck Railing and Walkway','Interior Living Space','Interior Finish Work','Loft and Upper Level','Custom Interior Stairs','Bathroom Renovation','Interior Room Renovation','Bathroom Installation','Interior Staircase','Upper Level Renovation','Loft Area Renovation','Exterior Deck Renovation','Deck Walkway Detail','Completed Exterior']
      return {
        url: `${CDN}/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`,
        wp_url: `${WP}/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`,
        alt: `${captions[n-1]} — Zephyr Cove Lake Tahoe Full Home Renovation by BRE Builders | Licensed NV #0085999`,
        title: `${captions[n-1]} | Zephyr Cove Lake Tahoe | BRE Builders`,
        caption: captions[n-1],
        keywords: ['lake tahoe home renovation', 'zephyr cove', 'bre builders', 'licensed contractor nevada'],
        width: 1024, height: 684,
      }
    }),
  },

  'ripon-estate': {
    slug: 'ripon-estate',
    name: 'Ripon CA Luxury Custom Home',
    address: 'Ripon, CA',
    location: 'Ripon, California',
    service_type: 'custom-home',
    thumbnail: {
      url: `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
      wp_url: `${WP}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
      alt: 'Luxury Custom Home Mediterranean Entryway — Ripon CA by BRE Builders | Licensed General Contractor CA #1093798',
      title: 'Ripon CA Luxury Custom Home — Classical Architecture | BRE Builders',
      caption: 'Luxury Custom Home — Classical European Architecture, Ripon CA',
      keywords: ['luxury custom home ripon ca', 'custom home builder california', 'bre builders', 'licensed contractor ca #1093798', 'mediterranean architecture'],
    },
    gallery: [
      { url: `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`, wp_url: `${WP}/e228c329-e139-4d18-869f-29659b27e05d.jpg`, alt: 'Luxury Custom Home Classical Entryway Columns — Ripon CA by BRE Builders | CA #1093798', title: 'Classical Entryway | Ripon CA Custom Home | BRE Builders', caption: 'Classical Entryway with Columns', keywords: ['custom home ripon ca', 'luxury entryway', 'bre builders'] },
      { url: `${CDN}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`, wp_url: `${WP}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`, alt: 'Gourmet Kitchen Custom Home — Ripon CA by BRE Builders | Licensed Contractor CA #1093798', title: 'Gourmet Kitchen | Ripon CA Custom Home | BRE Builders', caption: 'Gourmet Kitchen — Custom Cabinetry and Finishes', keywords: ['custom kitchen ripon ca', 'luxury kitchen', 'bre builders'] },
      { url: `${CDN}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`, wp_url: `${WP}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`, alt: 'Custom Staircase Interior Custom Home — Ripon CA by BRE Builders | CA #1093798', title: 'Custom Staircase | Ripon CA Custom Home | BRE Builders', caption: 'Custom Interior Staircase', keywords: ['custom staircase', 'custom home interior', 'bre builders ripon ca'] },
      { url: `${CDN}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`, wp_url: `${WP}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`, alt: 'Mediterranean Front Elevation Luxury Estate — Ripon CA by BRE Builders | Licensed CA #1093798', title: 'Mediterranean Front Elevation | Ripon CA Luxury Estate | BRE Builders', caption: 'Mediterranean Front Elevation', keywords: ['luxury estate ripon ca', 'custom home builder california', 'bre builders'] },
      { url: `${CDN}/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`, wp_url: `${WP}/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`, alt: 'Luxury Laundry Suite Custom Home — Ripon CA by BRE Builders | CA #1093798', title: 'Luxury Laundry Suite | Ripon CA Custom Home | BRE Builders', caption: 'Luxury Laundry Suite with Custom Finishes', keywords: ['custom laundry suite', 'luxury home ripon ca', 'bre builders'] },
    ],
  },

  'adu-portfolio': {
    slug: 'adus',
    name: 'ADU Construction Portfolio',
    location: 'Reno & Northern Nevada',
    service_type: 'adu',
    thumbnail: {
      url: `${CDN}/adu-homepage-600x403.jpg`,
      wp_url: `${WP}/adu-homepage-600x403.jpg`,
      alt: 'ADU Construction Portfolio — Pool Houses, In-Law Suites, Garage Conversions by BRE Builders | Licensed ADU Builder Reno NV | NV #0085999',
      title: 'ADU Construction Portfolio | BRE Builders Reno NV',
      caption: 'ADU Construction — Reno & Northern Nevada',
      keywords: ['adu construction reno nv', 'adu builder reno', 'accessory dwelling unit nevada', 'bre builders', 'nv #0085999'],
    },
    gallery: [
      { url: `${CDN}/pool-house.jpg`, wp_url: `${WP}/pool-house.jpg`, alt: 'Pool House ADU Construction — BRE Builders Reno NV | Licensed ADU Contractor NV #0085999', title: 'Pool House ADU | BRE Builders Reno NV', caption: 'Pool House ADU — Guest Suite with Full Amenities', keywords: ['pool house adu reno', 'adu construction', 'bre builders'] },
      { url: `${CDN}/inlaw-unit.jpg`, wp_url: `${WP}/inlaw-unit.jpg`, alt: 'In-Law Suite ADU Construction — BRE Builders Reno NV | Licensed ADU Builder NV #0085999', title: 'In-Law Suite ADU | BRE Builders Reno NV', caption: 'In-Law Suite ADU — Private Entrance, Full Bath, Kitchenette', keywords: ['in-law suite reno nv', 'adu in-law unit', 'bre builders'] },
      { url: `${WP}/garage.jpg`, alt: 'Garage Conversion to ADU — BRE Builders Reno NV | Licensed ADU Contractor NV #0085999', title: 'Garage Conversion ADU | BRE Builders Reno NV', caption: 'Garage Conversion to ADU', keywords: ['garage conversion adu reno', 'garage to adu nevada', 'bre builders'] },
    ],
  },

  'quaking-aspen': {
    slug: 'quaking-aspen',
    name: 'Quaking Aspen Structural Repair',
    address: 'Reno, NV',
    location: 'Reno, NV',
    service_type: 'structural-repair',
    thumbnail: {
      url: `${CDN}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`,
      wp_url: `${WP}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`,
      alt: 'Extensive Dry Rot Exposure Along Wall Panel — Structural Repair by BRE Builders Reno NV | NV #0085999',
      title: 'Quaking Aspen Structural Repair — Dry Rot Remediation | BRE Builders',
      caption: 'Severe Dry Rot Exposure — Structural Wall Panel',
      keywords: ['dry rot repair reno nv', 'structural repair reno', 'wall panel repair', 'bre builders', 'nv #0085999'],
    },
    gallery: [
      { url: `${CDN}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`, wp_url: `${WP}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`, alt: 'Extensive Dry Rot Exposure Along Wall Panel — Structural Repair Reno NV | BRE Builders | NV #0085999', title: 'Dry Rot Wall Panel Exposure | Quaking Aspen Repair | BRE Builders', caption: 'Extensive Dry Rot — Full Wall Panel Exposure', keywords: ['dry rot repair', 'structural damage reno nv', 'bre builders'] },
    ],
  },

  'arun-deck-repair': {
    slug: 'arun-deck-repair',
    name: 'Arun Hillside Deck Repair',
    address: 'Lake Tahoe, NV',
    location: 'Lake Tahoe, NV',
    service_type: 'deck-repair',
    thumbnail: {
      url: `${CDN}/Arun-Deck-Repair---Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg`,
      wp_url: `${WP}/Arun-Deck-Repair-–-Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg`,
      alt: 'Hillside Deck Repair Reinforced Support Beams Elevated Framing — Lake Tahoe NV by BRE Builders | NV #0085999',
      title: 'Arun Hillside Deck Repair — Reinforced Framing | BRE Builders Lake Tahoe',
      caption: 'Reinforced Support Beams — Elevated Hillside Deck Framing',
      keywords: ['deck repair lake tahoe', 'hillside deck repair', 'structural deck reinforcement', 'bre builders', 'nv #0085999'],
    },
    gallery: [
      { url: `${CDN}/Arun-Deck-Repair---Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg`, alt: 'Reinforced Support Beams Elevated Framing Hillside Deck — Lake Tahoe NV | BRE Builders | NV #0085999', title: 'Reinforced Support Beams | Arun Deck Repair | BRE Builders', caption: 'Reinforced Support Beams — Elevated Framing', keywords: ['deck repair lake tahoe', 'structural deck', 'bre builders'] },
      { url: `${CDN}/Lake-Tahoe-Deck-Reinforcement---Steel-Angle-Bracket-System-600x403.jpg`, alt: 'Steel Angle Bracket System Securing Deck to CMU Wall — Lake Tahoe Structural Repair by BRE Builders | NV #0085999', title: 'Steel Bracket System | Lake Tahoe Deck Repair | BRE Builders', caption: 'Steel Angle Bracket System — Deck to CMU Wall', keywords: ['steel bracket deck repair', 'deck structural repair lake tahoe', 'bre builders'] },
    ],
  },

  'car-wash-reno': {
    slug: 'car-wash',
    name: 'Car Wash Concrete Slab & Foundation',
    address: 'Reno, NV',
    location: 'Reno, NV',
    service_type: 'commercial-concrete',
    thumbnail: {
      url: `${CDN}/Commercial-Concrete-Slab-Pour-with-Utility-Access---Reno-NV-600x403.jpg`,
      wp_url: `${WP}/Commercial-Concrete-Slab-Pour-with-Utility-Access-–-Reno-NV-600x403.jpg`,
      alt: 'Commercial Concrete Slab Pour with Utility Access — Car Wash Construction Reno NV by BRE Builders | NV #0085999',
      title: 'Car Wash Concrete Slab & Foundation — Reno NV | BRE Builders',
      caption: 'Commercial Concrete Slab Pour — Car Wash, Reno NV',
      keywords: ['commercial concrete reno nv', 'concrete slab pour', 'car wash construction reno', 'bre builders', 'commercial contractor nevada'],
    },
    gallery: [
      { url: `${CDN}/Commercial-Concrete-Slab-Pour-with-Utility-Access---Reno-NV-600x403.jpg`, alt: 'Commercial Concrete Slab Pour Utility Access Car Wash Reno NV — BRE Builders | NV #0085999', title: 'Concrete Slab Pour | Car Wash Reno NV | BRE Builders', caption: 'Commercial Concrete Slab Pour with Utility Access', keywords: ['concrete slab reno', 'commercial construction', 'bre builders'] },
    ],
  },

  'rio-tinto': {
    slug: 'rio-tinto',
    name: 'Rio Tinto Home Renovation',
    address: 'Rio Tinto, NV',
    location: 'Rio Tinto, NV',
    service_type: 'full-home-renovation',
    thumbnail: {
      url: `${CDN}/Interior-Living-Room-Drywall-Prep---Rio-Tinto-600x403.jpg`,
      wp_url: `${WP}/Interior-Living-Room-Drywall-Prep-–-Rio-Tinto-600x403.jpg`,
      alt: 'Interior Living Room Drywall Prep — Rio Tinto Home Renovation Reno NV by BRE Builders | NV #0085999',
      title: 'Rio Tinto Home Renovation — Interior & Exterior | BRE Builders Reno NV',
      caption: 'Interior Living Room — Drywall Preparation Phase',
      keywords: ['home renovation reno nv', 'interior renovation', 'drywall contractor reno', 'bre builders', 'nv #0085999'],
    },
    gallery: [
      { url: `${CDN}/Interior-Living-Room-Drywall-Prep---Rio-Tinto-600x403.jpg`, alt: 'Interior Living Room Drywall Prep Rio Tinto Reno NV — BRE Builders | NV #0085999', title: 'Interior Drywall Prep | Rio Tinto Renovation | BRE Builders', caption: 'Interior Living Room — Drywall Preparation', keywords: ['drywall renovation reno', 'interior renovation', 'bre builders'] },
    ],
  },
}

// ─── HELPER: Get image URL (CDN preferred) ───────────────────────────────────
export function getImageUrl(img: BREImage): string {
  return img.url
}

// ─── HELPER: Generate ImageObject schema ─────────────────────────────────────
export function imageSchema(img: BREImage, projectName: string) {
  return {
    '@type': 'ImageObject',
    url: img.url,
    name: img.title,
    description: img.alt,
    caption: img.caption,
    author: {
      '@type': 'Organization',
      name: 'Blue Reef Builders',
      url: 'https://brebuilders.com',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Blue Reef Builders',
    },
    keywords: img.keywords.join(', '),
  }
}
