<template>
  <div id="app">
    <Nav />
    <Header />

    <div class="site-content">
      <div class="inner">
        <main class="site-main">
          <slot />
        </main>
        <Sidebar />
      </div>
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  components: { Footer, Header, Nav, Sidebar },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: "@baldbeardbuild"
        },
        {
          key: "copyright",
          name: "copyright",
          content: "Copyright by Michael Jolley. All Rights Reserved."
        }
      ]
    };
  }
};
</script>

<style>
</style>
