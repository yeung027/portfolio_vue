<template>
  <div class="h-screen flex flex-row overflow-x-hidden"
  :class="[isMobileMenuOpen ? 'overflow-hidden desktop:overflow-auto' : '']"
  id="root"
  >
    <Nav 
      :isMobileMenuOpen="isMobileMenuOpen" 
      :currentSection="currentSection" 
      :topEleQuery="`#topH1`"
      :topVisible="toph1Visible"
      @menuItemClick="menuItemClick" 
      @menuBtnClick="menuBtnClick" 
    />
    <div class="h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-screen desktop:pr-72 flex flex-col">
      <header class="flex flex-col desktop:flex-row w-full pt-4 desktop:pt-6 px-4 font-raleway">
        <h1 
          id="topH1" 
          class="text-3xl font-normal w-full desktop:w-2/4 font-thin"
          v-observe-visibility="topH1VisibilityChanged"
        >Portfoio Details</h1>
        <div class="w-full desktop:w-2/4 text-right flex justify-start desktop:justify-end items-end font-light gap-2">
          <a 
            href="/#portfolio" 
            class="text-custom-sky"
          >Home</a>
          <span>/</span>
          <span>Portfoio Details</span>
        </div>
      </header>
      <main class="px-4 pt-10 flex flex-col desktop:flex-row h-full w-full">
        <div class="desktop:w-8/12 px-0 py-4 desktop:py-0">
            <VueSlickCarousel v-bind="slickSettings">
              <div class="flex w-full">
                <nuxt-img 
                  src="/portfolio/detail/1/1.jpg" 
                  provider="static"
                  class=" max-h-96 px-auto mx-auto"
                  />
              </div>
              <div class="flex w-full">
                <nuxt-img 
                  src="/portfolio/detail/1/2.jpg" 
                  provider="static"
                  class=" max-h-96 px-auto mx-auto"
                  />
              </div>
              <div class="flex w-full">
                <nuxt-img 
                  src="/portfolio/detail/1/3.jpg" 
                  provider="static"
                  class=" max-h-96 px-auto mx-auto"
                  />
              </div>
          </VueSlickCarousel>
        </div>
        <div class="pt-10 desktop:pt-4 px-6">
          <h2 class="font-roboto text-xl font-normal">
            Information
          </h2>
          <ul class="mt-4">
            <li class="py-1">
              <span class="font-medium mr-1">Category:</span>
              <span class="font-normal">Web design</span>
            </li>
            <li class="py-1">
              <span class="font-medium mr-1">Client:</span>
              <span class="font-normal">ABC Company</span>
            </li>
            <li class="py-1">
              <span class="font-medium mr-1">Project Date:</span>
              <span class="font-normal">1/2/2021</span>
            </li>
            <li class="py-1">
              <span class="font-medium mr-1">Project URL:</span>
              <span class="font-normal">
                <a 
                  href="http://google.com" 
                  target="_blank"
                  class="text-custom-sky"
                >
                  aaaaaa.com
                </a>
              </span>
            </li>
          </ul>
          <div class="mt-6">
              <h2 class="font-roboto text-2xl font-normal leading-7">
                This is an example of portfolio detail
              </h2>
              <article class="mt-4 font-normal font-open_sans font-light">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </article>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../../components/Nav.vue'
import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)
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
      toph1Visible:false,
      isMobileMenuOpen: false,
      currentSection:'portfolio',
      slickSettings:{
        arrows:false,
        dots:true,
        dotsClass: "custom-dots",
        autoplay:true,
        autoplaySpeed:2500
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
    topH1VisibilityChanged (isVisible:boolean, entry:any) {
      this.toph1Visible = isVisible
    }
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

  width: 18px;
  height: 18px;
  padding: 0px;
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
  font-size: 14px;
  line-height: 14px;

  position: relative;
  top: 0;
  left: 0;
  width: 19px;
  height: 19px;
  content: '•';
  text-align: center;
  opacity: 0.25;
  color: #525252;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.custom-dots li.slick-active button:before {
  opacity: 0.75;
  color: #149ddd;
}
  
</style>
