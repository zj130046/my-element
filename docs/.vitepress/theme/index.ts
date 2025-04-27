// 从 VitePress 的默认主题中导入 DefaultTheme
import DefaultTheme from "vitepress/theme";
import {
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "../../../src/styles/index.css";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", NaiveUIContainer);
  },
};
