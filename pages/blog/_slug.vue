<template>
	<main>
		<header
			:style="{ backgroundImage: `url(${post.cover.secure_url})` }"
		></header>
		<div class="container">
			<aside>
				<TableOfContents
					v-if="post.toc.length > 0"
					:toc="post.toc"
					:levels="post.toc.length > 10 ? [2] : [2, 3]"
				/>
				<RelatedPosts :tags="post.tags" :slug="post.slug" />
				<SocialSharing :post="post" />
			</aside>
			<article class="content">
				<h1>{{ post.title }}</h1>
				<nuxt-content :document="post" />
			</article>
		</div>
	</main>
</template>

<script>
import config from '@/modules/config'

export default {
	async asyncData({ $content, params, error, payload }) {
		if (payload) {
			return { post: payload }
		} else {
			const post = await $content('blog', params.slug).fetch()
			return { post }
		}
	},
	head() {
		const link = this.post.canonical_url
			? [
					{
						rel: 'canonical',
						href: this.post.canonical_url,
					},
			  ]
			: null

		const meta = [
			{
				hid: 'description',
				name: 'description',
				content: this.post.description,
			},
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: `${config.baseUrl}${this.post.path}`,
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: this.post.title,
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: this.post.description,
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: this.post.ograph || this.post.cover.secure_url,
			},
			{
				hid: 'twitter:image:width',
				name: 'twitter:image:width',
				content: '1200',
			},
			{
				hid: 'twitter:image:height',
				name: 'twitter:image:height',
				content: '600',
			},
			{
				hid: 'twitter:image:alt',
				name: 'twitter:image:alt',
				content: this.post.banner_image_alt || this.post.title,
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: `${config.baseUrl}${this.post.path}`,
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: `${this.post.title}${config.baseSplitter}${config.baseTitle}`,
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: this.post.description,
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: this.post.ograph || this.post.cover.secure_url,
			},
			{
				hid: 'og:image:width',
				name: 'og:image:width',
				content: '1200',
			},
			{
				hid: 'og:image:height',
				name: 'og:image:height',
				content: '600',
			},
			{
				hid: 'og:image:alt',
				name: 'og:image:alt',
				content: this.post.banner_image_alt || this.post.title,
			},
			{
				hid: 'og:updated_time',
				property: 'og:updated_time',
				content: this.post.updatedAt,
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: `${this.post.title}${config.baseSplitter}${config.baseBrand}`,
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
		]

		return {
			title: this.post.title,
			meta,
			link,
		}
	},
}
</script>
<style scoped>
main {
	@apply mt-4;
	@apply flex flex-col justify-center;
}

header {
	@apply bg-center bg-cover;
	min-height: 15rem;
}

.container {
	@apply flex items-start gap-6;
	@apply mt-10;
	@apply mx-auto;
}

aside,
article {
	@apply bg-white;
	@apply rounded-lg;
	@apply shadow-md;
	@apply p-5;
}

aside {
}

.post {
}

pre {
	margin: 35px -30px;
	@apply rounded;
	@apply shadow-lg;
}

@screen md {
	header {
		min-height: 20rem;
	}
}

@screen lg {
	header {
		min-height: 30rem;
	}
}
</style>
