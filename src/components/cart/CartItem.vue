<template>
  <tr>
    <td>
      <img :src="imageSrc" />
      {{itemDescription(cartItem)}}
    </td>
    <td class="price">{{this.unitPrice.toFixed(2)}}</td>
    <td class="price">
      <input type="number" v-model="cartItem.quantity" on />
    </td>
    <td class="price">{{this.totalPrice.toFixed(2)}}</td>
    <td>
      <a title="Remove Item" class="trash" v-on:click="removeItem(cartItem)">
        <font-awesome :icon="['fa', 'trash-alt']"></font-awesome>
      </a>
    </td>
  </tr>
</template>

<script>
import * as types from "../../state/Mutations";

export default {
  props: ["cartItem", "products", "prices"],
  computed: {
    imageSrc: function () {
      return JSON.parse(this.product.metadata.image)[0];
    },
    product: function () {
      return this.products.find((f) => f.id === this.price.product);
    },
    price: function () {
      return this.prices.find((f) => f.id === this.cartItem.sku);
    },
    unitPrice: function () {
      return this.price.unit_amount / 100;
    },
    totalPrice: function () {
      return this.cartItem.quantity * (this.price.unit_amount / 100);
    },
  },
  methods: {
    itemDescription: function (cartItem) {
      const size = this.price.nickname ? ` (${this.price.nickname})` : "";
      return `${this.product.name}${size}`;
    },
    removeItem: function (cartItem) {
      this.$store.dispatch(types.CART_REMOVE_ITEM, cartItem);
    },
    updateItem: function (cartItem) {
      if (cartItem.quantity > 0) {
        this.$store.dispatch(types.CART_UPDATE_ITEM, cartItem);
      } else {
        removeItem(cartItem);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.trash {
  color: $pink;
  cursor: pointer;
  margin-left: 40px;
}
img {
  width: 100px;
  border: 1px solid $dark-blue;
  border-radius: 20px;
  margin: 10px;
  background-color: $white;
}
input {
  width: 75px;
  padding: 4px;
  color: $black;
  text-align: right;
  border-radius: 5px;
}
.price {
  text-align: right;
}
</style>