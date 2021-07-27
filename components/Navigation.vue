<template>
  <nav :class="{ open: menuExpanded }">
    <ul>
      <li>
        <NuxtLink to="/blog/" title="Blog posts">Blog</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/community/" title="Community">Community</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/talks/" title="Talks">Talks</NuxtLink>
      </li>
      <li>
        <a href="http://bbb.dev/shop" noreferrer title="Swag">Swag</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['menuExpanded']),
  },
}
</script>
<style scoped>
nav {
  @apply hidden;
  @apply content-start;
  @apply mt-3;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 255, 255, 1) 100%
  );
  @apply mr-0;

  @apply md:bg-none;
  @apply md:mt-0 md:mr-8 md:flex md:flex-row md:items-center;
  @apply lg:mr-0;
}

nav.open {
  @apply flex flex-col;
  @apply py-4;

  @apply md:flex-row;
  @apply md:py-0;
}

ul {
  @apply inline-flex flex-row flex-wrap;
  @apply w-full;

  @apply md:flex;
}

li {
  @apply flex align-middle;
  @apply py-2 pl-4;
  @apply whitespace-nowrap;

  @apply md:py-0 md:pl-6;
  @apply lg:pl-10;
}

a {
  @apply font-robotoMono font-bold;
  @apply text-base lowercase;
  @apply px-3 py-3;

  @apply bg-white;
  @apply text-black;

  @apply md:bg-opacity-0;
}

a:hover {
  @apply text-white;
  @apply bg-gray-500;
}

a.nuxt-link-active {
  @apply bg-black;
  @apply text-blue-500;
}
</style>
