<template>
  <div id="app">
    <Nav/>

    <main>
      <slot/>
    </main>
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
import Footer from "@/components/layout/Footer.vue";
import Nav from "@/components/layout/Nav.vue";

export default {
  components: { Footer, Nav },
  metaInfo() {
    return {
      meta: [
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
          content: "Copyright by Bald Bearded Builder, LLC. All Rights Reserved."
        }
      ]
    };
  }
};
</script>