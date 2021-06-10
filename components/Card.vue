<template>
	<component :is="type" :data="data" />
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
		type: {
			type: String,
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

	min-height: 12rem;
	grid-template: 1fr / 20% 1fr;
	color: unset;
}
a:hover {
	color: unset;
}

a >>> div {
	@apply bg-no-repeat;
}

a >>> section {
	@apply flex flex-col;
	@apply bg-white;
	@apply p-4;
}

a >>> h2 {
	@apply font-cairo font-bold;
	@apply text-3xl;
	@apply pb-2;
}

a >>> p {
	@apply font-robotoMono text-sm;
	@apply text-black;
	line-height: 1.5rem;
}

a >>> span {
	@apply flex justify-end text-sm items-center;
	@apply justify-self-end;
	@apply font-robotoMono;
	@apply mt-auto;
}

a >>> span svg {
	@apply mr-2;
	@apply text-2xl;
}

a:hover >>> section {
	@apply bg-gray-500;
}
a:hover >>> div {
	@apply bg-blend-luminosity;
}
a:hover >>> p {
	@apply text-white;
}
</style>
