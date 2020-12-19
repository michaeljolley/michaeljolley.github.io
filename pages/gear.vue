<template>
	<div class="post">
		<aside>
			<TableOfContents :toc="toc" :levels="toc.length > 10 ? [2] : [2, 3]" />
			<SocialSharing :post="info" />
		</aside>
		<article class="content">
			<cld-image
				alt="Hands of various people joined"
				public-id="cover_knfirw"
				title="Hands of various people joined"
				quality="auto"
				fetch-format="auto"
				responsive
				loading="lazy"
				><cld-placeholder type="blur"
			/></cld-image>

			<section class="nuxt-content">
				<header>
					<h1>Current Setup &amp; Gear</h1>
				</header>
			</section>
		</article>
	</div>
</template>
<script>
export default {
	data() {
		return {
			toc: [
				{
					id: 'being-a-good-community-member',
					depth: 2,
					text: 'Being a Good Community Member',
				},
				{
					id: 'be-humble',
					depth: 3,
					text: 'Be Humble',
				},
				{
					id: 'be-helpful-when-asked',
					depth: 3,
					text: 'Be Helpful When Asked',
				},
			],
			info: {
				title: 'Current Gear & Setup',
				path: '/gear',
				description: 'My current gear & setup used everyday.',
				tags: ['gear', 'hardware', 'setup'],
			},
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
	margin: 0px -5px 0px -5px;
	@apply shadow-lg;
}

aside {
	@apply hidden;
	@apply lg:flex;
}

@screen lg {
	.cld-image {
		margin: 0px -5px 0px -5px;
	}
}
h1 {
	@apply text-5xl;
}
</style>
