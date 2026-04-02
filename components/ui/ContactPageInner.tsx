'use client'

import { useSearchParams } from 'next/navigation'
import SmartQuoteForm, { type ServiceId } from '@/components/ui/SmartQuoteForm'
import { SITE } from '@/lib/site-data'

const VALID_SERVICES: ServiceId[] = [
  'adu', 'additions', 'new-home', 'kitchen-bath',
  'repairs', 'decks', 'commercial', 'other',
]

export default function ContactPageInner() {
  const searchParams = useSearchParams()
  const raw = searchParams.get('service') || ''
  const preselect = VALID_SERVICES.includes(raw as ServiceId) ? (raw as ServiceId) : undefined

  return (
    <div className="container">
      <div className="grid lg:grid-cols-[1fr_420px] gap-16 max-w-[1100px]">

        {/* Left — form */}
        <div>
          <div className="mb-10">
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">Free Estimate</p>
            <h1 className="font-display text-[clamp(36px,5vw,64px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Let&apos;s talk<br />
              <span className="italic text-teal">about your project.</span>
            </h1>
            <p className="text-[15px] text-cream/50 leading-relaxed max-w-[480px]">
              Tell us what you&apos;re building or repairing. We&apos;ll follow up within 24 hours to schedule a free on-site estimate — no pressure, no obligation.
            </p>
          </div>

          <SmartQuoteForm preselect={preselect} />
        </div>

        {/* Right — contact info */}
        <div className="lg:pt-[72px]">
          <div className="sticky top-28 space-y-6">

            {/* Direct contact */}
            <div className="bg-panel rounded-2xl border border-white/[0.07] p-6">
              <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal/70 mb-4">Prefer to call?</p>
              <a
                href={SITE.phoneHref}
                className="block font-display text-[28px] text-cream hover:text-teal transition-colors mb-1"
              >
                {SITE.phone}
              </a>
              <p className="text-[12px] text-cream/35 font-mono">Mon–Fri 7am–5pm PT</p>

              <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-2.5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-cream transition-colors"
                >
                  <svg className="w-4 h-4 text-teal/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE.email}
                </a>
                <div className="flex items-start gap-2.5 text-[13px] text-cream/50">
                  <svg className="w-4 h-4 text-teal/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>2600 Mill St #400<br />Reno, NV 89502</span>
                </div>
              </div>
            </div>

            {/* License block */}
            <div className="bg-panel rounded-2xl border border-white/[0.07] p-6">
              <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/25 mb-3">Licensed & Insured</p>
              <div className="space-y-1.5">
                <p className="font-mono text-[12px] text-cream/50">NV License <span className="text-cream/80">#0085999</span></p>
                <p className="font-mono text-[12px] text-cream/50">CA License <span className="text-cream/80">#1093798</span></p>
              </div>
              <p className="text-[12px] text-cream/30 mt-3 leading-relaxed">
                Serving Reno, Sparks, Lake Tahoe, Carson City, Truckee, and Northern California since 1989.
              </p>
            </div>

            {/* What to expect */}
            <div className="space-y-3">
              <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/25">What happens next</p>
              {[
                { n: '01', t: 'We review your request', d: 'Usually same business day' },
                { n: '02', t: 'We call to confirm details', d: 'Brief 5-min call' },
                { n: '03', t: 'On-site visit & estimate', d: 'Free, no obligation' },
              ].map(s => (
                <div key={s.n} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-teal/40 mt-0.5 w-5 flex-shrink-0">{s.n}</span>
                  <div>
                    <p className="text-[13px] text-cream/70">{s.t}</p>
                    <p className="text-[11px] text-cream/30 font-mono">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
