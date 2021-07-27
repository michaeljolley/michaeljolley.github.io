<template>
  <a href="https://discord.gg/XSG7HJm" title="Watch" target="_blank" noreferrer>
    <div>
      <h3>{{ video.title }}</h3>
      <p>
        {{ video.description }}
      </p>
      <p class="link">watch now ></p>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
a {
  @apply flex flex-row gap-6;
  @apply rounded-xl;
  @apply font-robotoMono;
  @apply p-4;
  @apply shadow-md;
}

div {
  @apply flex flex-col justify-between;
}

h3 {
  @apply flex-nowrap;
  @apply text-lg uppercase text-white;
}
p {
  @apply text-white text-xs;
}
.link,
.link:hover {
  @apply text-gray-700 text-xs;
  @apply font-bold;
  @apply ml-auto mt-auto;
}
svg {
  @apply w-1/2;
}
</style>
