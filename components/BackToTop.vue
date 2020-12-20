<template>
	<div
		:class="{ 'opacity-100': showButton, 'opacity-0': !showButton }"
		class="text-5xl fixed inset-x-auto bottom-0 right-0 z-30 mb-4 md:mb-12 mr-4 md:mr-12 transition-opacity duration-500 ease-in-out"
	>
		<a title="back to top" aria-label="back to top" @click="top">
			<font-awesome-icon :icon="['fa', 'chevron-circle-up']" />
		</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			showButton: false,
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			if (window.pageYOffset === 0) {
				window.location.hash = ''
			}

			if (window.pageYOffset > 200) {
				this.showButton = true
			} else {
				this.showButton = false
			}
		},
		top: (event) => {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' })
		},
	},
}
</script>
<style scoped>
a:hover {
	@apply text-blue-500;
}
</style>
