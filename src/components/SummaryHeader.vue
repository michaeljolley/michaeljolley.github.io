<template>
  <header class="entry-header">
    <div class="entry-header-wrap">
      <div class="post-thumbnail">
        <g-link :title="title" :to="path">
          <g-image :src="image" class="cld-responsive lazyload" :alt="banner_image_alt" />
        </g-link>
      </div>
      <h2 class="entry-title">
        <g-link :title="title" :to="path">{{title}}</g-link>
      </h2>
    </div>
    <div class="entry-meta">
      <time class="published" :datetime="date">{{ date }}</time>
      <span v-if="showComments">
        |
        <a :href="path + '#comments'">s</a>
      </span>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: String,
    banner_image_alt: String,
    path: String,
    image: String,
    date: String,
    comments: Number,
    showComments: Boolean
  },
  computed: {}
};
</script>
