import type { MetadataRoute } from 'next'

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const now = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Tier 1: Core ──────────────────────────────────────────────────────
    { url: base + '/',                                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: base + '/services/adu/',                           lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: base + '/services/repairs/',                       lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: base + '/contact/',                                lastModified: now, changeFrequency: 'monthly', priority: 0.90 },

    // ── Tier 2: Service pages ─────────────────────────────────────────────
    { url: base + '/services/',                               lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: base + '/services/repairs/foundation/',            lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/services/repairs/water-intrusion/',       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/services/additions/',                     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/services/kitchen-bath/',                  lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: base + '/services/decks/',                         lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/services/new-home/',                      lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/services/new-home-builds/',               lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/services/commercial/',                    lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/services/concrete/',                      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/services/hauling/',                       lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/services/warehouse/',                     lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/services/retail/',                        lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/services/office/',                        lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/services/lofts-condos/',                  lastModified: now, changeFrequency: 'monthly', priority: 0.70 },

    // ── Tier 3: Projects / Portfolio ──────────────────────────────────────
    { url: base + '/projects/',                               lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: base + '/projects/glenbrook-lake-tahoe/',         lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: base + '/projects/lake-tahoe-renovation/',         lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/projects/ripon-estate/',                  lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: base + '/projects/adus/',                          lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/projects/warehouse-metal-buildings/',     lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
    { url: base + '/projects/lake-tahoe-deck/',               lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/projects/quaking-aspen/',                 lastModified: now, changeFrequency: 'monthly', priority: 0.68 },
    { url: base + '/projects/car-wash/',                      lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/projects/arun-deck-repair/',              lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/projects/rio-tinto/',                     lastModified: now, changeFrequency: 'monthly', priority: 0.62 },

    // ── Tier 4: Service areas ─────────────────────────────────────────────
    { url: base + '/service-areas/',                          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/service-areas/reno/',                     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: base + '/service-areas/lake-tahoe/',               lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/service-areas/northern-california/',      lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: base + '/service-areas/sparks/',                   lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/service-areas/carson-city/',              lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: base + '/service-areas/truckee/',                  lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Tier 5: Company ───────────────────────────────────────────────────
    { url: base + '/about/',                                  lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/testimonials/',                           lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/faq/',                                    lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/our-approach/',                           lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: base + '/careers/',                                lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    // ── Tier 6: Blog ──────────────────────────────────────────────────────
    { url: base + '/blog/',                                   lastModified: now, changeFrequency: 'weekly',  priority: 0.70 },
    { url: base + '/blog/how-to-add-an-adu-in-nevada/',       lastModified: now, changeFrequency: 'weekly',  priority: 0.80 },
    { url: base + '/blog/structural-repair-warning-signs/',   lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
    { url: base + '/blog/deck-safety-warning-signs/',         lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: base + '/blog/reno-kitchen-remodeling-trends/',    lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/blog/is-your-kitchen-ruining-your-property-value/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/blog/5-signs-its-time-to-remodel-your-kitchen/', lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: base + '/blog/bre-builders-car-wash-reno/',        lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: base + '/blog/reno-home-repairs-20-year/',         lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: base + '/blog/reno-home-repairs-30-year/',         lastModified: now, changeFrequency: 'monthly', priority: 0.60 },
    { url: base + '/blog/reno-structural-repairs/',           lastModified: now, changeFrequency: 'monthly', priority: 0.58 },
    { url: base + '/blog/reno-redevelopment/',                lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: base + '/blog/reno-home-10-year-maintenance/',     lastModified: now, changeFrequency: 'monthly', priority: 0.55 },

    // ── Tier 7: Legal ─────────────────────────────────────────────────────
    { url: base + '/privacy-policy/',                         lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
    { url: base + '/terms-of-service/',                       lastModified: now, changeFrequency: 'yearly',  priority: 0.30 },
    { url: base + '/cancellation-policy/',                    lastModified: now, changeFrequency: 'yearly',  priority: 0.25 },
  ]
}
