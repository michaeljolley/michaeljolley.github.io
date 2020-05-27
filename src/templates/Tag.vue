<template>
  <Layout>
    <PostSummary v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" :post="post.node" />

    <nav class="pagination" v-if="$page.tag.belongsTo.pageInfo.totalPages > 1">
      <h2 class="screen-reader-text">Posts navigation</h2>
      <g-link
        :to="'/' + previousPage"
        v-if="!$page.tag.belongsTo.pageInfo.isFirst"
        class="newer-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-left']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Newer Posts</span>
      </g-link>

      <span
        class="page-number"
      >Page {{ $page.tag.belongsTo.pageInfo.currentPage }} of {{ $page.tag.belongsTo.pageInfo.totalPages }}</span>

      <g-link
        :to="'/' + ($page.tag.belongsTo.pageInfo.currentPage + 1)"
        v-if="!$page.tag.belongsTo.pageInfo.isLast"
        class="older-posts square fill-horizontal"
      >
        <font-awesome :icon="['fa', 'chevron-right']" swap-opacity></font-awesome>
        <span class="screen-reader-text">Older Posts</span>
      </g-link>
    </nav>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      pageInfo {
        totalPages
        currentPage
        isFirst
        isLast
      }
      edges {
        node {
          ...on Post {
          id
          title
          description
          timeToRead
          date (format: "MMMM D, YYYY")
          image
          path
          tags {
            id
          }
          content
          banner_image_alt
          }
        }
      }
    }
  }
}
</page-query>
<script>
import PostSummary from "@/components/posts/PostSummary";
export default {
  components: { PostSummary },
  metaInfo: {
    title: "Welcome!"
  },
  computed: {
    previousPage: function() {
      if (this.$page.tag.belongsTo.pageInfo.currentPage === 2) {
        return "";
      }
      return this.$page.tag.belongsTo.pageInfo.currentPage - 1;
    }
  }
};
</script>