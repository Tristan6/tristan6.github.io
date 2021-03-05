<template>
  <div id="projects" class="pt-8 h-full">
    <h2 class="text-black text-left text-3xl font-bold pb-4">
      Development Projects
    </h2>
    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-12">
      <project
        v-for="proj in projects"
        :key="proj.href"
        :altText="proj.alt"
        :imgSrc="proj.src"
        :link="proj.href"
      ></project>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Project, { ProjectData } from './Project.vue'
export * from './Projects.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    Project
  },
  data () {
    return {
      proy: {
        altText:
          'A preview screenshot linking to my private messaging web app, Cleartrace',
        imgSrc: 'project-0.png',
        link: 'https://slack.tristanmacelli.com/'
      },
      imgSrc: '@/assets/img/projects/project-0.png',
      alts: [
        'A preview screenshot linking to my private messaging web app, Cleartrace',
        'A preview screenshot linking to my Postcomet website',
        'A preview screenshot linking to my Caucus Connect website',
        'A preview screenshot linking to my Memory game website',
        'A preview screenshot linking to my Album Finder website',
        'A preview screenshot linking to my PathFinder website'
      ],
      links: [
        'https://slack.tristanmacelli.com/',
        'https://www.postcomet.com/',
        'https://info343-su18.github.io/promo-Tristan6/',
        'https://info343-su18.github.io/game-Tristan6/',
        'https://info343-su18.github.io/data-explorer-Tristan6/',
        'https://tristan6.github.io/info343-group-project/'
      ],
      srcs: [
        'project-0.png',
        'project-1.png',
        'project-2.png',
        'project-3.png',
        'project-4.png',
        'project-5.png'
      ],
      projects: [] as ProjectData[]
    }
  },
  created: function () {
    this.links.forEach((link, i) => {
      const proj: ProjectData = {
        href: link,
        alt: this.alts[i],
        src: this.srcs[i]
      }
      this.projects.push(proj)
    })
    console.log(this.proy.imgSrc)
  }
})
</script>
