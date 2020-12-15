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
						`http://localhost:9000/search?searchFor=${this.searchFor}`
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
