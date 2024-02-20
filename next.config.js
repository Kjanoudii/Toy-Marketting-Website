/* eslint-disable no-undef */
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add loader for mp4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
          },
        },
      ],
    });

    // For server-side rendering of mp4 files
    if (isServer) {
      config.module.rules.push({
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/videos/[name].[ext]",
              publicPath: "/_next/",
            },
          },
        ],
      });
    }

    return config;
  },
  images: {
    domains: ["api.toymarkettrading.com"], // Add your domain here
  },
};
