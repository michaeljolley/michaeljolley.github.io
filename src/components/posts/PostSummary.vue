<template>
  <article class="post">
    <PostHeader
          :title="post.title"
          :banner_image_alt="post.banner_image_alt"
          :path="post.path"
          :image="post.image"
          :date="post.date"
          :showComments="false"
        />
  </article>
</template>
<script>
import PostHeader from "@/components/posts/PostHeader";

export default {
  props: ["post"],
  components: { PostHeader }
};
</script>
<style lang="scss" scoped>
.post {
  margin-bottom: 20px;
  flex-basis: 49%;
}
</style>