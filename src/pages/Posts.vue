<template>
  <Layout>

     <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <PostList posts="$page.posts" />
        </main>
      </div>
    </div>
    

  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
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
          date (format: "MMMM D, YYYY")
          image
          path
          banner_image_alt
        }
      }
    }
  }
</page-query>
<script>
import PostList from "@/components/posts/PostList";
export default {
  components: { 
    PostList 
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>