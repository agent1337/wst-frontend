const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@custom": path.resolve(__dirname, "src/custom"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routing": path.resolve(__dirname, "src/routing"),
    },
  },
};
