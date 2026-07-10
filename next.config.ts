import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  serverExternalPackages: ['sharp', 'canvas'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForBuild: true,
    turbopackFileSystemCacheForDev: true,
    cssChunking: 'strict',
    inlineCss: false,
    serverComponentsHmrCache: true,
  },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
}

export default nextConfig
