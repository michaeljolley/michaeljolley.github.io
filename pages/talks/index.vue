<template>
	<article>
		<section>
			<h2>Talks</h2>
			<p v-for="talk in talks" :key="talk.path">
				<nuxt-link :to="`/talks/${talk.slug}`">{{ talk.title }}</nuxt-link>
			</p>
		</section>
	</article>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const talks = await $content('talks').sortBy('date', 'desc').fetch()

		return {
			talks,
		}
	},
}
</script>

<style scoped></style>
