import { defineNuxtConfig } from 'nuxt3'

const isProduction = (): boolean => {
	return process.env.CONTEXT && process.env.CONTEXT === 'production'
}

const isPreviewBuild = (): boolean => {
	return process.env.PULL_REQUEST !== undefined
}

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  dev: true,
  
  router: {
    trailingSlash: true
  },
  
  build: {
      postcss: {
          postcssOptions: {
              plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
              }
          }
      },
  }
})
