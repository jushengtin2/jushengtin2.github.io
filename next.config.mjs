const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  basePath: isProd ? '' : '', // 如果你的网站是在根域名部署，这里应该为空
  assetPrefix: isProd ? 'https://jushengtin2.github.io/' : '',
  images: {
    unoptimized: true, // Add this line to disable image optimization
  },
};

export default nextConfig;
