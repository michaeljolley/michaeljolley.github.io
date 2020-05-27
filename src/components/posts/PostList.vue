<template>
    <div class="post-list">
        <PostSummary v-for="post in $static.posts.edges" :key="post.node.id" :post="post.node" />
    </div>
</template>

<static-query>
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
          tags {
            id
          }
          path
          content
          banner_image_alt
        }
      }
    }
  }
</static-query>
<script>
import PostSummary from "@/components/posts/PostSummary";
export default {
  components: { PostSummary },
  computed: {
    previousPage: function() {
      if (this.posts.pageInfo.currentPage === 2) {
        return "";
      }
      return this.posts.pageInfo.currentPage - 1;
    }
  }
};
</script>
<style lang="scss">
.post-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}
.post:first-child {
  flex-basis: 100%;

  .entry-header {
    background-color: $white;
    padding: 1em;
  }
  .entry-title { 
    margin: .2em 0 0 0;
    font-size: 1.8em;
    a {
      color: $pink;
    }
  }
  .entry-meta {
    color: $dark-blue;
    margin-top: .1em;
  }
}
</style>