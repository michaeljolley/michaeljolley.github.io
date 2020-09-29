<template>
  <Layout>
    <article>
      <section class="welcome" 
        :style="{backgroundImage: `url(${backgroundImage})`}">
        <div>
          <h1>
            <span>Hi!</span>
            I'm Michael.
          </h1>
          <p>Michael Jolley is the bald, bearded builder. <span>(Yes, another one.)</span></p>
          <p>At work, he's a developer advocate at
            <a href="https://www.vonage.com/communications-apis/" noreferrer>Vonage</a>
            where he gets to play with awesome APIs. You can also catch him giving 
            <g-link to="/talks">talks</g-link> at various events or hosting the
            <a href="https://bbb.dev/twitch" noreferrer>Bald. Bearded. Builder.</a>, a
            live-streamed show on Twitch.</p>
          <p>After 20 years in the software industry, this follicly challenged 
            developer finds his greatest fulfillment helping others learn and succeed.</p>
        </div>
      </section>
      <section class="posts">
        <h2 class="link">
          Recent Posts
          <g-link to="/posts" title="more blog posts">more posts <font-awesome :icon="['fa', 'chevron-right']"></font-awesome></g-link>
        </h2>
        <div>
          <g-link
            v-for="post in $page.posts.edges"
            :key="post.node.id"
            :title="post.node.title"
            :to="post.node.path">
            <g-image
              :src="post.node.cover.src"
              :alt="post.node.title"/>
          </g-link>
        </div>
      </section>
    </article>
  </Layout>
</template>
<page-query>
  query Home {
    posts: allPost (perPage: 2) {
      edges {
        node {
          id
          title
          cover (width: 380, quality: 90)
          path
          banner_image_alt
        }
      }
    }
  }
</page-query>
<script>
import PostList from "@/components/posts/PostList";
import UpcomingTalkList from "@/components/talks/UpcomingTalkList";

const backgrounds = [
  require('~/assets/images/welcome/mj_1.png'),
  require('~/assets/images/welcome/mj_2.png'),
  require('~/assets/images/welcome/mj_3.png'),
  require('~/assets/images/welcome/mj_4.png'),
  require('~/assets/images/welcome/mj_5.png'),
  require('~/assets/images/welcome/mj_6.png'),
  require('~/assets/images/welcome/mj_7.png'),
  require('~/assets/images/welcome/mj_8.png'),
  require('~/assets/images/welcome/mj_9.png'),
  require('~/assets/images/welcome/mj_10.png'),
  require('~/assets/images/welcome/mj_11.png'),
  require('~/assets/images/welcome/mj_12.png'),
  require('~/assets/images/welcome/mj_13.png'),
  require('~/assets/images/welcome/mj_14.png')
];

export default {
  components: { PostList, UpcomingTalkList },
  data () {
    return {
      talks: null
    }
  },
  computed: {
    backgroundImage() {
      return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }
  },
  metaInfo: {
    title: "Hi! I'm Michael."
  }
};
</script>
<style lang="scss" scoped>
.posts {
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.welcome {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  background-repeat: no-repeat;
  background-position: right;
  height: 400px;

  div {
    width: 60%;
  }

  p span {
    font-style: italic;
    color: $purple;
    font-size: .8em;
  }

  h1 {
    border: 0;
    margin: 0 0 10px 0;
    font-size: 5em;
    padding-bottom: 0px;
    display: block;
    color: $neonblue;

    span {
      color: $white;
    }
  }
}
</style>