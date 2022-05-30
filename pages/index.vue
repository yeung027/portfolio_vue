<template>
<div 
  class="h-screen flex flex-row overflow-x-hidden"
  :class="[isMobileMenuOpen ? 'mobile:overflow-hidden' : '']"
>
  <div 
    class="rounded-full z-20 bg-sky-400 h-10 w-10 block fixed desktop:static right-4 top-4 flex items-center justify-center text-white cursor-pointer block desktop:hidden"
    @click="menuBtnClick"
  >
    <div 
      class="bx bx-sm h-auto w-auto"
      :class="[isMobileMenuOpen ? 'bx-x' : 'bx-menu']"
     />
  </div>
  <div 
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
      <div class="bx bxl-twitter bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bxl-github bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bxl-instagram bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
      <div class="bx bx-envelope bx-xs text-white rounded-full h-auto w-auto bg-deep-blue p-1.5 cursor-pointer" />
    </div>
    <div class="flex justify-left flex-col gap-8 px-8 mt-10">
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='intro' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-home bx-sm h-auto w-auto"
          :class="[currentSection!='intro' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#intro" @click="menuItemClick('intro')">Home</a>
       </div>
      <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='about' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-user bx-sm h-auto w-auto"
          :class="[currentSection!='about' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#about" @click="menuItemClick('about')">About</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='skills' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-user bx-sm h-auto w-auto"
          :class="[currentSection!='skills' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#skills" @click="menuItemClick('skills')">Skills</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='resume' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-note bx-sm h-auto w-auto bx-rotate-180"
          :class="[currentSection!='resume' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#resume" @click="menuItemClick('resume')">Resume</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='portfolio' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-briefcase-alt bx-sm h-auto w-auto"
          :class="[currentSection!='portfolio' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#portfolio" @click="menuItemClick('portfolio')">Portfolio</a>
       </div>
       <div 
        class="flex flex-row gap-2 text-white leading-7"
        :class="[currentSection!='contact' ? 'text-gray-500' : 'text-white']"
      >
        <div 
          class="bx bx-envelope bx-sm h-auto w-auto"
          :class="[currentSection!='contact' ? 'text-gray-500' : 'text-custom-sky']"
        />
        <a href="/#contact" @click="menuItemClick('contact')">Contact</a>
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
    @click="menuBtnClick"
  >
  </div>
  </div>

  <div
    class="fixed right-6 desktop:right-10 bottom-6 border pl-4 pr-2 rounded flex flex-row items-center ease-in-out duration-300 transition transform z-20"
    :class="[snackOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      , snackType=='normal' ? 'bg-light-light-green text-green border-green' : 'bg-red-100 border-red-400 text-red-700']"
  >
    <span 
      class="bx bx-xs py-3"
      :class="[snackType=='normal' ? 'bx-check' : 'bx-error']"
     />
    <span class="">{{snackMessage}}</span>
    <span 
      class="text-light-gray cursor-pointer h-10 flex items-center px-2"
      @click="setSnackOpen(false)"
     >
      <span class="bx bx-xs bx-x" />
     </span>
  </div>


  <div
    class="fixed w-screen h-screen z-40 flex justify-center items-center"
  >
    <div class="fixed h-screen left-10 flex items-center p-4">
      <div class="bg-black text-white bx bxs-chevron-left bx-md bg-black"></div>
    </div>
    <div class="w-10/12 desktop:w-3/6 flex flex-col">
      <nuxt-img 
        src="/portfolio/1.png" 
        provider="static"
        class=""
        />
        <div class="bg-white px-2 py-4">
          asdsdsadsa
        </div>
    </div>
    
  </div>
  <div class="fixed w-screen h-screen z-30 bg-black opacity-75 flex justify-center items-center" />

  <div class="h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-full">
    <section 
    class="flex flex-col desktop:items-center justify-center h-screen bg-clip-border bg-center-top bg-cover bg-hero bg-mobile bg-fixed w-full" 
    v-observe-visibility="introVisibilityChanged"
    id="intro"
    >
      <div>
      <h1 class="flex w-auto text-white font-medium text-3xl desktop:text-5xl desktop:-ml-60 pl-12 desktop:0">
        Alex Smith
      </h1>
      <div class="w-auto flex flex-row gap-2 text-white font-normal text-2xl pt-3 tracking-wide desktop:-ml-60 pl-12 desktop:0">
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
        </div>
    </section>
    <section 
      class="w-full px-2 desktop:px-8" 
      id="about"
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">About</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div class="flex flex-col desktop:flex-row mx-2 mt-6 items-start">
      <div 
        class="flex desktop:justify-center w-11/12 desktop:w-2/5 ease-in-out duration-500 delay-500 transform"
        v-observe-visibility="aboutImgVisibilityChanged"
        :class="[aboutImgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']"
      >
          <nuxt-img 
            src="/img/profile-img.jpg" 
            provider="static"
            class="desktop:w-11/12 z-0"
          />
        </div>
      <div 
        class="ease-in-out duration-500 delay-300 desktop:w-3/5 mt-6 desktop:mt-0 transform"
        v-observe-visibility="aboutDetailVisibilityChanged"
        :class="[aboutDetailVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']"
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
    <section 
      class="w-full px-2 desktop:px-8" 
      id="skills"
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">Skills</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div 
        class="flex flex-col desktop:flex-row px-2 mt-6"
        v-observe-visibility="skillBarVisibilityChanged"
      >
        <div 
          class="desktop:w-1/2 desktop:pr-4 flex flex-col gap-6 ease-in-out delay-300 duration-1000 transition transform"
          :class="[skillBarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
            <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>HTML</span>
                <span class="text-right">100%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 100%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-500 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>CSS / SCSS</span>
                <span class="text-right">95%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 95%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-500 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>React</span>
                <span class="text-right">95%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 95%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-500 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
            <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>Ruby on rails</span>
                <span class="text-right">96%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 96%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-500 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
        </div>
        <div 
          class="desktop:w-1/2 desktop:pl-4 flex flex-col gap-6 mt-6 desktop:mt-0 delay-700 duration-1000 transition transform"
          :class="[skillBarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>Vue</span>
                <span class="text-right">70%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 70%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-700 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
          <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>Design</span>
                <span class="text-right">55%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 55%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-700 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
          <div>
            <div class="grid grid-cols-2 font-roboto text-xs pb-1">
              <span>Backend</span>
              <span class="text-right">100%</span>
            </div>
            <div class="w-full bg-sky-100  h-2.5">
              <div class="bg-sky-400 h-2.5 " style="width: 100%"></div>
            </div>
          </div>
          <div>
              <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                <span>Ubuntu</span>
                <span class="text-right">80%</span>
              </div>
              <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                <div 
                  class="h-2.5" 
                  style="width: 80%"
                >
                  <div 
                    class="bg-sky-400 h-full w-full ease-in-out delay-700 duration-1000 transition transform"
                    :class="[skillBarVisible ? 'translate-x-0' : '-translate-x-10']"
                   />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section 
      class="w-full px-2 desktop:px-8" 
      id="resume"
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">Resume</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div 
        class="flex flex-col desktop:flex-row px-2 mt-6 mb-10"
      >
        <div 
          class="pb-8 desktop:pb-0 ease-in-out delay-300 duration-1000 transition transform"
          v-observe-visibility="resumeVisibilityChanged"
          :class="[resumeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          <div class="text-black font-roboto text-2xl font-medium pb-4">Professional Experience</div>
          <div class="border-l-2 border-dark-blue px-6 pb-1">
            <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
            <div class="text-black font-roboto text-xl font-medium -mt-5">Senior graphic design specialist</div>
            <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2019 - Present</div>
            <div class="text-black font-open_sans text-base font-normal pt-2 italic">Experion, New York, NY</div>
            <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-8">
              <li class="my-2">Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li class="my-2">Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            </ul>
          </div>
          <div class="border-l-2 border-dark-blue px-6 pb-1">
            <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
            <div class="text-black font-roboto text-xl font-medium -mt-5">Graphic design specialist</div>
            <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2017 - 2018</div>
            <div class="text-black font-open_sans text-base font-normal pt-2 italic">Stepping Stone Advertising, New York, NY</div>
            <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-2">
              <li class="my-2">Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li class="my-2">Managed up to 5 projects or tasks at a given time while under pressure</li>
            </ul>
          </div>
        </div>
        
        <div
          class="pb-8 desktop:pb-0 ease-in-out delay-500 duration-1000 transition transform"
          v-observe-visibility="resume2VisibilityChanged"
          :class="[resume2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          <div class="text-black font-roboto text-2xl font-medium pb-4">Education</div>
          <div class="border-l-2 border-dark-blue px-6 pb-1">
            <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
            <div class="text-black font-roboto text-xl font-medium -mt-5">Senior graphic design specialist</div>
            <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2019 - Present</div>
            <div class="text-black font-open_sans text-base font-normal pt-2 italic">Experion, New York, NY</div>
            <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-8">
              <li class="my-2">Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li class="my-2">Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            </ul>
          </div>
          <div class="border-l-2 border-dark-blue px-6 pb-1">
            <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
            <div class="text-black font-roboto text-xl font-medium -mt-5">Graphic design specialist</div>
            <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2017 - 2018</div>
            <div class="text-black font-open_sans text-base font-normal pt-2 italic">Stepping Stone Advertising, New York, NY</div>
            <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-2">
              <li class="my-2">Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li class="my-2">Managed up to 5 projects or tasks at a given time while under pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section 
      class="w-full px-2 desktop:px-8 desktop:min-h-screen" 
      id="portfolio"
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">Portfolio</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div 
        class="grid grid-cols-1 desktop:grid-cols-3 gap-y-6 pl-2 pb-20 pt-10 ease-in-out delay-300 duration-1000 transition transform"
        v-observe-visibility="portfolioVisibilityChanged"
        :class="[portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/1.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/2.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/3.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/4.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/5.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
        <div 
          class="w-11/12 text-white overflow-y-hidden group"
        >
          <nuxt-img 
            src="/portfolio/6.png" 
            provider="static"
            class="w-full group-hover:opacity-50"
          />
          <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-plus h-6 my-2" />
            </div>
            <div class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90">
              <div class="bx bx-sm bx-link h-6 my-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section 
      class="w-full px-2 desktop:px-8 desktop:min-h-screen" 
      id="contact"
    >
      <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">Contact</h1>
      <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
      <article class="mx-2 font-normal font-open_sans font-light">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </article>
      <div 
        class="flex flex-col desktop:flex-row px-2 mt-6 mb-10"
      >
        <div class="flex flex-col p-4 desktop:p-6 m-2 desktop:m-0 shadow-box1 w-auto desktop:w-3/5">
          <ul class='mb-2'>
            <li class="flex flex-row mb-6">
              <div class="mt-1">
                <div class="bx bx-map bx-sm text-custom-sky bg-light-sky rounded-full p-3" />
              </div>
              <div class="flex flex-col ml-4">
                <div class="font-normal text-2xl pr-2">Location:</div>
                <div class="font-open_sans font-light text-sm">A108 Adam Street, New York, NY 535022</div>
              </div>
            </li>
           <li class="flex flex-row mb-6">
              <div>
                <div class="bx bx-envelope bx-sm text-custom-sky bg-light-sky rounded-full p-3" />
              </div>
              <div class="flex flex-col ml-4">
                <div class="font-normal text-2xl pr-2">Email:</div>
                <div class="font-open_sans font-light text-sm">abc@gmail.com</div>
              </div>
            </li>
            <li class="flex flex-row mb-6">
              <div>
                <div class="bx bx-phone bx-sm text-custom-sky bg-light-sky rounded-full p-3" />
              </div>
              <div class="flex flex-col ml-4">
                <div class="font-normal text-2xl pr-2">Phone / Whatsapp:</div>
                <div class="font-open_sans font-light text-sm">12345678</div>
              </div>
            </li>
          </ul>
          <div class="">
            <GMap
              ref="gMap"
              language="zh"
              :center="{lat: locations[0].coords.lat, lng: locations[0].coords.lng}"
              :zoom="18"
              class="h-20"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{lat: location.coords.lat, lng: location.coords.lng}"
                @click="currentLocation = location"
              >
                <GMapInfoWindow :options="{maxWidth: 150, maxHeight:150}">
                  <code>
                    hello
                  </code>
                </GMapInfoWindow>
              </GMapMarker>
              <GMapCircle />
            </GMap>
          </div>
        </div>
        <div class="shadow-box1 w-auto desktop:w-full m-2 desktop:ml-6 desktop:mt-0 p-4 py-8">
          <form class="grid grid-cols-1 desktop:grid-cols-2 gap-6" method="get">
            <div class="">
              <div class="pb-1 flex flex-row">
                <span class="whitespace-nowrap flex items-end">Your Name</span>
                <span
                  :class="[contactErrors.name!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                >
                  {{contactErrors.name}}
                </span>
              </div>
              <input type="text" name="name" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" />
            </div>
            <div class="">
              <div class="pb-1 flex flex-row">
                <span class="whitespace-nowrap flex items-end">Your Email</span>
                <span
                  :class="[contactErrors.email!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                >
                  {{contactErrors.email}}
                </span>
              </div>
              <input type="text" name="email" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" />
            </div>
            <div class="desktop:col-span-2">
              <div class="pb-1 flex flex-row">
                <span class="whitespace-nowrap flex items-end">Subject</span>
                <span
                  :class="[contactErrors.subject!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                >
                  {{contactErrors.subject}}
                </span>
              </div>
              <input type="text" name="subject" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" />
            </div>
            <div class="desktop:col-span-2">
              <div class="pb-1 flex flex-row">
                <span class="whitespace-nowrap flex items-end">Message</span>
                <span
                  :class="[contactErrors.message!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                >
                  {{contactErrors.message}}
                </span>
              </div>
              <textarea name="message" class="border border-gray-400 w-full h-52 px-4 focus:border-custom-sky" />
            </div>
            <div class="desktop:col-span-2 text-center">
              <input 
                type="button" 
                value="Send Message" 
                class="bg-custom-sky text-white px-4 py-2 rounded hover:opacity-70 cursor-pointer" 
                @click="contactValidation"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { elements } from 'vue-meta/types/vue-meta'

 declare interface BaseComponentData {
  isMobileMenuOpen:boolean
  isDarkMode:boolean
  introVisible: boolean
  aboutImgVisible: boolean
  aboutDetailVisible: boolean
  skillBarVisible:boolean
  resumeVisible:boolean
  resume2Visible:boolean
  portfolioVisible:boolean
  currentSection:string
  contactErrors:{name:string, email:string, subject:string, message:string}
  locations:any[]
  mapsApiKey:any
  mapOptions:object
  capabilities:object
  snackOpen: boolean
  snackType: string
  snackMessage: string
}

