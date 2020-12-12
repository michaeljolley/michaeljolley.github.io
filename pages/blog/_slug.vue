<template>
	<div class="post">
		<aside>
			<TableOfContents
				v-if="post.toc.length > 0"
				:toc="post.toc"
				:levels="post.toc.length > 10 ? [2] : [2, 3]"
			/>
			<SocialSharing :post="post" />
		</aside>
		<article class="content">
			<ArticleHeaderImage
				:cover="post.cover"
				:title="post.banner_image_alt || post.title"
			/>
			<section>
				<ArticleHeader :post="post" />
				<nuxt-content :document="post" />
			</section>
		</article>
	</div>
</template>

<script>
import config from '@/modules/config'

export default {
	async asyncData({ $content, params }) {
		const post = await $content('/blog', params.slug).fetch()

		return {
			post,
		}
	},
	head() {
		const link = this.post.canonical_url
			? [
					{
						rel: 'canonical',
						href: this.post.canonical_url,
					},
			  ]
			: null

		const meta = [
			{
				hid: 'description',
				name: 'description',
				content: this.post.description,
			},
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: `${this.baseUrl}${this.post.path}`,
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: this.post.title,
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: this.post.description,
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: this.post.ograph
					? this.post.ograph.secure_url
					: this.post.cover.secure_url,
			},
			{
				hid: 'twitter:image:width',
				name: 'twitter:image:width',
				content: '1200',
			},
			{
				hid: 'twitter:image:height',
				name: 'twitter:image:height',
				content: '600',
			},
			{
				hid: 'twitter:image:alt',
				name: 'twitter:image:alt',
				content: this.post.banner_image_alt || this.post.title,
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: `${this.baseUrl}${this.post.path}`,
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: `${this.indexTitle}${config.baseSplitter}${config.baseTitle}`,
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: this.post.description,
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: this.post.ograph
					? this.post.ograph.secure_url
					: this.post.cover.secure_url,
			},
			{
				hid: 'og:image:width',
				name: 'og:image:width',
				content: '1200',
			},
			{
				hid: 'og:image:height',
				name: 'og:image:height',
				content: '600',
			},
			{
				hid: 'og:image:alt',
				name: 'og:image:alt',
				content: this.post.banner_image_alt || this.post.title,
			},
			{
				hid: 'og:updated_time',
				property: 'og:updated_time',
				content: this.post.updatedAt,
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: `${this.post.title}${config.baseSplitter}${config.baseBrand}`,
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
		]

		return {
			title: this.post.title,
			meta,
			link,
		}
	},
}
</script>

<style scoped>
.post {
	@apply flex;
	@apply items-start;
	@apply mt-10;
	@apply space-x-2;
	@apply lg:space-x-3;
}

.cld-image {
	width: unset !important;
	margin: 35px -30px;
	@apply shadow-lg;
}

pre {
	margin: 35px -30px;
	@apply rounded;
	@apply shadow-lg;
}

@screen lg {
	.cld-image {
		margin: 50px -45px;
	}

	pre {
		margin: 50px -45px;
	}
}
</style>
