<template>
<div class="h-screen items-center justify-center flex-col">
  <div class="rounded-full bg-emerald-400 h-10 w-10 fixed right-4 top-4 bx bx-menu bx-sm text-white flex justify-center">
  </div>
  <section 
    class="flex flex-col items-center justify-center w-screen h-screen bg-clip-border bg-center-top bg-scroll bg-cover ]" 
    v-observe-visibility="introVisibilityChanged"
    :class="$style.intro"
  >
  <div class="w-screen pl-6 text-white font-medium text-3xl">
    Alex Smith
  </div>
  <div class="w-screen pl-6 flex flex-row gap-2 text-white font-normal text-2xl pt-3 tracking-wide">
  <span class="">I'm</span>
  <span class="overflow-x-hidden group-hover:animate-type-reverse whitespace-nowrap text-brand-accent border-b-3 border-emerald-400"  
        :class="[introVisible ? $style.type_reverse : '']"
  >
    Stupid
    </span>

  <span
      class="box-border inline-block h-5 w-0.5 bg-black my-1.5"
      :class="$style.cursor"
    ></span>
  </div>
  </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

//  declare interface BaseComponentData {
//   isMobileMenuOpen:boolean
//   isDarkMode:boolean
//   introVisible: boolean
// }

import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)
export default Vue.extend({
  name: 'IndexPage',
  data()/*: BaseComponentData*/ {
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
  section.intro
  {
    background-image: url('~@/static/img/hero-bg.jpg');
    background-position:  60% 0%;
  }

  .highhigh
  {
    width: 100%;
    background-color: #000;
    height: 200%;
  }
  .cursor 
  {
    display: block;
    background-color: #fff;
    animation: cursor 0.6s linear infinite alternate;
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
  }

  @keyframes type {
    0% { width: 0ch }
    5%, 10% { width: 1ch }
    15%, 20% { width: 2ch }
    25%, 30% { width: 3ch }
    35%, 40% { width: 3ch }
    45%, 50% { width: 4ch }
    55%, 60% { width: 4ch }
    65%, 70% { width: 4ch }
    75%, 80% { width: 5.5ch; }
    85%, 90% { width: 5.5ch }
    95% { width: 5.5.5ch }
  }

  .type_reverse
  {
    animation: type 1.8s ease-out 0s infinite alternate-reverse both
  }
</style>
