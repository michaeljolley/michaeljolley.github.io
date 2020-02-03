<template>
  <Layout>
    <article class="post">
      <header class="entry-header">
        <div class="entry-header-wrap">
          <div class="post-thumbnail">
            <g-image
              alt="Michael Jolley standing in front of a brick wall."
              class="cld-responsive lazyload"
              src="https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/64070619-28fef100-cc2a-11e9-8e32-837e130722ca_mjexti.png"
            />
          </div>

          <h1 class="entry-title">Thanks for your comment!</h1>
        </div>
      </header>
      <div class="entry-content">
        <p>Thanks for submitting a comment!</p>
        <p>
          All comments are loaded as pull requests on my websites'
          <a
            href="https://github.com/MichaelJolley/michaeljolley.github.io"
            target="_blank"
          >GitHub repository</a>. Once it's merged your comments will be displayed.
        </p>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Thanks for your comment!"
  }
};
</script>

<style lang="scss">
</style>
