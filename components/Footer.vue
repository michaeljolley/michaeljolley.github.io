<template>
	<footer>
		&copy; Bald Bearded Builder.<span> All rights reserved.</span> |&nbsp;
		<nuxt-link to="/code-of-conduct/" title="Code of Conduct"
			>Code of Conduct</nuxt-link
		>
	</footer>
</template>
<script>
export default {}
</script>
<style scoped>
footer {
	@apply mt-5;
	@apply mb-5;
	@apply pt-5;
	@apply text-gray-100;

	border-top: 1px solid;
	border-image-source: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	border-image-slice: 1;
}
</style>
