<template>
  <Layout>
    <article class="page">
      <header class="entry-header">
        <g-link title="Code of Conduct Report" :to="/report/">
          <img src="https://res.cloudinary.com/dk3rdh3yo/image/upload/c_scale/v1591405456/cover_knfirw.png" class="cld-responsive lazyload" alt="Hands of various people joined" />
        </g-link>
      </header>
      <div class="entry-content">
        <h1>Report Code of Conduct Breach</h1>
       
        <p>If you have been harassed by a member of the Bald Bearded Builder community, or if you have observed 
          someone else being harassed, please report the behaviour using the form below.</p>

        <form 
          name="coc-report"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="coc-report" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
         
          <ul class="flex-outer">
            <li>
              <label for="description">Description of Event(s)<br/><span class="required">* required</span></label>
              <textarea rows="6" 
                    id="description" 
                    required
                    v-model="formData.description" 
                    placeholder="Describe the event(s) that occurred. Be sure to include the name of the person who violated the code of conduct."></textarea>
            </li>
            <li>
              If you would like someone to follow up with you, please complete the fields below.  <strong>For your privacy, they are NOT required.</strong>
            </li>
            <li>
              <label for="name">Your Name</label>
              <input type="text" 
                    id="name" 
                    placeholder="Enter your name here"
                    v-model="formData.name">
            </li> 
            <li>
              <label for="email">Your Email</label>
              <input type="text" 
                    id="email" 
                    placeholder="Enter your email address here"
                    v-model="formData.email">
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Code of Conduct Report Form"
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
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
      .catch(error => alert(error))
    }
  }
};
</script>