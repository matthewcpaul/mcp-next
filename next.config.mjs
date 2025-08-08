/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add video optimization webpack config
  webpack: (config, { isServer }) => {
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  
  // Future: Add video compression during build
  // This would require custom webpack loaders for video processing
  
  // Enable static file serving optimizations
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;