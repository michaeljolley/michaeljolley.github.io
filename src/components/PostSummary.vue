<template>
  <article class="post">
    <SummaryHeader
      :title="post.title"
      :banner_image_alt="post.banner_image_alt"
      :path="post.path"
      :image="post.image"
      :date="post.date"
      :showComments="true"
    />
    <div class="entry-content">
      <div v-html="summary"></div>
      <p class="read-more" v-if="hasMore">
        <g-link title="read more" class="more-link" :to="post.path">read more</g-link>
      </p>
    </div>
    <footer class="entry-footer">
      <div class="tag-links" :v-if="this.post.tags.length > 0">
        Tags:
        <Tags :tags="this.post.tags" />
      </div>
    </footer>
  </article>
</template>
<script>
import SummaryHeader from "./SummaryHeader";
import Tags from "./Tags";

export default {
  props: ["post"],
  components: { SummaryHeader, Tags },
  computed: {
    hasMore: function() {
      return this.post.content.search("<!--more-->") >= 0;
    },
    summary: function() {
      if (this.hasMore) {
        return this.post.content.split("<!--more-->")[0];
      }
      return this.post.content;
    }
  }
};
</script>
