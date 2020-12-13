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
	data() {
		return {
			backgroundImage: null,
			opening: null,
		}
	},
	created() {
		if (!this.backgroundImage) {
			this.backgroundImage = `https://res.cloudinary.com/dk3rdh3yo/image/upload/g_auto,f_auto/v1607302424/mj_${Math.floor(
				Math.random() * 13 + 1
			)}.png`
		}
		if (!this.opening) {
			this.opening = salutations[Math.floor(Math.random() * salutations.length)]
		}
	},
}
</script>
<style lang="css" scoped>
.mast {
	@apply sm:hidden;

	@apply md:bg-right;
	@apply md:bg-no-repeat;
	@apply md:flex;
	@apply md:flex-col;
	@apply md:pt-10;
	@apply md:pb-10;
	@apply md:visible;

	@apply lg:pt-16;
	@apply lg:mx-auto;
}

.text {
	@apply w-full;
	@apply md:w-2/3;
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
	@apply md:mb-2;
	font-size: 4rem;
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
</style>
