<template>
	<div class="container m-auto z-12">
		<transition name="slide-fade">
			<div class="search">
				<div v-if="searchStatus">
					<input
						v-model="searchFor"
						placeholder="e.g. Azure Key Vault"
						type="text"
						@change="search"
					/>
				</div>
				<div class="buttons">
					<a @click="toggleSearch">
						<font-awesome-icon
							:icon="['fas', 'search']"
							:class="{ hidden: searchStatus }"
						></font-awesome-icon>
						<font-awesome-icon
							:icon="['fas', 'times']"
							:class="{ hidden: !searchStatus }"
							class="ml-4"
						></font-awesome-icon>
					</a>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			searchFor: null,
			results: [],
		}
	},
	computed: {
		...mapGetters(['searchStatus']),
	},
	methods: {
		toggleSearch() {
			this.$store.dispatch('setSearchState', !this.searchStatus)
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
.search {
	@apply absolute;
	@apply right-0;
	@apply p-2;
	@apply bg-gray-500;
	@apply rounded-l-lg;
	@apply mt-2;

	@apply flex;
}

.buttons a {
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

.slide-fade-enter-active {
	transition: all 0.4s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(5px);
	opacity: 0;
}
</style>
