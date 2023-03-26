<template>
  <main class="h-full">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export * from './App.vue'

export default defineComponent({
  name: 'App'
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
