/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  basePath: '/jushengtin.github.io',
  assetPrefix: '/jushengtin.github.io/',
  assetPrefix: isProd
    ? 'https://jushengtin.github.io/jushengtin.github.io/'
    : undefined
}
export default nextConfig