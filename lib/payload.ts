import configPromise from '@payload-config'
import { getPayload as getPayloadInstance, type Payload } from 'payload'

declare global {
  var payloadClient: Payload | undefined
}

let cachedPayload: Payload | null = globalThis.payloadClient || null

export const getPayloadClient = async (): Promise<Payload> => {
  if (cachedPayload) {
    return cachedPayload
  }

  const client = await getPayloadInstance({
    config: configPromise,
  })

  cachedPayload = client
  globalThis.payloadClient = client

  return client
}
