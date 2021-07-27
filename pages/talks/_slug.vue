<template>
  <main>
    <TalkHeader :talk="talk" />
    <div class="container">
      <aside>
        <TableOfContents
          v-if="talk.toc && talk.toc.length > 0"
          :toc="talk.toc"
          :levels="talk.toc.length > 10 ? [2] : [2, 3]"
        />
        <SocialSharing :post="talk" />
      </aside>
      <article class="content">
        <h1>{{ talk.title }}</h1>
        <div v-if="talk.video">
          <iframe
            :src="`https://www.youtube.com/embed/${talk.video}`"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div class="prose">
          <nuxt-content :document="talk" />
        </div>
        <div class="events">
          <Event v-for="event in events" :key="event.slug" :event="event" />
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import config from '@/modules/config'
export default {
  async asyncData({ $content, params, error, payload }) {
    if (payload) {
      return { talk: payload.talk, events: payload.events }
    } else {
      const talk = await $content('talks', params.slug).fetch()

      const events = await $content('events')
        .where({ talk: { $eq: params.slug } })
        .sortBy('date', 'desc')
        .fetch()
      return { talk, events }
    }
  },
  head() {
    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: this.talk.description,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: `${config.baseUrl}${this.talk.path}`,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.talk.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.talk.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.talk.ograph
          ? this.talk.ograph.secure_url
          : this.talk.cover.secure_url,
      },
      {
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: '1200',
      },
      {
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: '600',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.talk.banner_image_alt || this.talk.title,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${config.baseUrl}${this.talk.path}`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${this.talk.title}${config.baseSplitter}${config.baseTitle}`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.talk.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.talk.ograph
          ? this.talk.ograph.secure_url
          : this.talk.cover.secure_url,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '600',
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: this.talk.banner_image_alt || this.talk.title,
      },
      {
        hid: 'og:updated_time',
        property: 'og:updated_time',
        content: this.talk.updatedAt,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: `${this.talk.title}${config.baseSplitter}${config.baseBrand}`,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ]

    return {
      title: this.talk.title,
      meta,
    }
  },
}
</script>

<style scoped>
div > iframe {
  width: 100%;
  margin: 0 auto;
  border-radius: 0.5rem;
  @apply mt-10;
}

.container {
  @apply flex items-start gap-2;
  @apply mx-auto;
  @apply px-4;
  @apply mt-10;

  @apply md:gap-4;
  @apply lg:gap-6;
}

aside,
article {
  @apply bg-white;
  @apply rounded-lg;
  @apply shadow-md;
  @apply p-5 py-2;

  @apply lg:pt-5 lg:pb-2;
}

aside {
  @apply w-auto;
  @apply sticky;
  top: 120px;
}

h1 {
  @apply text-indigo-700;
  @apply text-2xl;
  @apply pb-2;

  @apply md:text-3xl;
  @apply lg:text-4xl;

  border-bottom: 1px solid;
  border-image-source: linear-gradient(
    90deg,
    rgba(255, 0, 255, 1) 0%,
    rgba(0, 255, 255, 1) 100%
  );
  border-image-slice: 1;
}
.post {
  @apply flex;
  @apply items-start;
  @apply mt-10;
  @apply space-x-2;
  @apply lg:space-x-3;
}

.events {
  @apply grid;
  @apply gap-6;
  @apply mt-10;

  @apply md:grid-cols-1;
  @apply lg:grid-cols-2;
  @apply lg:gap-6;
}

@screen lg {
  .nuxt-content .cld-image {
    margin: 50px -45px;
  }
}

@screen md {
  div > iframe {
    min-height: 322px;
  }
}

@screen lg {
  div > iframe {
    min-height: 358px;
  }
  article {
    @apply w-4/5;
  }
  aside {
    @apply w-1/5;
  }
}

@screen xl {
  div > iframe {
    min-height: 448px;
  }
}

@screen 2xl {
  div > iframe {
    min-height: 537px;
  }
}
</style>
