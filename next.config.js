/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['thirdwx.qlogo.cn'], // Allow WeChat avatar images
  },
  swcMinify: false, // Temporarily disable SWC minification to avoid the memory error
}

module.exports = nextConfig