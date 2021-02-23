<template>
	<section v-if="cart && showCart && prices && products">
		<h3>Shopping Cart</h3>
		<ul class="toc">
			<li
				v-for="item of cart"
				:key="item.productId"
				class="py-2 text-xs truncate"
				v-text="item.id"
			>
				{{ description(item) }}
			</li>
		</ul>
	</section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['cart', 'showCart', 'products', 'prices']),
	},
	methods: {
		description(item) {
			const product = this.products.find((f) => f.id === item.productId)
			const price = this.prices.find((f) => f.id === item.priceId)

			let description = `${item.quantity} ${product.name}`
			if (price.nickname) {
				description = `${description} (${price.nickname})`
			}
			return description
		},
	},
}
</script>
<style scoped>
section {
	@apply hidden;
	@apply lg:flex;
	@apply flex-col;
}

li {
	@apply ml-2;
}

.toc a {
	@apply text-gray-200;
}

.toc a:hover {
	@apply text-pink-500;
}

.link--level3 {
	@apply pl-2;
}

li.link--active a {
	@apply text-pink-400;
	@apply dark:text-gray-50;
}
</style>
