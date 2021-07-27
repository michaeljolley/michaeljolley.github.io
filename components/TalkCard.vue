<template>
  <div class="card">
    <nuxt-link
      class="img"
      :to="`/talks/${data.slug}/`"
      :title="data.title"
      :style="{ backgroundImage: `url(${data.cover.secure_url})` }"
    >
    </nuxt-link>
    <section>
      <nuxt-link :to="`/talks/${data.slug}/`" :title="data.title">
        <h2>{{ data.title }}</h2>
      </nuxt-link>
      <p>{{ data.description }}</p>
      <span>
        <nuxt-link :to="`/talks/${data.slug}/`" :title="data.title">
          <font-awesome-icon :icon="['fas', 'microphone']" />learn more >
        </nuxt-link>
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
  @apply bg-cover;
}

span {
  @apply text-indigo-500;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(102, 102, 204, 0.4),
    0 2px 4px -1px rgba(102, 102, 204, 0.4);
}
</style>
