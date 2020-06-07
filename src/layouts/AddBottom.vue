<template>
  <div id="app">
    <Header />
    <SubHeader />

    <slot/>
    
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
import SubHeader from "@/components/layout/SubHeader.vue";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";

export default {
  components: { Footer, Header, SubHeader },
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
          content: "Copyright by Michael Jolley. All Rights Reserved."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.site-content {
  margin-top: 133px;
}
.bottom-content {
  background-color: $lightest-gray;//$lightest-blue;

  h2 {
    color: $dark-gray;
  }
}
</style>
