<template>
	<div>
		<Mast />
		<Header />
		<Nuxt />
		<div class="container">
			<Footer />
		</div>
		<BackToTop />
	</div>
</template>
<script>
export default {
	head() {
		return {
			bodyAttrs: {
				class: this.$store.state.darkMode ? 'bg-gray-700' : 'bg-gray-50',
			},
		}
	},
}
</script>
<style scoped>
.container {
	@apply mx-auto;
}
</style>
