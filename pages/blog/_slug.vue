<template>
  <article>
    <header>{{ post.title }}</header>
    <section>
      <nuxt-content :document="post" />
    </section>
    <section>
      <p v-for="comment in comments" :key="comment.slug">
        {{ comment.message }}
      </p>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('/blog', params.slug).fetch()

    const comments = await $content('/comments')
      .where({ postslug: { $eq: params.slug } })
      .fetch()

    return {
      post,
      comments,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
