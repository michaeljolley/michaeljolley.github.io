<template>
  <main>
    <PageHeader
      title="Report Code of Conduct Breach"
      cover-image-url="https://res.cloudinary.com/dk3rdh3yo/image/upload/v1591405456/cover_knfirw.png"
    />
    <div class="container">
      <aside>&nbsp;</aside>
      <article class="content">
        <h1>Report Code of Conduct Breach</h1>
        <div class="prose">
          <p>
            We take breaches of our COC very seriously. If you have experienced
            or witnessed a breach by a memmber of our community, we're here for
            you.
          </p>

          <p>
            Please submit the form below with a description of the event(s).
            This information is confidential and is sent directly to Michael &
            our Community Manager to review as quickly as possible.
          </p>

          <form
            name="coc-report"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="coc-report" />
            <p hidden>
              <label> Don’t fill this out: <input name="bot-field" /> </label>
            </p>

            <p>
              <label for="description"
                >Description of Event(s)<span class="required"
                  >* required</span
                ></label
              >
              <textarea
                id="description"
                v-model="formData.description"
                rows="6"
                name="description"
                required
                placeholder="Describe the event(s) that occurred. Be sure to include the name of the person who violated the code of conduct."
              ></textarea>
            </p>
            <p>
              If you would like someone to follow up with you, please complete
              the fields below.
              <strong>For your privacy, they are NOT required.</strong>
            </p>
            <p>
              <label for="name">Your Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                name="name"
                placeholder="Enter your name here"
              />
            </p>
            <p>
              <label for="email">Your Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="text"
                name="email"
                placeholder="Enter your email address here"
              />
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
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
  methods: {
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
    head() {
      return {
        title: `Report CoC Violations`,
      }
    },
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

form {
  @apply mt-10;
}

input,
textarea,
select {
  @apply block;
  @apply w-full;
  @apply p-2;
  @apply border-solid;
  @apply border;
  @apply rounded-md;

  @apply text-gray-900;
  @apply bg-gray-50;
  @apply border-gray-500;

  @apply md:w-3/4;
}

label {
  font-family: 'Cairo', sans-serif;
  @apply font-bold;
  @apply text-pink-500;
}

button {
  @apply rounded-xl;
  @apply pl-4 pr-4;
  @apply pt-2 pb-2;
  @apply font-bold;
  @apply border-solid;
  @apply border;
  @apply rounded-md;

  @apply border-gray-300;
  @apply text-pink-500;
  @apply bg-gray-50;
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
