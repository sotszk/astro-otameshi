const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      postcssCustomMedia: true,
      postcssNesting: true,
    }),
  ],
};
