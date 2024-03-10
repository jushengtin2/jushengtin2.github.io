const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  basePath: isProd ? '/jushengtin.github.io' : '',
  assetPrefix: isProd ? 'https://jushengtin.github.io/jushengtin.github.io/' : '',
};

export default nextConfig;
