<template>
	<article>
		<nuxt-link :to="`/talks/${talk.slug}`" :title="talk.title">
			<header>
				<v-image
					v-if="talk.cover"
					:alt="talk.banner_image_alt || talk.title"
					:src="talk.cover.public_id"
				/>
			</header>
			<section class="p-3">
				<h3>{{ talk.title }}</h3>
				<summary></summary>
			</section>
		</nuxt-link>
	</article>
</template>
<script>
export default {
	props: {
		talk: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
article {
	@apply w-full;
	@apply shadow-lg;
	@apply bg-gray-500;
	@apply text-white;
	@apply rounded-lg;
}

header {
	overflow: unset;
}

h3 {
	@apply border-none;
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
	@apply text-2xl;
	@apply mb-0;
	@apply pb-0;
}

summary {
	@apply text-base;
	@apply mb-1;
	@apply font-bold;
	@apply text-white;
}

.rt,
time {
	@apply text-sm;
	@apply text-blue-500;
	@apply font-normal;
}
</style>
