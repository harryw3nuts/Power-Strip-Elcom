/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'multiatesting.in',
        port: '',
        pathname: '/elcom-powerstrip/**',
      },
    ],
  },
};

export default nextConfig;
