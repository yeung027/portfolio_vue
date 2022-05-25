<template>
<div class="h-screen dark:bg-primary">
<div id="main">
<div class="container mx-auto">
  <div class="flex items-center justify-between py-6 lg:py-10">
    <a href="/" class="flex items-center">
      <span href="/" class="mr-2">
        <img src="/img/logo.svg" alt="logo" />
      </span>
      <p
        class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block"
      >
        Hei Yeung
      </p>
    </a>
    <div class="flex items-center lg:hidden">
      <i
        class="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"
        @click="themeSwitch()"
        :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"
      ></i>

      <svg
        width="24"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        @click="isMobileMenuOpen = true"
        class="fill-current text-primary dark:text-white"
      >
        <g fill-rule="evenodd">
          <rect width="24" height="3" rx="1.5" />
          <rect x="8" y="6" width="16" height="3" rx="1.5" />
          <rect x="4" y="12" width="20" height="3" rx="1.5" />
        </g>
      </svg>
    </div>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Intro</a
          >
        </li>
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/blog"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Blog</a
          >
        </li>
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/uses"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Uses</a
          >
        </li>
        
        <li class="group relative mr-6 mb-1">
          <div
            class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
          ></div>
          <a
            href="/contact"
            class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >Contact</a
          >
        </li>
        
        <li>
          <i
            class="bx cursor-pointer text-3xl text-primary dark:text-white"
            @click="themeSwitch()"
            :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"
          ></i>
        </li>
      </ul>
    </div>
  </div>
</div>
<div
  class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
  :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''"
>
  <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
    <i
      class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
      @click="isMobileMenuOpen = false"
    ></i>
    <ul class="mt-8 flex flex-col">
      
      <li class="">
        <a
          href="/"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Intro</a
        >
      </li>
      
      <li class="">
        <a
          href="/blog"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Blog</a
        >
      </li>
      
      <li class="">
        <a
          href="/uses"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Uses</a
        >
      </li>
      
      <li class="">
        <a
          href="/contact"
          class="mb-3 block px-2 font-body text-lg font-medium text-white"
          >Contact</a
        >
      </li>
      
    </ul>
  </div>
</div>

<div><div class="container mx-auto">
  <div class="py-16 lg:py-20">
    <div>
      <img src="/img/author.png" alt="icon uses" />
    </div>
    <h1
      class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
    >
      /uses
    </h1>
    <div class="pr-2 pt-3">
      <span class="font-body text-xl font-light text-primary dark:text-white">
        Inspired by
        <a
          href="https://uses.tech/"
          target="_blank"
          class="border-b border-green"
        >
          <span
            class="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >Wes Bos</span
          >
          and his project,
          <span
            class="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >uses.tech</span
          >.
        </a>
      </span>
    </div>

    <div class="pt-16 lg:pt-20">
      <h3
        class="pb-8 font-body text-2xl font-semibold text-primary dark:text-white"
      >
        Computer + Workspace
      </h3>
      <ul class="list-disc pl-10">
        <li class="font-body text-lg font-light text-primary dark:text-white">
          <span class="font-medium">Computer:</span>
          I use a 2019 16"
          <a
            href="/"
            class="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >MacBook Pro</a
          >
          (i9/32GB/512gb) for everything (work + personal). The physical escape
          key and fixed keyboard is amazing.
        </li>
        <li
          class="pt-5 font-body text-lg font-light text-primary dark:text-white"
        >
          <span class="font-medium">Chair:</span>
          When I sit, I sit on an
          <a
            href="/"
            class="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >Herman Miller Mirra 2</a
          >, but I stand almost 100% of the time, so the chair doesn’t do me
          much good.
        </li>
        <li
          class="pt-5 font-body text-lg font-light text-primary dark:text-white"
        >
          <span class="font-medium">Desk:</span>
          My desk is a
          <a
            href="/"
            class="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary"
            >Fully Jarvis standing desk</a
          >
          (which I love) with the Bamboo top (which I don't recommend). If
          you're looking for a great sit-stand desk, I highly recommend Jarvis.
          Also, purchase directly from Fully vs. Amazon. Fully's customer
          support is incredible.
        </li>
      </ul>
    </div>
  </div>
</div>
</div>

<div class="container mx-auto">
  <div
    class="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12"
  >
    <div class="mr-auto flex flex-col items-center sm:flex-row">
      <a href="/" class="mr-auto sm:mr-6">
        <img src="/img/logo.svg" alt="logo" />
      </a>
      <p class="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
        ©2022 Hei Yeung.
      </p>
    </div>
    <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
      
      <a href="https://github.com/ " target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"
        ></i>
      </a>
      
      <a href="https://codepen.io/ " target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-codepen"
        ></i>
      </a>
      
      <a href="https://www.linkedin.com/ " target="_blank">
        <i
          class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"
        ></i>
      </a>
      
    </div>
  </div>
</div>

</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Employee {
  id: number;
  name: string;
  isProgrammer?: boolean;
}

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

</style>
