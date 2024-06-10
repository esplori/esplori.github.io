import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '屈桓语的小站',
  description: '屈桓语的小站',
  base: './',
  head: [
    ["link",{rel: "stylesheet",href:"/css/index.css"}]
  ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: '三岁生日',
        link: '/post/birthday',
      },
      {
        text: '在公园玩',
        link: '/post/toPark',
      },
      {
        text: '又来动物园了',
        link: '/post/zooAgain',
      },
      {
        text: '快乐五一',
        link: '/post/2023wuyi',
      },
      {
        text: '转眼四岁了',
        link: '/post/4sui',
      },
    ]
  }),
})