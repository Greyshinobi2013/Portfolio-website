/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // If external API URL is specified or NestJS is running on port 4000
    if (process.env.API_PROXY_URL) {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_PROXY_URL}/api/:path*`,
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
