<template>
	<client-only>
		<cld-image
			:alt="alt"
			:public-id="src"
			:title="alt"
			fetch-format="auto"
			quality="auto"
			loading="lazy"
			responsive
			blur
		></cld-image>
	</client-only>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
}
</script>
<style scoped></style>
