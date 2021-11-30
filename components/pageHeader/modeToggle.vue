<template>
  <div class="theme-switch-wrapper">
    <input id="switch" type="checkbox" :model="darkModeEnabled" @click="toggleDarkMode()" />
    <label for="switch">
      <MoonIcon class="moon"/>
      <SunIcon class="sun"/>
      <span class="ball"></span>
    </label>
  </div>
</template>
<script lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    MoonIcon, SunIcon
  },
  setup() {
    const darkModeEnabled = useState<boolean>('darkMode', (): boolean => {
      if (localStorage.getItem("darkMode")) {
        return localStorage.getItem("darkMode") === "true";
      }

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return true;
      }
      return false;
    })  
    return { darkModeEnabled }
  },
  methods: {
    toggleDarkMode() {
      localStorage.setItem("darkMode", (!this.darkModeEnabled).toString());
      this.darkModeEnabled = !this.darkModeEnabled;
    }
  }
})
</script>
<style lang="scss" scoped>
.theme-switch-wrapper {

  label {
    @apply relative flex justify-between items-center;
    @apply py-0 px-2;
    @apply bg-gray-800;
    @apply rounded-3xl;
    @apply cursor-pointer;
    @apply w-20 h-9;

    transition: 0.3s;

    .sun {
      @apply opacity-100;
      @apply text-yellow-300;
      transition: 0.8s;
    }
    .moon {
      @apply opacity-0;
      @apply text-gray-100;
      
      transition: 0.4s;
      transform: translateX(23px) rotate(-150deg);
    }

    .ball {
      @apply absolute block;
      @apply h-6 w-6;
      @apply rounded-xl;
      
      top: 6px; left: 5px;

      @apply bg-gray-400;
      
      transition: 0.8s;
    }
    svg {
      @apply h-6;
    }
  }
  
  input {
    @apply hidden;

    &:checked + label {
      @apply bg-gray-400;
      
      .sun {
        @apply opacity-0;
        transform: translateX(-23px) rotate(160deg);
      }
      .moon {
        @apply opacity-100;
        transition: 0.8s;
        transform: translateX(0) rotate(0deg);
      }
      .ball {
        @apply bg-gray-800;
        transform: translateX(44px);
      }
    } 
  } 
}
</style>