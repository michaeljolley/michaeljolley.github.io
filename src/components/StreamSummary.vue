<template>
  <article class="post">
    <SummaryHeader
      :title="stream.title"
      :banner_image_alt="stream.banner_image_alt"
      :path="stream.path"
      :image="stream.image"
      :date="stream.date"
      :showComments="false"
    />
    <div class="entry-content">
      <div v-html="summary"></div>
      <p class="read-more" v-if="hasMore">
        <g-link title="read more" class="more-link" :to="stream.path">read more</g-link>
      </p>
    </div>
    <footer class="entry-footer">
      <div class="tag-links" :v-if="this.stream.tags.length > 0">
        Tags:
        <Tags :tags="this.stream.tags" />
      </div>
    </footer>
  </article>
</template>
<script>
import SummaryHeader from "./SummaryHeader";
import Tags from "./Tags";

export default {
  props: ["stream"],
  components: { SummaryHeader, Tags },
  computed: {
    hasMore: function() {
      return this.stream.content.search("<!--more-->") >= 0;
    },
    summary: function() {
      if (this.hasMore) {
        return this.stream.content.split("<!--more-->")[0];
      }
      return this.stream.content;
    }
  }
};
</script>
