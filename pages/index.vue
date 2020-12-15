<template>
	<main>
		<div class="container mx-auto">
			<div class="posts">
				<Card
					v-for="post in posts"
					:key="post.path"
					:v-if="posts"
					:post="post"
					type="blog"
				/>
			</div>
		</div>
		<SocialBar></SocialBar>
		<Search />
	</main>
</template>

<script>
export default {
	layout: 'home',
	async asyncData({ $content }) {
		const posts = await $content('blog')
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

<style scoped>
.posts {
	@apply grid;
	@apply gap-6;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
}

.posts article {
	@apply h-full;
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
