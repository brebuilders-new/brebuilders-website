// lib/site-data.ts
// Single source of truth for all BRE Builders content.
// All values VERIFIED and CONFIRMED — April 2026.
// DO NOT modify without checking BRE_MASTER_CONTENT_STRATEGY.md

export const SITE = {
  name: 'Blue Reef Builders',
  legalName: 'Blue Reef Enterprises, LLC',
  tagline: 'Licensed General Contractor Since 1989',
  phone: '(775) 391-4517',
  phoneHref: 'tel:7753914517',
  email: 'brebuilders@gmail.com',
  emailSteve: 'steve@brebuilders.com',
  emailChris: 'chris@brebuilders.com',
  emailSean: 'sean@brebuilders.com',
  emailDev: 'ifyougetlockedout@protonmail.com', // DEV/TEST ONLY
  address: '2600 Mill St #400, Reno, NV 89502',
  addressStreet: '2600 Mill St #400',
  addressCity: 'Reno',
  addressState: 'NV',
  addressZip: '89502',
  nvLicense: '0085999',    // ✅ VERIFIED — Nevada
  caLicense: '1093798',    // ✅ VERIFIED FROM LIVE WP SITE — appears in homepage + about page source
  founded: '1989',
  experience: '35+',
  url: 'https://brebuilders.com',
  social: {
    facebook: 'https://www.facebook.com/BlueReefBuilds/',
    linkedin: 'https://www.linkedin.com/in/steven-rosenthal-94223b15',
    yelp: 'https://www.yelp.com/biz/blue-reef-enterprises-reno',
    nevadaBuilders: 'https://web.nevadabuilders.org/Concrete/BLUE-REEF-ENTERPRISES,-LLC-9089',
  },
  youtubeProject: 'https://www.youtube.com/watch?v=6oTurM7gESE',
} as const

// Email routing helper — uses dev email in non-production
export function getEmailRouting() {
  const isDev = process.env.NODE_ENV !== 'production'
  return {
    to: isDev ? SITE.emailDev : SITE.email,
    cc: isDev ? [] : [SITE.emailSteve, SITE.emailChris, SITE.emailSean],
    replyTo: SITE.email,
  }
}

export const SERVICE_AREAS = [
  { name: 'Reno', state: 'NV', slug: 'reno', license: 'NV' },
  { name: 'Sparks', state: 'NV', slug: 'sparks', license: 'NV' },
  { name: 'Lake Tahoe', state: 'NV', slug: 'lake-tahoe', license: 'NV' },
  { name: 'Carson City', state: 'NV', slug: 'carson-city', license: 'NV' },
  { name: 'Truckee', state: 'CA', slug: 'truckee', license: 'CA' },
  { name: 'Graeagle', state: 'CA', slug: 'graeagle', license: 'CA' },
  { name: 'Northern California', state: 'CA', slug: 'northern-california', license: 'CA' },
  { name: 'Carson Valley', state: 'NV', slug: 'carson-valley', license: 'NV' },
] as const

export const TESTIMONIALS = [
  {
    name: 'Matt',
    location: 'Rocklin, CA',
    text: 'I have worked with Steve for years. Always able to work with my budget and deliver beyond expectations. My go-to local expert.',
  },
  {
    name: 'Jenn',
    location: 'Sacramento, CA',
    text: 'The team was quick to respond to my request. Hard to find reliable people and I trust them.',
  },
  {
    name: 'Stephanie',
    location: 'Reno, NV',
    text: "The team at Blue Reef Builders exceeds my expectations every time I have used them. I have had their team work on several of my projects and they have always met their stated deadlines and come in at bid. I continue to use them for large and small projects and recommend them whenever I can.",
  },
  {
    name: 'Bill',
    location: 'Sparks, NV',
    text: 'Steve and Chris and the whole team at BRE Builders have been a joy to work with. I can always count on them to get the job done and the results have been fabulous!',
  },
  {
    name: 'Austin',
    location: 'Reno, NV',
    text: "I am so glad that I found these guys, their team was able to meet all of my needs! Concrete, new deck, kitchen remodel, electrical and even landscaping! What a relief it was to find one company that could handle all of my needs under one roof. Highly recommend!",
  },
  {
    name: 'Reggie',
    location: 'Modesto, CA',
    text: "Steve and his team at Blue Reef are jacks of all trades and licensed in both Nevada and California which has been great for me as I have several investment properties in both states. It's the company to call if you have friends or family in Reno/Tahoe or the other side of the border in California.",
  },
] as const

