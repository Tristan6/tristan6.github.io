<template>
  <div class="">
    <Navigation />
    <main class="flex flex-col gap-y-40 max-w-screen-lg mx-auto px-4">
      <About />
      <Projects />
      <Contact />
    </main>
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
