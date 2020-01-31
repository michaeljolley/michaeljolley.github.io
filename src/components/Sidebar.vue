<template>
  <aside class="sidebar">
    <section class="widget widget-text">
      <h2 class="widget-title">About Michael Jolley</h2>
      <p>Michael is a bald, bearded, builder with a passion for helping others succeed. For nearly 20 years, he’s used his experience in software development and DevOps for clients ranging from start-ups to Fortune 500.</p>
    </section>

    <RecentPosts />
    <TagCloud />
  </aside>
</template>

<script>
import RecentPosts from "./RecentPosts";
import TagCloud from "./TagCloud";

export default {
  components: { RecentPosts, TagCloud }
};
</script>