export const SERVICES = [
  {
    slug: 'adu',
    name: 'ADU Construction',
    shortName: 'ADUs',
    icon: '🏡',
    tagline: 'Smart, Stylish ADUs Built for Flexibility and Value',
    description: 'Licensed ADU contractors serving Reno, Sparks, and Lake Tahoe. Build 400–1200 sq ft accessory dwelling units with full permit handling. 35+ years experience. Free quote in 24 hours.',
    priceRange: '$75K–$300K',
    priceNote: '$175/sqft and up',
    seoTitle: 'ADU Builders Reno NV | $75K–$300K Complete Builds | BRE Builders',
    metaDescription: 'BRE Builders provides ADU construction in Reno, NV. Licensed NV #0085999. $75K–$300K complete builds. Permit-ready plans. Free quote in 24 hours.',
    isHighPriority: true,
  },
  {
    slug: 'repairs',
    name: 'Structural Repairs',
    shortName: 'Repairs',
    icon: '🔧',
    tagline: 'Structural and finish repairs done right and built to last.',
    description: 'Foundation repair, dry rot, water intrusion, framing. The structural repair specialists of Northern Nevada.',
    seoTitle: 'Structural Repairs Reno NV | Foundation Repair | BRE Builders',
    metaDescription: 'Structural repairs in Reno, NV — foundation repair, water intrusion, dry rot, framing. Licensed NV #0085999. Free inspection request.',
    isHighPriority: true,
  },
  {
    slug: 'additions',
    name: 'Home Additions',
    shortName: 'Additions',
    icon: '➕',
    tagline: 'Add square footage to your home with expertly crafted room expansions.',
    description: 'Room additions, second stories, garage expansions. Add space without moving.',
    seoTitle: 'Home Additions Reno NV | Room & Garage Additions | BRE Builders',
    metaDescription: 'Home additions in Reno, NV — room additions, garage expansions, second stories. Licensed GC since 1989. Free estimates. NV #0085999.',
    isHighPriority: true, // 19,319 impressions, 0.11% CTR — biggest CTR fix
  },
  {
    slug: 'kitchen-bath',
    name: 'Kitchen & Bath',
    shortName: 'Kitchen & Bath',
    icon: '🍳',
    tagline: 'Renovate your kitchen or bathroom with high-quality finishes and modern functionality.',
    description: 'High-quality finishes, modern functionality. Licensed remodeling contractors serving all of Northern Nevada.',
    seoTitle: 'Kitchen & Bath Remodel Reno NV | Licensed Contractor | BRE Builders',
    metaDescription: 'Kitchen and bathroom remodeling in Reno, NV. High-quality finishes, modern layouts. Licensed NV #0085999. Free estimates.',
    isHighPriority: true, // 2,198 impressions, 0.05% CTR — broken
  },
  {
    slug: 'new-home',
    name: 'Custom Home Building',
    shortName: 'New Home',
    icon: '🏠',
    tagline: 'Custom-built homes crafted from concept to completion with personalized design and expert project management.',
    description: 'Ground-up custom builds from concept to key. In-house design-build in Nevada and California.',
    seoTitle: 'Custom Home Builder Reno NV | New Home Construction | BRE Builders',
    metaDescription: 'Custom home building in Reno, NV and Northern California. In-house design-build. Licensed NV #0085999 CA #1093798. Free consultations.',
  },
  {
    slug: 'decks',
    name: 'Decks',
    shortName: 'Decks',
    icon: '🪵',
    tagline: 'Outdoor decks built for beauty, durability, and relaxation.',
    description: 'Outdoor decks built for beauty, durability, and relaxation. New builds and structural repairs.',
    seoTitle: 'Deck Builder Reno NV | Deck Repair Lake Tahoe | BRE Builders',
    metaDescription: 'Deck construction and repair in Reno, Sparks & Lake Tahoe. New builds and structural restoration. Licensed NV #0085999. Free estimates.',
  },
  {
    slug: 'hauling',
    name: 'Hauling & Removal',
    shortName: 'Hauling',
    icon: '🚛',
    tagline: 'Efficient job site cleanup and debris removal services.',
    description: 'Construction debris cleanup, yard waste removal, appliance hauling, full property cleanouts.',
    seoTitle: 'Hauling & Demolition Reno NV | Same-Day Debris Removal | BRE Builders',
    metaDescription: 'Hauling and demolition services in Reno, NV. Construction debris, yard waste, appliance removal. Same-day service. Licensed NV #0085999.',
    isHighPriority: true, // 2,482 impressions, 0.04% CTR — broken
  },
  {
    slug: 'lofts-condos',
    name: 'Lofts & Condo Remodels',
    shortName: 'Lofts & Condos',
    icon: '🏙️',
    tagline: 'Transform compact spaces with modern upgrades for urban living.',
    description: 'Loft conversions and condo renovations with modern upgrades and space efficiency.',
    seoTitle: 'Loft & Condo Remodel Reno NV | BRE Builders',
    metaDescription: 'Loft and condo remodeling in Reno, NV. Modern upgrades for urban living spaces. Licensed NV #0085999. Free estimates.',
  },
  {
    slug: 'commercial',
    name: 'Commercial Construction',
    shortName: 'Commercial',
    icon: '🏢',
    tagline: 'High-function commercial spaces tailored for business growth and operational excellence.',
    description: 'Tenant improvements, retail buildouts, offices, warehouses, and metal buildings.',
    seoTitle: 'Commercial Contractor Reno NV | Tenant Improvements | BRE Builders',
    metaDescription: 'Commercial construction in Reno, NV — tenant improvements, office buildouts, warehouses. Licensed NV #0085999 CA #1093798. Free estimates.',
  },
  {
    slug: 'retail',
    name: 'Retail Construction',
    shortName: 'Retail',
    icon: '🏪',
    tagline: 'Design and build customer-focused retail environments that drive engagement.',
    description: 'Customer-focused retail buildouts and tenant improvements.',
    seoTitle: 'Retail Build-Out Reno NV | Tenant Improvements | BRE Builders',
    metaDescription: 'Retail construction and tenant improvements in Reno, NV. Licensed NV #0085999. Free estimates. BRE Builders.',
  },
  {
    slug: 'office',
    name: 'Office Construction',
    shortName: 'Office',
    icon: '🖥️',
    tagline: 'Modern office spaces that balance style, productivity, and flexibility.',
    description: 'Office buildouts and renovations that balance aesthetics with function.',
    seoTitle: 'Office Construction Reno NV | Office Buildout | BRE Builders',
    metaDescription: 'Office construction and tenant improvements in Reno, NV. Modern, functional spaces. Licensed NV #0085999. Free estimates.',
  },
  {
    slug: 'warehouse',
    name: 'Warehouse & Metal Buildings',
    shortName: 'Warehouse',
    icon: '🏭',
    tagline: 'Durable, scalable structures for industrial, storage, or custom commercial needs.',
    description: 'Custom warehouse and metal building construction — scalable, code-compliant, cost-effective.',
    seoTitle: 'Warehouse Construction Reno NV | Metal Buildings | BRE Builders',
    metaDescription: 'Warehouse and metal building construction in Reno, NV. Custom, scalable, code-compliant. Licensed NV #0085999. Free estimates.',
  },
  {
    slug: 'concrete',
    name: 'Concrete',
    shortName: 'Concrete',
    icon: '🏗️',
    tagline: 'Expert concrete work for foundations, walkways, driveways, and more.',
    description: 'Foundations, slabs, walkways, driveways, and commercial concrete work.',
    seoTitle: 'Concrete Contractor Reno NV | Concrete Slab & Foundation | BRE Builders',
    metaDescription: 'Concrete contractor in Reno, NV. Foundations, slabs, driveways, commercial concrete. Licensed NV #0085999. Free estimates.',
  },
] as const

