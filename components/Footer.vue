<template>
	<footer>
		<ul class="container">
			<li>
				<NuxtLink
					to="/code-of-conduct/"
					title="Bald Bearded Builder community Code of Conduct"
				>
					Code of Conduct
				</NuxtLink>
			</li>
			<li>
				<a
					href="https://github.com/MichaelJolley/michaeljolley.github.io"
					target="_blank"
					title="View the code behind the site."
					rel="noreferrer"
				>
					Crafted with ♥.
				</a>
			</li>
		</ul>
	</footer>
</template>
<script>
export default {}
</script>
<style scoped>
footer {
	@apply my-3;
	@apply text-gray-700;
}
.container {
	@apply px-4 pb-2;
}
</style>
