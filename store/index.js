export const state = () => ({
	darkMode: true,
	searchOpen: false,
})

export const getters = {
	searchStatus: (state) => state.searchOpen,
}

export const actions = {
	toggleDarkMode(context) {
		context.commit('toggleDarkMode')
	},
	setSearchState(context, isSearchOpen) {
		context.commit('setSearchState', isSearchOpen)
	},
}

export const mutations = {
	toggleDarkMode(state) {
		state.darkMode = !state.darkMode
	},
	setSearchState(state, isSearchOpen) {
		state.searchOpen = isSearchOpen
	},
}
