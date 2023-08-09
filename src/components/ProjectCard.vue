<template>
  <a class="rounded-md shadow" :href="project.link" target="_blank">
    <img
      class="rounded-md"
      :src="`src/assets/img/projects/${project.src}`"
      :alt="project.alt"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
});
</script>

<script lang="ts" setup>
import { ProjectData } from "@/types";

defineProps<{
  project: ProjectData;
}>();
</script>
