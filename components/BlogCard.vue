<template>
	<nuxt-link :to="`/blog/${data.slug}/`" :title="data.title">
		<div :style="{ backgroundImage: `url(${data.cover.secure_url})` }"></div>
		<section>
			<h2>{{ data.title }}</h2>
			<p>{{ data.description }}</p>
			<span><font-awesome-icon :icon="['far', 'newspaper']" />read more ></span>
		</section>
	</nuxt-link>
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
div {
	@apply bg-cover;
}
h2,
span {
	@apply text-indigo-500;
}
</style>
