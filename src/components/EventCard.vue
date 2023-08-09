<template>
  <div class="grid bg-zinc-600 pt-4 px-5">
    <img
      class="h-fit rounded-md"
      :src="`src/assets/img/events/${event.src}`"
      :alt="event.alt"
    />
    <button
      class="justify-self-center text-zinc-300 font-semibold bg-black my-3 px-6 py-2 rounded-md drop-shadow-md"
      @click="RouteToEvent"
    >
      More Details
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventCard",
});
</script>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { EventData } from "@/types";

const props = defineProps<{
  event: EventData;
}>();

const router = useRouter();
const RouteToEvent = () => {
  router.push({ path: `/event/${props.event.name}` });
};
</script>
