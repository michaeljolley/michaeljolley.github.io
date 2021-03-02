<template>
	<main>
		<div class="posts">
			<Product
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</main>
</template>

<script>
import Vue from 'vue'

export default {
	asyncData({ $content, params, error, payload }) {
		if (payload) {
			return {
				products: payload.products,
				page: 1,
			}
		}
	},
	data() {
		return {
			products: [],
			isLoading: false,
		}
	},
	mounted() {
		this.loadProducts()
	},
	methods: {
		async loadProducts() {
			const newProducts = await this.$content('products')
				.only([
					'id',
					'name',
					'body',
					'releasedate',
					'images',
					'category',
					'slug',
				])
				.sortBy('featured', 'desc')
				.fetch()

			this.products.push(...newProducts)
			await Vue.nextTick()
		},
	},
}
</script>

<style scoped>
.posts {
	@apply grid;
	@apply gap-6;
	@apply mt-10;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
	@apply xl:grid-cols-3;
	@apply xl:gap-10;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 0px -8px;
	}
}

img {
	@apply rounded;
}
</style>
