<template>
	<div>
		<Mast />
		<Header />
		<Nuxt />
		<div class="container">
			<Footer />
		</div>
		<Twitch />
		<BackToTop />
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
	@apply mx-auto;
}
</style>
