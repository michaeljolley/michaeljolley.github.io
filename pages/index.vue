<template>
  <h2>Top Articles This Week</h2>
  <Card :post="post"/>
</template>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      post: {
        title: 'Building a Discord Bot to Improve Inclusive Language',
        description: "Growing up in the Southeast US, the word 'guys' was used to denote everyone. Sure we had other words that meant the same; y'all, folks, and everybody to name a few, but no one thought twice about calling to a group of people with 'hey guys.'"
      }
    }
  }
})
</script>