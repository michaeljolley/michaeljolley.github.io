<template>
	<div class="post">
		<article class="content">
			<section class="nuxt-content">
				<header>
					<h1>Search the Site</h1>
				</header>

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
						<button type="submit">Submit</button>
					</p>
				</form>
			</section>

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
		</article>
	</div>
</template>
<script>
export default {
	data() {
		return {
			searchFor: null,
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
				try {
					const resp = await fetch(
						`https://bbb-search.azurewebsites.net/api/Search?code=KCsJrciEsX0QOd7jV7JuNMT8jo8ENxLpX0VAIxTa17gKtjX8Dqnj/w==&searchFor=${this.searchFor}`
					)
					const payload = await resp.json()
					this.results = payload.results
					this.parseResults()
				} catch (err) {
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
}
</script>
<style scoped>
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

header > h2 {
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
	@apply text-2xl;
	@apply mt-3;
	@apply md:text-2xl;
	@apply md:mt-8;
}

.post {
	@apply flex;
	@apply items-start;
	@apply mt-10;
}

article {
	@apply w-full;
}

form {
	@apply mt-10;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px 0px -5px;
	@apply shadow-lg;
}
h1 {
	@apply lg:text-5xl;
}

ul {
	@apply list-none;
}

li {
	@apply mb-4;
}

li p {
	@apply text-sm;
}

label > span {
	@apply ml-2;
	@apply text-sm;
	@apply text-white;
	@apply font-normal;
}

label {
	@apply font-bold;
	@apply w-full;
	@apply text-pink-500;
	@apply text-xl;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 0px -8px;
	}
}

img {
	@apply rounded;
}
</style>
