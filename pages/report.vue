<template>
	<div class="post">
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
					<h1>Report Code of Conduct Breach</h1>
				</header>

				<p>
					We take breaches of our COC very seriously. If you have experienced or
					witnessed a breach by a memmber of our community, we're here for you.
				</p>

				<p>
					Please submit the form below with a description of the event(s). This
					information is confidential and is sent directly to Michael & our
					Community Manager to review as quickly as possible.
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

					<ul class="flex-outer">
						<li>
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
						</li>
						<li>
							If you would like someone to follow up with you, please complete
							the fields below.
							<strong>For your privacy, they are NOT required.</strong>
						</li>
						<li>
							<label for="name">Your Name</label>
							<input
								id="name"
								v-model="formData.name"
								type="text"
								name="name"
								placeholder="Enter your name here"
							/>
						</li>
						<li>
							<label for="email">Your Email</label>
							<input
								id="email"
								v-model="formData.email"
								type="text"
								name="email"
								placeholder="Enter your email address here"
							/>
						</li>
						<li>
							<button type="submit">Submit</button>
						</li>
					</ul>
				</form>
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
	@apply space-x-2;
	@apply lg:space-x-3;
}

.cld-image {
	width: unset !important;
	margin: 0px -5px 0px -5px;
	@apply shadow-lg;
}
h1 {
	@apply lg:text-5xl;
}

ul {
	@apply list-none;
}

li {
	@apply mb-4;
}

li p {
	@apply text-sm;
}

input,
textarea {
	@apply block;
	@apply w-1/2;
	@apply p-2;
	@apply text-black;
}

button {
	@apply rounded-xl;
	@apply pl-4 pr-4;
	@apply pt-2 pb-2;
	@apply text-indigo-800;
	@apply font-bold;
	@apply bg-indigo-400;
}

label > span {
	@apply ml-2;
	@apply text-sm;
	@apply text-white;
	@apply font-normal;
}

label {
	@apply font-bold;
	@apply w-full;
	@apply text-pink-500;
	@apply text-xl;
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
</style>
