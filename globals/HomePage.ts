import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Homepage Content',
  admin: {
    group: '🌐 Site Content',
    description: 'Manage homepage hero typography, high-res bridal imagery, and Studio Vision & Mission copy.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroEyebrow',
      type: 'text',
      defaultValue: 'Editorial Bridal Atelier • Chennai',
      label: 'Hero Eyebrow Text',
    },
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'MUGASHRA ARTISTRY',
      label: 'Hero Brand Title',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      defaultValue: 'WHERE A DECADE OF EXCELLENCE MEETS THE ARTISTRY OF YOUR DREAMS.',
      label: 'Hero Subtitle',
    },
    {
      name: 'heroDesktopImage',
      type: 'text',
      defaultValue: '/images/hero-bride.png',
      label: 'Hero Desktop Image Path/URL',
    },
    {
      name: 'heroMobileImage',
      type: 'text',
      defaultValue: '/images/hero-bride-mobile.png',
      label: 'Hero Mobile Portrait Image Path/URL',
    },
    {
      name: 'visionTitle',
      type: 'text',
      defaultValue: 'VISION',
      label: 'Vision Heading',
    },
    {
      name: 'visionText',
      type: 'textarea',
      defaultValue: 'At Mugashra Artistry, we envision a world where every bride feels radiantly confident, embodying timeless elegance on one of the most cherished days of her life. Our vision is to be the premier destination for bridal styling services, where each stroke of our artistry enhances natural beauty and creates lasting memories.',
      label: 'Vision Philosophy Paragraph',
    },
    {
      name: 'missionTitle',
      type: 'text',
      defaultValue: 'MISSION',
      label: 'Mission Heading',
    },
    {
      name: 'missionText',
      type: 'textarea',
      defaultValue: 'Our mission at Mugashra Artistry is to curate unparalleled bridal experiences through the art of makeup. We are dedicated to providing exceptional, personalized services that capture the essence of each bride\'s individual style and personality. With a commitment to creativity, precision, and a touch of magic, we strive to make every bride feel authentically herself as she walks down the aisle.',
      label: 'Mission Statement Paragraph',
    },
  ],
}
