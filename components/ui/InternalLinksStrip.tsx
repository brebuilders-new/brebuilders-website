'use client'
import Link from 'next/link'

// ─── Reusable inline content block for strategic interlinking ───────────────
// Renders a contextual "explore related" strip inline on any page
// Psychology: keeps users in the funnel by anticipating their next question

interface RelatedLink {
  label: string
  href: string
  desc?: string
  badge?: string
}

interface InternalLinksStripProps {
  heading: string
  subtext?: string
  links: RelatedLink[]
  variant?: 'grid' | 'list' | 'pills'
  className?: string
}

export function InternalLinksStrip({
  heading,
  subtext,
  links,
  variant = 'grid',
  className = '',
}: InternalLinksStripProps) {
  if (variant === 'pills') {
    return (
      <div className={`py-6 border-y border-white/[0.06] ${className}`}>
        <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-3">{heading}</p>
        <div className="flex flex-wrap gap-2">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-cream/55 hover:text-teal border border-white/[0.08] hover:border-teal/30 bg-white/[0.03] hover:bg-teal/[0.06] px-3 py-1.5 rounded-full transition-all"
            >
              {l.badge && <span className="text-[9px] text-teal">{l.badge}</span>}
              {l.label}
              <span className="text-cream/25">→</span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <div className={`space-y-0 ${className}`}>
        <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-4">{heading}</p>
        {subtext && <p className="text-[13px] text-cream/45 mb-4">{subtext}</p>}
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0 hover:text-teal transition-colors"
          >
            <div>
              <span className="text-[14px] text-cream/75 group-hover:text-teal transition-colors">{l.label}</span>
              {l.desc && <span className="text-[12px] text-cream/35 ml-2">{l.desc}</span>}
            </div>
            <span className="text-cream/25 group-hover:text-teal transition-colors font-mono text-[12px]">→</span>
          </Link>
        ))}
      </div>
    )
  }

  // default: grid
  return (
    <div className={className}>
      <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal mb-2">{heading}</p>
      {subtext && <p className="text-[13px] text-cream/45 mb-4">{subtext}</p>}
      <div className="grid sm:grid-cols-2 gap-2">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-teal/25 bg-white/[0.02] hover:bg-teal/[0.04] transition-all"
          >
            <div className="flex-1">
              <span className="text-[13px] text-cream/70 group-hover:text-teal transition-colors font-medium block">{l.label}</span>
              {l.desc && <span className="text-[11px] text-cream/35 block mt-0.5">{l.desc}</span>}
            </div>
            <span className="text-cream/20 group-hover:text-teal transition-colors font-mono text-[13px] flex-shrink-0">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Journey block: "Homeowners who viewed X also explored…" ──────────────
interface JourneyBlockProps {
  context: string   // e.g. "Planning an ADU?"
  links: Array<{ label: string; href: string; reason: string }>
}

export function JourneyBlock({ context, links }: JourneyBlockProps) {
  return (
    <div className="bg-panel rounded-2xl p-5 border border-white/[0.07]">
      <p className="font-mono text-[10px] tracking-[2.5px] uppercase text-teal/70 mb-3">{context}</p>
      <div className="space-y-0">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0"
          >
            <span className="text-teal/40 group-hover:text-teal transition-colors text-[18px] flex-shrink-0 leading-none mt-0.5">›</span>
            <div>
              <span className="text-[13px] text-cream/75 group-hover:text-teal transition-colors font-medium block">{l.label}</span>
              <span className="text-[11px] text-cream/35 block">{l.reason}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
