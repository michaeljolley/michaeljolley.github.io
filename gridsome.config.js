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
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-81841605-1'
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: [
          './src/assets/_sass/_variables.scss',
          './src/assets/_sass/_reset.scss',
          './src/assets/_sass/_general.scss',
          './src/assets/_sass/_icons.scss',
          './src/assets/_sass/_comments.scss',
          './src/assets/_sass/_syntax.scss',
        ]
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
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
        typeName: 'Stream',
        path: './content/streams/**/*.md'
      }
    }
  ],
  templates: {
    Post: [
      {
        path: '/posts/:title',
        component: './src/templates/Post.vue'
      }
    ],
    Stream: [
      {
        path: '/streams/:title',
        component: './src/templates/Stream.vue'
      }
    ]
  },
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
