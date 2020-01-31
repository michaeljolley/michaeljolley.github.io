<template>
  <section class="widget widget-recent-posts">
    <h2 class="widget-title">Latest Posts</h2>
    <ul class="recent-posts">
      <li class="recent-item" v-for="post in $static.posts.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
        <span>{{ post.node.date }}</span>
      </li>
    </ul>
  </section>
</template>

<static-query>
  query  {
    posts: allPost (perPage: 5, page: 1) @paginate {
      edges {
        node {
          id
          title
          date (format: "MMMM D, YYYY")
          path
        }
      }
    }
  }
</static-query>
<script>
export default {};
</script>
