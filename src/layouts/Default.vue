<template>
  <div id="app">
    <Header/>

    <main>
      <slot/>
    </main>
    
    <Footer/>
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
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: { Footer, Header },
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