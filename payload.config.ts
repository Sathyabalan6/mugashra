import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ServicePackages } from './collections/ServicePackages'
import { PortfolioItems } from './collections/PortfolioItems'
import { TeamMembers } from './collections/TeamMembers'
import { Testimonials } from './collections/Testimonials'
import { Enquiries } from './collections/Enquiries'

import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || ''
const isPostgres = databaseUri.startsWith('postgres://') || databaseUri.startsWith('postgresql://')

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Mugashra Bridal Atelier CMS',
    },
    components: {
      graphics: {
        Logo: '/components/payload/Logo#Logo',
        Icon: '/components/payload/Icon#Icon',
      },
      beforeDashboard: ['/components/payload/DashboardWelcome#DashboardWelcome'],
      afterNavLinks: ['/components/payload/NavFooter#NavFooter'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Enquiries,
    PortfolioItems,
    ServicePackages,
    Testimonials,
    TeamMembers,
    Media,
    Users,
  ],
  globals: [
    HomePage,
    SiteSettings,
  ],
  editor: lexicalEditor(),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'mugashra-classic-luxury-bridal-artistry-secret-key-32chars',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseUri,
        },
      })
    : sqliteAdapter({
        client: {
          url: databaseUri || 'file:./mugashra.db',
        },
      }),
})
