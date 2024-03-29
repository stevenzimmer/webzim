/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"lh3.googleusercontent.com",
        pathname:"**"
      },
      {
        protocol: "https",
        hostname:"hubspot-academy.s3.amazonaws.com",
        pathname:"**"

      },
      {
        protocol: "https",
        hostname:"hubspot-credentials-na1.s3.amazonaws.com",
        pathname:"**"

      },
      {
        protocol: "https",
        hostname:"charts-static.billboard.com",
        pathname:"**"

      },
      {
        protocol: "https",
        hostname:"github.com",
        pathname:"**"

      }
    ],
  },
};

module.exports = nextConfig;
