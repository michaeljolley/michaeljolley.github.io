<template>
	<div v-if="show" class="topper">
		<cld-image
			v-if="post.cover && post.cover.public_id"
			:alt="post.banner_image_alt || post.title"
			:public-id="post.cover.public_id"
			:title="post.banner_image_alt || post.title"
			quality="auto"
			fetch-format="auto"
			responsive
			loading="lazy"
			><cld-placeholder type="blur"
		/></cld-image>
		<div>
			<h1>{{ post.title }}</h1>
			<p>{{ post.readingTime.text }}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			pos: 0,
			show: false,
		}
	},
	watch: {
		pos(value) {
			this.show = this.pos >= this.$el.nextElementSibling.offsetTop
		},
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			this.pos = window.pageYOffset
		},
	},
}
</script>
<style scoped>
.topper {
	@apply grid gap-4;
	grid-template: 1fr / 25% 1fr;

	/* @apply h-24; */
	@apply bg-white;
	@apply sticky;
	@apply shadow-md;
	top: 0px;

	/* @apply lg:h-24; */
}

.topper .cld-image-wrapper {
	@apply p-0;
	@apply h-full;
}
.cld-image-wrapper img {
	@apply h-full;
}

.topper div {
	@apply py-1;

	@apply lg:py-4;
}
.topper p {
	@apply font-cairo text-xs text-gray-400;
	@apply pl-2;
}

.topper h1 {
	@apply font-sourceSans font-bold;
	@apply text-2xl;

	@apply text-indigo-700;

	/* background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	-webkit-text-fill-color: transparent;
	@apply bg-clip-text; */

	@apply lg:text-4xl;
}
</style>
