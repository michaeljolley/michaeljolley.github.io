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
					<font-awesome-icon :icon="['fab', 'facebook-f']" />
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
					<font-awesome-icon :icon="['fab', 'twitter']" />
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="LinkedIn"
					:title="post.title"
					:url="`${baseUrl}${post.path}/`"
					class="linkedin"
				>
					<font-awesome-icon :icon="['fab', 'linkedin-in']" />
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="Reddit"
					:url="`${baseUrl}${post.path}/`"
					:title="post.title"
					class="reddit"
				>
					<font-awesome-icon :icon="['fab', 'reddit-alien']" />
				</ShareNetwork>
			</li>
			<li>
				<ShareNetwork
					network="Vk"
					:url="`${baseUrl}${post.path}/`"
					:title="post.title"
					:description="post.description"
					class="vk"
				>
					<font-awesome-icon :icon="['fab', 'vk']" />
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
	@apply lg:mt-10;
}

ul {
	@apply flex;
	@apply flex-col;
	@apply items-center;
	@apply text-xl;
	@apply list-none;

	@apply lg:items-start;
	@apply lg:flex-row;
	@apply lg:justify-between;
}

li {
	@apply mt-2;
	@apply lg:mt-0;
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
.reddit,
.vk {
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
.reddit:hover {
	@apply bg-brand-reddit;
	@apply text-white;
}
.vk:hover {
	@apply bg-brand-vk;
	@apply text-white;
}
/* .facebook,
.twitter,
.linkedin,
.reddit,
.vk {
	@apply text-white;
} */
</style>
