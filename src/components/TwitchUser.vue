<template>
  <div class="user">
    <g-image class="profile" :src="user.profile_image_url" />
    <span>
      {{user.display_name}}
      <br />
      <g-link :to="'https://twitch.tv/' + user.display_name">
        <font-awesome :icon="['fab', 'twitch']"></font-awesome>
      </g-link>
      <g-link :to="'https://twitter.com/' + user.twitterHandle" v-if="user.twitterHandle">
        <font-awesome :icon="['fab', 'twitter']"></font-awesome>
      </g-link>
      <g-link :to="'https://github.com/' + user.githubHandle" v-if="user.githubHandle">
        <font-awesome :icon="['fab', 'github']"></font-awesome>
      </g-link>
    </span>
  </div>
</template>
<script>
export default {
  name: "TwitchUser",
  props: ["user"]
};
</script>