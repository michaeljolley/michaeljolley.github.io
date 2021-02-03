<template>
	<article class="card">
		<a :href="video.link" noreferrer target="_blank" :title="video.title">
			<header>
				<cld-image
					:alt="video.title"
					:public-id="video.slug"
					:title="video.title"
					fetch-format="auto"
					quality="auto"
					loading="lazy"
					responsive
					type="youtube"
				>
					<cld-placeholder type="pixelate" />
				</cld-image>
			</header>
			<section class="p-3">
				<h2>{{ video.title }}</h2>
				<summary>
					<time>{{ video.date | formatDate }}</time>
				</summary>
			</section>
		</a>
	</article>
</template>
<script>
export default {
	props: {
		video: {
			type: Object,
			required: true,
		},
	},
}
</script>
