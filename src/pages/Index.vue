<template>
  <Layout>
    <PostList />
  </Layout>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: { PostList },
  metaInfo: {
    title: "Welcome!"
  }
};
</script>