<template>
  <header :class="{ scroll: isSticky }">
    <div
      class="mast"
      :style="{ backgroundImage: `url(${talk.cover.secure_url})` }"
    ></div>
    <div class="title">
      <h1>{{ talk.title }}</h1>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    talk: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pos: 0,
      isSticky: false,
    }
  },
  watch: {
    pos(value) {
      this.isSticky = this.pos >= this.$el.nextElementSibling.offsetTop
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.pos = window.pageYOffset
    },
  },
}
</script>
<style scoped>
header {
  @apply flex flex-row;
  @apply w-full;
  min-height: 15rem;
}

header.scroll {
  @apply bg-white;
  @apply sticky;
  @apply shadow-md;
  @apply top-0;
  @apply grid;
  @apply z-10;
  grid-template: 1fr / 25% 1fr;
  min-height: 6rem;
}

.mast {
  @apply w-full;
  @apply bg-center bg-cover;
}

.title {
  @apply hidden;
}

header.scroll .title {
  @apply flex flex-col justify-center;
  @apply px-3;

  @apply lg:px-5;
}

p {
  @apply text-xs text-gray-400;
}

h1 {
  @apply text-xl;
  @apply mt-3 mb-0;

  @apply lg:text-4xl;
}

@screen md {
  header {
    min-height: 20rem;
  }
}

@screen lg {
  header {
    min-height: 30rem;
  }
  header.scroll {
    grid-template: 1fr / 15% 1fr;
  }
}
</style>
