import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '10.47.54.223',
    '10.47.54.223:3000',
    'localhost:3000',
    '127.0.0.1:3000',
    '*.local',
  ],
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default withPayload(nextConfig)
