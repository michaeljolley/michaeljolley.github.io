<template>
  <div class="flex flex-wrap">
    <Tag v-for="tag in tags.slice(0, 3)" :key="tag" :tag="tag" :link="false" />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
