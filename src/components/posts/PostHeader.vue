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
      <span v-if="showComments">
        |&nbsp;
        <a :href="path + '#comments'">{{comments}} Comment<template v-if="comments !== 1">s</template></a>
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
    showComments: Boolean,
    showMeta: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {}
};
</script>
<style lang="scss">
.entry-header {
  background-color: $light-blue;
  padding: .5em;
  height: 95%;

  img {
    width: 100%;
    background-color: $white;
  }

}
.entry-title {
  margin: .5em 0 0 0;
  font-size: 1em;
  font-family: 'PT Sans', sans-serif;
  a {
    text-decoration: none;
    color: $white;
  }
}
.entry-meta {
  font-size: .7em;
  margin-top: .2em;
  color: $gray;
}
</style>