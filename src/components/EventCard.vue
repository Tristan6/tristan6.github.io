<template>
    <div class="grid bg-zinc-600 pt-4 px-5">
      <img
        class="h-fit rounded-md"
        :src="require('@/assets/img/events/' + imgSrc)"
        :alt="altText"
      >
      <button
        class="justify-self-center text-zinc-300 font-semibold bg-black my-3 w-fit h-fit px-6 py-2 rounded-md drop-shadow-md"
        @click="RouteToEvent"
      >
      More Details
      </button>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from "vue-router";

  export class EventData {
    public alt: string;
    public name: string;
    public src: string;
  
    constructor (alt: string, name: string, src: string) {
      this.alt = alt
      this.name = name
      this.src = src
    }
  }
  
  export default defineComponent({
    name: 'EventCard',
    props: {
      altText: {
        type: String,
        required: true
      },
      imgSrc: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const router = useRouter();
      const RouteToEvent = () => {
          router.push({ path: `/event/${props.name}` });
      };
      return { RouteToEvent };
    }
  })
  </script>
  