import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import configPromise from '../payload.config'

async function seed() {
  console.log('Initializing Payload CMS globals and defaults...')
  const payload = await getPayload({ config: configPromise })

  // Ensure public/media directory exists
  const mediaDir = path.resolve('public/media')
  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, { recursive: true })
  }

  // Copy default owner photo to public/media
  const sourcePhoto = path.resolve('public/images/shwetha-mohan.jpg')
  const destPhoto = path.resolve('public/media/shwetha-mohan.jpg')
  if (fs.existsSync(sourcePhoto) && !fs.existsSync(destPhoto)) {
    fs.copyFileSync(sourcePhoto, destPhoto)
  }

  // Check or create default media document
  let mediaDocId: number | string | null = null
  try {
    const existingMedia = await payload.find({
      collection: 'media',
      where: {
        filename: { equals: 'shwetha-mohan.jpg' },
      },
      limit: 1,
    })

    if (existingMedia.docs.length > 0) {
      mediaDocId = existingMedia.docs[0].id
    } else if (fs.existsSync(destPhoto)) {
      const stats = fs.statSync(destPhoto)
      const newMedia = await payload.create({
        collection: 'media',
        overrideAccess: true,
        data: {
          alt: 'Shwetha Mohan - Studio Founder & Lead Master Artist',
          filename: 'shwetha-mohan.jpg',
          mimeType: 'image/jpeg',
          filesize: stats.size,
          url: '/media/shwetha-mohan.jpg',
        },
      })
      mediaDocId = newMedia.id
    }
  } catch (e) {
    console.log('Notice checking/creating default media:', e)
  }

  // Initialize Founder Page global (only name and ownerPhoto)
  try {
    await payload.updateGlobal({
      slug: 'founder-page',
      data: {
        name: 'Shwetha Mohan',
        ...(mediaDocId ? { ownerPhoto: mediaDocId } : {}),
      },
    })
    console.log('✅ Founder Page global initialized with photo and name.')
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
