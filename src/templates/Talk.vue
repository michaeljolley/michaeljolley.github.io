<template>
  <Layout>
    <article class="page">
        <TalkHeader
          :title="$page.talk.title"
          :banner_image_alt="$page.talk.banner_image_alt"
          :path="$page.talk.path"
          :image="$page.talk.image"
          :showComments="false"
          :showTitle="false"
        />
        <div class="entry-content">
          <h1>{{$page.talk.title}}</h1>
          <div class="entry-meta" v-if="$page.talk.date">
            <time class="published" :datetime="$page.talk.date">{{ $page.talk.date }}</time>
          </div>
          <div class="content" v-html="$page.talk.content">
          </div>
        </div>
    </article>
  </Layout>
</template>
<page-query>
  query Talk ($path: String!) {
    talk: talk (path: $path) {
     id
      image
      path
      banner_image_alt
      title
      date (format: "MMMM D, YYYY")
      content
      description
      path
    }
  }
</page-query>
<script>
import TalkHeader from "@/components/talks/TalkHeader";

export default {
  name: "Talk",
  components: { TalkHeader },
  metaInfo() {
    return {
      title: this.$page.talk.title,
      link: [
        {
          rel: "canonical",
          href:
            `https://baldbeardedbuilder.com${this.$page.talk.path}`
        }
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.talk.description
        },
        {
          key: "og:title",
          name: "og:title",
          content: `${this.$page.talk.title} | Bald. Bearded. Builder.`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `${this.$page.talk.title} | Bald. Bearded. Builder.`
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.talk.description
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.talk.description
        },
        {
          key: "og:url",
          name: "og:url",
          content: this.$page.talk.path
        },
        {
          key: "og:image",
          name: "og:image",
          content: this.$page.talk.image
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.$page.talk.image
        }
      ]
    };
  }
};
</script>