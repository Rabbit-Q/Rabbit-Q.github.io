import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {

  //公告栏
  notice: {
    enabled: false,
    position: "center",
  },  
};

// 博客配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },

  blogger: {
    avatar: "/logo.png",
    shape: "circle",
    name: "福兔",
    slogan: "(?",
    circleBgMask: false,
    color: "#fff",
  },

  // 文章
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    // dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签

    // imageViewer: {
    //   hideOnClickModal: true,
    // },    
  },  
  // 设置主题尺寸
  // themeSetting: {
  //   themeSize: "large",
  // },

  
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
        {
          avatar: "/teek-logo-large.png",
          name: "Teek",
          desc: "一個好看的 VitePress 主題",
          link: "https://vp.teek.top/",
        },
        {
          avatar: "/img/friends/hyde-logo.ico",
          name: "Hyde Blog",
          desc: "人心中的成见是一座大山",
          link: "https://teek.seasir.top/",
        },
      ], // 友情链接数据列表
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    titleClick: router => router.go("/friendLink"), // 查看更多友链
  },


  // 社交链接
  social: [
    
  ],
};

export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "小奇 Blog",
    description: "分享生活 笔记写作 情绪表达",
  },
};

export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "小奇 Blog",
    bgStyle: "partImg",
    imgSrc: ["/bg1.jpg"],
    description: [
      "分享生活 笔记写作 情绪表达",
      "一个不知道自己想写什么的人",
      "单纯的想留点什么东西",
    ],
    descStyle: "switch",
  },
};

export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    imageViewer: { hideOnClickModal: true },
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "小奇 Blog",
    bgStyle: "fullImg",
    imgSrc: ["/bg1.jpg"],
    description: [
      "分享生活 笔记写作 情绪表达",
      "一个不知道自己想写什么的人",
      "单纯的想留点什么东西",
    ],
    descStyle: "types",
  },
};

export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    imageViewer: { hideOnClickModal: true },
    coverImgMode: "full",
  },
  banner: {
    name: "小奇 Blog",
    bgStyle: "fullImg",
    imgSrc: ["/bg1.jpg"],
    description: [
      "分享生活 笔记写作 情绪表达",
      "一个不知道自己想写什么的人",
      "单纯的想留点什么东西",
    ],
    descStyle: "types",
  },

  comment: {
    // provider: "giscus",
    provider: "twikoo",
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://twikoo.onedayxyy.cn/",

      // waline 配置，官网：https://waline.js.org/
      // serverURL: "https://tk.waline.youngkbt.cn/",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "Kele-Bingtang/vitepress-theme-kt",
      // repoId: "R_kgDONpVfBA",
      // category: "Announcements",
      // categoryId: "DIC_kwDONpVfBM4Cm3v9",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "",
      // site: "",
    },
  },

  //公告栏
  notice: {
    enabled: false,
    position: "center",
  },
};

export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["/bg1.jpg"],
  },
};