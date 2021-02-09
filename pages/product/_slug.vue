<template>
	<div v-if="product" class="post">
		<aside>
			<ShoppingCart />
			<SocialSharing v-if="sharingProduct" :post="sharingProduct" />
		</aside>
		<article class="content">
			<header>
				<img :src="product.images.split('|')[0]" />
			</header>
			<section>
				<header>
					<h1>{{ product.name }}</h1>
				</header>
				<!-- <ArticleHeader :post="post" /> -->
				<p>{{ product.description }}</p>

				<h2>Gimme some of that!</h2>
				<p>
					<label for="price">Size</label><br />
					<select id="price" v-model="selectedPriceId" name="price">
						<option v-for="price in prices" :key="price.id" :value="price.id">
							{{ price.nickname }} (${{ price.unitPrice / 100 }})
						</option>
					</select>
				</p>
				<p>
					<label for="quantity">Quanity</label><br />
					<input
						id="quantity"
						v-model="quantity"
						type="number"
						name="quantity"
						value="1"
					/>
				</p>
				<button type="submit" @click="addToCart()">Add to Cart</button>
			</section>
		</article>
	</div>
</template>

<script>
// import config from '@/modules/config'

export default {
	async asyncData({ $content, params, error, payload }) {
		if (payload) {
			return { product: payload }
		} else {
			const product = await $content('products', params.slug).fetch()
			const sharingProduct = {
				path: `/${params.slug}`,
				title: product.name,
				description: product.description,
			}
			const prices = await $content('prices')
				.where({
					productId: params.slug,
				})
				.sortBy('unitPrice')
				.fetch()

			let selectedPriceId, quantity

			return { sharingProduct, prices, product, selectedPriceId, quantity }
		}
	},
	methods: {
		addToCart() {
			// Add it to my shopping cart
			const item = {
				productId: this.product.id,
				priceId: this.selectedPriceId,
				quantity: parseInt(this.quantity),
			}

			if (item.quantity <= 0) {
				this.$store.dispatch('removeFromCart', item)
			} else {
				this.$store.dispatch('addToCart', item)
			}

			this.selectedPriceId = this.prices[0].id
			this.quantity = 1
		},
	},
	head() {
		const meta = [
			{
				hid: 'description',
				name: 'description',
				content: this.product.description,
			},
			// {
			// 	hid: 'twitter:url',
			// 	name: 'twitter:url',
			// 	content: `${config.baseUrl}${this.post.path}`,
			// },
			// {
			// 	hid: 'twitter:title',
			// 	name: 'twitter:title',
			// 	content: this.post.title,
			// },
			// {
			// 	hid: 'twitter:description',
			// 	name: 'twitter:description',
			// 	content: this.post.description,
			// },
			// {
			// 	hid: 'twitter:image',
			// 	name: 'twitter:image',
			// 	content: this.post.ograph
			// 		? this.post.ograph.secure_url
			// 		: this.post.cover.secure_url,
			// },
			// {
			// 	hid: 'twitter:image:width',
			// 	name: 'twitter:image:width',
			// 	content: '1200',
			// },
			// {
			// 	hid: 'twitter:image:height',
			// 	name: 'twitter:image:height',
			// 	content: '600',
			// },
			// {
			// 	hid: 'twitter:image:alt',
			// 	name: 'twitter:image:alt',
			// 	content: this.post.banner_image_alt || this.post.title,
			// },
			// {
			// 	hid: 'og:url',
			// 	property: 'og:url',
			// 	content: `${config.baseUrl}${this.post.path}`,
			// },
			// {
			// 	hid: 'og:title',
			// 	property: 'og:title',
			// 	content: `${this.post.title}${config.baseSplitter}${config.baseTitle}`,
			// },
			// {
			// 	hid: 'og:description',
			// 	property: 'og:description',
			// 	content: this.post.description,
			// },
			// {
			// 	hid: 'og:image',
			// 	property: 'og:image',
			// 	content: this.post.ograph
			// 		? this.post.ograph.secure_url
			// 		: this.post.cover.secure_url,
			// },
			// {
			// 	hid: 'og:image:width',
			// 	name: 'og:image:width',
			// 	content: '1200',
			// },
			// {
			// 	hid: 'og:image:height',
			// 	name: 'og:image:height',
			// 	content: '600',
			// },
			// {
			// 	hid: 'og:image:alt',
			// 	name: 'og:image:alt',
			// 	content: this.post.banner_image_alt || this.post.title,
			// },
			// {
			// 	hid: 'og:updated_time',
			// 	property: 'og:updated_time',
			// 	content: this.post.updatedAt,
			// },
			// {
			// 	hid: 'og:site_name',
			// 	property: 'og:site_name',
			// 	content: `${this.post.title}${config.baseSplitter}${config.baseBrand}`,
			// },
			// { hid: 'og:type', property: 'og:type', content: 'website' },
		]

		return {
			title: this.product.name,
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

.cld-image {
	width: unset !important;
	@apply shadow-lg;
}

.nuxt-content .cld-image {
	margin: 35px -30px;
}

pre {
	margin: 35px -30px;
	@apply rounded;
	@apply shadow-lg;
}

@screen lg {
	.nuxt-content .cld-image {
		margin: 50px -45px;
	}

	pre {
		margin: 50px -45px;
	}
}
</style>
