/**
 * Gallery Layout — server component
 *
 * gallery/page.tsx is 'use client' so metadata + JSON-LD must live here.
 * This layout wraps the client page and provides:
 *   - metadata (title, description, OG, twitter, robots)
 *   - ImageObject schema for Bing/Yahoo/Google Images indexing
 *   - Canonical URL
 */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'

export const metadata: Metadata = {
  title: 'Project Gallery | Construction Photos Reno NV & Lake Tahoe | BRE Builders',
  description: 'Browse completed construction projects by BRE Builders — full home renovations, structural repairs, ADUs, decks, and commercial builds across Reno NV, Lake Tahoe, and Northern California. Licensed NV #0085999.',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  alternates: { canonical: `${SITE_URL}/gallery/` },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/gallery/`,
    siteName: 'Blue Reef Builders',
    title: 'Project Gallery | BRE Builders — Reno NV & Lake Tahoe Construction',
    description: 'Completed construction projects — full home renovations, structural repairs, ADUs, decks, commercial builds. Reno NV, Lake Tahoe, Northern California. Licensed NV #0085999 · CA #1093798.',
    images: [{
      url: `${SITE_URL}/api/og?title=Project+Gallery&sub=Reno+NV+%C2%B7+Lake+Tahoe+%C2%B7+Northern+California+%C2%B7+NV+%230085999&badge=Portfolio`,
      width: 1200,
      height: 630,
      alt: 'Blue Reef Builders Project Gallery — Construction Photos Reno NV and Lake Tahoe',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery | BRE Builders — Reno NV & Lake Tahoe Construction',
    description: 'Completed construction projects — full home renovations, structural repairs, ADUs, decks, commercial builds. Licensed NV #0085999.',
    images: [{
      url: `${SITE_URL}/api/og?title=Project+Gallery&sub=Reno+NV+%C2%B7+Lake+Tahoe+%C2%B7+Northern+California+%C2%B7+NV+%230085999&badge=Portfolio`,
      alt: 'Blue Reef Builders Project Gallery — Construction Photos Reno NV and Lake Tahoe',
    }],
  },
}

// Representative static gallery images for Bing/Yahoo/Google Images indexing.
// Dynamic Blob photos (crew uploads) are covered by the image sitemap once live.
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/gallery/`,
      name: 'BRE Builders Project Gallery — Construction Photos Reno NV & Lake Tahoe',
      description: 'Portfolio of completed construction projects by Blue Reef Builders — full home renovations, structural repairs, ADUs, deck construction, and commercial builds across Northern Nevada and Northern California.',
      url: `${SITE_URL}/gallery/`,
      provider: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-summary'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery/` },
      ],
    },
    // ── Representative ImageObjects — one per project ──────────────────────
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#lt-renovation-hero',
      url: `${CDN}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`,
      contentUrl: `${CDN}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`,
      name: 'Lake Tahoe Full Home Renovation Exterior — BRE Builders',
      description: 'Completed exterior renovation at Zephyr Cove, Lake Tahoe NV. Structural upgrades, deck integration, new siding. BRE Builders NV #0085999.',
      caption: 'Full home renovation exterior — Zephyr Cove, Lake Tahoe NV by BRE Builders',
      encodingFormat: 'image/webp',
      width: 1024, height: 684,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'lake tahoe renovation, full home renovation, BRE Builders, licensed contractor nevada',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#ripon-hero',
      url: `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
      contentUrl: `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
      name: 'Ripon CA Luxury Estate Entryway — BRE Builders Custom Home',
      description: 'Classical columned entryway of luxury custom estate in Ripon, California. Built by BRE Builders CA #1093798.',
      caption: 'Luxury custom estate entryway — Ripon CA by BRE Builders CA #1093798',
      encodingFormat: 'image/jpeg',
      width: 1024, height: 684,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'ripon california luxury estate, custom home builder, BRE Builders, licensed contractor california',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#lt-deck-hero',
      url: `${CDN}/Lake-Tahoe-Deck-Reinforcement-%E2%80%93-Steel-Angle-Bracket-System-1000x1000.jpg`,
      contentUrl: `${CDN}/Lake-Tahoe-Deck-Reinforcement-%E2%80%93-Steel-Angle-Bracket-System-1000x1000.jpg`,
      name: 'Lake Tahoe Deck Structural Repair — Steel Angle Bracket System | BRE Builders',
      description: 'Steel angle bracket system restoring structural integrity to cantilevered deck at Lake Tahoe, NV. BRE Builders NV #0085999.',
      caption: 'Lake Tahoe deck structural repair — steel angle bracket system by BRE Builders',
      encodingFormat: 'image/jpeg',
      width: 1000, height: 1000,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'deck structural repair Lake Tahoe, BRE Builders, licensed contractor nevada',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#arun-hero',
      url: `${CDN}/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-1000x1000.jpg`,
      contentUrl: `${CDN}/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-1000x1000.jpg`,
      name: 'Arun Hillside Deck Repair — Reinforced Beams Lake Tahoe | BRE Builders',
      description: 'Hillside deck repair with reinforced support beams and elevated framing for snow load at Lake Tahoe, NV. BRE Builders NV #0085999.',
      caption: 'Arun hillside deck repair — reinforced structural beams, Lake Tahoe NV by BRE Builders',
      encodingFormat: 'image/jpeg',
      width: 1000, height: 1000,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'hillside deck repair Lake Tahoe, BRE Builders, licensed contractor nevada',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#charolette-hero',
      url: `${CDN}/Charolettes-Finished-Deck-%E2%80%93-Smooth-Sealed-Surface-1000x1000.jpg`,
      contentUrl: `${CDN}/Charolettes-Finished-Deck-%E2%80%93-Smooth-Sealed-Surface-1000x1000.jpg`,
      name: "Charolette's Finished Deck — Custom Deck Build Reno NV | BRE Builders",
      description: 'Custom deck with smooth sealed surface, proper drainage slope and UV-sealed finish in Reno, NV. BRE Builders NV #0085999.',
      caption: "Charolette's finished deck — smooth sealed surface, Reno NV by BRE Builders",
      encodingFormat: 'image/jpeg',
      width: 1000, height: 1000,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'custom deck Reno NV, BRE Builders, deck construction, licensed contractor nevada',
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://brebuilders.com/gallery/#adu-hero',
      url: `${CDN}/adu-homepage-600x403.jpg`,
      contentUrl: `${CDN}/adu-homepage-600x403.jpg`,
      name: 'ADU Construction Reno NV — BRE Builders',
      description: 'ADU backyard home construction in Reno, NV. Complete builds $75K–$300K. BRE Builders licensed general contractor NV #0085999.',
      caption: 'ADU backyard home construction — Reno NV by BRE Builders NV #0085999',
      encodingFormat: 'image/jpeg',
      width: 600, height: 403,
      representativeOfPage: false,
      creator: { '@type': 'Organization', name: 'Blue Reef Builders', '@id': 'https://brebuilders.com/#business' },
      copyrightHolder: { '@type': 'Organization', name: 'Blue Reef Builders' },
      license: `${SITE_URL}/terms-of-service/`,
      keywords: 'ADU construction Reno NV, BRE Builders, accessory dwelling unit, licensed contractor nevada',
    },
  ],
}

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
