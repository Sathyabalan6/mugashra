import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seed() {
  console.log('Initializing Payload CMS globals and defaults...')
  const payload = await getPayload({ config: configPromise })

  // Initialize Founder Page global default values
  try {
    await payload.updateGlobal({
      slug: 'founder-page',
      data: {
        name: 'Shwetha Mohan',
        role: 'Founder & Lead Master Artist',
        experience: '10 Years South Indian Bridal Artistry',
        bioParagraph1:
          'With over 10 years of luxury bridal artistry across South India, Shwetha Mohan founded Mugaashra Bridal Studio to bring a new standard of skin realism and editorial elegance to South Indian and North Indian brides.',
        bioParagraph2:
          'Specializing in flawless airbrush makeup, HD & HD ultra complexions, skin-like transfer-proof finishes, soft-glam looks, and full-glam makeovers, she personally oversees every bridal booking at the atelier.',
      },
    })
    console.log('✅ Founder Page global initialized.')
  } catch (e) {
    console.log('Founder page initialization notice:', e)
  }

  console.log('✅ Payload CMS database successfully configured!')
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seeding error:', err)
    process.exit(1)
  })
