/**
 * BRE Builders — Media Type System
 * Single source of truth for all image and video data structures
 *
 * READ docs/MEDIA_STRATEGY.md before adding new media
 */

export const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'

// ── IMAGE TYPES ──────────────────────────────────────────────────────────────

export type ImagePhase = 'before' | 'during' | 'after' | 'completed' | 'detail'
export type ImageRoom = 'exterior' | 'interior' | 'kitchen' | 'bathroom' | 'bedroom' |
                        'living' | 'structural' | 'deck' | 'foundation' | 'framing' |
                        'roofing' | 'commercial' | 'overview'

export interface BREImage {
  url: string          // CDN URL — always cdn.jsdelivr.net/...
  wp_url?: string      // Legacy WP URL — remove after WP shutdown
  alt: string          // SEO alt text 80-160 chars
                       // Formula: [What shown] — [Project] by BRE Builders | [City, State] | NV #0085999
  title: string        // ImageObject schema title
  caption: string      // Display caption, short, human-readable, Title Case
  keywords: string[]   // For image SEO and AI indexing
  width?: number       // Actual pixel width
  height?: number      // Actual pixel height
  phase?: ImagePhase   // before/during/after/completed/detail
  room?: ImageRoom     // what type of space/area
  dateCaptured?: string // YYYY-MM format
}

// ── PROJECT TYPES ────────────────────────────────────────────────────────────

export type ServiceType =
  | 'full-home-renovation'
  | 'custom-home'
  | 'adu'
  | 'addition'
  | 'structural-repair'
  | 'deck-construction'
  | 'deck-repair'
  | 'kitchen-bath'
  | 'commercial'
  | 'commercial-concrete'
  | 'framing'
  | 'roofing'

export interface BREProject {
  slug: string
  name: string
  address?: string
  location: string
  state: 'NV' | 'CA'
  serviceType: ServiceType
  year?: string
  sqft?: number
  description: string  // 2-3 sentences, factual, no marketing fluff
  thumbnail: BREImage  // Card image for portfolio grid
  hero: BREImage       // Full-width page hero
  gallery: BREImage[]  // All project photos
  videoIds?: string[]  // YouTube video IDs for this project
  featured?: boolean   // Show on homepage showcase
}

// ── VIDEO TYPES ──────────────────────────────────────────────────────────────

export interface BREVideo {
  id: string           // YouTube video ID (from watch?v=XXXX)
  title: string        // SEO-optimized YouTube title
  description: string  // Short description for site display (not YouTube description)
  category: string     // Service category
  location: string     // Project location
  duration?: string    // ISO 8601: "PT3M42S" = 3 min 42 sec
  uploadDate?: string  // YYYY-MM-DD
  thumbnail?: string   // Custom thumbnail URL (uses YouTube auto if not set)
  featured?: boolean   // Show in featured video section
  projectSlug?: string // Links to /projects/[slug] page
}

// ── SCHEMA GENERATORS ────────────────────────────────────────────────────────

export function imageObjectSchema(img: BREImage, projectName: string) {
  return {
    '@type': 'ImageObject',
    url: img.url,
    name: img.title,
    description: img.alt,
    caption: img.caption,
    ...(img.width && { width: img.width }),
    ...(img.height && { height: img.height }),
    author: {
      '@type': 'Organization',
      name: 'Blue Reef Builders',
      url: 'https://brebuilders.com',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Blue Reef Builders',
    },
    keywords: img.keywords.join(', '),
    representativeOfPage: false,
  }
}

export function videoObjectSchema(video: BREVideo) {
  const thumbUrl = video.thumbnail ||
    `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  return {
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: thumbUrl,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    ...(video.uploadDate && { uploadDate: video.uploadDate }),
    ...(video.duration && { duration: video.duration }),
    publisher: {
      '@type': 'Organization',
      name: 'Blue Reef Builders',
      url: 'https://brebuilders.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brebuilders.com/brelogo.webp',
      },
    },
  }
}

export function projectSchemaGraph(project: BREProject) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ImageGallery',
        name: `${project.name} — Portfolio Photos`,
        url: `https://brebuilders.com/projects/${project.slug}/`,
        image: project.gallery.map(img => imageObjectSchema(img, project.name)),
        author: {
          '@type': 'Organization',
          name: 'Blue Reef Builders',
        },
      },
      {
        '@type': 'Project',
        name: project.name,
        description: project.description,
        location: {
          '@type': 'Place',
          name: project.location,
        },
        contractor: {
          '@type': 'GeneralContractor',
          name: 'Blue Reef Builders',
          url: 'https://brebuilders.com',
          telephone: '+17753914517',
          license: project.state === 'NV' ? 'NV #0085999' : 'CA #1093798',
        },
      },
    ],
  }
}
