module.exports = {
  base: '/vuepress-learn/',
  title: 'hello vuepress',
  description: 'just playing around',

  themeConfig: {
    repo: 'ddsomav8/vuepress-learn',
    nav: [
      {
        text: '正文',
        link: '/art/'
      }
    ],
    sidebar: {
      '/art/': [
        {
          title: '我是标题',
          children: [
            '',
            '1'
          ]
        }
      ]
    }
  }
}
