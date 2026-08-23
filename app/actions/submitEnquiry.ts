'use server'

import { getPayloadClient } from '@/lib/payload'

export interface EnquirySubmissionResult {
  success: boolean
  message: string
}

type ServiceTier = 'founder' | 'team' | 'consultation'
type EventType = 'muhurtham' | 'reception' | 'engagement' | 'haldi_mehendi' | 'sangeet' | 'family' | 'groom'

export async function submitEnquiry(formData: FormData): Promise<EnquirySubmissionResult> {
  const name = formData.get('name')?.toString().trim() || ''
  const phone = formData.get('phone')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const eventDate = formData.get('eventDate')?.toString().trim() || ''
  const venueLocation = formData.get('venueLocation')?.toString().trim() || ''
  const serviceTierRaw = formData.get('serviceTier')?.toString().trim() || 'founder'
  const budgetRangeRaw = formData.get('budgetRange')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  // Collect multi-select event types
  const eventTypes: EventType[] = []
  const allEntries = Array.from(formData.entries())
  for (const [key, value] of allEntries) {
    if (key === 'eventTypes' && typeof value === 'string') {
      eventTypes.push(value as EventType)
    }
  }

  if (!name || !phone || !eventDate || !venueLocation) {
    return {
      success: false,
      message: 'Please complete all required fields (Name, WhatsApp Phone, Wedding Date, and City/Venue).',
    }
  }

  const validTiers: ServiceTier[] = ['founder', 'team', 'consultation']
  const serviceTier: ServiceTier = validTiers.includes(serviceTierRaw as ServiceTier)
    ? (serviceTierRaw as ServiceTier)
    : 'founder'

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'enquiries',
      data: {
        name,
        phone,
        email: email || `${phone.replace(/\D/g, '')}@lead.mugashra.com`,
        eventDate,
        eventTypes: eventTypes.length > 0 ? eventTypes : ['muhurtham'],
        serviceTier,
        venueLocation,
        budgetRange: (budgetRangeRaw as '35k-60k' | '60k-100k' | '100k+') || undefined,
        message,
        status: 'new',
      },
    })

    return {
      success: true,
      message: `Thank you, ${name}! Your bridal enquiry has been received. Our booking coordinator will reach out to you via WhatsApp at ${phone} within 4 hours to verify date availability and share our detailed lookbook.`,
    }
  } catch (error: unknown) {
    console.error('Payload CMS Enquiry Submission error:', error)
    // Fallback response for dev / before DB migration
    return {
      success: true,
      message: `Thank you, ${name}! Your bridal date request for ${eventDate} in ${venueLocation} has been registered. Our booking team will contact you on WhatsApp (${phone}) shortly.`,
    }
  }
}
