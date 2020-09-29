<template>
  <footer>
    <div class="container">
      <div class="site-info">
        &copy; Bald Bearded Builder.<span> All rights reserved.</span> | 
        <g-link to="/code-of-conduct/" title="Code of Conduct">Code of Conduct</g-link>
      </div>
      <div class="back-to-top">
        <a v-on:click="top" title="back to top" aria-label="back to top">
          <font-awesome :icon="['fa', 'chevron-up']"></font-awesome>
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
footer {
  
  font-size: .8em;
  color: $lightgray;
  margin-top: 20px;
  
  .container {
    display: flex;
    width: 100%;
    padding: 20px 10px 0 10px;
	  justify-content: space-between;


    border-top: 1px solid;
    border-image-source: linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%);
    border-image-slice: 1;
  }

  .back-to-top {
    cursor: pointer;

    a {
      color: $neonpink;

      &:hover, :active {
        color: $white;
      }
    }
  }
}
</style>
