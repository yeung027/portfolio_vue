<template>
    <div>
    <div 
    class="rounded-full z-20 bg-sky-400 h-10 w-10 block fixed desktop:static right-4 top-4 flex items-center justify-center text-white cursor-pointer block desktop:hidden"
    @click="$emit('menuBtnClick')"
    >
    <div 
      class="bx bx-sm h-auto w-auto"
      :class="[isMobileMenuOpen ? 'bx-x' : 'bx-menu']"
     />
  </div>
  <nav 
    class="w-screen desktop:w-72 fixed h-screen z-10 flex flex-row text-white ease-in-out duration-300"
    :class="[isMobileMenuOpen ? '-left-0' : '-left-full desktop:-left-0']"
  >
  <div 
    class="bg-deep-dark w-72 fixed h-screen flex flex-col text-white"
  >
    <div class="flex justify-center pt-5">
      <nuxt-img 
        src="/img/profile-img.jpg" 
        provider="static"
        class="rounded-full w-28 h-28 border-8 border-deep-blue"
      />
    </div>
    <div class="flex justify-center text-white font-medium text-2xl pt-3 tracking-wide cursor-pointer">Alex Smith</div>
    <div class="flex justify-center flex-row gap-4 mt-4">
      <a href="http://google.com" target="_blank">
        <div class="bx bxl-twitter bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      </a>
      <a href="http://google.com" target="_blank">
        <div class="bx bxl-github bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      </a>
      <a href="http://google.com" target="_blank">
        <div class="bx bxl-instagram bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      </a>
      <a href="http://google.com" target="_blank">
        <div class="bx bx-envelope bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      </a>
    </div>
    <div class="justify-between h-2/5 desktop:h-full flex desktop:justify-left flex-col desktop:gap-8 px-8 mt-10">
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='intro' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-home bx-sm h-auto w-auto"
          :class="[currentSection!='intro' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#intro" @click="$emit('menuItemClick', 'intro')">Home</a>
       </div>
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='about' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-user bx-sm h-auto w-auto"
          :class="[currentSection!='about' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#about" @click="$emit('menuItemClick', 'about')">About</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='skills' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-certification bx-sm h-auto w-auto"
          :class="[currentSection!='skills' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#skills" @click="$emit('menuItemClick', 'skills')">Skills</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='resume' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-note bx-sm h-auto w-auto bx-rotate-180"
          :class="[currentSection!='resume' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#resume" @click="$emit('menuItemClick', 'resume')">Resume</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='portfolio' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-briefcase-alt bx-sm h-auto w-auto"
          :class="[currentSection!='portfolio' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#portfolio" @click="$emit('menuItemClick', 'portfolio')">Portfolio</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='contact' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-envelope bx-sm h-auto w-auto"
          :class="[currentSection!='contact' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#contact" @click="$emit('menuItemClick', 'contact')">Contact</a>
       </div>
    </div>
    <div class="flex-col bottom-0 h-full justify-end pb-10 hidden desktop:flex">
      <div class="text-center text-sm">
        <span class="font-normal">by</span>
        <span class="font-medium text-custom-sky">HeyHei</span>
      </div>
    </div>
  </div>
  <div 
    class="w-full block desktop:hidden"
    @click="$emit('menuBtnClick')"
  >
  </div>
  </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['isMobileMenuOpen', 'currentSection'],
    data() {
        return{
            
        }
    },
    methods: {

        menuItemClick(str:string, e:Event)
        {
            this.$props.isMobileMenuOpen = !this.$props.isMobileMenuOpen;
            this.$props.currentSection = str;
        },
    }
})
</script>