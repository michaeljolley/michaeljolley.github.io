<template>
	<header>
		<cld-image
			v-if="cover && cover.public_id"
			:alt="title"
			:public-id="cover.public_id"
			:title="title"
			quality="auto"
			fetch-format="auto"
			responsive
			loading="lazy"
			><cld-placeholder type="blur"
		/></cld-image>
	</header>
</template>
<script>
export default {
	props: {
		cover: {
			type: Object,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
<style scoped>
header {
	@apply z-0;
	@apply -mb-1;
}
header .cld-image {
	width: unset !important;
	@apply -ml-1;
	@apply -mr-1;
	@apply mt-0;
	@apply mb-0;
	@apply shadow-lg;
	@apply rounded-xl;
	@apply overflow-hidden;
}
</style>
