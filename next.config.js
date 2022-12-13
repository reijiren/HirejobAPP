/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "hirejob-rhefrz.up.railway.app", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
