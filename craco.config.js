const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@custom": path.resolve(__dirname, "src/custom"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@images": path.resolve(__dirname, "public"),
    },
  },
};
