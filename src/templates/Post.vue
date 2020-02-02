<template>
  <Layout>
    <article class="post">
      <SummaryHeader
        :title="$page.post.title"
        :banner_image_alt="$page.post.banner_image_alt"
        :path="$page.post.path"
        :image="$page.post.image"
        :date="$page.post.date"
        :showComments="true"
      />
      <div class="entry-content" v-html="$page.post.content"></div>
    </article>
    <Comments :post="$page.post" />
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