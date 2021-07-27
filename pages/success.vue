<template>
  <main>
    <PageHeader
      title="Community Guidelines"
      cover-image-url="https://res.cloudinary.com/dk3rdh3yo/image/upload/v1591405456/cover_knfirw.png"
    />
    <div class="container">
      <aside>&nbsp;</aside>
      <article class="content">
        <h1>Code of Conduct Report</h1>
        <div class="prose">
          <p>
            Thank you for submitting that breach of our code of conduct. We take
            breaches of our Code of Conduct <strong>very</strong> seriously. You
            can trust that we will address the issue you raised and if you
            provided your contact information, we will update you accordingly.
          </p>
        </div>
      </article>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
    }
  },
  encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
      .then(() => this.$router.push('/success'))
      .catch((error) => alert(error))
  },
}
</script>

<style scoped>
main {
  @apply flex flex-col justify-center;
}

.container {
  @apply flex items-start gap-2;
  @apply mx-auto;
  @apply mt-10;
  @apply px-4;

  @apply md:gap-4;
  @apply lg:gap-6;
}

aside,
article {
  @apply bg-white;
  @apply rounded-lg;
  @apply shadow-md;
  @apply p-5 py-2;

  @apply lg:pt-5 lg:pb-2;
}

aside {
  @apply w-auto;
  @apply sticky;
  top: 120px;
}

.info {
  @apply font-robotoMono;
  @apply text-xs text-gray-300;
  @apply pt-2 pb-4;
}

pre {
  margin: 35px -30px;
  @apply rounded;
  @apply shadow-lg;
}

@screen lg {
  article {
    @apply w-4/5;
  }
  aside {
    @apply w-1/5;
  }
}
</style>
