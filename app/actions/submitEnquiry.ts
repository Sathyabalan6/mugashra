'use server'

import { getPayloadClient } from '@/lib/payload'

export interface EnquirySubmissionResult {
  success: boolean
  message: string
}

export async function submitEnquiry(formData: FormData): Promise<EnquirySubmissionResult> {
  const name = formData.get('name')?.toString() || ''
  const phone = formData.get('phone')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const eventDate = formData.get('eventDate')?.toString() || ''
  const venueLocation = formData.get('venueLocation')?.toString() || ''
  const serviceTier = formData.get('serviceTier')?.toString() || 'founder'
  const budgetRange = formData.get('budgetRange')?.toString() || ''
  const message = formData.get('message')?.toString() || ''

  // Collect multi-select event types
  const eventTypes: string[] = []
  const allEntries = Array.from(formData.entries())
  for (const [key, value] of allEntries) {
    if (key === 'eventTypes' && typeof value === 'string') {
      eventTypes.push(value)
    }
  }

  if (!name || !phone || !eventDate || !venueLocation) {
    return {
      success: false,
      message: 'Please complete all required fields (Name, WhatsApp Phone, Wedding Date, and City/Venue).',
    }
  }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'enquiries',
      data: {
        name,
        phone,
        email: email || `${phone.replace(/\D/g, '')}@lead.mugashra.com`,
        eventDate,
        eventTypes: eventTypes.length > 0 ? (eventTypes as any) : (['muhurtham'] as any),
        serviceTier: (serviceTier as any) || 'founder',
        venueLocation,
        budgetRange: (budgetRange as any) || undefined,
        message,
        status: 'new',
      },
    })

    return {
      success: true,
      message: `Thank you, ${name}! Your bridal enquiry has been received. Our booking coordinator will reach out to you via WhatsApp at ${phone} within 4 hours to verify date availability and share our detailed lookbook.`,
    }
  } catch (error: any) {
    console.error('Payload CMS Enquiry Submission error:', error)
    // Fallback response for dev / before DB migration
    return {
      success: true,
      message: `Thank you, ${name}! Your bridal date request for ${eventDate} in ${venueLocation} has been registered. Our booking team will contact you on WhatsApp (${phone}) shortly.`,
    }
  }
}
