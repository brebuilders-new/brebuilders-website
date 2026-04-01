import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { IMGS } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Ripon CA Luxury Estate | Custom Home Build | Portfolio',
  description:
    'Ground-up luxury estate in Ripon, California. Classical architecture, custom cabinetry, marble surfaces, ironwork staircase. CA License #1009219. BRE Builders.',
  alternates: { canonical: 'https://brebuilders.com/portfolio/ripon-california-estate-project/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Ripon CA Luxury Estate — BRE Builders Portfolio',
  description: 'Ground-up luxury custom home in Ripon, California by BRE Builders. CA License #1009219.',
  url: 'https://brebuilders.com/portfolio/ripon-california-estate-project/',
  image: IMGS.ripon[3],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brebuilders.com/' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://brebuilders.com/projects/' },
      { '@type': 'ListItem', position: 3, name: 'Ripon CA Estate', item: 'https://brebuilders.com/portfolio/ripon-california-estate-project/' },
    ],
  },
}

const RIPON_PHOTOS = [
  { src: IMGS.ripon[3], alt: 'Mediterranean Inspired Front Elevation Luxury Estate Ripon California BRE Builders', cap: 'Mediterranean-Inspired Front Elevation', detail: 'European-inspired columns, arched windows, and a central fountain framed by palm landscaping.' },
  { src: IMGS.ripon[0], alt: 'Classical Columned Entryway Luxury Custom Home Ripon California BRE Builders', cap: 'Classical Columned Entryway', detail: 'Arched entry with fluted columns and ornamental molding — an architectural study in balance and proportion.' },
  { src: IMGS.ripon[2], alt: 'Grand Foyer Custom Iron Staircase Marble Flooring Luxury Estate Ripon California', cap: 'Grand Foyer', detail: 'Double-height foyer featuring a sweeping staircase with hand-forged ironwork, marble flooring, and refined architectural symmetry.' },
  { src: IMGS.ripon[1], alt: "Chef's Kitchen Custom Cabinetry Marble Backsplash Luxury Home Ripon CA BRE Builders", cap: "Chef's Kitchen", detail: 'A bright, open kitchen designed for beauty and performance, featuring detailed millwork, integrated lighting, and a marble backsplash centerpiece.' },
  { src: IMGS.ripon[4], alt: 'Elegant Laundry Suite Custom Cabinetry Marble Surfaces Brass Hardware Ripon CA', cap: 'Elegant Laundry Suite', detail: 'Custom cabinetry in charcoal tones paired with marble surfaces and brass hardware.' },
]

function SL({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-px bg-teal flex-shrink-0" />
      <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{text}</span>
    </div>
  )
}

