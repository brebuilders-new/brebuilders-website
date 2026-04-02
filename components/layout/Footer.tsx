import Link from 'next/link'
import { SITE } from '@/lib/site-data'

// ─── Verified data from master skill ─────────────────────────────────────────
const RESIDENTIAL_LINKS = [
  { label: 'ADU Construction', href: '/services/adu', badge: '#1 Reno' },
  { label: 'Structural Repairs', href: '/services/repairs', badge: 'Page 1' },
  { label: 'Home Additions', href: '/services/additions', badge: null },
  { label: 'Kitchen & Bath', href: '/services/kitchen-bath', badge: null },
  { label: 'Custom Home Builds', href: '/services/new-home', badge: null },
  { label: 'Decks', href: '/services/decks', badge: null },
  { label: 'Lofts & Condos', href: '/services/lofts-condos', badge: null },
  { label: 'Foundation Repair', href: '/services/repairs/foundation', badge: null },
  { label: 'Water Intrusion', href: '/services/repairs/water-intrusion', badge: null },
]

const COMMERCIAL_LINKS = [
  { label: 'Commercial Construction', href: '/services/commercial' },
  { label: 'Retail Build-Out', href: '/services/retail' },
  { label: 'Office Construction', href: '/services/office' },
  { label: 'Warehouse & Metal', href: '/services/warehouse' },
  { label: 'Concrete Work', href: '/services/concrete' },
  { label: 'Hauling & Removal', href: '/services/hauling' },
]

const AREA_LINKS = [
  { label: 'Reno, NV', href: '/service-areas/reno', lic: 'NV #0085999' },
  { label: 'Sparks, NV', href: '/service-areas/sparks', lic: 'NV #0085999' },
  { label: 'Lake Tahoe, NV', href: '/service-areas/lake-tahoe', lic: 'NV #0085999' },
  { label: 'Carson City, NV', href: '/service-areas/carson-city', lic: 'NV #0085999' },
  { label: 'Truckee, CA', href: '/service-areas/truckee', lic: 'CA #1009219' },
  { label: 'Northern California', href: '/service-areas/northern-california', lic: 'CA #1009219' },
]

