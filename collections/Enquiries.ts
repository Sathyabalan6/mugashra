import type { CollectionConfig } from 'payload'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  labels: {
    singular: 'Bridal Inquiry',
    plural: 'Bridal Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'eventDate', 'serviceTier', 'venueLocation', 'status', 'createdAt'],
    group: '📥 Client Enquiries',
    description: 'Track client wedding dates, WhatsApp leads, ceremony requirements, and booking statuses.',
  },
  access: {
    create: () => false,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Bride / Client Name',
      admin: {
        description: 'Full name of the bride or contact person.',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'WhatsApp / Phone Number',
      admin: {
        description: 'Direct mobile or WhatsApp number for wedding consultation.',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'eventDate',
      type: 'text',
      required: true,
      label: 'Wedding / Event Date',
      admin: {
        description: 'Primary Muhurtham, Reception, or ceremony date (e.g. "Nov 24, 2026").',
      },
    },
    {
      name: 'eventTypes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Muhurtham (Morning Ceremony)', value: 'muhurtham' },
        { label: 'Reception (Evening Glam)', value: 'reception' },
        { label: 'Nichayathartham (Engagement)', value: 'engagement' },
        { label: 'Haldi / Mehendi', value: 'haldi_mehendi' },
        { label: 'Sangeet / Cocktail', value: 'sangeet' },
        { label: 'Family & Bridesmaid Styling', value: 'family' },
        { label: 'Groom Grooming & Styling', value: 'groom' },
      ],
      label: 'Ceremonies Requiring Artistry',
    },
    {
      name: 'serviceTier',
      type: 'select',
      defaultValue: 'founder',
      options: [
        { label: 'Signature Master Artist (Founder Tier)', value: 'founder' },
        { label: 'Senior Studio Team (Atelier Tier)', value: 'team' },
        { label: 'Open / Need Consultation', value: 'consultation' },
      ],
      label: 'Artist Preference',
    },
    {
      name: 'venueLocation',
      type: 'text',
      required: true,
      label: 'Wedding City & Hall / Resort Name',
      admin: {
        description: 'e.g. Mayor Ramanathan Hall, Chennai or InterContinental Resort, Mahabalipuram',
      },
    },
    {
      name: 'budgetRange',
      type: 'select',
      options: [
        { label: '₹35,000 - ₹60,000 (Single / 2 Events)', value: '35k-60k' },
        { label: '₹60,000 - ₹1,00,000 (Full Bridal Suite)', value: '60k-100k' },
        { label: '₹1,00,000+ (Multi-day Destination / Full Family Suite)', value: '100k+' },
      ],
      label: 'Estimated Budget Range',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Special Requests, Saree Details, or Timing Notes',
      admin: {
        description: 'Specific saree draping requests, muhurtham morning time, or skin concerns.',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: '⚡ New Lead (Pending Review)', value: 'new' },
        { label: '💬 Contacted via WhatsApp', value: 'contacted' },
        { label: '💍 Date Blocked / Advance Paid', value: 'booked' },
        { label: '📁 Archived / Unavailable', value: 'archived' },
      ],
      label: 'Inquiry Status',
      admin: {
        position: 'sidebar',
        description: 'Update the pipeline status as you communicate with the bride.',
      },
    },
  ],
}
