<template>
	<section>
		<h3>Share This Post</h3>
		<ul>
			<li>
				<ShareNetwork
					network="Facebook"
					:url="`${baseUrl}${post.path}/`"
					:title="post.title"
					:description="post.description"
					:quote="post.description"
					:hashtags="post.tags && post.tags.join(',')"
					class="facebook"
				>
					<font-awesome-icon
						title="Share on Facebook"
						:icon="['fab', 'facebook-f']"
					/>
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="Twitter"
					:url="`${baseUrl}${post.path}/`"
					:title="post.title"
					twitter-user="baldbeardbuild"
					:hashtags="post.tags && post.tags.join(',')"
					class="twitter"
				>
					<font-awesome-icon
						title="Share on Twitter"
						:icon="['fab', 'twitter']"
					/>
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="LinkedIn"
					:title="post.title"
					:url="`${baseUrl}${post.path}/`"
					class="linkedin"
				>
					<font-awesome-icon
						title="Share on LinkedIn"
						:icon="['fab', 'linkedin-in']"
					/>
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="Reddit"
					:url="`${baseUrl}${post.path}/`"
					:title="post.title"
					class="reddit"
				>
					<font-awesome-icon
						title="Share on Reddit"
						:icon="['fab', 'reddit-alien']"
					/>
				</ShareNetwork>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			baseUrl: process.env.baseUrl.startsWith('http://localhost')
				? 'https://baldbeardedbuilder.com'
				: process.env.baseUrl,
		}
	},
}
</script>

<style scoped>
section {
	@apply m-0;
	@apply lg:flex;
	@apply flex-col;
}

h3 {
	@apply hidden;
	@apply lg:flex;
	@apply lg:mt-5;
	@apply font-cairo font-bold;
	@apply text-indigo-700 text-sm uppercase;
}

ul {
	@apply flex;
	@apply flex-col;
	@apply items-center;
	@apply text-xl;
	@apply list-none;
	@apply py-1;

	@apply lg:items-start;
	@apply lg:flex-row;
	@apply lg:justify-between;
}

li {
	@apply mt-2;
	@apply lg:mt-0;
	@apply py-1;
}

.max-w-40 {
	max-width: 10rem;
}
li a {
	@apply cursor-pointer;
}

.facebook,
.twitter,
.linkedin,
.reddit {
	@apply flex;
	@apply justify-center;
	@apply items-center;
	@apply w-7;
	@apply h-7;
	@apply rounded-2xl;
	@apply bg-white;
	@apply text-black;
}

.facebook:hover {
	@apply text-brand-facebook;
}
.twitter:hover {
	@apply text-brand-twitter;
}
.linkedin:hover {
	@apply text-brand-linkedin;
}
.reddit:hover {
	@apply text-brand-reddit;
}
/* .facebook,
.twitter,
.linkedin,
.reddit,
.vk {
	@apply text-white;
} */
</style>
