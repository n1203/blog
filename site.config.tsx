import React from 'react'
import {
  FaHome,
  FaProjectDiagram,
  FaCalendarTimes,
  FaSync,
} from 'react-icons/fa'
import { RiUser3Fill } from 'react-icons/ri'

const config = {
  // the site's root Notion page (required)
  // a10df432e00a40e69307719dda272957
  rootNotionPageId: 'a10df432e00a40e69307719dda272957',
  // https://www.notion.so/300a6e48ae044c3585b2fda4b75e26a3?v=9df8dd772d14433aaa5c1863f189857f&pvs=4
    // https://www.notion.so/hyjp/300a6e48ae044c3585b2fda4b75e26a3?v=9df8dd772d14433aaa5c1863f189857f&pvs=4
  // 
  postsCollectionId: 'b7403b94ce54431e9d27dde1674597ec',
  // https://www.notion.so/300a6e48ae044c3585b2fda4b75e26a3?v=9df8dd772d14433aaa5c1863f189857f&pvs=4
  // 046e539cfcd04dad8704d00994d66bed
  // Test Suite  https://www.notion.so/hyjp/34efd56751ca4be49bc11aabf6ef334d?v=2c78817660b041c79a1405147368b200
  // rootNotionPageId: '067dd719a912471ea9a3ac10710e7fdf', https://hyjp.notion.site/d0b2db623883476abc5b55cdb1e98560
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '南风老胡',
  domain: 'laohu.notion.pet',
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
    '/acknowledgement-legal-information': '1f7e5c19a9b646948836a76fdac45c6b',
    '/about': '1f7e5c19a9b646948836a76fdac45c6b', // https://hyjp.notion.site/1f7e5c19a9b646948836a76fdac45c6b
    '/2023': '4d38e4cadd934215977f7ff2532406a8', // https://hyjp.notion.site/2023-4d38e4cadd934215977f7ff2532406a8
    '/weakly': '3b524e549cf44525a10a3480c6e7d1a7', // https://hyjp.notion.site/3b524e549cf44525a10a3480c6e7d1a7
    // '/snippets': '1f7e5c19a9b646948836a76fdac45c6b',
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
    },
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
    {
      title: 'Weakly',
      url: '/weakly',
      icon: <FaCalendarTimes />,
      pageId: '3b524e549cf44525a10a3480c6e7d1a7',
    },
    {
      title: '2023Plan',
      url: '/2023',
      icon: <FaSync />,
      pageId: '4d38e4cadd934215977f7ff2532406a8',
    },
    // {
    //   title: 'Snippets',
    //   url: '/snippets',
    //   icon: <FaCode />,
    //   pageId: '1f7e5c19a9b646948836a76fdac45c6b',
    // },
    {
      title: 'About',
      url: '/about',
      icon: <RiUser3Fill />,
      pageId: '1f7e5c19a9b646948836a76fdac45c6b',
    },
  ],
}

export default config
