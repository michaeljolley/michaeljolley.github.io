<template>
	<div class="event">
		<header>
			<v-image
				v-if="event.cover"
				:alt="event.name"
				:src="event.cover.public_id"
			/>
		</header>
		<section>
			<h3>{{ event.name }}</h3>
			<summary>
				<time>{{ event.date | formatDate }}</time>
			</summary>
		</section>
	</div>
</template>
<script>
export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
.event {
	@apply rounded-lg;
	@apply shadow-lg;
	@apply bg-gray-50;
	@apply dark:bg-gray-600;
}

header {
	@apply shadow-sm;
}

section {
	@apply p-3;
}

h3 {
	@apply border-none;
	@apply text-2xl;
	@apply mt-2 mb-0;
	@apply pb-0;
}
</style>
