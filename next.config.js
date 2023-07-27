/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN
  },
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}
