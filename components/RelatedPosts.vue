<template>
	<section v-if="relatedPosts.length > 0">
		<h3>Related Posts</h3>
		<ul class="related">
			<li v-for="(post, i) of relatedPosts" :key="i" class="py-2 text-xs">
				<NuxtLink :title="post.title" :to="`/blog/${post.slug}/`">{{
					post.title
				}}</NuxtLink>
			</li>
		</ul>
	</section>
</template>
<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			relatedPosts: {},
		}
	},
	async fetch() {
		try {
			this.relatedPosts = await this.$content(`blog`, { deep: true })
				.only(['title', 'slug'])
				.where({
					$and: [
						{ slug: { $ne: this.slug } },
						{ tags: { $containsAny: this.tags } },
						{ date: { $lt: Date.now() } },
					],
				})
				.sortBy('published_at', 'desc')
				.limit(3)
				.fetch()
			if (this.relatedPosts.length < 3) {
				const morePosts = await this.$content(`blog`, { deep: true })
					.only(['title', 'slug'])
					.where({
						$and: [
							{
								slug: {
									$nin: [this.slug, ...this.relatedPosts.map((t) => t.slug)],
								},
							},
							{ category: { $in: this.tags.flat() } },
							{ date: { $lt: Date.now() } },
						],
					})
					.sortBy('published_at', 'desc')
					.limit(3 - this.relatedPosts.length)
					.fetch()
				this.relatedPosts = this.relatedPosts.concat(morePosts)
			}
		} catch (error) {}
	},
}
</script>
<style scoped>
section {
	@apply hidden;
	@apply lg:flex;
	@apply flex-col;
}

h3 {
	@apply mt-5;
	@apply font-cairo font-bold;
	@apply text-indigo-700 text-sm uppercase;
}

li {
	@apply mx-2;
	@apply py-1;
	@apply font-sourceSans text-sm;
}

.related a {
	@apply text-gray-300;
}

.related a:hover {
	@apply text-pink-500;
}

li.link--active a {
	@apply text-pink-400;
}
</style>
