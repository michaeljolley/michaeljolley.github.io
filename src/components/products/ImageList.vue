<template>
  <img :src="images[0]" />
</template>
<script>
export default {
  props: ["images"],
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>