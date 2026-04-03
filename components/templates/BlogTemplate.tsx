import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { SectionLabel } from './ServiceTemplate'


// ─── Inline blog image ────────────────────────────────────────────────────────
export function BlogImage({
  src, alt, caption, priority = false,
}: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="my-10 not-prose">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl border border-white/[0.07] object-cover"
        style={{ maxHeight: '480px' }}
        loading={priority ? 'eager' : 'lazy'}
      />
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] text-cream/35 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// ─── YouTube embed ────────────────────────────────────────────────────────────
export function BlogVideo({
  videoId, title, caption,
}: { videoId: string; title: string; caption?: string }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.07]" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] text-cream/35 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// ─── Pull quote ───────────────────────────────────────────────────────────────
export function BlogPullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="not-prose my-10 border-l-2 border-teal/50 bg-teal/[0.04] rounded-r-xl px-6 py-5">
      <p className="font-display text-[20px] text-cream/85 leading-relaxed italic">{children}</p>
    </blockquote>
  )
}

interface BlogTemplateProps {
  // Article data
  title: string
  category: string
  publishDate?: string
  heroImage: string
  heroAlt: string
  excerpt: string
  // Content rendered from WP or static
  content: React.ReactNode
  // Internal links
  relatedPosts?: Array<{ title: string; href: string; img: string; alt: string; category: string }>
  relatedServices?: Array<{ label: string; href: string }>
  // Schema
  schema?: object
}

