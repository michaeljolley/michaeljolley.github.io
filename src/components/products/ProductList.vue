<template>
  <div>
    <div class="list">
      <Product
        v-for="product in $page.products.edges"
        :key="product.node.id"
        :product="product.node"
        :prices="$page.prices.edges"
      />
    </div>
    <Pager :pageInfo="$page.products.pageInfo" label="Items" />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import Product from "@/components/products/Product";
export default {
  props: ["products", "prices"],
  components: {
    Pager,
    Product,
  },
};
</script>
<style lang="scss" scoped>
.list {
  justify-content: space-evenly;
}
</style>