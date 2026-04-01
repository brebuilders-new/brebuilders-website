import Link from 'next/link'
import { SITE } from '@/lib/site-data'

const FOOTER_LINKS = {
  residential: [
    { label: 'ADU Construction', href: '/services/adu' },
    { label: 'Kitchen & Bath', href: '/services/kitchen-bath' },
    { label: 'New Home Build', href: '/services/new-home' },
    { label: 'Additions', href: '/services/additions' },
    { label: 'Decks', href: '/services/decks' },
    { label: 'Lofts & Condos', href: '/services/lofts-condos' },
  ],
  commercial: [
    { label: 'Commercial', href: '/services/commercial' },
    { label: 'Retail', href: '/services/retail' },
    { label: 'Office', href: '/services/office' },
    { label: 'Warehouse', href: '/services/warehouse' },
    { label: 'Concrete', href: '/services/concrete' },
    { label: 'Hauling & Removal', href: '/services/hauling' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-white/[0.06]">
      {/* CTA strip */}
      <div className="bg-teal/[0.06] border-b border-teal/[0.12]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-1">Now Accepting New Projects</p>
            <p className="text-cream/60 text-[14px]">Free estimates · Response within 24 hours · Licensed NV & CA</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={SITE.phoneHref}
              className="px-5 py-2.5 bg-teal text-void text-[13px] font-semibold rounded-lg hover:bg-teal/90 transition-colors"
            >
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-teal/40 text-teal text-[13px] rounded-lg hover:border-teal transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-teal/50 rounded-lg flex items-center justify-center text-teal font-display text-lg">B</div>
              <div>
                <div className="font-display text-[16px] text-cream">Blue Reef Builders</div>
                <div className="font-mono text-[9px] tracking-[2px] text-teal uppercase">Est. 1989</div>
              </div>
            </div>
            <p className="text-[13px] text-cream/45 leading-relaxed mb-6">
              Licensed general contractor serving Northern Nevada and Northern California since 1989. Residential remodeling, commercial improvements, custom homes, ADUs, and structural repairs.
            </p>
            <div className="space-y-2.5">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors group">
                <svg className="w-4 h-4 text-teal/60 group-hover:text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors group">
                <svg className="w-4 h-4 text-teal/60 group-hover:text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {SITE.email}
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-cream/50">
                <svg className="w-4 h-4 text-teal/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {SITE.address}
              </div>
            </div>
          </div>

          {/* Residential */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-4">Residential</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.residential.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-cream/45 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-4">Commercial</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.commercial.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-cream/45 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-cream/45 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-cream/30 hover:text-teal hover:border-teal/40 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-cream/30 hover:text-teal hover:border-teal/40 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={SITE.social.yelp} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center text-cream/30 hover:text-teal hover:border-teal/40 transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.73-.7-1.176-1.55l2.826-4.359c.523-.806 1.719-.666 2.048.24l1.17 3.151a1.34 1.34 0 0 1-.873 1.085zm-4.65 3.974l4.766 1.98c.883.367 1.096 1.567.393 2.25l-2.22 2.162c-.752.731-1.989.309-2.12-.73l-.594-4.562c-.115-.87.9-1.455 1.775-1.1zm-5.77 4.527l.557-4.57c.113-.877 1.336-1.134 1.794-.39l2.28 3.726c.46.756-.115 1.72-.99 1.73l-2.635.036c-.822.012-1.115-.726-1.006-1.532zm-4.968-2.9l3.908-2.755c.74-.52 1.706.137 1.587 1.064l-.547 4.546c-.116.952-1.255 1.39-2.002.8l-1.988-1.597c-.74-.596-.713-1.724.042-2.058zm-.993-7.024l4.853 1.785c.922.338.973 1.622.074 2.026l-4.317 1.927c-.947.422-1.978-.44-1.73-1.461l.54-2.32c.236-1.023 1.423-1.428 2.58-.957z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-cream/25">
            © {new Date().getFullYear()} Blue Reef Enterprises, LLC · All rights reserved
          </p>
          <div className="flex gap-4 font-mono text-[11px]">
            <span className="text-teal/70">NV Lic #0085999</span>
            <span className="text-cream/20">·</span>
            <span className="text-teal/70">CA Lic #1009219</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
