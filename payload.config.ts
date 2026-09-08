import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { ServicePackages } from './collections/ServicePackages'
import { Enquiries } from './collections/Enquiries'

import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || ''
const isPostgres = databaseUri.startsWith('postgres://') || databaseUri.startsWith('postgresql://')
const payloadSecret = process.env.PAYLOAD_SECRET

if (!payloadSecret) {
  throw new Error('PAYLOAD_SECRET must be set before starting Mugashra.')
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
    ServicePackages,
    Users,
  ],
  globals: [
    SiteSettings,
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
