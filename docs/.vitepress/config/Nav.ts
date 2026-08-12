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
    text: "🚲生活",
    link: "/Live/Liveone/",
    items: [

    ],
  },
  {
    text: "📒笔记",
    link: "/Note/Noteone/",
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