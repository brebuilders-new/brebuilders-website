/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brebuilders.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // ─── Residential service pages ──────────────────────────────────
      { source: '/adus',                destination: '/services/adu',              permanent: true },
      { source: '/adus/',               destination: '/services/adu/',             permanent: true },
      { source: '/repairs',             destination: '/services/repairs',          permanent: true },
      { source: '/repairs/',            destination: '/services/repairs/',         permanent: true },
      { source: '/concrete',            destination: '/services/concrete',         permanent: true },
      { source: '/concrete/',           destination: '/services/concrete/',        permanent: true },
      { source: '/kitchen',             destination: '/services/kitchen-bath',     permanent: true },
      { source: '/kitchen/',            destination: '/services/kitchen-bath/',    permanent: true },
      { source: '/decks',               destination: '/services/decks',            permanent: true },
      { source: '/decks/',              destination: '/services/decks/',           permanent: true },
      { source: '/new-home',            destination: '/services/new-home',         permanent: true },
      { source: '/new-home/',           destination: '/services/new-home/',        permanent: true },
      { source: '/additions',           destination: '/services/additions',        permanent: true },
      { source: '/additions/',          destination: '/services/additions/',       permanent: true },
      { source: '/retail',              destination: '/services/retail',           permanent: true },
      { source: '/retail/',             destination: '/services/retail/',          permanent: true },
      { source: '/office',              destination: '/services/office',           permanent: true },
      { source: '/office/',             destination: '/services/office/',          permanent: true },
      { source: '/warehouse-metal-buildings',  destination: '/services/warehouse',         permanent: true },
      { source: '/warehouse-metal-buildings/', destination: '/services/warehouse/',        permanent: true },
      { source: '/hauling-removal',     destination: '/services/hauling',          permanent: true },
      { source: '/hauling-removal/',    destination: '/services/hauling/',         permanent: true },
      { source: '/lofts-and-condo-remodels',  destination: '/services/lofts-condos',      permanent: true },
      { source: '/lofts-and-condo-remodels/', destination: '/services/lofts-condos/',     permanent: true },
      // ─── Commercial service pages ────────────────────────────────────
      { source: '/commercial-services',  destination: '/services/commercial',      permanent: true },
      { source: '/commercial-services/', destination: '/services/commercial/',     permanent: true },
      // ─── Repair sub-pages ─────────────────────────────────────────────
      { source: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv',  destination: '/services/repairs/foundation',             permanent: true },
      { source: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', destination: '/services/repairs/foundation/',            permanent: true },
      { source: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv',      destination: '/services/repairs/water-intrusion',        permanent: true },
      { source: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/',     destination: '/services/repairs/water-intrusion/',       permanent: true },
      // ─── Company pages ───────────────────────────────────────────────
      { source: '/frequently-asked-questions-bre-builders',  destination: '/faq',  permanent: true },
      { source: '/frequently-asked-questions-bre-builders/', destination: '/faq/', permanent: true },
      { source: '/blogs',   destination: '/blog',   permanent: true },
      { source: '/blogs/',  destination: '/blog/',  permanent: true },
      { source: '/portfolio/',  destination: '/projects/', permanent: true },
      { source: '/portfolio',   destination: '/projects/', permanent: true },
      // ─── Project type taxonomies ──────────────────────────────────────
      { source: '/project-type/home-remodeling/',               destination: '/services/',            permanent: true },
      { source: '/project-type/commercial-tenant-improvements/', destination: '/services/commercial/', permanent: true },
      { source: '/project-type/custom-home-building/',          destination: '/services/new-home/',   permanent: true },
      { source: '/residential-services/',   destination: '/services/',   permanent: true },
      { source: '/residential-services',    destination: '/services/',   permanent: true },
      // ─── Portfolio → Project pages ────────────────────────────────────
      { source: '/portfolio/lake-tahoe-interior-renovation-project-bre-builders/',  destination: '/projects/lake-tahoe-renovation/',    permanent: true },
      { source: '/portfolio/ripon-california-estate-project/',                       destination: '/projects/ripon-estate/',             permanent: true },
      { source: '/portfolio/rio-tinto-home-renovation-project/',                    destination: '/projects/',                          permanent: true },
      { source: '/portfolio/quaking-aspen-structural-repair/',                      destination: '/projects/',                          permanent: true },
      { source: '/portfolio/lake-tahoe-deck-balcony-structural-repair/',            destination: '/projects/',                          permanent: true },
      { source: '/portfolio/mine-shaft-framing-shed-construction-reno-nv/',         destination: '/projects/',                          permanent: true },
      { source: '/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation/', destination: '/projects/',                        permanent: true },
      { source: '/portfolio/arun-hillside-deck-repair-lake-tahoe-nv/',              destination: '/projects/',                          permanent: true },
      { source: '/portfolio/adus/',                destination: '/services/adu/',      permanent: true },
      { source: '/portfolio/lake-tahoe-interior-renovation-project-bre-builders',  destination: '/projects/lake-tahoe-renovation/',    permanent: true },
      { source: '/portfolio/ripon-california-estate-project',                       destination: '/projects/ripon-estate/',             permanent: true },
      { source: '/portfolio/rio-tinto-home-renovation-project',                    destination: '/projects/',                          permanent: true },
      { source: '/portfolio/quaking-aspen-structural-repair',                      destination: '/projects/',                          permanent: true },
      { source: '/portfolio/lake-tahoe-deck-balcony-structural-repair',            destination: '/projects/',                          permanent: true },
      { source: '/portfolio/mine-shaft-framing-shed-construction-reno-nv',         destination: '/projects/',                          permanent: true },
      { source: '/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation', destination: '/projects/',                        permanent: true },
      { source: '/portfolio/arun-hillside-deck-repair-lake-tahoe-nv',              destination: '/projects/',                          permanent: true },
      { source: '/portfolio/adus',                destination: '/services/adu/',      permanent: true },
      // ─── Service areas ────────────────────────────────────────────────
      // /service-areas/nevada/ is the indexed URL for Reno page — keep pointing there
      { source: '/service-areas/nevada',  destination: '/service-areas/reno',  permanent: true },
      { source: '/service-areas/nevada/', destination: '/service-areas/reno/', permanent: true },
    ]
  },
  async headers() {
    return [
      // Spam/malware pages from December 2024 incident — noindex
      {
        source: '/step-into-the-spotlight-win-big-with-nine-casino-today-4226/',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/vavada-casino/',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

module.exports = nextConfig
