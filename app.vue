<script lang="ts" setup>
import './assets/css/main.scss'

const darkMode = useState<boolean>('darkMode')
// useMeta({
//   bodyAttrs: {
//     class: darkMode ? 'dark' : ''
//   }
// })

</script>
<template>
  <Html>
    <Body :class="{ dark: darkMode }">
    
    </Body>
  </Html>
  <NuxtPage/>
</template>