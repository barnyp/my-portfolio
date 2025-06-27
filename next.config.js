module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Suppress hydration warnings for browser extensions
  reactStrictMode: false,
  // Enable standalone output for Docker deployment
  output: 'standalone',
  // experimental: {
  //   suppressHydrationWarnings: true,
  // },
} 