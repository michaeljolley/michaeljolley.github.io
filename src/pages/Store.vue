<template>
  <Layout>
    <ProductList :products="$page.products" :prices="$page.prices" />
  </Layout>
</template>

<page-query>
  query data ($page: Int) {
    products: allStripeProduct (perPage: 5, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
        isFirst
        isLast
      }
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
</page-query>
<script>
import ProductList from "@/components/products/ProductList";

export default {
  components: { ProductList },
  metaInfo: {
    title: "Shop",
  },
};
</script>