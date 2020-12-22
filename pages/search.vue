<template>
	<div class="post">
		<article class="content full">
			<section>
				<header>
					<h1>Search the Site</h1>
				</header>

				<div class="nuxt-content">
					<form @submit.prevent="search">
						<p>
							<input
								v-model="searchFor"
								placeholder="e.g. Azure Key Vault"
								type="text"
								@change="search"
							/>
						</p>
						<p>
							<button type="submit" :disabled="isLoading">
								<span v-if="!isLoading">Search</span>
								<span v-if="isLoading">Searching...</span>
								<font-awesome-icon
									v-if="isLoading"
									:icon="['fas', 'spinner']"
									pulse
								/>
							</button>
						</p>
					</form>
				</div>
			</section>
			<section class="searchSection">
				<div class="nuxt-content">
					<div v-if="posts.length > 0">
						<header>
							<h2>Blog Posts</h2>
						</header>
						<div class="results">
							<Card
								v-for="post in posts"
								:key="post.path"
								:v-if="posts"
								:post="post"
								type="blog"
							/>
						</div>
					</div>

					<div v-if="talks.length > 0">
						<header>
							<h2>Talks</h2>
						</header>
						<div class="results">
							<TalkCard
								v-for="talk in talks"
								:key="talk.path"
								:v-if="talks"
								:talk="talk"
								type="speaking"
							/>
						</div>
					</div>
				</div>
			</section>
		</article>
	</div>
</template>
<script>
export default {
	data() {
		return {
			searchFor: null,
			isLoading: false,
			results: [],
			posts: [],
			talks: [],
			streams: [],
			videos: [],
		}
	},
	methods: {
		async search() {
			if (this.searchFor && this.searchFor.length > 3) {
				this.isLoading = true
				try {
					const resp = await fetch(
						`https://bbb-search.azurewebsites.net/api/Search?code=KCsJrciEsX0QOd7jV7JuNMT8jo8ENxLpX0VAIxTa17gKtjX8Dqnj/w==&searchFor=${this.searchFor}`
					)
					const payload = await resp.json()
					this.results = payload.results
					this.parseResults()
					this.isLoading = false
				} catch (err) {
					this.isLoading = false
					console.log(err)
				}
			}
		},
		parseResults() {
			this.posts = this.results.filter((f) => f.type === 'post')
			this.talks = this.results.filter((f) => f.type === 'talk')
			this.streams = this.results.filter((f) => f.type === 'stream')
			this.videos = this.results.filter((f) => f.type === 'video')
		},
	},
	head() {
		return {
			title: `Search`,
		}
	},
}
</script>
<style scoped>
.post {
	@apply flex-col;
}

article,
section {
	background-color: unset;
	@apply rounded-none;
	@apply shadow-none;
}

section:first-child {
	@apply bg-opacity-100;
	@apply rounded-lg;
	@apply shadow-lg;

	@apply bg-white;
	@apply dark:bg-gray-500;
}

section:not(:first-child) {
	@apply pt-0;
	@apply dark:bg-gray-900;
}

.results {
	@apply grid;
	@apply gap-6;
	@apply mt-10;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
	@apply xl:grid-cols-3;
	@apply xl:gap-10;
}
.results article {
	@apply bg-white;
	@apply rounded-lg;
	@apply shadow-lg;

	@apply dark:bg-gray-500;
}
</style>
