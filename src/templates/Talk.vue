<template>
  <Layout>
    <article class="post">
      <PostHeader
        :title="$page.talk.title"
        :banner_image_alt="$page.talk.banner_image_alt"
        :path="$page.talk.path"
        :image="$page.talk.image"
        :showComments="false"
      />
      <div class="entry-content" v-html="$page.talk.content"></div>
    </article>
  </Layout>
</template>
<page-query>
  query Talk ($path: String!) {
    talk: talk (path: $path) {
      id
      image
      title
      content
      description
    }
  }
</page-query>
<script>
import PostHeader from "@/components/posts/PostHeader";

export default {
  name: "Talk",
  components: { PostHeader },
  metaInfo() {
    return {
      title: this.$page.talk.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.talk.description
        }
      ]
    };
  }
};
</script>