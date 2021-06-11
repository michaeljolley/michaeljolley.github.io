import readingTime from 'reading-time'
import { $airtable, $cloudinary, $youtube } from './middleware'
import {
	cloudinary,
	config,
	feed,
	fontawesome,
	googleAnalytics,
	purgeCss,
	sitemap,
	tailwindcss,
} from './modules'

const isProduction = () => {
	return process.env.CONTEXT && process.env.CONTEXT === 'production'
}

const isPreviewBuild = () => {
	return process.env.PULL_REQUEST
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

	router: {
		trailingSlash: true,
	},

	head: {
		htmlAttrs: {
			lang: 'en',
		},
		title: config.indexTitle,
		titleTemplate: `%s${config.baseSplitter}${config.baseTitle}`,
		meta: config.headMeta,
		link: config.headLinks,
	},

	components: true,

	css: [],

	buildModules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/eslint-module',
		'@nuxtjs/google-analytics',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
		$youtube,
		$airtable,
	],

	modules: [
		'@nuxtjs/cloudinary',
		'@nuxt/content',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
		'vue-social-sharing/nuxt',
		'@nuxtjs/proxy',
	],

	content: {
		liveEdit: false,
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-material-dark.css',
			},
		},
	},

	build: {},

	generate: {
		crawler: isProduction(),
		fallback: true,
		async routes() {
			const { $content } = require('@nuxt/content')
			const posts = await $content('blog').fetch()
			const talks = await $content('talks').fetch()
			const events = await $content('events').fetch()
			const videos = await $content('videos').fetch()
			const meetups = await $content('meetups').fetch()

			const bodyParser = (body) => {
				const results = []
				if (body.children) {
					body.children.forEach((child) => results.push(...bodyParser(child)))
				} else if (body.type === 'text') {
					results.push(body.value)
				}
				return results
			}

			return [
				...talks.map((talk) => {
					const talkEvents = events.filter((f) => f.talk === talk.slug)
					return {
						route: `/talks/${talk.slug}/`,
						payload: { talk, events: talkEvents },
					}
				}),
				...posts.map((post) => {
					return {
						route: `/blog/${post.slug}/`,
						payload: post,
					}
				}),
				...meetups.map((meetup) => {
					return {
						route: `/community/${meetup.slug}/`,
						payload: meetup,
					}
				}),
				...[
					{
						route: '/blog/',
						payload: {
							posts: posts
								.filter((f) => new Date(f.date) < Date.now())
								.sort((a, b) => {
									return new Date(b.date) - new Date(a.date)
								})
								.slice(0, 12),
						},
					},
				],
				...[
					{
						route: '/talks/',
						payload: {
							talks: talks.slice(0, 12),
						},
					},
				],
			]
		},
	},

	cloudinary,
	feed,
	fontawesome,
	googleAnalytics,
	purgeCss,
	sitemap,
	tailwindcss,

	proxy: {
		'/api': `${config.functionsUrl}/.netlify/functions`,
	},

	purgeCSS: {},

	plugins: ['~/plugins/scroll.client.js', '~/plugins/formatDate.js'],

	hooks: {
		'content:file:beforeInsert': async (document, database) => {
			const directories = document.dir.split('/').filter((f) => f.length > 0)
			const slug = directories[directories.length - 1]

			if (directories.includes('comments')) {
				// process comments
				document.dir = '/comments'
				document.postslug = slug
			} else if (
				directories.includes('blog') ||
				directories.includes('talks') ||
				directories.includes('events')
			) {
				let type
				if (directories.includes('blog')) {
					type = 'blog'
				} else if (directories.includes('talks')) {
					type = 'talks'
				} else {
					type = 'events'
				}

				// Copy images to assets directory for optimization
				// and update the img tags with the new paths
				await $cloudinary.copyAssets(document, slug, __dirname)

				// for blog posts, update the slug to be based off the
				// last directory in the path
				document.slug = slug
				document.path = `/${type}/${slug}`
				document.dir = `/${type}`

				// calculate and add reading time to document
				if (document.text) {
					document.readingTime = readingTime(document.text)
				}
			}
		},
	},
}
