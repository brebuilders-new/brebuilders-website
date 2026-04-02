// All verified image URLs — brebuilders.com/wp-content/uploads/
// Source of truth: skills/bre-builders-images/SKILL.md

const BASE = 'https://brebuilders.com/wp-content/uploads'

export const IMGS = {
  // BRANDING
  logo: `${BASE}/2026/01/brelogo.webp`,

  // ADU SERVICE
  adu_main:   `${BASE}/adu-homepage-600x403.jpg`,
  adu_pool:   `${BASE}/pool-house.jpg`,
  adu_inlaw:  `${BASE}/inlaw-unit.jpg`,
  adu_garage: `${BASE}/garage.jpg`,

  // REPAIRS SERVICE
  repairs_foundation: `${BASE}/Foundation-Repair-and-Foundation-Issues-in-Reno-NV-min.jpg`,
  repairs_water:      `${BASE}/Water-Intrusion-and-Moisture-Issues-in-Reno-NV.jpg`,

  // STRUCTURAL REPAIRS
  repairs_rot:      `${BASE}/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg`,
  repairs_deck_lt:  `${BASE}/Lake-Tahoe-Deck-Reinforcement-\u2013-Steel-Angle-Bracket-System-600x403.jpg`,
  repairs_mine:     `${BASE}/Close-Up-of-Structural-Wall-with-Custom-Openings-600x403.jpg`,
  repairs_arun:     `${BASE}/Arun-Deck-Repair-\u2013-Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg`,

  // LAKE TAHOE — 16 photos
  lt: (n: number) => {
    const pad = String(n).padStart(2, '0')
    const suffix = n === 16 ? '-1' : ''
    return `${BASE}/2025/12/${pad}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${n}-of-16${suffix}-1024x684.webp`
  },

  // RIPON ESTATE — 5 photos
  ripon: [
    `${BASE}/e228c329-e139-4d18-869f-29659b27e05d.jpg`,      // entryway
    `${BASE}/c1b0cbef-a25d-4690-9d95-0cc0bab05513.jpg`,      // kitchen
    `${BASE}/5e87f057-a867-4094-9529-636cd4f1e1ac.jpg`,      // staircase
    `${BASE}/03368773-da7c-4798-8693-4b3cfefd3615.jpg`,      // front elevation
    `${BASE}/b58dbd32-e5b2-4d1e-b225-72bb916a6379.jpg`,      // laundry suite
  ],

  // SERVICE CARDS
  svc_commercial:   `${BASE}/Image_fx-9-600x403.jpg`,
  svc_custom_home:  `${BASE}/image-39-600x403.jpg`,
  svc_warehouse:    `${BASE}/image-18-600x403.jpg`,
  svc_hauling:      `${BASE}/image-26-600x403.jpg`,
  svc_concrete:     `${BASE}/image-22-600x403.jpg`,
  svc_repair:       `${BASE}/image-24-600x403.jpg`,
  svc_office:       `${BASE}/image-17-600x403.jpg`,
  svc_retail:       `${BASE}/image-16-600x403.jpg`,
  svc_newbuild:     `${BASE}/image-7-600x403.jpg`,
  svc_deck:         `${BASE}/image-8-600x403.jpg`,
  svc_addition:     `${BASE}/image-9-600x403.jpg`,
  svc_loft:         `${BASE}/loft-condo-remodel-600x403.jpg`,
  svc_kitchen:      `${BASE}/2022/08/069e8b9c8f2e2250197256ce430710e4-uncropped_scaled_within_1536_1152-1-600x403.jpg`,

  // CONCRETE
  concrete_slab: `${BASE}/Commercial-Concrete-Slab-Pour-with-Utility-Access-\u2013-Reno-NV-600x403.jpg`,

  // DECKS
  deck_charolette: `${BASE}/Charolettes-Finished-Deck-\u2013-Smooth-Sealed-Surface-scaled-600x403.jpg`,

  // RIO TINTO
  rio_tinto: `${BASE}/Interior-Living-Room-Drywall-Prep-\u2013-Rio-Tinto-600x403.jpg`,
  // BLOG CONTENT IMAGES
  blog_contractor:    `${BASE}/pexels-nathanmartins-13834439-scaled.jpg`,
  blog_wall_gaps:     `${BASE}/Gaps-between-walls-and-flooring-scaled.jpg`,
  lt_glenbrook_1:     `${BASE}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`,


  // BLOG POST INLINE IMAGES — from WP uploads
  // 20-year post specific
  blog_20yr_hero:     `${BASE}/20-Year-Old-Reno-Homes.jpg`,
  blog_cracked_shower:`${BASE}/Cracked-Shower-Walls.jpg`,
  blog_hvac:          `${BASE}/Failing-HVAC-Systems.jpg`,
  blog_porch:         `${BASE}/Shifting-Porch-Columns.jpg`,
  blog_basement_water:`${BASE}/Basement-Water-Intrusion.jpg`,

  // 30-year post specific
  blog_30yr_hero:     `${BASE}/30-Year-Old-Reno-Homes.jpg`,
  blog_furnace:       `${BASE}/Rusty-Furnace-Damage.jpg`,
  blog_unsafe_deck:   `${BASE}/Unsafe-Deck-Framing.jpg`,
  blog_pipes:         `${BASE}/Galvanized-Pipe-Corrosion.jpg`,
  blog_wiring:        `${BASE}/Aluminum-Wiring-Risk.jpg`,

  // Deck post specific
  blog_deck_framing:  `${BASE}/Framing-and-Bench-Layout-Stage.jpg`,
  blog_after_const:   `${BASE}/After-Construction_resized.jpg`,

  // Kitchen post specific
  blog_kitchen_reno:  `${BASE}/2022/10/kitchen-real-estate-interior-design-1940177.jpg`,

  // Car wash / commercial
  blog_carwash:       `${BASE}/Starlite-Express-Car-Wash-.jpg`,
  blog_gsr:           `${BASE}/GSR_project-1024x778.jpg`,

  // Lake Tahoe — additional (for blog)
  lt_glenbrook:       `${BASE}/2025/12/01-619-Lakeview-Dr-Glenbrook-NV-89413-1-of-37-600x403.webp`,
  lt_16:              `${BASE}/2025/12/16-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-16-of-16-600x403.webp`,
} as const
