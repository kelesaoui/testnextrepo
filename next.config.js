/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{appDir: true},
      images: {
    remotePatterns: [
      {
        hostname: 'auseaacmpstorageaccount.blob.core.windows.net',
      }
    ]
  }
}

module.exports = nextConfig
