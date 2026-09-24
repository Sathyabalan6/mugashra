import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Enquiries } from './collections/Enquiries'
import { Media } from './collections/Media'

import { FounderPage } from './globals/FounderPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || ''
const isPostgres = databaseUri.startsWith('postgres://') || databaseUri.startsWith('postgresql://')
const payloadSecret =
  process.env.PAYLOAD_SECRET ||
  (process.env.NODE_ENV !== 'production'
    ? 'mugashra-luxury-bridal-atelier-secret-key-32chars-dev'
    : '')

if (!payloadSecret) {
  throw new Error('PAYLOAD_SECRET must be set before starting Mugashra in production.')
}

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
    Media,
    Users,
  ],
  globals: [
    FounderPage,
  ],
  editor: lexicalEditor(),
  secret: payloadSecret,
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