export default function BlogTemplate({
  title,
  category,
  publishDate,
  heroImage,
  heroAlt,
  excerpt,
  content,
  relatedPosts = [],
  relatedServices = [],
  schema,
}: BlogTemplateProps) {
  return (
    <>
      <Nav />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.article-lede', 'article h2:first-of-type'],
          },
        }) }}
      />
      <main>
        {/* ── HERO ── */}
        {/* ── BLOG HERO — MOBILE: compact strip, content below fold ── */}
        <section className="md:hidden relative overflow-hidden">
          <div className="relative w-full overflow-hidden" style={{ height: '42vw', minHeight: 150, maxHeight: 240 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover" fetchPriority="high" style={{ objectPosition: '50% 35%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-void/5 to-void/85" />
          </div>
          <div className="bg-deep px-5 pt-5 pb-7">
            <nav className="flex items-center gap-2 mb-3 font-mono text-[10px] text-cream/30">
              <Link href="/" className="hover:text-teal transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-teal transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-cream/50">{category}</span>
            </nav>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase bg-teal text-void px-2 py-1 rounded">{category}</span>
              {publishDate && <span className="font-mono text-[10px] text-cream/35">{publishDate}</span>}
            </div>
            <h1 className="font-display font-light text-[clamp(26px,7vw,38px)] leading-[1.05] tracking-tight text-white mb-3">
              {title}
            </h1>
            <p className="text-[14px] text-white/55 leading-relaxed">
              {excerpt}
            </p>
          </div>
        </section>

        {/* ── BLOG HERO — DESKTOP: full cinematic ── */}
        <section className="hidden md:relative md:block md:min-h-[55vh] lg:min-h-[62vh] md:flex md:flex-col md:justify-end md:pb-14 lg:pb-20 md:pt-28 md:overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt={heroAlt} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent" />
          <div className="relative z-10 container">
            <div className="max-w-[720px]">
              <nav className="flex items-center gap-2 mb-5 font-mono text-[11px] text-cream/30">
                <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog/" className="hover:text-teal transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-cream/60">{category}</span>
              </nav>
              <div className="animate-fade-up-1 inline-flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] tracking-[3px] uppercase bg-teal text-void px-2.5 py-1 rounded-md">{category}</span>
                {publishDate && (
                  <span className="font-mono text-[11px] text-cream/35">{publishDate}</span>
                )}
              </div>
              <h1 className="animate-fade-up-2 font-display font-light text-[clamp(30px,5vw,64px)] leading-[1.0] tracking-tight text-white mb-4">
                {title}
              </h1>
              <p className="animate-fade-up-3 text-[16px] text-white/60 leading-relaxed max-w-[560px]">
                {excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <article className="py-16 lg:py-24 bg-deep">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16 items-start max-w-[1100px]">
            <div>
              {/* Article content */}
              <div className="
                prose prose-invert max-w-none

                prose-headings:font-display prose-headings:font-light prose-headings:tracking-tight
                prose-headings:text-cream prose-headings:leading-[1.1]

                prose-h2:text-[clamp(22px,3vw,36px)] prose-h2:mt-14 prose-h2:mb-5
                prose-h2:border-b prose-h2:border-white/[0.06] prose-h2:pb-4

                prose-h3:text-[20px] prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-teal/90

                prose-h4:text-[16px] prose-h4:mt-7 prose-h4:mb-2 prose-h4:font-mono
                prose-h4:tracking-wide prose-h4:uppercase prose-h4:text-cream/50 prose-h4:not-italic

                prose-p:text-cream/62 prose-p:leading-[1.85] prose-p:text-[15.5px] prose-p:my-5

                prose-li:text-cream/62 prose-li:text-[15px] prose-li:leading-[1.8] prose-li:my-1.5
                prose-ul:my-6 prose-ol:my-6
                prose-ul:pl-0 prose-li:marker:text-teal

                prose-a:text-teal prose-a:font-medium prose-a:no-underline
                hover:prose-a:underline hover:prose-a:underline-offset-2

                prose-strong:text-cream prose-strong:font-semibold

                prose-blockquote:border-l-teal prose-blockquote:border-l-2
                prose-blockquote:bg-teal/[0.04] prose-blockquote:rounded-r-xl
                prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:my-8
                prose-blockquote:text-cream/65 prose-blockquote:italic prose-blockquote:not-italic
                prose-blockquote:text-[15px]

                prose-code:text-teal/80 prose-code:bg-teal/[0.07] prose-code:px-1.5
                prose-code:py-0.5 prose-code:rounded prose-code:text-[13px]
                prose-code:before:content-none prose-code:after:content-none

                prose-hr:border-white/[0.07] prose-hr:my-10

                prose-img:rounded-xl prose-img:border prose-img:border-white/[0.07]
              ">
                <p className="article-lede sr-only" aria-hidden="false">{excerpt}</p>
                {content}
              </div>

              {/* CTA inside article */}
              <div className="mt-16 p-6 bg-panel rounded-2xl border border-teal/15">
                <p className="font-display text-[20px] text-cream mb-2">Have a project in mind?</p>
                <p className="text-[14px] text-cream/50 mb-5">
                  BRE Builders provides free estimates. Licensed NV #0085999 · CA #1093798. Response within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">Request a Free Quote →</Link>
                  <a href={SITE.phoneHref} className="btn-ghost font-mono">{SITE.phone}</a>
                </div>
              </div>
            </div>

            {/* ── STICKY SIDEBAR (desktop only) ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-5">

                {/* Quick CTA */}
                <div className="bg-panel rounded-2xl border border-teal/15 p-5">
                  <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-3">Free Estimate</p>
                  <p className="font-display text-[20px] text-cream leading-snug mb-3">Get a free on-site assessment.</p>
                  <p className="text-[13px] text-cream/45 leading-relaxed mb-5">
                    BRE Builders responds within 24 hours. NV #0085999 · CA #1093798.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-[13px] py-3 mb-3">
                    Request Free Estimate →
                  </Link>
                  <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 w-full py-2.5 border border-white/[0.08] rounded-xl font-mono text-[13px] text-cream/50 hover:text-teal hover:border-teal/30 transition-all">
                    {SITE.phone}
                  </a>
                </div>

                {/* Related services */}
                {relatedServices.length > 0 && (
                  <div className="bg-panel rounded-2xl border border-white/[0.07] p-5">
                    <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/35 mb-4">Related Services</p>
                    <div className="space-y-2">
                      {relatedServices.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center justify-between text-[13px] text-cream/55 hover:text-teal transition-colors py-1.5 border-b border-white/[0.05] last:border-0"
                        >
                          {s.label}
                          <span className="text-teal/40 text-[11px]">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* License trust block */}
                <div className="bg-teal/[0.04] border border-teal/15 rounded-2xl p-5">
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal/60 mb-3">Licensed & Insured</p>
                  <div className="space-y-2">
                    <p className="font-mono text-[12px] text-cream/60">NV Lic #0085999</p>
                    <p className="font-mono text-[12px] text-cream/60">CA Lic #1093798</p>
                    <p className="font-mono text-[12px] text-cream/60">Est. 1989 · 35+ years</p>
                  </div>
                </div>

              </div>
            </aside>

            </div>
          </div>
        </article>

        {/* ── RELATED POSTS ── */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-deep">
            <div className="container">
              <SectionLabel text="Related Articles" />
              <div className="grid md:grid-cols-3 gap-5">
                {relatedPosts.map((p, i) => (
                  <a
                    key={p.title}
                    href={p.href}
                    className="group block overflow-hidden rounded-xl border border-white/[0.055] hover:border-teal/25 transition-all bg-panel"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" loading="lazy" />
                      <div className="absolute top-2 left-2 font-mono text-[9px] tracking-wider uppercase bg-teal text-void px-2 py-0.5 rounded">{p.category}</div>
                    </div>
                    <div className="p-4">
                      <p className="font-display text-[15px] text-cream group-hover:text-teal transition-colors leading-snug">{p.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
