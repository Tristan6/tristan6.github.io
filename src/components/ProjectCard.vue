<template>
  <a
    class="rounded-md shadow"
    :href="project.link"
    target="_blank"
  >
    <img
      class="rounded-md"
      :src="require('@/assets/img/projects/' + project.src)"
      :alt="project.alt"
    >
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard'
})
</script>

<script lang="ts" setup>
import { defineProps } from 'vue';

export interface ProjectData {
  alt: string;
  link: string;
  src: string;
}

defineProps<{
  project: ProjectData
}>()
</script>
