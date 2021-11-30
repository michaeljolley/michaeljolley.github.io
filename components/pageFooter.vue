<template>
  <footer>
   <section>
     <NuxtLink to="/code-of-conduct/" title="Code of Conduct"><BadgeCheckIcon/> Code of Conduct</NuxtLink>
     <a href="https://github.com/michaeljolley/michaeljolley.github.io" title="Crafted with love on GitHub">Crafted with <HeartIcon/></a>
    </section>
  </footer>
</template>
<script lang="ts">
import { BadgeCheckIcon } from '@heroicons/vue/outline';
import { HeartIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    BadgeCheckIcon,
    HeartIcon
  }
})
</script>
<style lang="scss" scoped>
footer {
  @apply mb-5;

  section {
    @apply flex justify-between;
    @apply relative;

    @apply mx-8;
    @apply lg:m-auto mb-auto;

    @apply max-w-full;

    @apply md:max-w-4xl;
    @apply lg:max-w-5xl;
    @apply xl:max-w-6xl;
    @apply 2xl:max-w-7xl;
    
    a {
      @apply flex items-center;
      @apply text-gray-500;
      @apply font-normal;

      &:hover {
        @apply text-bbbpink;
      }
    }

    svg {
      @apply h-5;
      @apply font-normal;
      @apply mx-1;
    }
  }
}
</style>