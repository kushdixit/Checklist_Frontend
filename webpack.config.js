const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // your webpack config is here
  plugins: [new BundleAnalyzerPlugin()],
};
