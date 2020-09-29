<template>
  <Layout>
    <article>
      <header>
        <g-image 
        alt="Michael Jolley standing in front of a brick wall."
        src="~/assets/images/michael-brick.png"
       />
      </header>
      <section>
        <h1>Thanks for submitting a comment!</h1>
        <p>
          All comments are loaded as pull requests on my websites'
          <a
            href="https://github.com/MichaelJolley/michaeljolley.github.io"
            target="_blank"
          >GitHub repository</a>. Once it's merged your comments will be displayed.
        </p>
      </section>
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
