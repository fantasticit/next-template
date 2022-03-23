const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
const antdVariablesFilePath = path.resolve(__dirname, "./antd-custom.less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {},
  webpack: (config, { dev, isServer }) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          additionalData: (content) =>
            `${content}\n\n@import '${antdVariablesFilePath}';`,
        },
      },
    ],
  ],
  nextConfig
);
