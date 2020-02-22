module.exports = {
  siteName: 'Log1x',
  siteDescription: 'Brandon Nifong',
  siteUrl: 'https://log1x.com',
  titleTemplate: `%s | Log1x`,
  icon: '/favicon-32x32.png',

  plugins: [
    { use: 'gridsome-plugin-tailwindcss' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: { id: 'UA-40315702-1' }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: { cacheTime: 600000 }
    }
  ],
  templates: {
    Post: '/:title'
  },
  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-shiki',
          {
            theme: 'Material-Theme-Darker',
            skipInline: true
          }
        ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  }
}
