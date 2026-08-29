import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seed() {
  console.log('Seeding Payload CMS database with live website content...')
  const payload = await getPayload({ config: configPromise })

  // 1. Seed Testimonials
  const existingTestimonials = await payload.find({ collection: 'testimonials', limit: 1 })
  if (existingTestimonials.totalDocs === 0) {
    console.log('Seeding testimonials...')
    const testimonialsData = [
      {
        clientName: 'PREETHA LAWRENCE',
        eventType: 'Bridal Muhurtham',
        location: 'Chennai',
        quote: "I've been following her work for a long time and I wanted her to do my makeup on my big day. What can I say... Class is the only word we need to say. Not too much, not too less, just Perfect! Her makeup was flawless and long lasting, it stood for more than 8 hours. Her calm and caring personality keeps all her brides cool.",
        rating: 5,
        featured: true,
        order: 1,
      },
      {
        clientName: 'SWEATHA BALA',
        eventType: 'Wedding Ceremony',
        location: 'Chennai',
        quote: "Absolutely recommended for bridal makeup! The team exactly delivered what I wanted on my big day! From a person who wears no more than a kajal to someone who wore professional makeup for the first time, I don’t think I have felt so confident about myself. The best part: you look extremely natural post makeup!",
        rating: 5,
        featured: true,
        order: 2,
      },
      {
        clientName: 'SUZANNE',
        eventType: 'Airbrush Bridal Suite',
        location: 'Chennai',
        quote: "I cannot say enough about Mugashra and her very talented atelier team! Everything she did was FLAWLESS. She worked quickly but efficiently. I had booked her AIRBRUSH package and it was worth EVERY penny. Everything stayed pristine on camera and under the sacred morning lights.",
        rating: 5,
        featured: true,
        order: 3,
      },
      {
        clientName: 'DAMINI CHATRANI',
        eventType: 'Reception Glam',
        location: 'Chennai',
        quote: "She works with the client's preference and really makes the client comfortable and at ease. She's a perfectionist when it comes to her work. Her makeup did not budge and is very creative. I really loved getting dolled up by her!",
        rating: 5,
        featured: true,
        order: 4,
      },
      {
        clientName: 'PRIYA & SANGEETHA',
        eventType: 'Sister & Bride Styling',
        location: 'Chennai',
        quote: "We never regretted choosing the atelier for my sister's wedding. They were on time to the venue, very professional and friendly. The bride looked like a model with the hair & makeup in her reception look. Everyone in the family appreciated the looks!",
        rating: 5,
        featured: true,
        order: 5,
      },
      {
        clientName: 'PRIYANKA SURESH',
        eventType: 'Minimalist Bridal Glow',
        location: 'Chennai',
        quote: "I'm a person who wears no makeup at all and I was overwhelmed with the idea of bridal makeup. On my wedding day, I mentioned all my concerns to the artist. She did her magic. I was so happy with the fact that I looked like myself. She kept it so natural and minimal.",
        rating: 5,
        featured: true,
        order: 6,
      },
    ]

    for (const item of testimonialsData) {
      await payload.create({
        collection: 'testimonials',
        data: item,
      })
    }
  }

  // 2. Seed Service Packages
  const existingPackages = await payload.find({ collection: 'service-packages', limit: 1 })
  if (existingPackages.totalDocs === 0) {
    console.log('Seeding service packages...')
    const packagesData = [
      {
        title: 'HIGH DEFINITION',
        tier: 'founder',
        category: 'muhurtham',
        tagline: 'Product Used: Marc Jacobs • Giorgio Armani • Chanel • Dior',
        description: 'Our High Definition and Airbrush package delivers a lush, weightless finish that leaves your skin feeling like it has a faux filter effect. Flawless on camera and water-resistant for all sacred rituals.',
        startingPrice: 65000,
        duration: '3.5 - 4.0 Hours',
        badge: 'Signature HD',
        inclusions: [
          { item: 'Full HD & Waterproof Complexion' },
          { item: 'Hairstyling of Choice (Traditional Braid or Bun)' },
          { item: 'Lehenga / Saree Draping & Pinning' },
          { item: 'Jewellery Styling & Placement' },
        ],
        termsNote: '+ 5% GST apply. Travel outside Chennai billed at actuals.',
        order: 1,
      },
      {
        title: 'BRIDAL CEREMONY & RECEPTION',
        tier: 'founder',
        category: 'reception',
        tagline: 'Product Used: HD Products + Temptu Airbrush',
        description: 'For our brides with a multi-event celebration spanning the traditional morning ceremony and evening reception, we create tailored looks to ensure you look fresh and camera-ready at every moment.',
        startingPrice: 70000,
        duration: 'Dual Event Experience',
        badge: 'Airbrush Suite',
        inclusions: [
          { item: 'Morning Sacred Muhurtham HD Styling' },
          { item: 'Evening Reception Airbrush Transformation' },
          { item: 'Floral Hair Architecture & Hollywood Waves' },
          { item: 'Silk Saree & Reception Lehenga Draping' },
        ],
        termsNote: '+ 5% GST apply. Includes look-board planning.',
        order: 2,
      },
      {
        title: 'OUTSTATION & DESTINATION',
        tier: 'founder',
        category: 'complete_bridal',
        tagline: 'Dedicated Artist Travel Across India & Worldwide',
        description: 'For outstation weddings, we dedicate our team solely to your event, ensuring undivided personal attention and the highest level of luxury service.',
        startingPrice: 100000,
        duration: 'Full Day Dedication',
        badge: 'Destination Travel',
        inclusions: [
          { item: 'Full Day Dedicated Artist Team' },
          { item: 'Muhurtham, Reception, & Sangeet Looks' },
          { item: 'Touch-up Assistance throughout rituals' },
        ],
        termsNote: '+ 5% GST apply. Flights and accommodation to be arranged by client.',
        order: 3,
      },
      {
        title: 'THE GROOM COVERED',
        tier: 'team',
        category: 'groom_family',
        tagline: '..King fit for His Queen..',
        description: 'Camera-ready matte HD complexion, shine reduction, beard grooming and hair styling for the groom.',
        startingPrice: 10000,
        duration: '45 Minutes',
        inclusions: [
          { item: 'Matte Invisible HD Skin Prep (INR 10,000/-)' },
          { item: 'Hairstyling & Beard Setting (INR 5,000/-)' },
        ],
        termsNote: '+ 5% GST apply.',
        order: 4,
      },
      {
        title: 'WEDDING CREW & BRIDAL PARTY',
        tier: 'team',
        category: 'groom_family',
        tagline: '..Bridesmaids, Parents, Sisters..',
        description: 'Cohesive luxury styling for the bridal party so mothers, sisters, and bridesmaids look immaculate.',
        startingPrice: 7500,
        duration: '1.5 Hours / Person',
        inclusions: [
          { item: 'Party Makeup: INR 7,500/- per person' },
          { item: 'Hairstyling: INR 3,500/- per person' },
          { item: 'Saree / Lehenga Draping: INR 1,000/- per person' },
        ],
        termsNote: '+ 5% GST apply.',
        order: 5,
      },
    ]

    for (const item of packagesData) {
      await payload.create({
        collection: 'service-packages',
        data: item as any,
      })
    }
  }

  // 3. Seed Portfolio Items
  const existingPortfolio = await payload.find({ collection: 'portfolio-items', limit: 1 })
  if (existingPortfolio.totalDocs === 0) {
    console.log('Seeding portfolio items...')
    const portfolioData = [
      {
        title: 'The Sacred Muhurtham in Crimson Silk',
        brideName: 'Editorial Look I',
        category: 'muhurtham',
        imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
        location: 'Wedding Ceremony, Chennai',
        artistryDetails: 'Waterproof HD complexion, antique gold temple jewellery, fresh Madurai Malli poola jada.',
        featured: true,
        order: 1,
      },
      {
        title: 'Contemporary Glass-Skin Reception',
        brideName: 'Editorial Look II',
        category: 'reception',
        imageUrl: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85',
        location: 'Evening Reception, Chennai',
        artistryDetails: 'Sculpted airbrush base, champagne shimmer lids, voluminous Hollywood waves.',
        featured: true,
        order: 2,
      },
      {
        title: 'Pastel Organza Nichayathartham',
        brideName: 'Editorial Look III',
        category: 'engagement',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
        location: 'Engagement Ceremony, Chennai',
        artistryDetails: 'Soft peach monochromatic blush, fluttery lash clusters, romantic floral hair.',
        featured: true,
        order: 3,
      },
      {
        title: 'Couture Editorial in Emerald Velvet',
        brideName: 'Editorial Look IV',
        category: 'editorial',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85',
        location: 'Fashion Campaign',
        artistryDetails: 'Sculpted cheekbones, high-gloss nude pout, modern architectural low bun.',
        featured: true,
        order: 4,
      },
      {
        title: 'Minimalist Monochromatic Silk Campaign',
        brideName: 'Editorial Look V',
        category: 'editorial',
        imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85',
        location: 'Silk Saree Editorial',
        artistryDetails: 'Feathered natural brows, glass skin glaze, subtle earth tones.',
        featured: true,
        order: 5,
      },
      {
        title: 'Luxury Jewellery Campaign',
        brideName: 'Editorial Look VI',
        category: 'editorial',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
        location: 'Commercial Campaign',
        artistryDetails: 'High-contrast definition, camera-perfect skin setting under intense studio lighting.',
        featured: true,
        order: 6,
      },
    ]

    for (const item of portfolioData) {
      await payload.create({
        collection: 'portfolio-items',
        data: item as any,
      })
    }
  }

  // 4. Seed Team Members
  const existingTeam = await payload.find({ collection: 'team-members', limit: 1 })
  if (existingTeam.totalDocs === 0) {
    console.log('Seeding team members...')
    const teamData = [
      {
        name: 'Lead Master Artist',
        role: 'Founder & Master Bridal Artist',
        specialization: 'High-Definition Bridal Complexion, Airbrush & Heritage South Indian Artistry',
        bio: 'With over 9 years of luxury wedding experience across South India, our Lead Artist has styled over 650+ brides with signature skin-realism.',
        yearsExperience: 9,
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
        order: 1,
      },
      {
        name: 'Senior Hair Stylist',
        role: 'Senior Hair & Floral Architect',
        specialization: 'Traditional Poola Jada, Modern Textured Buns & Hollywood Waves',
        bio: 'Specializing in intricate South Indian bridal braids, poola jada floral settings, and voluminous Hollywood waves that remain immaculate.',
        yearsExperience: 7,
        photoUrl: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
        order: 2,
      },
      {
        name: 'Senior Saree Stylist',
        role: 'Senior Saree & Silhouette Stylist',
        specialization: 'Kanjeevaram Box Pleating, Saree Pre-Draping & Precision Pleating',
        bio: 'Expert in razor-sharp Kanjeevaram box pleating, weight distribution pinning for heavy silk sarees, and contemporary lehenga draping.',
        yearsExperience: 8,
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        order: 3,
      },
    ]

    for (const item of teamData) {
      await payload.create({
        collection: 'team-members',
        data: item,
      })
    }
  }

  // 5. Seed SiteSettings
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        studioName: 'Mugashra Bridal Atelier',
        tagline: 'Timeless Grace. Flawless Skin. Luxury South Indian Bridal Artistry.',
        primaryPhone: '+91 (0) 73388 38669',
        primaryEmail: 'appointments@mugashra.com',
        studioAddress: 'Atelier Studio • Chennai, Tamil Nadu, India',
        instagramHandle: '@mugaashra_makeover',
      } as any,
    })
  } catch (e) {
    // Globals might already exist
  }

  console.log('✅ Payload CMS database successfully seeded with all live website content!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seeding error:', err)
  process.exit(1)
})
