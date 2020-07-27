<template>
  <g-link to="/Cart" v-if="this.$store.state.cart.length !== 0" title="View Cart">
    <div class="cartDrop" v-bind:class="{bounce: shouldBounce}">
      <font-awesome :icon="['fa', 'shopping-cart']"></font-awesome>
      <div>
        {{this.$store.state.cart.length}}
        <template v-if="this.$store.state.cart.length > 1">items</template>
        <template v-if="this.$store.state.cart.length === 1">item</template>
      </div>
    </div>
  </g-link>
</template>
<script>
export default {
  data() {
    return {
      shouldBounce: false,
    };
  },
  methods: {
    bounceIt: function () {
      this.shouldBounce = true;
      setTimeout(() => (this.shouldBounce = false), 1000);
    },
  },
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters.itemCount,
      (newValue, oldValue) => {
        this.bounceIt();
      }
    );
  },
  beforeDestroy() {
    this.unwatch();
  },
};
</script>
<style lang="scss">
.cartDrop {
  background-color: $mint;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  color: $white;
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  z-index: 1000;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  svg {
    margin-top: 15px;
  }

  div {
    display: inline-block;
    margin-left: 10px;
    visibility: hidden;
  }

  &:hover {
    width: 150px;

    div {
      visibility: visible;
    }
  }

  &.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-animation-duration: 1.3s;
    animation-duration: 1.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
}
</style>