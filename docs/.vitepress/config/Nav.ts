// nav导航栏配置
import { 
    bookMark
} from "./Svgicons"

export const Nav = [
  {
    text: "🏡首页",
    link: "/",
  },
  {
    text: "⚙️计算机基础知识",
    link: "01.计算机基础知识",
  },
  { 
    text: "💬人工智能", 
    link: "02.人工智能技术",
  },
  { 
    text: "🌏网络安全", 
    link: "03.网络安全技术",
  },
  { 
    text: "💾Java全栈", 
    link: "04.Java全栈开发技术",
  },
  {
    text: "📝基础学科",
    items: [
        { text: "📐数学", link: "05.数学" },
        { text: "📰英语", link: "06.英语" }
    ]
  },
  {
    text: "🚲生活",
    items: [

    ],
  },
  {
    text: "📒笔记",
    link: '30.笔记',
  },
  {
    text: "👏功能页",
    items: [
          { text: "🗂文章分类", link: "/categories/" },
          { text: "🏷文章标签", link: "/tags/" },
          { text: "📎文章归档", link: "/archives/" },
          { text: "🧾文章清单", link: "/articleOverview/" },
    ],
  },
  {
    text: "🌐站点信息",
    items: [
      {
        component: "关于我",
        // props: AboutIcon,
      },
      {
        component: "NavIcon",
        // props: LinkIcon,
      },
    ],
  },
];