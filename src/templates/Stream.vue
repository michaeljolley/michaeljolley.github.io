<template>
  <Layout>
    <article class="post">
      <SummaryHeader
        :title="$page.stream.title"
        :banner_image_alt="$page.stream.banner_image_alt"
        :path="$page.stream.path"
        :image="$page.stream.image"
        :date="$page.stream.date"
        :showComments="false"
      />
      <div class="entry-content" v-html="$page.stream.content"></div>
    </article>
  </Layout>
</template>
<page-query>
  query Stream ($path: String!) {
    stream: stream (path: $path) {
      id
      image
      title
      date (format: "MMMM D, YYYY")
      content
      description
    }
  }
</page-query>
<script>
import SummaryHeader from "../components/SummaryHeader";

export default {
  name: "Stream",
  components: { SummaryHeader },
  metaInfo() {
    return {
      title: this.$page.stream.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.stream.description
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>