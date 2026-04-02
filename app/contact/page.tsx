import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactPageInner from '@/components/ui/ContactPageInner'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Contact BRE Builders',
  description: 'Request a free estimate from BRE Builders — licensed general contractor in Reno, NV. ADUs, additions, custom homes, repairs, decks, commercial. NV #0085999 · CA #1093798.',
  alternates: { canonical: 'https://brebuilders.com/contact/' },
}

export default function ContactPage() {
  return (
    <>
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
