<template>
  <div class="bg-white h-screen flex flex-row overflow-x-hidden"
  :class="[$parent.isMobileMenuOpen ? 'overflow-hidden desktop:overflow-auto' : '']"
  id="root"
  >
    <div class="mt-10 desktop:mt-2 h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-screen desktop:pr-72 flex flex-col">
      <header class="flex flex-col desktop:flex-row w-full pt-4 desktop:pt-6 pl-6 pr-6 desktop:pr-8 font-raleway">
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
      <main class="px-4 pt-10 flex flex-col desktop:flex-row h-full w-full pb-10 desktop:pb-4">
        <div class="desktop:w-8/12 px-0 py-4 desktop:py-0">
            <VueSlickCarousel v-bind="slickSettings">
              <div 
                class="flex w-full"
                v-for="production in contents[intSlug].images"
                :key="production"
              >
              <img 
                  :src="getImgUrl(slug, production)"
                  provider="static"
                  class=" max-h-96 px-auto mx-auto"
                  />
                
              </div>
              
          </VueSlickCarousel>
        </div>
        <!--{{contents[intSlug].Title}}-->
        <div class="pt-10 desktop:pt-4 px-6">
          <h2 class="font-roboto text-xl font-normal">
            Information
          </h2>
          <ul class="mt-4">
            <li 
              class="py-1"
              v-for="(value, key, index) in contents[intSlug].detail" :key="`${ key }-${ index }`"
            >
              <span class="font-medium mr-1">{{key}}:</span>
              <span class="font-normal" v-html="value"></span>
            </li>
            
          </ul>
          <div class="mt-6">
              <h2 class="font-roboto text-2xl font-normal leading-7">
                {{contents[intSlug].title}}
              </h2>
              <article class="mt-4 font-normal font-open_sans font-light pb-40 desktop:pb-6">
                {{contents[intSlug].description}}
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
declare interface BaseComponentData {
  toph1Visible:boolean
    intSlug:number
    slickSettings: Object
    contents: Object[]
}

export default Vue.extend({
  name: 'Portfolio_Detail',
  components: {
    Nav,
    VueSlickCarousel 
  },
  data(): BaseComponentData {
    return {
      toph1Visible:false,
      intSlug:-1,
      slickSettings:{
        arrows:false,
        dots:true,
        dotsClass: "custom-dots",
        autoplay:true,
        autoplaySpeed:2500
      },
      contents: [
        {
          title:'Polofolio Detail',
          description:'An e-book written by a psychosis patient which about herself.',
          detail:{
            Title: 'E-book 「思覺失調這一課」',
            Client: 'ShanShan',
            'Project Date' : '15/7/2021',
            URL: '<a class="text-custom-sky hover:text-amber-500 underline" href="http://iloveh3k.com" target="_blank">http://iloveh3k.com</a>'
          },
          images:['1.png', '2.png', '3.png', '4.png', '5.png']
        }
      ]
    }
  },
  created()
  {
    this.initSlug();
  },
  async asyncData({ params }) 
  {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug }
  },
  watch: {
    'toph1Visible': 
    {
      handler: function (after, before) 
      {
        this.$nuxt.$emit('topVisibleChange', after);
      },
      deep: true
    }
  },
  mounted: function() 
  {
    this.$nuxt.$emit('topEleQueryChange', '#topH1');
    this.initSlug();
  },
  methods: 
  {
    getImgUrl(slug:string, suffix:string) 
    {
      //:src="`
      let url:string = '/portfolio/detail/'+slug+'/'+suffix;
      return url;
    },
    topH1VisibilityChanged (isVisible:boolean, entry:any) {
      this.toph1Visible = isVisible
    },
    initSlug() 
    {
      this.intSlug = parseInt(this.$route.params.slug);
      if(isNaN(this.intSlug)) throw({ statusCode: 404, message: 'Post not found' });
      this.intSlug-=1;
      if(this.intSlug<0 || this.intSlug > this.contents.length -1 || !this.contents[this.intSlug]) 
      throw({ statusCode: 404, message: 'Post not found' });
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
