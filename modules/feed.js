import config from './config'

export default () => {
	const { $content } = require('@nuxt/content')

	const feedFormats = {
		rss: { type: 'rss2', file: 'rss.xml' },
		json: { type: 'json1', file: 'feed.json' },
	}

	const getMainFeeds = () => {
		const createFeedArticles = async function (feed) {
			feed.options = {
				title: `${config.indexTitle} » ${config.baseTitle}`,
				link: `${config.baseUrl}/blog`,
				description: config.baseDescription,
			}

			const posts = await $content('blog')
				.sortBy('date', 'desc')
				.limit(30)
				.fetch()

			posts.forEach((post) => {
				feed.addItem({
					title: post.title,
					id: post.slug,
					date: new Date(post.updatedAt || post.createdAt),
					link: `${config.baseUrl}/blog/${post.slug}`,
					description: post.description,
					content: post.description,
				})
			})
		}

		return Object.values(feedFormats).map(({ file, type }) => ({
			path: `${file}`,
			type,
			create: createFeedArticles,
		}))
	}

	return [...getMainFeeds()]
}
