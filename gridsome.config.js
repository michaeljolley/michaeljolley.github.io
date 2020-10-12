const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/_sass/*.scss')
      ],
    })
}

module.exports = {
  siteName: 'Bald. Bearded. Builder.',
  siteUrl: 'https://baldbeardedbuilder.com',
  siteDescription: 'Michael is the bald, bearded builder. Using his 20 years experience in software development and DevOps, this follicly challenged developer spends his days focused on helping others succeed.',
  templates: {
    Post: '/posts/:title',
    Tag: '/tags/:title',
    Talk: '/talks/:title'
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-81841605-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/posts/**/*.md',
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
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Comment',
        path: './content/comments/**/*.yml'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Talk',
        path: './content/talks/**/*.md'
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post', 'Talk'],
        feedOptions: {
          title: "Bald Bearded Builder",
          description: 'Michael is the bald, bearded builder. Using his 20 years experience in software development and DevOps, this follicly challenged developer spends his days focused on helping others succeed.',
          link: 'https://baldbeardedbuilder.com/',
          language: 'en'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        htmlFields: ['description', 'content'],
        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: true,
        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        filterNodes: (node) => true,
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          author: 'Michael Jolley',
          content: node.content
        })
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        config: {
          "/posts/*": {
            changefreq: "daily",
            priority: 0.6
          },
          "/about/": {
            changefreq: "monthly",
            priority: 0.7
          },
          "/codeofconduct/": {
            changefreq: "monthly",
            priority: 0.7
          },
          "/talks/": {
            changefreq: "daily",
            priority: 0.4
          },
          "/talks/*": {
            changefreq: "weekly",
            priority: 0.6
          }
        }
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
