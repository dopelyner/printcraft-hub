/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '3000',
      //   pathname: '/**',
      // },
      {
      	protocol: "http",
      	hostname: "localhost",
      },
      {
      	protocol: "https",
      	hostname: "https://hippo-marketplace-production.up.railway.app/",
      },
    ],
  },
}

module.exports = nextConfig