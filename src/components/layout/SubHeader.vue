<template>
  <div class="site-sub-header">
    <div class="inner">
        <Social />
        <Drips />
    </div>
  </div>
</template>

<script>
import Drips from "@/components/layout/Drips.vue";
import Social from "@/components/layout/Social.vue";

export default {
  components: { Drips, Social }
};
</script>

<style lang="scss">
.site-sub-header {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;

    .inner {
        justify-content: space-between;
    }
}
</style>
