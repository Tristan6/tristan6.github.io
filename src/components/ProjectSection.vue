<template>
  <div id="projects" class="pt-8 h-full">
    <SectionHead sectionTitle="Development Projects">
      Here is a collection of projects I have contributed to. You can find more on my
      <a
        class="text-highlight hover:underline"
        href="https://github.com/tristanmacelli"
        target="_blank"
      >
      GitHub</a>.
    </SectionHead>
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-12">
      <ProjectCard
        v-for="proj in projects"
        :key="proj.link"
        :project="proj"
      ></ProjectCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectSection'
})
</script>

<script lang="ts" setup>
import ProjectCard, { ProjectData } from './ProjectCard.vue'
import SectionHead from '@/components/SectionHead.vue'

const projects: ProjectData[] = [
  {
    alt: 'A preview screenshot linking to my private messaging web app, Cleartrace',
    link: 'https://slack.tristanmacelli.com/',
    src: 'project-0.png',
  },
  {
    alt: 'A preview screenshot linking to my Postcomet website',
    link: 'https://www.postcomet.com/',
    src: 'project-1.png',
  },
  {
    alt: 'A preview screenshot linking to my Caucus Connect website',
    link: 'https://info343-su18.github.io/promo-Tristan6/',
    src: 'project-2.png',
  },
  {
    alt: 'A preview screenshot linking to my Memory game website',
    link: 'https://info343-su18.github.io/game-Tristan6/',
    src: 'project-3.png',
  },
  {
    alt: 'A preview screenshot linking to my Album Finder website',
    link: 'https://info343-su18.github.io/data-explorer-Tristan6/',
    src: 'project-4.png',
  },
  {
    alt: 'A preview screenshot linking to my PathFinder website',
    link: 'https://tristan6.github.io/info343-group-project/',
    src: 'project-5.png',
  }
];
</script>
