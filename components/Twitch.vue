<template>
	<aside v-if="isStreaming && showStream" class="twitch">
		<header>
			<h3>
				<span
					><font-awesome-icon :icon="['fab', 'twitch']"></font-awesome-icon
				></span>
				Live on Twitch!
			</h3>
			<a title="Close" @click.prevent="close"
				><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon
			></a>
		</header>
		<main>
			<iframe
				class=""
				:src="video"
				scrolling="no"
				allow="autoplay"
				allowfullscreen="false"
			>
			</iframe>
		</main>
		<footer>
			<p>Schedule: Tues-Thurs 2p ET / 7p UTC</p>
			<a
				href="https://twitch.tv/baldbeardedbuilder"
				target="_blank"
				rel="noreferrer"
				title="Watch the stream live on Twitch!"
				>Watch now</a
			>
		</footer>
	</aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			video: `https://player.twitch.tv/?channel=baldbeardedbuilder&parent=${
				window.location.host.split(':')[0]
			}&autoplay=true`,
		}
	},
	computed: {
		...mapGetters(['isStreaming', 'showStream']),
	},
	methods: {
		close() {
			this.$store.dispatch('toggleShowStream')
		},
	},
}
</script>

<style scoped>
iframe {
	@apply w-full;
	height: 220px;
	@apply rounded-xl;
}

.twitch {
	@apply fixed;

	@apply left-4;
	@apply bottom-4;
	@apply right-4;
	@apply top-auto;
	@apply z-40;
	@apply bg-white;
	@apply rounded-2xl;
	@apply shadow-xl;
	@apply py-3 px-3;
	@apply w-auto;

	@apply bg-brand-twitch;

	@apply sm:right-auto;
	@apply sm:block;
	@apply sm:w-3/4;

	@apply md:w-1/2;
	@apply xl:w-4/12;

	@apply 2xl:w-1/4;
}

header {
	@apply flex;
	@apply justify-between;
	@apply align-middle;
}

header a {
	@apply m-0;
	@apply mt-1;
	@apply p-0;
	@apply h-7;
	@apply w-7;
	@apply mr-2;
	@apply rounded-2xl;
	@apply flex;
	@apply justify-center;
	@apply items-center;

	@apply bg-gray-50;
	@apply text-gray-200 !important;
}

a:hover {
	@apply bg-indigo-300;
	@apply text-white !important;
}

main {
	@apply flex;
	@apply justify-center;
}

footer {
	@apply flex;
	@apply m-0;
	@apply pt-3;
	@apply justify-between;
	@apply items-center;
}

footer a {
	@apply font-bold;
	@apply rounded-md;
	@apply p-2;
	@apply uppercase;
	@apply text-base;

	@apply bg-white;
	@apply text-gray-800;
	animation: pulse-animation 2s infinite;
}

footer p {
	@apply border-none;
	@apply m-0;
	@apply p-0;
	@apply font-bold;
	@apply text-white;
	@apply hidden;
	@apply sm:inline-block;
}

h3 {
	@apply flex;
	@apply items-center;
	@apply border-none;
	@apply mb-2;
	@apply text-white;
}

h3 span {
	@apply m-0;
	@apply p-0;
	@apply h-8;
	@apply w-8;
	@apply mr-2;
	@apply rounded-2xl;
	@apply flex;
	@apply justify-center;
	@apply items-center;
	@apply bg-white;
}

header h3 svg {
	@apply text-xl;
	@apply text-gray-800 !important;
}
</style>
