<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="social-links">
        <a
          target="_blank"
          href="https://twitter.com/baldbeardbuild"
          class="icon-twitter square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'twitter']" swap-opacity></font-awesome>
          <span class="screen-reader-text">Twitter</span>
        </a>
        <a
          target="_blank"
          href="https://www.twitch.tv/baldbeardedbuilder"
          class="icon-twitch square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'twitch']"></font-awesome>
          <span class="screen-reader-text">Twitch</span>
        </a>
        <a
          target="_blank"
          href="https://youtube.com/baldbeardedbuilder"
          class="icon-youtube square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'youtube']"></font-awesome>
          <span class="screen-reader-text">YouTube</span>
        </a>
        <a
          target="_blank"
          href="https://github.com/michaeljolley"
          class="icon-github square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'github-alt']"></font-awesome>
          <span class="screen-reader-text">GitHub</span>
        </a>
        <a
          target="_blank"
          href="http://codepen.io/michaeljolley"
          class="icon-codepen square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'codepen']"></font-awesome>
          <span class="screen-reader-text">CodePen</span>
        </a>
        <a
          target="_blank"
          href="https://dribbble.com/michaeljolley"
          class="icon-dribbble square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'dribbble']"></font-awesome>
          <span class="screen-reader-text">Dribbble</span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/michaelwjolley/"
          class="icon-linkedin square fill-horizontal"
        >
          <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
          <span class="screen-reader-text">LinkedIn</span>
        </a>
        <a target="_blank" class="icon-rss square fill-horizontal" href="/feed.xml">
          <font-awesome :icon="['fas', 'rss']"></font-awesome>
          <span class="screen-reader-text">RSS</span>
        </a>
      </div>
      <div class="site-info">
        &copy;
        <a href="/">Bald Bearded Builder.</a> all rights reserved.
        <a href="#top" id="top-link" class="top-link square fill-horizontal">
          <font-awesome :icon="['fa', 'chevron-up']"></font-awesome>
          <span class="screen-reader-text">Back to the top</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
