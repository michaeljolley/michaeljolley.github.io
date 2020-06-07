<template>
  <nav id="top" class="site-navigation">
    <ul>
      <li><g-link to="/">Blog</g-link></li>
      <li><g-link to="/talks/">Talks</g-link></li>
      <li><g-link to="/about/">About</g-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
</style>