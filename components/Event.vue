<template>
  <div class="event">
    <aside>
      <v-image
        v-if="event.cover"
        :alt="event.name"
        :src="event.cover.public_id"
      />
    </aside>
    <section>
      <h3>{{ event.name }}</h3>
      <p>
        {{ event.date | formatDate }}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.event {
  @apply grid grid-cols-2;
  grid-template: 1fr / 30% 1fr;
}

aside {
  @apply p-3;
  @apply h-full;
  @apply w-full;
  @apply rounded-none;
}

section {
  @apply p-3;
  @apply flex flex-col align-top;
}

h3 {
  @apply border-none;
  @apply mt-0 mb-0;
  @apply pb-0;
}

p {
  @apply text-sm;
  @apply py-0 my-0;
}
</style>
