// 确保项目支持 ES6 模块
import postcssNested from "postcss-nested";
import cssnano from "cssnano";

module.exports = {
  plugins: [
    postcssNested,
    cssnano({
      preset: "default",
    }),
  ],
};