const COMPANY_LINKS = [
  { label: 'About BRE Builders', href: '/about' },
  { label: 'Projects & Portfolio', href: '/projects' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact / Quote', href: '/contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/BlueReefBuilds/',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/steven-rosenthal-94223b15',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/blue-reef-enterprises-reno',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.73-.7-1.176-1.55l2.826-4.359c.523-.806 1.719-.666 2.048.24l1.17 3.151a1.34 1.34 0 0 1-.873 1.085zm-4.65 3.974l4.766 1.98c.883.367 1.096 1.567.393 2.25l-2.22 2.162c-.752.731-1.989.309-2.12-.73l-.594-4.562c-.115-.87.9-1.455 1.775-1.1zm-5.77 4.527l.557-4.57c.113-.877 1.336-1.134 1.794-.39l2.28 3.726c.46.756-.115 1.72-.99 1.73l-2.635.036c-.822.012-1.115-.726-1.006-1.532zm-4.968-2.9l3.908-2.755c.74-.52 1.706.137 1.587 1.064l-.547 4.546c-.116.952-1.255 1.39-2.002.8l-1.988-1.597c-.74-.596-.713-1.724.042-2.058zm-.993-7.024l4.853 1.785c.922.338.973 1.622.074 2.026l-4.317 1.927c-.947.422-1.978-.44-1.73-1.461l.54-2.32c.236-1.023 1.423-1.428 2.58-.957z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-panel border-t border-white/[0.06]" role="contentinfo">

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <div className="bg-teal/[0.06] border-b border-teal/[0.12]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] tracking-[3px] uppercase text-teal mb-1">Now Accepting New Projects</p>
            <p className="text-cream/60 text-[14px]">
              Free estimates · Response within 24 hours · Licensed NV &amp; CA
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={SITE.phoneHref}
              className="px-5 py-2.5 bg-teal text-void text-[13px] font-mono font-semibold rounded-lg hover:bg-teal/90 transition-colors"
            >
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-teal/40 text-teal text-[13px] font-mono rounded-lg hover:border-teal hover:bg-teal/5 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ──────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 lg:py-16">

        {/* 
          DESKTOP: 4 columns — Brand+Contact | Residential | Commercial+Areas | Company
          MOBILE:  2 columns — services left, company+areas right
        */}

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Brand + contact (full width on mobile) */}
          <div className="mb-8 pb-8 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 mb-5">
              {/* Real logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://brebuilders.com/wp-content/uploads/2026/01/brelogo.webp"
                alt="BRE Builders Logo"
                className="h-8 w-auto object-contain"
                loading="lazy"
                width={96}
                height={32}
              />
              <div>
                <div className="font-display text-[15px] text-cream">Blue Reef Builders</div>
                <div className="font-mono text-[9px] tracking-[2px] text-teal/70 uppercase mt-0.5">Est. 1989</div>
              </div>
            </div>
            <p className="text-[13px] text-cream/45 leading-relaxed mb-4 max-w-[280px]">
              Licensed general contractor serving Northern Nevada and Northern California since 1989.
            </p>
            <div className="space-y-2">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors">
                <svg className="w-4 h-4 text-teal/50 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors">
                <svg className="w-4 h-4 text-teal/50 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {SITE.email}
              </a>
            </div>
          </div>

          {/* 2-column grid: Residential | Commercial+Company */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">

            {/* Column 1: Residential */}
            <div>
              <h3 className="font-mono text-[9px] tracking-[2.5px] uppercase text-cream/30 mb-4">Residential</h3>
              <ul className="space-y-2.5">
                {RESIDENTIAL_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[12px] text-cream/50 hover:text-teal transition-colors flex items-center gap-1.5">
                      {l.label}
                      {l.badge && <span className="font-mono text-[7px] bg-teal/15 text-teal px-1 py-0.5 rounded">{l.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Commercial + Company */}
            <div>
              <h3 className="font-mono text-[9px] tracking-[2.5px] uppercase text-cream/30 mb-4">Commercial</h3>
              <ul className="space-y-2.5 mb-7">
                {COMMERCIAL_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[12px] text-cream/50 hover:text-teal transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-mono text-[9px] tracking-[2.5px] uppercase text-cream/30 mb-4">Company</h3>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[12px] text-cream/50 hover:text-teal transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Areas — below main grid on mobile */}
          <div className="mt-8 pt-6 border-t border-white/[0.05]">
            <h3 className="font-mono text-[9px] tracking-[2.5px] uppercase text-cream/30 mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {AREA_LINKS.map(a => (
                <Link key={a.href} href={a.href} className="group">
                  <div className="text-[12px] text-cream/50 group-hover:text-teal transition-colors">{a.label}</div>
                  <div className="font-mono text-[9px] text-cream/25">{a.lic}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP: 4-column layout */}
        <div className="hidden lg:grid grid-cols-[240px_1fr_1fr_180px] gap-12">

          {/* Col 1: Brand + Contact */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://brebuilders.com/wp-content/uploads/2026/01/brelogo.webp"
                alt="BRE Builders Logo – Blue Reef Enterprises"
                className="h-9 w-auto object-contain"
                loading="lazy"
                width={120}
                height={36}
              />
              <div>
                <div className="font-display text-[16px] text-cream">Blue Reef Builders</div>
                <div className="font-mono text-[9px] tracking-[2px] text-teal/70 uppercase mt-0.5">Est. 1989</div>
              </div>
            </div>
            <p className="text-[13px] text-cream/45 leading-relaxed mb-5">
              Licensed general contractor serving Northern Nevada and Northern California since 1989. Residential, commercial, and custom home construction.
            </p>
            <div className="space-y-2.5 mb-5">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors group">
                <svg className="w-4 h-4 text-teal/50 group-hover:text-teal flex-shrink-0 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-[13px] text-cream/50 hover:text-teal transition-colors group">
                <svg className="w-4 h-4 text-teal/50 group-hover:text-teal flex-shrink-0 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {SITE.email}
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-cream/50">
                <svg className="w-4 h-4 text-teal/50 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>{SITE.address}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/[0.08] rounded-lg flex items-center justify-center text-cream/30 hover:text-teal hover:border-teal/40 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Residential + Commercial */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-5">Residential</h3>
              <ul className="space-y-2.5">
                {RESIDENTIAL_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] text-cream/48 hover:text-teal transition-colors flex items-center gap-2">
                      {l.label}
                      {l.badge && (
                        <span className="font-mono text-[7px] bg-teal/15 text-teal px-1.5 py-0.5 rounded tracking-wider">{l.badge}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-5">Commercial</h3>
              <ul className="space-y-2.5">
                {COMMERCIAL_LINKS.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] text-cream/48 hover:text-teal transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Areas + License */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-5">Service Areas</h3>
            <ul className="space-y-3 mb-8">
              {AREA_LINKS.map(a => (
                <li key={a.href}>
                  <Link href={a.href} className="group">
                    <div className="text-[13px] text-cream/48 group-hover:text-teal transition-colors">{a.label}</div>
                    <div className="font-mono text-[10px] text-cream/25 mt-0.5">{a.lic}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[2.5px] uppercase text-cream/30 mb-5">Company</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-cream/48 hover:text-teal transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05] bg-deep/40">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-cream/25">
            &copy; {year} Blue Reef Enterprises, LLC &middot; All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-teal/60">NV Lic #0085999</span>
            <span className="text-cream/15">·</span>
            <span className="font-mono text-[11px] text-teal/60">CA Lic #1009219</span>
            <span className="text-cream/15">·</span>
            <a href={SITE.phoneHref} className="font-mono text-[11px] text-cream/25 hover:text-teal transition-colors">{SITE.phone}</a>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding — pushes content above sticky bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  )
}
