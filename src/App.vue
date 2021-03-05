<template>
  <div class="h-screen pt-10">
    <Navigation />
    <div class="flex flex-col gap-y-40 px-10 sm:px-80">
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script lang="ts">
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Navigation from './components/Navigation.vue'
import Projects from './components/Projects.vue'
import { defineComponent } from 'vue'
export * from './App.vue'

export default defineComponent({
  name: 'App',
  components: {
    About,
    Contact,
    Navigation,
    Projects
  }
})
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