export const PROJECTS = [
  {
    slug: 'lake-tahoe-interior-renovation',
    title: 'Lake Tahoe Interior Renovation Project',
    type: 'Full Home Renovation',
    location: 'Zephyr Cove, Lake Tahoe, NV',
    address: 'Zephyr Cove, Lake Tahoe, NV',
    description: 'A complete interior and exterior transformation combining structural upgrades, modern finishes, and long-term durability — executed by BRE Builders.',
    longDescription: 'This full-home renovation showcases coordinated kitchen and bath remodeling, interior structural improvements, upgraded living spaces, and exterior deck work — delivered with precision planning and code-compliant construction.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2025/12/16-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-16-of-16-600x403.webp',
    thumbnailAlt: 'Lake Tahoe Full Home Renovation Completed Exterior BRE Builders',
    youtubeUrl: 'https://www.youtube.com/watch?v=6oTurM7gESE',
    imageCount: 16,
    categories: ['renovation', 'residential'],
    featured: true,
  },
  {
    slug: 'ripon-estate',
    title: 'Luxury Custom Home – Ripon CA',
    type: 'Custom Home',
    location: 'Ripon, CA',
    description: 'A ground-up luxury estate in Ripon, California — blending classical European architecture with modern amenities. Every column, arch, and interior element was designed, engineered, and built by our licensed in-house team.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/e228c329-e139-4d18-869f-29659b27e05d.jpg',
    thumbnailAlt: 'Luxury Custom Home Ripon CA Classical Architecture Blue Reef Builders',
    imageCount: 5,
    categories: ['custom', 'residential'],
    featured: true,
  },
  {
    slug: 'rio-tinto-renovation',
    title: 'Rio Tinto Home Renovation',
    type: 'Residential Renovation',
    location: 'Rio Tinto, NV',
    description: 'Full-scale residential renovation covering exterior housewrap and siding, new window installations, interior drywall finishing, and custom bathroom tiling.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Interior-Living-Room-Drywall-Prep---Rio-Tinto-600x403.jpg',
    thumbnailAlt: 'Rio Tinto Home Renovation Interior Living Room Drywall Prep Reno',
    imageCount: 1,
    categories: ['renovation', 'residential'],
  },
  {
    slug: 'quaking-aspen-repair',
    title: 'Quaking Aspen Structural Repair',
    type: 'Structural Repair',
    location: 'Reno, NV',
    description: 'Blue Reef Builders repaired severe structural issues at Quaking Aspen in Reno — framing, foundation, and home stability, all handled by local licensed professionals.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Extensive-Rot-Exposure-Along-Wall-Panel-600x403.jpg',
    thumbnailAlt: 'Damaged Wood Framing Dry Rot Exposure After Siding Removal Reno NV',
    imageCount: 1,
    categories: ['repair', 'structural'],
  },
  {
    slug: 'lake-tahoe-deck-repair',
    title: 'Lake Tahoe Deck Balcony Structural Repair',
    type: 'Deck Repair',
    location: 'Lake Tahoe, NV',
    description: 'Blue Reef Builders restored structural safety to this Lake Tahoe balcony using steel angle brackets anchored to the CMU wall, with complete deck reinforcement.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Lake-Tahoe-Deck-Reinforcement---Steel-Angle-Bracket-System-600x403.jpg',
    thumbnailAlt: 'Steel Angle Brackets Securing Exterior Wood Deck to CMU Wall Lake Tahoe',
    imageCount: 1,
    categories: ['deck', 'repair'],
  },
  {
    slug: 'mine-shaft-framing',
    title: 'Mine Shaft Framing & Shed Construction',
    type: 'Custom Construction',
    location: 'Reno, NV',
    description: 'Blue Reef Builders constructed a stable framed structure over a mine shaft with precision engineering, safety compliance, and custom openings.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Close-Up-of-Structural-Wall-with-Custom-Openings-600x403.jpg',
    thumbnailAlt: 'Mine Shaft Framing Shed Construction Reno NV Structural Wall Custom Openings',
    imageCount: 1,
    categories: ['custom', 'commercial'],
  },
  {
    slug: 'car-wash-reno',
    title: 'Car Wash Construction Reno NV',
    type: 'Commercial / Concrete',
    location: 'Reno, NV',
    description: 'BRE Builders completed commercial concrete slab and foundation work for a car wash in Reno, NV — expert site prep, utility integration, and durable structural execution.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Commercial-Concrete-Slab-Pour-with-Utility-Access---Reno-NV-600x403.jpg',
    thumbnailAlt: 'Commercial Concrete Slab Pour with Utility Access Car Wash Reno NV',
    imageCount: 1,
    categories: ['commercial', 'concrete'],
  },
  {
    slug: 'arun-deck-repair',
    title: 'Arun Hillside Deck Repair – Lake Tahoe',
    type: 'Deck Repair',
    location: 'Lake Tahoe, NV',
    description: 'Precision hillside deck repair with reinforced structural beams, replaced railings, and restored platform — challenging slope terrain required specialized approach.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/uploads/Arun-Deck-Repair-–-Reinforced-Support-Beams-and-Elevated-Framing-600x403.jpg',
    thumbnailAlt: 'Arun Hillside Deck Repair Reinforced Support Beams Lake Tahoe NV',
    imageCount: 1,
    categories: ['deck', 'repair'],
  },
  {
    slug: 'charolettes-deck',
    title: "Charolette's Deck",
    type: 'Deck Build',
    location: 'Sparks, NV',
    description: 'Custom deck build with smooth sealed surface finish for a Sparks, NV homeowner.',
    thumbnail: 'https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/Charolettes-Finished-Deck---Smooth-Sealed-Surface-scaled-600x403.jpg',
    thumbnailAlt: 'Charolette Deck Sparks NV Custom Deck Build Smooth Sealed Surface Finish',
    imageCount: 1,
    categories: ['deck'],
  },
] as const

