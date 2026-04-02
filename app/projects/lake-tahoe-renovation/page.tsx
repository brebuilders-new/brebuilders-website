import type { Metadata } from 'next'
import ProjectTemplate from '@/components/templates/ProjectTemplate'
import { SectionLabel } from '@/components/templates/ServiceTemplate'
import Link from 'next/link'
import { SITE } from '@/lib/site-data'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brebuilders.com'
const BASE = 'https://brebuilders.com/wp-content/uploads/2025/12'

export const metadata: Metadata = {
  title: 'Lake Tahoe Full Home Renovation | Portfolio',
  description: '695 Lakeview Blvd, Zephyr Cove, NV — complete interior and exterior renovation by BRE Builders. 16 photos + project video.',
  openGraph: {
    images: [{
      url: `${SITE_URL}/api/og?title=Lake+Tahoe+Full+Home+Renovation&sub=695+Lakeview+Blvd%2C+Zephyr+Cove%2C+NV+%C2%B7+16+Photos&badge=Portfolio`,
      width: 1200, height: 630,
    }],
  },
  alternates: { canonical: 'https://brebuilders.com/portfolio/lake-tahoe-interior-renovation-project-bre-builders/' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  name: 'Lake Tahoe Full Home Renovation — BRE Builders Portfolio',
  description: 'Complete interior and exterior renovation of 695 Lakeview Blvd, Zephyr Cove, NV by BRE Builders.',
  url: 'https://brebuilders.com/portfolio/lake-tahoe-interior-renovation-project-bre-builders/',
  image: `${BASE}/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`,
}

const PHOTOS = [
  { n: 1,  suffix: '',  title: 'Renovation Complete',       caption: 'Completed exterior view — full structural and cosmetic transformation, Lake Tahoe, NV' },
  { n: 2,  suffix: '',  title: 'Deck & Structure',          caption: 'New deck structure integrated with renovated exterior, Zephyr Cove' },
  { n: 3,  suffix: '',  title: 'Deck Railing & Walkway',    caption: 'Upgraded deck railing and sealed walkway surface' },
  { n: 4,  suffix: '',  title: 'Interior Living Space',     caption: 'Updated interior living area with new finishes throughout' },
  { n: 5,  suffix: '',  title: 'Interior Finish Work',      caption: 'Detail work on interior finish materials and trim' },
  { n: 6,  suffix: '',  title: 'Loft & Upper Level',        caption: 'Upper-level loft renovation with structural improvements' },
  { n: 7,  suffix: '',  title: 'Custom Interior Staircase', caption: 'Custom-built interior staircase connecting renovated levels' },
  { n: 8,  suffix: '',  title: 'Bathroom Renovation',       caption: 'Bathroom renovation — new vanity, fixtures, and tile work' },
  { n: 9,  suffix: '',  title: 'Interior Room',             caption: 'Interior room with updated finishes and lighting' },
  { n: 10, suffix: '',  title: 'Bathroom Installation',     caption: 'Bathroom installation phase — tub, vanity, and tile in progress' },
  { n: 11, suffix: '',  title: 'Interior Staircase',        caption: 'Interior staircase detail connecting multiple renovated levels' },
  { n: 12, suffix: '',  title: 'Upper Level — Skylights',   caption: 'Upper level with skylights and open railing, natural light throughout' },
  { n: 13, suffix: '',  title: 'Loft Natural Light',        caption: 'Loft area renovation — open layout with natural light and updated finishes' },
  { n: 14, suffix: '',  title: 'Exterior Deck Renovation',  caption: 'Exterior deck renovation with new decking material and railing' },
  { n: 15, suffix: '',  title: 'Deck Walkway Detail',       caption: 'Deck walkway detail — sealed surface and railing upgrade complete' },
  { n: 16, suffix: '-1', title: 'Completed — Full View',   caption: 'Full exterior view of completed renovation, 695 Lakeview Blvd, Zephyr Cove, Lake Tahoe, NV' },
].map(p => ({
  src: `${BASE}/${String(p.n).padStart(2,'0')}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${p.n}-of-16${p.suffix}-1024x684.webp`,
  alt: `${p.title} — Lake Tahoe Full Home Renovation BRE Builders`,
  title: p.title,
  caption: p.caption,
}))

export default function LakeTahoeProjectPage() {
  return (
    <ProjectTemplate
      theme="gallery"
      breadcrumb={[
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects/' },
        { name: 'Lake Tahoe Renovation' },
      ]}
      heroImage={PHOTOS[0].src}
      heroAlt="Full Home Renovation Completed Exterior 695 Lakeview Blvd Zephyr Cove Lake Tahoe"
      projectType="Full Home Renovation"
      location="Zephyr Cove, Lake Tahoe, NV"
      title="Full Home Renovation"
      titleItalic="Lake Tahoe, NV"
      description="A complete interior and exterior transformation combining structural upgrades, modern finishes, and long-term durability — executed by BRE Builders at 695 Lakeview Blvd, Zephyr Cove, NV 89448."
      meta={[
        { label: 'Project Type', value: 'Full Home Renovation' },
        { label: 'Location', value: 'Zephyr Cove, NV' },
        { label: 'Scope', value: 'Interior + Exterior' },
        { label: 'License', value: 'NV #0085999' },
      ]}
      photos={PHOTOS}
      desktopGalleryMode="masonry"
      videoUrl={SITE.youtubeProject}
      scope={[
        'Exterior structural renovation and deck integration',
        'Deck railing and walkway upgrades with sealed surface',
        'Interior living space renovation with updated finishes',
        'Custom interior staircase construction',
        'Loft and upper-level renovation with skylights',
        'Bathroom renovation — vanity, tub, tiling, fixtures',
        'Kitchen remodeling and updated materials',
        'Exterior deck renovation with new materials',
        'Multi-level interior finish work throughout',
      ]}
      aboutContent={
        <div>
          <SectionLabel text="About This Project" />
          <h2 className="font-display text-[clamp(24px,3.5vw,44px)] font-light leading-[1.1] tracking-tight mb-6">
            Full Home Renovation<br /><span className="italic text-teal">Lake Tahoe.</span>
          </h2>
          <div className="speakable-summary space-y-4 text-[15px] leading-relaxed text-cream/55 mb-8">
            <p>This full-home renovation showcases coordinated kitchen and bath remodeling, interior structural improvements, upgraded living spaces, and exterior deck work — delivered with precision planning and code-compliant construction.</p>
            <p>The project included custom interior staircase construction, loft renovation with skylights, bathroom installations, exterior deck railing and walkway upgrades, and full interior finish work throughout the multi-level Zephyr Cove property.</p>
            <p className="text-[12px] text-cream/30 italic">Images shown are from a completed residential project and are displayed for portfolio purposes only.</p>
          </div>
          <div className="bg-panel rounded-xl p-5 border border-teal/15">
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-teal mb-3">Project Video</p>
            <a href={SITE.youtubeProject} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-teal/10 border border-teal/25 rounded-lg flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors flex-shrink-0">▶</div>
              <div>
                <div className="text-[14px] text-cream group-hover:text-teal transition-colors">Watch the Full Project Walkthrough</div>
                <div className="font-mono text-[11px] text-cream/30">YouTube · BRE Builders</div>
              </div>
            </a>
          </div>
        </div>
      }
      schema={schema}
    />
  )
}
