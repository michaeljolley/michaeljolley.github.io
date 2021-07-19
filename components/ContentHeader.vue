<template>
	<header v-if="post">
		<div class="container mx-auto">
			<h1>{{ post.title }}</h1>
			<summary>
				<time>{{ post.date | formatDate }}</time>
				<span v-if="post.dir === '/blog'">
					&nbsp;&nbsp;&nbsp;| &nbsp;
					<span class="rt">{{ post.readingTime.text }}</span>
				</span>
			</summary>
		</div>
	</header>
</template>
<script>
export default {
	props: {
		post: {
			required: true,
			type: Object,
		},
	},
	computed: {
		backgroundImage() {
			if (!this.post || !this.post.cover || !this.post.cover.secure_url)
				return ''

			return `url('${this.post.cover.secure_url}')`
		},
	},
}
</script>
<style scoped>
header {
	background-position: center;
	background-size: cover;

	@apply py-7;
	@apply bg-gray-200;

	@apply dark:bg-gray-500;
}
h1 {
	@apply border-none;
}
</style>
