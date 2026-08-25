import type { CollectionConfig } from 'payload'

export const ServicePackages: CollectionConfig = {
  slug: 'service-packages',
  labels: {
    singular: 'Service Package',
    plural: 'Service Packages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tier', 'category', 'startingPrice', 'badge', 'order'],
    group: '💄 Artistry & Portfolio',
    description: 'Configure bespoke bridal pricing tiers, session durations, inclusions, and highlight badges.',
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
      admin: {
        description: 'e.g. "Muhurtham Master Artistry", "The Complete Royal Bridal Suite"',
      },
    },
    {
      name: 'tier',
      type: 'select',
      required: true,
      defaultValue: 'founder',
      options: [
        { label: '👑 Signature Master Artist (Founder Tier)', value: 'founder' },
        { label: '✨ Senior Studio Team (Atelier Tier)', value: 'team' },
      ],
      label: 'Artistry Tier',
      admin: {
        description: 'Select whether this package is styled personally by the Founder or Senior Studio Stylists.',
      },
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
      admin: {
        description: 'A brief luxury phrase summarizing the experience.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Detailed Description',
      admin: {
        description: 'Describe the makeup base, skin prep ritual, draping, and jewelry setting involved.',
      },
    },
    {
      name: 'startingPrice',
      type: 'number',
      required: true,
      label: 'Starting Price (INR ₹)',
      admin: {
        description: 'Base pricing in INR (e.g. 45000).',
      },
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
      label: 'Package Inclusions & Deliverables',
      admin: {
        description: 'Bullet points detailing what is included in this bridal service package.',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
          label: 'Inclusion Item (e.g. "Hydra-prep luxury skin ritual", "Premium HD Airbrush Foundation")',
        },
      ],
    },
    {
      name: 'termsNote',
      type: 'text',
      label: 'Travel / Booking Terms Note',
      admin: {
        description: 'e.g. "Travel & accommodation for outstation weddings billed separately at actuals."',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Sorting Order',
    },
  ],
}
