<template>
  <div class="h-screen flex flex-row overflow-x-hidden"
  :class="[isMobileMenuOpen ? 'overflow-hidden desktop:overflow-auto' : '']">
    <Nav 
      :isMobileMenuOpen="isMobileMenuOpen" 
      :currentSection="currentSection" 
      @menuItemClick="menuItemClick" 
      @menuBtnClick="menuBtnClick" 
    />
    <div class="h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-screen desktop:pr-72 flex flex-col">
      <header class="flex flex-col desktop:flex-row w-full pt-4 desktop:pt-6 px-4 font-raleway">
        <h1 class="text-3xl font-normal w-full desktop:w-2/4 font-thin">Portfoio Details</h1>
        <div class="w-full desktop:w-2/4 text-right flex justify-start desktop:justify-end items-end font-light gap-2">
          <NuxtLink 
            to="/" 
            class="text-custom-sky"
          >Home</NuxtLink>
          <span>/</span>
          <span>Portfoio Details</span>
        </div>
      </header>
      <main class="px-4 pt-10 flex flex-col desktop:flex-row h-full w-full">
        <div class="desktop:w-8/12 h-full px-0">
            <VueSlickCarousel v-bind="slickSettings">
              <div class="bg-custom-sky"><h3>1</h3></div>
              <div class="bg-custom-sky"><h3>2</h3></div>
              /*...*/
          </VueSlickCarousel>
        </div>
        <div class="">
          2
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../../components/Nav.vue'
// @ts-ignore
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  name: 'Portfolio_Detail',
  components: {
    Nav,
    VueSlickCarousel 
  },
  data() {
    return {
      isMobileMenuOpen: false,
      currentSection:'portfolio',
      slickSettings:{
        arrows:false,
        dots:true,
        dotsClass: "custom-dots",
      }
    }
  },
  methods: 
  {
    menuItemClick(str:string, e:Event)
    {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.currentSection = str;
    },
    menuBtnClick(e:Event)
    {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  }
})
</script>
<style>
.custom-dots {
  position: absolute;
  bottom: -25px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
}
.custom-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}
.custom-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.custom-dots li button:hover,
.custom-dots li button:focus {
  outline: none;
}
.custom-dots li button:hover:before,
.custom-dots li button:focus:before {
  opacity: 1;
}
.custom-dots li button:before {
  font-family: 'slick';
  font-size: 10px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: '•';
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.custom-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
  
</style>
