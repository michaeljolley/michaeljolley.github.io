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
        <h3>Today's Candle To Code By</h3>

        <p>
          <g-link :to="$page.stream.candle.url">{{$page.stream.candle.label}}</g-link>
        </p>

        <h2>Today's stream brought to you by</h2>

        <template v-if="$page.stream.subscribers && $page.stream.subscribers.length > 0">
          <h3>Subscribers</h3>
          <div class="users">
            <TwitchUser v-for="sub in $page.stream.subscribers" :key="sub._id" :user="sub.user" />
          </div>
        </template>

        <template v-if="$page.stream.cheers && $page.stream.cheers.length > 0">
          <h3>Cheers</h3>
          <div class="users">
            <TwitchUser
              v-for="cheerer in $page.stream.cheers"
              :key="cheerer._id"
              :user="cheerer.user"
            />
          </div>
        </template>

        <template v-if="$page.stream.raiders && $page.stream.raiders.length > 0">
          <h3>Raids</h3>
          <div class="users">
            <TwitchUser
              v-for="raider in $page.stream.raiders"
              :key="raider._id"
              :user="raider.user"
            />
          </div>
        </template>

        <template v-if="$page.stream.moderators && $page.stream.moderators.length > 0">
          <h3>Moderators</h3>
          <div class="users">
            <TwitchUser v-for="mod in $page.stream.moderators" :key="mod._id" :user="mod" />
          </div>
        </template>

        <template v-if="$page.stream.contributors && $page.stream.contributors.length > 0">
          <h3>Contributors</h3>
          <div class="users">
            <TwitchUser
              v-for="contributor in $page.stream.contributors"
              :key="contributor._id"
              :user="contributor"
            />
          </div>
        </template>
      </div>
    </article>
  </Layout>
</template>
<page-query>
  query Stream ($path: String!) {
    stream: stream (path: $path) {
      id
      title
      streamDate
      candle {
        name
        label
        url
      }
      subscribers {
        _id
        user {
          display_name
          profile_image_url
          twitterHandle
          githubHandle
        }
      }
      moderators {
        _id
        display_name
        profile_image_url
        twitterHandle
        githubHandle
      }
      raiders {
        _id
        user {
          display_name
          profile_image_url
          twitterHandle
          githubHandle
        }
      }
      cheers {
        _id
        user {
          display_name
          profile_image_url
          twitterHandle
          githubHandle
        }
      }
      contributors {
        _id
        display_name
        profile_image_url
        twitterHandle
        githubHandle
      }
    }
  }
</page-query>
<script>
import SummaryHeader from "../components/SummaryHeader";
import TwitchUser from "../components/TwitchUser";

export default {
  name: "Stream",
  components: { SummaryHeader, TwitchUser },
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