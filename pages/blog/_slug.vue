<template>
	<div class="post">
		<TableOfContents
			v-if="post.toc.length > 0"
			:toc="post.toc"
			:levels="post.toc.length > 10 ? [2] : [2, 3]"
		/>
		<article>
			<ArticleHeader :cover="post.cover" :title="post.title" />
			<section>
				<h1>{{ post.title }}</h1>
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
		}
	},
}
</script>

<style scoped>
.post {
	@apply flex;
	@apply items-start;
	@apply mt-10;
	@apply lg:space-x-3;
}

.cld-image {
	width: unset !important;
	margin: 50px -45px;
	@apply shadow-lg;
}
</style>
