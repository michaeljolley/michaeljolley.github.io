<template>
	<div class="post">
		<aside>
			<TableOfContents
				v-if="talk.toc && talk.toc.length > 0"
				:toc="talk.toc"
				:levels="talk.toc.length > 10 ? [2] : [2, 3]"
			/>
			<SocialSharing :post="talk" />
		</aside>
		<article class="content">
			<ArticleHeaderImage
				:cover="talk.cover"
				:title="talk.banner_image_alt || talk.title"
			/>
			<section>
				<ArticleHeader :post="talk" />
				<nuxt-content :document="talk" />
			</section>
		</article>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const talk = await $content('/talks', params.slug).fetch()
		return { talk }
	},
	head() {
		return {
			title: this.talk.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.talk.description,
				},
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.talk.title },
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.talk.description,
				},
				// Twitter Card
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.talk.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.talk.description,
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
	@apply space-x-2;
	@apply lg:space-x-3;
}

.cld-image {
	width: unset !important;
	margin: 35px -30px;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 50px -45px;
	}
}
</style>
