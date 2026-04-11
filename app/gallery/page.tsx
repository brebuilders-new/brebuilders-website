'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { GalleryGrid, GalleryLightbox, useGalleryLightbox, type LightboxImage } from '@/components/gallery/GalleryLightbox'

// Lazy load PhotoGrid (below fold)
const PhotoGrid = dynamic(() => import('@/components/PhotoGrid'), {
  loading: () => <GalleryLoadingSkeleton />,
  ssr: false,
})

const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'

// ─── Filter categories ──────────────────────────────────────────────────────
const FILTERS = [
  { id: 'all',        label: 'All Projects' },
  { id: 'renovation', label: 'Full Renovation' },
  { id: 'repair',     label: 'Structural Repair' },
  { id: 'deck',       label: 'Decks' },
  { id: 'custom',     label: 'Custom Builds' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'before-after', label: 'Before & After' },
]

// ─── All gallery photos — every project with titles and expert captions ────────
interface GalleryProject {
  slug: string
  title: string
  location: string
  type: string
  categories: string[]
  photos: LightboxImage[]
  featured?: boolean
  hasBeforeAfter?: boolean
}

const GALLERY_PROJECTS: GalleryProject[] = [
  // ── Zephyr Cove — full 16-photo renovation ───────────────────────────────
  {
    slug: 'lake-tahoe-renovation',
    title: 'Lake Tahoe Full Home Renovation',
    location: 'Zephyr Cove, Lake Tahoe, NV',
    type: 'Full Home Renovation',
    categories: ['renovation', 'before-after'],
    featured: true,
    hasBeforeAfter: true,
    photos: [
      { src: `${CDN}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`, alt: 'Renovation complete exterior Lake Tahoe', title: 'Renovation Complete', caption: 'Full exterior transformation — snow-rated structure, updated siding, deck system. Permitted through Washoe County. BRE Builders NV #0085999.' },
      { src: `${CDN}/2025/12/02-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-2-of-16-1024x684.webp`, alt: 'Deck and structural work Lake Tahoe', title: 'Deck & Structural Work', caption: 'New deck framing rated for Lake Tahoe snow loads, integrated with updated exterior cladding system.' },
      { src: `${CDN}/2025/12/03-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-3-of-16-1024x684.webp`, alt: 'Deck railing walkway Lake Tahoe', title: 'Deck Railing & Walkway', caption: 'Code-compliant guard rail height, sealed decking surface for freeze-thaw durability.' },
      { src: `${CDN}/2025/12/04-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-4-of-16-1024x684.webp`, alt: 'Interior living space renovation', title: 'Interior Living Space', caption: 'New flooring, updated walls, improved lighting throughout the main level.' },
      { src: `${CDN}/2025/12/05-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-5-of-16-1024x684.webp`, alt: 'Interior finish work Lake Tahoe', title: 'Interior Finish Work', caption: 'Every surface inspected and finished to spec before client walkthrough. Consistent materials throughout.' },
      { src: `${CDN}/2025/12/06-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-6-of-16-1024x684.webp`, alt: 'Loft upper level renovation', title: 'Loft & Upper Level', caption: 'Open railing, updated flooring, improved natural light. Structural review completed prior to start.' },
      { src: `${CDN}/2025/12/07-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-7-of-16-1024x684.webp`, alt: 'Custom interior staircase', title: 'Custom Interior Staircase', caption: 'Structural assessment confirmed load capacity. New treads, risers, and railing installed and inspected.' },
      { src: `${CDN}/2025/12/08-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-8-of-16-1024x684.webp`, alt: 'Bathroom renovation Lake Tahoe', title: 'Bathroom Renovation', caption: 'New tile work, vanity, fixtures, shower system. Plumbing updated to current code.' },
      { src: `${CDN}/2025/12/09-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-9-of-16-1024x684.webp`, alt: 'Interior room renovation', title: 'Interior Room', caption: 'Consistent finish materials across bedrooms. New flooring, updated walls, improved closet storage.' },
      { src: `${CDN}/2025/12/10-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-10-of-16-1024x684.webp`, alt: 'Bathroom installation phase', title: 'Bathroom Installation', caption: 'Rough-in complete, tile in progress. All plumbing inspected before wall closure.' },
      { src: `${CDN}/2025/12/11-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-11-of-16-1024x684.webp`, alt: 'Interior staircase detail', title: 'Interior Staircase', caption: 'Updated treads, risers, and guard rail to current IBC requirements.' },
      { src: `${CDN}/2025/12/12-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-12-of-16-1024x684.webp`, alt: 'Upper level skylights', title: 'Upper Level — Skylights', caption: 'Open railing and natural light. Second-floor structural review prior to renovation.' },
      { src: `${CDN}/2025/12/13-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-13-of-16-1024x684.webp`, alt: 'Loft natural light', title: 'Loft Natural Light', caption: 'Open second-floor space. Natural light maximized through existing window layout.' },
      { src: `${CDN}/2025/12/14-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-14-of-16-1024x684.webp`, alt: 'Exterior deck renovation', title: 'Exterior Deck Renovation', caption: 'New decking material, updated railing, improved drainage away from foundation.' },
      { src: `${CDN}/2025/12/15-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-15-of-16-1024x684.webp`, alt: 'Deck walkway detail', title: 'Deck Walkway Detail', caption: 'Sealed surface and railing upgrade. All connections hardware-upgraded for Lake Tahoe snow load.' },
      { src: `${CDN}/2025/12/16-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-16-of-16-1-1024x684.webp`, alt: 'Completed full home renovation', title: 'Completed — Full View', caption: 'Interior and exterior transformation. Permitted, inspected, and delivered on schedule. BRE Builders NV #0085999.' },
    ],
  },

  // ── Glenbrook — 22-photo full renovation ─────────────────────────────────
  {
    slug: 'glenbrook-lake-tahoe',
    title: 'Glenbrook Full Home Renovation',
    location: 'Glenbrook, Lake Tahoe, NV',
    type: 'Full Home Renovation',
    categories: ['renovation', 'before-after'],
    featured: true,
    hasBeforeAfter: true,
    photos: [1,3,5,7,9,12,13,14,15,16,17,18,19,20,21,22].map((photoNum, idx) => {
      const n = String(photoNum).padStart(2, '0')
      const i = idx
      const titles = ['Full Home Renovation — Exterior','Front Elevation — Completed','Entry & Facade Detail','Main Living Area','Interior Finish Work','Kitchen Renovation','Dining & Living Space','Master Suite','Master Bathroom','Secondary Bedroom','Hallway Detail','Staircase Construction','Upper Level','Loft Area','Deck & Exterior','Rear Elevation','Side Elevation','Structural Upgrades','Foundation & Site Work','Framing Phase','Pre-Construction','Project Complete']
      const captions = [
        'Complete exterior renovation. Snow-rated structure, new siding, weather barrier. Washoe County permitted. BRE Builders NV #0085999.',
        'Front elevation — new exterior cladding, updated trim, improved weather barrier for Lake Tahoe winter conditions.',
        'Entry area showing quality of exterior finish work. All materials selected for performance in freeze-thaw climate.',
        'Main living area — new flooring, updated walls, improved lighting. Open layout maintained with upgraded finish materials.',
        'Interior finish detail — every surface inspected and finished to BRE Builders standard before client walkthrough.',
        'Kitchen renovation — new cabinetry, updated fixtures, modern finishes. Layout optimized for mountain home living.',
        'Dining and living renovation — coordinated finishes throughout open-plan main level. New flooring connects all zones.',
        'Master suite — enlarged layout, new flooring, updated lighting. En suite bathroom completely renovated.',
        'Master bathroom — new tile, vanity, fixtures, shower. Plumbing updated to code. Mountain climate durability materials.',
        'Secondary bedroom — new flooring, updated walls, improved closet storage. Consistent finish standard throughout.',
        'Hallway renovation showing transition between spaces. Consistent flooring and trim creates unified result.',
        'Staircase renovation — structural load confirmed, new treads, risers, and railing installed. Permitted and inspected.',
        'Upper level — all bedrooms, hallways, and mechanical access updated. Second-floor structural review performed.',
        'Loft area — open second-floor space with updated flooring and improved railing. Natural light maximized.',
        'Deck renovation — new decking material rated for Lake Tahoe snow loads, updated railing, improved drainage.',
        'Rear elevation — all weather-exposed surfaces upgraded with materials appropriate for Tahoe Basin conditions.',
        'Side elevation detail — siding, window trim, foundation interface. Proper flashing and weatherproofing throughout.',
        'Structural upgrade — framing reinforcement and connection hardware upgraded to current IBC snow-load requirements.',
        'Foundation and site prep — drainage improved, foundation interface waterproofed before interior work began.',
        'Framing phase — new partition walls, structural reinforcement, header upgrades. Inspected before insulation and drywall.',
        'Pre-construction assessment — full structural review, permit application, scope documentation completed before demolition.',
        'Project complete — full interior and exterior renovation. Permitted, inspected, delivered on schedule. BRE Builders NV #0085999.',
      ]
      return {
        src: `${CDN}/2025/12/${n}-619-Lakeview-Dr-Glenbrook-NV-89413-${photoNum}-of-37-600x403.webp`,
        alt: `${titles[i]} — Glenbrook Lake Tahoe Full Home Renovation`,
        title: titles[i],
        caption: captions[i],
      }
    }),
  },

  // ── Ripon Estate ─────────────────────────────────────────────────────────
  {
    slug: 'ripon-estate',
    title: 'Luxury Custom Home — Ripon, CA',
    location: 'Ripon, CA',
    type: 'Custom Home',
    categories: ['custom', 'residential'],
    featured: true,
    photos: [
      { src: `${CDN}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`, alt: 'Mediterranean front elevation luxury estate Ripon CA', title: 'Mediterranean Front Elevation', caption: 'Classical European architecture — custom column work, arched entries, and detailed cornice. Ground-up build by BRE Builders CA #1093798.' },
      { src: `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`, alt: 'Classical entryway columns luxury home Ripon CA', title: 'Grand Entryway', caption: 'Custom entryway with classical columns and arched detailing. Every architectural element engineered and built in-house.' },
      { src: `${CDN}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`, alt: 'Gourmet kitchen custom cabinetry marble Ripon CA', title: 'Gourmet Kitchen', caption: 'Custom cabinetry, marble backsplash, premium appliances. Kitchen designed for both function and architectural statement.' },
      { src: `${CDN}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`, alt: 'Custom iron staircase grand foyer Ripon CA', title: 'Grand Foyer Staircase', caption: 'Custom iron and hardwood staircase — engineered for load, built for elegance. Central feature of the home.' },
    ],
  },

  // ── Arun Deck Repair ─────────────────────────────────────────────────────
  {
    slug: 'arun-deck-repair',
    title: 'Arun Hillside Deck Repair',
    location: 'Lake Tahoe, NV',
    type: 'Deck Repair',
    categories: ['deck', 'repair', 'before-after'],
    hasBeforeAfter: true,
    photos: [
      { src: `${CDN}/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-1000x1000.jpg`, alt: 'Hillside deck repair reinforced beams Lake Tahoe', title: 'Reinforced Structural Beams', caption: 'New support beams installed on challenging hillside terrain. Elevated framing system designed for Lake Tahoe snow load and slope conditions.' },
    ],
  },

  // ── Lake Tahoe Deck ──────────────────────────────────────────────────────
  {
    slug: 'lake-tahoe-deck',
    title: 'Lake Tahoe Deck Structural Repair',
    location: 'Lake Tahoe, NV',
    type: 'Deck Repair',
    categories: ['deck', 'repair'],
    photos: [
      { src: `${CDN}/Lake-Tahoe-Deck-Reinforcement-%E2%80%93-Steel-Angle-Bracket-System-1000x1000.jpg`, alt: 'Steel angle bracket deck reinforcement Lake Tahoe', title: 'Steel Angle Bracket System', caption: 'Steel angle brackets anchored to CMU wall — engineered solution restoring structural safety to cantilevered deck. All hardware galvanized for exterior conditions.' },
    ],
  },

  // ── Charolette Deck ──────────────────────────────────────────────────────
  {
    slug: 'charolettes-deck',
    title: "Charolette's Custom Deck",
    location: 'Sparks, NV',
    type: 'Deck Build',
    categories: ['deck'],
    photos: [
      { src: `${CDN}/Charolettes-Finished-Deck-%E2%80%93-Smooth-Sealed-Surface-1000x1000.jpg`, alt: 'Custom deck smooth sealed surface Sparks NV', title: 'Completed Deck — Sealed Surface', caption: 'Custom deck build with smooth sealed surface finish. Properly sloped for drainage, sealed for UV and weather resistance.' },
    ],
  },

  // ── Car Wash Commercial ───────────────────────────────────────────────────
  {
    slug: 'car-wash',
    title: 'Car Wash — Commercial Concrete',
    location: 'Reno, NV',
    type: 'Commercial / Concrete',
    categories: ['commercial', 'concrete'],
    photos: [
      { src: `${CDN}/Commercial-Concrete-Slab-Pour-with-Utility-Access-%E2%80%93-Reno-NV-1000x1000.jpg`, alt: 'Commercial concrete slab car wash Reno NV', title: 'Commercial Concrete Slab', caption: 'Large-scale concrete slab pour with integrated utility access. Site prep, reinforcement, and pour managed by BRE Builders licensed crew. Reno, NV.' },
    ],
  },

  // ── Mine Shaft ───────────────────────────────────────────────────────────
  {
    slug: 'mine-shaft',
    title: 'Mine Shaft Framing & Structure',
    location: 'Reno, NV',
    type: 'Custom Construction',
    categories: ['custom', 'commercial'],
    photos: [
      { src: `${CDN}/Close-Up-of-Structural-Wall-with-Custom-Openings-600x403.jpg`, alt: 'Mine shaft framing custom structure Reno NV', title: 'Custom Structural Framing', caption: 'Precision framing over an active mine shaft — custom openings, safety-compliant design, engineered for the specific site conditions.' },
    ],
  },

  // ── Rio Tinto ────────────────────────────────────────────────────────────
  {
    slug: 'rio-tinto',
    title: 'Rio Tinto Home Renovation',
    location: 'Reno, NV',
    type: 'Residential Renovation',
    categories: ['renovation', 'repair', 'before-after'],
    hasBeforeAfter: true,
    photos: [
      { src: `${CDN}/Interior-Living-Room-Drywall-Prep-%E2%80%93-Rio-Tinto-1000x1000.jpg`, alt: 'Interior drywall prep renovation Reno NV', title: 'Interior Drywall Prep Phase', caption: 'Interior living room during drywall prep phase — framing inspected, mechanical rough-in complete, ready for insulation and drywall.' },
    ],
  },

  // ── Quaking Aspen ────────────────────────────────────────────────────────
  {
    slug: 'quaking-aspen',
    title: 'Quaking Aspen Structural Repair',
    location: 'Reno, NV',
    type: 'Structural Repair',
    categories: ['repair', 'structural'],
    photos: [
      { src: `${CDN}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`, alt: 'Dry rot exposure wall panel structural repair Reno NV', title: 'Dry Rot Exposure — Wall Panel', caption: 'Extensive dry rot revealed after siding removal. Full framing assessment performed, all compromised members replaced before re-sheathing. BRE Builders NV #0085999.' },
    ],
  },
]

