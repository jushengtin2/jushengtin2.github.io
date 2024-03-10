const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  basePath: isProd ? '/jushengtin2.github.io' : '',
  assetPrefix: isProd ? 'https://jushengtin2.github.io/jushengtin2.github.io/' : '',
};

export default nextConfig;