export const FAQS = [
  { q: 'Who is BRE Builders?', a: 'BRE Builders is a licensed, locally owned and operated home improvement contractor serving Reno, Sparks, Carson City, and surrounding areas. We specialize in structural repairs, custom remodeling, ADUs, deck restoration, waterproofing, and more. We deliver reliable, code-compliant, and long-lasting solutions.' },
  { q: 'What areas do you serve?', a: 'We proudly serve Reno, NV; Sparks, NV; Carson City, NV; Lake Tahoe & Truckee, CA; and Carson Valley & surrounding communities. Contact us to discuss service outside these areas.' },
  { q: 'What services do you provide?', a: 'We offer structural repairs & home stabilization, deck safety inspections & full rebuilds, waterproofing & custom railings, kitchen & bathroom remodels, new home additions & ADU construction, concrete slab work and framing, and office & commercial renovations.' },
  { q: 'Do you handle permit and code compliance?', a: 'Yes. BRE Builders manages the entire permitting process and ensures all projects meet local Nevada and California building codes. We never cut corners.' },
  { q: 'Do you offer free estimates?', a: 'Absolutely. We provide free, no-obligation estimates after a site visit. Get started by filling out our project form or calling us directly.' },
  { q: 'How soon can you start my project?', a: 'Project timelines vary based on season and project scope. Once a contract is signed and permits (if any) are secured, we typically begin within 1–2 weeks.' },
  { q: 'How long will my project take?', a: 'Minor repairs: 1–3 days. Deck rebuilds: 3–7 days. Kitchen remodels: 2–3 weeks. ADU builds: 1.5–3 months. We provide detailed timelines during the quote process.' },
  { q: 'Will you help me stay within my budget?', a: 'Yes. We offer tiered pricing options and value-engineered alternatives to make your project affordable without compromising quality.' },
  { q: 'What kind of materials do you use?', a: 'We use high-grade, weather-tested, and code-approved materials, including Trex decking, pressure-treated lumber, composite siding, and premium waterproofing membranes. All material choices are discussed with the client.' },
  { q: 'Do your projects come with a warranty?', a: 'Yes. We offer a 1-year workmanship warranty on all projects and pass on manufacturer warranties where applicable.' },
  { q: 'Are you licensed and insured?', a: 'Yes. BRE Builders is fully licensed, bonded, and insured in Nevada and California. Nevada License #0085999. California License #1093798.' },
  { q: 'Can you provide references or photos of past work?', a: 'Of course. Visit our portfolio or contact us for direct client referrals.' },
  { q: 'What payment methods do you accept?', a: 'We accept checks, bank transfers, and credit card payments. A deposit is required upon contract signing, with milestone-based payments throughout.' },
  { q: 'Do you offer financing options?', a: 'We are working with third-party lenders to provide flexible home improvement financing. Ask about current availability when requesting your quote.' },
  { q: 'Can I legally build an ADU in Reno or Carson City?', a: "Yes — but there are zoning, lot-size, and occupancy rules. We help homeowners navigate all ADU permits and designs based on your property's zoning laws." },
] as const

