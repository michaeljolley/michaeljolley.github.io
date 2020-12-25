<template>
	<footer>
		<ul>
			<li>
				<nuxt-link to="/code-of-conduct/" title="Code of Conduct"
					>Code of Conduct</nuxt-link
				>
				&nbsp;| &nbsp;<nuxt-link to="/uses/" title="Gear I use"
					>Gear &amp; Setup</nuxt-link
				>
			</li>
			<li>&copy; Bald Bearded Builder.<span> All rights reserved.</span></li>
			<li>
				<a
					href="https://github.com/MichaelJolley/michaeljolley.github.io"
					target="_blank"
					rel="noreferrer"
					>Crafted with ♥.</a
				>
			</li>
		</ul>
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
	@apply text-gray-700;

	@apply dark:text-gray-100;

	border-top: 1px solid;
	border-image-source: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	border-image-slice: 1;
}
ul {
	@apply flex;
	@apply flex-col;

	@apply md:flex-row;
	@apply md:justify-between;
}
</style>
