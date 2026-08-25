import type { CollectionConfig } from 'payload'

export const PortfolioItems: CollectionConfig = {
  slug: 'portfolio-items',
  labels: {
    singular: 'Portfolio Look',
    plural: 'Portfolio Gallery',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'location', 'featured', 'order'],
    group: '💄 Artistry & Portfolio',
    description: 'Curate bespoke bridal looks across Muhurtham, Reception, Haldi, and Editorial masterclasses.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Look Title / Saree or Concept Name',
      admin: {
        description: 'e.g. "Heritage Kanjeevaram & Antique Temple Gold" or "Contemporary Dewy Glass-Skin Reception"',
      },
    },
    {
      name: 'brideName',
      type: 'text',
      label: 'Bride or Model Name',
      admin: {
        description: 'Optional name for editorial attribution.',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'muhurtham',
      options: [
        { label: 'Muhurtham (Heritage Silk & Temple Gold)', value: 'muhurtham' },
        { label: 'Reception (Contemporary High-Glam & Airbrush)', value: 'reception' },
        { label: 'Nichayathartham / Engagement', value: 'engagement' },
        { label: 'Haldi & Mehendi', value: 'haldi' },
        { label: 'Editorial & Masterclasses', value: 'editorial' },
      ],
      label: 'Look Category',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image (High Resolution)',
      admin: {
        description: 'Upload high-resolution photography showcasing makeup base, eyes, and hair styling.',
      },
    },
    {
      name: 'imageUrlFallback',
      type: 'text',
      label: 'Direct Image URL (External / CDN Fallback)',
      admin: {
        description: 'Direct image path if hosting outside Payload uploads (e.g. /images/portfolio-1.png).',
      },
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Chennai',
      label: 'Wedding City / Venue',
      admin: {
        description: 'e.g. Chennai, Mahabalipuram, Bangalore, Coimbatore.',
      },
    },
    {
      name: 'artistryDetails',
      type: 'text',
      label: 'Artistry Details & Techniques',
      admin: {
        description: 'e.g. "Dewy HD base, smoked copper eyes, fresh jasmine braid, traditional Madisar draping"',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on Homepage Gallery',
      admin: {
        description: 'Showcase this look prominently in the curated homepage atelier showcase.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers display first (0, 1, 2...).',
      },
    },
  ],
}
