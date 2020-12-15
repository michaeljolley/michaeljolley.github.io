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
	@apply bg-gray-600;
}

section {
	@apply p-3;
}

h3 {
	@apply border-none;
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
	@apply text-2xl;
	@apply mb-0;
	@apply pb-0;
}

summary {
	@apply text-base;
	@apply mb-1;
	@apply font-bold;
	@apply text-white;
}

time {
	@apply text-sm;
	@apply text-blue-500;
	@apply font-normal;
}

.cld-image {
	@apply overflow-hidden;
	@apply shadow-lg;
	@apply rounded-lg;
	@apply -ml-1 -mr-1;
}
.cld-image img {
	margin: 0 auto;
}
</style>
