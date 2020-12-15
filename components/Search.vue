<template>
	<ul>
		<li>
			<a @click="toggleSearch">
				<font-awesome-icon
					:icon="['fas', 'search']"
					:class="{ hidden: showSearch }"
				></font-awesome-icon>
				<font-awesome-icon
					:icon="['fas', 'times']"
					:class="{ hidden: !showSearch }"
					class="ml-6"
				></font-awesome-icon>
			</a>
		</li>
		<li v-if="showSearch">
			<input
				v-model="searchFor"
				placeholder="e.g. Azure Key Vault"
				type="text"
				@change="search"
			/>
		</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			searchFor: null,
			results: [],
			showSearch: false,
		}
	},
	methods: {
		toggleSearch() {
			this.showSearch = !this.showSearch
		},
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
ul {
	@apply flex;
	@apply flex-row-reverse;
	@apply z-10;
	@apply items-center;
}

li {
	@apply flex-1;
	@apply flex;
}

a {
	@apply text-2xl;
	@apply text-pink-500;
	@apply cursor-pointer;
	@apply hover:text-white;
}

input {
	@apply text-gray-100;
	@apply text-lg;
	@apply bg-gray-600;
}
</style>
