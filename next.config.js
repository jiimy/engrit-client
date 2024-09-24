/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // output: "export",
  // distDir: "out",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
    prependData: `@import "_mixins.scss"; @import "_variables";`,
  },
};

module.exports = nextConfig;
// export default nextConfig;
