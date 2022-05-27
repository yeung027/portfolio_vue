<template>
<div 
  class="h-screen flex flex-row"
  :class="[isMobileMenuOpen ? 'mobile:overflow-hidden' : '']"
>
  <div 
    class="rounded-full bg-sky-400 h-10 w-10 block fixed desktop:static right-4 top-4 flex items-center justify-center text-white cursor-pointer block desktop:hidden"
    @click="menuBtnClick"
  >
    <div 
      class="bx bx-sm h-auto w-auto"
      :class="[isMobileMenuOpen ? 'bx-x' : 'bx-menu']"
     />
  </div>
  <div 
    class="bg-deep-dark w-72 fixed h-screen z-10 flex flex-col text-white ease-in-out duration-300"
    :class="[isMobileMenuOpen ? '-left-0' : '-left-72 desktop:-left-0']"
  >
    <div class="flex justify-center pt-5">
      <nuxt-img 
        src="/img/profile-img.jpg" 
        class="rounded-full w-28 h-28 border-8 border-deep-blue"
      />
    </div>
    <div class="flex justify-center text-white font-medium text-2xl pt-3 tracking-wide cursor-pointer">Alex Smith</div>
    <div class="flex justify-center flex-row gap-4 mt-4">
      <div class="bx bxl-twitter bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bxl-github bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bxl-instagram bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bx-envelope bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
    </div>
    <div class="flex justify-left flex-col gap-8 px-8 mt-10">
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[false ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-home bx-sm h-auto w-auto"
          :class="[false ? 'text-gray-500' : 'text-custom-sky']"
        />
       Home
       </div>
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[true ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-user bx-sm h-auto w-auto"
          :class="[true ? 'text-gray-500' : 'text-custom-sky']"
        />
       About
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[true ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-note bx-sm h-auto w-auto bx-rotate-180"
          :class="[true ? 'text-gray-500' : 'text-custom-sky']"
        />
       Resume
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[true ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-briefcase-alt bx-sm h-auto w-auto"
          :class="[true ? 'text-gray-500' : 'text-custom-sky']"
        />
       Portfolio
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[true ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-support bx-sm h-auto w-auto"
          :class="[true ? 'text-gray-500' : 'text-custom-sky']"
        />
       Services
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[true ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-envelope bx-sm h-auto w-auto"
          :class="[true ? 'text-gray-500' : 'text-custom-sky']"
        />
       Contact
       </div>
    </div>
    <div class="flex-col bottom-0 h-full justify-end pb-10 hidden desktop:flex">
      <div class="text-center text-sm">
        <span class="font-normal">by</span>
        <span class="font-medium text-custom-sky">HeyHei</span>
      </div>
    </div>
  </div>
  <div class="h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-full">
    <section 
    class="flex flex-col items-center justify-center h-screen bg-clip-border bg-center-top bg-scroll bg-cover bg-hero bg-mobile w-full" 
    v-observe-visibility="introVisibilityChanged"
    >
      <h1 class="flex w-full pl-6 text-white font-medium text-3xl">
        Alex Smith
      </h1>
      <div class="w-full pl-6 flex flex-row gap-2 text-white font-normal text-2xl pt-3 tracking-wide">
        <h2 class="">I'm</h2>
        <h2 class="overflow-x-hidden group-hover:animate-type-reverse whitespace-nowrap text-brand-accent border-b-3 border-sky-400"  
              :class="[introVisible ? $style.type_reverse : '']"
        >
          Stupid
          </h2>

        <span
            class="box-border inline-block h-5 w-0.5 bg-black my-1.5 z-0"
            :class="$style.cursor"
          ></span>
        </div>
    </section>
    <section 
      class="w-full min-h-screen px-2 desktop:px-8" 
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">About</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div class="flex flex-col desktop:flex-row mx-2 mt-6 items-start">
      <div 
        class="flex desktop:justify-center w-11/12 desktop:w-2/5 ease-in-out duration-500 transform"
        v-observe-visibility="aboutImgVisibilityChanged"
        :class="[aboutImgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full']"
      >
          <nuxt-img 
            src="/img/profile-img.jpg" 
            class="desktop:w-11/12"
          />
        </div>
      <div 
        class="ease-in-out duration-500 desktop:w-3/5 mt-6 desktop:mt-0 transform"
        v-observe-visibility="aboutDetailVisibilityChanged"
        :class="[aboutDetailVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full']"
      >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 ml-0 dekstop:ml-5">Redundant Staff</h1>
      <article class="dekstop:mx-2 font-normal font-open_sans font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </article>
      <ul class='bx-ul bx-xs desktop:grid desktop:grid-cols-2 desktop:pt-4'>
        <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
          <span class="-ml-6 font-normal text-base pr-2">Phone:</span>
          <span class="font-open_sans font-light text-base">12345678</span>
        </li>
        <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
          <span class="-ml-6 font-normal text-base pr-2">Town:</span>
          <span class="font-open_sans font-light text-base">Kwai Chung</span>
        </li>
        <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
          <span class="-ml-6 font-normal text-base pr-2">Website:</span>
          <span class="font-open_sans font-light text-base">www.abc.com</span>
        </li>
        <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
          <span class="-ml-6 font-normal text-base pr-2">Email:</span>
          <span class="font-open_sans font-light text-base">abc@gmail.com</span>
        </li>
        <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
          <span class="-ml-6 font-normal text-base pr-2">Freelance:</span>
          <span class="font-open_sans font-light text-base">Available</span>
        </li>
      </ul>
      <article class=" my-3 desktop:mx-2 font-normal font-open_sans font-light">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
      </article>
    </div>
    </div>
    </section>
  </div>
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
      introVisible:false,
      aboutImgVisible:false,
      aboutDetailVisible:false
    }
  },
  methods: 
  {
    menuBtnClick(e:Event)
    {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    themeSwitch()
    {
      this.isDarkMode = !this.isDarkMode;
    },
    introVisibilityChanged (isVisible:boolean, entry:any) {
      this.introVisible = isVisible
    },
    aboutImgVisibilityChanged (isVisible:boolean, entry:any) {
      this.aboutImgVisible = isVisible
    },
    aboutDetailVisibilityChanged (isVisible:boolean, entry:any) {
      this.aboutDetailVisible = isVisible
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
  .type_reverse
  {
    animation: type 1.8s ease-out 0s infinite alternate-reverse both
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
    75%, 80% { width: 5ch }
    85%, 90% { width: 5ch }
    95% { width: 5ch }
  }
</style>
