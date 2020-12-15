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
		}
	},
	methods: {
		async search() {
			if (this.searchFor && this.searchFor.length > 3) {
				try {
					const response = await fetch(
						`https://bbb-search.azurewebsites.net/api/Search?code=KCsJrciEsX0QOd7jV7JuNMT8jo8ENxLpX0VAIxTa17gKtjX8Dqnj/w==&searchFor=${this.searchFor}`
					)
					console.dir(response.json())
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
