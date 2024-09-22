import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wsqy-lint/",
  title: "wsqy-lint",
  description: "文思泉永 lint 工具包ttt",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      {
        text: "编码规范",
        items: [
          {
            text: "HTML编码规范",
            link: "/spec/html",
          },
          {
            text: "CSS编码规范",
            link: "/spec/css",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lankongmoxing/wsyq-lint" },
    ],
  },
});
