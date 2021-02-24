export const state = () => ({
	cart: [],
	isStreaming: false,
	showStream: true,
})

export const getters = {
	showCart: (state) => state.cart.length > 0,
	cart: (state) => state.cart,
	isStreaming: (state) => state.isStreaming,
	showStream: (state) => state.showStream,
}

export const actions = {
	toggleShowStream({ commit, state }) {
		commit('updateShowStream', !state.showStream)
	},
	async checkStream({ commit }) {
		let isStreaming = false
		try {
			const response = await fetch(`/.netlify/functions/twitch`)
			const { isOnline } = await response.json()
			isStreaming = isOnline
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
		}
		commit('updateStreamingStatus', isStreaming)
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
	updateStreamingStatus(state, isStreaming) {
		state.isStreaming = isStreaming
	},
	updateShowStream(state, showStream) {
		state.showStream = showStream
	},
	updateCart(state, cart) {
		state.cart = cart
	},
}
