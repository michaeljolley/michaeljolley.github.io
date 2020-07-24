<template>
  <nav id="top" class="site-navigation">
    <div class="nav-icon" v-on:click="toggleNav">
      <font-awesome :icon="['fa', 'bars']" v-if="!navVisible"></font-awesome>
      <font-awesome :icon="['fa', 'times']" v-if="navVisible"></font-awesome>
    </div>
    <ul>
      <li>
        <g-link to="/">Blog</g-link>
      </li>
      <li>
        <g-link to="/talks/">Talks</g-link>
      </li>
      <li>
        <a href="https://bbb.dev/shop">Shop</a>
      </li>
      <li>
        <g-link to="/about/">About</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import * as types from "@/state/Mutations";

export default {
  computed: {
    navVisible() {
      return this.$store.state.navVisible;
    },
  },
  methods: {
    toggleNav: function () {
      this.$store.dispatch(types.NAV_TOGGLE);
    },
  },
};
</script>
<style lang="scss" scoped>
.site-navigation {
  flex-grow: 1;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
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
  .site-navigation {
    flex-grow: 0;

    .nav-icon {
      display: inline-block;
      margin-left: auto;
      width: 40px;
      height: 40px;
      color: $white;
      margin-top: 5px;
      .fa-bars {
        height: 100px;
      }
      .fa-times {
        height: 120px;
      }
    }
    ul {
      display: none !important;
    }
  }
}
</style>