<template>
  <a
    class="rounded-md shadow"
    :href="link"
    target="_blank">
    <img
      class="rounded-md"
      :src="require('@/assets/img/projects/' + imgSrc)"
      :alt="altText"
    >
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export class ProjectData {
  public alt: string;
  public href: string;
  public src: string;

  constructor (alt: string, href: string, src: string) {
    this.alt = alt
    this.href = href
    this.src = src
  }
}

export default defineComponent({
  name: 'Project',
  props: {
    altText: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  created: function () {
    // console.log('this.altText', this.altText)
    // console.log('this.imgSrc', this.imgSrc)
    // console.log('this.link', this.link)
  }
})
</script>
