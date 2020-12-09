<template>
	<cld-image
		:alt="alt"
		:public-id="src"
		:title="alt"
		fetch-format="auto"
		quality="auto"
		loading="lazy"
		responsive
		blur
	/>
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
