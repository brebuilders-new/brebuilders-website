import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQS, SITE } from '@/lib/site-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'

export const metadata: Metadata = {
  title: 'FAQ — Licensed Contractor Reno NV | Common Questions',
  description:
    'Answers to common questions about BRE Builders — services, pricing, timelines, materials, warranty, licensing, and service areas.',
  alternates: { canonical: `${SITE_URL}/frequently-asked-questions-bre-builders/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://brebuilders.com/faq/#faqpage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'WebPage',
      '@id': 'https://brebuilders.com/faq/',
      url: 'https://brebuilders.com/faq/',
      name: 'Frequently Asked Questions | BRE Builders Reno NV',
      description: 'Common questions about BRE Builders — licensing, permits, timelines, ADU costs, warranties, and service areas. Licensed NV #0085999 · CA #1093798.',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.faq-intro', '.speakable-faq'],
      },
    },
  ],
}

export default function FAQPage() {
  // Group FAQs by category for better UX
  const groups = [
    {
      label: 'About BRE Builders',
      items: FAQS.filter((_, i) => i < 3),
    },
    {
      label: 'Project Process',
      items: FAQS.filter((_, i) => i >= 3 && i < 8),
    },
    {
      label: 'Materials, Warranty & Payment',
      items: FAQS.filter((_, i) => i >= 8 && i < 12),
    },
    {
      label: 'ADUs & Licensing',
      items: FAQS.filter((_, i) => i >= 12),
    },
  ]

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[600px] mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Frequently Asked Questions</span>
            </div>
            <h1 className="font-display text-[clamp(36px,5vw,66px)] font-light leading-[1.0] tracking-tight text-cream mb-5">
              Common Questions
              <br /><span className="italic text-teal">Answered.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed">
              Everything you need to know about working with BRE Builders — services, pricing,
              timelines, licensing, and more.
            </p>
          </div>

          {/* FAQ groups */}
          <div className="max-w-[800px]">
            {groups.map((group) => (
              <div key={group.label} className="mb-12">
                <h2 className="font-mono text-[11px] tracking-[3px] uppercase text-teal/70 mb-6 flex items-center gap-3">
                  <div className="w-6 h-px bg-teal/40" />
                  {group.label}
                </h2>
                <FAQAccordion items={group.items} />
              </div>
            ))}
          </div>

          {/* Related services — FAQ readers are in research mode */}
          <div className="max-w-[800px] mt-14 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">Explore Our Services</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                { label: 'ADU Construction', desc: 'From $75,000 · Permit-ready designs', href: '/services/adu' },
                { label: 'Structural Repairs', desc: 'Foundation, framing, dry rot — free estimates', href: '/services/repairs' },
                { label: 'Kitchen & Bath Remodeling', desc: 'Full remodels and targeted upgrades', href: '/services/kitchen-bath' },
                { label: 'Deck Construction & Repair', desc: 'Snow-load rated builds for Reno & Tahoe', href: '/services/decks' },
                { label: 'Home Additions', desc: 'Room additions, second stories, garage additions', href: '/services/additions' },
                { label: 'Commercial Construction', desc: 'Tenant improvements, office, warehouse', href: '/services/commercial' },
              ].map(s => (
                <Link key={s.href} href={s.href} className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-teal/25 bg-panel/50 hover:bg-teal/[0.04] transition-all">
                  <div className="flex-1">
                    <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">{s.label}</span>
                    <span className="text-[11px] text-cream/35 block mt-0.5">{s.desc}</span>
                  </div>
                  <span className="text-cream/20 group-hover:text-teal text-[12px] flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Reno, NV', href: '/service-areas/nevada/' },
                { label: 'Sparks, NV', href: '/service-areas/sparks/' },
                { label: 'Lake Tahoe', href: '/service-areas/lake-tahoe/' },
                { label: 'Carson City', href: '/service-areas/carson-city/' },
                { label: 'Truckee, CA', href: '/service-areas/truckee/' },
                { label: 'Northern CA', href: '/service-areas/northern-california/' },
              ].map(a => (
                <Link key={a.href} href={a.href} className="font-mono text-[11px] text-cream/40 hover:text-teal border border-white/[0.07] hover:border-teal/25 px-3 py-1.5 rounded-full transition-all">
                  {a.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="max-w-[800px] mt-8 p-8 bg-panel rounded-2xl border border-white/[0.06]">
            <p className="font-display text-[22px] text-cream mb-2">Still have questions?</p>
            <p className="text-[14px] text-cream/50 mb-6">
              Call us directly or submit a project request. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={SITE.phoneHref} className="btn-primary">📞 {SITE.phone}</a>
              <Link href="/contact" className="btn-ghost">Submit a Project Request →</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
