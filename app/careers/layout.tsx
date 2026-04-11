/**
 * Careers Layout — server component
 * careers/page.tsx is 'use client' — metadata lives here.
 */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Careers | Join BRE Builders — Reno NV Construction Jobs',
  description:
    'BRE Builders is hiring experienced construction professionals in Reno NV. Carpenters, laborers, project managers, estimators. Licensed general contractor since 1989. Apply online.',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  alternates: { canonical: `${SITE_URL}/careers/` },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/careers/`,
    siteName: 'Blue Reef Builders',
    title: 'Careers | BRE Builders — Reno NV Construction Jobs',
    description: 'Join BRE Builders in Reno NV. Hiring carpenters, laborers, project managers, estimators. Licensed general contractor since 1989. Apply online.',
    images: [{
      url: `${SITE_URL}/api/og?title=Careers+at+BRE+Builders&sub=Reno+NV+%C2%B7+Licensed+Since+1989+%C2%B7+Now+Hiring&badge=Careers`,
      width: 1200, height: 630,
      alt: 'BRE Builders Careers — Construction Jobs in Reno NV',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | BRE Builders — Reno NV Construction Jobs',
    description: 'Join BRE Builders in Reno NV. Hiring carpenters, laborers, project managers, estimators. Licensed general contractor since 1989.',
    images: [{
      url: `${SITE_URL}/api/og?title=Careers+at+BRE+Builders&sub=Reno+NV+%C2%B7+Licensed+Since+1989+%C2%B7+Now+Hiring&badge=Careers`,
      alt: 'BRE Builders Careers — Construction Jobs in Reno NV',
    }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/careers/`,
      name: 'Careers at BRE Builders — Construction Jobs Reno NV',
      url: `${SITE_URL}/careers/`,
      description: 'BRE Builders is hiring construction professionals in Reno, NV. Positions include general laborers, carpenters, project managers, estimators, and site supervisors.',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1'] },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: `${SITE_URL}/careers/` },
      ],
    },
  ],
}

export default function CareersLayout({ children }: { children: ReactNode }) {
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
