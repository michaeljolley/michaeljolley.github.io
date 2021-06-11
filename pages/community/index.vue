<template>
	<main>
		<div class="posts">
			<Card
				v-for="post in posts"
				:key="post.path"
				:v-if="posts"
				:post="post"
				type="blog"
			/>
		</div>
		<InfiniteScroll :enough="enough" @load-more="loadPosts()" />
	</main>
</template>

<script>
import Vue from 'vue'

export default {
	asyncData({ $content, params, error, payload }) {
		if (payload) {
			return {
				posts: payload.posts,
				page: 1,
			}
		}
	},
	data() {
		return {
			posts: [],
			enough: false,
			page: 0,
			pageSize: 12,
			isLoading: false,
		}
	},
	mounted() {
		if (this.page === 0) {
			this.loadPosts()
		}
	},
	methods: {
		async loadPosts() {
			if (this.posts.length === 0) {
				this.page = 0
			}

			if (!this.enough && !this.isLoading) {
				this.isLoading = true
				const newPosts = await this.$content('blog')
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
					.where((obj) => new Date(obj.date) < Date.now())
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
				this.isLoading = false
			}
			await Vue.nextTick()
		},
	},
}
</script>

<style scoped>
.posts {
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
