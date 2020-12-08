import path from 'path'
import readingTime from 'reading-time'
import { $cloudinary } from './middleware'
import {
	cloudinary,
	config,
	feed,
	fontawesome,
	googleAnalytics,
	purgeCss,
	sitemap,
} from './modules'

const isPreviewBuild = () => {
	return (
		process.env.PULL_REQUEST &&
		process.env.HEAD &&
		process.env.HEAD.startsWith('cms/blog')
	)
}

const copyAssets = async (document, slug) => {
	const reviewTag = async (el) => {
		if (el.tag && el.tag === 'v-image') {
			const filename = el.props.src.replace('./', '')
			const publicId = `${slug}-${filename.replace(path.extname(filename), '')}`

			const imagePath = path.join(__dirname, 'content', document.dir, filename)

			const asset = await getAsset(imagePath, publicId)
			el.props.src = asset.public_id
		}

		if (el.children) {
			for (let i = 0; i < el.children.length; i++) {
				await reviewTag(el.children[i])
			}
		}
	}

	const getAsset = async (coverPath, publicId) => {
		return await $cloudinary.getAsset(coverPath, publicId)
	}

	// load cover image if needed
	if (document.cover && document.cover.startsWith('./')) {
		const publicId = `${slug}-cover`
		const coverPath = path.join(
			__dirname,
			'content',
			document.dir,
			document.cover.replace('./', '')
		)
		document.cover = await getAsset(coverPath, publicId)
	}

	document.body.children.forEach((el) => {
		reviewTag(el)
	})
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

	css: [],

	buildModules: [
		'@nuxtjs/dotenv',
		'@nuxtjs/eslint-module',
		'@nuxtjs/google-analytics',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
	],

	modules: [
		'@nuxtjs/cloudinary',
		'@nuxt/content',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
	],

	content: {
		liveEdit: false,
	},

	build: {},

	cloudinary,
	feed,
	fontawesome,
	googleAnalytics,
	purgeCss,
	sitemap,

	tailwindcss: {
		exposeConfig: true,
	},
	purgeCSS: {
		whitelist: ['dark-mode'],
	},

	plugins: ['~/directives/scroll.client.js'],

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
				directories.includes('talks')
			) {
				const type = directories.includes('blog') ? 'blog' : 'talks'

				// Copy images to assets directory for optimization
				// and update the img tags with the new paths
				await copyAssets(document, slug)

				// for blog posts, update the slug to be based off the
				// last directory in the path
				document.slug = slug
				document.path = `/${type}/${slug}`
				document.dir = `/${type}`

				// calculate and add reading time to document
				document.readingTime = readingTime(document.text)
			}
		},
	},
}
