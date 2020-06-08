<template>
  <div class="site-sub-header">
    <MobileNav />
    <div class="inner">
        <Social />
        <Drips />
    </div>
  </div>
</template>

<script>
import Drips from "@/components/layout/Drips.vue";
import Social from "@/components/layout/Social.vue";
import MobileNav from "@/components/layout/MobileNav.vue";

export default {
  components: { Drips, MobileNav, Social }
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
