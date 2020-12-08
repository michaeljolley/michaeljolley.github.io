const findAsset = async (publicId) => {
	const { $cloudinary } = require('@nuxtjs/cloudinary')
	return await $cloudinary.explicit(publicId, {
		type: 'upload',
	})
}

const uploadAsset = async (path, publicId) => {
	const { $cloudinary } = require('@nuxtjs/cloudinary')
	return await $cloudinary.upload(path, {
		public_id: publicId,
	})
}

const getAsset = async (path, publicId) => {
	let asset = await findAsset(publicId)

	if (!asset) {
		asset = await uploadAsset(path, publicId)
	}

	return asset || null
}

export default {
	getAsset,
}
