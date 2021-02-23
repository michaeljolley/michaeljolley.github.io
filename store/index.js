export const state = () => ({
	cart: [],
	products: [],
	prices: [],
})

export const getters = {
	showCart: (state) => state.cart.length > 0,
	cart: (state) => state.cart,
	products: (state) => state.products,
	prices: (state) => state.prices,
}

export const actions = {
	async initShoppingData({ commit }, $content) {
		const products = await $content('products').fetch()
		const prices = await $content('prices').fetch()

		commit('initShoppingData', { products, prices })
	},
	addToCart({ commit, state }, item) {
		const exists = state.cart.some(
			(f) => f.productId === item.productId && f.priceId === item.priceId
		)
		let cart = []
		if (exists) {
			cart = [
				...state.cart.map((f) => {
					if (f.productId === item.productId && f.priceId === item.priceId) {
						f.quantity = f.quantity + item.quantity
					}
					return f
				}),
			]
		} else {
			cart = [...state.cart]
			cart.push(item)
		}

		commit('updateCart', cart)
	},
	updateCart({ commit, state }, item) {
		const exists = state.cart.some(
			(f) => f.productId === item.productId && f.priceId === item.priceId
		)
		let cart = []

		if (exists) {
			cart = [
				...state.cart.map((f) => {
					if (f.productId === item.productId && f.priceId === item.priceId) {
						f.quantity = item.quantity
					}
					return f
				}),
			]
		} else {
			cart = [...state.cart]
			cart.push(item)
		}

		commit('updateCart', cart)
	},
	removeFromCart({ commit, state }, item) {
		const cart = state.cart.filter(
			(f) => f.productId !== item.productId && f.priceId !== item.priceId
		)

		commit('updateCart', cart)
	},
}

export const mutations = {
	updateCart(state, cart) {
		state.cart = cart
	},
	initShoppingData(state, { products, prices }) {
		state.prices = prices
		state.products = products
	},
}
