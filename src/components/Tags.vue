<template>
  <span>
    <g-link v-for="tag in tags" :key="tag.id" :to="'/tags/' + tag.id" rel="tag">{{ tag.id }}</g-link>
  </span>
</template>
<script>
export default {
  props: ["tags"]
};
</script>
