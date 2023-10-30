<template>
  <button
    class="w-52 px-5 py-2 rounded-sm text-lg text-white cursor-pointer hover:underline bg-darkSand"
    @click="downloadPdf"
  >
    Download Resume
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PdfDownloadButton",
});
</script>

<script lang="ts" setup>
const props = defineProps<{
  pdfUrl: string;
  pdfFileName: string;
}>();

const downloadPdf = () => {
  // create element <a> for download PDF
  const link = document.createElement("a");
  link.href = props.pdfUrl;
  link.target = "_blank";
  link.download = props.pdfFileName;
  // Simulate a click on the element <a>
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
