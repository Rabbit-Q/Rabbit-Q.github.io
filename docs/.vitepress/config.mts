import { defineConfig } from 'vitepress'
import { teekConfig } from "./teekConfig.mts";
import { Nav } from "./config/Nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jabin W's Blog",

  base: "/JabinWei-vitepress-teek-blog",

  themeConfig: {

    logo: "./avatar/avatar.png",

    //导航栏信息
    nav: Nav,

    //文章大纲
    outline: {
      level: [2, 6],
    }
  },

  extends: teekConfig,
})
