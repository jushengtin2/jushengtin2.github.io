/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  basePath: "/jushengtin.github.io",
  assetPrefix: "https://jushengtin.github.io/jushengtin.github.io/"
}
export default nextConfig