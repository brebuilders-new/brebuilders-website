import type { MetadataRoute } from 'next'

// All pages ordered by SEO priority based on GSC data
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://brebuilders.com'
  const now = new Date().toISOString()

  return [
    // ─── Tier 1: Highest priority — verified rankings ───────────────────
    { url: base + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: base + '/adus/', lastModified: now, changeFrequency: 'monthly', priority: 0.95 },  // #1 ranking
    { url: base + '/repairs/', lastModified: now, changeFrequency: 'monthly', priority: 0.95 }, // Page 1
    { url: base + '/contact/', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ─── Tier 2: Service pages ──────────────────────────────────────────
    { url: base + '/services/', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/additions/', lastModified: now, changeFrequency: 'monthly', priority: 0.85 }, // 19K impressions
    { url: base + '/kitchen/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/decks/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/new-home/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/concrete/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/hauling-removal/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/commercial-services/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/warehouse-metal-buildings/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/lofts-and-condo-remodels/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/residential-services/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ─── Tier 3: Portfolio ───────────────────────────────────────────────
    { url: base + '/projects/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/portfolio/lake-tahoe-interior-renovation-project-bre-builders/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/portfolio/ripon-california-estate-project/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/portfolio/adus/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/portfolio/warehouse-metal-buildings/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/portfolio/lake-tahoe-deck-balcony-structural-repair/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/portfolio/rio-tinto-home-renovation-project/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/portfolio/retail/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/portfolio/landscape-hardscape/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ─── Tier 4: Service areas ───────────────────────────────────────────
    { url: base + '/service-areas/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/service-areas/northern-california/', lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/service-areas/nevada/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ─── Tier 5: Company / info pages ────────────────────────────────────
    { url: base + '/about/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/our-approach/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/frequently-asked-questions-bre-builders/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/testimonials/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/careers/', lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    // ─── Tier 6: Blog posts ───────────────────────────────────────────────
    { url: base + '/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide/', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: base + '/top-10-signs-your-home-needs-structural-repair-dont-ignore-3/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/deck-safety-warning-signs-reno-lake-tahoe/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/reno-home-repairs-20-year-old-house/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/reno-home-repairs-30-year-old-house/', lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: base + '/reno-kitchen-remodeling-top-trends-investment-tips-for-2025/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/why-more-reno-homeowners-trust-bre-builders-for-structural-repairs/', lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: base + '/reno-1-billion-redevelopment-contractors/', lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: base + '/what-reno-homeowners-overlook-in-10-year-old-homes/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
