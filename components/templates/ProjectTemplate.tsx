'use client'

import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { SectionLabel } from './ServiceTemplate'
import { GalleryGrid } from '@/components/gallery/GalleryLightbox'

// ─── Types ─────────────────────────────────────────────────────────────────────
export interface ProjectPhoto {
  src: string
  alt: string
  title?: string    // shown in lightbox + alternating layout
  caption?: string  // shown below image + in lightbox description
}

interface ProjectTemplateProps {
  breadcrumb: Array<{ name: string; href?: string }>
  heroImage: string
  heroAlt: string
  projectType: string
  location: string
  title: string
  titleItalic?: string
  description: string
  meta?: Array<{ label: string; value: string }>
  photos: ProjectPhoto[]
  desktopGalleryMode?: 'masonry' | 'alternating' | 'grid'
  videoUrl?: string
  scope?: string[]
  aboutContent?: React.ReactNode
  schema?: object
}

export default function ProjectTemplate({
  breadcrumb,
  heroImage,
  heroAlt,
  projectType,
  location,
  title,
  titleItalic,
  description,
  meta = [],
  photos,
  desktopGalleryMode = 'masonry',
  videoUrl,
  scope,
  aboutContent,
  schema,
}: ProjectTemplateProps) {
  return (
    <>
      <Nav />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <main>
        {/* ── HERO ── */}
        {/* MOBILE: stacked layout, image top, content anchored bottom */}
        <section className="relative md:hidden overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            style={{ objectPosition: '50% 30%' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(5,10,15,0.1) 0%, rgba(5,10,15,0.5) 40%, rgba(5,10,15,0.93) 68%, rgba(5,10,15,1) 85%)'
          }} />

          <div className="relative z-10 flex flex-col justify-end px-5 pb-8 pt-28" style={{ minHeight: '100svh' }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 mb-4 font-mono text-[10px] text-white/30 flex-wrap" aria-label="Breadcrumb">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span>/</span>}
                  {b.href ? <Link href={b.href} className="hover:text-teal transition-colors">{b.name}</Link> : <span className="text-white/50">{b.name}</span>}
                </span>
              ))}
            </nav>

            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal">{projectType}</span>
            </div>

            <h1 className="font-display font-light text-[clamp(32px,8vw,50px)] leading-[0.95] tracking-tight text-white mb-3">
              {title}
              {titleItalic && <span className="block italic text-teal">{titleItalic}</span>}
            </h1>

            <p className="text-[13px] leading-[1.65] text-white/60 mb-5 max-w-[340px]">
              {description.split('.')[0]}.
            </p>

            {/* Location + photo count badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="font-mono text-[10px] text-white/45 border border-white/[0.12] bg-white/[0.05] px-2.5 py-1.5 rounded-lg">
                📍 {location}
              </span>
              {photos.length > 0 && (
                <span className="font-mono text-[10px] text-teal/70 border border-teal/20 bg-teal/[0.06] px-2.5 py-1.5 rounded-lg">
                  {photos.length} Photos
                </span>
              )}
              {videoUrl && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-white/50 border border-white/[0.12] bg-white/[0.05] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5"
                >
                  ▶ Watch
                </a>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2.5">
              <a href={SITE.phoneHref} className="w-full flex items-center justify-center gap-2 py-4 bg-teal text-void text-[15px] font-bold rounded-xl">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Start a Similar Project
              </a>
              <Link href="/contact" className="w-full flex items-center justify-center py-3.5 border border-white/20 text-white text-[14px] font-mono rounded-xl bg-white/[0.04]">
                Request Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* DESKTOP: full-bleed, content left-anchored */}
        <section className="relative hidden md:flex flex-col justify-end pb-20 lg:pb-28 pt-32 overflow-hidden min-h-[85vh] lg:min-h-[90vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/45 to-transparent" />
          {/* Left accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-teal/25" />

          <div className="relative z-10 container">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-7 font-mono text-[11px] text-white/30 flex-wrap" aria-label="Breadcrumb">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {b.href ? <Link href={b.href} className="hover:text-teal transition-colors">{b.name}</Link> : <span className="text-white/55">{b.name}</span>}
                </span>
              ))}
            </nav>

            <div className="max-w-[680px]">
              <div className="animate-fade-up-1 flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{projectType}</span>
                <span className="font-mono text-[10px] text-white/20">·</span>
                <span className="font-mono text-[10px] text-white/25">NV Lic #0085999</span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(48px,6vw,84px)] leading-[0.93] tracking-tight text-white mb-5">
                {title}
                {titleItalic && (
                  <>
                    <br />
                    <span className="italic text-teal">{titleItalic}</span>
                  </>
                )}
              </h1>

              <p className="animate-fade-up-3 text-[15px] lg:text-[16px] leading-[1.8] text-white/65 mb-7 max-w-[540px]">
                {description}
              </p>

              {/* Metadata badges */}
              <div className="animate-fade-up-4 flex flex-wrap gap-3 mb-8">
                <span className="font-mono text-[11px] text-white/45 border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 rounded-lg">
                  📍 {location}
                </span>
                {photos.length > 0 && (
                  <span className="font-mono text-[11px] text-teal/70 border border-teal/20 bg-teal/[0.06] px-3 py-1.5 rounded-lg">
                    {photos.length} Photos
                  </span>
                )}
                {videoUrl && (
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-white/50 border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 rounded-lg hover:border-teal/40 hover:text-teal transition-all"
                  >
                    ▶ Watch Project Video
                  </a>
                )}
              </div>

              {/* Desktop CTAs */}
              <div className="animate-fade-up-4 flex items-center gap-4">
                <Link href="/contact" className="btn-primary">Start a Similar Project →</Link>
                <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3 z-10 opacity-40">
            <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent" />
            <span className="font-mono text-[9px] tracking-[3px] text-white/30 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          </div>
        </section>

        {/* ── META ROW ── */}
        {meta.length > 0 && (
          <section className="py-6 bg-panel border-b border-white/[0.05]">
            <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {meta.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-cream/30 mb-1">{m.label}</div>
                    <div className="font-display text-[15px] text-cream">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── GALLERY with Lightbox ── */}
        {photos.length > 0 && (
          <section className="py-20 lg:py-28 bg-deep">
            <div className="container">
              <SectionLabel text={`Project Gallery — ${photos.length} Photos`} />
              <h2 className="font-display text-[clamp(24px,4vw,50px)] font-light leading-[1.05] tracking-tight mb-3">
                Every Phase.
                <br />
                <span className="italic text-teal">Every Detail.</span>
              </h2>
              <p className="font-mono text-[11px] text-cream/30 mb-8 hidden md:block">
                Click any image to expand · Navigate with arrow keys or arrows
              </p>
              <p className="font-mono text-[11px] text-cream/30 mb-6 md:hidden">
                Tap to expand · Swipe to browse
              </p>

              <GalleryGrid
                images={photos}
                mode={desktopGalleryMode}
                aspectClass="h-56"
              />
            </div>
          </section>
        )}

        {/* ── ABOUT / SCOPE ── */}
        {(aboutContent || scope) && (
          <section className="py-20 lg:py-28 bg-void">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16">
                {aboutContent && <div>{aboutContent}</div>}
                {scope && (
                  <div>
                    <SectionLabel text="Project Scope" />
                    <div className="space-y-0">
                      {scope.map((item) => (
                        <div key={item} className="flex items-start gap-3 py-3 border-b border-white/[0.055]">
                          <span className="text-teal mt-0.5 flex-shrink-0 text-[12px]">✓</span>
                          <span className="text-[14px] text-cream/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="py-16 bg-panel border-t border-white/[0.05]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <SectionLabel text="Start Your Project" />
                <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-4">
                  Ready to Start?
                  <br />
                  <span className="italic text-teal">Let&apos;s Talk.</span>
                </h2>
                <p className="text-[15px] text-cream/55 mb-6">
                  Free estimates. Licensed NV #0085999 · CA #1093798. Response within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">Request a Free Quote →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects/" className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-3 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all">All Projects →</Link>
                <Link href="/services/" className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-3 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all">All Services →</Link>
                <Link href="/service-areas/" className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-3 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all">Service Areas →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
