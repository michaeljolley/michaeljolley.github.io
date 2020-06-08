<template>
  <nav id="top" class="site-navigation">
    <div class="nav-icon" v-on:click="toggleNav">
      <font-awesome :icon="['fa', 'bars']"></font-awesome>
    </div>
    <ul>
      <li><g-link to="/">Blog</g-link></li>
      <li><g-link to="/talks/">Talks</g-link></li>
      <li><g-link to="/about/">About</g-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav: function() {
      this.showNav = !this.showNav;
    }
  }
};
</script>
<style lang="scss">
.site-navigation {
    flex-grow: 1;
    ul {
      display: flex;
      list-style: none;
      margin:0;
      padding: 0;
      justify-content: space-evenly;
      li {
        a {
          text-decoration: none;
          color: $gray !important;
          &:hover {
            color: $mint !important;
          }
        }
      }
    }
 }
 .nav-icon {
   display: none;
 }
 
@media (max-width: $breakpoint-phone) {
  .nav-icon {
    display: inline-block;
    align-self: flex-end;
    width: 100px;
    height: 100px;
    color: $white;
    .fa-bars {
      margin-top: 20px;
      height: 100px;
    }
  }
  ul {
    display: inline-block;
    li {
      display: block;
      clear: both;
      a {
        text-decoration: none;
        color: $gray !important;
        &:hover {
          color: $mint !important;
        }
      }
    }
  }
// .site-navigation {
  //   display: none;
  // }
}
</style>