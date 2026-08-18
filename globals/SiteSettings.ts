import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'studioName',
      type: 'text',
      defaultValue: 'MUGASHRA ARTISTRY',
      label: 'Studio Brand Name',
    },
    {
      name: 'studioAddress',
      type: 'text',
      defaultValue: 'Atelier Studio • Chennai, Tamil Nadu, India',
      label: 'Studio Base Location / City',
    },
    {
      name: 'openingHours',
      type: 'textarea',
      defaultValue: 'Monday - Friday: 10:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: By Bridal Appointment Only',
      label: 'Studio Opening Hours',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'appointments@mugashra.com',
      label: 'Studio Email',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      defaultValue: 'https://instagram.com/mugashra',
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
