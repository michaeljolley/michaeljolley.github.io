<template>
	<article>
		<section>
			<h2>Blog</h2>
			<p v-for="post in posts" :key="post.path">
				<nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
			</p>
		</section>
	</article>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const posts = await $content('blog').sortBy('date', 'desc').fetch()

		return {
			posts,
		}
	},
}
</script>

<style scoped></style>
