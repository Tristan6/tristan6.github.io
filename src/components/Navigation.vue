<template>
  <header class="w-full h-16 z-10 fixed top-0 left-0 bg-gray-200">
    <div class="my-auto">
      <nav class="pt-4 sm:mx-80">
        <p class="w-32 py-1 sm:float-left cursor-pointer text-purple-700 font-bold">
          Tristan Macelli
        </p>
        <ul class="w-min sm:float-right flex gap-x-6 list-none m-0">
          <li class="nav-btn">
            <a href="#about">
              Home
            </a>
          </li>
          <li class="nav-btn">
            <a href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-btn">
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export * from './Navigation.vue'

export default defineComponent({
  name: 'Navigation'
})
</script>

<style scoped>
  .nav-btn {
    @apply w-min px-2 py-1 rounded-md sm:inline-block font-semibold text-gray-600 hover:bg-gray-300 cursor-pointer hidden;
  }
</style>
