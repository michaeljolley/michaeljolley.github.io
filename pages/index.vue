<template>
	<main>
		<div class="container">
			<aside>
				<NextEvent v-if="nextMeetup" class="mini" :meetup="nextMeetup" />
				<Discord class="mid" />
			</aside>
			<section>
				<div>
					<Card
						v-for="item in items"
						:key="item.slug"
						:data="item.data"
						:type="item.type"
						class="card"
					/>
				</div>
				<div>
					<NextEvent v-if="nextMeetup" :meetup="nextMeetup" />
					<LastVideo :video="latestVideo" />
					<Discord />
				</div>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const posts = await $content('/blog')
			.limit(5)
			.sortBy('date', 'desc')
			.fetch()

		const videos = await $content('/videos')
			.limit(1)
			.sortBy('date', 'desc')
			.fetch()

		const nextMeetup = await $content('/meetup')
			.where({ date: { $gte: new Date() } })
			.limit(1)
			.sortBy('date', 'asc')
			.fetch()

		const items = [
			...posts.map((p) => {
				return { type: 'BlogCard', slug: p.slug, date: p.date, data: p }
			}),
		]

		return {
			items: items.sort((a, b) => new Date(b.date) - new Date(a.date)),
			nextMeetup: nextMeetup.length > 0 ? nextMeetup[0] : undefined,
			latestVideo: videos[0],
		}
	},
}
</script>

<style scoped>
.container {
	@apply flex flex-col;
}
section {
	@apply flex flex-col gap-6;

	@apply md:grid md:grid-cols-1;
}
section > div {
	@apply flex flex-col gap-6;
}
section div:nth-child(2) {
	@apply hidden;

	@apply lg:flex;
}

aside {
	@apply flex flex-row gap-6;
	@apply mb-6;

	@apply md:grid md:grid-cols-2;
}

ul {
	@apply flex flex-row gap-4;
}
button {
	@apply lowercase;
	@apply rounded-2xl;
	@apply px-3 py-1;
	@apply shadow-sm;
	@apply bg-white;
	@apply text-gray-500 text-sm;
	@apply font-sourceSans font-bold;
	@apply outline-none;
}
button.Blog.active,
button.Blog:hover {
	@apply bg-indigo-500;
	@apply text-white;
}
button.Video.active,
button.Video:hover {
	@apply bg-pink-600;
	@apply text-white;
}

.mini {
	@apply w-full;

	@apply lg:hidden;
}

.mid {
	@apply hidden;

	@apply md:flex;
	@apply lg:hidden;
}

.card:first-of-type {
	@apply flex flex-col;
}
.card:first-of-type >>> div {
	@apply h-48;
	@apply bg-cover bg-center;

	@apply md:h-96;
}

@screen lg {
	section {
		grid-template: 1fr / 1fr 30%;
	}
}
</style>
