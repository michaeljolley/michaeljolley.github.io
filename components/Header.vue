<template>
  <header>
    <div class="container">
      <main>
        <NuxtLink to="/" class="title" title="back home">
          <div class="logo" :class="{ live: isStreaming }"></div>
          <div class="text">
            <h2>bald. bearded. builder.</h2>
            <h2>bbb.dev</h2>
          </div>
        </NuxtLink>
        <Hamburger />
      </main>
      <Navigation />
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['showCart', 'isStreaming']),
  },
  created() {
    this.$store.dispatch('checkStream')
  },
}
</script>
<style scoped>
header {
  border-top: solid 5px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 255, 255, 1) 100%
  );
  @apply py-4;
}

.title {
  @apply flex flex-row;
  @apply ml-8 lg:ml-0;
}

.container {
  @apply flex flex-col;
  @apply md:flex-row md:justify-between;
}

main {
  @apply flex flex-row justify-between;
  @apply w-full;

  @apply md:w-auto;
}

.text {
  @apply flex items-center;
}
.logo {
  background-image: url('/images/bbb-logo-black.svg');
  height: 50px;
  width: 50px;
  @apply bg-no-repeat;
  @apply mr-2;
}

.twitch .logo {
  background-image: url('/images/bbb-logo.svg');
  @apply rounded-3xl;
  @apply bg-pink-500;

  animation: pulse-animation 2s infinite;
}

h2 {
  @apply hidden;
  @apply font-robotoMono;
  @apply border-0;
  @apply m-0;
  @apply p-0;
  @apply text-xl;
  @apply font-bold;

  @apply lg:flex;
}

h2:last-child {
  @apply flex;

  @apply lg:hidden;
}

@screen md {
  .logo {
    @apply ml-0;
  }
}
</style>
