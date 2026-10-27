<template>
  <div class="min-h-screen bg-[#c7c7c7] text-black dark:bg-[#111] dark:text-[#eee] transition-colors duration-300">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {
  // eslint-disable-next-line class-methods-use-this
  mounted() {
    if (
      localStorage.theme === 'dark'
      || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
