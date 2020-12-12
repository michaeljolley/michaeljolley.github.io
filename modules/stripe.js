import config from './config'

export default {
	publishableKey: config.stripePublishableKey,
	version: 'v3',
	defer: true,
	async: true,
}
