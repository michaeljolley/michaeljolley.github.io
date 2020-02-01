<template>
  <Layout>
    <article class="post">
      <SummaryHeader
        :title="$page.stream.title"
        :banner_image_alt="$page.stream.banner_image_alt"
        :path="$page.stream.path"
        :image="$page.stream.image"
        :date="$page.stream.date"
        :showComments="false"
      />

      <div class="entry-content">
        <h3>Stream Replay Link</h3>

        <p>
          <g-link :to="$page.stream.replay">{{$page.stream.replay}}</g-link>
        </p>

        <h3>Today's Candle To Code By</h3>

        <p>
          <g-link :to="$page.stream.candle.url">{{$page.stream.candle.name}}</g-link>
        </p>

        <h2>Today's stream brought to you by</h2>

        <div class="users">
          <div class="user" v-for="sub in $page.stream.subscribers" :key="sub.name">
            <g-image class="profile" :src="sub.profile" />
            <span>
              {{sub.name}}
              <br />
              <g-link :to="'https://twitch.tv/' + sub.name">
                <font-awesome :icon="['fab', 'twitch']"></font-awesome>
              </g-link>
              <g-link :to="'https://twitter.com/' + sub.twitter" v-if="sub.twitter">
                <font-awesome :icon="['fab', 'twitter']"></font-awesome>
              </g-link>
              <g-link :to="'https://github.com/' + sub.name" v-if="sub.github">
                <font-awesome :icon="['fab', 'github']"></font-awesome>
              </g-link>
            </span>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
  query Stream ($path: String!) {
    stream: stream (path: $path) {
      id
      image
      title
      date (format: "MMMM D, YYYY")
      content
      description
      replay
      candle {
        name
        url
      }
      subscribers 
        {
          name
          profile
          github
          twitter
        }
      
    }
  }
</page-query>
<script>
import SummaryHeader from "../components/SummaryHeader";

export default {
  name: "Stream",
  components: { SummaryHeader },
  metaInfo() {
    return {
      title: this.$page.stream.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.stream.description
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>