<template>
	<header :class="{ scroll: isSticky }">
		<div
			class="mast"
			:style="{ backgroundImage: `url(${post.cover.secure_url})` }"
		></div>
		<div class="title">
			<h1>{{ post.title }}</h1>
			<p>{{ post.readingTime.text }}</p>
		</div>
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
	data() {
		return {
			pos: 0,
			isSticky: false,
		}
	},
	watch: {
		pos(value) {
			this.isSticky = this.pos >= this.$el.nextElementSibling.offsetTop
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
header {
	@apply flex flex-row;
	@apply w-full;
	min-height: 15rem;
}

header.scroll {
	@apply bg-white;
	@apply sticky;
	@apply shadow-md;
	@apply top-0;
	@apply grid;
	@apply z-10;
	grid-template: 1fr / 25% 1fr;
	min-height: 6rem;
}

.mast {
	@apply w-full;
	@apply bg-center bg-cover;
}

.title {
	@apply hidden;
}

header.scroll .title {
	@apply flex flex-col justify-center;
	@apply px-3;

	@apply lg:px-5;
}

p {
	@apply font-cairo text-xs text-gray-400;
}

h1 {
	@apply font-sourceSans font-bold;
	@apply text-xl;

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

@screen md {
	header {
		min-height: 20rem;
	}
}

@screen lg {
	header {
		min-height: 30rem;
	}
	header.scroll {
		grid-template: 1fr / 15% 1fr;
	}
}
</style>
