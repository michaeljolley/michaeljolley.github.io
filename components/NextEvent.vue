<template>
	<section>
		<div>
			<h3>Community Events</h3>
			<div class="midbar">
				<img :src="meetup.thumbnail" />
				<div>
					<span>{{ meetup.date | formatDate }} - {{ meetup.speaker }}</span>
					<p>{{ meetup.title }}</p>
				</div>
			</div>
			<a href="https://bbb.dev">learn more ></a>
		</div>
	</section>
</template>
<script>
export default {
	props: {
		meetup: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style scoped>
section {
	@apply flex flex-row;
	@apply rounded-xl;
	@apply font-robotoMono;
	@apply p-5;
	@apply shadow-md;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.8) 100%
	);

	@apply md:p-4;
}

div {
	@apply flex flex-col justify-between;
	@apply w-full;
}

.midbar {
	@apply flex flex-row;
	@apply mt-2;
}

.midbar > div {
	@apply flex flex-col justify-start;
	@apply ml-3;
}

img {
	@apply rounded-full;
	@apply max-h-12;
	@apply border-white;
	@apply bg-black;
}

h3 {
	@apply inline text-lg font-bold uppercase;

	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	-webkit-text-fill-color: transparent;
	@apply bg-clip-text;
}
span {
	@apply text-xs;
	@apply text-gray-200;
}
p {
	@apply text-white text-base;
	@apply font-sourceSans font-bold;
}

a,
a:hover {
	@apply text-blue-500 text-xs;
	@apply font-bold;
	@apply ml-auto mt-auto;
}
</style>
