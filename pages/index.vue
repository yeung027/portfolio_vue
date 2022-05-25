<template>
<div class="h-screen items-center justify-center flex-col">
  <div :class="$style.highhigh"></div>
  <section class="flex items-center justify-center w-screen text-base text-lg gap-1">
  <span class="">begin</span>
  <span class="overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
    hello!dsasss
    </span>
  <span
      class="box-border inline-block h-4 w-1 bg-black animate-cursor will-change-transform cursor"
      :class="$style.cursor"
    ></span>
  </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isMobileMenuOpen: false,
      isDarkMode: false
    }
  },
  methods: 
  {
    themeSwitch()
    {
      this.isDarkMode = !this.isDarkMode;
    }
  }
})
</script>
<style module>
  .highhigh
  {
    width: 100%;
    background-color: #000;
    height: 200%;
  }
  .cursor {
    display: block;
    background-color: #000;
    animation: cursor 0.6s linear infinite alternate;
    will-change: opacity;
  }

  @keyframes cursor {
    0%,
    40% {
      opacity: 1;
    }

    60%,
    100% {
      opacity: 0;
    }
  }
</style>
