const { resolve } = require('path');
const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: '基础',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Icon 图标', link: '/components/icon/' },
      ],
    },
    { text: '布局',
    items:[
      { text: 'container 布局容器', link: '/components/container/' },
      { text: 'Layout 布局', link: '/components/layout/' },
      { text:'Space 间距',link:'/components/space/'}
    ]
  },
    // { text: '导航', items: [] },
    // { text: '反馈', items: [] },
    {
      text: '数据录入',
      items: [{ text: 'Input 输入框', link: '/components/input/' }]
    },
    { text: '数据展示', items: [
      { text: 'Tree 树', link: '/components/tree/' },
      { text: 'Tag 标签', link: '/components/tag/' },
      { text: 'ShowMore 显示更多', link: '/components/showMore/' }
    ] }

  ]
}

export default {
  themeConfig: {
    lang: 'zh-CN',
    sidebar
  },
  
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }

}
