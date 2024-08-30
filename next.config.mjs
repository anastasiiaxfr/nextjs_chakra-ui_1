/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Remove existing SVG loader
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    if (fileLoaderRule) {
      config.module.rules.splice(config.module.rules.indexOf(fileLoaderRule), 1);
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
