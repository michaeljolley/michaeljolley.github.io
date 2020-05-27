<template>
  <Layout>
    <article class="post">
      <PostHeader
        :title="$page.post.title"
        :banner_image_alt="$page.post.banner_image_alt"
        :path="$page.post.path"
        :image="$page.post.image"
        :date="$page.post.date"
        :comments="$page.comments.totalCount"
        :showComments="true"
        :showMeta="false"
        :showTitle="false"
      />
      <div class="entry-content">
        <h1>{{$page.post.title}}</h1>
        <div class="entry-meta" v-if="$page.post.date">
          <time class="published" :datetime="$page.post.date">{{ $page.post.date }}</time>
            |&nbsp;
            <a :href="$page.post.path + '#comments'">{{$page.comments.totalCount}} Comment<template v-if="$page.comments.totalCount !== 1">s</template></a>
        </div>
        <div class="content" v-html="$page.post.content">
        </div>
      </div>
    </article>
    <Comments :post="$page.post" :comments="$page.comments.edges" />
  </Layout>
</template>
<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      image
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

<style lang="scss" scoped>
.entry-header {
  background-color: $light-blue !important;
}
.entry-content {
  background-color: $white;
  padding: 20px;

  h1 {
    font-size: 2.5em;
    margin: 0;
    color: $pink;
  }
  .entry-meta {
    padding-bottom: 15px;
    border-bottom: 1px dotted $mid-blue;
    a {
      color: $pink;
      text-decoration: none;
      &:hover {
        color: $pink;
      }
    }
  }
}
.post {
  margin-bottom: 0;
}
</style>