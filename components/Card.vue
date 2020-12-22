<template>
	<article class="card">
		<nuxt-link :to="post.route || `/${type}/${post.slug}/`" :title="post.title">
			<header>
				<v-image
					v-if="post.cover || post.cover_image"
					:alt="post.banner_image_alt || post.title"
					:src="post.cover_image || post.cover.public_id"
				/>
			</header>
			<section class="p-3">
				<h2>{{ post.title }}</h2>
				<summary>
					<time>{{ post.date | formatDate }}</time>
					<span v-if="post.readingTime && post.dir === '/blog'">
						&nbsp;&nbsp;| &nbsp;
						<span class="rt">{{ post.readingTime.text }}</span>
					</span>
				</summary>
			</section>
		</nuxt-link>
	</article>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
	},
}
</script>
