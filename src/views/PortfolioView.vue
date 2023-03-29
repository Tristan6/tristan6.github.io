<template>
    <div id="portfolio" class="">
      <Navigation />
      <div class="flex flex-col gap-y-20 max-w-screen-lg mx-auto px-4">
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import About from '@/components/AboutSection.vue'
  import Contact from '@/components/ContactSection.vue'
  import Navigation from '@/components/NavigationBar.vue'
  import Project from '@/components/ProjectSection.vue'
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
  