// ─── Scroll fade ──────────────────────────────────────────────────────────────
function Fade({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 40) { el.style.opacity = '1'; el.style.transform = 'none'; return }
    el.style.cssText = `opacity:0;transform:translateY(20px);transition:opacity .6s ease ${delay}ms,transform .6s ease ${delay}ms`
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}

// ─── Before/After drag slider ─────────────────────────────────────────────────
function BeforeAfterSlider({ before, after, beforeLabel = 'Before', afterLabel = 'After' }: {
  before: LightboxImage; after: LightboxImage
  beforeLabel?: string; afterLabel?: string
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    const el = containerRef.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl select-none cursor-col-resize"
      style={{ aspectRatio: '16/9' }}
      onMouseDown={(e) => { dragging.current = true; update(e.clientX) }}
      onMouseMove={(e) => { if (dragging.current) update(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX) }}
      onTouchMove={(e) => { if (dragging.current) update(e.touches[0].clientX) }}
      onTouchEnd={() => { dragging.current = false }}
    >
      {/* After (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after.src} alt={after.alt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before.src} alt={before.alt} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / pos}%` }} draggable={false} />
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg z-10" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center gap-1">
          <svg className="w-3 h-3 text-void" fill="currentColor" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /><path d="M9 18l6-6-6-6" /></svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[2px] uppercase bg-void/70 text-cream px-2 py-1 rounded backdrop-blur-sm z-10">{beforeLabel}</div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[2px] uppercase bg-teal/80 text-void px-2 py-1 rounded backdrop-blur-sm z-10">{afterLabel}</div>

      {/* Drag hint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-60">
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-white bg-void/50 px-3 py-1.5 rounded-full backdrop-blur-sm" style={{ marginTop: '-20%' }}>
          ← drag to compare →
        </div>
      </div>
    </div>
  )
}

// ─── Loading Skeleton ──────────────────────────────────────────────────────
function GalleryLoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-void/20 rounded-xl animate-pulse" style={{ aspectRatio: '16/9' }} />
      ))}
    </div>
  )
}

// ─── Project Gallery Card ──────────────────────────────────────────────────────
function ProjectCard({ project, onOpenLightbox }: {
  project: GalleryProject
  onOpenLightbox: (photos: LightboxImage[], index: number) => void
}) {
  const [hovered, setHovered] = useState(false)
  const [thumbIdx, setThumbIdx] = useState(0)

  const hasMany = project.photos.length > 1
  const current = project.photos[thumbIdx]

  return (
    <Fade>
      <div
        className="group bg-panel rounded-2xl overflow-hidden border border-white/[0.06] hover:border-teal/20 transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Main photo */}
        <button
          className="relative w-full overflow-hidden focus:outline-none"
          style={{ aspectRatio: '4/3' }}
          onClick={() => onOpenLightbox(project.photos, thumbIdx)}
          aria-label={`Open ${project.title} gallery`}
        >
          {/* Photos layer — fade between them */}
          {project.photos.map((photo, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === thumbIdx ? 1 : 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
                loading="lazy"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/35 to-void/10" />

          {/* Expand icon */}
          <div className={`absolute top-3 right-3 w-8 h-8 rounded-full border border-white/20 bg-void/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>

          {/* Photo count badge */}
          {hasMany && (
            <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[2px] bg-void/60 text-cream/80 px-2 py-1 rounded-full backdrop-blur-sm">
              {project.photos.length} photos
            </div>
          )}

          {/* Before/after badge */}
          {project.hasBeforeAfter && (
            <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[2px] bg-teal/80 text-void px-2 py-1 rounded-full">
              Before & After
            </div>
          )}

          {/* Caption on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
            {current.title && <p className="font-display text-[15px] text-white leading-snug mb-1">{current.title}</p>}
            {current.caption && <p className="font-mono text-[10px] text-white/90 leading-snug line-clamp-2">{current.caption}</p>}
          </div>
        </button>

        {/* Thumbnail strip — only if multiple photos */}
        {hasMany && (
          <div className="flex gap-1.5 px-3 py-2 overflow-x-auto scrollbar-none">
            {project.photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setThumbIdx(i)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === thumbIdx ? 'border-teal' : 'border-transparent opacity-50 hover:opacity-80'}`}
                style={{ width: 44, height: 32 }}
                aria-label={`View photo ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Card footer */}
        <div className="px-4 pb-4 pt-1 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[16px] text-cream leading-snug mb-0.5">{project.title}</h3>
            <p className="font-mono text-[10px] text-cream/40 tracking-wider">📍 {project.location}</p>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex-shrink-0 font-mono text-[10px] tracking-wider text-teal/60 hover:text-teal transition-colors border border-teal/20 hover:border-teal/40 rounded-lg px-3 py-2 mt-0.5"
          >
            Full Project →
          </Link>
        </div>
      </div>
    </Fade>
  )
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { open, index, images, openAt, close, setIndex } = useGalleryLightbox()

  const filtered = activeFilter === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.categories.includes(activeFilter))

  // Total photo count
  const totalPhotos = GALLERY_PROJECTS.reduce((acc, p) => acc + p.photos.length, 0)

  // Before/after projects
  const beforeAfterProjects = GALLERY_PROJECTS.filter(p => p.hasBeforeAfter)

  return (
    <>
      <Nav />
      <main data-theme="gallery">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(30,207,201,1) 1px,transparent 1px),linear-gradient(90deg,rgba(30,207,201,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Project Gallery</span>
            </div>
            <h1 className="font-display font-light text-[clamp(44px,8vw,96px)] leading-[0.95] tracking-[-2px] text-cream mb-5">
              Every Project.<br />
              <span className="italic text-teal">Every Detail.</span>
            </h1>
            <p className="text-[16px] text-cream/65 max-w-[540px] leading-relaxed mb-8">
              {totalPhotos}+ photos across {GALLERY_PROJECTS.length} projects — from full home renovations to structural repairs. Click any photo to expand and read the expert breakdown.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { n: `${totalPhotos}+`, l: 'Photos' },
                { n: `${GALLERY_PROJECTS.length}`, l: 'Projects' },
                { n: `${beforeAfterProjects.length}`, l: 'Before & After' },
                { n: 'NV · CA', l: 'Licensed' },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display text-[clamp(22px,3vw,36px)] text-white font-light leading-none">{s.n}</div>
                  <div className="font-mono text-[9px] tracking-[2px] uppercase text-cream/40 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <div className="sticky top-0 z-40 bg-void/95 backdrop-blur-md border-b border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
            <div className="flex gap-2 overflow-x-auto scrollbar-none py-3">
              {FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex-shrink-0 font-mono text-[11px] tracking-[1.5px] uppercase px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeFilter === f.id
                      ? 'bg-teal text-void border-teal'
                      : 'border-white/[0.08] text-cream/45 hover:text-cream hover:border-white/20'
                  }`}
                >
                  {f.label}
                  {f.id !== 'all' && (
                    <span className="ml-1.5 opacity-60">
                      ({GALLERY_PROJECTS.filter(p => p.categories.includes(f.id)).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── BEFORE & AFTER — featured section when filter is active ── */}
        {activeFilter === 'before-after' && (
          <section className="py-16 lg:py-24 bg-deep">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Interactive Comparison</span>
              </div>
              <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
                Drag to Compare<br /><span className="italic text-teal">Before & After.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Zephyr Cove */}
                <div>
                  <BeforeAfterSlider
                    before={{ src: `${CDN}/2025/12/04-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-4-of-16-1024x684.webp`, alt: 'Before interior renovation Zephyr Cove' }}
                    after={{ src: `${CDN}/2025/12/01-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-1-of-16-1024x684.webp`, alt: 'After exterior renovation complete Zephyr Cove' }}
                    beforeLabel="During" afterLabel="After"
                  />
                  <p className="font-mono text-[10px] tracking-wider text-cream/40 mt-3">Lake Tahoe Full Home Renovation — Zephyr Cove, NV</p>
                </div>
                {/* Glenbrook */}
                <div>
                  <BeforeAfterSlider
                    before={{ src: `${CDN}/2025/12/19-619-Lakeview-Dr-Glenbrook-NV-89413-19-of-37-600x403.webp`, alt: 'Before renovation foundation Glenbrook' }}
                    after={{ src: `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`, alt: 'After full renovation Glenbrook Lake Tahoe' }}
                    beforeLabel="Foundation" afterLabel="Complete"
                  />
                  <p className="font-mono text-[10px] tracking-wider text-cream/40 mt-3">Glenbrook Full Home Renovation — Lake Tahoe, NV</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── PROJECT GRID ── */}
        <section className="py-16 lg:py-24 bg-void">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

            {/* Result count */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-mono text-[11px] text-cream/30 tracking-wider">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''} · {filtered.reduce((a, p) => a + p.photos.length, 0)} photos
              </p>
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="font-mono text-[11px] text-teal/50 hover:text-teal transition-colors tracking-wider"
                >
                  ← Show all
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-[24px] text-cream/30 mb-3">No projects in this category yet.</p>
                <button onClick={() => setActiveFilter('all')} className="font-mono text-[12px] text-teal tracking-wider">View all projects →</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onOpenLightbox={openAt}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── FEATURED: Zephyr Cove full horizontal scroll ── */}
        {(activeFilter === 'all' || activeFilter === 'renovation') && (
          <section className="py-16 lg:py-24 bg-deep overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-teal" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Featured — Full Scroll Gallery</span>
              </div>
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-[clamp(28px,4vw,54px)] font-light leading-[1.0] tracking-tight">
                  Lake Tahoe Renovation<br /><span className="italic text-teal">16 Photos · Every Phase</span>
                </h2>
                <Link href="/projects/lake-tahoe-renovation" className="font-mono text-[11px] tracking-[2px] uppercase text-teal/50 hover:text-teal transition-colors flex-shrink-0 hidden md:block">
                  Full Project →
                </Link>
              </div>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none" style={{ scrollSnapType: 'x mandatory' }}>
                  {GALLERY_PROJECTS[0].photos.map((photo, i) => (
                    <button
                      key={i}
                      className="flex-shrink-0 group focus:outline-none"
                      style={{ scrollSnapAlign: 'start', width: 280 }}
                      onClick={() => openAt(GALLERY_PROJECTS[0].photos, i)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photo.src} alt={photo.alt}
                        className="w-full h-48 md:h-56 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                        loading={i < 4 ? 'eager' : 'lazy'}
                      />
                      <p className="mt-2 font-mono text-[10px] tracking-wider text-cream/50 uppercase px-1 text-left">{photo.title}</p>
                    </button>
                  ))}
                </div>
                <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-deep to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-deep to-transparent pointer-events-none" />
              </div>
            </div>
          </section>
        )}

        {/* ── LIVE PROJECT PHOTOS (from Supabase) ── */}
        <section className="py-16 lg:py-24 bg-deep border-t border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Live Updates</span>
            </div>
            <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-12">
              New Photos<br /><span className="italic text-teal">As Projects Progress.</span>
            </h2>
            <Suspense fallback={<GalleryLoadingSkeleton />}>
              <PhotoGrid />
            </Suspense>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-28 bg-void border-t border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-7 h-px bg-teal" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-teal">Start Your Project</span>
              <div className="w-7 h-px bg-teal" />
            </div>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] font-light leading-[0.97] tracking-tight mb-6">
              Ready to Build?<br /><span className="italic text-teal">Let&apos;s Talk.</span>
            </h2>
            <p className="text-[15px] text-cream/55 max-w-md mx-auto mb-10 leading-relaxed">
              Free estimates · Response within 24 hours · Licensed in Nevada and California since 1989.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-9 py-4 bg-teal text-void text-[14px] font-bold rounded-lg hover:bg-teal/90 transition-colors">
                Request a Free Quote →
              </Link>
              <Link href="/projects" className="w-full sm:w-auto px-9 py-4 border border-white/15 text-cream/60 text-[13px] rounded-lg hover:border-teal/30 hover:text-teal transition-all font-mono">
                All Project Pages →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox */}
      <GalleryLightbox
        open={open}
        images={images}
        index={index}
        onClose={close}
        onIndexChange={setIndex}
      />

      <Footer />
    </>
  )
}
