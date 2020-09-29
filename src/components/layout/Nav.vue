<template>
  <div class="navigation">
    <button id="burger"
      :class="{ active : isBurgerActive }"
      @click.prevent="toggle">
        <font-awesome :icon="['fa', 'bars']"  v-if="!isBurgerActive"></font-awesome>
        <font-awesome :icon="['fa', 'times']" v-if="isBurgerActive"></font-awesome>
    </button>
    <transition name="slide">
      <nav v-if="isBurgerActive">
        <g-link to="/" class="title" title="back home" aria-label="Bald Bearded Builder Logo" aria-role="img">
          <div class="logo"></div>
          <div class="text">
            <h1>
              Michael Jolley
            </h1> 
            <p>bald. bearded. builder.</p>
          </div>
        </g-link>
        <g-link to="/about" title="About Michael Jolley">
          About Michael
          <span class="hint">Who is this guy?</span></g-link>
        <g-link to="/posts" title="Blog posts">
          Blog
          <span class="hint">Ramblings of a madman.</span>
        </g-link>
        <g-link to="/talks" title="Talks Michael has given">
          Talks
          <span class="hint">People let this guy out in public?</span>
        </g-link>
        <g-link to="/shop" title="BBB swag">
          Swag
          <span class="hint">Just show me the stickers & t-shirts.</span>
        </g-link>
      </nav>
    </transition>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isBurgerActive: false
    };
  },
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
      this.$emit('toggled',  this.isBurgerActive);
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation {
  position: absolute;
  top: 0;
  right: 0;

  #burger {
    position: absolute;
    top: 20px;
    right: 0;
    margin-right: 20px;
    color: $neonblue;
    background: transparent;
    border: 0;
    font-size: 1.5em;
    outline: 0;
    z-index: 1000;

    &.active {
      margin-top: -5px;
      font-size: 2em;
      color: $neonpink;
    }
  }

  nav {
    overflow-y: auto;
    background-color: $darkerblue;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;

    
    .title {
      display: flex;
      align-content: center;
      text-decoration: none;
      margin-bottom: 40px;
      flex-direction: row;
      font-size: 1em;

      .logo {
        background: $logo-svg no-repeat;
        height: 50px;
        width: 50px;
        margin-right: 5px;
      }

      .text {
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 1.4em;
          margin: 0;
        }

        p {
          margin: 1px 0 0 0;
          font-size: .8em;
        }
      }
      
      &:hover, :active {
        p {
          color: $neonblue;
        } 
      }
    }

    a {
      display: flex;
      flex-direction: column;
      color: $white;
      font-size: 1.1em;
      font-weight: bold;
      text-decoration: none;
      margin-bottom: 20px;

      .hint {
        margin-top: 3px;
        font-weight: normal;
        font-size: .8em;
        color: $midgray;
      }

      &:hover, :active {
        color: $neonpink;
        
        .hint {
          color: $neonblue;
        }
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
    transition: all 150ms ease-in 0s
  }
}

</style>