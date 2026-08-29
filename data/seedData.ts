export interface ServicePackage {
  id: string
  title: string
  tier: 'founder' | 'team'
  category: 'muhurtham' | 'reception' | 'engagement' | 'haldi_sangeet' | 'complete_bridal' | 'groom_family'
  tagline: string
  description: string
  startingPrice: number
  duration: string
  badge?: string
  inclusions: string[]
  termsNote?: string
}

export interface PortfolioItem {
  id: string
  title: string
  brideName?: string
  category: 'muhurtham' | 'reception' | 'engagement' | 'haldi' | 'editorial'
  imageUrl: string
  location: string
  artistryDetails: string
  featured?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  specialization: string
  bio: string
  yearsExperience: number
  photoUrl: string
}

export interface Testimonial {
  id: string
  clientName: string
  eventType: string
  location: string
  quote: string
  rating: number
  photoUrl?: string
  featured: boolean
}

export const INITIAL_PACKAGES: ServicePackage[] = [
  // ── FOUNDER SIGNATURE PACKAGES ──
  {
    id: 'founder-muhurtham',
    title: 'The Sacred Muhurtham — Signature Artistry',
    tier: 'founder',
    category: 'muhurtham',
    tagline: 'Traditional South Indian bridal perfection for early morning muhurthams & rituals.',
    description: 'Personal artistry by Lead Master Artist. Customized skin preparation, sweat-resistant ultra-longwear HD complexion, traditional gold & bronze eye makeup, customized lashes, signature jasmine-entwined floral braid architecture, and couture Kanjeevaram silk saree draping with box pleating.',
    startingPrice: 45000,
    duration: '3.5 - 4.0 Hours',
    badge: 'Founder Signature',
    inclusions: [
      'Personal artistry by Lead Master Artist',
      'High-Definition waterproof & sweat-resistant bridal complexion',
      'Customized premium silk lashes & eye enhancement',
      'Traditional jasmine poola jada / floral architectural hair styling',
      'Signature Kanjeevaram saree draping & precise box-pleating',
      'Jewellery placement & secure pinning',
      'Complimentary bridal touch-up kit for the mandapam',
    ],
    termsNote: 'Early morning call-time (from 3:00 AM) included. Travel outside city billed at actuals.',
  },
  {
    id: 'founder-reception',
    title: 'High-Glam Reception & Sangeet',
    tier: 'founder',
    category: 'reception',
    tagline: 'Couture evening glamour with glass-skin airbrush radiance and modern red-carpet styling.',
    description: 'Designed for grandeur under stage lighting. Full airbrush flawless base, soft smokey or shimmer lids, sculpted contouring, luxury velvet lips, and contemporary hair design (Hollywood waves, textured romantic updos, or sleek modern styles).',
    startingPrice: 40000,
    duration: '3.0 - 3.5 Hours',
    badge: 'Red Carpet Finish',
    inclusions: [
      'Flawless Airbrush / silicone-based foundation',
      'Custom high-definition shimmer & smokey eye artistry',
      '3D luxury lash application',
      'Contemporary textured updo or glamorous Hollywood waves',
      'Lehenga dupatta draping or contemporary reception saree styling',
      'Full body glow & décolletage illumination',
      'On-stage longevity guarantee (up to 14 hours)',
    ],
    termsNote: 'Touch-up assistant available on request for on-stage ceremonies.',
  },
  {
    id: 'founder-complete-bridal',
    title: 'The Grand Tamil Bridal Suite (2 or 3 Events)',
    tier: 'founder',
    category: 'complete_bridal',
    tagline: 'Our ultimate end-to-end luxury journey covering Muhurtham, Reception & Engagement.',
    description: 'The definitive bridal experience. Master Artist personally curates and executes distinct, non-repetitive aesthetic transformations for each ceremonial event, perfectly coordinated with your jewellery and outfits.',
    startingPrice: 115000,
    duration: 'Multi-Event Experience',
    badge: 'Most Requested Suite',
    inclusions: [
      'Comprehensive artistry by Lead Master Artist for ceremonial functions',
      'Pre-wedding bespoke bridal consultation & look-board mapping',
      'Tailored Airbrush & Ultra-HD luxury formulations',
      'Distinct hairstyles: Traditional braid, Textured updo, and Hollywood waves',
      'Precision saree & lehenga draping for all events',
      'Complimentary Groom grooming touch-up on Reception evening',
      'Dedicated styling assistant attending throughout the rituals',
    ],
    termsNote: 'Includes priority date booking and destination travel readiness.',
  },
  {
    id: 'founder-engagement',
    title: 'Nichayathartham (Engagement) Elegance',
    tier: 'founder',
    category: 'engagement',
    tagline: 'Fresh, luminous skin with romantic soft styling for rings & auspicious beginnings.',
    description: 'Subtle sophistication. Soft-focus radiant skin, glowing tones, delicately pinned floral half-updos or soft curls, and traditional silk or organza saree styling.',
    startingPrice: 35000,
    duration: '3.0 Hours',
    inclusions: [
      'Signature dewy HD skin with featherlight texture',
      'Custom soft-glam eyeshadow & individual cluster lashes',
      'Floral half-updo, romantic textured braid, or soft curls',
      'Saree or half-saree / lehenga draping with styling',
      'Jewellery securing & finishing spray',
    ],
  },

  // ── SENIOR STUDIO TEAM PACKAGES ──
  {
    id: 'team-muhurtham',
    title: 'Senior Artist — Sacred Muhurtham',
    tier: 'team',
    category: 'muhurtham',
    tagline: 'Delivering flawless traditional South Indian bridal styling.',
    description: 'Executed by our certified Senior Makeup Artist and Hair Stylist team using our studio’s signature luxury product kit.',
    startingPrice: 28000,
    duration: '3.0 - 3.5 Hours',
    badge: 'Atelier Value',
    inclusions: [
      'Full HD waterproof bridal makeup by Certified Senior Artist',
      'Premium false eyelashes & eye definition',
      'Traditional South Indian bridal braid with floral styling',
      'Kanjeevaram silk saree draping & pin-up',
      'Jewellery placement & tikka fixing',
    ],
    termsNote: 'Standard travel within city included.',
  },
  {
    id: 'team-reception',
    title: 'Senior Artist — Reception Glam',
    tier: 'team',
    category: 'reception',
    tagline: 'Luminous evening looks tailored for reception stages and celebrations.',
    description: 'Flawless longwear base, statement eye artistry, contemporary textured hairstyle, and lehenga/saree draping by senior atelier talent.',
    startingPrice: 25000,
    duration: '2.5 - 3.0 Hours',
    inclusions: [
      'Full HD long-wear complexion & contouring',
      'Dramatic or soft-glam eye makeup with lashes',
      'Modern hairstyle (curls, textured bun, or Hollywood waves)',
      'Lehenga or evening saree draping',
    ],
  },
  {
    id: 'team-family-guest',
    title: 'Bridal Party & Family Styling (Per Person)',
    tier: 'team',
    category: 'groom_family',
    tagline: 'Elevated styling for mothers, sisters, and bridesmaids.',
    description: 'Complete party makeup, hair styling (blowdry, curls, or traditional updo), and saree draping for the bridal party so the entire family looks cohesive and stunning.',
    startingPrice: 8500,
    duration: '1.5 Hours / Person',
    badge: 'Family Package',
    inclusions: [
      'HD party makeup suited for photography and stage',
      'Hairstyling of choice (traditional bun with flowers, curls, or braid)',
      'Silk saree, half-saree, or lehenga draping',
      'Minimum booking of 2 persons or alongside a bridal package',
    ],
  },
  {
    id: 'team-groom',
    title: 'Groom Luxury Grooming & Styling',
    tier: 'team',
    category: 'groom_family',
    tagline: 'Natural matte camera-ready skin and sharp hair styling for the groom.',
    description: 'Undetectable skin enhancement, shine reduction for camera flashes, beard grooming, and hair setting for traditional dhoti / sherwani looks.',
    startingPrice: 8000,
    duration: '45 Minutes',
    inclusions: [
      'Invisible matte HD skin prep & tone correction',
      'Beard line definition & taming',
      'Hair grooming and hold styling',
      'Veshti / Dhoti angavastram draping support',
    ],
  },
]

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'look-1',
    title: 'The Royal Crimson Muhurtham',
    brideName: 'Editorial Look I',
    category: 'muhurtham',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    location: 'Wedding Ceremony',
    artistryDetails: 'Crimson Kanjeevaram, antique gold temple jewellery, warm smoked bronze eyes, and fresh floral poola jada braid.',
    featured: true,
  },
  {
    id: 'look-2',
    title: 'Contemporary Glass-Skin Reception',
    brideName: 'Editorial Look II',
    category: 'reception',
    imageUrl: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85',
    location: 'Evening Reception',
    artistryDetails: 'Sculpted airbrush base, champagne shimmer lids, soft berry pout, and voluminous Hollywood waves.',
    featured: true,
  },
  {
    id: 'look-3',
    title: 'Pastel Organza Nichayathartham',
    brideName: 'Editorial Look III',
    category: 'engagement',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    location: 'Engagement Ceremony',
    artistryDetails: 'Soft peach monochromatic blush, fluttery lash clusters, and baby-breath floral accented soft curls.',
    featured: true,
  },
  {
    id: 'look-4',
    title: 'Sunlit Haldi & Floral Glow',
    brideName: 'Editorial Look IV',
    category: 'haldi',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
    location: 'Haldi Rituals',
    artistryDetails: 'Lightweight waterproof tint, radiant coral cheek glaze, and marigold-twined boho braid.',
    featured: true,
  },
  {
    id: 'look-5',
    title: 'Heritage Silk Editorial',
    brideName: 'Editorial Look V',
    category: 'editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
    location: 'Heritage Studio Session',
    artistryDetails: 'High-contrast winged eyeliner, matte rose lips, traditional jewellery, and ornate hair architecture.',
    featured: true,
  },
  {
    id: 'look-6',
    title: 'Emerald & Gold Evening Reception',
    brideName: 'Editorial Look VI',
    category: 'reception',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
    location: 'Cocktail & Reception',
    artistryDetails: 'Emerald-draped couture look, radiant bronze cheek highlights, and sleek architectural low bun.',
    featured: true,
  },
]

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Shwetha Mohan',
    role: 'Founder & Master Bridal Artist',
    specialization: 'High-Definition Bridal Complexion, Airbrush & Heritage South Indian Artistry',
    bio: 'With over 9 years of luxury wedding experience across South India and destination weddings, our Lead Artist has styled over 650+ brides. Trained in London and Mumbai, the signature aesthetic honors sacred Tamil bridal customs with modern editorial sophistication.',
    yearsExperience: 9,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'team-2',
    name: 'Senior Hair Stylist',
    role: 'Bridal Hair Architect',
    specialization: 'Traditional Poola Jada, Modern Textured Buns & Hollywood Waves',
    bio: 'Renowned for intricate floral braiding, weightless hair extensions integration, and structural updos that remain pristine through 14-hour wedding rituals.',
    yearsExperience: 7,
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'team-3',
    name: 'Senior Saree Stylist',
    role: 'Saree Draping & Styling Specialist',
    specialization: 'Kanjeevaram Box Pleating, Saree Pre-Draping & Precision Pleating',
    bio: 'An expert in authentic South Indian saree drapes, ensuring zero crease, effortless movement, and pinpoint pleat precision under heavy silk weight.',
    yearsExperience: 8,
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
  },
]

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Verified Bride S.',
    eventType: 'Muhurtham & Reception',
    location: 'Wedding Ceremony',
    quote: 'The team made me feel like royalty for my early morning Muhurtham. My skin looked so luminous in person and on the 4K video without looking caked or heavy. The saree pleating did not budge all day!',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 't-2',
    clientName: 'Verified Bride K.',
    eventType: 'Destination Wedding',
    location: 'Beach Resort Wedding',
    quote: 'Booking the Grand Bridal Suite was the single best decision of our wedding planning. From the dewy morning look to the glamorous reception airbrush, every single guest praised the artistry.',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 't-3',
    clientName: 'Verified Bride A.',
    eventType: 'Nichayathartham & Sangeet',
    location: 'Grand Ballroom Celebration',
    quote: 'The team arrived right on time with incredible warmth and calm energy. The eye makeup was so detailed and matched my silk borders flawlessly. Truly world-class artistry.',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
]

export const LUXURY_BRANDS_USED = [
  'Charlotte Tilbury',
  'Dior Backstage',
  'NARS Cosmetics',
  'Estée Lauder',
  'Temptu Airbrush',
  'Tom Ford Beauty',
  'MAC Cosmetics',
  'Huda Beauty',
  'Laura Mercier',
  'Urban Decay',
]
