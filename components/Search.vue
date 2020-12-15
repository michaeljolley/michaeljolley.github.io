<template>
	<div>
		<input v-model="searchFor" type="text" @change="search" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			searchFor: null,
			results: [],
		}
	},
	methods: {
		async search() {
			if (this.searchFor && this.searchFor.length > 3) {
				try {
					const resp = await fetch(
						`https://bbb-search.azurewebsites.net/api/Search?code=KCsJrciEsX0QOd7jV7JuNMT8jo8ENxLpX0VAIxTa17gKtjX8Dqnj/w==&searchFor=${this.searchFor}`
					)
					const payload = await resp.json()
					this.results = payload.results
				} catch (err) {
					console.log(err)
				}
			}
		},
	},
}
</script>
<style scoped>
input {
	@apply text-black;
}
</style>
