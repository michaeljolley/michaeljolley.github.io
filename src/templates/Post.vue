<template>
  <AddBottomLayout>
     <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <article class="page">
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
                  <button @click.prevent="handleLaunchImmersiveReader" class="immersive-reader-button" data-button-style="iconAndText" data-locale="en"></button>
 |&nbsp;
                  <a :href="$page.post.path + '#comments'">{{$page.comments.totalCount}} Comment<template v-if="$page.comments.totalCount !== 1">s</template></a>
              </div>
              <div class="content" v-html="$page.post.content">
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
    
    <div class="bottom-content">
      <div class="inner">
        <main class="site-main">
          <div class="entry-content comments">
            <h2>Comments</h2>
          
            <Comments :post="$page.post" :comments="$page.comments.edges" />
          </div>
        </main>
      </div>
    </div>
    
  </AddBottomLayout>
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
const axios = require('axios');

import PostHeader from "@/components/posts/PostHeader";
import Comments from "../components/Comments";
export default {
  name: "Post",
  components: { Comments, PostHeader },
  methods: {
    getTokenAndSubdomainAsync: async function () {
      return await axios.get("http://localhost:9000/.netlify/functions/immersivereader");
    },
    handleLaunchImmersiveReader: async function() {
      try {
        const { token, subdomain } = await this.getTokenAndSubdomainAsync();
        const data = {
            title: $page.post.title,
            chunks: [{
                content: $page.post.content,
                mimeType: "text/html"
            }]
        };
        // Learn more about options https://docs.microsoft.com/azure/cognitive-services/immersive-reader/reference#options
        const options = {
            "onExit": this.exitCallback,
            "uiZIndex": 2000
        };
        ImmersiveReader.launchAsync(token, subdomain, data, options)
            .catch(function (error) {
                alert("Error in launching the Immersive Reader. Check the console.");
                console.log(error);
            });
      }
      catch (err) {
        console.log(err);
      }
    },
    exitCallback: () => {
        console.log("This is the callback function. It is executed when the Immersive Reader closes.");
    }
  },
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
<style lang="scss" >
  .comments {
    background-color: $lighter-gray;
  }
  .immersive-reader-button {
    background-color: white;
    margin-top: 5px;
    border: 1px solid black;
    float: right;
  }
</style>