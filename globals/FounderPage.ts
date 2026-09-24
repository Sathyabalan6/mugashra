import type { GlobalConfig } from 'payload'

export const FounderPage: GlobalConfig = {
  slug: 'founder-page',
  label: 'Founder & Owner Profile',
  admin: {
    description: 'Update the founder name and photo displayed on the Founder (About) page.',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'ownerPhoto',
      type: 'upload',
      relationTo: 'media',
      label: 'Owner / Founder Portrait Photo',
      admin: {
        description: 'Upload or change the owner portrait photo displayed on the About / Founder page.',
      },
    },
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Shwetha Mohan',
      label: 'Owner / Founder Name',
    },
  ],
}
