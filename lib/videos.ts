/**
 * BRE Builders — Video Library
 * All videos hosted on YouTube (no size limits, free CDN, embeddable everywhere)
 *
 * ADDING NEW VIDEOS — 3 steps:
 * 1. Upload MP4 to YouTube Studio (youtube.com/upload)
 * 2. Use SEO title/description from PENDING_UPLOADS list below
 * 3. Copy the video ID from the URL and add entry to VIDEOS array
 *
 * YouTube URL format: youtube.com/watch?v=VIDEO_ID_HERE
 */

export interface BREVideo {
  id: string           // YouTube video ID
  title: string        // SEO-optimized title
  description: string  // Short description for site display
  category: string     // Service category
  location: string     // Project location
  thumbnail?: string   // Custom thumbnail (auto-uses YouTube if not set)
  featured?: boolean   // Show on homepage
  projectSlug?: string // Links to project page
}

export const VIDEOS: BREVideo[] = [
  {
    id: '6oTurM7gESE',
    title: 'Lake Tahoe Full Home Renovation — BRE Builders | Zephyr Cove, NV',
    description: 'Complete interior and exterior renovation at Zephyr Cove, Lake Tahoe, Lake Tahoe NV. Structural upgrades, kitchen and bath remodeling, deck work, custom stairs.',
    category: 'Full Home Renovation',
    location: 'Zephyr Cove, Lake Tahoe, NV',
    featured: true,
    projectSlug: 'lake-tahoe-renovation',
  },
  // ADD NEW VIDEOS HERE after uploading to YouTube:
  // {
  //   id: 'YOUTUBE_VIDEO_ID',
  //   title: 'Project — Service by BRE Builders | City, State',
  //   description: 'Brief project description.',
  //   category: 'ADU | Custom Home | Structural Repairs | Kitchen & Bath | Decks | Commercial',
  //   location: 'City, State',
  //   featured: false,
  //   projectSlug: 'optional-project-slug',
  // },
]

// SEO-optimized titles/descriptions for all 9 WP videos
// Upload each to YouTube Studio then add the ID to VIDEOS above
export const PENDING_UPLOADS = [
  {
    filename: '4984216-uhd_3840_2160_30fps.mp4',
    title: 'BRE Builders — General Contractor Reno NV | Custom Homes, ADUs, Renovations',
    description: 'BRE Builders is a licensed general contractor serving Reno, Sparks, Lake Tahoe, and Northern California since 1989. Custom homes, ADUs, structural repairs, kitchen and bath, decks, commercial. NV #0085999 · CA #1093798. Free estimates: (775) 391-4517.',
    tags: 'bre builders, general contractor reno nv, licensed contractor nevada, nv #0085999, home renovation reno',
  },
  {
    filename: 'about-blue-reef-buiders-reno-nevada.mp4',
    title: 'About BRE Builders — Licensed General Contractor Reno NV Since 1989',
    description: 'About Blue Reef Builders — licensed general contractor in Reno NV since 1989. Owner Steve Rosenthal. Residential, commercial, ADU, and custom home construction across Northern Nevada and California. NV #0085999 · CA #1093798.',
    tags: 'blue reef builders, bre builders reno nv, general contractor reno, steve rosenthal, licensed contractor nevada',
  },
  {
    filename: 'newhome.mp4',
    title: 'Custom Home Construction Reno NV — BRE Builders | Licensed Since 1989',
    description: 'Custom home construction by BRE Builders in Reno NV and Northern California. In-house design-build from concept to keys. NV #0085999 · CA #1093798.',
    tags: 'custom home builder reno nv, new home construction nevada, bre builders, nv #0085999',
  },
  {
    filename: 'interior1.mp4',
    title: 'Interior Renovation Reno NV — BRE Builders | Licensed Contractor',
    description: 'Interior renovation work by BRE Builders in Reno NV. Kitchen remodeling, bathroom renovations, custom finishes. Licensed NV #0085999.',
    tags: 'interior renovation reno nv, kitchen remodel reno, bre builders, licensed contractor nevada',
  },
  {
    filename: 'modern-home.mp4',
    title: 'Modern Home Renovation — BRE Builders | Reno NV Licensed Contractor',
    description: 'Modern home renovation by BRE Builders in Northern Nevada. Full interior and exterior renovation. Licensed since 1989. NV #0085999.',
    tags: 'modern home renovation reno nv, home remodel reno, bre builders',
  },
  {
    filename: 'contact-us.mp4',
    title: 'Contact BRE Builders — Free Estimates | Licensed Contractor Reno NV',
    description: 'Get a free estimate from BRE Builders. Call (775) 391-4517 or visit brebuilders.com. Licensed NV #0085999 · CA #1093798.',
    tags: 'bre builders, free estimate reno nv, licensed contractor nevada, contact bre builders',
  },
  {
    filename: 'modesto-california.mp4',
    title: 'Construction Services Modesto California — BRE Builders | CA #1093798',
    description: 'Construction services in Modesto, California by BRE Builders. Licensed general contractor in California since 1989. CA License #1093798.',
    tags: 'contractor modesto california, general contractor ca #1093798, bre builders california',
  },
  {
    filename: '7490408-hd_1280_720_30fps.mp4',
    title: 'BRE Builders Project Showcase — Northern Nevada & California',
    description: 'Project showcase from BRE Builders — licensed general contractor in Reno NV and Northern California. ADUs, custom homes, renovations, commercial. NV #0085999 · CA #1093798.',
    tags: 'bre builders projects, general contractor reno nv, home renovation nevada',
  },
  {
    filename: '8488354-uhd_3840_2160_30fps.mp4',
    title: 'BRE Builders Construction Reno NV — Licensed Since 1989',
    description: 'BRE Builders construction in Reno NV — licensed general contractor serving Northern Nevada and California since 1989. NV #0085999 · CA #1093798.',
    tags: 'bre builders, construction reno nv, licensed contractor nevada, nv #0085999',
  },
]
