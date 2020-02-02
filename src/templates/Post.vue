<template>
  <Layout>
    <article class="post">
      <SummaryHeader
        :title="$page.post.title"
        :banner_image_alt="$page.post.banner_image_alt"
        :path="$page.post.path"
        :image="$page.post.image"
        :date="$page.post.date"
        :comments="$page.comments.totalCount"
        :showComments="true"
      />
      <div class="entry-content" v-html="$page.post.content"></div>
    </article>
    <Comments :post="$page.post" :comments="$page.comments.edges" />
  </Layout>
</template>
<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      image
      path
      banner_image_alt
      title
      date (format: "MMMM D, YYYY")
      content
      description
    }
    comments: allComment(perPage: 500, page: 1, filter: { path: { eq: $path }}) {
      totalCount
      edges{
        node {
          id
          date (format: "MMMM D, YYYY")
          avatar
          message
          name
        }
      }
    }
  }
</page-query>
<script>
import SummaryHeader from "../components/SummaryHeader";
import Comments from "../components/Comments";
export default {
  name: "Post",
  components: { Comments, SummaryHeader },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>