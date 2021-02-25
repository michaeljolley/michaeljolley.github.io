import fetch from 'node-fetch'
import config from '../modules/config'

const fs = require('fs')
const path = require('path')

const stripeAPIUrl = 'https://api.stripe.com'

const headers = {
	Authorization: `Bearer ${config.stripePublishableKey}`,
}

const loadSwag = async () => {
	const productResp = await (
		await fetch(`${stripeAPIUrl}/v1/products`, {
			headers,
		})
	).json()
	const priceResp = await (
		await fetch(`${stripeAPIUrl}/v1/prices`, {
			headers,
		})
	).json()

	const products = productResp.data
		.filter((f) => f.active)
		.map((product) => {
			return {
				id: product.id,
				description: product.description,
				images: JSON.parse(product.metadata.image).join('|'),
				name: product.name,
				featured: product.metadata.featured,
				category: product.metadata.category,
				releaseDate: product.metadata.releasedate,
			}
		})

	const prices = priceResp.data
		.filter((f) => f.active)
		.map((price) => {
			return {
				id: price.id,
				nickname: price.nickname,
				productId: price.product,
				unitPrice: price.unit_amount,
			}
		})

	const productPath = path.join(__dirname, `../content/products`)
	const pricePath = path.join(__dirname, `../content/prices`)

	if (!fs.existsSync(productPath)) {
		fs.mkdirSync(productPath)
	}
	if (!fs.existsSync(pricePath)) {
		fs.mkdirSync(pricePath)
	}

	products.forEach((product) => {
		const data = `---
id: ${product.id}
slug: ${product.id}
name: ${product.name}
images: ${product.images}
featured: ${product.featured}
category: ${product.category}
releaseDate: ${product.releaseDate}
description: ${product.description}
---`
		fs.writeFileSync(`${productPath}/${product.id}.md`, data)
	})

	prices.forEach((price) => {
		const data = `---
id: ${price.id}
slug: ${price.id}
nickname: ${price.nickname}
productId: ${price.productId}
unitPrice: ${price.unitPrice}
---`
		fs.writeFileSync(`${pricePath}/${price.id}.md`, data)
	})
}

export default async function (moduleOptions) {
	await loadSwag()
}
