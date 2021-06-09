<template>
	<nuxt-link :to="`/blog/${data.slug}/`" :title="data.title">
		<div :style="{ backgroundImage: `url(${data.cover.secure_url})` }"></div>
		<section>
			<h2>{{ data.title }}</h2>
			<p>{{ data.description }}</p>
			<span>read more ></span>
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
a {
	@apply grid grid-cols-2;
	@apply shadow-md;
	@apply rounded-xl;
	@apply overflow-hidden;

	min-height: 13rem;
	grid-template: 1fr / 20% 1fr;
	color: unset;
}
a:hover {
	color: unset;
}

div {
	@apply bg-cover bg-no-repeat;
}

section {
	@apply flex flex-col;
	@apply bg-white;
	@apply p-4;
}
h2 {
	@apply font-cairo font-bold;
	@apply text-3xl;
	@apply pb-2;
	@apply text-indigo-400;
}

p {
	@apply font-robotoMono text-sm;
	@apply text-black;
}

span {
	@apply flex justify-end text-sm;
	@apply justify-self-end;
	@apply font-robotoMono;
	@apply mt-auto;
	@apply text-indigo-400;
}

span:hover {
	@apply text-black;
}
</style>
