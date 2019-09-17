module.exports = {
  base: '/',
  title: '小徐_2333',
  description: '前端杂技师的自我修养',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: 'reform',
  themeConfig: {
    tags: "tags",
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    displayAllHeaders: "true",
    nav: [{
        text: "主页",
        link: '/',
        icon: 'jia',
      },
      {
        text: "学习日志",
        icon: 'zhi',
        items: [{
          text: "前端",
          link: "/article/FE/"
        }]
      },
      {
        text: "开源推荐",
        icon: 'shuben',
        items: [{
          text: "开源工具",
          link: "/article/OSR/"
        }]
      },
      {
        text: "日常生活",
        icon: 'shijianjilu',
        items: [{
          text: "生活日志",
          link: "/article/LLOG/"
        }]
      }, {
        text: "标签",
        link: '/tags/',
        tags: true
      },
      {
        text: "GitHub",
        link: 'https://github.com/Moonofweisheng',
      }
    ],
    // gitalk: {
    //   clientID: `bca8bfaddadc3b4da87d`,
    //   clientSecret: `962a6097a0ad1e9f9a17a67c4c2c342802ce77fa`,
    //   repo: `https://github.com/Moonofweisheng/Moonofweisheng.github.io`,
    //   owner: "Moonofweisheng",
    //   admin: ["小徐_233"],
    //   labelRule: `(title,path)=> {
    //     let paths=path.split('/')
    //     if(paths.length>0){
    //       let res = paths.pop()
    //       if(res===''){
    //         res=paths.pop()
    //       }
    //       res = res.slice(-50)
    //       return res
    //     }else{
    //       return title
    //     }
    //   }`
    // },
  }
}