<template>
	<div class="post">
		<aside>
			<TableOfContents
				v-if="post.toc.length > 0"
				:toc="post.toc"
				:levels="post.toc.length > 10 ? [2] : [2, 3]"
			/>
			<SocialSharing :post="post" />
		</aside>
		<article class="content">
			<ArticleHeaderImage
				:cover="post.cover"
				:title="post.banner_image_alt || post.title"
			/>
			<section>
				<ArticleHeader :post="post" />
				<nuxt-content :document="post" />
			</section>
		</article>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const post = await $content('/blog', params.slug).fetch()

		return {
			post,
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

		return {
			title: this.post.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.description,
				},
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.post.title },
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.post.description,
				},
				// Twitter Card
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
			],
			link,
		}
	},
}
</script>

<style scoped>
.post {
	@apply flex;
	@apply items-start;
	@apply mt-10;
	@apply space-x-2;
	@apply lg:space-x-3;
}

.cld-image {
	width: unset !important;
	margin: 35px -30px;
	@apply shadow-lg;
}

pre {
	margin: 35px -30px;
	@apply rounded;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 50px -45px;
	}

	pre {
		margin: 50px -45px;
	}
}
</style>
