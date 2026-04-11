/** @type {import('next').NextConfig} */
const nextConfig = {
  // Normalize all URLs to trailing slash — fixes 68 redirect variants missing /
  // and ensures canonical consistency with alternates: { canonical: '.../slug/' }
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brebuilders.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/brebuilders-new/bre-assets/**',
      },
    ],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // ─── WP short slugs → new service paths ──────────────────────────
      { source: '/adus',                          destination: '/services/adu',                   permanent: true },
      { source: '/repairs',                       destination: '/services/repairs',               permanent: true },
      { source: '/concrete',                      destination: '/services/concrete',              permanent: true },
      { source: '/kitchen',                       destination: '/services/kitchen-bath',          permanent: true },
      { source: '/decks',                         destination: '/services/decks',                 permanent: true },
      { source: '/new-home',                      destination: '/services/new-home',              permanent: true },
      { source: '/additions',                     destination: '/services/additions',             permanent: true },
      { source: '/retail',                        destination: '/services/retail',                permanent: true },
      { source: '/office',                        destination: '/services/office',                permanent: true },
      { source: '/warehouse-metal-buildings',     destination: '/services/warehouse',             permanent: true },
      { source: '/hauling-removal',               destination: '/services/hauling',               permanent: true },
      { source: '/lofts-and-condo-remodels',      destination: '/services/lofts-condos',          permanent: true },
      { source: '/commercial-services',           destination: '/services/commercial',            permanent: true },

      // ─── Repair sub-pages ────────────────────────────────────────────
      { source: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv',      destination: '/services/repairs/foundation',        permanent: true },
      { source: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv',          destination: '/services/repairs/water-intrusion',   permanent: true },

      // ─── Company pages ───────────────────────────────────────────────
      { source: '/frequently-asked-questions-bre-builders',   destination: '/faq',            permanent: true },
      { source: '/blogs',                                      destination: '/blog',           permanent: true },
      { source: '/portfolio',                                  destination: '/projects',       permanent: true },
      { source: '/residential-services',                       destination: '/services/',      permanent: true },
      { source: '/residential-services/',                      destination: '/services/',      permanent: true },

      // ─── Project type taxonomies ──────────────────────────────────────
      { source: '/project-type/home-remodeling',               destination: '/services',           permanent: true },
      { source: '/project-type/commercial-tenant-improvements', destination: '/services/commercial', permanent: true },
      { source: '/project-type/custom-home-building',          destination: '/services/new-home',   permanent: true },

      // ─── WP portfolio → project pages ────────────────────────────────
      { source: '/portfolio/lake-tahoe-interior-renovation-project-bre-builders',    destination: '/projects/lake-tahoe-renovation',  permanent: true },
      { source: '/portfolio/ripon-california-estate-project',                        destination: '/projects/ripon-estate',           permanent: true },
      { source: '/portfolio/rio-tinto-home-renovation-project',                      destination: '/projects/rio-tinto',              permanent: true },
      { source: '/portfolio/quaking-aspen-structural-repair',                        destination: '/projects/quaking-aspen',          permanent: true },
      { source: '/portfolio/lake-tahoe-deck-balcony-structural-repair',              destination: '/projects/lake-tahoe-deck',        permanent: true },
      { source: '/portfolio/mine-shaft-framing-shed-construction-reno-nv',           destination: '/projects/mine-shaft',             permanent: true },
      { source: '/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation', destination: '/projects/car-wash',              permanent: true },
      { source: '/portfolio/arun-hillside-deck-repair-lake-tahoe-nv',               destination: '/projects/arun-deck-repair',       permanent: true },
      { source: '/portfolio/adus',                                                   destination: '/services/adu',                    permanent: true },

      // ─── Project slug aliases ─────────────────────────────────────────
      { source: '/projects/lake-tahoe-interior-renovation',   destination: '/projects/lake-tahoe-renovation',  permanent: true },

      { source: '/portfolio/charolettes-deck',    destination: '/projects/charolettes-deck',   permanent: true },
      { source: '/portfolio/lake-tahoe-hillside-structural-repair-expansion', destination: '/projects/lake-tahoe-renovation', permanent: true },
      // ─── Service area aliases ─────────────────────────────────────────

      // ─── Portfolio category pages → relevant service pages ───────────────
      { source: '/portfolio/additions',                    destination: '/services/additions',       permanent: true },
      { source: '/portfolio/commercial-tenant-improvements', destination: '/services/commercial',    permanent: true },
      { source: '/portfolio/concrete',                     destination: '/services/concrete',        permanent: true },
      { source: '/portfolio/custom-home-building',         destination: '/services/new-home',        permanent: true },
      { source: '/portfolio/decks',                        destination: '/services/decks',           permanent: true },
      { source: '/portfolio/hauling-removal',              destination: '/services/hauling',         permanent: true },
      { source: '/portfolio/home-remodeling',              destination: '/services',                 permanent: true },
      { source: '/portfolio/kitchen-bath',                 destination: '/services/kitchen-bath',    permanent: true },
      { source: '/portfolio/lake-tahoe-interior-renovation-project', destination: '/projects/lake-tahoe-renovation', permanent: true },
      { source: '/portfolio/landscape-hardscape',          destination: '/projects',                 permanent: true },
      { source: '/portfolio/lofts-condo-remodels',         destination: '/services/lofts-condos',    permanent: true },
      { source: '/portfolio/new-home',                     destination: '/services/new-home',        permanent: true },
      { source: '/portfolio/office',                       destination: '/services/office',          permanent: true },
      { source: '/portfolio/repairs',                      destination: '/services/repairs',         permanent: true },
      { source: '/portfolio/retail',                       destination: '/services/retail',          permanent: true },
      { source: '/portfolio/warehouse-metal-buildings',    destination: '/services/warehouse',       permanent: true },

      // ─── WP Category / taxonomy pages ────────────────────────────────────
      { source: '/category/deck-repair',                   destination: '/services/decks',           permanent: true },
      { source: '/category/adu-construction',              destination: '/services/adu',             permanent: true },
      { source: '/category/concrete-work',                 destination: '/services/concrete',        permanent: true },
      { source: '/project-type/car-wash',                  destination: '/projects/car-wash',        permanent: true },

      { source: '/service-areas/nevada',   destination: '/service-areas/reno',  permanent: true },

      // ─── WP blog post slugs → /blog/[slug] on Vercel ─────────────────
      { source: '/how-to-add-an-adu-in-nevada-without-breaking-the-bank-2025-guide',    destination: '/blog/how-to-add-an-adu-in-nevada',            permanent: true },
      { source: '/top-10-signs-your-home-needs-structural-repair-dont-ignore-3',        destination: '/blog/structural-repair-warning-signs',        permanent: true },
      { source: '/deck-safety-warning-signs-reno-lake-tahoe',                           destination: '/blog/deck-safety-warning-signs',              permanent: true },
      { source: '/reno-kitchen-remodeling-top-trends-investment-tips-for-2025',         destination: '/blog/reno-kitchen-remodeling-trends',         permanent: true },
      { source: '/from-strikes-to-suds-how-bre-builders-saved-a-reno-icon',             destination: '/blog/bre-builders-car-wash-reno',             permanent: true },
      { source: '/reno-home-repairs-20-year-old-house',                                 destination: '/blog/reno-home-repairs-20-year',              permanent: true },
      { source: '/reno-home-repairs-30-year-old-house',                                 destination: '/blog/reno-home-repairs-30-year',              permanent: true },
      { source: '/why-more-reno-homeowners-trust-bre-builders-for-structural-repairs',  destination: '/blog/reno-structural-repairs',                permanent: true },
      { source: '/reno-1-billion-redevelopment-contractors',                            destination: '/blog/reno-redevelopment',                     permanent: true },
      { source: '/what-reno-homeowners-overlook-in-10-year-old-homes',                  destination: '/blog/reno-home-10-year-maintenance',          permanent: true },
      { source: '/5-signs-its-time-to-remodel-your-kitchen-2-hurts-your-home-value',    destination: '/blog/5-signs-its-time-to-remodel-your-kitchen', permanent: true },
      { source: '/is-your-kitchen-ruining-your-property-value-fix-these-5-things-first', destination: '/blog/is-your-kitchen-ruining-your-property-value', permanent: true },
      { source: '/blue-reef-builders-dynamic-home-renovation-flow-nevada-focused',       destination: '/',                                             permanent: true },
    ]
  },
  async headers() {
    return [
      // Spam/malware pages from December 2024 incident — return 410 Gone
      {
        source: '/step-into-the-spotlight-win-big-with-nine-casino-today-4226/',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
      {
        source: '/vavada-casino/',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ]
  },
}

// Dynamic rewrites
nextConfig.rewrites = async function() {
  return [
    { source: '/llms.txt', destination: '/api/llms' },
  ]
}

module.exports = nextConfig
