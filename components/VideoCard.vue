<template>
  <div class="card">
    <a
      :href="data.link"
      :title="data.title"
      class="img"
      rel="noreferrer"
      target="_blank"
      :style="{ backgroundImage: `url(${data.thumbnail})` }"
    >
    </a>
    <section>
      <a :href="data.link" :title="data.title" rel="noreferrer" target="_blank">
        <h2>{{ data.title.replace('| Extension Highlight', '') }}</h2>
      </a>
      <span>
        <a
          :href="data.link"
          :title="data.title"
          rel="noreferrer"
          target="_blank"
          ><font-awesome-icon :icon="['fab', 'youtube']" /> watch now ></a
        >
      </span>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.img {
  @apply bg-center;
  @apply bg-cover;
  @apply h-40;
}

a {
  @apply text-pink-500;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(255, 0, 255, 0.4),
    0 2px 4px -1px rgba(255, 0, 255, 0.4);
}

.card {
  @apply flex flex-col;
}

.card section {
  @apply pt-1 pb-3 px-4;
}

.card section h2 {
  @apply text-xl;
  @apply mb-2;
  @apply text-indigo-500;
  @apply border-none;
  background-clip: unset;
  background: unset;
  -webkit-text-fill-color: unset;
  border-image-source: unset;
  border-image-slice: unset;
}
</style>
