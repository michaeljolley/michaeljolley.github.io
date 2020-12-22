<template>
	<article class="card">
		<nuxt-link :to="talk.route || `/talks/${talk.slug}/`" :title="talk.title">
			<header>
				<v-image
					v-if="talk.cover_image || talk.cover"
					:alt="talk.banner_image_alt || talk.title"
					:src="talk.cover_image || talk.cover.public_id"
				/>
			</header>
			<section class="p-3">
				<h2>{{ talk.title }}</h2>
				<summary></summary>
			</section>
		</nuxt-link>
	</article>
</template>
<script>
export default {
	props: {
		talk: {
			type: Object,
			required: true,
		},
	},
}
</script>
