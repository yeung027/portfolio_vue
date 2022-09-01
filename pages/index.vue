<template>
  <div 
    class="bg-white h-screen flex flex-row overflow-x-hidden"
    :class="[$parent.isMobileMenuOpen ? 'overflow-hidden desktop:overflow-auto' : '']"
    id="root"
  >
  
  
    <Snack 
      :open="snackOpen" 
      :type="snackType" 
      :message="snackMessage" 
      @setOpen="setSnackOpen"
    />
  
  
    <div
      class="fixed w-screen h-screen z-40 justify-center items-center"
      :class="[pfBackdropOpen || pfBackdropAnim ? 'flex' : 'hidden']"
      v-touch:swipe.left="pfBackdropSwipeLeftHandler"
      v-touch:swipe.right="pfBackdropSwipeRightHandler"
    > 
  
      <div 
        class="flex fixed top-2 desktop:top-10 right-2 desktop:right-10 text-white bx bx-x bx-md cursor-pointer hover:bg-opacity-100 z-40 opacity-70 hover:opacity-100" 
        @click="setpfBackdropOpen(false, -1)"
      />
      <div class="hidden desktop:flex fixed h-screen left-10 items-center p-4 z-20">
        <div 
          class="duration-700 bg-black text-white bx bxs-chevron-left bx-md bg-black cursor-pointer bg-opacity-50 hover:bg-opacity-100" 
          @click="pfBackdropPrev()"
        />
      </div>
      <div class="hidden desktop:flex fixed h-screen right-10 items-center p-4 z-20">
        <div 
          class="duration-700 bg-black text-white bx bxs-chevron-right bx-md bg-black cursor-pointer bg-opacity-50 hover:bg-opacity-100" 
          @click="pfBackdropNext()"
        />
      </div>
      <client-only>
      <div 
        class="fixed w-full desktop:w-fit h-full grid place-items-center duration-500 ease-in-out transition transform"
        id="pfBackdropContainer_0"
        :class="getContainer0MoveAnim()"
      >
        <div 
          class="w-fit ease-in-out duration-300 transition transform"
          :class="[(!pfBackdropAnimDo && pfBackdropOpen) || (pfBackdropAnimDo && !pfBackdropOpen) ? 'opacity-50 scale-0' : 'opacity-100 scale-100']"
        >
          <nuxt-img 
            :src="getPfImgSrc(0)" 
            provider="static"
            class=""
            />
            <div class="bg-white px-2 py-4">
              {{getPfDesc(0)}}
            </div>
          </div>
      </div>
  
      <div 
        class="fixed w-full desktop:w-3/6 h-full grid place-items-center duration-500 ease-in-out transition transform"
        id="pfBackdropContainer_1"
        :class="getContainer1MoveAnim()"
      >
        <div 
          class="w-full ease-in-out duration-300 transition transform"
          :class="[(!pfBackdropAnimDo && pfBackdropOpen) || (pfBackdropAnimDo && !pfBackdropOpen) ? 'opacity-50 scale-0' : 'opacity-100 scale-100']"
        >
          <nuxt-img 
            :src="getPfImgSrc(1)" 
            provider="static"
            class=""
            />
            <div class="bg-white px-2 py-4">
              {{getPfDesc(1)}}
            </div>
          </div>
      </div>
      </client-only>
    </div>
    <div 
      class="fixed w-screen h-screen z-30 bg-black justify-center items-center backdrop-filter backdrop-blur-xs bg-opacity-75"
      :class="[pfBackdropOpen ? 'flex' : 'hidden']"
    />
  
    <div class="h-screen items-center justify-center desktop:justify-start desktop:ml-72 w-full">
      <section  
      class="flex flex-col desktop:items-start justify-center h-screen bg-clip-border bg-cover bg-hei bg-mobile desktop:bg-desktop desktop:bg-fixed w-full" 
      v-observe-visibility="introVisibilityChanged"
      id="intro"
      >
        <div>
        <h1 class="flex w-auto text-white font-medium text-3xl desktop:text-5xl desktop:ml-10 pl-6 desktop:0">
          Hei Yeung
        </h1>
        <div class="w-auto flex flex-row gap-2 text-white font-normal text-2xl pt-3 tracking-wide desktop:ml-10 pl-6 desktop:0">
          <h2 class="">I'm</h2>
          <h2 
            id="intro_title" 
            class="h-9 overflow-x-hidden whitespace-nowrap text-brand-accent border-b-3 border-sky-400"  
            :class="$style.textShadow"
          >
            {{introTitle}}
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
          I am a Full-stack Developer. Well-versed in back-end frameworks such as Node.js, Next.js, Express.js and Ruby on rails.
  
  Also I have experience in front-end frameworks such as react and jQuery.
  
  Now I am mainly coding in reactjs because I can coding in javascript on both font-end and back-end.
  
  Moreover, I have learn react native to make mobile App in both ios and android.
        </article>
        <div class="flex flex-col desktop:flex-row mx-2 desktop:mx-0 mt-6 items-start">
        <div 
          class="flex desktop:justify-start w-11/12 desktop:w-2/5 ease-in-out duration-500 delay-500 transform"
          v-observe-visibility="aboutImgVisibilityChanged"
          :class="[aboutImgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10']"
        >
            <img 
              src="/img/profile-hei.jpg" 
              provider="static"
              class="desktop:w-11/12 z-0"
            />
          </div>
        <div 
          class="ease-in-out duration-500 delay-300 desktop:w-3/5 mt-6 desktop:mt-0 transform"
          v-observe-visibility="aboutDetailVisibilityChanged"
          :class="[aboutDetailVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10']"
        >
        <h1 class="font-medium text-3xl text-dark-blue pb-4 ml-0 dekstop:ml-5">Web Developer</h1>
        <article class="dekstop:mx-2 font-normal font-open_sans font-light">
          I build things for the web.
        </article>
        <ul class='bx-ul bx-xs desktop:grid desktop:grid-cols-2 desktop:pt-4'>
          <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
            <span class="-ml-6 font-normal text-base pr-2">Phone:</span>
            <span class="font-open_sans font-light text-base">55463085</span>
          </li>
          <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
            <span class="-ml-6 font-normal text-base pr-2">Town:</span>
            <span class="font-open_sans font-light text-base">Kwai Chung</span>
          </li>
          <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
            <span class="-ml-6 font-normal text-base pr-2">Website:</span>
            <span class="font-open_sans font-light text-base">portfolio.hei.ninja</span>
          </li>
          <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
            <span class="-ml-6 font-normal text-base pr-2">Email:</span>
            <span class="font-open_sans font-light text-base">shinghei.yeung@gmail.com</span>
          </li>
          <li class="ml-2 desktop:ml-4 py-2"><i class='bx bx-chevron-right text-custom-sky bx-md -mt-4 -pr-4'></i>
            <span class="-ml-6 font-normal text-base pr-2">Freelance:</span>
            <span class="font-open_sans font-light text-base">Available</span>
          </li>
        </ul>
        <article class=" my-3 desktop:mx-2 font-normal font-open_sans font-light">
          I work at Cheung Sha Wan Government Offices as a programmer, develop a internal control system in JAVA
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
          The skills set which for my web development are listed below:
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
                  <span>CSS / Tailwind CSS / SCSS</span>
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
                  <span>Vue / Nuxt</span>
                  <span class="text-right">80%</span>
                </div>
                <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                  <div 
                    class="h-2.5" 
                    style="width: 80%"
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
  
              <div>
                <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                  <span>GitHub / Console</span>
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
                  <span>ORM / SQL</span>
                  <span class="text-right">85%</span>
                </div>
                <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                  <div 
                    class="h-2.5" 
                    style="width: 85%"
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
              <div>
                <div class="grid grid-cols-2 font-roboto text-xs pb-1">
                  <span>React Native</span>
                  <span class="text-right">80%</span>
                </div>
                <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                  <div 
                    class="h-2.5" 
                    style="width: 80%"
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
                  <span>Node.js</span>
                  <span class="text-right">75%</span>
                </div>
                <div class="w-full bg-sky-100  h-2.5 overflow-x-hidden">
                  <div 
                    class="h-2.5" 
                    style="width: 75%"
                  >
                    <div 
                      class="bg-sky-400 h-full w-full ease-in-out delay-500 duration-1000 transition transform"
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
          My professional experience and education information listed below for your reference.
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
              <div class="text-black font-roboto text-xl font-medium -mt-5">Web Developer</div>
              <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2022(Aug) - Present</div>
              <div class="text-black font-open_sans text-base font-normal pt-2 italic">Open Creative Limited</div>
              <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-8">
                <li class="my-2">Develop Website for clients</li>
                <li class="my-2">Understanding clients requirements, dev/prod servers setup</li>
              </ul>
            </div>
            <div class="border-l-2 border-dark-blue px-6 pb-1">
              <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
              <div class="text-black font-roboto text-xl font-medium -mt-5">Programmer</div>
              <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2022/4 - 2022/7</div>
              <div class="text-black font-open_sans text-base font-normal pt-2 italic">Speedy Group Corporation Limited</div>
              <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-8">
                <li class="my-2">Working at Student Finance Office</li>
                <li class="my-2">In-house software development</li>
              </ul>
            </div>
            <div class="border-l-2 border-dark-blue px-6 pb-1">
              <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
              <div class="text-black font-roboto text-xl font-medium -mt-5">Web Developer</div>
              <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2010 - 2012</div>
              <div class="text-black font-open_sans text-base font-normal pt-2 italic">Joyaether Ltd</div>
              <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-2">
                <li class="my-2">Understanding clients requirements, dev/prod servers setup</li>
                <li class="my-2">Develop data fetching API for teammate</li>
                <li class="my-2">Assist in maintaining Linux servers</li>
              </ul>
            </div>
          </div>
          
          <div
            class="pb-2 desktop:pb-0 ease-in-out delay-500 duration-1000 transition transform"
            v-observe-visibility="resume2VisibilityChanged"
            :class="[resume2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            <div class="text-black font-roboto text-2xl font-medium pb-4">Education</div>
            <div class="border-l-2 border-dark-blue px-6 pb-1">
              <div class="relative border-2 border-dark-blue rounded-full w-4 h-4 -ml-8 -mt-2 bg-white" />
              <div class="text-black font-roboto text-xl font-medium -mt-5">Higher Diploma in Enterprise Computing</div>
              <div class="text-black font-open_sans text-base font-medium pt-2 pl-2">2006</div>
              <div class="text-black font-open_sans text-base font-normal pt-2 italic">Hong Kong Institute of Vocational Education</div>
              <ul class="list-disc ml-4 pt-2 font-open_sans text-base font-normal pb-2">
                <li class="my-2">Learn Programming with JAVA</li>
                <li class="my-2">Study concepts of OOP</li>
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
          My porfolio are shown below.
        </article>
        <div 
          class="justify-items-center grid grid-cols-1 desktop:grid-cols-3 gap-y-6 desktop:pl-2 pb-20 pt-10 ease-in-out delay-300 duration-1000 transition transform"
          v-observe-visibility="portfolioVisibilityChanged"
          :class="[portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
        >
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/1.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 0)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/1" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/2.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 1)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/2" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/3.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 2)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/1" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/4.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 3)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/1" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/5.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 4)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/1" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
          <div 
            class="w-11/12 text-white overflow-y-hidden group"
          >
            <nuxt-img 
              src="/portfolio/6.png" 
              provider="static"
              preload
              class="w-full group-hover:opacity-50"
            />
            <div class="w-full h-0 flex flex-row justify-center content-center ease-in-out duration-150 transition transform text-white -translate-y-2 group-hover:-translate-y-12">
              <div 
                class="h-10 bg-custom-sky w-1/2 flex text-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
                @click="setpfBackdropOpen(true, 5)"
              >
                <div class="bx bx-sm bx-plus h-6 my-2" />
              </div>
              <NuxtLink 
                to="/portfolios/1" 
                class="h-10 bg-custom-sky w-1/2 flex content-center justify-center mt-2 cursor-pointer opacity-70 hover:opacity-90"
              >
                <div class="bx bx-sm bx-link h-6 my-auto" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section 
        class="w-full px-2 desktop:px-8 desktop:min-h-screen pb-20 desktop:pb-4" 
        id="contact"
      >
        <h1 class="font-medium text-3xl text-dark-blue pb-4 mt-14 ml-2 dekstop:ml-5">Contact</h1>
        <div class="border-b-3 border-sky-400 w-14 ml-2 mb-5" />
        <article class="mx-2 font-normal font-open_sans font-light">
          Send me a mail or fill in your info. in the form below and I look forward to hearing from you!
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
                  <div class="font-open_sans font-light text-sm">Kwai Chung, N.T., Hong Kong</div>
                </div>
              </li>
             <li class="flex flex-row mb-6">
                <div>
                  <div class="bx bx-envelope bx-sm text-custom-sky bg-light-sky rounded-full p-3" />
                </div>
                <div class="flex flex-col ml-4">
                  <div class="font-normal text-2xl pr-2">Email:</div>
                  <div class="font-open_sans font-light text-sm">shinghei.yeung@gmail.com</div>
                </div>
              </li>
              <li class="flex flex-row mb-6">
                <div>
                  <div class="bx bx-phone bx-sm text-custom-sky bg-light-sky rounded-full p-3" />
                </div>
                <div class="flex flex-col ml-4">
                  <div class="font-normal text-2xl pr-2">Phone / Whatsapp:</div>
                  <div class="font-open_sans font-light text-sm">55463085</div>
                </div>
              </li>
            </ul>
            <div class="">
              <GMap
                ref="gMap"
                language="zh"
                :center="{lat: locations[0].coords.lat, lng: locations[0].coords.lng}"
                :zoom="18"
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
                <input type="text" name="name" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" :readonly="contractFormBusy" />
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
                <input type="text" name="email" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" :readonly="contractFormBusy" />
              </div>
              <!--<div class="desktop:col-span-2">
                <div class="pb-1 flex flex-row">
                  <span class="whitespace-nowrap flex items-end">Subject</span>
                  <span
                    :class="[contactErrors.subject!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                  >
                    {{contactErrors.subject}}
                  </span>
                </div>
                <input type="text" name="subject" class="border border-gray-400 w-full h-10 px-4 focus:border-custom-sky" />
              </div>-->
              <div class="desktop:col-span-2">
                <div class="pb-1 flex flex-row">
                  <span class="whitespace-nowrap flex items-end">Message</span>
                  <span
                    :class="[contactErrors.message!='' ? 'text-red-600 text-sm italic pl-2 leading-6' : 'hidden']"
                  >
                    {{contactErrors.message}}
                  </span>
                </div>
                <textarea name="message" class="border border-gray-400 w-full h-52 px-4 focus:border-custom-sky" :readonly="contractFormBusy" />
              </div>
              <div class="desktop:col-span-2 flex flex-row justify-center">
                <div 
                  class="bg-custom-sky text-white px-4 rounded hover:opacity-70 cursor-pointer flex flex-row w-min whitespace-nowrap" 
                  @click="contactValidation"
                  :class="[contractFormBusy ? 'pt-2 pb-1' : 'pt-2 pb-2']"
                >
                  <div :class="[contractFormBusy ? 'block' : 'hidden']">
                  <div 
                    class='bx bx-loader-circle bx-spin bx-sm' 
                    
                  />
                  </div>
                  <span class="ml-1 mt-0.5">Send Message</span>
                </div>
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
  
  
   declare interface BaseComponentData {
    isDarkMode:boolean
    introVisible: boolean
    aboutImgVisible: boolean
    aboutDetailVisible: boolean
    skillBarVisible:boolean
    resumeVisible:boolean
    resume2Visible:boolean
    portfolioVisible:boolean
    contactErrors:{name:string, email:string, subject:string, message:string}
    locations:any[]
    mapOptions:object
    capabilities:object
    pfBackdropOpen: boolean //portfolio
    pfBackdropAnim: boolean
    pfBackdropAnimDo: boolean
    pfBackdropImages: string[]
    pfBackdropDescs: string[]
    pfBackdropContainer0_Index: number
    pfBackdropContainer1_Index: number
    pfBackdropCurrentContainer: number
    pfBackdropNextContainer: number
    pfBackdropMoveAnim: boolean
    pfBackdropMoveDir: number //0 = left, 1 = right
    pfBackdropMoveAnimDo: boolean
    pfBackdropMoveAnimLock: boolean
    contractFormBusy:boolean
    snackOpen: boolean
    snackType: string
    snackMessage: string
    snackAutoCloseTimeout: any
    introTitles: string[]
    introTitlesIndex:number
    introTitleLastIndex:number
    introTitle:string
    introTitleInterval:any
    introTitleDir:number
  }
  
  import { ObserveVisibility } from 'vue-observe-visibility'
  import Vue2TouchEvents from 'vue2-touch-events'
  import Nav from '../components/Nav.vue'
  import Snack from '../components/Snack.vue'
  
  Vue.use(Vue2TouchEvents)
  Vue.directive('observe-visibility', ObserveVisibility)
  export default Vue.extend({
    name: 'Portfolio',
    layout: 'default',
    components: {
      Nav,
      Snack
    },
    data(): BaseComponentData {
      return {
        
        isDarkMode: false,
        introVisible:false,
        aboutImgVisible:false,
        aboutDetailVisible:false,
        skillBarVisible:false,
        resumeVisible:false,
        resume2Visible:false,
        portfolioVisible:false,
        
        contactErrors:{
          name:'',
          email:'',
          subject:'',
          message:''
        },
        pfBackdropOpen: false,
        pfBackdropAnim: false,
        pfBackdropAnimDo: false,
        pfBackdropImages: ['/portfolio/1.png', '/portfolio/2.png', '/portfolio/3.png', '/portfolio/4.png', '/portfolio/5.png', '/portfolio/6.png'],
        pfBackdropDescs: ['very good', 'goooood', 'yes yes', 'lol', 'wow', 'so far so good'],
        pfBackdropContainer0_Index: 0,
        pfBackdropContainer1_Index: 5,
        pfBackdropCurrentContainer:0,
        pfBackdropNextContainer:1,
        pfBackdropMoveAnim:false,
        pfBackdropMoveDir:1,
        pfBackdropMoveAnimDo: false,
        pfBackdropMoveAnimLock: false,
        contractFormBusy:false,
        locations:[
          {"title":"葵聯邨聯逸樓","address1":"香港葵涌葵盛圍","coords":{"lat":22.361802297540137,"lng":114.12586327790989},"placeId":"ChIJbyr84JX4AzQRRjDmwoKaPK0"}
        ],
        mapOptions: {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
        capabilities: {"input":true,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false},
        snackOpen:false,
        snackType:'normal',
        snackMessage:'',
        snackAutoCloseTimeout: null,
        introTitles:['Web Developer', 'Full Stack Developer', 'Programmer'],
        introTitlesIndex:0,
        introTitleLastIndex:0,
        introTitle:'',
        introTitleInterval:null,
        introTitleDir:1
      }
    },
    watch: {
      'introVisible': 
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
      this.$nuxt.$emit('topEleQueryChange', '#intro_title');
      this.introTitleUpdate();
      this.registtIntroTitleInterval(200);
    },
    methods: 
    {
      registtIntroTitleInterval(speed:number)
      {
        let that = this;
        this.introTitleInterval = setInterval(function(){
            that.introTitleUpdate();
        }.bind(this), speed);
      },
      introTitleUpdate()
      {
        let str = this.introTitles[this.introTitlesIndex];
        
        this.introTitle = str.substring(0, this.introTitleLastIndex);
  
        //console.log("length: "+this.introTitles[this.introTitlesIndex].length +", index: "+this.introTitleLastIndex);
        if(this.introTitleDir==1)
          this.introTitleLastIndex++;
        else this.introTitleLastIndex--;
  
        if(this.introTitleLastIndex > str.length)
        {
          let that = this;
          clearInterval(this.introTitleInterval);
          this.introTitleDir = 0;
          this.introTitleLastIndex = str.length -1;
          setTimeout(function () { that.registtIntroTitleInterval(70) }.bind(this), 1200);
        }
        else if(this.introTitleLastIndex <0)
        {
          let that = this;
          clearInterval(this.introTitleInterval);
          this.introTitleDir = 1;
          this.introTitleLastIndex =0;
          this.introTitlesIndex++;
          if(this.introTitlesIndex>this.introTitles.length-1) this.introTitlesIndex = 0;
          setTimeout(function () { that.registtIntroTitleInterval(200) }.bind(this), 1000);
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
  
        if(this.contractFormBusy) return;
        let error = 0;
        let name = this.contactValidation_name();
        let email = this.contactValidation_email();
        //let subject = this.contactValidation_subject();
        let message = this.contactValidation_message();
  
        let nameEle: HTMLInputElement = document.querySelector('input[name="name"]')!;
        let emailEle: HTMLInputElement = document.querySelector('input[name="email"]')!;
        //let subjectEle: HTMLInputElement = document.querySelector('input[name="subject"]')!;
        let messageEle: HTMLTextAreaElement = document.querySelector('textarea[name="message"]')!;
  
        if(name!=''){ this.contactErrors.name = name; error++;}
        else this.contactErrors.name = '';
  
        if(email!=''){ this.contactErrors.email = email; error++;}
        else this.contactErrors.email = '';
  
        //if(subject!=''){ this.contactErrors.subject = subject; error++;}
        //else this.contactErrors.subject = '';
        if(message!=''){ this.contactErrors.message = message; error++;}
        else this.contactErrors.message = '';
        if(error>0)
        {
          this.snackType = 'error';
          this.snackMessage = 'Please check the form carefully for errors!';
          this.snackOpen = true;
        }
        else
        {
          //console.log('???'+process.env.strapiBaseUrl+ '/api/portfolio-contacts');
          //return;
          let url:string  = process.env.strapiBaseUrl + '/api/portfolio-contacts';
          let data = {
            name: nameEle.value, email: emailEle.value, message: messageEle.value
          }
          this.contractFormBusy = true;
          this.$axios.post(url,{
            data
          }).then(respons =>{
            this.snackType  = 'normal';
            this.snackMessage = 'Message sent successfully! Thanks for your enquiry!';
            this.snackOpen = true;
            this.contractFormBusy = false;
          })
          .catch(error=>{
            this.snackType  = 'error';
            this.snackMessage = 'Something went wrong, please try again later, sorry for the inconvenience.';
            this.snackOpen = true;
            this.contractFormBusy = false;
          })
        }
      },
      setpfBackdropOpen (open:boolean, index:number)
      {
        if(index>=0) this.setCurrentContainerImgIndex(index);
        this.pfBackdropOpen = open;
        this.pfBackdropAnim = true;
        let that = this;
        setTimeout(function () { that.pfBackdropAnimDo = true }.bind(this), 50);
        if(!open)
          setTimeout(function () { 
            that.pfBackdropAnimDo = false; 
            that.pfBackdropAnim = false; 
          }.bind(this), 600);
      },
      setCurrentContainerImgIndex(index:number)
      {
        if(this.pfBackdropCurrentContainer==0) this.pfBackdropContainer0_Index = index;
        else this.pfBackdropContainer1_Index = index;
      },
      getCurrentContainerImgIndex():number
      {
        if(this.pfBackdropCurrentContainer==0) return this.pfBackdropContainer0_Index
        else return this.pfBackdropContainer1_Index
      },
      getContainerImgIndex(containerIndex: number):number
      {
        if(containerIndex==0) return this.pfBackdropContainer0_Index
        else return this.pfBackdropContainer1_Index
      },
      getPfImgSrc(containerIndex: number)
      {
        return this.pfBackdropImages[this.getContainerImgIndex(containerIndex)];
      },
      getPfDesc(containerIndex: number)
      {
        return this.pfBackdropDescs[this.getContainerImgIndex(containerIndex)];
      },
      pfBackdropNext()
      {
        this.pfBackdropMove(0);
      },
      pfBackdropPrev()
      {
        this.pfBackdropMove(1);
      },
      pfBackdropImgIndexAdd(i:number):number
      {
        return i>=5 ? 0 : i+1;
      },
      pfBackdropImgIndexLess(i:number):number
      {
        return i<=0 ? 5 : i-1;
      },
      pfBackdropMove(dir:number)
      {
        if(this.pfBackdropMoveAnimLock) return;
        this.pfBackdropMoveAnimLock = true;
        this.pfBackdropMoveDir = dir;
        this.pfBackdropMoveAnim = true;
        this.pfBackdropMoveAnimDo = false;
        this.pfBackdropNextContainer = this.pfBackdropCurrentContainer==0 ? 1 : 0;
        if(this.pfBackdropCurrentContainer==0) this.pfBackdropContainer1_Index = dir==0 ? this.pfBackdropImgIndexAdd(this.getCurrentContainerImgIndex()) : this.pfBackdropImgIndexLess(this.getCurrentContainerImgIndex());
        else this.pfBackdropContainer0_Index = dir==0 ? this.pfBackdropImgIndexAdd(this.getCurrentContainerImgIndex()) : this.pfBackdropImgIndexLess(this.getCurrentContainerImgIndex());
        setTimeout(() => this.pfBackdropMoveAnimDo = true, 100);
        setTimeout(() => this.setPfBackdropMoveAnimEnd(), 600);
      },
      setPfBackdropMoveAnimEnd()
      {
        this.pfBackdropMoveAnim = false;
        this.pfBackdropMoveAnimDo = false;
        this.pfBackdropCurrentContainer = this.pfBackdropCurrentContainer==0 ? 1 : 0;
        this.pfBackdropMoveAnimLock = false;
      },
      getContainer0MoveAnim():string
      {
        return this.getContainerMoveAnim(0);
      },
      getContainer1MoveAnim():string
      {
        return this.getContainerMoveAnim(1);
      },
      getContainerMoveAnim(index:number):string
      {
        if (!process.client) return '';
        let containerEle: HTMLDivElement = document.querySelector('#pfBackdropContainer_'+index)!;
        if(containerEle) containerEle.style.transitionDuration = '500ms';
        if(this.pfBackdropMoveAnim && this.pfBackdropCurrentContainer==index )
        {
          if(this.pfBackdropMoveDir==0) return '-translate-x-full opacity-0'
          else return 'translate-x-full opacity-0'
        }
        else if(!this.pfBackdropMoveAnimDo && this.pfBackdropMoveAnim && this.pfBackdropNextContainer==index)
        {
          if(containerEle) containerEle.style.transitionDuration = '0s';
          if(this.pfBackdropMoveDir==0) return 'translate-x-full opacity-0'
          else return '-translate-x-full opacity-0'
  
        }
        else if(this.pfBackdropMoveAnim && this.pfBackdropMoveAnimDo && this.pfBackdropNextContainer==index)
        {
          if(this.pfBackdropMoveDir==0) return 'translate-x-0 opacity-100'
          else return '-translate-x-0 opacity-100'
        }
  
        return this.pfBackdropCurrentContainer==index ? 'opacity-100' : 'opacity-0';
      },
      pfBackdropSwipeLeftHandler()
      {
        this.pfBackdropMove(0);
      },
      pfBackdropSwipeRightHandler()
      {
        this.pfBackdropMove(1);
      },
      setSnackOpen (v:boolean)
      {
        if(this.snackAutoCloseTimeout!=null) clearTimeout(this.snackAutoCloseTimeout);
        this.snackOpen = v;
        //console.log(v);
        if(v)
        {
          let that = this;
          this.snackAutoCloseTimeout = setTimeout(
            function () {
               that.setSnackOpen(false); that.snackAutoCloseTimeout = null; 
            }.bind(this)
          , 6000);
        }
      }
    }
  })
  </script>
  <style module>
  
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
      5%, 10% { width: 3ch }
      15%, 20% { width: 3ch }
      25%, 30% { width: 6ch }
      35%, 40% { width: 5ch }
      45%, 50% { width: 9ch }
      55%, 60% { width: 9ch }
      65%, 70% { width: 10ch }
      75%, 80% { width: 11ch }
      85%, 90% { width: 13ch }
      100% { width: 13ch }
    }
    .textShadow
    {
      /* text-shadow: -1px -1px 0 #b3afaf, 1px -1px 0 #b3afaf, -1px 1px 0 #b3afaf, 1px 1px 0 #b3afaf; */
      text-shadow: #000 0px 0px 1px;
      -webkit-font-smoothing: antialiased;
    };
    
  </style>
  