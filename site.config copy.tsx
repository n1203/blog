import React from 'react'
import { FaHome, FaProjectDiagram, FaCalendarTimes, FaSync } from 'react-icons/fa'
import { RiUser3Fill } from 'react-icons/ri'

const config = {
  // the site's root Notion page (required)
  // https://hyjp.notion.site/Blog-d0b2db623883476abc5b55cdb1e98560
  rootNotionPageId: 'd0b2db623883476abc5b55cdb1e98560',
  postsCollectionId: '9af3a7bbfefb40c1acce692b55f32498',
  // Test Suite  https://www.notion.so/hyjp/34efd56751ca4be49bc11aabf6ef334d?v=2c78817660b041c79a1405147368b200
  // rootNotionPageId: '067dd719a912471ea9a3ac10710e7fdf', https://hyjp.notion.site/d0b2db623883476abc5b55cdb1e98560
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '南风老胡',
  domain: 'islaohu.vercel.app',
  author: '南风老胡',
  yearStarted: 2023,

  // open graph metadata (optional)
  description: '组件世界/WidgetStore(原NotionPet)作者，目前是一名前端工程师。',

  // social usernames (optional)
  twitter: 'JunpingHu',
  github: 'n1203',
  // linkedin: 'jerrykjia',
  email: 'islaohu@gmail.com',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover:
    'https://raw.githubusercontent.com/Jkker/images/master/City%201080p.png',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/acknowledgement-legal-information': 'fcbb172be0dc41518d4907cb4e81923b',
    '/about': 'fcbb172be0dc41518d4907cb4e81923b',
    '/2023': '8aeed267453d4e65aaa5b46dc2d59241',
    // '/weakly': 'cc9327245b1b44eda2dc3e8de6628772',
    // '/snippets': 'fcbb172be0dc41518d4907cb4e81923b',
  },
  i18n: {
    'en-US': {
      dateFormat: 'MMM D, YYYY',
    },
    'zh-CN': {
      dateFormat: 'YYYY年M月D日',
    },
  },
  projects: [
    {
      title: '组件世界/WidgetStore',
      description: `使用Notion小部件可以在几分钟内使您的页面更加可视化、交互性和实用性。一个服务于 Notion 类产品、双链笔记类产品、代码托管平台「GitHub 等」、博客系统「WordPress」以及为知笔记等文本编辑器的可嵌入式小组件库。`,
      coverImage: '/images/photo-timer.svg',
      href: 'https://widgetstore.net/',
    },
    {
      title: 'Notion汉化浏览器插件',
      description: `基于reamd7提供的开源notion翻译脚本封装浏览器插件上架到各大浏览器应用市场，帮助近万名用户解决notion汉化问题。`,
      coverImage: '/images/unnamed.jpg',
      href: 'https://chrome.google.com/webstore/detail/notioncn/hmnaobgeiojplphcldmeiklgllchflpp?hl=en-US',
    },
    {
      title: '效率时代',
      description: `重构工作流，构建属于你的效率时代·`,
      coverImage: '/images/image 1.png',
      href: 'https://www.notion.pet/',
    }
  ],
  navigationLinks: [
    {
      title: 'Home',
      url: '/',
      icon: <FaHome />,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: <FaProjectDiagram />,
    },
    // {
    //   title: 'Weakly',
    //   url: '/weakly',
    //   icon: <FaCalendarTimes />,
    //   pageId: 'cc9327245b1b44eda2dc3e8de6628772',
    // },
    {
      title: '2023Plan',
      url: '/2023',
      icon: <FaSync />,
      pageId: '8aeed267453d4e65aaa5b46dc2d59241',
    },
    // {
    //   title: 'Snippets',
    //   url: '/snippets',
    //   icon: <FaCode />,
    //   pageId: 'fcbb172be0dc41518d4907cb4e81923b',
    // },
    {
      title: 'About',
      url: '/about',
      icon: <RiUser3Fill />,
      pageId: 'fcbb172be0dc41518d4907cb4e81923b',
    },
  ],
}

export default config
