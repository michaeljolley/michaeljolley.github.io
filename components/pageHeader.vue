<template>
  <header>
    <PageHeaderLogo/>
    <PageHeaderNavigation/>
    <PageHeaderModeToggle/>
  </header>
</template>
<style lang="scss" scoped>
header {
  @apply flex flex-row justify-evenly items-center;
  @apply h-20;

  @apply bg-gray-100 dark:bg-gray-900;
}

// .dark header {
  
//   box-shadow: 0 20px 20px -15px rgba(0, 0, 0, 0.2);

// }
</style>