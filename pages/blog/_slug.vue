<template>
	<div class="post">
		<div class="toc">
			<ul>
				<li
					v-for="link of post.toc"
					:key="link.id"
					:class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
				>
					<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
				</li>
			</ul>
		</div>
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
	/* @apply space-x-4; */
	@apply mt-10;
}

.toc {
	@apply flex;
	@apply flex-col;
	@apply w-1/5;
	@apply bg-gray-500;
	@apply rounded-xl;
	@apply mr-10;
	@apply p-3;
}

article {
	@apply flex;
	@apply flex-col;
	@apply w-4/5;
}

section {
	@apply p-10;
	@apply bg-gray-500;
	@apply rounded-b-xl;
}
</style>
