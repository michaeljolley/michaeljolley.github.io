<template>
	<a :href="data.link" :title="data.title">
		<div :style="{ backgroundImage: `url(${data.thumbnail})` }"></div>
		<section>
			<h2>{{ data.title }}</h2>
			<p>{{ data.description }}</p>
			<span><font-awesome-icon :icon="['fab', 'youtube']" /> watch now ></span>
		</section>
	</a>
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
	@apply bg-center;
	@apply bg-pink-500;
}
h2,
span {
	@apply text-pink-500;
}
</style>
