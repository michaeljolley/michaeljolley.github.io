<template>
  <nav id="top" class="site-navigation">
    <div class="inner">
      <button id="menu-toggle" aria-expanded="false">Menu</button>
      <div class="nav-menu">
        <ul class="menu">
          <li class>
            <a class href="/">Home</a>
          </li>
          <li class>
            <a class href="/about/">About</a>
          </li>
          <li class>
            <a class href="/talks/">Talks</a>
          </li>
          <li class>
            <a class href="/streams/">Streams</a>
          </li>
        </ul>
      </div>
      <a
        target="_blank"
        class="github-button icon-github square fill-horizontal"
        href="https://github.com/MichaelJolley/michaeljolley.github.io"
      >
        <font-awesome :icon="['fab', 'github']"></font-awesome>
        <span class="screen-reader-text">
          View on
          GitHub
        </span>
      </a>
      <a target="_blank" class="icon-rss subscribe-button square fill-horizontal" href="/feed.xml">
        <font-awesome :icon="['fas', 'rss']"></font-awesome>
        <span class="screen-reader-text">Subscribe</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
