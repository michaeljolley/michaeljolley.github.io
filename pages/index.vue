<template>
	<div>
		<section>
			<h2>Recent Posts</h2>
			<div
				class="grid md:grid-cols-1 lg:grid-cols-2 h-full xs:gap-x-4 md:gap-4 lg:gap-lg-4"
			>
				<Card
					v-for="post in posts"
					:key="post.path"
					:v-if="posts"
					:title="post.title"
					:url="`/blog/${post.slug}`"
					:image-public-id="post.cover.public_id"
					:date="post.date"
				/>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	layout: 'home',
	async asyncData({ $content }) {
		const posts = await $content('blog', { deep: true })
			.sortBy('date', 'desc')
			.limit(2)
			.fetch()
		return {
			posts,
		}
	},
	methods: {
		toggleDark() {
			this.$store.dispatch('toggleDarkMode')
		},
	},
}
</script>

<style></style>
