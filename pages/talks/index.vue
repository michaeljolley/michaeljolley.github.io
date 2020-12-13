<template>
	<main>
		<TalkCard
			v-for="talk in talks"
			:key="talk.path"
			:v-if="talks"
			:talk="talk"
			type="speaking"
		/>
		<InfiniteScroll :enough="enough" @load-more="loadTalks()" />
	</main>
</template>

<script>
import Vue from 'vue'

export default {
	asyncData({ $content, params, error, payload }) {
		if (payload) {
			return {
				talks: payload.talks,
				page: 1,
			}
		}
	},
	data() {
		return {
			talks: [],
			enough: false,
			page: 0,
			pageSize: 12,
			isLoading: false,
		}
	},
	mounted() {
		if (this.page === 0) {
			this.loadTalks()
		}
	},
	methods: {
		async loadTalks() {
			if (this.talks.length === 0) {
				this.page = 0
			}

			if (!this.enough && !this.isLoading) {
				this.isLoading = true
				const newTalks = await this.$content('talks')
					.only([
						'path',
						'title',
						'cover',
						'date',
						'banner_image_alt',
						'slug',
						'dir',
					])
					.skip(this.page * this.pageSize)
					.limit(this.pageSize)
					.sortBy('date', 'desc')
					.fetch()

				this.page++

				if (newTalks.length > 0) {
					this.talks.push(...newTalks)
				}
				if (newTalks.length === 0 || newTalks.length < 12) {
					this.enough = true
				}
				this.isLoading = false
			}
			await Vue.nextTick()
		},
	},
}
</script>

<style scoped>
main {
	@apply grid;
	@apply gap-6;
	@apply mt-10;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-10;
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
