/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
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

export default nextConfig;
