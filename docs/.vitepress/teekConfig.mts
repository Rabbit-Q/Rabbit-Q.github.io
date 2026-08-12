// .vitepress/teekConfig.mts
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { HitokotoData } from "./config/HitokotoData";

// Teek 主题配置，所有 Teek 配置都放到 ... 中
export const teekConfig = defineTeekConfig({
    // 加载动画配置
    loading: "正在努力加载中……",

    vpHome: false,

    //深色浅色切换动画设置
    viewTransition: {
        enabled: true, // 是否启用深浅色切换动画效果
        mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
        duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
        easing: "ease-in", // 缓动函数
    },

    //重新回到顶部按钮
    backTop: {
        enabled: true, // 是否启动回到顶部功能
        content: "progress", // 回到顶部按钮的显示内容，可选配置 progress | icon
        done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
    },

    toComment: {
        enabled: false, // 是否启动滚动到评论区功能
        done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
    },

    //新版代码块配置
    codeBlock: {
        enabled: true, // 是否启用新版代码块
        collapseHeight: 300, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
        overlay: false, // 代码块底部是否显示展开/折叠遮罩层
        langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
        copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
    },

    //主题增强
    themeEnhance: {
        enabled: true, // 启用主题增强功能
        position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
        // 布局切换配置
        layoutSwitch: {
            disabled: false, // 禁用布局切换
        },
        // 布局主题色配置
        themeColor: {
            disabled: false, // 禁用布局主题色切换
            defaultColorName: "vp-default", // 布局默认主题色
            defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
            disableHelp: false, // 禁用帮助提示
            disabledInMobile: false, // 是否在移动端禁用
        },
        // 聚光灯配置
        spotlight: {
            disabled: false, // 禁用聚光灯
            defaultStyle: "aside", //  聚光灯默认样式
        },
    },

    //默认作者信息
    author: {
        name: "Jabin W.",
    },

    //站点统计
    siteAnalytics: [
        // {
        // provider: "google",
        // options: {
        //     id: "******",
        // },
        // },
        // {
        // provider: "baidu",
        // options: {
        //     id: "******",
        // },
        // },
        // {
        // provider: "umami",
        // options: {
        //     id: "******",
        //     src: "**",
        // },
        // },
    ],

    //文章列表
    post: {
        postStyle: "list", // 文章列表风格
        excerptPosition: "top", // 文章摘要位置
        showMore: true, // 是否显示更多按钮
        moreLabel: "阅读全文 >", // 更多按钮文字
        emptyLabel: "暂无文章", // 文章列表为空时的标签
        coverImgMode: "default", // 文章封面图模式
        showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
        splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
        transition: true, // 是否开启过渡动画
        transitionName: "tk-slide-fade", // 自定义过渡动画名称
        listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
        cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
        defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
    },

    //文章列表分页
    page: {
        disabled: false, // 是否禁用
        pageSize: 20, // 每页显示条目数
        pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
        layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
        size: "default", // 分页大小
        background: false, // 是否为分页按钮添加背景色
        hideOnSinglePage: false, // 只有一页时是否隐藏
    },

    //博主信息
    blogger: {
        name: "Jabin W.", // 博主昵称
        slogan: "路是自己走出来的，无需羡慕他人的轨迹。", // 博主签名
        avatar: "./avatar/avatar.png", // 博主头像
        shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
        circleBgImg: "./blogCover/blogger-card-background.png", // 背景图片
        circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
        circleSize: 100, // 头像大小
        color: "#ffffff", // 字体颜色
        // 状态，仅当 shape 为 circle 相关值时有效
        status: {
            icon: "🥱", // 状态图标
            size: 24, // 图标大小
            title: "冷静", // 鼠标悬停图标的提示语
        },
    },
    
    //友链关闭
    friendLink: {
        enabled: false,
    },

    social: [
        {
            icon: "mdi:github",
            name: "GitHub",
            link: "https://github.com/GinoWi",
        },
    ],

    //首页banner信息
    banner: {
        enabled: true,
        mask: false,
        name: "Jabin W's Blog",
        bgStyle: "fullImg",
        imgInterval: 8000, // 轮播时间
        imgShuffle: false, // 当多张大图时（imgSrc 为数组），设置切换时间，单位：毫秒
        imgSrc: "/blogCover/light-background-image.jpg",
        descStyle: "types",
        textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 default 时为 '#000000'，其他为 '#ffffff'
        titleFontSize: "3.2rem", // 标题字体大小
        descFontSize: "1.4rem", // 描述字体大小
        description: HitokotoData, //  打字机描述信息
        switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
        switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
        typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
        typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
        typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
        typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    },

    vitePlugins: {
        sidebar: true, // 是否开启侧边栏
        sidebarOption: {
            initItems: false, // 是否初始化第一层 items
            // ignoreList: ["nav"], //忽略的文件夹和文件
            ignoreWarn: true, // 忽略警告
            collapsed: true, // 是否默认折叠侧边栏
            resolveRule: "rewrites",
            // 检查同目录下前缀不同的文件（以同目录访问到的第一个文件的permalink的一级前缀作为基准）
            checkRewritesPrefix: true
        },

        autoFrontmatter: true, // 自动生成 frontmatter
        // autoFrontmatterOption: {
        //     // 同名key覆盖
        //     recoverTransform: false,
        //     // 是否开启自动生成 categories
        //     categories: true,
        //     // 是否开启添加文档封面图
        //     enableCoverImg: true,
        //     // 是否开启强制覆盖封面图
        //     enableForceCoverImg: true,
        //     // 封面图列表
        //     coverImgList: ['./light-background-image.jpg'],
        //     // 是否开启生成永久链接
        //     enablePermalink: false,
        //     // 处理永久链接的规则
        //     permalinkRules: [
        //         //{ folderName: "01.指南/01.简介/", prefix: "/$path-$uuid2/teek/$uuid1/$uuid", removeLevel: 99 }, // 添加前缀
        //         { folderName: "01.前端/01.vite",  removeLevel: 1 }
        //     ],
        //     // 是否开启处理时区
        //     enableHandleTimezone: true
        //  },
    },

    breadcrumb: {
        enabled: true, // 是否启用面包屑
        showCurrentName: true, // 面包屑最后一列是否显示当前文章的文件名
        separator: "/", // 面包屑分隔符
        homeLabel: "首页", // 鼠标悬停首页图标的提示文案
    },
    
});