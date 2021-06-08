<template>
	<section v-if="cart && showCart && products && prices">
		<h3>Shopping Cart</h3>
		<ul class="toc">
			<li
				v-for="item of cart"
				:key="item.productId"
				class="py-2 text-xs truncate"
				v-text="description(item)"
			>
				{{ item.productId }}
			</li>
		</ul>
	</section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	async asyncData({ $content }) {
		const products = await $content('products').only(['name', 'id']).fetch()
		const prices = await $content('prices')
			.only(['id', 'nickname', 'unitPrice'])
			.fetch()

		return { products, prices }
	},
	computed: {
		...mapGetters(['cart', 'showCart']),
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
}
</style>
