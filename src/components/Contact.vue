<template>
  <div id="contact" class="flex flex-col">
    <SectionHead sectionTitle="Contact">
      If you have any questions regarding the projects listed here or just want to say hello,
      feel free to contact me
    </SectionHead>
    <a
      href="mailto:tristanmacelli@gmail.com"
      class="hover:underline font-bold text-left text-highlight"
    >
      tristanmacelli@gmail.com
    </a>
    <div class="pt-10">
      <p class="pb-4 self-center sm:float-left text-gray-400">
        &#169; 2021 Tristan Macelli. Built with
        <a
          class="underline text-gray-500 hover:text-gray-600"
          href="http://vuejs.org/"
        >
          Vue</a> &amp;
        <a
          class="underline text-gray-500 hover:text-gray-600"
          href="https://tailwindcss.com/"
        >
          TailwindCSS</a>.
      </p>
      <div class="flex gap-x-2 justify-center sm:float-right">
        <a
          class="focus:outline-none hover:bg-gray-200 border-0 rounded-3xl"
          href="https://www.linkedin.com/in/tristan-macelli/"
          target="_blank"
        >
          <img class="p-2 w-10 h-10" src="@/assets/img/icons/linkedin.png" alt="">
        </a>
        <a
          class="focus:outline-none hover:bg-gray-200 border-0 rounded-3xl"
          href="https://www.facebook.com/tristan.macelli"
          target="_blank"
        >
          <img class="p-2 w-10 h-10" src="@/assets/img/icons/facebook.png" alt="">
        </a>
        <a
          class="focus:outline-none hover:bg-gray-200 border-0 rounded-3xl"
          href="https://github.com/tristanmacelli"
          target="_blank"
        >
          <img class="p-2 w-10 h-10" src="@/assets/img/icons/github.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionHead from '../components/SectionHead.vue'
export * from './Contact.vue'

export default defineComponent({
  name: 'ContactSection',
  components: {
    SectionHead
  }
})
</script>
