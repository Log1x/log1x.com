module.exports = {
  siteName: 'Log1x',
  siteDescription: "Brandon Nifong",
  siteUrl: 'https://log1x.com',
  titleTemplate: `%s | Log1x`,
  icon: '/favicon-32x32.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Darker' }]
      ]
    }
  },

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
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: { id: 'UA-40315702-1' },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: { cacheTime: 600000 },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Log1x',
          feed_url: 'https://log1x/feed.xml',
          site_url: 'https://log1x.com',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://log1x.com' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
  ],

  templates: {
    Post: '/:title',
  },
}
