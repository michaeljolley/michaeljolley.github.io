<template>
  <header class="entry-header">
    <iframe 
      :src="recording" 
      v-if="recording !== null"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    <g-link :title="title" :to="path" v-if="recording === null">
      <g-image :src="image" class="cld-responsive lazyload" :alt="image_alt" />
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
    },
    recording: {
      type: String,
      default: null
    }
  },
  computed: {
    image_alt: function() {
      return this.banner_image_alt | this.title; 
    }
  }
};
</script>