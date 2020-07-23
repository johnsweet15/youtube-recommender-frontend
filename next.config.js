const withLess = require("@zeit/next-less");
module.exports = withLess({
  webpack(config, options) {
    config.module.rules.push({
      test: /.less/,
      use: [
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return config;
  },
});
