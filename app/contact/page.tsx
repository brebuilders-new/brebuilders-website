import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactPageInner from '@/components/ui/ContactPageInner'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'Free Quote | Contact Us | Reno NV',
  description: 'Request a free estimate from BRE Builders in Reno, NV. ADUs, additions, custom homes, repairs, commercial. NV #0085999 · CA #1093798. Response within 24 hours.',
  openGraph: {
    images: [{ url: `${SITE_URL}/api/og?title=Free+Quote+%7C+Contact+BRE+Builders&sub=Reno+NV+%C2%B7+Free+Estimates+%C2%B7+NV+%230085999+%C2%B7+CA+%231093798&badge=Contact`, width: 1200, height: 630 }],
  },
  alternates: { canonical: `${SITE_URL}/contact/` },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': 'https://brebuilders.com/contact/',
            url: 'https://brebuilders.com/contact/',
            name: 'Get a Free Quote | BRE Builders Reno NV',
            description: 'Request a free estimate from BRE Builders in Reno, NV. Licensed NV #0085999.',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.contact-intro'] },
          },
          {
            '@type': 'ContactPage',
            name: 'Contact BRE Builders',
            url: 'https://brebuilders.com/contact/',
          },
        ],
      }) }} />
      <Nav />
      <main className="pt-28 pb-24">
        <Suspense fallback={<div className="container py-20 text-cream/30 font-mono text-sm">Loading...</div>}>
          <ContactPageInner />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
