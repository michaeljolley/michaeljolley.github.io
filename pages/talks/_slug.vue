<template>
  <article>
    <header>{{ talk.title }}</header>
    <section>
      <nuxt-content :document="talk" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const talk = await $content('/talks', params.slug).fetch()

    return {
      talk,
    }
  },
}
</script>

<style scoped></style>
