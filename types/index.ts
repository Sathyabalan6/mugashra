export interface ServicePackage {
  id: string
  title: string
  tier: 'founder' | 'team'
  category: 'muhurtham' | 'reception' | 'engagement' | 'haldi_sangeet' | 'complete_bridal' | 'groom_family'
  tagline: string
  description: string
  startingPrice: number
  duration: string
  badge?: string
  inclusions: string[]
  termsNote?: string
}

export interface PortfolioItem {
  id: string
  title: string
  brideName?: string
  category: 'muhurtham' | 'reception' | 'engagement' | 'haldi' | 'editorial' | 'Bridal' | 'Bridal Story' | 'Couple'
  imageUrl: string
  location?: string
  artistryDetails?: string
  desc?: string
  focalPosition?: string
  featured?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  specialization: string
  bio: string
  yearsExperience: number
  photoUrl: string
}

export interface Testimonial {
  id?: string
  clientName: string
  quote: string
  eventType?: string
  location?: string
  rating?: number
  photoUrl?: string
  featured?: boolean
  order?: number
}

export interface HomePageData {
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDesktopImage?: string
  heroMobileImage?: string
  visionTitle?: string
  visionText?: string
  missionTitle?: string
  missionText?: string
}

export interface EnquirySubmissionResult {
  success: boolean
  message: string
}
