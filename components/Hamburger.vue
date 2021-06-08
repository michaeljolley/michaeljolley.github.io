<template>
	<button
		class="hamburger"
		type="button"
		:class="{ open: menuExpanded }"
		@click="toggleMenu"
	></button>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['menuExpanded']),
	},
	methods: {
		toggleMenu() {
			this.$store.dispatch('toggleMenu')
		},
	},
}
</script>
<style scoped>
.hamburger {
	@apply block;
	@apply w-10;
	@apply outline-none;
	@apply p-0;
	@apply border-0;
	@apply mr-4;

	@apply md:hidden;
}

.hamburger:before,
.hamburger:after {
	@apply bg-indigo-500;
	@apply block;
	@apply h-1;
	content: '';
	transition: all 200ms ease-in-out;
}

.hamburger.open:before,
.hamburger.open:after {
	@apply bg-gray-400;
}

.hamburger:before {
	@apply mb-4;
	box-shadow: 0 10px 0 rgb(92, 81, 145);
}
.hamburger.open:before {
	box-shadow: 0 0 0 rgb(14, 14, 16);
	transform: translateY(10px) rotate(45deg);
}
.hamburger.open:after {
	transform: translateY(-10px) rotate(-45deg);
}
</style>
