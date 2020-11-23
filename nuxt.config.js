import readingTime from 'reading-time'
import { config, feed, googleAnalytics, purgeCss, sitemap } from './modules'

const isPreviewBuild = () => {
  return (
    process.env.PULL_REQUEST &&
    process.env.HEAD &&
    process.env.HEAD.startsWith('cms/blog')
  )
}

export default {
  target: 'static',

  env: {
    nodeEnv: config.nodeEnv,
    netlifyContext: config.netlifyContext,
    netlifyHead: config.repoBranch,
    isPreviewBuild: isPreviewBuild(),
    signer: config.signer,
    baseUrl: config.baseUrl,
    repoUrl: config.repoUrl,
    repoBranch: config.repoBranch,
  },

  head: {
    title: config.indexTitle,
    titleTemplate: `%s${config.baseSplitter}${config.baseTitle}`,
    meta: config.headMeta,
    link: config.headLinks,
  },

  components: true,

  css: ['@/assets/css/main.css'],

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxt/content', '@nuxtjs/feed', '@nuxtjs/sitemap'],

  content: {
    liveEdit: false,
  },

  build: {},

  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      const directories = document.dir.split('/').filter((f) => f.length > 0)
      const slug = directories[directories.length - 1]

      if (directories.includes('comments')) {
        // process comments
        document.dir = '/comments'
        document.postslug = slug
      } else if (directories.includes('blog')) {
        // for blog posts, update the slug to be based off the
        // last directory in the path
        document.slug = slug
        document.path = `/blog/${slug}`
        document.dir = '/blog'

        // calculate and add reading time to document
        document.readingTime = readingTime(document.text)
      }
    },
  },

  feed,
  googleAnalytics,
  purgeCss,
  sitemap,
}
