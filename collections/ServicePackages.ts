import type { CollectionConfig } from 'payload'

export const ServicePackages: CollectionConfig = {
  slug: 'service-packages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tier', 'category', 'startingPrice', 'badge', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Package Name',
    },
    {
      name: 'tier',
      type: 'select',
      required: true,
      defaultValue: 'founder',
      options: [
        { label: 'Signature Master Artist (Founder Tier)', value: 'founder' },
        { label: 'Senior Studio Team (Atelier Tier)', value: 'team' },
      ],
      label: 'Artistry Tier',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'muhurtham',
      options: [
        { label: 'Muhurtham Ceremony (Morning / Heritage Silk)', value: 'muhurtham' },
        { label: 'Reception & Sangeet (Evening Glam / HD Airbrush)', value: 'reception' },
        { label: 'Nichayathartham / Engagement', value: 'engagement' },
        { label: 'Haldi / Mehendi', value: 'haldi_sangeet' },
        { label: 'Complete 2-Event / 3-Event Bridal Suite', value: 'complete_bridal' },
        { label: 'Groom, Bridesmaids & Family Styling', value: 'groom_family' },
      ],
      label: 'Ceremony Type',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Short Tagline / Highlight',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Detailed Description',
    },
    {
      name: 'startingPrice',
      type: 'number',
      required: true,
      label: 'Starting Price (INR ₹)',
    },
    {
      name: 'duration',
      type: 'text',
      defaultValue: '3.5 - 4.0 Hours',
      label: 'Typical Session Duration',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge (e.g., "Founder Exclusive", "Most Popular", "Signature")',
    },
    {
      name: 'inclusions',
      type: 'array',
      label: 'Package Inclusions',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'termsNote',
      type: 'text',
      label: 'Travel / Booking Terms Note',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Sorting Order',
    },
  ],
}
