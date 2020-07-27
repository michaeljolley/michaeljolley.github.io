<template>
  <article class="product">
    <header v-if="product" class="entry-header">
      <ImageList :images="this.images"></ImageList>

      <h2 class="entry-title">{{product.name}}</h2>
      <div class="entry-meta">
        <div class="options">
          <div class="options_qty">
            <label :for="`qty${product.id}`">Qty:</label>
            <input
              type="number"
              :id="`qty${product.id}`"
              :name="`qty${product.id}`"
              v-model="quantity"
            />
          </div>
          <div class="price">{{this.unitPrice()}}</div>
        </div>
        <div class="addButton">
          <div class="options_size">
            <template v-if="productPrices.length > 1">
              <label :for="`size${product.id}`">Size:</label>
              <select :id="`size${product.id}`" :name="`size${product.id}`" v-model="sku">
                <option
                  v-for="price in productPrices"
                  :key="price.id"
                  :value="price.id"
                >{{price.nickname}}</option>
              </select>
            </template>
          </div>
          <button :disabled="!buttonEnabled" v-on:click="addItem">
            <font-awesome :icon="['fas', 'cart-plus']"></font-awesome>
            <div>Add to cart</div>
          </button>
        </div>
      </div>
    </header>
  </article>
</template>
<script>
import ImageList from "@/components/products/ImageList";
import * as types from "../../state/Mutations";

export default {
  props: ["product", "prices"],
  components: {
    ImageList,
  },
  data: function () {
    return {
      sku: null,
      quantity: 1,
    };
  },
  computed: {
    images() {
      return JSON.parse(this.product.metadata.image);
    },
    productPrices() {
      const skus = this.prices
        .map((m) => m.node)
        .filter((f) => f.product === this.product.id);
      if (skus.length === 1) {
        this.sku = skus[0].id;
      }
      return skus;
    },
    buttonEnabled() {
      return this.sku && this.quantity && this.quantity > 0;
    },
  },
  methods: {
    unitPrice: function () {
      if (this.sku) {
        return (
          this.productPrices.find((f) => f.id === this.sku).unit_amount / 100
        ).toFixed(2);
      } else {
        return (this.productPrices[0].unit_amount / 100).toFixed(2);
      }
    },
    addItem: function () {
      if (this.sku && this.quantity && this.quantity > 0) {
        const cartItem = {
          sku: this.sku,
          quantity: this.quantity,
        };
        this.$store.dispatch(types.CART_ADD_ITEM, cartItem);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  border-radius: 25px;
  border: 0px;
  height: 50px;
  width: 50px;
  background-color: $pink;
  color: $white;
  font-size: 20px;
  text-align: center;
  overflow: hidden;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  svg {
    margin-top: 15px;
    display: inline-block;
  }

  div {
    display: inline-block;
    margin-left: 10px;
    visibility: hidden;
  }

  &:disabled {
    background-color: $light-pink;
    color: $pink;
  }

  &:hover:not(:disabled) {
    width: 200px;

    svg {
      margin-top: 0px;
    }

    div {
      visibility: visible;
    }
  }
}
</style>