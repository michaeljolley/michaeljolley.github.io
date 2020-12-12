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
	tailwindcss,
} from './modules'

const isPreviewBuild = () => {
	return (
		process.env.PULL_REQUEST &&
		process.env.HEAD &&
		process.env.HEAD.startsWith('cms/blog')
	)
}

const loadCover = async (document, slug, root) => {
	// load cover image if needed
	if (document.cover && document.cover.startsWith('./')) {
		const publicId = `${slug}-${document.cover
			.replace('./', '')
			.replace(path.extname(document.cover), '')}`
		const coverPath = path.join(
			root,
			'content',
			document.dir,
			document.cover.replace('./', '')
		)

		document.cover = await $cloudinary.getAsset(coverPath, publicId)
		document.cover.secure_url = document.cover.secure_url.replace(
			'/image/upload/',
			'/image/upload/f_auto,q_auto,w_1200,h_600,c_fit/'
		)
	}
}

const loadOgraph = async (document, slug, root) => {
	// load ograph image if needed
	if (document.ograph && document.ograph.startsWith('./')) {
		const publicId = `${slug}-${document.ograph
			.replace('./', '')
			.replace(path.extname(document.ograph), '')}`
		const ographPath = path.join(
			root,
			'content',
			document.dir,
			document.ograph.replace('./', '')
		)

		document.ograph = await $cloudinary.getAsset(ographPath, publicId)
		document.ograph.secure_url = document.ograph.secure_url.replace(
			'/image/upload/',
			'/image/upload/f_auto,q_auto,w_1200,h_600,c_fit/'
		)
	}
}

const copyAssets = async (document, slug, root) => {
	const reviewTag = async (el) => {
		if (el.tag && el.tag === 'v-image') {
			const filename = el.props.src.replace('./', '')
			const publicId = `${slug}-${filename.replace(path.extname(filename), '')}`

			const imagePath = path.join(
				root,
				'content',
				document.path.replace('/index', ''),
				filename
			)

			const asset = await $cloudinary.getAsset(imagePath, publicId)
			el.props.src = asset.public_id
		}

		if (el.children) {
			for (let i = 0; i < el.children.length; i++) {
				await reviewTag(el.children[i])
			}
		}
	}

	await loadCover(document, slug, root)
	await loadOgraph(document, slug, root)

	if (document.body && document.body.children) {
		document.body.children.forEach((el) => {
			reviewTag(el)
		})
	}
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
		'@forked-prs/nuxt-infinite-scroll-module',
		'@nuxtjs/cloudinary',
		'@nuxt/content',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
		'vue-social-sharing/nuxt',
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

	cloudinary,
	feed,
	fontawesome,
	googleAnalytics,
	purgeCss,
	sitemap,
	tailwindcss,

	purgeCSS: {},

	plugins: ['~/directives/scroll.client.js', '~/plugins/formatDate.js'],

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
				await copyAssets(document, slug, __dirname)

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
