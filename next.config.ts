import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '10.134.224.223',
    '10.134.224.223:3000',
    '10.47.54.223',
    '10.47.54.223:3000',
    '10.168.181.223',
    '10.168.181.223:3000',
    'localhost:3000',
    '127.0.0.1:3000',
    '*.local',
  ],
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
