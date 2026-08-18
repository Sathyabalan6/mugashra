import configPromise from '@payload-config'
import { getPayload as getPayloadInstance, type Payload } from 'payload'

let cachedPayload: Payload | null = (globalThis as any).payloadClient || null

export const getPayloadClient = async (): Promise<Payload> => {
  if (cachedPayload) {
    return cachedPayload
  }

  const client = await getPayloadInstance({
    config: configPromise,
  })

  cachedPayload = client
  ;(globalThis as any).payloadClient = client

  return client
}
