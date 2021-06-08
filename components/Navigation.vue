<template>
	<nav :class="{ open: menuExpanded }">
		<ul>
			<li>
				<NuxtLink to="/community/" title="Community">Podcasts</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/community/" title="Community">Community</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/blog/" title="Blog posts">Blog</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/talks/" title="Talks">Talks</NuxtLink>
			</li>
			<li>
				<a href="http://bbb.dev/shop" noreferrer title="Swag">Swag</a>
			</li>
		</ul>
	</nav>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			navigation: [],
			activeRoute: null,
			navExpanded: false,
		}
	},
	async fetch() {
		const navigation = await this.$content('').only(['name', 'to']).fetch()
		this.navigation = navigation
	},
	computed: {
		...mapGetters(['menuExpanded']),
	},
	methods: {
		toggleNav() {
			this.navExpanded = !this.navExpanded
			if (this.navExpanded) {
				Vue.nextTick(this.bindClicks())
			}
		},
	},
}
</script>
<style scoped>
nav {
	@apply hidden;
	@apply content-start;
	@apply mt-3;

	@apply md:mt-0 md:flex md:flex-row md:items-center;
}

nav.open {
	@apply flex flex-col;
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply py-4;

	@apply md:flex-row;
	@apply md:py-0;
}

ul {
	@apply inline-flex flex-row flex-wrap;
	@apply pl-6;
	@apply w-full;

	@apply md:flex;
	@apply md:pl-0;
}

li {
	@apply flex align-middle;
	@apply py-2 pl-4;
	@apply whitespace-nowrap;

	@apply md:py-0 md:pr-6 md:pl-0;
	@apply lg:pr-10;
}

li:nth-last-child(3) {
	@apply lg:ml-auto;
}

li:nth-last-child(2) {
	@apply lg:pr-10 lg:pl-0;
}

a {
	@apply font-robotoMono font-bold;
	@apply text-base lowercase;
	@apply px-3 py-3;

	@apply bg-white;
}

a:hover {
	@apply text-pink-500;
}

a.active,
a:active {
	@apply text-white;
}
</style>
