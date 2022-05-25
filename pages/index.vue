<template>
<div class="h-screen items-center justify-center flex-col">
  <div :class="$style.highhigh"></div>
  <section class="flex items-center justify-center w-screen text-base text-lg gap-1" v-observe-visibility="introVisibilityChanged">
  <span class="">begin</span>
  <span class="overflow-x-hidden group-hover:animate-type-reverse whitespace-nowrap text-brand-accent"  
        :class="[introVisible ? $style.type : '']"
  >
    hello!dsasss
    </span>
  <span
      class="box-border inline-block h-4 w-1 bg-black  "
      :class="$style.cursor"
    ></span>
  </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

 declare interface BaseComponentData {
  isMobileMenuOpen:boolean
  isDarkMode:boolean
  introVisible: boolean
}

import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)
export default Vue.extend({
  name: 'IndexPage',
  data(): BaseComponentData {
    return {
      isMobileMenuOpen: false,
      isDarkMode: false,
      introVisible:false
    }
  },
  methods: 
  {
    themeSwitch()
    {
      this.isDarkMode = !this.isDarkMode;
    },
    introVisibilityChanged (isVisible:boolean, entry:any) {
      this.introVisible = isVisible
      console.log(isVisible)
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
  .cursor 
  {
    display: block;
    background-color: #000;
    animation: cursor 0.6s linear infinite alternate;
    /* will-change: opacity; */
  }

  @keyframes cursor 
  {
    0%,
    40% {
      opacity: 1;
    }

    60%,
    100% {
      opacity: 0;
    }
  }

  .type 
  {
    animation: type 1.8s ease-out .8s 1 normal both;
    will-change: opacity;
  }

  @keyframes type {
    0% { width: 0ch }
    5%, 10% { width: 1ch }
    15%, 20% { width: 2ch }
    25%, 30% { width: 3ch }
    35%, 40% { width: 4ch }
    45%, 50% { width: 5ch }
    55%, 60% { width: 6ch }
    65%, 70% { width: 7ch }
    75%, 80% { width: 8ch; }
    85%, 90% { width: 9ch }
    95% { width: 10ch }
  }
</style>
