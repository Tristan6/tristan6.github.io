<template>
  <div class="h-screen w-screen grid">
    <h1
      class="justify-self-center self-center text-2xl text-center px-10 py-6 bg-slate-100 shadow-md rounded-md"
    >
      <strong class="text-red-600 font-bold">404</strong>
      | Not Found
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>
