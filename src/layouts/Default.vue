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
  components: { Footer, Header, Nav, Sidebar }
};
</script>

<style>
</style>
