<template>
  <footer>
    <div class="container">
      <div class="site-info">
        &copy; Bald Bearded Builder.<span> All rights reserved.</span> |
        <nuxt-link to="/code-of-conduct/" title="Code of Conduct"
          >Code of Conduct</nuxt-link
        >
      </div>
      <div class="back-to-top">
        <a title="back to top" aria-label="back to top" @click="top">
          <!-- <font-awesome-icon :icon="['fa', 'chevron-up']" /> -->
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    top: (event) => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    },
  },
}
</script>
<style scoped></style>
