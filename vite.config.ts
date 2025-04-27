import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      "@": "/src/", // 设置@指向src
      "@components": "/src/components", // 设置@components指向src/components
    },
  },
  build: {
    reportCompressedSize: true, // 打包后显示压缩后的文件大小
  },
});
