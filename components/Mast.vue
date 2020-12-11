<template>
	<div
		v-if="backgroundImage"
		class="container mast"
		:style="{ backgroundImage: `url(${backgroundImage})` }"
	>
		<div class="text">
			<h1>
				{{ opening }}
				<span>It's Michael.</span>
			</h1>
			<p>
				Michael Jolley is the bald, bearded builder.
				<span>(Yes, another one.)</span>
			</p>
			<p>
				At work, he's a developer advocate at
				<a
					target="_blank"
					title="Vonage"
					href="https://www.vonage.com/communications-apis/"
					noreferrer
					>Vonage</a
				>
				where he gets to play with awesome APIs. You can also catch him giving
				<NuxtLink to="/talks" title="Talks Michael's given">talks</NuxtLink>
				at various events or hosting the
				<a
					target="_blank"
					title="Bald Bearded Builder on Twitch"
					href="https://bbb.dev/twitch"
					noreferrer
					>Bald. Bearded. Builder.</a
				>, a live-streamed show on Twitch.
			</p>
			<p>
				After 20 years in the software industry, this follicly challenged
				developer finds his greatest fulfillment helping others learn and
				succeed.
			</p>
		</div>
	</div>
</template>

<script>
const salutations = ['Hey!', 'Hi!', 'Eh.', 'Oh no.', 'Meh.', 'Uh oh.', 'Eek!']

export default {
	computed: {
		backgroundImage() {
			return `https://res.cloudinary.com/dk3rdh3yo/image/upload/g_auto,f_auto/v1607302424/mj_${Math.floor(
				Math.random() * 13 + 1
			)}.png`
		},
		opening() {
			return salutations[Math.floor(Math.random() * salutations.length)]
		},
	},
}
</script>
<style lang="css" scoped>
.mast {
	@apply hidden;
}

.text {
	@apply w-full;
}

h1 {
	@apply text-white;
	@apply mb-0;
	@apply border-0;
	@apply font-bold;
	@apply text-2xl;
	line-height: 1em;
}

h1 span {
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
}

p {
	@apply mb-4;
	@apply text-lg;
}

p span {
	@apply text-sm;
	@apply italic;
	@apply text-blue-400;
	@apply block;
}

@screen md {
	.mast {
		@apply bg-right;
		@apply bg-no-repeat;
		@apply flex;
		@apply flex-col;
		@apply pt-10;
		@apply pb-10;
		@apply visible;
	}
	h1 {
		font-size: 4rem;
		@apply mb-2;
	}
	.text {
		@apply w-2/3;
	}
}

@screen lg {
	.mast {
		@apply pt-16;
		@apply mx-auto;
	}
}
</style>
