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
        <section className="relative min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-end pb-14 lg:pb-24 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/93 via-void/55 to-void/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/65 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[620px]">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-6 font-mono text-[11px] text-cream/30 flex-wrap">
                {breadcrumb.map((b, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && <span>/</span>}
                    {b.href ? (
                      <Link href={b.href} className="hover:text-teal transition-colors">{b.name}</Link>
                    ) : (
                      <span className="text-cream/60">{b.name}</span>
                    )}
                  </span>
                ))}
              </nav>

              <div className="animate-fade-up-1 flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">{projectType}</span>
              </div>

              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(34px,5.5vw,72px)] leading-[0.94] tracking-tight text-white mb-4">
                {title}
                {titleItalic && (
                  <>
                    <br />
                    <span className="italic text-teal">{titleItalic}</span>
                  </>
                )}
              </h1>

              <p className="animate-fade-up-3 text-[15px] leading-[1.75] text-white/70 mb-6 max-w-[500px]">
                {description}
              </p>

              <div className="animate-fade-up-4 flex flex-wrap gap-3">
                <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">
                  📍 {location}
                </span>
                {photos.length > 0 && (
                  <span className="font-mono text-[11px] text-cream/40 border border-white/[0.1] px-3 py-1.5 rounded-lg">
                    {photos.length} Photos
                  </span>
                )}
                {videoUrl && (
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-teal/70 border border-teal/20 px-3 py-1.5 rounded-lg hover:border-teal/50 hover:text-teal transition-colors"
                  >
                    ▶ Watch Video
                  </a>
                )}
              </div>
            </div>
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
                  Free estimates. Licensed NV #0085999 · CA #1009219. Response within 24 hours.
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
