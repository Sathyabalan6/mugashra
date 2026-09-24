import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Studio & Atelier Settings',
  admin: {
    group: '⚙️ Studio Settings & Admin',
    description: 'Studio contact details, Madurai address, Instagram / Facebook links, and bridal appointment hours.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'studioName',
      type: 'text',
      defaultValue: 'Mugaashra Bridal Studio',
      label: 'Studio Brand Name',
    },
    {
      name: 'studioAddress',
      type: 'text',
      defaultValue: '5/Anna first cross street, 2nd floor, Pethaniyapuram, Madurai - 625016, Tamil Nadu, India',
      label: 'Studio Base Location / City',
    },
    {
      name: 'openingHours',
      type: 'textarea',
      defaultValue: 'Monday - Sunday: 11:00 AM - 8:00 PM (By Appointment)',
      label: 'Studio Opening Hours',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'Mugaashra@gmail.com',
      label: 'Studio Email',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+91 8610597490',
      label: 'Primary WhatsApp & Booking Number',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      defaultValue: 'https://www.instagram.com/mugaashra_makeover',
      label: 'Instagram URL',
    },
    {
      name: 'facebookUrl',
      type: 'text',
      defaultValue: 'https://facebook.com/mugashra',
      label: 'Facebook URL',
    },
  ],
}