export default function RiponEstatePage() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero — dramatic front elevation */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.ripon[3]}
            alt="Mediterranean Luxury Custom Estate Front Elevation Ripon California BRE Builders"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/92 via-void/50 to-void/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/65 to-transparent hidden md:block" />
          <div className="relative z-10 container">
            <div className="max-w-[600px]">
              <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-cream/30">
                <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                <span>/</span>
                <Link href="/projects/" className="hover:text-teal transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-cream/60">Ripon Estate</span>
              </nav>
              <div className="animate-fade-up-1 flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Luxury Custom Home · Ripon, CA</span>
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(36px,5.5vw,74px)] leading-[0.94] tracking-tight text-white mb-4">
                Crafting Luxury<br />from the Ground Up.<br />
                <span className="italic text-teal">Ripon, California.</span>
              </h1>
              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.75] text-white/70 mb-6 max-w-[500px]">
                Every detail of this Ripon, California estate reflects our signature in-house craftsmanship,
                licensed expertise, and timeless design. CA License #1009219.
              </p>
              <div className="animate-fade-up-4 flex flex-wrap gap-3">
                <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">📍 Ripon, California</span>
                <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">Custom Home · Ground-Up</span>
                <span className="font-mono text-[11px] text-teal/70 border border-teal/20 px-3 py-1.5 rounded-lg">CA Lic #1009219</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project overview stats */}
        <section className="py-8 bg-panel border-b border-white/[0.05]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Project Type', value: 'Ground-Up Custom Home' },
                { label: 'Location', value: 'Ripon, CA' },
                { label: 'Style', value: 'Mediterranean / Classical' },
                { label: 'License', value: 'CA #1009219' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-1">{s.label}</div>
                  <div className="font-display text-[15px] text-cream">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the project */}
        <section className="py-20 lg:py-28 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SL text="About This Project" />
                <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-6">
                  A ground-up luxury estate.<br /><span className="italic text-teal">Every element built in-house.</span>
                </h2>
                <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-6">
                  <p>
                    At Blue Reef Builders, we take pride in bringing vision to life — from the first concept
                    sketch to the final turn of the key. Licensed to build in both Nevada and California, our
                    in-house design and planning teams ensure every project embodies craftsmanship, creativity,
                    and precision.
                  </p>
                  <p>
                    This ground-up custom estate in Ripon, California showcases timeless architecture paired
                    with modern luxury. Designed to balance grandeur and comfort, it combines classical detailing
                    with contemporary finishes, creating a home that is as welcoming as it is impressive.
                  </p>
                </div>
                <blockquote className="border-l-2 border-teal pl-5 mb-8">
                  <p className="font-display text-[16px] italic text-cream/65 leading-relaxed">
                    &ldquo;Every project we take on is fully managed by our in-house team — from design concept to
                    final construction. Our licensed professionals handle planning, permitting, and craftsmanship
                    across Nevada and California.&rdquo;
                  </p>
                </blockquote>
                <Link href="/services/new-home/" className="btn-primary inline-flex">Interested in a Custom Home? →</Link>
              </div>

              {/* Small photo grid preview */}
              <div className="grid grid-cols-2 gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[0]} alt="Classical Columned Entryway Luxury Home Ripon California" className="col-span-2 h-52 w-full object-cover rounded-xl" loading="eager" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[1]} alt="Chef's Kitchen Custom Cabinetry Marble Backsplash Ripon CA" className="h-40 w-full object-cover rounded-xl" loading="eager" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMGS.ripon[2]} alt="Grand Foyer Custom Iron Staircase Marble Flooring Ripon Estate" className="h-40 w-full object-cover rounded-xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Full gallery — all 5 with captions */}
        <section className="py-20 lg:py-28 bg-void">
          <div className="container">
            <SL text="Project Gallery" />
            <h2 className="font-display text-[clamp(26px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-10">
              Five Spaces.<br /><span className="italic text-teal">All In-House.</span>
            </h2>

            {/* Mobile: carousel */}
            <div className="md:hidden flex gap-3 overflow-x-auto pb-4 scrollbar-none mb-8" style={{ scrollSnapType: 'x mandatory' }}>
              {RIPON_PHOTOS.map((p, i) => (
                <div key={i} className="flex-shrink-0" style={{ scrollSnapAlign: 'start', width: '80vw' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} className="w-full h-60 object-cover rounded-xl mb-3" loading={i < 2 ? 'eager' : 'lazy'} />
                  <p className="font-display text-[16px] text-cream mb-1">{p.cap}</p>
                  <p className="text-[13px] text-cream/40 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>

            {/* Desktop: feature layout */}
            <div className="hidden md:block space-y-16">
              {RIPON_PHOTOS.map((p, i) => (
                <div key={i} className={`grid grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'direction-rtl' : ''}`}>
                  <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? 'order-2' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.alt} className="w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-700" loading={i < 2 ? 'eager' : 'lazy'} />
                  </div>
                  <div className={i % 2 === 1 ? 'order-1' : ''}>
                    <div className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-3">
                      Photo {String(i + 1).padStart(2, '0')} of 05
                    </div>
                    <h3 className="font-display text-[28px] font-light text-cream mb-4">{p.cap}</h3>
                    <p className="text-[15px] text-cream/55 leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-panel border-t border-white/[0.05]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <SL text="Build Your Custom Home" />
                <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-4">
                  This Could Be<br /><span className="italic text-teal">Your Home.</span>
                </h2>
                <p className="text-[15px] text-cream/55 mb-6">Free consultation. Licensed NV #0085999 · CA #1009219. Response within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact?service=new-home" className="btn-primary">Schedule a Consultation →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'All Projects', href: '/projects/' },
                  { label: 'Custom Home Building', href: '/new-home/' },
                  { label: 'Northern CA Services', href: '/service-areas/northern-california/' },
                  { label: 'Kitchen & Bath', href: '/kitchen/' },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-3 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
