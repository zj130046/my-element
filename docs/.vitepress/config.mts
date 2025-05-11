import { defineConfig } from "vitepress"; //定义 VitePress 项目的配置对象
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  title: "Element",
  description: "A VitePress Site",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "指南", link: "/" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "基础",
        items: [
          { text: "按钮 Button", link: "/components/button" },
          { text: "布局容器 Container", link: "/components/container" },
          { text: "图标 Icon", link: "components/icon" },
          { text: "链接 Link", link: "/components/link" },
        ],
      },
      {
        text: "反馈",
        items: [
          { text: "反馈 Alert", link: "/components/alert" },
          { text: "消息提示 Message", link: "/components/message" },
          { text: "消息弹出框 MessageBox", link: "/components/messagebox" },
        ],
      },
      {
        text: "数据输入",
        items: [
          { text: "开关 Switch", link: "components/switch" },
          { text: "评分 Rate", link: "components/rate" },
          { text: "输入框 Input", link: "components/input" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  //在 Markdown 中支持组件预览功能
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  base: "/",
});
