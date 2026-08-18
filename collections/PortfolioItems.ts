import type { CollectionConfig } from 'payload'

export const PortfolioItems: CollectionConfig = {
  slug: 'portfolio-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'location', 'featured', 'order'],
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
    },
    {
      name: 'brideName',
      type: 'text',
      label: 'Bride or Model Name',
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
    },
    {
      name: 'imageUrlFallback',
      type: 'text',
      label: 'Direct Image URL (External / CDN Fallback)',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Chennai',
      label: 'Wedding City / Venue (e.g. Chennai, Mahabalipuram, Bangalore)',
    },
    {
      name: 'artistryDetails',
      type: 'text',
      label: 'Artistry Details (e.g. "Dewy HD base, smoked copper eyes, fresh jasmine braid, Kanjeevaram draping")',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on Homepage Gallery',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
}
