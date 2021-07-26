module.exports = {
  reactStrictMode: true,
  basePath: '/toolkit_ddj',
  assetPrefix: '/toolkit_ddj/',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yml-loader'
    })
    return config;
  }
}
