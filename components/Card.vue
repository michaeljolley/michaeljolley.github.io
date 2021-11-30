<template>
  <NuxtLink :to="`${post.dir}/`" class="card">
    <header>
      <h3>{{ post.title }}</h3>
    </header>
    <main>
      <p>{{ post.description }}</p>
    </main>
    <footer>
      <span>14 min read</span>
      <span>read more <ChevronRightIcon/></span>
    </footer>
  </NuxtLink>
</template>
<script lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/solid"

export default defineComponent({
  components: {ChevronRightIcon},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
})
</script>
<style lang="scss" scoped>
.card {
  @apply flex flex-col;
  @apply max-w-sm;
  @apply p-1;
  @apply bg-gradient-to-br from-bbbpink to-bbbblue;

  @apply rounded-lg;

  transform:
    perspective(1000px)
    translate3d(0px, 0px, -250px)
    rotateX(25deg)
    scale(0.9, 0.9);
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translate3d(0px, 0px, -250px);
    box-shadow: 0 30px 20px -10px rgba(0, 0, 0, 0.2);
    
    &:before {
      height: 98%;
    }

    footer span:last-child {
      @apply opacity-100;
    }
  }

  &:before {
    content: "";
    @apply absolute; 
    height: 100%;
    width:98%;
    
    background: linear-gradient(to bottom right, #c04b9b, #21c0db);
    z-index: -1;
    @apply rounded-lg;
    
    transition: 0.4s ease-in-out height;
  }

  header, main, footer {
    @apply bg-white dark:bg-gray-900 dark:text-white;
  }

  header {
    @apply rounded-t-md;
    @apply px-6 pt-4 pb-2;

    h3 {
      @apply font-bold text-2xl m-0 text-bbbpink dark:text-bbbpink;
    }
  }

  main {
    @apply px-6;
    @apply text-base;
  }

  footer {
    @apply grid grid-cols-2 gap-4;
    @apply px-6 py-4;
    @apply text-xs text-bbbblue dark:text-bbbblue;
    @apply rounded-b-md;

    span {
      @apply flex flex-nowrap items-center;
      svg {
        @apply h-5;
      }

      &:last-child {
        @apply justify-end;
        @apply text-bbbpink dark:text-bbbpink;
        @apply opacity-0;
        transition: 0.4s ease-in-out opacity;
      }
    }
  }
}

.dark .card {
  
  box-shadow: 0 50px 40px -20px rgba(67, 209, 235, 0.1);

  &:hover {
    transform: translate3d(0px, 0px, -250px);
    box-shadow: 0 20px 20px -15px rgba(67, 209, 235, 0.1);
  }
}
</style>