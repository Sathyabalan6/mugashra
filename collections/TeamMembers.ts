import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Team Member',
    plural: 'Studio Team & Artists',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'specialization', 'yearsExperience', 'order'],
    group: '🏛️ Studio & Atelier',
    description: 'Master artists, senior stylists, biographies, and experience credentials.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Artist Name',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Role / Designation (e.g., "Founder & Lead Master Artist", "Senior Hair Stylist")',
    },
    {
      name: 'specialization',
      type: 'text',
      label: 'Specialty (e.g., "Airbrush HD Makeup & Saree Draping Artistry")',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography & Artistry Philosophy',
    },
    {
      name: 'yearsExperience',
      type: 'number',
      label: 'Years of Professional Experience',
    },
    {
      name: 'photoUrlFallback',
      type: 'text',
      label: 'Direct Portrait Image URL',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
