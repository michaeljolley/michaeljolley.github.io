<template>
	<div class="post">
		<TableOfContents
			v-if="post.toc.length > 0"
			:toc="post.toc"
			:levels="post.toc.length > 10 ? [2] : [2, 3]"
		/>
		<article>
			<header>
				<cld-image
					v-if="post.cover && post.cover.public_id"
					:alt="post.title"
					:public-id="post.cover.public_id"
					quality="auto"
					fetch-format="auto"
					responsive
					loading="lazy"
				/>
			</header>
			<section>
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
	@apply lg:space-x-4;
}

article {
	@apply flex;
	@apply flex-col;
	@apply w-full;
	@apply lg:w-4/5;
}

section {
	@apply bg-gray-500;
	@apply rounded-b-xl;
	@apply text-lg;
	@apply p-6;
	@apply lg:p-10;
}

section h2,
section h3 {
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
}

section h2 {
	@apply text-3xl;
	@apply mt-8;
}
section h3 {
	@apply text-2xl;
	@apply mt-6;
}

.cld-image {
	width: unset !important;
	margin: 50px -45px;
	@apply shadow-lg;
}

header .cld-image {
	width: unset !important;
	margin: 15px -10px 0px -10px;
	@apply shadow-lg;
}
header .cld-image img {
	@apply rounded-xl;
}
</style>
