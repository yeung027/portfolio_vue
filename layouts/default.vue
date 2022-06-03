<template>
    <div>
        <Nav 
            :isMobileMenuOpen="isMobileMenuOpen" 
            :currentSection="currentSection" 
            :topEleQuery="topEleQuery"
            :topVisible="topVisible"
            @menuItemClick="menuItemClick" 
            @menuBtnClick="menuBtnClick" 
        />
        <Nuxt 
            @topVisibleChange="topVisibleChange" 
            @topEleQueryChange="topEleQueryChange" 
        />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data()
    {
        return {
            isMobileMenuOpen: false,
            currentSection:'intro',
            topEleQuery: '',
            topVisible:true
        }
    },
    created() {
        this.$nuxt.$on('topVisibleChange', (v:boolean, $event:any) => this.topVisibleChange(v, $event));
        this.$nuxt.$on('topEleQueryChange', (v:string, $event:any) => this.topEleQueryChange(v, $event));
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
        topVisibleChange(v:boolean, e:Event)
        {
            this.topVisible = v;
        },
        topEleQueryChange(v:string, e:Event)
        {
            this.topEleQuery = v;
        }
    }
})
</script>