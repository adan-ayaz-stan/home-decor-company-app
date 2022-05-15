/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "img.icons8.com",
      "www.google.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
