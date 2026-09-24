import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User Account',
    plural: 'Admin Users & Staff',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'roles', 'createdAt'],
    group: '⚙️ Studio Settings & Admin',
    description: 'Manage admin accounts, studio coordinators, and authentication credentials.',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Staff / Admin Name',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['admin'],
      options: [
        { label: 'Studio Administrator (Full Access)', value: 'admin' },
        { label: 'Bridal Coordinator / Editor', value: 'editor' },
      ],
      label: 'Access Roles',
    },
  ],
}
