/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com","hubspot-academy.s3.amazonaws.com","hubspot-credentials-na1.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
