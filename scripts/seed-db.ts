import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seed() {
  console.log('Seeding Payload CMS database with live website content...')
  const payload = await getPayload({ config: configPromise })

  // 1. Clean and seed Service Packages
  try {
    const existing = await payload.find({ collection: 'service-packages', limit: 100 })
    for (const doc of existing.docs) {
      await payload.delete({ collection: 'service-packages', id: doc.id })
    }
    console.log(`Cleared ${existing.docs.length} old service packages.`)
  } catch (err) {
    console.log('Clearing old service packages notice:', err)
  }
    console.log('Seeding service packages...')
    const packagesData = [
      {
        title: 'SIGNATURE AIRBRUSH',
        tier: 'founder' as const,
        category: 'muhurtham' as const,
        tagline: 'Lush, skin-like, and transfer-proof airbrush perfection by Shwetha Mohan',
        description:
          'Our Signature Airbrush package delivers a weightless, skin-like finish that leaves your skin luminous, photo-ready, and completely transfer-proof. Flawless on camera and long-wearing for sacred rituals.',
        startingPrice: 35000,
        duration: '3.0 - 3.5 Hours',
        badge: 'Founder Signature',
        inclusions: [
          { item: 'Personal Artistry by Lead Master Artist Shwetha Mohan' },
          { item: 'Hydrating Skin Prep & Barrier Complexion' },
          { item: 'Contact Lenses & Premium False Lashes' },
          { item: 'Hair Styling & Signature Floral Architecture' },
          { item: 'Kanjeevaram Silk Saree Draping & Precision Box Pleating' },
          { item: 'Personal Styling & Jewellery Placement' },
        ],
        termsNote: '+ 5% GST apply. Travel outside Madurai billed at actuals.',
        order: 1,
      },
      {
        title: 'MUHURTHAM + RECEPTION',
        tier: 'founder' as const,
        category: 'complete_bridal' as const,
        tagline: 'Comprehensive dual-event luxury journey covering morning Muhurtham and evening Reception',
        description:
          'For brides with a multi-event celebration spanning the traditional morning ceremony and evening reception, Lead Master Artist Shwetha Mohan creates distinct tailored looks to ensure you look fresh and camera-ready at every moment.',
        startingPrice: 70000,
        duration: 'Dual Event Suite',
        badge: 'Airbrush Suite',
        inclusions: [
          { item: 'Morning Sacred Muhurtham HD Styling' },
          { item: 'Evening Reception Airbrush Transformation' },
          { item: 'Contact Lenses & 3D Silk Lashes for both events' },
          { item: 'Floral Hair Architecture & Modern Reception Updo' },
          { item: 'Silk Saree & Reception Lehenga Draping' },
          { item: 'Jewellery Pinning & Styling Support' },
        ],
        termsNote: '+ 5% GST apply. Includes look-board planning.',
        order: 2,
      },
      {
        title: 'PARTY & EVENT MAKEUP',
        tier: 'team' as const,
        category: 'groom_family' as const,
        tagline: 'Elevated styling for mothers, sisters & bridesmaids',
        description:
          'Cohesive luxury styling for the bridal party so mothers, sisters, and bridesmaids look immaculate.',
        startingPrice: 7500,
        duration: '1.5 Hours / Person',
        badge: 'Add-On Service',
        inclusions: [
          { item: 'Party Makeup: INR 7,500/- per person' },
          { item: 'Hairstyling of Choice (Curls, Braid, or Bun)' },
          { item: 'Saree / Lehenga Draping & Pinning' },
        ],
        termsNote: '+ 5% GST apply.',
        order: 3,
      },
      {
        title: 'THE GROOM COVERED',
        tier: 'team' as const,
        category: 'groom_family' as const,
        tagline: 'Camera-ready grooming for the groom',
        description:
          'Camera-ready matte HD complexion, shine reduction, beard grooming and hair styling for the groom.',
        startingPrice: 8000,
        duration: '45 Minutes',
        badge: 'Groom Suite',
        inclusions: [
          { item: 'Matte Invisible HD Skin Prep' },
          { item: 'Hairstyling & Beard Setting' },
          { item: 'Angavastram / Dhoti Draping Support' },
        ],
        termsNote: '+ 5% GST apply.',
        order: 4,
      },
      {
        title: 'SAREE PRE-PLEATING',
        tier: 'team' as const,
        category: 'groom_family' as const,
        tagline: 'Precision 48-hour heirloom saree box pleating',
        description:
          'Expert steam pressing and precision box-pleating for Kanjeevaram, banarasi, and organza sarees for seamless 5-minute wedding draping.',
        startingPrice: 1500,
        duration: 'Advance Service',
        badge: 'A La Carte Add-On',
        inclusions: [
          { item: 'Heirloom Silk Steam Pressing' },
          { item: 'Precision Box-Pleat Folding' },
          { item: 'Crease-Proof Hanger Packaging' },
        ],
        termsNote: '+ 5% GST apply.',
        order: 5,
      },
    ]

    for (const item of packagesData) {
      await payload.create({
        collection: 'service-packages',
        data: item,
      })
    }

  // 2. Seed SiteSettings global
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        studioName: 'Mugaashra Bridal Studio',
        studioAddress: '5/Anna first cross street, 2nd floor, Pethaniyapuram, Madurai - 625016, Tamil Nadu, India',
        contactEmail: 'Mugaashra@gmail.com',
        contactPhone: '+91 8610597490',
        instagramUrl: 'https://www.instagram.com/mugaashra_makeover',
        facebookUrl: 'https://facebook.com/mugashra',
        openingHours: 'Monday - Sunday: 11:00 AM - 8:00 PM (By Appointment)',
      },
    })
  } catch (e) {
    console.log('SiteSettings update notice (ignoring if already up to date):', e)
  }

  console.log('✅ Payload CMS database successfully seeded with active collections!')
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seeding error:', err)
    process.exit(1)
  })
