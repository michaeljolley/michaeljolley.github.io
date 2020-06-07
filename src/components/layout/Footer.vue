<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="site-info">
         &copy;
        <a href="/">Bald Bearded Builder.</a> all rights reserved. &nbsp;| &nbsp;
        <g-link to="/code-of-conduct/">Code of Conduct</g-link>
      </div>
      <div class="back-to-top">
        <a v-on:click="top" class="top-link square fill-horizontal" title="back to top">
          <font-awesome :icon="['fa', 'chevron-up']"></font-awesome>
          <span class="screen-reader-text">back to top</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    top: (event) => {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }
  }
};
</script>
<style lang="scss" scoped>
.site-footer {
  color: $gray;
  background-color: $dark-blue;
  height: 30px;
  padding: 20px 0 10px 0;
  font-size: .8em;
  .inner {
    justify-content: space-between;
  }
  a {
    color: $white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: $mint;
    }
  }
  .back-to-top {
    .screen-reader-text {
      margin-left: 10px;
    }
  } 
}

</style>