import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)
export default Vue.extend({
  name: 'IndexPage',
  data(): BaseComponentData {
    return {
      isMobileMenuOpen: false,
      isDarkMode: false,
      introVisible:false,
      aboutImgVisible:false,
      aboutDetailVisible:false,
      skillBarVisible:false,
      resumeVisible:false,
      resume2Visible:false,
      portfolioVisible:false,
      currentSection:'intro',
      contactErrors:{
        name:'',
        email:'',
        subject:'',
        message:''
      },
      snackOpen:false,
      snackType:'normal',
      snackMessage:'dasdasdasdssa',
      locations:[
        {"title":"葵聯邨聯逸樓","address1":"香港葵涌葵盛圍","coords":{"lat":22.361802297540137,"lng":114.12586327790989},"placeId":"ChIJbyr84JX4AzQRRjDmwoKaPK0"}
      ],
      mapsApiKey: process.env.GMAP_API_KEY,
      mapOptions: {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
      capabilities: {"input":true,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false}
    }
  },
  methods: 
  {
    menuBtnClick(e:Event)
    {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    menuItemClick(str:string, e:Event)
    {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.currentSection = str;
    },
    setSnackOpen(v:any)
    {
      this.snackOpen = v;

      if(v==true)
      {
        let that = this;
        setTimeout(function () { that.setSnackOpen(false) }.bind(this), 6000)
      }
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
    },
    skillBarVisibilityChanged (isVisible:boolean, entry:any) {
      this.skillBarVisible = isVisible
    },
    resumeVisibilityChanged (isVisible:boolean, entry:any) {
      this.resumeVisible = isVisible
    },
    resume2VisibilityChanged (isVisible:boolean, entry:any) {
      this.resume2Visible = isVisible
    },
    portfolioVisibilityChanged (isVisible:boolean, entry:any) {
      this.portfolioVisible = isVisible
    },
    contactValidation_name ():string {
      let name: HTMLInputElement = document.querySelector('input[name="name"]')!;
      if(name.value=='' || name.value.trim() =='') return 'Please enter your name';
      else return '';
    },
    contactValidation_email ():string {
      let email: HTMLInputElement = document.querySelector('input[name="email"]')!;
      const emailRegexp  =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      let emailV  = emailRegexp.test(email.value);
      if(email.value=='' || email.value.trim() =='') return 'Please enter email';
      else if(!emailV) return 'Invalid email';
      else return '';
    },
    contactValidation_subject ():string {
      let subject: HTMLInputElement = document.querySelector('input[name="subject"]')!;
      if(subject.value=='' || subject.value.trim() =='') return 'Please enter subject';
      else return '';
    },
    contactValidation_message ():string {
      let message: HTMLTextAreaElement = document.querySelector('textarea[name="message"]')!;
      if(message.value==null || message.value=='' || message.value.trim() =='') return 'Please enter message';
      else return '';
    },
    contactValidation () {
      let error = 0;
      let name = this.contactValidation_name();
      let email = this.contactValidation_email();
      let subject = this.contactValidation_subject();
      let message = this.contactValidation_message();


      if(name!=''){ this.contactErrors.name = name; error++;}
      else this.contactErrors.name = '';

      if(email!=''){ this.contactErrors.email = email; error++;}
      else this.contactErrors.email = '';

      if(subject!=''){ this.contactErrors.subject = subject; error++;}
      else this.contactErrors.subject = '';

      if(message!=''){ this.contactErrors.message = message; error++;}
      else this.contactErrors.message = '';

      if(error>0)
      {
        this.snackType  = 'error';
        this.snackMessage = 'test';
        this.setSnackOpen(true);
      }
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
    15%, 20% { width: 1ch }
    25%, 30% { width: 1ch }
    35%, 40% { width: 1ch }
    45%, 50% { width: 2.6ch }
    55%, 60% { width: 2.6ch }
    65%, 70% { width: 2.6ch }
    75%, 80% { width: 2.6ch }
    85%, 90% { width: 2.6ch }
    100% { width: 2.6ch }
  }
</style>
