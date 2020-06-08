<template>
    <div class="inner sub-nav" :class="{closed: !navVisible}">
      <ul>
        <li><g-link to="/">Blog</g-link></li>
        <li><g-link to="/talks/">Talks</g-link></li>
        <li><g-link to="/about/">About</g-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    navVisible () {
      return this.$store.state.navVisible
    }
  }
};
</script>
<style lang="scss" scoped>
.sub-nav {
	overflow-y: hidden;
  max-height: 130px; 
	transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  &.closed {
    max-height: 0;
  }
    
  ul {
    width: 100%;
    list-style: none;
    margin:0;
    padding: 0;
    text-align: center;
    li {
      background-color: $light-blue;
      padding: 10px;
      border-bottom: 1px solid $mid-blue;
      text-align: center;
      a {
        text-decoration: none;
        color: $white !important;
        &:hover {
          color: $mint !important;
        }
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