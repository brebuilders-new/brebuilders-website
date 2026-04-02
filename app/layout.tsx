import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'),
  title: {
    default: 'General Contractor Reno NV – Home & Commercial | Blue Reef Builders',
    template: '%s | Blue Reef Builders',
  },
  description:
    'BRE Builders – licensed general contractor serving Reno, Sparks, Lake Tahoe & Northern California since 1989. ADUs, custom homes, repairs, commercial. NV #0085999 CA #1009219.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brebuilders.com',
    siteName: 'Blue Reef Builders',
    images: [
      {
        url: `${SITE_URL}/api/og?title=General+Contractor+Reno+NV&sub=Licensed+Since+1989+%E2%80%93+NV+%230085999+%C2%B7+CA+%231009219`,
        width: 1200,
        height: 630,
        alt: 'Blue Reef Builders – Licensed General Contractor Reno NV & California',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  robots: { index: true, follow: true },
}

const baseSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': 'https://brebuilders.com/#business',
  name: 'Blue Reef Builders',
  alternateName: ['BRE Builders', 'Blue Reef Enterprises'],
  url: 'https://brebuilders.com',
  telephone: '+17753914517',
  email: 'brebuilders@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2600 Mill St #400',
    addressLocality: 'Reno',
    addressRegion: 'NV',
    postalCode: '89502',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.5296, longitude: -119.8138 },
  foundingDate: '1989',
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License #0085999' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License #1009219' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Reno', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Sparks', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'Place', name: 'Lake Tahoe, NV' },
    { '@type': 'City', name: 'Carson City', containedInPlace: { '@type': 'State', name: 'Nevada' } },
    { '@type': 'City', name: 'Truckee', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'Place', name: 'Northern California' },
  ],
  sameAs: [
    'https://www.facebook.com/BlueReefBuilds/',
    'https://www.linkedin.com/in/steven-rosenthal-94223b15',
    'https://www.yelp.com/biz/blue-reef-enterprises-reno',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <div id="cursor" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
