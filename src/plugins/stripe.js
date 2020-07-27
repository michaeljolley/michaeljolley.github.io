const Stripe = require('stripe');
const slugify = require('slugify');

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
const upperFirst = string => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};

const StripeSource = async (store) => {
  const { addCollection } = store;
  const options = {
    typeName: 'Stripe',
    objectTypes: {
      product: { expand: ['data.skus'] },
      price: {}
    },
    secretKey: process.env.VUE_APP_STRIPE_SECRET_KEY,
    stripeOptions: {}
  };

  const stripe = new Stripe(options.secretKey, {
    appInfo: {
      name: 'Gridsome Stripe Source Plugin',
      version: '0.0.1',
      url: 'https://github.com/michaeljolley/gridsome-source-stripe',
    },
    ...options.stripeOptions,
  });

  return Promise.all(
    Object.entries(options.objectTypes).map(([objectType]) =>
      stripe[objectType + 's']
        .list({
          limit: 100,
        })
        .then(async ({ data }) => {
          const contentType = addCollection({
            typeName: `${options.typeName}${upperFirst(objectType)}`,
          });

          data.map(async node => {
            if (node.name) {
              node.slug = slugify(node.name, { lower: true });
            }
            return contentType.addNode(node);
          });
        })
    )
  );
}

module.exports = StripeSource