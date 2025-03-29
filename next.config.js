// next.config.js
'use strict';



/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io"],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [
      {
        source: '/(.*).(jpg|jpeg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/(.*).(woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      config.optimization.usedExports = true;

      if (config.optimization.minimizer) {
        config.optimization.minimizer.forEach((minimizer) => {
          if (minimizer.constructor.name === 'TerserPlugin') {
            minimizer.options.terserOptions.compress.drop_console = true;
          }
        });
      }
    }
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    config.module.rules.push({
      test: /\.(jpe?g|png)$/i, // Exclude SVG by removing it from this test
      use: [
        {
          loader: 'responsive-loader',
          options: {
            adapter: require('sharp'),
            sizes: [320, 640, 960, 1200, 1800, 2400],
            placeholder: true,
            placeholderSize: 20,
            quality: 70,
            format: 'webp',
            name: 'static/media/[name]-[width].[hash:8].[ext]',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    });


    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 244 * 1024,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    return config;
  },
};

module.exports = nextConfig;