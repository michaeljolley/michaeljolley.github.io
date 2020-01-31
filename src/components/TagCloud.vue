<template>
  <section class="widget widget-tags">
    <h2 class="widget-title">Tags</h2>
    <div class="tagcloud">
      <g-link
        v-for="tag in $static.tags.edges"
        :key="tag.node.id"
        :to="'/tags/' + tag.node.id"
      >{{ tag.node.id }}</g-link>
    </div>
  </section>
</template>

<static-query>
  query Tags {
    tags: allTag (perPage: 100, page: 1) {
    edges {
      node {
        id
      }
    }
  }
  }
</static-query>
<script>
export default {};
</script>
