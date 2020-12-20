<template>
	<div class="post">
		<article class="content">
			<header>
				<cld-image
					alt="Hands of various people joined"
					public-id="cover_knfirw"
					title="Hands of various people joined"
					quality="auto"
					fetch-format="auto"
					responsive
					blur
					loading="lazy"
					><cld-placeholder type="blur"
				/></cld-image>
			</header>

			<section class="nuxt-content">
				<header>
					<h1>Code of Conduct Report</h1>
				</header>

				<p>
					Thank you for submitting that breach of our code of conduct. We take
					breaches of our Code of Conduct <strong>very</strong> seriously. You
					can trust that we will address the issue you raised and if you
					provided your contact information, we will update you accordingly.
				</p>
			</section>
		</article>
	</div>
</template>
<script>
export default {
	data() {
		return {
			formData: {},
		}
	},
	encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&')
	},
	handleSubmit(e) {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: this.encode({
				'form-name': e.target.getAttribute('name'),
				...this.formData,
			}),
		})
			.then(() => this.$router.push('/success'))
			.catch((error) => alert(error))
	},
}
</script>
<style scoped>
.post {
	@apply flex;
	@apply items-start;
	@apply mt-10;
}

article {
	@apply w-full;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px 0px -5px;
	@apply shadow-lg;
}
h1 {
	@apply lg:text-5xl;
}

aside {
	@apply hidden;
	@apply lg:flex;
}

header {
	@apply z-0;
	@apply -mb-1;
}
header .cld-image {
	width: unset !important;
	@apply -ml-1;
	@apply -mr-1;
	@apply mt-0;
	@apply mb-0;
	@apply shadow-lg;
	@apply rounded-xl;
	@apply overflow-hidden;
}

@screen lg {
	.cld-image {
		margin: 0px -5px 0px -5px;
	}
}
</style>
