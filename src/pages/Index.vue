<template>
  <Layout>
    <PostSummary v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />

    <nav class="pagination" v-if="$page.posts.pageInfo.totalPages > 1">
      <h2 class="screen-reader-text">Posts navigation</h2>
      <g-link
        :to="'/' + previousPage"
        v-if="!$page.posts.pageInfo.isFirst"
        class="newer-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-left']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Newer Posts</span>
      </g-link>

      <span
        class="page-number"
      >Page {{ $page.posts.pageInfo.currentPage }} of {{ $page.posts.pageInfo.totalPages }}</span>

      <g-link
        :to="'/' + ($page.posts.pageInfo.currentPage + 1)"
        v-if="!$page.posts.pageInfo.isLast"
        class="older-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-right']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Older Posts</span>
      </g-link>
    </nav>
  </Layout>
</template>

<page-query>
  query Posts ($page: Int) {
    posts: allPost (perPage: 5, page: $page) @paginate {
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
          title
          description
          timeToRead
          date (format: "MMMM D, YYYY")
          image
          path
          tags
          content
          banner_image_alt
        }
      }
    }
  }
</page-query>
<script>
import PostSummary from "../components/PostSummary";
export default {
  components: { PostSummary },
  metaInfo: {
    title: "Welcome!"
  },
  computed: {
    previousPage: function() {
      if (this.$page.posts.pageInfo.currentPage === 2) {
        return "";
      }
      return this.$page.posts.pageInfo.currentPage - 1;
    }
  }
};
</script>