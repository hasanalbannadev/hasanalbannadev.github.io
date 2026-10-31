/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/hasan_al_banna',
  assetPrefix: '/hasan_al_banna',
};

export default nextConfig;