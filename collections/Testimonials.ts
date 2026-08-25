import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Bride Testimonials',
  },
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'eventType', 'location', 'rating', 'featured', 'order'],
    group: '💄 Artistry & Portfolio',
    description: 'Curate client love notes, 5-star bridal reviews, wedding venues, and testimonials.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Bride & Groom / Client Name',
      admin: {
        description: 'e.g. "Dr. Sneha & Ashwin" or "Pooja Ramanathan"',
      },
    },
    {
      name: 'eventType',
      type: 'text',
      required: true,
      label: 'Ceremony / Event Type (e.g. "Muhurtham & Reception")',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Wedding City / Venue (e.g. "Feathers Hotel, Chennai")',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Review Quote / Feedback',
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 5,
      label: 'Star Rating (1-5)',
    },
    {
      name: 'photoUrl',
      type: 'text',
      label: 'Bride Photo URL (optional)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show on Homepage',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
