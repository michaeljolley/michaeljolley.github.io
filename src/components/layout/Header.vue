<template>
  <header class="site-header">
    <div class="inner">
      <g-link to="/" class="logo-text">
        <div class="title">
            <h1 class="site-title">
              Michael Jolley
            </h1> 
            <p>bald. bearded. builder.</p>
        </div>
      </g-link>
      <Nav/>
      <!-- <a href="#" class="pill">Watch Live!</a> -->
    </div>
  </header>
</template>

<script>
import Nav from "@/components/layout/Nav.vue";

export default {
  components: {
    Nav
  }
};
</script>
<style lang="scss">
.site-header {
  background-color: $dark-blue;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 90;
  color: $white;


  .inner {
    height: 70px;
    justify-content: space-between;

    .title {
      font-family: 'PT Sans', sans-serif;
      background: $logo-svg no-repeat;
      padding-left: 70px;

      h1 {
        margin: 0;
        font-size: 24pt;
      }
      p {
        color: $gray;
        font-size: .7em;
        font-weight: normal;
        margin:  0;
        text-transform: uppercase;
      }
    }

    @media (max-width: $breakpoint-phone) {
      .title {
        padding-left: 65px;
      }
    }
    
    a {
      color: $white;
      text-decoration: none;

      &.pill {
        background-color: $pink;
        text-align: center;
        padding: 5px 15px;
        border-radius: 30px;
      }
    }
  }
 }
</style>