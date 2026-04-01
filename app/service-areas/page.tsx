import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Service Areas | BRE Builders Reno NV | Nevada & California',
  description:
    'BRE Builders serves Reno, Sparks, Lake Tahoe, Carson City, Truckee, Graeagle, and Northern California. Licensed NV #0085999 · CA #1009219.',
  alternates: { canonical: 'https://brebuilders.com/service-areas/' },
}

const AREAS = [
  {
    name: 'Reno, NV',
    slug: 'reno',
    license: 'NV #0085999',
    state: 'NV',
    services: ['ADU Construction', 'Structural Repairs', 'Kitchen & Bath', 'Decks', 'Additions', 'Custom Homes', 'Commercial', 'Concrete'],
    img: IMGS.lt(1),
    alt: 'BRE Builders project Reno NV general contractor',
    desc: 'Primary service area. All residential and commercial services available. Fastest response times.',
  },
  {
    name: 'Sparks, NV',
    slug: 'sparks',
    license: 'NV #0085999',
    state: 'NV',
    services: ['ADU Construction', 'Structural Repairs', 'Decks', 'Additions', 'Kitchen & Bath', 'Concrete'],
    img: IMGS.deck_charolette,
    alt: "Custom deck build Sparks NV BRE Builders Charolette's deck",
    desc: 'Full service coverage. Multiple completed projects in Sparks neighborhoods.',
  },
  {
    name: 'Lake Tahoe, NV',
    slug: 'lake-tahoe',
    license: 'NV #0085999',
    state: 'NV',
    services: ['Full Home Renovation', 'Deck Repair & Build', 'ADU Construction', 'Structural Repair', 'Water Intrusion'],
    img: IMGS.lt(16),
    alt: 'Full home renovation Lake Tahoe Zephyr Cove NV BRE Builders',
    desc: '695 Lakeview Blvd full renovation. Multiple deck repair projects. Lake Tahoe snow load expertise.',
    featured: true,
  },
  {
    name: 'Carson City, NV',
    slug: 'carson-city',
    license: 'NV #0085999',
    state: 'NV',
    services: ['Residential Remodeling', 'ADU Construction', 'Additions', 'Commercial'],
    img: IMGS.lt(4),
    alt: 'BRE Builders residential project Carson City NV',
    desc: 'Nevada state capital service area. Residential and commercial projects.',
  },
  {
    name: 'Truckee, CA',
    slug: 'truckee',
    license: 'CA #1009219',
    state: 'CA',
    services: ['Custom Homes', 'Decks', 'Remodeling', 'Structural Repair'],
    img: IMGS.lt(14),
    alt: 'BRE Builders exterior deck renovation project Lake Tahoe area California',
    desc: 'Mountain community expertise. California licensed. Snow country construction.',
  },
  {
    name: 'Graeagle, CA',
    slug: 'truckee',
    license: 'CA #1009219',
    state: 'CA',
    services: ['Custom Homes', 'Decks', 'Remodeling'],
    img: IMGS.lt(2),
    alt: 'BRE Builders exterior deck and structure project California',
    desc: 'Serving the Plumas County area. California licensed contractor.',
  },
  {
    name: 'Northern California',
    slug: 'northern-california',
    license: 'CA #1009219',
    state: 'CA',
    services: ['Custom Homes', 'Commercial Construction', 'Structural Repair', 'Remodeling'],
    img: IMGS.ripon[3],
    alt: 'Luxury custom home Ripon California BRE Builders NorCal',
    desc: 'Ripon estate project. Central Valley to foothills. CA License #1009219.',
    featured: true,
  },
]

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function ServiceAreasPage() {
  const nevada = AREAS.filter(a => a.state === 'NV')
  const california = AREAS.filter(a => a.state === 'CA')

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-[660px] mb-14">
            <SL text="Service Areas" />
            <h1 className="font-display text-[clamp(38px,5.5vw,72px)] font-light leading-[0.95] tracking-tight text-cream mb-4">
              Northern Nevada<br />
              <span className="italic text-teal">& California.</span>
            </h1>
            <p className="text-[15px] text-cream/55 leading-relaxed mb-5">
              BRE Builders holds active licenses in both Nevada and California — one of the few
              general contractors in the region qualified to build on both sides of the state line.
            </p>
            <div className="flex gap-6">
              <div className="bg-panel rounded-xl px-5 py-3 border border-teal/15">
                <p className="font-mono text-[10px] tracking-wider uppercase text-teal/70 mb-1">Nevada</p>
                <p className="font-mono text-[13px] text-cream">Lic #0085999</p>
              </div>
              <div className="bg-panel rounded-xl px-5 py-3 border border-teal/15">
                <p className="font-mono text-[10px] tracking-wider uppercase text-teal/70 mb-1">California</p>
                <p className="font-mono text-[13px] text-cream">Lic #1009219</p>
              </div>
            </div>
          </div>

          {/* Nevada areas */}
          <section className="mb-16">
            <SL text="Nevada Service Areas" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {nevada.map((a, i) => (
                <Link
                  key={a.name}
                  href={`/service-areas/${a.slug}/`}
                  className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all bg-panel"
                >
                  <div className="relative h-40 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      loading={i < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/90 to-transparent" />
                    {a.featured && (
                      <div className="absolute top-3 right-3 font-mono text-[9px] tracking-wider uppercase bg-teal text-void px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="font-display text-[18px] text-cream mb-1 group-hover:text-teal transition-colors">{a.name}</h2>
                    <p className="font-mono text-[10px] text-teal/60 tracking-wider mb-2">{a.license}</p>
                    <p className="text-[12px] text-cream/40 leading-relaxed mb-3">{a.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {a.services.slice(0, 3).map(s => (
                        <span key={s} className="text-[10px] font-mono text-cream/30 border border-white/[0.07] px-2 py-0.5 rounded">{s}</span>
                      ))}
                      {a.services.length > 3 && (
                        <span className="text-[10px] font-mono text-teal/50">+{a.services.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* California areas */}
          <section className="mb-16">
            <SL text="California Service Areas" />
            <div className="grid md:grid-cols-3 gap-5">
              {california.map((a, i) => (
                <Link
                  key={a.name}
                  href={`/service-areas/${a.slug}/`}
                  className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/30 transition-all bg-panel"
                >
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel/90 to-transparent" />
                    {a.featured && (
                      <div className="absolute top-3 right-3 font-mono text-[9px] tracking-wider uppercase bg-teal text-void px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="font-display text-[18px] text-cream mb-1 group-hover:text-teal transition-colors">{a.name}</h2>
                    <p className="font-mono text-[10px] text-teal/60 tracking-wider mb-2">{a.license}</p>
                    <p className="text-[12px] text-cream/40 leading-relaxed">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-panel rounded-2xl p-8 border border-white/[0.06] text-center">
            <p className="font-display text-[24px] text-cream mb-2">Not sure if we serve your area?</p>
            <p className="text-[14px] text-cream/50 mb-6">Call us. If we can do the job, we'll tell you. If we can't, we'll say so.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:7753914517" className="btn-primary px-8">📞 (775) 391-4517</a>
              <Link href="/contact" className="btn-ghost px-8">Request a Quote →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
