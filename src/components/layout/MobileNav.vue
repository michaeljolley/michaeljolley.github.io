<template>
  <div class="inner sub-nav" :class="{closed: !navVisible}">
    <div class="links">
      <g-link to="/">Blog</g-link>
      <g-link to="/talks/">Talks</g-link>
      <a href="https://bbb.dev/shop">Shop</a>
      <g-link to="/about/">About</g-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    navVisible() {
      return this.$store.state.navVisible;
    }
  }
};
</script>
<style lang="scss" scoped>
.sub-nav {
  overflow-y: hidden;
  max-height: 250px;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  background-color: $dark-blue;

  &.closed {
    max-height: 0;
  }

  .links {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 10px;
    text-align: center;
    a {
      display: block;
      background-color: $light-blue;
      padding: 15px 10px;
      margin-bottom: 3px;
      text-align: center;
      text-decoration: none;
      color: $gold !important;
      &:hover {
        color: $mint !important;
      }
    }
  }
}

@media (min-width: $breakpoint-phone) {
  ul {
    display: none;
  }
}
</style>