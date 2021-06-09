<template>
	<main>
		<div class="container">
			<div>
				<component
					:is="item.type"
					v-for="item in items"
					:key="item.slug"
					:data="item.data"
				/>
			</div>
			<div>
				<NextEvent />
				<Discord />
			</div>
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
			.limit(5)
			.sortBy('date', 'desc')
			.fetch()

		const items = [
			...posts.map((p) => {
				return { type: 'BlogCard', slug: p.slug, date: p.date, data: p }
			}),
			...videos.map((v) => {
				return { type: 'VideoCard', slug: v.slug, date: v.date, data: v }
			}),
		]

		return {
			items: items.sort((a, b) => a.date < b.date),
		}
	},
}
</script>

<style scoped>
.container {
	@apply grid grid-cols-1 gap-6;
	grid-template: 1fr / 1fr 30%;
}
.container > div {
	@apply flex flex-col gap-6;
}
</style>
