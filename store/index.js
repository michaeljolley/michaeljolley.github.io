export const state = () => ({
	darkMode: true,
})

export const actions = {
	toggleDarkMode(context) {
		context.commit('toggleDarkMode')
	},
}

export const mutations = {
	toggleDarkMode(state) {
		state.darkMode = !state.darkMode
	},
}
