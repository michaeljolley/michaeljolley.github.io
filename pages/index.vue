<template>
  <main>
    <Mast />
    <div class="container">
      <aside class="mini">
        <!-- <NextEvent v-if="nextMeetup" :meetup="nextMeetup" /> -->
        <Discord class="mid" />
      </aside>
      <section>
        <div>
          <Card
            v-for="item in items"
            :key="item.slug"
            :data="item.data"
            :type="item.type"
          />
        </div>
        <aside>
          <!-- <NextEvent v-if="nextMeetup" :meetup="nextMeetup" /> -->
          <Discord />
          <Card
            v-for="video in videos"
            :key="video.slug"
            :data="video.data"
            :type="video.type"
          />
        </aside>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('/blog')
      .limit(5)
      .sortBy('date', 'desc')
      .fetch()

    const youtube = await $content('/videos')
      .limit(5)
      .sortBy('date', 'desc')
      .fetch()

    // const nextMeetup = await $content('/meetup')
    //   .where({ date: { $gte: new Date() } })
    //   .limit(1)
    //   .sortBy('date', 'asc')
    //   .fetch()

    const items = [
      ...posts.map((p) => {
        return { type: 'BlogCard', slug: p.slug, date: p.date, data: p }
      }),
    ]
    const videos = [
      ...youtube.map((p) => {
        return { type: 'VideoCard', slug: p.slug, date: p.date, data: p }
      }),
    ]

    return {
      items: items.sort((a, b) => new Date(b.date) - new Date(a.date)),
      // nextMeetup: nextMeetup.length > 0 ? nextMeetup[0] : undefined,
      videos: videos.sort((a, b) => new Date(b.date) - new Date(a.date)),
    }
  },
}
</script>

<style scoped>
.container {
  @apply flex flex-col;
  @apply md:mt-5;
}
section {
  @apply flex flex-col gap-6;
  @apply md:grid md:grid-cols-1;
}
section > div {
  @apply flex flex-col gap-6;
}
section aside {
  @apply hidden;
  @apply lg:grid;
}

aside {
  @apply flex flex-col gap-6;
  @apply mb-6;
}

.mini {
  @apply w-full;
  @apply grid md:grid-cols-2;
  @apply lg:hidden;
}

.mid {
  @apply hidden;
  @apply md:flex;
  @apply lg:hidden;
}

@screen md {
  section > div .card:first-of-type {
    @apply flex flex-col;
  }

  section > div .card:first-of-type >>> .img {
    @apply h-48;
    @apply bg-cover bg-center;
    @apply md:h-96;
  }
}

@screen lg {
  section {
    grid-template: 1fr / 1fr 30%;
  }
}
</style>
