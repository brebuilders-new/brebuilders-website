import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { SITE } from '@/lib/site-data'
import { SectionLabel } from './ServiceTemplate'

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
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[55vh] lg:min-h-[62vh] flex flex-col justify-end pb-14 lg:pb-20 pt-28 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt={heroAlt} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/60 to-void/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent hidden md:block" />

          <div className="relative z-10 container">
            <div className="max-w-[720px]">
              {/* Breadcrumb */}
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
            <div className="max-w-[760px]">
              {/* Article content */}
              <div className="
                prose prose-invert max-w-none
                prose-headings:font-display prose-headings:font-light prose-headings:tracking-tight prose-headings:text-cream
                prose-h2:text-[clamp(24px,3vw,38px)] prose-h2:mt-12 prose-h2:mb-5
                prose-h3:text-[22px] prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-cream/60 prose-p:leading-relaxed prose-p:text-[15px] prose-p:my-4
                prose-li:text-cream/60 prose-li:text-[15px]
                prose-a:text-teal prose-a:no-underline hover:prose-a:underline
                prose-strong:text-cream/80
                prose-blockquote:border-teal/40 prose-blockquote:text-cream/55 prose-blockquote:italic
              ">
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
          </div>
        </article>

        {/* ── RELATED SERVICES ── */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-panel border-t border-white/[0.05]">
            <div className="container">
              <SectionLabel text="Related Services" />
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-[13px] font-mono text-cream/50 border border-white/[0.08] px-4 py-2 rounded-lg hover:border-teal/30 hover:text-teal transition-all"
                  >
                    {s.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
