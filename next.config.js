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
      // ─── Residential service pages ──────────
      { source: '/adus', destination: '/services/adu', permanent: true },
      { source: '/adus/', destination: '/services/adu/', permanent: true },
      { source: '/repairs', destination: '/services/repairs', permanent: true },
      { source: '/repairs/', destination: '/services/repairs/', permanent: true },
      { source: '/concrete', destination: '/services/concrete', permanent: true },
      { source: '/concrete/', destination: '/services/concrete/', permanent: true },
      { source: '/kitchen', destination: '/services/kitchen-bath', permanent: true },
      { source: '/kitchen/', destination: '/services/kitchen-bath/', permanent: true },
      { source: '/decks', destination: '/services/decks', permanent: true },
      { source: '/decks/', destination: '/services/decks/', permanent: true },
      { source: '/new-home', destination: '/services/new-home', permanent: true },
      { source: '/new-home/', destination: '/services/new-home/', permanent: true },
      { source: '/additions', destination: '/services/additions', permanent: true },
      { source: '/additions/', destination: '/services/additions/', permanent: true },
      { source: '/retail', destination: '/services/retail', permanent: true },
      { source: '/retail/', destination: '/services/retail/', permanent: true },
      { source: '/office', destination: '/services/office', permanent: true },
      { source: '/office/', destination: '/services/office/', permanent: true },
      { source: '/warehouse-metal-buildings', destination: '/services/warehouse', permanent: true },
      { source: '/warehouse-metal-buildings/', destination: '/services/warehouse/', permanent: true },
      { source: '/hauling-removal', destination: '/services/hauling', permanent: true },
      { source: '/hauling-removal/', destination: '/services/hauling/', permanent: true },
      { source: '/lofts-and-condo-remodels', destination: '/services/lofts-condos', permanent: true },
      { source: '/lofts-and-condo-remodels/', destination: '/services/lofts-condos/', permanent: true },
      // ─── Repair sub-pages ───────────────────
      { source: '/repairs/foundation-repair-and-foundation-issues-in-reno-nv/', destination: '/services/repairs/foundation/', permanent: true },
      { source: '/repairs/water-intrusion-and-moisture-issues-in-reno-nv/', destination: '/services/repairs/water-intrusion/', permanent: true },
      // ─── Hub / misc pages ───────────────────
      { source: '/frequently-asked-questions-bre-builders', destination: '/faq', permanent: true },
      { source: '/frequently-asked-questions-bre-builders/', destination: '/faq/', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/', destination: '/blog/', permanent: true },
      { source: '/project-type/home-remodeling/', destination: '/services/', permanent: true },
      { source: '/project-type/commercial-tenant-improvements/', destination: '/services/commercial/', permanent: true },
      { source: '/project-type/custom-home-building/', destination: '/services/new-home/', permanent: true },
      { source: '/residential-services/', destination: '/services/', permanent: true },
      // ─── Portfolio pages ─────────────────────
      { source: '/portfolio/lake-tahoe-interior-renovation-project/', destination: '/projects/lake-tahoe-interior-renovation/', permanent: true },
      { source: '/portfolio/ripon-california-estate-project/', destination: '/projects/ripon-estate/', permanent: true },
      { source: '/portfolio/rio-tinto-home-renovation-project/', destination: '/projects/rio-tinto-renovation/', permanent: true },
      { source: '/portfolio/quaking-aspen-structural-repair/', destination: '/projects/quaking-aspen-repair/', permanent: true },
      { source: '/portfolio/lake-tahoe-deck-balcony-structural-repair/', destination: '/projects/lake-tahoe-deck-repair/', permanent: true },
      { source: '/portfolio/mine-shaft-framing-shed-construction-reno-nv/', destination: '/projects/mine-shaft-framing/', permanent: true },
      { source: '/portfolio/car-wash-construction-reno-nv-concrete-slab-foundation/', destination: '/projects/car-wash-reno/', permanent: true },
      { source: '/portfolio/arun-hillside-deck-repair-lake-tahoe-nv/', destination: '/projects/arun-deck-repair/', permanent: true },
      { source: '/portfolio/charolettes-deck/', destination: '/projects/charolettes-deck/', permanent: true },
      // ─── Service areas ───────────────────────
      { source: '/service-areas/nevada/', destination: '/service-areas/', permanent: true },
    ]
  },
}

module.exports = nextConfig
