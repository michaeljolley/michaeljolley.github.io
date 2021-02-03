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
		<div class="container mx-auto">
			<h2>Recently on YouTube</h2>
			<div class="videos">
				<Video
					v-for="video in videos"
					:key="video.id"
					:v-if="videos"
					:video="video"
				/>
			</div>
		</div>
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
			.where({ date: { $lt: Date.now() } })
			.sortBy('date', 'desc')
			.limit(2)
			.fetch()
		const videos = await $content('videos')
			.only(['slug', 'title', 'date', 'link', 'thumbnail'])
			.where({ date: { $lt: Date.now() } })
			.sortBy('date', 'desc')
			.limit(3)
			.fetch()
		return {
			posts,
			videos,
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
main {
	@apply mt-24;
	@apply md:mt-0;
}

.posts {
	@apply grid;
	@apply gap-6;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
}

.videos {
	@apply grid;
	@apply gap-6;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-3;
	@apply lg:gap-10;
}

.posts article,
.videos article {
	@apply h-full;
}

h2 {
	@apply border-none;
	@apply mb-1;
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
