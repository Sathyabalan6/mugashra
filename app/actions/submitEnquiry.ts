'use server'

import { getPayloadClient } from '@/lib/payload'

export interface EnquirySubmissionResult {
  success: boolean
  message: string
}

type ServiceTier = 'founder' | 'team' | 'consultation'
type EventType = 'muhurtham' | 'reception' | 'engagement' | 'haldi_mehendi' | 'sangeet' | 'family' | 'groom'
type BudgetRange = '35k-60k' | '60k-100k' | '100k+'

const submissionWindowMs = 15 * 60 * 1000
const maxSubmissionsPerWindow = 3
const submissionAttempts = new Map<string, number[]>()

function isRateLimited(key: string) {
  const now = Date.now()
  const recentAttempts = (submissionAttempts.get(key) || []).filter(
    (timestamp) => now - timestamp < submissionWindowMs,
  )

  if (recentAttempts.length >= maxSubmissionsPerWindow) {
    submissionAttempts.set(key, recentAttempts)
    return true
  }

  submissionAttempts.set(key, [...recentAttempts, now])
  return false
}

export async function submitEnquiry(formData: FormData): Promise<EnquirySubmissionResult> {
  const name = formData.get('name')?.toString().trim() || ''
  const phone = formData.get('phone')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const eventDate = formData.get('eventDate')?.toString().trim() || ''
  const venueLocation = formData.get('venueLocation')?.toString().trim() || ''
  const serviceTierRaw = formData.get('serviceTier')?.toString().trim() || 'founder'
  const budgetRangeRaw = formData.get('budgetRange')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''
  const website = formData.get('website')?.toString().trim() || ''

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

  const normalizedPhone = phone.replace(/\D/g, '')
  if (normalizedPhone.length < 8 || normalizedPhone.length > 15) {
    return {
      success: false,
      message: 'Please enter a valid WhatsApp phone number, including the country code.',
    }
  }

  if (website) {
    return {
      success: false,
      message: 'We could not submit your enquiry. Please try again.',
    }
  }

  if (isRateLimited(normalizedPhone)) {
    return {
      success: false,
      message: 'Too many requests from this number. Please wait 15 minutes before trying again.',
    }
  }

  const validTiers: ServiceTier[] = ['founder', 'team', 'consultation']
  const serviceTier: ServiceTier = validTiers.includes(serviceTierRaw as ServiceTier)
    ? (serviceTierRaw as ServiceTier)
    : 'founder'
  const validBudgetRanges: BudgetRange[] = ['35k-60k', '60k-100k', '100k+']
  const budgetRange = validBudgetRanges.includes(budgetRangeRaw as BudgetRange)
    ? (budgetRangeRaw as BudgetRange)
    : undefined

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'enquiries',
      overrideAccess: true,
      data: {
        name,
        phone,
        email: email || `${normalizedPhone}@lead.mugashra.com`,
        eventDate,
        eventTypes: eventTypes.length > 0 ? eventTypes : ['muhurtham'],
        serviceTier,
        venueLocation,
        budgetRange,
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
    return {
      success: false,
      message: 'We could not save your enquiry. Please try again in a few minutes or contact us through Instagram.',
    }
  }
}
