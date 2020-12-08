<template>
	<article class="panel shadow-md bg-gray-500 text-white rounded-b-md">
		<nuxt-link :to="url" :title="title">
			<header class="overflow-hidden">
				<v-image :alt="title" :src="imagePublicId" />
			</header>
			<section class="p-3">
				<h3>{{ title }}</h3>
			</section>
		</nuxt-link>
	</article>
</template>
<script>
export default {
	props: {
		url: {
			type: String,
			required: true,
		},
		imagePublicId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	},
}
</script>
<style></style>
