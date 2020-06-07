<template>
  <header class="entry-header">
    <g-link :title="title" :to="path">
      <g-image :src="image" class="cld-responsive lazyload" :alt="banner_image_alt" />
    </g-link>
    <h2 class="entry-title" v-if="showTitle">
      <g-link :title="title" :to="path">{{title}}</g-link>
    </h2>
    <div class="entry-meta" v-if="date && showMeta">
      <time class="published" :datetime="date">{{ date }}</time>
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
    showMeta: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  }
};
</script>