/**
 * Image Sitemap — /image-sitemap.xml
 *
 * Covers all project, gallery, and service images.
 * Required for Bing/Yahoo image indexing (DuckDuckGo pulls from Bing index).
 * Google Images also uses this for faster discovery.
 *
 * Format: Google Image Sitemap extension (xmlns:image)
 * Bing reference: https://www.bing.com/webmasters/help/sitemap-32703a31
 */

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'

interface SitemapImage {
  loc: string
  title: string
  caption: string
  geo_location: string
}

interface SitemapUrl {
  loc: string
  images: SitemapImage[]
}

// ── Project images ──────────────────────────────────────────────────────────

const PROJECT_URLS: SitemapUrl[] = [
  // Glenbrook Lake Tahoe Full Home Renovation (22 of 37 confirmed)
  {
    loc: `${base}/projects/glenbrook-lake-tahoe/`,
    images: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(n => {
      const nn = String(n).padStart(2, '0')
      const captions = [
        'Exterior — Full Home Renovation','Front Elevation','Entry and Facade',
        'Main Living Area','Interior Finish Work','Kitchen Renovation',
        'Dining and Living','Master Suite','Master Bathroom','Secondary Bedroom',
        'Hallway and Details','Staircase','Upper Level','Loft Area',
        'Deck and Exterior','Rear Elevation','Side Elevation','Structural Work',
        'Foundation and Site','Framing Phase','Pre-Construction','Completed Project',
      ]
      return {
        loc: `${CDN}/2025/12/${nn}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37.webp`,
        title: `${captions[n-1]} — Glenbrook Lake Tahoe Full Home Renovation | BRE Builders`,
        caption: `${captions[n-1]} — BRE Builders full home renovation, Glenbrook, Lake Tahoe NV. Licensed General Contractor NV #0085999.`,
        geo_location: 'Glenbrook, NV, United States',
      }
    }),
  },

  // Zephyr Cove Lake Tahoe Interior Renovation (16 images)
  {
    loc: `${base}/projects/lake-tahoe-renovation/`,
    images: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(n => {
      const nn = String(n).padStart(2, '0')
      const captions = [
        'Exterior Renovation','Exterior Deck and Structural Work','Deck Railing and Walkway',
        'Interior Living Space','Interior Finish Work','Loft and Upper Level',
        'Custom Interior Staircase','Bathroom Renovation','Interior Room Renovation',
        'Bathroom Installation','Interior Staircase Multi-Level','Upper Level with Skylights',
        'Loft Area Natural Light','Exterior Deck Renovation','Deck Walkway Detail','Completed Exterior',
      ]
      return {
        loc: `${CDN}/2025/12/${nn}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16-1024x684.webp`,
        title: `${captions[n-1]} — Lake Tahoe Full Home Renovation | BRE Builders`,
        caption: `${captions[n-1]} — BRE Builders complete interior and exterior renovation, Zephyr Cove, Lake Tahoe NV. NV #0085999.`,
        geo_location: 'Zephyr Cove, NV, United States',
      }
    }),
  },

  // Ripon Estate
  {
    loc: `${base}/projects/ripon-estate/`,
    images: [
      {
        loc: `${CDN}/projects/ripon-estate/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
        title: 'Luxury Custom Estate Entryway — Ripon CA | BRE Builders',
        caption: 'Arched entry with fluted columns and ornamental molding — Ripon CA luxury estate by BRE Builders. CA License #1093798.',
        geo_location: 'Ripon, CA, United States',
      },
      {
        loc: `${CDN}/projects/ripon-estate/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`,
        title: 'Custom Kitchen Luxury Estate Ripon California | BRE Builders',
        caption: "Chef's kitchen with millwork, integrated lighting, marble backsplash — Ripon CA luxury estate. BRE Builders CA #1093798.",
        geo_location: 'Ripon, CA, United States',
      },
      {
        loc: `${CDN}/projects/ripon-estate/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`,
        title: 'Grand Foyer Custom Iron Staircase — Ripon CA Luxury Home | BRE Builders',
        caption: 'Double-height foyer with hand-forged ironwork staircase — Ripon CA custom estate. BRE Builders CA #1093798.',
        geo_location: 'Ripon, CA, United States',
      },
      {
        loc: `${CDN}/projects/ripon-estate/03368773-da7c-4798-8693-4b3cfefd3615.jpg`,
        title: 'Mediterranean Front Elevation Custom Home — Ripon CA | BRE Builders',
        caption: 'European-inspired columns, arched windows, central fountain — Ripon CA custom estate. BRE Builders.',
        geo_location: 'Ripon, CA, United States',
      },
      {
        loc: `${CDN}/projects/ripon-estate/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`,
        title: 'Elegant Laundry Suite Custom Home — Ripon CA | BRE Builders',
        caption: 'Charcoal cabinetry, marble surfaces, brass hardware — utility suite, Ripon CA luxury estate. BRE Builders.',
        geo_location: 'Ripon, CA, United States',
      },
    ],
  },
]

// ── Service images ──────────────────────────────────────────────────────────

const SERVICE_URLS: SitemapUrl[] = [
  {
    loc: `${base}/services/adu/`,
    images: [
      {
        loc: `${CDN}/services/adu/pool-house.jpg`,
        title: 'Pool House ADU Construction — BRE Builders Reno NV',
        caption: 'Pool house ADU with private patio — complete ADU build by BRE Builders, Reno NV. NV #0085999.',
        geo_location: 'Reno, NV, United States',
      },
      {
        loc: `${CDN}/services/adu/inlaw-unit.jpg`,
        title: 'In-Law Suite ADU with Private Entrance — BRE Builders Northern Nevada',
        caption: 'Licensed ADU builder in Reno NV — in-law suite with private entrance. BRE Builders NV #0085999.',
        geo_location: 'Reno, NV, United States',
      },
      {
        loc: `${CDN}/services/adu/garage.jpg`,
        title: 'Garage ADU Conversion with Custom Storage — BRE Builders Reno',
        caption: 'Garage-to-ADU conversion with built-in workstation and storage — BRE Builders Reno NV.',
        geo_location: 'Reno, NV, United States',
      },
    ],
  },
  {
    loc: `${base}/services/repairs/`,
    images: [
      {
        loc: `${CDN}/services/repairs/Foundation-Repair-and-Foundation-Issues-in-Reno-NV-min.jpg`,
        title: 'Foundation Repair Reno NV — BRE Builders Licensed Structural Contractor',
        caption: 'BRE Builders foundation repair inspection — Reno, NV. Licensed General Contractor NV #0085999.',
        geo_location: 'Reno, NV, United States',
      },
      {
        loc: `${CDN}/services/repairs/Water-Intrusion-and-Moisture-Issues-in-Reno-NV.jpg`,
        title: 'Water Intrusion Repair Reno NV — BRE Builders',
        caption: 'BRE Builders water intrusion and moisture issue resolution — Northern Nevada. NV #0085999.',
        geo_location: 'Reno, NV, United States',
      },
    ],
  },
]

// ── XML builder ─────────────────────────────────────────────────────────────

function buildXml(urls: SitemapUrl[]): string {
  const entries = urls.map(u => {
    const images = u.images.map(img => `
    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
      <image:geo_location>${escapeXml(img.geo_location)}</image:geo_location>
      <image:license>${base}/terms-of-service/</image:license>
    </image:image>`).join('')

    return `
  <url>
    <loc>${escapeXml(u.loc)}</loc>${images}
  </url>`
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const xml = buildXml([...PROJECT_URLS, ...SERVICE_URLS])
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
