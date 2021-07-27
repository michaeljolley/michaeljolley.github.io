<template>
  <main>
    <div class="posts container">
      <Card
        v-for="post in posts"
        :key="post.path"
        :data="post.data"
        :type="post.type"
        class="card"
      />
    </div>
  </main>
</template>

<script>
import Vue from 'vue'

export default {
  asyncData({ $content, params, error, payload }) {
    if (payload) {
      const items = [
        ...payload.posts.map((p) => {
          return { type: 'BlogCard', slug: p.slug, date: p.date, data: p }
        }),
      ]
      return {
        posts: items.sort((a, b) => new Date(b.date) - new Date(a.date)),
        page: 1,
      }
    }
  },
  data() {
    return {
      posts: [],
      enough: false,
      page: 0,
      isLoading: false,
    }
  },
  mounted() {
    if (this.page === 0) {
      this.loadPosts()
    }
  },
  methods: {
    async loadPosts() {
      if (this.posts.length === 0) {
        this.page = 0
      }

      const newPosts = await this.$content('blog')
        .only([
          'path',
          'title',
          'cover',
          'date',
          'description',
          'banner_image_alt',
          'readingTime',
          'slug',
          'dir',
          'tags',
        ])
        .where((obj) => new Date(obj.date) < Date.now())
        .sortBy('date', 'desc')
        .fetch()

      this.page++

      const items = [
        ...newPosts.map((p) => {
          return { type: 'BlogCard', slug: p.slug, date: p.date, data: p }
        }),
      ]

      if (items.length > 0) {
        this.posts.push(
          ...items.sort((a, b) => new Date(b.date) - new Date(a.date))
        )
      }
      await Vue.nextTick()
    },
  },
}
</script>

<style scoped>
.posts {
  @apply grid;
  @apply gap-6;

  @apply md:grid-cols-1;
  @apply lg:grid-cols-2;
  @apply lg:gap-10;
}

.cld-image {
  width: unset !important;
  margin: 0px -5px;
  @apply shadow-lg;
}

@screen lg {
  .cld-image {
    margin: 0px -8px;
  }
}

img {
  @apply rounded;
}
</style>
