<template>
  <header>
    <nav>
      <NuxtLink
        to="/"
        title="back home"
        aria-label="Bald Bearded Builder Logo"
        aria-role="img"
      >
        <div class="logo"></div>
        <div class="text">
          <h1>Michael Jolley</h1>
          <p>bald. bearded. builder.</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/blog" title="Blog posts">Blog</NuxtLink>
      <NuxtLink to="/talks" title="Speaking">Speaking</NuxtLink>
      <NuxtLink to="/shop" title="Swag">Swag</NuxtLink>
    </nav>
  </header>
</template>
<script>
export default {}
</script>
<style scoped></style>
