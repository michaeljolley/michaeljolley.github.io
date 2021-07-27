<template>
  <header>
    <cld-image
      v-if="cover && cover.public_id"
      :alt="title"
      :public-id="cover.public_id"
      :title="title"
      quality="auto"
      fetch-format="auto"
      responsive
      loading="lazy"
      ><cld-placeholder type="blur"
    /></cld-image>
  </header>
</template>
<script>
export default {
  props: {
    cover: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped></style>
