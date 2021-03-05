<template>
  <div id="about" class="h-full flex flex-col sm:flex-row gap-y-10 sm:gap-x-20">
      <div class="order-last sm:order-none flex-grow pt-20">
        <h1 class="text-black text-left text-3xl sm:text-6xl text">Hi, I'm <br/>
        <strong class="text-purple-700">Tristan Macelli</strong>.</h1>
        <p class="text-justify">
          I graduated from the University of
          Washington (Go Dawgs!) with a B.S. in Informatics in June 2020. I am currently working full-time for
          Saama Technologies as an Associate Consultant. I'm always open to opportunities,
          especially any Full-Time Software Engineering or Data Science positions. My goal
          is to work for a utilitarian technology company creating products or services that
          respect peoples capabilities and care about their impact on the world. Click the
          buttons in the navigation bar above to learn more about my projects or reach out to me.
        </p>
      </div>
      <div class="self-center w-2/3 bg-purple-800">
        <img
          class=" transform translate-x-5 translate-y-3"
          src="@/assets/img/me/UWJuniorComposite350.jpg"
          alt="A picture of myself, Tristan Macelli"
        >
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export * from './About.vue'

export default defineComponent({
  name: 'About'
})
</script>
