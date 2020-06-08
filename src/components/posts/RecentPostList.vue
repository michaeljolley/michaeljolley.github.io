<template>  
  <div>
    <h2>Recent Posts</h2>
    <div class="list bottom">
        <PostSummary v-for="post in $static.posts.edges" :key="post.node.id" :post="post.node" />
    </div>
  </div>
</template>

<static-query>
  query Posts ($page: Int) {
    posts: allPost (perPage: 2, page: $page) @paginate {
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
};
</script>