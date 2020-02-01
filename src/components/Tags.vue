<template>
  <span>
    <g-link
      v-for="tag in tags"
      :key="tag.id"
      :to="'/tags/' + (tag.id || tag)"
      rel="tag"
    >{{ tag.id || tag }}</g-link>
  </span>
</template>
<script>
export default {
  props: ["tags"]
};
</script>
