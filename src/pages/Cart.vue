<template>
  <Layout>
    <div class="cart">
      <h1>Whatcha Gettin'</h1>
      <p v-if="cart.length === 0">
        Items you add will appear here. Check out the
        <g-link to="/store/">store</g-link>.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="price">Price</th>
            <th class="price">Quantity</th>
            <th class="price">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            v-for="cartItem in cart"
            :key="cartItem.sku"
            :cartItem="cartItem"
            :prices="prices"
            :products="products"
          />
        </tbody>
      </table>
      <p class="checkout">
        <StripeCheckout
          pk="pk_live_51H5ikRIvRKQm5nc9ICLCn2bcu7hrnWOKdZoEb1I3wmsaVUEJ4z9UDKXOwC7TFtWbyQfckRRZMZVJBZZCXA2wtR8q0060y9yO5c"
          ref="checkoutRef"
          mode="payment"
          :lineItems="stripeItUp"
          successUrl="https://baldbeardedbuilder.com/done/"
          cancelUrl="https://baldbeardedbuilder.com/store/"
        >
          <template slot="checkout-button">
            <button type="submit" title="Checkout" @click="$refs.checkoutRef.redirectToCheckout()">
              <font-awesome :icon="['fab', 'stripe-s']"></font-awesome>Checkout with Stripe
            </button>
          </template>
        </StripeCheckout>
      </p>
    </div>
  </Layout>
</template>

<static-query>
  query data  {
    products: allStripeProduct (perPage: 1000, page: 0) {
      edges {
        node {
          id
          name
          description
          type
          metadata {
            category
            releasedate
            featured
            image
          }
        }
      }
    }
    prices: allStripePrice (page:0, perPage: 1000) {
      edges {
        node {
          id
          object
          unit_amount
          product
          nickname
        }
      }
    }
  }
</static-query>
<script>
import CartItem from "../components/cart/CartItem";
import { mapState } from "vuex";
import { StripeCheckout } from "vue-stripe-checkout";

export default {
  components: { CartItem, StripeCheckout },
  computed: {
    ...mapState(["cart"]),
    prices() {
      return this.$static.prices.edges.map((m) => m.node);
    },
    products() {
      return this.$static.products.edges.map((m) => m.node);
    },
    stripeItUp() {
      return this.cart.map((m) => {
        return {
          price: m.sku,
          quantity: m.quantity,
        };
      });
    },
  },
};
</script>
<style lang="scss">
.cart {
  background-color: $white;
  padding: 20px;
  height: 100%;

  h1 {
    color: $pink;
  }

  table {
    width: 100%;
    font-size: 1.2em;
  }

  .price {
    text-align: right;
  }

  thead {
    tr {
      text-align: left;
    }
  }

  tbody {
    tr {
      background-color: $lighter-gray;

      &:nth-child(even) {
        background-color: $lightest-gray;
      }

      td {
        padding: 10px;
      }
    }
  }

  .checkout {
    margin-top: 20px;
    text-align: right;

    button {
      padding: 15px;
      border-radius: 25px;
      background-color: $mint;
      color: $dark-blue;
      border: 0px;
    }

    svg {
      margin-right: 10px;
    }
  }
}
</style>