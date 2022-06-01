<template>
    <div
        class="fixed right-6 desktop:right-10 bottom-6 border pl-4 pr-2 rounded flex flex-row items-center ease-in-out duration-300 transition transform z-20"
        :class="[open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        , type=='normal' ? 'bg-light-light-green text-green border-green' : 'bg-red-100 border-red-400 text-red-700']"
    >
        <span 
            class="bx bx-xs py-3 pr-4"
            :class="[type=='normal' ? 'bx-check' : 'bx-error']"
        />
        <span class="leading-5 py-2">{{message}}</span>
        <span 
            class="text-light-gray cursor-pointer h-10 flex items-center px-2"
        >
        <span 
            class="bx bx-xs bx-x"
            @click="$emit('setOpen', false)"
        />
        </span>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
 declare interface BaseComponentData {
     autoCloseTimeout:any
 }

export default Vue.extend({
  name: 'snack',
  props: ['open', 'type', 'message'],
  data(): BaseComponentData {
      return {
        autoCloseTimeout: null,
      }
  },
  methods: {
   
  }
})
</script>