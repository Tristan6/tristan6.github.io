<template>
    <div id="portfolio" class="">
      <Navigation />
      <div class="flex flex-col gap-y-20 max-w-screen-lg mx-auto px-4">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import About from '@/components/About.vue'
  import Contact from '@/components/Contact.vue'
  import Navigation from '@/components/Navigation.vue'
  import Projects from '@/components/Projects.vue'
  import { defineComponent } from 'vue'
  export * from './Portfolio.vue'
  
  export default defineComponent({
    name: 'PortfolioView',
    components: {
      About,
      Contact,
      Navigation,
      Projects
    }
  })
  </script>
  
  <style>
  #portfolio {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  