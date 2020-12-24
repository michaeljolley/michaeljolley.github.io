<template>
	<div class="post">
		<aside>
			<TableOfContents
				v-if="talk.toc && talk.toc.length > 0"
				:toc="talk.toc"
				:levels="talk.toc.length > 10 ? [2] : [2, 3]"
			/>
			<SocialSharing :post="talk" />
		</aside>
		<article class="content">
			<ArticleHeaderImage
				:cover="talk.cover"
				:title="talk.banner_image_alt || talk.title"
			/>
			<section>
				<TalkHeader :post="talk" />
				<nuxt-content :document="talk" />
				<div class="events">
					<Event v-for="event in events" :key="event.slug" :event="event" />
				</div>
			</section>
		</article>
	</div>
</template>

<script>
import config from '@/modules/config'
export default {
	async asyncData({ $content, params, error, payload }) {
		if (payload) {
			return { talk: payload.talk, events: payload.events }
		} else {
			const talk = await $content('talks', params.slug).fetch()

			const events = await $content('events')
				.where({ talk: { $eq: params.slug } })
				.sortBy('date', 'desc')
				.fetch()
			return { talk, events }
		}
	},
	head() {
		const meta = [
			{
				hid: 'description',
				name: 'description',
				content: this.talk.description,
			},
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: `${config.baseUrl}${this.talk.path}`,
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: this.talk.title,
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: this.talk.description,
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: this.talk.ograph
					? this.talk.ograph.secure_url
					: this.talk.cover.secure_url,
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
				content: this.talk.banner_image_alt || this.talk.title,
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: `${config.baseUrl}${this.talk.path}`,
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: `${this.talk.title}${config.baseSplitter}${config.baseTitle}`,
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: this.talk.description,
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: this.talk.ograph
					? this.talk.ograph.secure_url
					: this.talk.cover.secure_url,
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
				content: this.talk.banner_image_alt || this.talk.title,
			},
			{
				hid: 'og:updated_time',
				property: 'og:updated_time',
				content: this.talk.updatedAt,
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: `${this.talk.title}${config.baseSplitter}${config.baseBrand}`,
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
		]

		return {
			title: this.talk.title,
			meta,
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

.events {
	@apply grid;
	@apply gap-6;
	@apply mt-10;

	@apply md:grid-cols-1;
	@apply lg:grid-cols-2;
	@apply lg:gap-6;
}

@screen lg {
	.cld-image {
		margin: 50px -45px;
	}
}
</style>
