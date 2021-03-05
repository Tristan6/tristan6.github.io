<template>
  <div class="py-6">
      <h2 class="text-black text-left text-3xl font-bold">
        {{ sectionTitle }}
      </h2>
      <p class="text-left">
        <slot></slot>
      </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SectionHead',
  props: {
    sectionTitle: {
      type: String,
      required: true
    }
  }
})
</script>
