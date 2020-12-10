<template>
	<main>
		<Card
			v-for="post in posts"
			:key="post.path"
			:v-if="posts"
			:post="post"
			type="talks"
		/>
		<InfiniteScroll :enough="enough" @load-more="loadPosts()" />
	</main>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
			enough: false,
			page: 0,
			pageSize: 12,
		}
	},
	mounted() {
		this.loadPosts()
	},
	methods: {
		async loadPosts() {
			if (!this.enough) {
				const newPosts = await this.$content('talks')
					.only([
						'path',
						'title',
						'cover',
						'date',
						'banner_image_alt',
						'readingTime',
						'slug',
						'dir',
					])
					.skip(this.page * this.pageSize)
					.limit(this.pageSize)
					.sortBy('date', 'desc')
					.fetch()

				this.page++

				if (newPosts.length > 0) {
					this.posts.push(...newPosts)
				}
				if (newPosts.length === 0 || newPosts.length < 12) {
					this.enough = true
				}
			}
		},
	},
}
</script>

<style scoped>
main {
	@apply grid;
	@apply gap-6;
	@apply mt-10;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
	@apply xl:grid-cols-3;
	@apply xl:gap-10;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 0px -8px;
	}
}

img {
	@apply rounded;
}
</style>
