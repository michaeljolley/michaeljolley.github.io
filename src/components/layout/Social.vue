<template>
  <div class="social-links">
        <a target="_blank"
            href="https://twitter.com/baldbeardbuild"
            class="dot twitter" title="Twitter" rel="noopener">
            <font-awesome :icon="['fab', 'twitter']" swap-opacity></font-awesome>
            <span class="screen-reader-text">Twitter</span>
        </a>
            <a
          target="_blank"
          href="https://www.twitch.tv/baldbeardedbuilder"
          class="dot twitch" title="Twitch" rel="noopener"
        >
          <font-awesome :icon="['fab', 'twitch']"></font-awesome>
          <span class="screen-reader-text">Twitch</span>
        </a>
             <a
          target="_blank"
          href="https://youtube.com/baldbeardedbuilder" 
          class="dot youtube" title="YouTube" rel="noopener"
        >
          <font-awesome :icon="['fab', 'youtube']"></font-awesome>
          <span class="screen-reader-text">YouTube</span>
        </a>
            <a
          target="_blank"
          href="https://www.instagram.com/baldbeardedbuilder/"
          class="dot instagram" title="Instagram" rel="noopener"
        >
          <font-awesome :icon="['fab', 'instagram']"></font-awesome>
          <span class="screen-reader-text">Instagram</span>
        </a>
             <a
          target="_blank"
          href="https://github.com/michaeljolley"
          class="dot github" title="GitHub" rel="noopener"
        >
          <font-awesome :icon="['fab', 'github-alt']"></font-awesome>
          <span class="screen-reader-text">GitHub</span>
        </a>
            <a
          target="_blank"
          href="https://www.linkedin.com/in/michaelwjolley/"
          class="dot linkedin" title="LinkedIn" rel="noopener"
        >
          <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
          <span class="screen-reader-text">LinkedIn</span>
        </a>
            <a
          target="_blank"
          href="https://discord.gg/XSG7HJm"
          class="dot discord" title="Discord" rel="noopener"
        >
          <font-awesome :icon="['fab', 'discord']"></font-awesome>
          <span class="screen-reader-text">Discord</span>
        </a>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.social-links {
 // margin: 80px 0 20px 0;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;

  .dot {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-left: 15px;
    text-align: center;
    background-color: $dark-blue;
    color: $white;
    display: inline-block;

    svg {
      padding-top: 8px;
    }

    &.twitter:hover {
      background-color: $brand-twitter;
    }
    &.linkedin:hover {
        background-color: $brand-linkedin;
    }
    &.twitch:hover {
        background-color: $brand-twitch;
    }
    &.discord:hover {
        background-color: $brand-discord;
    }
    &.youtube:hover {
        background-color: $brand-youtube;
    }
    &.github:hover {
        background-color: #fff;
        color: $brand-github;
    }
    &.instagram:hover {
        background-color: $brand-instagram;
    }

  }
 }

 
@media (max-width: $breakpoint-phone) {
  .social-links {
    margin-top: 10px;
  }
}
</style>