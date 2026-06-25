const PROJECTS = [
  // ─── RESTAURANT DESIGN ──────────────────────────────────────────────────────
  {
    slug: 'masons-dumpling-shop',
    title: "Mason's Dumpling Shop",
    location: 'Denver, CO',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/masons-dumplings/Masons_Dumplings_Cover.jpg',
    scope: 'PLACEHOLDER',
    description: 'PLACEHOLDER',
    gallery: [
      'images/masons-dumplings/Masons_Dumplings_Gallery1.jpg',
      'images/masons-dumplings/Masons_Dumplings_Gallery2.jpg',
      'images/masons-dumplings/Masons_Dumplings_Gallery3.jpg',
      'images/masons-dumplings/Masons_Dumplings_Gallery4.jpg',
      'images/masons-dumplings/Masons_Dumplings_Gallery5.jpg',
    ]
  },
  {
    slug: 'oddfellows-cafe',
    title: "Oddfellow's Cafe & Coffee Bar",
    location: 'Dallas, TX — Bishop Arts District',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/oddfellows-cafe/Oddfellows_Cafe_Cover.jpg',
    scope: 'Concept design, documentation, City of Dallas historic district approval (Certificate of Appropriateness)',
    description: "A worn Italian restaurant in the Bishop Arts District, renovated into one of Dallas's most-loved brunch spots. The subdivided plan was opened into a single social floor, anchored by a corner bar with operable awning windows that open the room directly to the sidewalk. Reclaimed wood soffits define seating zones and house lighting throughout. The project included full historic review with the City of Dallas, earning a Certificate of Appropriateness for the Bishop Arts preservation district.",
    gallery: [
      'images/oddfellows-cafe/Oddfellows_Cafe_gallery1.png',
      'images/oddfellows-cafe/Oddfellows_Cafe_gallery_2.jpg',
      'images/oddfellows-cafe/Oddfellows_Cafe_gallery_3.png',
      'images/oddfellows-cafe/ODDFELLOWS_INT_BAR_MODEL_IMAGE.png',
      'images/oddfellows-cafe/ODDFELLOWS_INTERIOR_AXON_COLOR.png',
      'images/oddfellows-cafe/ODDFELLOWS_AXON.png',
      'images/oddfellows-cafe/ODDFELLOWS_EXT_AFTER.png',
      'images/oddfellows-cafe/ODDFELLOWS_EXT_BEFORE.png',
    ]
  },
  {
    slug: 'architype-distillery',
    title: 'Architype Distillery',
    location: 'Denver, CO',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/architype-distillery/Architype_cover.jpg',
    scope: 'PLACEHOLDER',
    description: 'PLACEHOLDER',
    gallery: [
      'images/architype-distillery/Architype_Gallery1.jpg',
      'images/architype-distillery/Architype_Gallery2.jpg',
      'images/architype-distillery/Archetype-4.jpg',
      'images/architype-distillery/Architype_gallery_4.jpg',
      'images/architype-distillery/Architype_Gallery_5.jpg',
      'images/architype-distillery/Architype_gallery6.jpg',
      'images/architype-distillery/Archetype_gallery_3.jpg',
    ]
  },
  {
    slug: 'enos-pizza',
    title: "Eno's Pizza Tavern",
    location: 'Dallas, TX — Bishop Arts District',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/enos-pizza/Enos_cover.jpg',
    scope: 'Spatial planning, architectural element definition, material selection, construction and shop drawings, reflected ceiling planning',
    description: "The second floor of Eno's Pizza Tavern had spent its life as office space. This renovation reclaimed it as a dining and bar environment with a character deliberately distinct from the main floor below — more casual, more layered, more worn-in. Inspiration came from the traditional beer halls of Germany and the honest way old buildings accumulate character over time: spaces that feel inhabited rather than designed.",
    gallery: [
      'images/enos-pizza/Enos_Beer_Hall_1.jpg',
      'images/enos-pizza/Enos_Beer_Hall_2.jpg',
      'images/enos-pizza/Enos_Beer_Hall_3.jpg',
    ]
  },
  {
    slug: 'wild-detectives',
    title: 'The Wild Detectives',
    location: 'Dallas, TX — Bishop Arts District',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/wild-detectives/Wild_Detectives_Cover.jpg',
    scope: 'Spatial planning, architectural element definition, material selection, construction and shop drawings',
    description: "A 1930s Bishop Arts bungalow converted into one of Dallas's most beloved third spaces — part bookstore, part café, part cultural venue. The interior was gutted and reinforced with glulam beams, then clad in warm shiplap that gives the room the feeling of a cabin you don't want to leave. Retail and coffee exist as one continuous environment, designed to encourage staying rather than transacting.",
    gallery: [
      'images/wild-detectives/Wild_Detectives-gallery1.jpg',
      'images/wild-detectives/Wild_Detectives-gallery2.jpg',
      'images/wild-detectives/Wild_Detectives-Gallery_3.jpg',
      'images/wild-detectives/Wild_Detectives-Gallery4.jpg',
      'images/wild-detectives/Wild_Detectives-Gallery5.jpg',
      'images/wild-detectives/Wild_Detectives-Gallery7.png',
      'images/wild-detectives/Wild_Detectives-Gallery8.jpg',
    ]
  },
  {
    slug: 'zocalito',
    title: 'Zocalito',
    location: 'Denver, CO',
    category: 'restaurant',
    categoryLabel: 'Restaurant Design',
    cover: 'images/zocalito/Zocalito_Cover.png',
    scope: 'PLACEHOLDER',
    description: 'PLACEHOLDER',
    gallery: [
      'images/zocalito/Zocalito_Gallery_1.jpg',
      'images/zocalito/Zocalito_Gallery2.jpg',
      'images/zocalito/Zocalito_Gallery4.jpg',
      'images/zocalito/Zocalito_gallery_5.jpg',
      'images/zocalito/Zocalito_gallery6.jpg',
      'images/zocalito/Zocalito_gallery7.jpg',
      'images/zocalito/Zocalito_Gallery8.jpg',
      'images/zocalito/Zocalito_Gallery9.jpg',
      'images/zocalito/Zocalito_Gallery10.jpg',
    ]
  },

  // ─── RESIDENTIAL DESIGN ─────────────────────────────────────────────────────
  {
    slug: 'cherry-hills-residence',
    title: 'Cherry Hills Residence',
    location: 'Englewood, CO',
    category: 'residential',
    categoryLabel: 'Residential Design',
    cover: 'images/cherry-hills/Cherry_Hills_Residence_Cover.jpg',
    scope: 'Project Designer and Project Manager — Architectural Workshop. Collaboration with Principal Brett Linscott. Concept through construction administration. AOR: Mark Bowers.',
    description: "A 1970s ranch house cleared to the foundation and rebuilt as a 7,660 SF modern farmhouse. The design builds on the site's existing painted brick as an anchoring material, layering in board-and-batten siding, reclaimed wood accents, and a standing seam metal roof to articulate a contemporary farmhouse language with material depth and texture. Large-format glazing on the primary gable and a covered back patio establish a strong indoor-outdoor connection. Interior architectural elements including the stair design with leather tread inserts and custom railing were developed in-house.",
    gallery: [
      'images/cherry-hills/Cherry-Hills-2.jpg',
      'images/cherry-hills/Cherry-Hills-6.jpg',
      'images/cherry-hills/Cherry-Hills-7.jpg',
      'images/cherry-hills/Cherry-Hills-8.jpg',
      'images/cherry-hills/Cherry-Hills-9.jpg',
      'images/cherry-hills/Cherry-Hills-10-v2020.jpg',
      'images/cherry-hills/Cherry-Hills-11-v2020.jpg',
    ]
  },
  {
    slug: 'julian-residence',
    title: 'Julian Residence',
    location: 'Denver, CO',
    category: 'residential',
    categoryLabel: 'Residential Design',
    cover: 'images/julian-residence/Julian_Residence_Cover.JPG',
    scope: 'Designer and General Contractor',
    description: "A 1949 West Denver bungalow taken down to the studs and rebuilt from the inside out. The wall separating the kitchen and living room was removed, creating an open sight line that layers from the kitchen island through the living room and out to the backyard — making a small house feel considerably larger than its footprint. Finishes, cabinetry, and surfaces were selected to work as a cohesive palette rather than room-by-room decisions. All painting, drywall, and finish work was completed by hand.",
    gallery: [
      'images/julian-residence/Julain_Residence_gallery1.JPG',
      'images/julian-residence/Julain_Residence_gallery2.JPG',
      'images/julian-residence/Julain_Residence_gallery3.JPG',
      'images/julian-residence/Julain_Residence_gallery4.JPG',
      'images/julian-residence/Julain_Residence_gallery5.JPG',
      'images/julian-residence/Julain_Residence_gallery6.JPG',
    ]
  },
  {
    slug: 'shook-residence',
    title: 'Shook Residence',
    location: 'Dallas, TX — Lakewood',
    category: 'residential',
    categoryLabel: 'Residential Design',
    cover: 'images/shook-residence/Shook_Residence_Cover.jpg',
    scope: 'Concept design through construction documents, variance process, city re-platting',
    description: "A 1970s single-story ranch house near White Rock Lake, doubled in size and reorganized around a single idea: make the family want to be in the same room. Generous shared spaces occupy the entire ground floor; bedrooms are intentionally compact above. The triangular corner lot required a full variance and re-platting process — over a year of city engagement — to recover buildable area and preserve a mature tree. The exterior shifted from French country to modern farmhouse during construction, landing on something cleaner without changing the plan underneath.",
    gallery: [
      'images/shook-residence/Shook_Residence_Gallery1.jpg',
      'images/shook-residence/Shook_Residence_Gallery2.jpg',
    ]
  },

  // ─── RENDERING & CONCEPT DESIGN ─────────────────────────────────────────────
  {
    slug: 'alta-flat-irons',
    title: 'Alta Flat Irons Apartments',
    location: 'Broomfield, CO',
    category: 'rendering',
    categoryLabel: 'Rendering & Concept Design',
    cover: 'images/alta-flat-irons/alta_cover.jpg',
    scope: 'Senior Project Designer and Renderer',
    description: 'PLACEHOLDER',
    gallery: [
      'images/alta-flat-irons/alta_portfolio_page1.jpg',
      'images/alta-flat-irons/alta_portfolio_page2.jpg',
    ]
  },
  {
    slug: 'maa-milepost',
    title: 'MAA Mile Post 35',
    location: 'Denver, CO',
    category: 'rendering',
    categoryLabel: 'Rendering & Concept Design',
    cover: 'images/maa-milepost/maa_milepost_cover.jpg',
    scope: 'Senior Project Designer and Renderer',
    description: 'PLACEHOLDER',
    gallery: [
      'images/maa-milepost/maa_milepost_page1.jpg',
      'images/maa-milepost/maa_milepost_page2.jpg',
    ]
  },
  {
    slug: 'maa-panorama',
    title: 'MAA Panorama Apartments',
    location: 'Denver, CO',
    category: 'rendering',
    categoryLabel: 'Rendering & Concept Design',
    cover: 'images/maa-panorama/maa_panorama_cover.jpg',
    scope: 'Senior Project Designer and Renderer',
    description: 'PLACEHOLDER',
    gallery: [
      'images/maa-panorama/maa_panorama_page1.jpg',
      'images/maa-panorama/maa_panorama_page2.jpg',
    ]
  },
  {
    slug: 'winter-park',
    title: 'Winter Park Rendezvous Center',
    location: 'Winter Park, CO',
    category: 'rendering',
    categoryLabel: 'Rendering & Concept Design',
    cover: 'images/winter-park/winterpark_cover.jpg',
    scope: 'Project Designer and Renderer',
    description: 'PLACEHOLDER',
    gallery: [
      'images/winter-park/winterpark_page1.jpg',
      'images/winter-park/winterpark_page2.jpg',
    ]
  },

  // ─── PRODUCT DESIGN ─────────────────────────────────────────────────────────
  {
    slug: 'leatherwork',
    title: 'Leatherwork',
    location: 'Design International',
    category: 'product',
    categoryLabel: 'Product Design',
    cover: 'images/leatherwork/briefcase_cover.jpg',
    scope: 'Design and Fabrication',
    description: "A leatherworking practice spanning sixteen years, rooted in a practical need — a travel briefcase large enough for 12×18 drawing sets — and grown into a recurring discipline. Wallets, journals, and bags made from vegetable-tanned leather using saddle stitching and vinegaroon dyeing.",
    gallery: [
      'images/leatherwork/wallet1.jpg',
      'images/leatherwork/wallet2.jpg',
      'images/leatherwork/wallet3.jpg',
      'images/leatherwork/passport_wallet1.jpg',
      'images/leatherwork/passport_wallet2.jpg',
      'images/leatherwork/journal1.jpg',
      'images/leatherwork/journal2.jpg',
    ]
  },
];

// Ordered category groups for homepage display
const CATEGORY_ORDER = [
  { key: 'restaurant', label: 'Restaurant Design' },
  { key: 'residential', label: 'Residential Design' },
  { key: 'rendering', label: 'Rendering & Concept Design' },
  { key: 'product', label: 'Product Design' },
];
