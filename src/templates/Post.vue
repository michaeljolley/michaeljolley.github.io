<template>
  <Layout>
     <article>
      <header>
        <g-image
          :alt="$page.post.banner_image_alt"
          :src="$page.post.cover.src"
        />
      </header>
      <section v-html="$page.post.content"/>
     </article>
  </Layout>
</template>
<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      cover
      path
      banner_image_alt
      title
      date (format: "MMMM D, YYYY")
      content
      description
      path
      canonical_url
    }
    comments: allComment(perPage: 500, page: 1, sortBy: "date", order: ASC, filter: { postpath: { eq: $path }}) {
      totalCount
      edges{
        node {
          id
          date (format: "MMMM D, YYYY")
          avatar
          message
          name
        }
      }
    }
  }
</page-query>
<script>
import PostHeader from "@/components/posts/PostHeader";
import Comments from "../components/Comments";
export default {
  name: "Post",
  components: { Comments, PostHeader },
  metaInfo() {
    return {
      title: this.$page.post.title,
      link: [
        {
          rel: "canonical",
          href:
            this.$page.post.canonical_url ||
            `https://baldbeardedbuilder.com${this.$page.post.path}`
        }
      ],
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description
        },
        {
          key: "og:title",
          name: "og:title",
          content: `${this.$page.post.title} | Bald. Bearded. Builder.`
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `${this.$page.post.title} | Bald. Bearded. Builder.`
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description
        },
        {
          key: "og:url",
          name: "og:url",
          content: this.$page.post.path
        },
        {
          key: "og:image",
          name: "og:image",
          content: this.$page.post.image
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: this.$page.post.image
        }
      ]
    };
  }
};
</script>
