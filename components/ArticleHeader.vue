<template>
	<header>
		<h1>{{ post.title }}</h1>
		<summary>
			<time>{{ post.date | formatDate }}</time>
			<span v-if="post.dir === '/blog'">
				&nbsp;&nbsp;&nbsp;| &nbsp;
				<span class="rt">{{ post.readingTime.text }}</span>
			</span>
		</summary>
	</header>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
header {
	border-bottom: 1px solid;
	border-image-source: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	border-image-slice: 1;
	@apply mb-4;
}
h1 {
	@apply text-3xl;
	@apply border-0;
	@apply mb-0;
	@apply md:text-4xl;
	@apply md:mb-1;
}
summary {
	@apply text-sm;
	@apply mb-1;
	@apply font-bold;
	@apply md:text-base;
}

.rt,
time {
	@apply text-sm;
	@apply text-blue-500;
	@apply font-normal;
}
</style>
