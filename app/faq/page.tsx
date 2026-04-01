import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQS, SITE } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'FAQ — BRE Builders Reno NV | Common Questions',
  description:
    'Answers to common questions about BRE Builders — services, pricing, timelines, materials, warranty, licensing, and service areas.',
  alternates: { canonical: 'https://brebuilders.com/frequently-asked-questions-bre-builders/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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

          {/* CTA block */}
          <div className="max-w-[800px] mt-16 p-8 bg-panel rounded-2xl border border-white/[0.06]">
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