// Lake Tahoe 16-image gallery — 695 Lakeview Blvd, Zephyr Cove, NV 89448
export const LT_GALLERY = Array.from({ length: 16 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  const suffix = i === 15 ? '-1' : ''
  const captions = ['Full Home Renovation Exterior','Exterior Deck and Structural Work','Deck Railing and Walkway','Interior Living Space Renovation','Interior Finish Work','Loft and Upper-Level Renovation','Custom Interior Stair Construction','Bathroom Renovation','Interior Room Renovation','Bathroom Installation Phase','Interior Staircase View','Upper-Level Interior Renovation','Loft Area Renovation','Exterior Deck Renovation','Deck Walkway Detail','Completed Exterior Renovation']
  const alts = ['Full Home Renovation Exterior Zephyr Cove, Lake Tahoe Lake Tahoe','Exterior Deck and Structural Renovation Lake Tahoe Zephyr Cove','Deck Railing and Walkway Renovation Lake Tahoe NV','Interior Living Space Renovation Lake Tahoe Home','Interior Finish Work and Updated Materials Lake Tahoe Renovation','Loft and Upper Level Renovation Lake Tahoe Home','Custom Interior Stair Construction Lake Tahoe Full Renovation','Bathroom Renovation with Updated Fixtures Lake Tahoe','Interior Room Renovation Updated Finishes Lake Tahoe Home','Bathroom Installation Vanity and Tub Lake Tahoe Renovation','Interior Staircase Connecting Multiple Renovated Levels Lake Tahoe','Upper Level Interior Renovation Skylights and Railing Lake Tahoe','Loft Area Renovation with Natural Light Open Layout Lake Tahoe','Exterior Deck Renovation Updated Materials and Railing Lake Tahoe','Deck Walkway Detail Railing and Surface Upgrades Lake Tahoe','Completed Full Home Renovation Exterior Lake Tahoe BRE Builders']
  return {
    url: `https://cdn.jsdelivr.net/gh/brebuilders-new/bre-assets@main/2025/12/${n}-695-Lakeview-Blvd-Zephyr-Cove-NV-89448-${i + 1}-of-16${suffix}-1024x684.webp`,
    alt: alts[i],
    title: `${captions[i]} – Lake Tahoe Full Home Renovation | BRE Builders`,
    caption: captions[i],
  }
})
