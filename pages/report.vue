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
					<h1>Report Code of Conduct Breach</h1>
				</header>
				<div class="nuxt-content">
					<p>
						We take breaches of our COC very seriously. If you have experienced
						or witnessed a breach by a memmber of our community, we're here for
						you.
					</p>

					<p>
						Please submit the form below with a description of the event(s).
						This information is confidential and is sent directly to Michael &
						our Community Manager to review as quickly as possible.
					</p>

					<form
						name="coc-report"
						method="post"
						action="/success/"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						@submit.prevent="handleSubmit"
					>
						<input type="hidden" name="form-name" value="coc-report" />
						<p hidden>
							<label> Don’t fill this out: <input name="bot-field" /> </label>
						</p>

						<p>
							<label for="description"
								>Description of Event(s)<span class="required"
									>* required</span
								></label
							>
							<textarea
								id="description"
								v-model="formData.description"
								rows="6"
								name="description"
								required
								placeholder="Describe the event(s) that occurred. Be sure to include the name of the person who violated the code of conduct."
							></textarea>
						</p>
						<p>
							If you would like someone to follow up with you, please complete
							the fields below.
							<strong>For your privacy, they are NOT required.</strong>
						</p>
						<p>
							<label for="name">Your Name</label>
							<input
								id="name"
								v-model="formData.name"
								type="text"
								name="name"
								placeholder="Enter your name here"
							/>
						</p>
						<p>
							<label for="email">Your Email</label>
							<input
								id="email"
								v-model="formData.email"
								type="text"
								name="email"
								placeholder="Enter your email address here"
							/>
						</p>
						<p>
							<button type="submit">Submit</button>
						</p>
					</form>
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
	methods: {
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
		head() {
			return {
				title: `Report CoC Violations`,
			}
		},
	},
}
</script>
