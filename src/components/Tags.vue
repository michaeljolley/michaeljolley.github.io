<template>
  <span>
    <g-link v-for="tag in tags" :key="tag" :to="'/tags/#' + tag" rel="tag">{{ tag }}</g-link>
  </span>
</template>
<script>
export default {
  props: ["tags"]
};
</script>
