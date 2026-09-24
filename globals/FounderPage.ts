import type { GlobalConfig } from 'payload'

export const FounderPage: GlobalConfig = {
  slug: 'founder-page',
  label: 'Founder & Owner Profile',
  admin: {
    description: 'Upload and update the owner portrait photo displayed on the Founder (About) page.',
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
        description: 'Upload the owner photo for the About / Founder page. If left blank, the default atelier portrait is used.',
      },
    },
    {
      name: 'name',
      type: 'text',
      defaultValue: 'Shwetha Mohan',
      label: 'Owner / Founder Name',
    },
    {
      name: 'role',
      type: 'text',
      defaultValue: 'Founder & Lead Master Artist',
      label: 'Title / Role Tag',
    },
    {
      name: 'experience',
      type: 'text',
      defaultValue: '10 Years South Indian Bridal Artistry',
      label: 'Experience Tagline',
    },
    {
      name: 'bioParagraph1',
      type: 'textarea',
      defaultValue: 'With over 10 years of luxury bridal artistry across South India, Shwetha Mohan founded Mugaashra Bridal Studio to bring a new standard of skin realism and editorial elegance to South Indian and North Indian brides.',
      label: 'Founder Bio Paragraph 1',
    },
    {
      name: 'bioParagraph2',
      type: 'textarea',
      defaultValue: 'Specializing in flawless airbrush makeup, HD & HD ultra complexions, skin-like transfer-proof finishes, soft-glam looks, and full-glam makeovers, she personally oversees every bridal booking at the atelier.',
      label: 'Founder Bio Paragraph 2',
    },
  ],
}
