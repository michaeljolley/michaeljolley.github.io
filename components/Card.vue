<template>
  <component :is="type" :data="data" />
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.card {
  @apply grid grid-cols-2;
  @apply shadow-md;
  @apply rounded-xl;
  @apply overflow-hidden;

  min-height: 12rem;
  grid-template: 1fr / 20% 1fr;
}

.img {
  @apply bg-no-repeat;
  @apply w-full h-full;
}

.card >>> section {
  @apply flex flex-col;
  @apply bg-white;
  @apply p-4;
}

.card >>> section h2 {
  @apply text-3xl;
  @apply pb-1;
  @apply my-1;
}

.card >>> section p {
  @apply font-robotoMono text-sm;
  @apply text-black;
  line-height: 1.5rem;
}

.card >>> section span {
  @apply flex flex-row justify-end text-sm;
  @apply justify-self-end;
  @apply font-robotoMono;
  @apply mt-auto;
}

.card >>> section span a {
  @apply flex items-center justify-end;
}

.card >>> section span svg {
  @apply mr-2;
  @apply text-2xl;
}
</style>
