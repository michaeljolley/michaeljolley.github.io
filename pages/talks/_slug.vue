<template>
	<article>
		<header>
			<cld-image
				v-if="talk.cover && talk.cover.public_id"
				:alt="talk.title"
				:public-id="talk.cover.public_id"
				quality="auto"
				fetch-format="auto"
				responsive
				loading="lazy"
			/>
		</header>
		<section>
			<nuxt-content :document="talk" />
		</section>
	</article>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const talk = await $content('/talks', params.slug).fetch()

		return {
			talk,
		}
	},
}
</script>

<style scoped></style>
