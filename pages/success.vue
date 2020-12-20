<template>
	<div class="post">
		<article class="content full">
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

			<section>
				<header>
					<h1>Code of Conduct Report</h1>
				</header>
				<div class="nuxt-content">
					<p>
						Thank you for submitting that breach of our code of conduct. We take
						breaches of our Code of Conduct <strong>very</strong> seriously. You
						can trust that we will address the issue you raised and if you
						provided your contact information, we will update you accordingly.
					</p>
				</div>
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
