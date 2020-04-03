"use strict";

module.exports = {
  plugins: [
    require("remark-frontmatter"),
    require("remark-preset-lint-recommended"),
    require("remark-validate-links"),
    require("remark-preset-prettier"),
  ],
};
