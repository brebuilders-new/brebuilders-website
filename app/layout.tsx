import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import PublicWidgets from '@/components/ui/PublicWidgets'

import RouteChangeTracker from '@/components/ui/RouteChangeTracker'
import { Suspense } from 'react'
import '../styles/globals.css'

const GTM_ID = 'GTM-MN8M8N3H'
const GA4_ID = 'G-WHEY4X04ZG'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'),
  title: {
    default: 'General Contractor Reno NV – Home & Commercial | Blue Reef Builders',
    template: '%s | Blue Reef Builders',
  },
  description:
    'BRE Builders – licensed general contractor serving Reno, Sparks, Lake Tahoe & Northern California since 1989. ADUs, custom homes, repairs, commercial. NV #0085999 CA #1093798.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brebuilders.com',
    siteName: 'Blue Reef Builders',
    images: [
      {
        url: `${SITE_URL}/api/og?title=General+Contractor+Reno+NV&sub=Licensed+Since+1989+%E2%80%93+NV+%230085999+%C2%B7+CA+%231093798`,
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
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License #1093798' },
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* GA4 direct — fires on initial page load before GTM hydrates */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}',{page_path:window.location.pathname});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://brebuilders.com/#ratings',
            name: 'Blue Reef Builders',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '6',
              bestRating: '5',
              worstRating: '1',
            },
            review: [
              { '@type': 'Review', author: { '@type': 'Person', name: 'Matt' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'I have worked with Steve for years. Always able to work with my budget and deliver beyond expectations. My go-to local expert.' },
              { '@type': 'Review', author: { '@type': 'Person', name: 'Stephanie' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'The team at Blue Reef Builders exceeds my expectations every time. Always met their stated deadlines and come in at bid. I continue to use them and recommend them whenever I can.' },
              { '@type': 'Review', author: { '@type': 'Person', name: 'Bill' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Steve and Chris and the whole team at BRE Builders have been a joy to work with. The results have been fabulous!' },
              { '@type': 'Review', author: { '@type': 'Person', name: 'Austin' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Their team met all of my needs — concrete, new deck, kitchen remodel, electrical and landscaping. One company handling everything under one roof.' },
              { '@type': 'Review', author: { '@type': 'Person', name: 'Reggie' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Steve and his team are licensed in both Nevada and California which is great for investment properties in both states.' },
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Are you licensed and insured?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BRE Builders is fully licensed, bonded, and insured. Nevada License #0085999. California License #1093798.' } },
              { '@type': 'Question', name: 'Do you offer free estimates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Free no-obligation estimates after a site visit. Call (775) 391-4517 or submit our project form.' } },
              { '@type': 'Question', name: 'What areas do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'Reno, Sparks, Carson City, Lake Tahoe, Truckee, and Northern California.' } },
              { '@type': 'Question', name: 'How soon can you start?', acceptedAnswer: { '@type': 'Answer', text: 'Once contract is signed and permits secured, we typically begin within 1-2 weeks.' } },
              { '@type': 'Question', name: 'Do projects come with a warranty?', acceptedAnswer: { '@type': 'Answer', text: '1-year workmanship warranty on all projects plus manufacturer warranties where applicable.' } },
              { '@type': 'Question', name: 'Can you build an ADU in Reno or Carson City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we handle all ADU permits and designs based on your property zoning in Nevada and California.' } },
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Steve Rosenthal',
            jobTitle: 'Owner & Founder',
            worksFor: { '@type': 'Organization', name: 'Blue Reef Builders' },
            knowsAbout: ['General Contracting', 'ADU Construction', 'Structural Repairs', 'Custom Home Building', 'Commercial Construction'],
            hasCredential: [
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Nevada Contractor License #0085999' },
              { '@type': 'EducationalOccupationalCredential', credentialCategory: 'California Contractor License #1093798' },
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://brebuilders.com/#website',
            url: 'https://brebuilders.com',
            name: 'Blue Reef Builders',
            description: 'Licensed general contractor serving Reno NV and Northern California since 1989.',
            publisher: { '@id': 'https://brebuilders.com/#business' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '.hero-lead', '.speakable-summary', '.speakable-intro'],
            },
          }) }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="noise-overlay" aria-hidden="true" />
        <div id="cursor" aria-hidden="true" />
        <div id="cursor-ring" aria-hidden="true" />
        <Suspense fallback={null}><RouteChangeTracker /></Suspense>
        {children}
        <PublicWidgets />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
