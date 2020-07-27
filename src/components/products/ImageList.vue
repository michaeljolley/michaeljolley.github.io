<template>
  <carousel :per-page="1" :mouse-drag="false" paginationPosition="bottom-overlay">
    <slide v-for="i in images" v-bind:key="i">
      <img :src="i" />
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  props: ["images"],
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>