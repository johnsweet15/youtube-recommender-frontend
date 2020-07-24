const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(
  withSass(
    withLess({
      webpack(config) {
        config.module.rules.push({
          test: /.less/,
          exclude: /node_modules/,
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
    })
  )
);
