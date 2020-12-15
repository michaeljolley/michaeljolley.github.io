<template>
	<div>
		<Header />
		<div class="container mx-auto">
			<Nuxt />
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
<style></style>
