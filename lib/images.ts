// All verified image URLs
// CDN: https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/
// WP fallback: https://brebuilders.com/wp-content/uploads/ (remove when WP shuts down)

const CDN = 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main'
const WP  = 'https://brebuilders.com/wp-content/uploads' // DEPRECATED — remove after WP shutdown

// Helper: use CDN if file is downloaded, otherwise WP
function img(filename: string, hasCdn = false): string {
  return hasCdn ? `${CDN}/${filename}` : `${WP}/${filename}`
}

export const IMGS = {
  // BRANDING
  logo: `${CDN}/2026/01/brelogo.webp`,

  // ADU SERVICE
  adu_main:   `${CDN}/adu-homepage-600x403.jpg`,
  adu_pool:   `${CDN}/pool-house.jpg`,
  adu_inlaw:  `${CDN}/inlaw-unit.jpg`,
  adu_garage: `${WP}/garage.jpg`,

  // REPAIRS SERVICE
  repairs_foundation: `${CDN}/Foundation-Repair-and-Foundation-Issues-in-Reno-NV-min.jpg`,
  repairs_water:      `${WP}/Water-Intrusion-and-Moisture-Issues-in-Reno-NV.jpg`,

  // STRUCTURAL REPAIRS
  repairs_rot:      `${CDN}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`,
  repairs_deck_lt:  `${CDN}/Lake-Tahoe-Deck-Reinforcement---Steel-Angle-Bracket-System-600x403.jpg`,
  repairs_mine:     `${CDN}/Close-Up-of-Structural-Wall-with-Custom-Openings-600x403.jpg`,
  repairs_arun:     `${CDN}/uploads/Arun-Deck-Repair-%E2%80%93-Reinforced-Support-Beams-and-Elevated-Framing-1000x1000.jpg`,

  // LAKE TAHOE ZEPHYR COVE — 16 photos (695 Lakeview Blvd)
  lt: (n: number) => {
    const pad = String(n).padStart(2, '0')
    const suffix = n === 16 ? '-1' : ''
    return `${CDN}/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`
  },

  // LAKE TAHOE GLENBROOK — 37 photos (619 Lakeview Dr)
  glenbrook: (n: number) => {
    const pad = String(n).padStart(2, '0')
    return `${CDN}/2025/12/${pad}-619-Lakeview-Dr-Glenbrook-NV-89413-${n}-of-37.webp`
  },

  // RIPON ESTATE — 5 photos
  ripon: [
    `${CDN}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,
    `${CDN}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`,
    `${CDN}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`,
    `${CDN}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`,
    `${CDN}/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`,
  ],

  // SERVICE CARDS
  svc_commercial:   `${CDN}/Image_fx-9-600x403.jpg`,
  svc_custom_home:  `${CDN}/image-39-600x403.jpg`,
  svc_warehouse:    `${CDN}/image-18-600x403.jpg`,
  svc_hauling:      `${CDN}/image-26-600x403.jpg`,
  svc_concrete:     `${CDN}/image-22-600x403.jpg`,
  svc_repair:       `${CDN}/image-24-600x403.jpg`,
  svc_office:       `${CDN}/image-17-600x403.jpg`,
  svc_retail:       `${CDN}/image-16-600x403.jpg`,
  svc_newbuild:     `${CDN}/image-7-600x403.jpg`,
  svc_deck:         `${CDN}/image-8-600x403.jpg`,
  svc_addition:     `${CDN}/image-9-600x403.jpg`,
  svc_loft:         `${CDN}/loft-condo-remodel-600x403.jpg`,
  svc_kitchen:      `${CDN}/2022/08/069e8b9c8f2e2250197256ce430710e4-uncropped_scaled_within_1536_1152-1-1024x768.webp`,

  // CONCRETE
  concrete_slab: `${CDN}/Commercial-Concrete-Slab-Pour-with-Utility-Access---Reno-NV-600x403.jpg`,

  // DECKS
  deck_charolette: `${CDN}/Charolettes-Finished-Deck---Smooth-Sealed-Surface-scaled-600x403.jpg`,

  // RIO TINTO
  rio_tinto: `${CDN}/Interior-Living-Room-Drywall-Prep---Rio-Tinto-600x403.jpg`,

  // BLOG CONTENT IMAGES
  blog_contractor:    `${CDN}/pexels-nathanmartins-13834439-scaled.jpg`,
  blog_wall_gaps:     `${CDN}/Gaps-between-walls-and-flooring-scaled.jpg`,
  lt_glenbrook_1:     `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`,

  // BLOG POST INLINE IMAGES
  blog_20yr_hero:     `${CDN}/uploads/20-Year-Old-Reno-Homes-600x403.webp`,
  blog_cracked_shower:`${CDN}/uploads/Cracked-Shower-Walls-600x403.webp`,
  blog_hvac:          `${CDN}/uploads/Failing-HVAC-Systems-600x403.webp`,
  blog_porch:         `${CDN}/uploads/Shifting-Porch-Columns-600x403.webp`,
  blog_basement_water:`${CDN}/uploads/Basement-Water-Intrusion-600x403.webp`,

  blog_30yr_hero:     `${CDN}/uploads/30-Year-Old-Reno-Homes-600x403.webp`,
  blog_furnace:       `${CDN}/uploads/Rusty-Furnace-Damage-600x403.webp`,
  blog_unsafe_deck:   `${CDN}/uploads/Unsafe-Deck-Framing-600x403.webp`,
  blog_pipes:         `${CDN}/uploads/Galvanized-Pipe-Corrosion-600x403.webp`,
  blog_wiring:        `${CDN}/uploads/Aluminum-Wiring-Risk-600x403.webp`,

  blog_deck_framing:  `${CDN}/Framing-and-Bench-Layout-Stage.jpg`,
  blog_after_const:   `${CDN}/After-Construction_resized.jpg`,

  blog_kitchen_reno:  `${CDN}/2022/10/kitchen-real-estate-interior-design-1940177.jpg`,

  blog_carwash:       `${CDN}/Starlite-Express-Car-Wash-.jpg`,
  blog_gsr:           `${CDN}/GSR_project-1024x778.jpg`,

  lt_glenbrook:       `${CDN}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`,
  lt_16:              `${CDN}/2025/12/16-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-16-of-16-600x403.webp`,

  // STEVE ROSENTHAL
  steve: '/steve-rosenthal.png',
} as const
