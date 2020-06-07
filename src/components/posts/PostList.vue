<template>
  <div>
    <div class="list">
      <PostSummary v-for="post in $page.posts.edges" :key="post.node.id" :post="post.node" />
    </div>
    <Pager :pageInfo="$page.posts.pageInfo" label="Posts"/>
  </div>
</template>

<script>
import Pager from '@/components/Pager'
import PostSummary from "@/components/posts/PostSummary";
export default {
  props: ["posts"],
  components: {
    Pager,
    PostSummary 
  }
};
</script>