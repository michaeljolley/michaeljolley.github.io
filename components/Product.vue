<template>
	<article class="card">
		<nuxt-link :to="`/product/${product.slug}/`" :title="product.name">
			<header>
				<img :src="product.images.split('|')[0]" :alt="product.name" />
			</header>
			<section class="p-3">
				<h2>{{ product.name }}</h2>
				<p>{{ product.description }}</p>
			</section>
		</nuxt-link>
	</article>
</template>
<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style lang="css" scoped>
header {
	@apply bg-white;
	width: unset !important;
	@apply -ml-1;
	@apply -mr-1;
	@apply mt-0;
	@apply mb-0;
	@apply shadow-lg;
	@apply rounded-xl;
	@apply overflow-hidden;
}
</style>
