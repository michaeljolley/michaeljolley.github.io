<template>
	<div class="social">
		<div class="container mx-auto">
			<h2>Let's Get Social</h2>
			<ul>
				<li>
					<a
						href="https://twitter.com/baldbeardbuild"
						noreferrer
						target="_blank"
						class="twitter"
						title="Follow the musings on Twitter"
					>
						<font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon
					></a>
				</li>
				<li>
					<a
						href="https://twitch.tv/baldbeardedbuilder"
						noreferrer
						target="_blank"
						class="twitch"
						title="Check out the live streams on Twitch"
					>
						<font-awesome-icon :icon="['fab', 'twitch']"></font-awesome-icon
					></a>
				</li>
				<li>
					<a
						href="https://youtube.com/baldbeardedbuilder"
						noreferrer
						target="_blank"
						class="youtube"
						title="Subscribe, like & comment on YouTube videos"
					>
						<font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon
					></a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/baldbeardedbuilder/"
						noreferrer
						target="_blank"
						class="instagram"
						title="Follow the fun on Instagram"
					>
						<font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
					></a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/baldbeardedbuilder"
						noreferrer
						target="_blank"
						class="facebook"
						title="Like the Facebook page"
					>
						<font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon
					></a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/michaelwjolley/"
						noreferrer
						target="_blank"
						class="linkedin"
						title="Get professional on LinkedIn"
					>
						<font-awesome-icon
							:icon="['fab', 'linkedin-in']"
						></font-awesome-icon
					></a>
				</li>
				<li class="mid">
					<a
						href="https://discord.gg/XSG7HJm"
						noreferrer
						target="_blank"
						class="discord"
						title="Join the Discord community"
					>
						<font-awesome-icon :icon="['fab', 'discord']"></font-awesome-icon
					></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.social {
	@apply bg-gray-800;
	@apply mt-10 mb-10;
	@apply p-6;
}
h2 {
	@apply hidden;
	@apply text-3xl;
	@apply border-0;
	@apply text-gray-400;

	@apply md:text-4xl;
	@apply md:block;
}
ul {
	@apply grid;
	@apply grid-cols-3;
	@apply gap-2;

	@apply lg:gap-6;
	@apply lg:grid-cols-7;
}

li {
	@apply flex;
	@apply justify-center;
}

li.mid {
	@apply col-start-2;
	@apply md:col-auto;
}

li a {
	@apply bg-gray-600;
	@apply text-5xl;

	@apply w-24;
	@apply h-24;
	@apply flex;
	@apply justify-center;
	@apply items-center;
	@apply text-gray-300;
	border-radius: 50%;
}
.facebook:hover {
	@apply bg-brand-facebook;
	@apply text-white;
}
.twitter:hover {
	@apply bg-brand-twitter;
	@apply text-white;
}
.linkedin:hover {
	@apply bg-brand-linkedin;
	@apply text-white;
}
.instagram:hover {
	@apply bg-brand-instagram;
	@apply text-white;
}
.youtube:hover {
	@apply bg-brand-youtube;
	@apply text-white;
}
.discord:hover {
	@apply bg-brand-discord;
	@apply text-white;
}
.twitch:hover {
	@apply bg-brand-twitch;
	@apply text-white;
}
</style>
